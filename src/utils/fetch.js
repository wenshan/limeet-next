/**
 * 封装 Next.js fetch 请求，带有完整调试功能
 * @param {string} url - 请求地址
 * @param {Object} options - fetch配置项
 * @param {Object} options.config - 自定义配置（包含调试选项）
 * @returns {Promise} 响应数据对象
 */
import { notFound } from 'next/navigation';

export async function fetchData(url, { config = {}, ...options } = {}) {
  // 默认配置
  const defaultConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '',
    cache: 'force-cache',
    revalidate: 60,
    server: true,
    errorMessage: '请求数据失败',
    withCredentials: false,
    // 调试配置
    debug: {
      enabled: process.env.NODE_ENV === 'development', // 开发环境默认开启
      logRequest: true, // 打印请求详情
      logResponse: true, // 打印响应详情
      logCache: false, // 打印缓存状态
      logLocalStorage: false // 打印localStorage操作
    },
    // 本地缓存配置
    localCache: {
      enabled: false,
      ttl: 60,
      key: null
    },
    // localStorage相关配置
    localStorage: {
      keys: [],
      merge: {
        enabled: false,
        strategy: 'preserve'
      }
    }
  };

  // 默认请求头
  const defaultHeaders = {
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_API_BASE_URL,
    'Access-Control-Allow-Methods': 'DELETE, HEAD, GET, OPTIONS, POST, PUT',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Headers': 'Content-Type, Content-Range, Content-Disposition, Content-Description',
    'Access-Control-Max-Age': 1728000
  };

  // 服务器端特有请求头
  const serverDefaultHeaders = {
    'X-API-Key': process.env.API_KEY || '',
    'X-Server-Request': 'true'
  };

  // 合并配置
  const { 
    baseURL,
    cache, 
    revalidate, 
    server, 
    errorMessage,
    withCredentials,
    debug,
    localCache,
    localStorage: { keys: localStorageKeys, merge: mergeConfig }
  } = { ...defaultConfig, ...config };

  // 生成缓存键
  const cacheKey = localCache.key || `${url}-${options.method || 'GET'}`;

  // 调试日志工具函数
  const debugLog = (message, data = null) => {
    if (debug.enabled) {
      const prefix = `[fetchData] [${new Date().toISOString()}]`;
      if (data) {
        console.log(`${prefix} ${message}`, data);
      } else {
        console.log(`${prefix} ${message}`);
      }
    }
  };

  try {
    // 1. 调试信息：请求开始
    debugLog(`开始请求: ${url}`, {
      method: options.method || 'GET',
      server,
      cacheStrategy: cache,
      revalidate
    });

    // 2. 客户端读取localStorage数据
    const localStorageData = {};
    if (!server && mergeConfig.enabled && localStorageKeys.length > 0) {
      try {
        localStorageKeys.forEach(key => {
          const storedValue = localStorage.getItem(key);
          if (storedValue !== null) {
            try {
              localStorageData[key] = JSON.parse(storedValue);
            } catch {
              localStorageData[key] = storedValue;
            }
          }
        });
        if (debug.logLocalStorage) {
          debugLog('从localStorage读取的数据', localStorageData);
        }
      } catch (err) {
        debugLog('读取localStorage失败', err);
      }
    }

    // 3. 客户端本地缓存处理
    let cacheHit = false;
    if (!server && localCache.enabled) {
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          const age = Math.floor((Date.now() - timestamp) / 1000);
          
          if (Date.now() - timestamp < localCache.ttl * 1000) {
            cacheHit = true;
            if (debug.logCache) {
              debugLog(`本地缓存命中: ${cacheKey} (缓存年龄: ${age}秒)`, {
                ttl: localCache.ttl,
                timestamp: new Date(timestamp).toISOString()
              });
            }
            return { data, localStorageData, debug: { cacheHit, cacheKey } };
          } else {
            localStorage.removeItem(cacheKey);
            if (debug.logCache) {
              debugLog(`本地缓存过期: ${cacheKey} (已清除)`, { age });
            }
          }
        }
      } catch (err) {
        debugLog('本地缓存读取失败', err);
      }
    }

    // 4. 处理请求URL
    const fullUrl = url.startsWith('http') ? url : `${baseURL}${url}`;
    debugLog(`请求URL处理完成: ${fullUrl}`);

    // 5. 合并localStorage数据到请求中
    let requestBody = options.body;
    const method = (options.method || 'GET').toUpperCase();

    if (!server && mergeConfig.enabled && 
        Object.keys(localStorageData).length > 0 && 
        ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
      
      try {
        const originalData = requestBody 
          ? typeof requestBody === 'string' 
            ? JSON.parse(requestBody)
            : { ...requestBody }
          : {};

        let mergedData;
        if (mergeConfig.strategy === 'override') {
          mergedData = { ...localStorageData, ...originalData };
        } else {
          mergedData = { ...originalData, ...localStorageData };
        }

        requestBody = JSON.stringify(mergedData);
        if (debug.logRequest) {
          debugLog('localStorage数据合并完成', {
            strategy: mergeConfig.strategy,
            originalData,
            mergedData
          });
        }
      } catch (err) {
        debugLog('合并localStorage数据失败', err);
      }
    }

    // 6. 合并请求头
    const headers = {
      ...defaultHeaders,
      ...(server && serverDefaultHeaders),
      ...options.headers
    };

    // 7. 构建fetch选项
    const fetchOptions = {
      ...options,
      headers,
      credentials: withCredentials ? 'include' : 'same-origin',
      ...(requestBody && { body: requestBody }),
      next: {
        ...(options.next || {}),
        cache,
        ...(revalidate > 0 && { revalidate })
      },
      // Next.js 15+ 调试选项
      ...(debug.enabled && { debug: true })
    };

    // 8. 打印请求详情（调试）
    if (debug.logRequest) {
      debugLog('发送请求', {
        url: fullUrl,
        method,
        headers: { ...headers, 'Authorization': headers.Authorization ? '***隐藏***' : undefined }, // 隐藏敏感信息
        cache: fetchOptions.next?.cache,
        revalidate: fetchOptions.next?.revalidate,
        body: method !== 'GET' ? (requestBody ? JSON.parse(requestBody) : undefined) : undefined
      });
    }

    // 9. 执行请求
    const response = await fetch(fullUrl, fetchOptions);
    // 10. 打印响应状态（调试）
    if (debug.logResponse && debug.enabled) {
      debugLog('收到响应', {
        status: response.status,
        statusText: response.statusText,
        url: response.url,
        cacheStatus: response.headers.get('x-nextjs-cache') || 'unknown',
      });
    }

    if (!response.ok) {
      if (debug.enabled){
        debugLog(`请求失败 [${response.status}]`, {
          url: fullUrl,
          statusText: response.statusText
        });
      }

      // 新增404状态处理
      if (response.status === 404) {
        // 对于App Router使用notFound()触发404页面
        // 对于Pages Router可使用router.push('/404')
        notFound();
      }

      throw new Error(`${errorMessage} (${response.status})`);
    }

    // 11. 解析响应数据
    const contentType = response.headers.get('content-type');
    const data = contentType?.includes('application/json') 
      ? await response.json() 
      : await response.text();

    // 12. 打印响应数据（调试，仅打印摘要）
    if (debug.logResponse && debug.enabled) {
      const logData = typeof data === 'object' 
        ? Array.isArray(data) 
          ? `数组 (长度: ${data.length})` 
          : `对象 (属性数量: ${Object.keys(data).length})`
        : `文本 (长度: ${String(data).length})`;
      
      debugLog(`响应数据解析完成: ${logData}`, data);
    }

    // 13. 客户端缓存处理
    if (!server && localCache.enabled) {
      try {
        localStorage.setItem(cacheKey, JSON.stringify({
          data,
          timestamp: Date.now()
        }));
        if (debug.logCache) {
          debugLog(`数据已缓存到localStorage: ${cacheKey}`);
        }
      } catch (err) {
        debugLog('本地缓存存储失败', err);
      }
    }

    return data;

  } catch (error) {
    if (debug.enabled) {
     debugLog(`请求错误: ${error.message}`, error);
    }
   
    if (config.throwError !== false) {
      throw error;
    }
    return {
      status: 201,
      data: null,
    };
  }
}
