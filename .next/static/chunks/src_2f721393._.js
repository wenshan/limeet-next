(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/constant/menuNav.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
            path: '/index',
            key: 'index',
            current: 'index',
            active: true
        },
        {
            name: 'Products',
            value: 'product',
            key: 'product',
            current: 'product'
        },
        {
            name: 'Games Toys',
            value: '33381771',
            path: '/productList/',
            key: '33381771',
            father_key: 'product',
            current: 'product'
        },
        {
            name: 'Cat Bed',
            value: '12771663',
            path: '/productList/',
            key: '12771663',
            father_key: 'product',
            current: 'product'
        },
        {
            name: 'Cat Furniture & Building',
            value: '97974047',
            path: '/productList/',
            key: '97974047',
            father_key: 'product',
            current: 'product'
        },
        {
            name: 'Food Box',
            value: '18885882',
            path: '/productList/',
            key: '18885882',
            father_key: 'product',
            current: 'product'
        },
        {
            name: 'All Product',
            value: 'all',
            path: '/productList/',
            key: 'all',
            father_key: 'product',
            current: 'product'
        },
        {
            name: 'Band',
            value: '',
            path: '/brand',
            key: 'brand',
            current: 'brand'
        },
        {
            name: 'Factory',
            value: '',
            path: '/about',
            key: 'about',
            current: 'about'
        }
    ],
    'ja-JP': [
        {
            name: '表紙',
            value: '',
            path: '/index',
            key: 'index',
            current: 'index',
            active: true
        },
        {
            name: '製品',
            value: 'product',
            key: 'product',
            current: 'product'
        },
        {
            name: 'ゲームのおもちゃ',
            value: '33381771',
            path: '/productList/',
            key: '33381771',
            father_key: 'product',
            current: 'product'
        },
        {
            name: '猫の巣',
            value: '12771663',
            path: '/productList/',
            key: '12771663',
            father_key: 'product',
            current: 'product'
        },
        {
            name: '猫の家具と建物',
            value: '97974047',
            path: '/productList/',
            key: '97974047',
            father_key: 'product',
            current: 'product'
        },
        {
            name: 'フードボックス',
            value: '18885882',
            path: '/productList/',
            key: '18885882',
            father_key: 'product',
            current: 'product'
        },
        {
            name: '全製品',
            value: 'all',
            path: '/productList/',
            key: 'all',
            father_key: 'product',
            current: 'product'
        },
        {
            name: 'ブランド',
            value: '',
            path: '/brand',
            key: 'brand',
            current: 'brand'
        },
        {
            name: '工場',
            value: '',
            path: '/about',
            key: 'about',
            current: 'about'
        }
    ],
    'zh-CN': [
        {
            name: '首页',
            value: '',
            path: '/index',
            key: 'index',
            current: 'index',
            active: true
        },
        {
            name: '产品',
            value: 'product',
            key: 'product',
            current: 'product'
        },
        {
            name: '游戏玩具',
            value: '33381771',
            path: '/productList/',
            key: '33381771',
            father_key: 'product',
            current: 'product'
        },
        {
            name: '猫窝',
            value: '12771663',
            path: '/productList/',
            key: '12771663',
            father_key: 'product',
            current: 'product'
        },
        {
            name: '猫家具&拼搭',
            value: '97974047',
            path: '/productList/',
            key: '97974047',
            father_key: 'product',
            current: 'product'
        },
        {
            name: '食盒',
            value: '18885882',
            path: '/productList/',
            key: '18885882',
            father_key: 'product',
            current: 'product'
        },
        {
            name: '所有商品',
            value: 'all',
            path: '/productList/',
            key: 'all',
            father_key: 'product',
            current: 'product'
        },
        {
            name: '品牌',
            value: '',
            path: '/brand',
            key: 'brand',
            current: 'brand'
        },
        {
            name: '工厂',
            value: '',
            path: '/about',
            key: 'about',
            current: 'about'
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/constant/allCategoriesInit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/fetch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
async function fetchData(url) {
    let { config = {}, ...options } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
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
        'X-API-Key': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_KEY || '',
        'X-Server-Request': 'true'
    };
    // 合并配置
    const { baseURL, cache, revalidate, server, errorMessage, withCredentials, debug, localCache, localStorage: { keys: localStorageKeys, merge: mergeConfig } } = {
        ...defaultConfig,
        ...config
    };
    // 生成缓存键
    const cacheKey = localCache.key || "".concat(url, "-").concat(options.method || 'GET');
    // 调试日志工具函数
    const debugLog = function(message) {
        let data = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        if (debug.enabled) {
            const prefix = "[fetchData] [".concat(new Date().toISOString(), "]");
            if (data) {
                console.log("".concat(prefix, " ").concat(message), data);
            } else {
                console.log("".concat(prefix, " ").concat(message));
            }
        }
    };
    try {
        // 1. 调试信息：请求开始
        debugLog("开始请求: ".concat(url), {
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
                        } catch (e) {
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
                            debugLog("本地缓存命中: ".concat(cacheKey, " (缓存年龄: ").concat(age, "秒)"), {
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
                            debugLog("本地缓存过期: ".concat(cacheKey, " (已清除)"), {
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
        const fullUrl = url.startsWith('http') ? url : "".concat(baseURL).concat(url);
        debugLog("请求URL处理完成: ".concat(fullUrl));
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
            var _fetchOptions_next, _fetchOptions_next1;
            debugLog('发送请求', {
                url: fullUrl,
                method,
                headers: {
                    ...headers,
                    'Authorization': headers.Authorization ? '***隐藏***' : undefined
                },
                cache: (_fetchOptions_next = fetchOptions.next) === null || _fetchOptions_next === void 0 ? void 0 : _fetchOptions_next.cache,
                revalidate: (_fetchOptions_next1 = fetchOptions.next) === null || _fetchOptions_next1 === void 0 ? void 0 : _fetchOptions_next1.revalidate,
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
                debugLog("请求失败 [".concat(response.status, "]"), {
                    url: fullUrl,
                    statusText: response.statusText
                });
            }
            // 新增404状态处理
            if (response.status === 404) {
                // 对于App Router使用notFound()触发404页面
                // 对于Pages Router可使用router.push('/404')
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
            }
            throw new Error("".concat(errorMessage, " (").concat(response.status, ")"));
        }
        // 11. 解析响应数据
        const contentType = response.headers.get('content-type');
        const data = (contentType === null || contentType === void 0 ? void 0 : contentType.includes('application/json')) ? await response.json() : await response.text();
        // 12. 打印响应数据（调试，仅打印摘要）
        if (debug.logResponse && debug.enabled) {
            const logData = typeof data === 'object' ? Array.isArray(data) ? "数组 (长度: ".concat(data.length, ")") : "对象 (属性数量: ".concat(Object.keys(data).length, ")") : "文本 (长度: ".concat(String(data).length, ")");
            debugLog("响应数据解析完成: ".concat(logData), data);
        }
        // 13. 客户端缓存处理
        if (!server && localCache.enabled) {
            try {
                localStorage.setItem(cacheKey, JSON.stringify({
                    data,
                    timestamp: Date.now()
                }));
                if (debug.logCache) {
                    debugLog("数据已缓存到localStorage: ".concat(cacheKey));
                }
            } catch (err) {
                debugLog('本地缓存存储失败', err);
            }
        }
        return data;
    } catch (error) {
        if (debug.enabled) {
            debugLog("请求错误: ".concat(error.message), error);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/fetch.js [app-client] (ecmascript)");
;
const getBanner = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])('api/web/banner/query', {
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
const getBannerServer = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])('api/web/banner/query', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: true,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const queryProductList = function() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductList', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: false,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
};
const queryProductListServer = function() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductList', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: true,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
};
const queryProductCategories = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductCategories', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: false,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const queryProductCategoriesServer = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductCategories', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: true,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const productDetail = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/productDetail', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: false,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const queryProductGroup = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductGroup', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: false,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const productDetailServer = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/productDetail', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: true,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
const queryProductGroupServer = (params)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$fetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])('api/web/product/queryProductGroup', {
        method: 'POST',
        body: JSON.stringify(params),
        config: {
            server: true,
            cache: 'no-store',
            errorMessage: '获取数据失败'
        }
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/stores/rootStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$menuNav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constant/menuNav.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$allCategoriesInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constant/allCategoriesInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/index.js [app-client] (ecmascript)");
;
;
;
;
;
// const lng = (new LanguageDetector()).detect() || 'en';
const initProductDetail = {
    image_link: '',
    additional_image_link: '',
    product_highlight: '',
    item_group_id: '',
    description: '',
    lifestyle_image_link: '',
    monetary_unit: '',
    saleSkusList: []
};
const paginationInit = {
    current: 1,
    pageSize: 20,
    total: 0
};
const whereParamsBanner = {
    channel: 'limeetpet',
    type: 'home'
};
// const lang = (languageI18next[lng] && languageI18next[lng].value) || 'en-US';
const RootStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(_c1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])(_c = (set, get)=>({
        projectId: 1747727677,
        language: 'ja-JP',
        categories: [],
        product_type_id: 'all',
        swiperBanner: [],
        pagination: paginationInit,
        productList: [],
        productDetail: initProductDetail,
        saleSkusList: [],
        currentSaleSku: {},
        menu: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$menuNav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]['ja-JP'],
        swiperBanner: [],
        setUrLanguage: ()=>{},
        setLanguage: (lang)=>{
            set((state)=>({
                    ...state,
                    language: lang
                }));
        },
        setCategories: (rows)=>{
            if (rows) {
                set((state)=>({
                        ...state,
                        categories: rows
                    }));
            }
        },
        setProductTypeId: (id)=>{
            if (id) {
                set((state)=>({
                        ...state,
                        product_type_id: id
                    }));
            }
        },
        getCategoriesFetch: async (key)=>{
            const { projectId, language, setCategories, setProductTypeId } = get();
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryProductCategories"])({
                projectId,
                language
            });
            if (result && result.status && result.status === 200 && result.data.rows) {
                const allCategories = Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$allCategoriesInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][language]);
                const rows = [];
                rows.push(allCategories);
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                result.data.rows.length && result.data.rows.forEach((item)=>{
                    if (item.key == key) {
                        rows.push(Object.assign({}, item, {
                            active: true
                        }));
                    } else {
                        rows.push(Object.assign({}, item, {
                            active: false
                        }));
                    }
                });
                setCategories(rows);
                setProductTypeId(key);
            } else {
                set((state)=>({
                        ...state,
                        categories: [],
                        product_type_id: null
                    }));
            }
        },
        setProductListPagination: (pagination)=>{
            set((state)=>({
                    ...state,
                    pagination
                }));
        },
        setProductList: (data)=>{
            set((state)=>({
                    ...state,
                    productList: data
                }));
        },
        getProductListFetch: async ()=>{
            const { projectId, pagination, language, setProductList, setProductListPagination, product_type_id } = get();
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryProductList"])({
                projectId,
                ...pagination,
                product_type_id,
                language
            });
            if (result && result.status === 200 && result.data && result.data.rows) {
                setProductList(result.data.rows);
                setProductListPagination(Object.assign({}, pagination, {
                    total: result.data.count
                }));
            }
        },
        setProductDetail: async (productDetail)=>{
            if (productDetail && productDetail.saleSkusList && productDetail.saleSkusList[0]) {
                set((stats)=>({
                        ...stats,
                        productDetail,
                        saleSkusList: productDetail.saleSkusList,
                        currentSaleSku: productDetail.saleSkusList[0]
                    }));
            }
        },
        getProductDetailFetch: async (query)=>{
            const { projectId } = get();
            const { id, productId, language } = query;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productDetail"])({
                id,
                product_id: productId,
                projectId,
                language
            });
            if (result && result.status === 200 && result.data) {
                set((stats)=>({
                        ...stats,
                        productDetail: result.data,
                        saleSkusList: result.data.saleSkusList,
                        currentSaleSku: result.data.saleSkusList[0]
                    }));
            }
        },
        setSaleSkusList: (list)=>{
            set((state)=>({
                    ...state,
                    saleSkusList: list
                }));
        },
        setCurrentSaleSku: (item)=>{
            set((state)=>({
                    ...state,
                    currentSaleSku: item
                }));
        },
        setMenu: (data)=>{
            set((state)=>({
                    ...state,
                    menu: data
                }));
        },
        setSwiperBanner: (data)=>{
            set((state)=>({
                    ...state,
                    swiperBanner: data
                }));
        },
        getBannerFetch: async ()=>{
            const { projectId, language } = get();
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBanner"])({
                    projectId,
                    ...whereParamsBanner,
                    language
                });
                if (result && result.status == 200 && result.data && result.data && result.data.rows) {
                    set((state)=>({
                            ...state,
                            swiperBanner: result.data.rows
                        }));
                } else {
                    set((state)=>({
                            ...state,
                            swiperBanner: []
                        }));
                }
            } catch (err) {
                console.log(err);
            }
        }
    }), {
    name: 'limeetpet'
}));
_c2 = RootStore;
const __TURBOPACK__default__export__ = RootStore;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RootStore$create$persist");
__turbopack_context__.k.register(_c1, "RootStore$create");
__turbopack_context__.k.register(_c2, "RootStore");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LocalStorageClient/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$store2$2f$dist$2f$store2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/store2/dist/store2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/rootStore.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// set((stats) => ({ ...stats, productDetail: result.data, saleSkusList: result.data.saleSkusList, currentSaleSku: result.data.saleSkusList[0] }));
function LocalStorageClient(param) {
    let { lang, swiperBanner, productDetail, c_key, categories, productList } = param;
    _s();
    const { setLanguage, setSwiperBanner, setProductDetail, setCategories, setProductTypeId, setProductList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // setCategories(rows);
    // setProductTypeId(key);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalStorageClient.useEffect": ()=>{
            if (swiperBanner) {
                setSwiperBanner(swiperBanner);
            }
            if (lang) {
                setLanguage(lang);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$store2$2f$dist$2f$store2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('lang', lang);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$store2$2f$dist$2f$store2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('i18nextLng', lang);
            }
            if (categories) {
                setCategories(categories);
            }
            if (c_key) {
                setProductTypeId(c_key);
            }
            if (productList) {
                setProductList(productList);
            }
            if (productDetail && productDetail.saleSkusList && productDetail.saleSkusList[0]) {
                setProductDetail(productDetail);
            }
        }
    }["LocalStorageClient.useEffect"], [
        lang
    ]);
    return null;
}
_s(LocalStorageClient, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = LocalStorageClient;
const __TURBOPACK__default__export__ = LocalStorageClient;
var _c;
__turbopack_context__.k.register(_c, "LocalStorageClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Whatapp/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Image.js [app-client] (ecmascript) <export default as Image>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Whatapp(props) {
    _s();
    const [wechatStatus, setWechatStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleClose = ()=>setWechatStatus(false);
    const handleShow = ()=>setWechatStatus(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "wechat",
                onClick: handleShow,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://img.limeetpet.com/limeet/icon/icons8-whatsapp-240.png"
                }, void 0, false, {
                    fileName: "[project]/src/components/Whatapp/index.jsx",
                    lineNumber: 12,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Whatapp/index.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                show: wechatStatus,
                onHide: handleClose,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"].Header, {
                        closeButton: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"].Title, {}, void 0, false, {
                            fileName: "[project]/src/components/Whatapp/index.jsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Whatapp/index.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"].Body, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                            thumbnail: true,
                            src: "https://img.limeetpet.com/limeet/icon/whatApp.png"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Whatapp/index.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Whatapp/index.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"].Footer, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "secondary",
                            onClick: handleClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Whatapp/index.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Whatapp/index.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Whatapp/index.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Whatapp, "JFCknD3AyEtbSbYhp+Lv4wmVo/M=");
_c = Whatapp;
const __TURBOPACK__default__export__ = Whatapp;
var _c;
__turbopack_context__.k.register(_c, "Whatapp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Icp/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/rootStore.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function ICP() {
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        className: "footer-icp",
        children: language === 'zh-CN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "© 2025, Limeet - OuhaoTrading ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "https://beian.miit.gov.cn/#/Integrated/index",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "浙ICP备2023008986号"
                }, void 0, false, {
                    fileName: "[project]/src/components/Icp/index.jsx",
                    lineNumber: 12,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Icp/index.jsx",
            lineNumber: 12,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Icp/index.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ICP;
const __TURBOPACK__default__export__ = ICP;
var _c;
__turbopack_context__.k.register(_c, "ICP");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/List/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Row.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Col.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/rootStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function List() {
    _s();
    const { productList, getProductListFetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const listHtml = ()=>{
        const html = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        productList && productList[0] && productList.length && productList.map((item, idx)=>{
            html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Col$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                xs: 6,
                sm: 4,
                xxl: 3,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "item",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/detail/".concat(item.language, "/").concat(item.id, "/").concat(item.product_id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "img-box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                    src: item.image_link,
                                    fluid: true,
                                    alt: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/List/index.jsx",
                                    lineNumber: 22,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/List/index.jsx",
                                lineNumber: 21,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "title",
                                title: item.title,
                                children: item.title && item.title.length > 60 ? "".concat(item.title.substring(0, 60), "...") : item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/List/index.jsx",
                                lineNumber: 24,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "price",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "unit",
                                        children: item.monetary_unit
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/List/index.jsx",
                                        lineNumber: 28,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "value",
                                        children: item.sale_price_value.min ? item.sale_price_value.min : 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/List/index.jsx",
                                        lineNumber: 29,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "del-value",
                                        children: item.price_value.max ? item.price_value.max : 0
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/List/index.jsx",
                                        lineNumber: 30,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "original-value",
                                        children: [
                                            "-",
                                            item.discount_value.max ? item.discount_value.max : 0,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/List/index.jsx",
                                        lineNumber: 31,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/List/index.jsx",
                                lineNumber: 27,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/List/index.jsx",
                        lineNumber: 20,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/List/index.jsx",
                    lineNumber: 19,
                    columnNumber: 13
                }, this)
            }, idx, false, {
                fileName: "[project]/src/components/List/index.jsx",
                lineNumber: 18,
                columnNumber: 11
            }, this));
        });
        return html;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "List.useEffect": ()=>{
            getProductListFetch();
        }
    }["List.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Row$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
        children: listHtml()
    }, void 0, false, {
        fileName: "[project]/src/components/List/index.jsx",
        lineNumber: 43,
        columnNumber: 10
    }, this);
}
_s(List, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = List;
const __TURBOPACK__default__export__ = List;
var _c;
__turbopack_context__.k.register(_c, "List");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/locales/lang/en-US.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"site.lang\":\"en-US\",\"site.title\":\"Limeet - Creating a Warm Home for Pets.\",\"site.keywords\":\"Limeet, Limeetket, Limeetpet, cat, Cat playmat, Cat toys, Interactive cat toys, Cat tunnels, Felt cat toys, Cat tree, Cat bed, Cat cave, Cat scratch board, Cat scratcher, Felt cat cave, Cat cigar, Cat house, Cat supplies supply \",\"site.description\":\"Limeet,Creating a Warm Home for Pets,We design many creative cat furniture items, allowing cats and people to coexist warmly.\",\"common.header.name\":\"LIMEET\",\"common.header.name.second\":\"Creating a Warm Home for Pets.\",\"common.header.name.des\":\"We design many creative cat furniture items, allowing cats and people to coexist warmly.\",\"common.nav.home\":\"Home\",\"common.nav.products\":\"Products\",\"common.nav.factory\":\"Factory\",\"common.nav.brand\":\"Brand\",\"common.nav.brand.story\":\"Brand Story\",\"common.nav.brand.idea\":\"Brand Idea\",\"common.nav.brand.keywords\":\"Brand Keywords\",\"common.nav.brand.image\":\"Brand Image\",\"common.nav.brand.strength\":\"Brand Strength\",\"common.more\":\"See more…\",\"common.title.sales\":\"Highest Sales\",\"common.title.categories\":\"Categories\",\"common.nav.category.gamesToys\":\"Games&Toys\",\"common.nav.category.catBed\":\"Cat bed\",\"common.nav.category.furniture\":\"Cat Furniture & Building\",\"common.nav.category.foodBox\":\"Food Box\",\"common.nav.category.all\":\"All Product\",\"common.title.attribute\":\"Product Attribute\",\"common.title.detail\":\"Product Detail\",\"common.title.list\":\"Product List\",\"common.about.name\":\"About\",\"common.about.tip\":\"The busy scene of the factory every day.\",\"common.about.des\":\"Welcome to Limeet, We are your best companions, providing a wide range of high-quality pet supplies and services for you and your pets.\",\"common.about.company\":\"Shanghai Erka International Trade Co., Ltd\",\"common.about.address\":\"2nd Floor,   1270 Luofen Road, Baoshan District, Shanghai, China\",\"detail.buy\":\"Go to Amazon to buy\",\"brand.page.story.list01\":\"Limeet crafting the perfect harmony between pets and home, and serving as the bridge that connects you with your pets.\",\"brand.page.story.list02\":\"We truly appreciate the chance to share our products with you and your pets. At Limeet, we’re all about crafting more pet-friendly designs—ones that blend top-notch eco-friendly materials with fine craftsmanship, seamlessly fitting into your home life. In our design approach, we keep things user-friendly while staying true to that natural, eco-conscious vibe. \",\"brand.page.story.list03\":\"We put a lot of thought into how pets experience our products, testing their suitability time and again and tweaking designs as needed. While fostering that perfect human-pet harmony is key, we also prioritize your pet’s health, growth, and day-to-day needs. \",\"brand.page.story.list04\":\"Right now, our products are mainly for cats, covering all their favorite activities: playing, climbing, scratching, napping, using the litter, and even minty plush toys. They work great in all sorts of spots—living rooms, bedrooms, yards, pet shops, cat cafes, you name it. \",\"brand.page.story.list05\":\"Limeet is all about creating modern, cozy spaces where both you and your pet can thrive—so you never have to pick between keeping your home looking good and keeping your pet happy. By nailing every part of our products—function, materials, design, and versatility—we’ve made that vision a reality, giving you simple solutions for a relaxed, harmonious life with your pet.\",\"brand.page.idea\":\"In today's era, for many people, having pets makes fast-paced urban life rich and interesting. What we can do is to create a more comfortable, refined, harmonious and harmonious living environment for pets, so that they can accompany us happily for a long time. Limeet follows the Nordic environmental protection standards, integrates the oriental living concept, and carefully develops each pet living product, just to stimulate the nature and vitality of pets.\",\"brand.page.keywords.list01\":\"Environmentally friendly, energetic, and safe.\",\"brand.page.keywords.list02\":\"All our products are made of environmentally friendly materials commonly used in Europe and America, with no odor or volatility.\",\"brand.page.keywords.list03\":\"We design products that are practical, interesting, and interactive, stimulating the vitality of pets.\",\"brand.page.keywords.list04\":\"We design products that are safe, practical, and harmonious with human habitation.\",\"brand.page.image.list01\":\"Since its establishment in 2003, Limeet has always adhered to the original intention of \\\"craftsmanship for dogs and cats\\\", adhering to the concept of \\\"loving pets as relatives\\\", creating better and more valuable products for pets all over the world to meet the ever-changing consumer needs.\",\"brand.page.image.list02\":\"Create a more quality consumer experience for pet owners around the world\",\"brand.page.image.list03\":\"We are like bridge builders, constantly looking for new connections and new pet home designs to create a better living environment, so that every dog ​​and cat is full of vitality and stays with you longer.\",\"brand.page.strength.list01\":\"Limeet has long been focusing on the research and development, production and sales of pet furniture. It has its own production base in China and has built a complete set of standardized production lines.\",\"brand.page.strength.list02\":\"•  In 2014, in Jinshan, Shanghai, a production base covering more than 3 square meters was built, with industry-leading 3D printer equipment, engraving machine equipment, etc., including integrated design software, to achieve high-speed design and production iterations to meet consumer demand.\",\"brand.page.strength.list03\":\"•  In 2018, with the vigorous development of domestic e-commerce companies, we developed Taobao Tmall stores, with monthly online sales reaching 200,   000 and offline sales reaching 300,   000\",\"brand.page.strength.list04\":\"•  In 2023, after three years of hardship during the epidemic, we have maintained the stability of the domestic market and continued to iterate new products. We decided to open up overseas sales channels to bring our products to more users.\",\"footer.product.category.title\":\"Product Categories\",\"footer.product.brand.title\":\"About Brand\",\"footer.product.factory.title\":\"About Factory\",\"footer.product.factory.product\":\"About Product\",\"footer.product.factory.address\":\"Address\",\"footer.product.we\":\"We\",\"footer.product.contact\":\"Connect\"}"));}),
"[project]/src/locales/lang/zh-CN.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"site.lang\":\"zh-CN\",\"site.title\":\"Limeet - 为宠物营造一个温暖的家\",\"site.keywords\":\"Limeet, 猫用品供应商，猫窝，窝塔，猫游戏地毯，猫隧道，猫用品\",\"site.description\":\"我们专注给跨境电商提供更好的猫用品，更低廉质优的猫用品\",\"common.header.name\":\"LIMEET 宠物家\",\"common.header.name.second\":\"为宠物营造一个温暖的家。\",\"common.header.name.des\":\"我们设计了许多富有创意的猫家具，让猫和人能够温馨地共存。\",\"common.nav.home\":\"首页\",\"common.nav.products\":\"产品\",\"common.nav.factory\":\"工厂\",\"common.nav.brand\":\"品牌\",\"common.nav.brand.story\":\"品牌故事\",\"common.nav.brand.idea\":\"品牌理念\",\"common.nav.brand.keywords\":\"品牌关键词\",\"common.nav.brand.image\":\"品牌形象\",\"common.nav.brand.strength\":\"品牌实例\",\"common.nav.category.gamesToys\":\"游戏玩具\",\"common.nav.category.catBed\":\"猫窝\",\"common.nav.category.furniture\":\"猫家具&拼搭\",\"common.nav.category.foodBox\":\"食盒\",\"common.nav.category.all\":\"所有商品\",\"common.more\":\"更多...\",\"common.title.sales\":\"热销\",\"common.title.categories\":\"分类\",\"common.title.attribute\":\"产品属性\",\"common.title.detail\":\"产品详情\",\"common.title.list\":\"产品列表\",\"common.about.name\":\"关于\",\"common.about.tip\":\"工厂每天忙碌的场景。\",\"common.about.des\":\"欢迎来到 Limeet， 我们是您最好的伙伴，为您和您的宠物提供各种高品质的宠物用品和服务。\",\"common.about.company\":\"Shanghai Erka International Trade Co., Ltd\",\"common.about.address\":\"2nd Floor, 1270 Luofen Road, Baoshan District, Shanghai, China\",\"detail.buy\":\"去淘宝购买\",\"brand.page.story.list01\":\"Limeet 宠物家，打造宠物和家的完美融合，是连接您与宠物之间的桥梁。\",\"brand.page.story.list02\":\"我们由衷感谢能有机会与您及您的毛茸伙伴分享我们的产品。在 Limeet，我们一心打造更贴合宠物需求的设计 —— 这些设计融合了顶尖环保材料与精湛工艺，能无缝融入您的居家生活。我们的设计理念既注重用户友好，又坚守自然环保的氛围。\",\"brand.page.story.list03\":\"我们在宠物对产品的体验上倾注了大量心思，反复测试产品的适用性，并根据需要调整设计。在促进人与宠物之间的完美和谐之余，我们也将宠物的健康、成长及日常需求放在首位。\",\"brand.page.story.list04\":\"目前，我们的产品主要面向猫咪，涵盖了它们所有喜爱的活动：玩耍、攀爬、抓挠、打盹、使用猫砂，甚至还有带薄荷味的毛绒玩具。这些产品在各种场景都很适用 —— 客厅、卧室、庭院、宠物店、猫咖等等，不一而足\",\"brand.page.story.list05\":\"Limeet 致力于打造现代化的舒适空间，让您和宠物都能在其中惬意生活 —— 这样您就无需在保持家居美观和让宠物开心之间做选择。通过在产品的每一个环节（功能、材料、设计和多功能性）都做到精益求精，我们实现了这一愿景，为您提供简单的解决方案，让您与宠物的生活轻松而和谐。\",\"brand.page.idea\":\"当今时代，对于不少人而言，有了宠物，快节奏的都市生活变得丰富而有趣，而我们能做的，就是为宠物们打造更舒适的精致融洽和谐人居生活，与我们幸福地长久相伴。Limeet 遵循北欧环保标准，融合东方居住理念，精心研发每款宠物居产品，只为激发爱宠的天性和活力。\",\"brand.page.keywords.list01\":\"环保、活力、安全。\",\"brand.page.keywords.list02\":\"我们所有的产品都是基于欧美通用环保材料制造，无异味无挥发。\",\"brand.page.keywords.list03\":\"我们设计产品在实用的同时有趣、互动，激发宠物们活力。\",\"brand.page.keywords.list04\":\"我们设计产品安全、实用与人居融洽。\",\"brand.page.image.list01\":\"自2003年创立至今，“Limeet”一直坚守“匠心为犬猫”的初心，秉承“爱宠如亲”的理念，为天下宠物打造更好更有价值感的产品，满足不断迭代的消费需求。\",\"brand.page.image.list02\":\"为全球养宠人士打造更具品质感的消费体验。\",\"brand.page.image.list03\":\"我们就像桥梁的建立者，不断寻找新的连接、新的宠物居设计，从而创造更美好的人居环境，让每只犬猫充满活力，与你相伴更久。\",\"brand.page.strength.list01\":\"Limeet 长期专注于宠物家居的研发、生产和销售，在国内拥有自己的生产基地，建有一套完整标准化的生产线。\",\"brand.page.strength.list02\":\"•  2014年，在上海金山，建设占地3前多平方米生成基地，拥有行业先进的3D打印机设备、雕刻机设备等，包括一体化的设计软件，实现了高速的设计和生产迭代，满足消费需求。\",\"brand.page.strength.list03\":\"•  2018年，随着国内电商企业蓬勃发展，我们发展了淘宝天猫店铺，线上月销量达到20W，线下销量30W。\",\"brand.page.strength.list04\":\"•  2023年，经过3年疫情艰辛的煎熬，我们保持国内市场稳定，继续不断地新产品迭代，我们决定开创海外销售渠道，把我们的产品带给更多的用户。\",\"footer.product.category.title\":\"产品分类\",\"footer.product.brand.title\":\"关于品牌\",\"footer.product.factory.title\":\"关于工厂\",\"footer.product.factory.product\":\"关于产品\",\"footer.product.factory.address\":\"地址\",\"footer.product.we\":\"我们\",\"footer.product.contact\":\"联系\"}"));}),
"[project]/src/locales/lang/zh-TW.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"site.lang\":\"zh-TW\",\"site.title\":\"Limeet - 為寵物打造溫馨的家。\",\"site.keywords\":\"Limeet, 猫用品供应商，猫窝，窝塔，猫游戏地毯，猫隧道，猫用品\",\"common.header.name\":\"LIMEET 宠物家\",\"common.header.name.second\":\"為寵物打造溫馨的家。\",\"common.header.name.des\":\"我們設計了許多創意貓家具，讓貓咪和人溫馨共處。\",\"common.nav.home\":\"首頁\",\"common.nav.products\":\"產品\",\"common.nav.factory\":\"工廠\",\"common.nav.brand\":\"品牌\",\"common.nav.brand.story\":\"品牌故事\",\"common.nav.brand.idea\":\"品牌理念\",\"common.nav.brand.keywords\":\"品牌关键词\",\"common.nav.brand.image\":\"品牌形象\",\"common.nav.brand.strength\":\"品牌实例\",\"common.nav.category.gamesToys\":\"游戏玩具\",\"common.nav.category.catBed\":\"猫窝\",\"common.nav.category.furniture\":\"猫家具&拼搭\",\"common.nav.category.foodBox\":\"食盒\",\"common.nav.category.all\":\"所有商品\",\"common.more\":\"更多...\",\"common.title.sales\":\"熱賣\",\"common.title.categories\":\"分類\",\"common.title.attribute\":\"产品属性\",\"common.title.detail\":\"产品详情\",\"common.title.list\":\"產品列表\",\"common.about.name\":\"關於\",\"common.about.tip\":\"工廠裡每天都是忙碌的景象。\",\"common.about.des\":\"歡迎來到 Limeet， 我們是您最好的伴侶，為您和您的寵物提供各種高品質的寵物用品和服務。\",\"common.about.company\":\"Shanghai Erka International Trade Co., Ltd\",\"common.about.address\":\"2nd Floor, 1270 Luofen Road, Baoshan District, Shanghai, China\",\"detail.buy\":\"去亞馬遜購買\",\"brand.page.story.list01\":\"Limeet 宠物家，打造宠物和家的完美融合，是连接您与宠物之间的桥梁。\",\"brand.page.story.list02\":\"我们由衷感谢能有机会与您及您的毛茸伙伴分享我们的产品。在 Limeet，我们一心打造更贴合宠物需求的设计 —— 这些设计融合了顶尖环保材料与精湛工艺，能无缝融入您的居家生活。我们的设计理念既注重用户友好，又坚守自然环保的氛围。\",\"brand.page.story.list03\":\"我们在宠物对产品的体验上倾注了大量心思，反复测试产品的适用性，并根据需要调整设计。在促进人与宠物之间的完美和谐之余，我们也将宠物的健康、成长及日常需求放在首位。\",\"brand.page.story.list04\":\"目前，我们的产品主要面向猫咪，涵盖了它们所有喜爱的活动：玩耍、攀爬、抓挠、打盹、使用猫砂，甚至还有带薄荷味的毛绒玩具。这些产品在各种场景都很适用 —— 客厅、卧室、庭院、宠物店、猫咖等等，不一而足\",\"brand.page.story.list05\":\"Limeet 致力于打造现代化的舒适空间，让您和宠物都能在其中惬意生活 —— 这样您就无需在保持家居美观和让宠物开心之间做选择。通过在产品的每一个环节（功能、材料、设计和多功能性）都做到精益求精，我们实现了这一愿景，为您提供简单的解决方案，让您与宠物的生活轻松而和谐。\",\"brand.page.idea\":\"当今时代，对于不少人而言，有了宠物，快节奏的都市生活变得丰富而有趣，而我们能做的，就是为宠物们打造更舒适的精致融洽和谐人居生活，与我们幸福地长久相伴。Limeet遵循北欧环保标准，融合东方居住理念，精心研发每款宠物居产品，只为激发爱宠的天性和活力。\",\"brand.page.keywords.list01\":\"保、活力、安全。\",\"brand.page.keywords.list02\":\"我们所有的产品都是基于欧美通用环保材料制造，无异味无挥发。\",\"brand.page.keywords.list03\":\"我们设计产品在实用的同时有趣、互动，激发宠物们活力。\",\"brand.page.keywords.list04\":\"我们设计产品安全、实用与人居融洽。\",\"brand.page.image.list01\":\"自2003年创立至今，“Limeet”一直坚守“匠心为犬猫”的初心，秉承“爱宠如亲”的理念，为天下宠物打造更好更有价值感的产品，满足不断迭代的消费需求。\",\"brand.page.image.list02\":\"为全球养宠人士打造更具品质感的消费体验。\",\"brand.page.image.list03\":\"我们就像桥梁的建立者，不断寻找新的连接、新的宠物居设计，从而创造更美好的人居环境，让每只犬猫充满活力，与你相伴更久。\",\"brand.page.strength.list01\":\"Limeet长期专注于宠物家居的研发、生产和销售，在国内拥有自己的生产基地，建有一套完整标准化的生产线。\",\"brand.page.strength.list02\":\"•  2 014年，在上海金山，建设占地3前多平方米生成基地，拥有行业先进的3D打印机设备、雕刻机设备等，包括一体化的设计软件，实现了高速的设计和生产迭代，满足消费需求。\",\"brand.page.strength.list03\":\"•  2018年，随着国内电商企业蓬勃发展，我们发展了淘宝天猫店铺，线上月销量达到20W，线下销量30W。\",\"brand.page.strength.list04\":\"•  2023年，经过3年疫情艰辛的煎熬，我们保持国内市场稳定，继续不断地新产品迭代，我们决定开创海外销售渠道，把我们的产品带给更多的用户。\",\"footer.product.category.title\":\"产品分类\",\"footer.product.brand.title\":\"关于品牌\",\"footer.product.factory.title\":\"关于工厂\",\"footer.product.factory.product\":\"关于产品\",\"footer.product.factory.address\":\"地址\",\"footer.product.we\":\"我们\",\"footer.product.contact\":\"联系\"}"));}),
"[project]/src/locales/lang/ja-JP.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"site.lang\":\"ja-JP\",\"site.title\":\"LIMEET ペットホーム - ペットのための暖かい家を作ります\",\"site.keywords\":\"Limeet, Limeetket, Limeetpet,キャットハウス,猫おもちゃ,猫タワー,猫キャットハウス,猫プレイマット,猫トンネル長い,キャットベッド,キャットタワー,猫ハウス,キャットハウス,猫用ベッド,猫ベッド,猫のベッド,猫ベッド,フェルト猫ベッド,猫ちぐら,猫用品の供給\",\"site.description\":\"Limeet, ペットのための暖かい家を作ります，猫と人が温かく共存できる、クリエイティブな猫用家具を多数デザインしています。\",\"common.header.name\":\"LIMEET ペットホーム\",\"common.header.name.second\":\"ペットのための暖かい家を作ります。\",\"common.header.name.des\":\"猫と人が温かく共存できる、クリエイティブな猫用家具を多数デザインしています。\",\"common.nav.home\":\"表紙\",\"common.nav.products\":\"製品\",\"common.nav.factory\":\"工場\",\"common.nav.brand\":\"ブランド\",\"common.nav.brand.story\":\"ブランドストーリー\",\"common.nav.brand.idea\":\"ブランド理念\",\"common.nav.brand.keywords\":\"ブランドキーワード\",\"common.nav.brand.image\":\"ブランドイメージ\",\"common.nav.brand.strength\":\"ブランド力\",\"common.nav.category.gamesToys\":\"ゲームのおもちゃ\",\"common.nav.category.catBed\":\"猫の巣\",\"common.nav.category.furniture\":\"猫の家具と建物\",\"common.nav.category.foodBox\":\"フードボックス\",\"common.nav.category.all\":\"すべて\",\"common.more\":\"続きを見る……\",\"common.title.sales\":\"最高の売上高\",\"common.title.categories\":\"カテゴリー\",\"common.title.attribute\":\"製品特性\",\"common.title.detail\":\"製品詳細\",\"common.title.list\":\"製品リスト\",\"common.about.name\":\"について\",\"common.about.tip\":\"忙しい毎日の工場の風景。\",\"common.about.des\":\"Limeet へようこそ。私たちは、お客様とペットのために、幅広い高品質のペット用品とサービスを提供し、お客様の最高のパートナーです。\",\"common.about.company\":\"Shanghai Erka International Trade Co., Ltd\",\"common.about.address\":\"2nd Floor, 1270 Luofen Road, Baoshan District, Shanghai, China\",\"brand.page.story.list01\":\"Limeet ペットホーム はペットと住まいの完璧な融合を実現し、あなたとペットをつなぐ架け橋となります。\",\"brand.page.story.list02\":\"この度は、皆様とお世話になっているペットの皆さんに、弊社の製品をご紹介できる機会を得られたことを心から感謝しています。Limeetは、よりペットに優しいデザインの製品を多く創り上げることを目指しています。その目標は、高品質の環境に優しい素材と優れた技術を融合させ、日常生活の空間に自然に溶け込ませることです。製品デザインにおいては、使いやすさを重視すると同時に、エコで自然な風格を保つことに力を入れています。 \",\"brand.page.story.list03\":\"ペットたちが製品を使う際の体感を十分に考慮し、何度もペットの適応性を検証し、必要に応じて速やかに改良を加えています。人とペットが共生する関係を追求する中で、特にペットの成長期の健康と生活上のニーズを満たすことに重点を置いています。 \",\"brand.page.story.list04\":\"現在の製品は主に猫を対象としており、機能ごとに遊び用、登攀用、ひっかき用、休息用、トイレ用、ミント風味のぬいぐるみなどに分類されています。これにより、リビング、寝室、庭、ペットショップ、キャットカフェなど、さまざまな場面での使用に対応しています。\",\"brand.page.story.list05\":\" Limeetは、現代的で快適な人とペットの共生空間を作り上げることで、皆様が住居の風格と快適さを犠牲にすることなく、生活をよりラクに過ごせるようサポートします。製品の機能、素材、デザイン、場面への適応性を全方位的に磨き上げることで、Limeetは「現代的で快適な人とペットの共生空間の構築」という理念を真に実現し、飼い主が住居の風格の統一性とペットの生活ニーズのどちらをも妥协する必要がないようにしています。それにより、リラックスした調和のとれた人とペットの生活を実現するための、実践可能なソリューションを提供しています。\",\"brand.page.idea\":\"多くの人にとって、ペットを飼うことで、目まぐるしく変化する都市生活が豊かで面白くなっている現代において、私たちにできることは、ペットたちとより快適で洗練された調和のとれた人間生活を創造し、幸せに暮らすことです。久しぶりの私。 Limeet は、北欧の環境保護基準に従い、東洋の生活概念を統合し、ペットの性質と活力を刺激するために、各ペット用ホーム製品を注意深く開発しています。\",\"brand.page.keywords.list01\":\"環境保護、活力、安全。\",\"brand.page.keywords.list02\":\"当社の製品はすべてヨーロッパとアメリカの環境に優しい一般的な素材で作られており、臭いや揮発性がありません。\",\"brand.page.keywords.list03\":\"私たちはペットにとって楽しく、インタラクティブで刺激的でありながら実用的な製品をデザインしています。\",\"brand.page.keywords.list04\":\"私たちは安全で実用的で人々に調和する製品をデザインします。\",\"brand.page.image.list01\":\"「ライミート」は2003年の創業以来、常に「犬と猫のためのものづくり」という初志を貫き、「ペットを親戚のように愛する」というコンセプトを貫き、世界中のペットのためにより良い、より価値ある製品を創造してきました。常に繰り返される消費者のニーズに応えます。\",\"brand.page.image.list02\":\"世界中のペットの飼い主のために、より質の高い消費者体験を創出する\",\"brand.page.image.list03\":\"私たちは橋を架ける人のようなもので、すべての犬や猫が活力に満ち、より長くあなたと一緒にいられるように、より良い生活環境を作り出すために、常に新しいつながりと新しいペットホームのデザインを探しています。\",\"brand.page.strength.list01\":\"Limeet は長年にわたりペット用家具の研究開発、生産、販売に注力してきました。中国に独自の生産拠点と完全な標準化された生産ラインを備えています。\",\"brand.page.strength.list02\":\"•  2014年、上海金山に3平方メートル以上の生産拠点を建設。統合設計ソフトをはじめ、業界トップクラスの3Dプリンター設備、彫刻機設備等を備え、高速化を実現。消費者のニーズを満たすために設計と生産を繰り返します。\",\"brand.page.strength.list03\":\"•  2018年、国内の電子商取引企業の活発な発展に伴い、タオバオと天猫のストアを開発し、月間オンライン売上高は20W、オフライン売上高は30Wに達しました。\",\"brand.page.strength.list04\":\"•  2023年、感染症流行による3年間の苦難を経て、国内市場の安定を維持し、新製品を継続的に投入し、より多くのユーザーに製品を提供することを決定しました。\",\"footer.product.category.title\":\"製品分類\",\"footer.product.brand.title\":\"ブランドについて\",\"footer.product.factory.title\":\"工場について\",\"footer.product.factory.product\":\"製品について\",\"footer.product.factory.address\":\"住所\",\"footer.product.we\":\"私たち\",\"footer.product.contact\":\"接続する\"}"));}),
"[project]/src/locales/resource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$en$2d$US$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/lang/en-US.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$zh$2d$CN$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/lang/zh-CN.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$zh$2d$TW$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/lang/zh-TW.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$ja$2d$JP$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/locales/lang/ja-JP.json (json)");
;
;
;
;
const resources = {
    en: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$en$2d$US$2e$json__$28$json$29$__["default"]
    },
    zh: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$zh$2d$CN$2e$json__$28$json$29$__["default"]
    },
    tw: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$zh$2d$TW$2e$json__$28$json$29$__["default"]
    },
    ja: {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$ja$2d$JP$2e$json__$28$json$29$__["default"]
    },
    'en-US': {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$en$2d$US$2e$json__$28$json$29$__["default"]
    },
    'zh-CN': {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$zh$2d$CN$2e$json__$28$json$29$__["default"]
    },
    'zh-TW': {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$zh$2d$TW$2e$json__$28$json$29$__["default"]
    },
    'ja-JP': {
        translation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$lang$2f$ja$2d$JP$2e$json__$28$json$29$__["default"]
    }
};
const __TURBOPACK__default__export__ = resources;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/locales/i18n_client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/locales/resource.js [app-client] (ecmascript)");
;
;
;
// 默认
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initReactI18next"]).init({
    debug: false,
    lng: 'ja-JP',
    resources: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    fallbackLng: 'ja-JP',
    nonExplicitSupportedLngs: true,
    preload: true,
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false
    },
    interpolation: {
        escapeValue: false
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 // https://codeewander.github.io/docs/react-i18next
}),
"[project]/src/constant/language.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// eslint-disable-next-line import/no-anonymous-default-export
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = {
    'en-US': {
        label: 'English',
        value: 'en-US',
        path: '/home/en-US'
    },
    'ja-JP': {
        label: 'Japanese',
        value: 'ja-JP',
        path: '/home/ja-JP'
    },
    'zh-CN': {
        label: 'Chinese',
        value: 'zh-CN',
        path: '/home/zh-CN'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChangeLanguage/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$locales$2f$i18n_client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/locales/i18n_client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constant/language.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Dropdown.js [app-client] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/rootStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$store2$2f$dist$2f$store2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/store2/dist/store2.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function ChangeLanguage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const { language, setLanguage, getCategoriesFetch, getProductListFetch, getBannerFetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const popupColumns = ()=>{
        const html = [];
        const data = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
        data.map((item)=>{
            html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Item, {
                onClick: ()=>popupSelectValue(item.value, item.path),
                eventKey: item.path,
                href: item.path,
                children: item.label
            }, item.value, false, {
                fileName: "[project]/src/components/ChangeLanguage/index.jsx",
                lineNumber: 21,
                columnNumber: 9
            }, this));
        });
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "lan-list",
            children: html
        }, void 0, false, {
            fileName: "[project]/src/components/ChangeLanguage/index.jsx",
            lineNumber: 26,
            columnNumber: 12
        }, this);
    };
    const languageCurrent = (language)=>{
        if (language) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][language] && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constant$2f$language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][language].label || 'ja-JP';
        }
    };
    const popupSelectValue = (value, path)=>{
        i18n.changeLanguage(value);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$store2$2f$dist$2f$store2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('lang', value);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$store2$2f$dist$2f$store2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('i18nextLng', value);
        setLanguage(value);
        getCategoriesFetch();
        getProductListFetch();
        getBannerFetch();
        router.push(path);
    // window.location.reload();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "locale",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Toggle, {
                    variant: "secondary",
                    id: "dropdown-basic",
                    children: languageCurrent(language)
                }, void 0, false, {
                    fileName: "[project]/src/components/ChangeLanguage/index.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"].Menu, {
                    children: popupColumns()
                }, void 0, false, {
                    fileName: "[project]/src/components/ChangeLanguage/index.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ChangeLanguage/index.jsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ChangeLanguage/index.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(ChangeLanguage, "UsV7nH781WeL9usDkN604o72dBg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = ChangeLanguage;
const __TURBOPACK__default__export__ = ChangeLanguage;
var _c;
__turbopack_context__.k.register(_c, "ChangeLanguage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2f721393._.js.map