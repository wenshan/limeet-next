module.exports = [
"[project]/.next-internal/server/app/home/[lang]/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/utils/fetch.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 封装 Next.js fetch 请求，带有完整调试功能
 * @param {string} url - 请求地址
 * @param {Object} options - fetch配置项
 * @param {Object} options.config - 自定义配置（包含调试选项）
 * @returns {Promise} 响应数据对象
 */ __turbopack_context__.s([
    "fetchData",
    ()=>fetchData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
async function fetchData(url, { config = {}, ...options } = {}) {
    // 默认配置
    const defaultConfig = {
        baseURL: ("TURBOPACK compile-time value", "https://api.limeetpet.com/") || '',
        cache: 'force-cache',
        revalidate: 60,
        server: true,
        errorMessage: '请求数据失败',
        withCredentials: false,
        // 调试配置
        debug: {
            enabled: ("TURBOPACK compile-time value", "development") === 'development',
            logRequest: true,
            logResponse: true,
            logCache: false,
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
        'Access-Control-Allow-Origin': ("TURBOPACK compile-time value", "https://api.limeetpet.com/"),
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
    const { baseURL, cache, revalidate, server, errorMessage, withCredentials, debug, localCache, localStorage: { keys: localStorageKeys, merge: mergeConfig } } = {
        ...defaultConfig,
        ...config
    };
    // 生成缓存键
    const cacheKey = localCache.key || `${url}-${options.method || 'GET'}`;
    // 调试日志工具函数
    const debugLog = (message, data = null)=>{
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
                localStorageKeys.forEach((key)=>{
                    const storedValue = localStorage.getItem(key);
                    if (storedValue !== null) {
                        try {
                            localStorageData[key] = JSON.parse(storedValue);
                        } catch  {
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
                        return {
                            data,
                            localStorageData,
                            debug: {
                                cacheHit,
                                cacheKey
                            }
                        };
                    } else {
                        localStorage.removeItem(cacheKey);
                        if (debug.logCache) {
                            debugLog(`本地缓存过期: ${cacheKey} (已清除)`, {
                                age
                            });
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
        if (!server && mergeConfig.enabled && Object.keys(localStorageData).length > 0 && [
            'POST',
            'PUT',
            'PATCH',
            'DELETE'
        ].includes(method)) {
            try {
                const originalData = requestBody ? typeof requestBody === 'string' ? JSON.parse(requestBody) : {
                    ...requestBody
                } : {};
                let mergedData;
                if (mergeConfig.strategy === 'override') {
                    mergedData = {
                        ...localStorageData,
                        ...originalData
                    };
                } else {
                    mergedData = {
                        ...originalData,
                        ...localStorageData
                    };
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
            ...server && serverDefaultHeaders,
            ...options.headers
        };
        // 7. 构建fetch选项
        const fetchOptions = {
            ...options,
            headers,
            credentials: withCredentials ? 'include' : 'same-origin',
            ...requestBody && {
                body: requestBody
            },
            next: {
                ...options.next || {},
                cache,
                ...revalidate > 0 && {
                    revalidate
                }
            },
            // Next.js 15+ 调试选项
            ...debug.enabled && {
                debug: true
            }
        };
        // 8. 打印请求详情（调试）
        if (debug.logRequest) {
            debugLog('发送请求', {
                url: fullUrl,
                method,
                headers: {
                    ...headers,
                    'Authorization': headers.Authorization ? '***隐藏***' : undefined
                },
                cache: fetchOptions.next?.cache,
                revalidate: fetchOptions.next?.revalidate,
                body: method !== 'GET' ? requestBody ? JSON.parse(requestBody) : undefined : undefined
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
                cacheStatus: response.headers.get('x-nextjs-cache') || 'unknown'
            });
        }
        if (!response.ok) {
            if (debug.enabled) {
                debugLog(`请求失败 [${response.status}]`, {
                    url: fullUrl,
                    statusText: response.statusText
                });
            }
            // 新增404状态处理
            if (response.status === 404) {
                // 对于App Router使用notFound()触发404页面
                // 对于Pages Router可使用router.push('/404')
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
            }
            throw new Error(`${errorMessage} (${response.status})`);
        }
        // 11. 解析响应数据
        const contentType = response.headers.get('content-type');
        const data = contentType?.includes('application/json') ? await response.json() : await response.text();
        // 12. 打印响应数据（调试，仅打印摘要）
        if (debug.logResponse && debug.enabled) {
            const logData = typeof data === 'object' ? Array.isArray(data) ? `数组 (长度: ${data.length})` : `对象 (属性数量: ${Object.keys(data).length})` : `文本 (长度: ${String(data).length})`;
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
            data: null
        };
    }
}
}),
"[project]/src/services/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBanner",
    ()=>getBanner,
    "getBannerServer",
    ()=>getBannerServer,
    "productDetail",
    ()=>productDetail,
    "productDetailServer",
    ()=>productDetailServer,
    "queryProductCategories",
    ()=>queryProductCategories,
    "queryProductCategoriesServer",
    ()=>queryProductCategoriesServer,
    "queryProductGroup",
    ()=>queryProductGroup,
    "queryProductGroupServer",
    ()=>queryProductGroupServer,
    "queryProductList",
    ()=>queryProductList,
    "queryProductListServer",
    ()=>queryProductListServer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/fetch.js [app-rsc] (ecmascript)");
;
const getBanner = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchData"])('api/web/banner/query', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: false,
            cache: 'no-store',
            errorMessage: '获取数据失败',
            localStorage: {
                keys: [
                    'i18nextLng'
                ],
                merge: {
                    enabled: true,
                    strategy: 'preserve' // 请求数据优先
                }
            }
        }
    });
const getBannerServer = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchData"])('api/web/banner/query', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: true,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const queryProductList = (params = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductList', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: false,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const queryProductListServer = (params = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductList', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: true,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const queryProductCategories = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductCategories', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: false,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const queryProductCategoriesServer = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductCategories', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: true,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const productDetail = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/productDetail', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: false,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const queryProductGroup = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductGroup', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: false,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const productDetailServer = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/productDetail', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: true,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const queryProductGroupServer = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductGroup', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: true,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
}),
"[project]/src/components/BannerSwiperServer/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-rsc] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Image.js [app-rsc] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/index.js [app-rsc] (ecmascript)");
;
;
;
;
const whereParamsBanner = {
    channel: 'limeetpet',
    type: 'home'
};
const getBannerFetchServer = async ({ lang })=>{
    const projectId = 1747727677;
    const language = lang;
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBannerServer"])({
            projectId,
            ...whereParamsBanner,
            language
        });
        if (result && result.status == 200 && result.data && result.data && result.data.rows) {
            return result.data.rows;
        } else {
            return [];
        }
    } catch (err) {
        console.log(err);
    }
};
async function BannerSwiperServer({ lang }) {
    const swiperBanner = await getBannerFetchServer({
        lang
    });
    const renderSwiperHtml = ()=>{
        const html = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        swiperBanner && swiperBanner.length && swiperBanner.map((item, idx)=>{
            if (item.is_show && item.src) {
                html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "carousels-item",
                    title: item.name,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.url,
                        target: "_blank",
                        title: item.name,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                src: item.src,
                                fluid: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
                                lineNumber: 38,
                                columnNumber: 69
                            }, this),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
                        lineNumber: 38,
                        columnNumber: 15
                    }, this)
                }, idx, false, {
                    fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
                    lineNumber: 37,
                    columnNumber: 13
                }, this));
            }
        });
        return html;
    };
    const renderIndicatorHtml = ()=>{
        const html = [];
        swiperBanner && swiperBanner.length && swiperBanner.map((item, idx)=>{
            if (item.is_show && item.src) {
                if (idx === 0) {
                    html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "indicator active",
                        "data-index": idx
                    }, `${item.name}_${idx}`, false, {
                        fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
                        lineNumber: 52,
                        columnNumber: 23
                    }, this));
                } else {
                    html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "indicator",
                        "data-index": idx
                    }, `${item.name}_${idx}`, false, {
                        fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
                        lineNumber: 54,
                        columnNumber: 23
                    }, this));
                }
            }
        });
        return html;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        fluid: true,
        className: "banner-swiper",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            id: "carousels-banner",
            className: "carousels-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "carousels",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "carousels-inner",
                        children: renderSwiperHtml()
                    }, void 0, false, {
                        fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "carousels-indicators",
                        children: renderIndicatorHtml()
                    }, void 0, false, {
                        fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "carousels-control control-prev",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "carousels-control control-next",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BannerSwiperServer/index.jsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = BannerSwiperServer;
}),
"[project]/src/components/Title/index.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Title/index.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Title/index.jsx <module evaluation>", "default");
}),
"[project]/src/components/Title/index.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Title/index.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Title/index.jsx", "default");
}),
"[project]/src/components/Title/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Title$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Title/index.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Title$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Title/index.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Title$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/LocalStorageClient/index.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/LocalStorageClient/index.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/LocalStorageClient/index.jsx <module evaluation>", "default");
}),
"[project]/src/components/LocalStorageClient/index.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/LocalStorageClient/index.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/LocalStorageClient/index.jsx", "default");
}),
"[project]/src/components/LocalStorageClient/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalStorageClient$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/LocalStorageClient/index.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalStorageClient$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/LocalStorageClient/index.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalStorageClient$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/constant/allCategoriesInit.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// eslint-disable-next-line import/no-anonymous-default-export
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    'en-US': {
        key: 'all',
        title: 'All Product'
    },
    'ja-JP': {
        key: 'all',
        title: '全製品'
    },
    'zh-CN': {
        key: 'all',
        title: '所有商品'
    }
};
}),
"[project]/src/components/CategoriesServer/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Title$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Title/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/locales/i18n_server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Row.js [app-rsc] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Col.js [app-rsc] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-rsc] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalStorageClient$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LocalStorageClient/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$allCategoriesInit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constant/allCategoriesInit.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const getCategoriesFetchServer = async ({ lang })=>{
    const projectId = 1747727677;
    const language = lang || 'ja-JP';
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryProductCategoriesServer"])({
            projectId,
            language
        });
        if (result && result.status && result.status === 200 && result.data.rows && result.data.rows[0]) {
            const allCategories = Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$allCategoriesInit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"][language]);
            result.data.rows.push(allCategories);
            return result.data.rows;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
    }
};
async function CategoriesServer(props) {
    const { lang, c_key } = props;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initI18nServer"])();
    const currentKey = c_key || 'all';
    const categories = await getCategoriesFetchServer({
        lang
    });
    const listHtml = ()=>{
        const html = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        categories && categories.length && categories.map((item, idx)=>{
            if (item.key === currentKey) {
                html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                    sm: 6,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "item action",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/productList/${lang}/${item.key}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text ellipsis",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoriesServer/index.jsx",
                                    lineNumber: 44,
                                    columnNumber: 19
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "icon arrow-tx-right"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoriesServer/index.jsx",
                                    lineNumber: 44,
                                    columnNumber: 71
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CategoriesServer/index.jsx",
                            lineNumber: 43,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoriesServer/index.jsx",
                        lineNumber: 42,
                        columnNumber: 15
                    }, this)
                }, `${item.key}_${idx}`, false, {
                    fileName: "[project]/src/components/CategoriesServer/index.jsx",
                    lineNumber: 41,
                    columnNumber: 13
                }, this));
            } else {
                html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                    sm: 6,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "item",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/productList/${lang}/${item.key}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text ellipsis",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoriesServer/index.jsx",
                                    lineNumber: 54,
                                    columnNumber: 19
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "icon arrow-tx-right"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CategoriesServer/index.jsx",
                                    lineNumber: 54,
                                    columnNumber: 71
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CategoriesServer/index.jsx",
                            lineNumber: 53,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoriesServer/index.jsx",
                        lineNumber: 52,
                        columnNumber: 15
                    }, this)
                }, `${item.key}_${idx}`, false, {
                    fileName: "[project]/src/components/CategoriesServer/index.jsx",
                    lineNumber: 51,
                    columnNumber: 13
                }, this));
            }
        });
        return html;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalStorageClient$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                categories: categories,
                c_key: currentKey
            }, void 0, false, {
                fileName: "[project]/src/components/CategoriesServer/index.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                fluid: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "categories-server clearfix",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Title$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('common.title.categories')
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoriesServer/index.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "menu clearfix",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                children: listHtml()
                            }, void 0, false, {
                                fileName: "[project]/src/components/CategoriesServer/index.jsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoriesServer/index.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "describe clearfix",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://img.limeetpet.com/limeet/jiaozhang.png"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CategoriesServer/index.jsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('common.about.des'),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/brand/${lang}`,
                                        children: "See More"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CategoriesServer/index.jsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CategoriesServer/index.jsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/CategoriesServer/index.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CategoriesServer/index.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CategoriesServer/index.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = CategoriesServer;
}),
"[project]/src/components/Whatapp/index.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Whatapp/index.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Whatapp/index.jsx <module evaluation>", "default");
}),
"[project]/src/components/Whatapp/index.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Whatapp/index.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Whatapp/index.jsx", "default");
}),
"[project]/src/components/Whatapp/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Whatapp$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Whatapp/index.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Whatapp$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Whatapp/index.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Whatapp$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/CategoriesFooter/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$allCategoriesInit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constant/allCategoriesInit.js [app-rsc] (ecmascript)");
;
;
;
;
const getCategoriesFetchServer = async ({ lang })=>{
    const projectId = 1747727677;
    const language = lang || 'ja-JP';
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryProductCategoriesServer"])({
            projectId,
            language
        });
        if (result && result.status && result.status === 200 && result.data.rows && result.data.rows[0]) {
            const allCategories = Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$allCategoriesInit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"][language]);
            result.data.rows.push(allCategories);
            return result.data.rows;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
    }
};
async function CategoriesFooter(props) {
    const { lang } = props;
    const categories = await getCategoriesFetchServer({
        lang
    });
    const renderHtml = ()=>{
        const html = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        categories && categories.length && categories.map((item)=>{
            if (item && item.key) {
                html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/productList/${lang}/${item.key}`,
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/CategoriesFooter/index.jsx",
                        lineNumber: 35,
                        columnNumber: 32
                    }, this)
                }, item.key, false, {
                    fileName: "[project]/src/components/CategoriesFooter/index.jsx",
                    lineNumber: 35,
                    columnNumber: 13
                }, this));
            }
        });
        return html;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "flex-column",
        children: renderHtml()
    }, void 0, false, {
        fileName: "[project]/src/components/CategoriesFooter/index.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = CategoriesFooter;
}),
"[project]/src/components/Footer/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/locales/i18n_server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-rsc] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Row.js [app-rsc] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Col.js [app-rsc] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Whatapp$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Whatapp/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoriesFooter$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CategoriesFooter/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$langUtils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/langUtils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
// eslint-disable-next-line @next/next/no-async-client-component
async function Footer({ lang }) {
    console.log('lang:', lang);
    const normLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$langUtils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(lang);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initI18nServer"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].changeLanguage(normLang);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        className: "footer",
        fluid: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                    sm: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "title",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('footer.product.we')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/index.jsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/brand/${lang}`,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('footer.product.brand.title')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer/index.jsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/index.jsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/about/${lang}`,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('footer.product.factory.title')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer/index.jsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/index.jsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/productList/${lang}/all`,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('footer.product.factory.product')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer/index.jsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer/index.jsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer/index.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer/index.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                    sm: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "title",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('footer.product.category.title')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/index.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoriesFooter$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            lang: lang
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/index.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer/index.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                    sm: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "title",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('footer.product.contact')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/index.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "company clearfix",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('footer.product.factory.address'),
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer/index.jsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            "2nd Floor, 1270 Luofen Road, Baoshan District, Shanghai, China"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer/index.jsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Email:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.jsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:hou_ve@qq.com",
                                                children: "hou_ve@qq.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.jsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer/index.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "wrap-box",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "youtube",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    target: "_blank",
                                                    href: "https://www.youtube.com/channel/UCoIs9wNHv3RFkB5Wm6KEHCA",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "https://img.limeetpet.com/limeet/icon/icons8-youtube-240.png"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/index.jsx",
                                                        lineNumber: 62,
                                                        columnNumber: 126
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer/index.jsx",
                                                    lineNumber: 62,
                                                    columnNumber: 43
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.jsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "facebook",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    target: "_blank",
                                                    href: "https://www.facebook.com/limeet.366183",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "https://img.limeetpet.com/limeet/icon/icons8-facebook-240.png"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer/index.jsx",
                                                        lineNumber: 63,
                                                        columnNumber: 109
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer/index.jsx",
                                                    lineNumber: 63,
                                                    columnNumber: 44
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.jsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Whatapp$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/components/Footer/index.jsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer/index.jsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer/index.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer/index.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer/index.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer/index.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer/index.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/src/components/Icp/index.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Icp/index.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Icp/index.jsx <module evaluation>", "default");
}),
"[project]/src/components/Icp/index.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Icp/index.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Icp/index.jsx", "default");
}),
"[project]/src/components/Icp/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icp$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Icp/index.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icp$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Icp/index.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icp$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ListServer/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Row.js [app-rsc] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Col.js [app-rsc] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Image.js [app-rsc] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalStorageClient$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LocalStorageClient/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
const getProductListFetchServer = async ({ lang, c_key })=>{
    const pagination = {
        current: 1,
        pageSize: 100,
        total: 0
    };
    const projectId = 1747727677;
    const language = lang || 'ja-JP';
    const product_type_id = c_key;
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queryProductListServer"])({
        projectId,
        ...pagination,
        product_type_id,
        language
    });
    if (result && result.status === 200 && result.data && result.data.rows) {
        return result.data.rows;
    } else {
        return [];
    }
};
async function ListServer({ lang, c_key }) {
    const currentKey = c_key || 'all';
    const productList = await getProductListFetchServer({
        lang,
        key: currentKey
    });
    const listHtml = ()=>{
        const html = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        productList && productList[0] && productList.length && productList.map((item, idx)=>{
            html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                xs: 6,
                sm: 4,
                xxl: 3,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "item",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/detail/${item.language}/${item.id}/${item.product_id}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "img-box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                    src: item.image_link,
                                    fluid: true,
                                    alt: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ListServer/index.jsx",
                                    lineNumber: 39,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ListServer/index.jsx",
                                lineNumber: 38,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "title",
                                title: item.title,
                                children: item.title && item.title.length > 60 ? `${item.title.substring(0, 60)}...` : item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ListServer/index.jsx",
                                lineNumber: 41,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "price",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "unit",
                                        children: item.monetary_unit
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ListServer/index.jsx",
                                        lineNumber: 45,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "value",
                                        children: item.sale_price_value.min ? item.sale_price_value.min : 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ListServer/index.jsx",
                                        lineNumber: 46,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "del-value",
                                        children: item.price_value.max ? item.price_value.max : 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ListServer/index.jsx",
                                        lineNumber: 47,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "original-value",
                                        children: [
                                            "-",
                                            item.discount_value.max ? item.discount_value.max : 0,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ListServer/index.jsx",
                                        lineNumber: 48,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ListServer/index.jsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ListServer/index.jsx",
                        lineNumber: 37,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ListServer/index.jsx",
                    lineNumber: 36,
                    columnNumber: 13
                }, this)
            }, `${idx}_${item.product_id}`, false, {
                fileName: "[project]/src/components/ListServer/index.jsx",
                lineNumber: 35,
                columnNumber: 11
            }, this));
        });
        return html;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalStorageClient$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                productList: productList
            }, currentKey, false, {
                fileName: "[project]/src/components/ListServer/index.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                children: listHtml()
            }, void 0, false, {
                fileName: "[project]/src/components/ListServer/index.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
;
const __TURBOPACK__default__export__ = ListServer;
}),
"[project]/src/constant/menuNavServer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// eslint-disable-next-line import/no-anonymous-default-export
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    'en-US': [
        {
            name: 'Home',
            value: '',
            path: '/home',
            key: 'home',
            current: 'home',
            active: true,
            lang: 'en-US'
        },
        {
            name: 'Products',
            key: 'productList',
            value: 'all',
            path: '/productList',
            lang: 'en-US',
            children: [
                {
                    name: 'Cat tunnels、play',
                    value: '33381771',
                    path: '/productList',
                    key: '33381771',
                    father_key: 'product',
                    current: 'product',
                    lang: 'en-US'
                },
                {
                    name: 'Cat beds、mats',
                    value: '12771663',
                    path: '/productList',
                    key: '12771663',
                    father_key: 'product',
                    current: 'product',
                    lang: 'en-US'
                },
                {
                    name: 'Cat Furniture & Building',
                    value: '97974047',
                    path: '/productList',
                    key: '97974047',
                    father_key: 'product',
                    current: 'product',
                    lang: 'en-US'
                },
                {
                    name: 'Catnip toys、stuffed animals',
                    value: '54155552',
                    path: '/productList',
                    key: '54155552',
                    father_key: 'product',
                    current: 'product',
                    lang: 'ja-JP'
                },
                {
                    name: 'Food Box',
                    value: '18885882',
                    path: '/productList',
                    key: '18885882',
                    father_key: 'product',
                    current: 'product',
                    lang: 'en-US'
                },
                {
                    name: 'All Product',
                    value: 'all',
                    path: '/productList',
                    key: 'all',
                    father_key: 'product',
                    current: 'product',
                    lang: 'en-US'
                }
            ]
        },
        {
            name: 'Band',
            value: '',
            path: '/brand',
            key: 'brand',
            current: 'brand',
            lang: 'en-US'
        },
        {
            name: 'Factory',
            value: '',
            path: '/about',
            key: 'about',
            current: 'about',
            lang: 'en-US'
        }
    ],
    'ja-JP': [
        {
            name: '表紙',
            value: '',
            path: '/home',
            key: 'home',
            current: 'home',
            active: true,
            lang: 'ja-JP'
        },
        {
            name: '製品',
            value: 'all',
            path: '/productList',
            key: 'productList',
            current: 'product',
            lang: 'ja-JP',
            children: [
                {
                    name: '猫のトンネル、遊び',
                    value: '33381771',
                    path: '/productList',
                    key: '33381771',
                    father_key: 'product',
                    current: 'product',
                    lang: 'ja-JP'
                },
                {
                    name: '猫用ベッドとマット',
                    value: '12771663',
                    path: '/productList',
                    key: '12771663',
                    father_key: 'product',
                    current: 'product',
                    lang: 'ja-JP'
                },
                {
                    name: '猫用ベッド、ハウス、タワー',
                    value: '97974047',
                    path: '/productList',
                    key: '97974047',
                    father_key: 'product',
                    current: 'product',
                    lang: 'ja-JP'
                },
                {
                    name: 'キャットニップのおもちゃとぬいぐるみ',
                    value: '54155552',
                    path: '/productList',
                    key: '54155552',
                    father_key: 'product',
                    current: 'product',
                    lang: 'ja-JP'
                },
                {
                    name: 'フードボックス',
                    value: '18885882',
                    path: '/productList',
                    key: '18885882',
                    father_key: 'product',
                    current: 'product',
                    lang: 'ja-JP'
                },
                {
                    name: '全製品',
                    value: 'all',
                    path: '/productList',
                    key: 'all',
                    father_key: 'product',
                    current: 'product',
                    lang: 'ja-JP'
                }
            ]
        },
        {
            name: 'ブランド',
            value: '',
            path: '/brand',
            key: 'brand',
            current: 'brand',
            lang: 'ja-JP'
        },
        {
            name: '工場',
            value: '',
            path: '/about',
            key: 'about',
            current: 'about',
            lang: 'ja-JP'
        }
    ],
    'zh-CN': [
        {
            name: '首页',
            value: '',
            path: '/home',
            key: 'home',
            current: 'home',
            active: true,
            lang: 'zh-CN'
        },
        {
            name: '产品',
            value: 'all',
            path: '/productList',
            key: 'productList',
            current: 'product',
            lang: 'zh-CN',
            children: [
                {
                    name: '猫隧道、游戏玩耍',
                    value: '33381771',
                    path: '/productList',
                    key: '33381771',
                    father_key: 'product',
                    current: 'product',
                    lang: 'zh-CN'
                },
                {
                    name: '猫窝、猫垫子',
                    value: '12771663',
                    path: '/productList',
                    key: '12771663',
                    father_key: 'product',
                    current: 'product',
                    lang: 'zh-CN'
                },
                {
                    name: '猫床、猫屋、猫塔',
                    value: '97974047',
                    path: '/productList',
                    key: '97974047',
                    father_key: 'product',
                    current: 'product',
                    lang: 'zh-CN'
                },
                {
                    name: '猫薄荷玩具、毛绒玩具',
                    value: '54155552',
                    path: '/productList',
                    key: '54155552',
                    father_key: 'product',
                    current: 'product',
                    lang: 'ja-JP'
                },
                {
                    name: '食盒',
                    value: '18885882',
                    path: '/productList',
                    key: '18885882',
                    father_key: 'product',
                    current: 'product',
                    lang: 'zh-CN'
                },
                {
                    name: '所有商品',
                    value: 'all',
                    path: '/productList',
                    key: 'all',
                    father_key: 'product',
                    current: 'product',
                    lang: 'zh-CN'
                }
            ]
        },
        {
            name: '品牌',
            value: '',
            path: '/brand',
            key: 'brand',
            current: 'brand',
            lang: 'zh-CN'
        },
        {
            name: '工厂',
            value: '',
            path: '/about',
            key: 'about',
            current: 'about',
            lang: 'zh-CN'
        }
    ]
};
}),
"[project]/src/components/ChangeLanguage/index.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ChangeLanguage/index.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ChangeLanguage/index.jsx <module evaluation>", "default");
}),
"[project]/src/components/ChangeLanguage/index.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ChangeLanguage/index.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ChangeLanguage/index.jsx", "default");
}),
"[project]/src/components/ChangeLanguage/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChangeLanguage$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ChangeLanguage/index.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChangeLanguage$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ChangeLanguage/index.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChangeLanguage$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/HeaderServer/index.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/locales/i18n_server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-rsc] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$menuNavServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constant/menuNavServer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChangeLanguage$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChangeLanguage/index.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
// eslint-disable-next-line @next/next/no-async-client-component
async function HeaderServer({ lang, currentPage, c_key }) {
    const menuInit = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$menuNavServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"][lang];
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initI18nServer"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].changeLanguage(lang);
    const menuNav = ()=>{
        const html = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        menuInit && menuInit[0] && menuInit.forEach((item)=>{
            if (item.children && item.children.length > 0) {
                const htmlDropdown = [];
                item.children.forEach((list)=>{
                    if (c_key && item.key === c_key) {
                        htmlDropdown.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            active: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `${list.path}/${list.lang}/${list.value}`,
                                className: "nav-link",
                                children: list.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeaderServer/index.jsx",
                                lineNumber: 24,
                                columnNumber: 17
                            }, this)
                        }, list.key, false, {
                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                            lineNumber: 23,
                            columnNumber: 15
                        }, this));
                    } else {
                        htmlDropdown.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `${list.path}/${list.lang}/${list.value}`,
                                className: "nav-link",
                                children: list.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeaderServer/index.jsx",
                                lineNumber: 30,
                                columnNumber: 17
                            }, this)
                        }, list.key, false, {
                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                            lineNumber: 29,
                            columnNumber: 15
                        }, this));
                    }
                });
                if (item.key === currentPage) {
                    html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        title: item.name,
                        id: "basic-nav-dropdown",
                        className: "active",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `${item.path}/${item.lang}/${item.value}`,
                                className: "nav-link",
                                children: [
                                    item.name,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "triangle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeaderServer/index.jsx",
                                        lineNumber: 38,
                                        columnNumber: 103
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeaderServer/index.jsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dropdown-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "triangle-top"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeaderServer/index.jsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    htmlDropdown
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeaderServer/index.jsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/src/components/HeaderServer/index.jsx",
                        lineNumber: 37,
                        columnNumber: 13
                    }, this));
                } else {
                    html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        title: item.name,
                        id: "basic-nav-dropdown",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `${item.path}/${item.lang}/${item.value}`,
                                className: "nav-link",
                                children: [
                                    item.name,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "triangle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeaderServer/index.jsx",
                                        lineNumber: 48,
                                        columnNumber: 103
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeaderServer/index.jsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dropdown-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "triangle-top"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeaderServer/index.jsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this),
                                    htmlDropdown
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeaderServer/index.jsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.name, true, {
                        fileName: "[project]/src/components/HeaderServer/index.jsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this));
                }
            } else {
                if (item.key === currentPage) {
                    html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "active",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `${item.path == '/' ? '/' + item.lang : item.path + '/' + item.lang}`,
                            className: "nav-link",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, this)
                    }, item.key, false, {
                        fileName: "[project]/src/components/HeaderServer/index.jsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this));
                } else {
                    html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `${item.path == '/' ? '/' + item.lang : item.path + '/' + item.lang}`,
                            className: "nav-link",
                            children: item.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this)
                    }, item.key, false, {
                        fileName: "[project]/src/components/HeaderServer/index.jsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this));
                }
            }
        });
        return html;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        fluid: true,
        className: "clearfix",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "header-warp-server clearfix",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mask"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeaderServer/index.jsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "main",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://img.limeetpet.com/limeet/limeet_logo.png",
                                            alt: "Limeet Pet Brand"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeaderServer/index.jsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeaderServer/index.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "des",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('common.header.name')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HeaderServer/index.jsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('common.header.name.second'),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "https://img.limeetpet.com/limeet/maogou.png",
                                                    alt: "Limeet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeaderServer/index.jsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "clearfix",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "https://img.limeetpet.com/limeet/xin.png",
                                                    alt: "Limeet"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeaderServer/index.jsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('common.header.name.des')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeaderServer/index.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChangeLanguage$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            lang: lang
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeaderServer/index.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-sub",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mask-sub"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "navbar navbar-expand-sm navbar-light",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: menuNav()
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeaderServer/index.jsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeaderServer/index.jsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeaderServer/index.jsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeaderServer/index.jsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HeaderServer/index.jsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = HeaderServer;
}),
"[project]/src/app/home/[lang]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/locales/i18n_server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-rsc] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Row.js [app-rsc] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Col.js [app-rsc] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BannerSwiperServer$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BannerSwiperServer/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoriesServer$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CategoriesServer/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icp$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icp/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListServer$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ListServer/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Title$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Title/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$langUtils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/langUtils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalStorageClient$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LocalStorageClient/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderServer$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeaderServer/index.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientRunTimeDom$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ClientRunTimeDom/index.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const getBannerFetchServer = async ({ lang })=>{
    const projectId = 1747727677;
    const language = lang || 'ja-JP';
    const whereParamsBanner = {
        channel: 'limeetpet',
        type: 'home'
    };
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBannerServer"])({
            projectId,
            ...whereParamsBanner,
            language
        });
        if (result && result.status == 200 && result.data && result.data && result.data.rows) {
            return result.data.rows;
        } else {
            return [];
        }
    } catch (err) {
        console.log(err);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
};
// eslint-disable-next-line @next/next/no-async-client-component
async function HomePage({ params }) {
    const { lang = 'ja-JP', key = '' } = await params;
    const normLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$langUtils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(lang);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initI18nServer"])();
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].changeLanguage(normLang);
    const currentPage = '/';
    const swiperBanner = await getBannerFetchServer({
        lang
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LocalStorageClient$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                lang: normLang,
                swiperBanner: swiperBanner
            }, void 0, false, {
                fileName: "[project]/src/app/home/[lang]/page.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeaderServer$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                lang: normLang,
                currentPage: currentPage,
                c_key: key
            }, void 0, false, {
                fileName: "[project]/src/app/home/[lang]/page.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BannerSwiperServer$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                lang: normLang
            }, void 0, false, {
                fileName: "[project]/src/app/home/[lang]/page.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CategoriesServer$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                lang: normLang,
                c_key: "all"
            }, void 0, false, {
                fileName: "[project]/src/app/home/[lang]/page.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                fluid: true,
                className: "list-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Title$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].t('common.title.sales')
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/[lang]/page.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ListServer$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        from: "home",
                        lang: normLang,
                        c_key: "all"
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/[lang]/page.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "more-wrap clearfix",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/productList/${normLang}/all`,
                                    children: " See more… "
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home/[lang]/page.jsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home/[lang]/page.jsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/home/[lang]/page.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/[lang]/page.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/[lang]/page.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                lang: normLang
            }, void 0, false, {
                fileName: "[project]/src/app/home/[lang]/page.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icp$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                lang: normLang
            }, void 0, false, {
                fileName: "[project]/src/app/home/[lang]/page.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ClientRunTimeDom$2f$index$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/home/[lang]/page.jsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = HomePage;
}),
"[project]/src/app/home/[lang]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/home/[lang]/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__74cd7f95._.js.map