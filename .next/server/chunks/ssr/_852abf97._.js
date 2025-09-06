module.exports = [
"[project]/src/components/ProductGroup/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/rootStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-ssr] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const paginationInit = {
    current: 1,
    pageSize: 4
};
function ProductGroup() {
    const { projectId, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('common');
    const { productDetail } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { itemGroupList, setItemGroupList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { pagination, setPagination } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(paginationInit);
    const { total, setTotal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const { item_group_id } = productDetail;
    const getItemGroupList = async ()=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryProductGroup"])({
            pagination,
            language,
            projectId,
            item_group_id
        });
        if (result && result.status === 200 && result.data && result.data.rows) {
            setItemGroupList(result.data.rows);
            setTotal(result.data.total);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        getItemGroupList();
    }, [
        item_group_id,
        pagination
    ]);
    const prev = ()=>{
        const { current } = pagination;
        const page = current - 1;
        const pagePagination = Object.assign({}, pagination, {
            current: page
        });
        setPagination(pagePagination);
    };
    const next = ()=>{
        const { current } = pagination;
        const page = current + 1;
        const pagePagination = Object.assign({}, pagination, {
            current: page
        });
        setPagination(pagePagination);
    };
    const listAttr = ()=>{
        const html = [];
        if (itemGroupList && itemGroupList.length) {
            itemGroupList.map((item, idx)=>{
                html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "img-box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.image_link
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProductGroup/index.jsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductGroup/index.jsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "title",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductGroup/index.jsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "price",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "unit",
                                        children: item.monetary_unit
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductGroup/index.jsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "value",
                                        children: item.sale_price
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductGroup/index.jsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "original-value",
                                        children: [
                                            "-",
                                            item.discount,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProductGroup/index.jsx",
                                        lineNumber: 63,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductGroup/index.jsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductGroup/index.jsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this)
                }, `${item.id}_${idx}`, false, {
                    fileName: "[project]/src/components/ProductGroup/index.jsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this));
            });
        }
        return html;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        className: "product-group clearfix",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prev",
                onClick: prev,
                children: "prev"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductGroup/index.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: listAttr()
            }, void 0, false, {
                fileName: "[project]/src/components/ProductGroup/index.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "next",
                onClick: next,
                children: "next"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductGroup/index.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductGroup/index.jsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ProductGroup;
}),
"[project]/src/components/Title/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Title(props) {
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "title-wrap clearfix",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "left-icon"
                }, void 0, false, {
                    fileName: "[project]/src/components/Title/index.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: props.title
                }, void 0, false, {
                    fileName: "[project]/src/components/Title/index.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "right-icon"
                }, void 0, false, {
                    fileName: "[project]/src/components/Title/index.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Title/index.jsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Title/index.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = Title;
}),
"[project]/src/components/LocalStorageClient/index.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$store2$2f$dist$2f$store2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/store2/dist/store2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/rootStore.js [app-ssr] (ecmascript)");
'use client';
;
;
;
// set((stats) => ({ ...stats, productDetail: result.data, saleSkusList: result.data.saleSkusList, currentSaleSku: result.data.saleSkusList[0] }));
function LocalStorageClient({ lang, swiperBanner, productDetail, c_key, categories, productList }) {
    const { setLanguage, setSwiperBanner, setProductDetail, setCategories, setProductTypeId, setProductList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // setCategories(rows);
    // setProductTypeId(key);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (swiperBanner) {
            setSwiperBanner(swiperBanner);
        }
        if (lang) {
            setLanguage(lang);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$store2$2f$dist$2f$store2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].set('lang', lang);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$store2$2f$dist$2f$store2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].set('i18nextLng', lang);
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
    }, [
        lang
    ]);
    return null;
}
const __TURBOPACK__default__export__ = LocalStorageClient;
}),
"[project]/node_modules/void-elements/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */ module.exports = {
    "area": true,
    "base": true,
    "br": true,
    "col": true,
    "embed": true,
    "hr": true,
    "img": true,
    "input": true,
    "link": true,
    "meta": true,
    "param": true,
    "source": true,
    "track": true,
    "wbr": true
};
}),
"[project]/node_modules/html-parse-stringify/dist/html-parse-stringify.module.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$void$2d$elements$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/void-elements/index.js [app-ssr] (ecmascript)");
;
var t = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function n(n) {
    var r = {
        type: "tag",
        name: "",
        voidElement: !1,
        attrs: {},
        children: []
    }, i = n.match(/<\/?([^\s]+?)[/\s>]/);
    if (i && (r.name = i[1], (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$void$2d$elements$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][i[1]] || "/" === n.charAt(n.length - 2)) && (r.voidElement = !0), r.name.startsWith("!--"))) {
        var s = n.indexOf("--\x3e");
        return {
            type: "comment",
            comment: -1 !== s ? n.slice(4, s) : ""
        };
    }
    for(var a = new RegExp(t), c = null; null !== (c = a.exec(n));)if (c[0].trim()) if (c[1]) {
        var o = c[1].trim(), l = [
            o,
            ""
        ];
        o.indexOf("=") > -1 && (l = o.split("=")), r.attrs[l[0]] = l[1], a.lastIndex--;
    } else c[2] && (r.attrs[c[2]] = c[3].trim().substring(1, c[3].length - 1));
    return r;
}
var r = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, i = /^\s*$/, s = Object.create(null);
function a(e, t) {
    switch(t.type){
        case "text":
            return e + t.content;
        case "tag":
            return e += "<" + t.name + (t.attrs ? function(e) {
                var t = [];
                for(var n in e)t.push(n + '="' + e[n] + '"');
                return t.length ? " " + t.join(" ") : "";
            }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(a, "") + "</" + t.name + ">";
        case "comment":
            return e + "\x3c!--" + t.comment + "--\x3e";
    }
}
var c = {
    parse: function(e, t) {
        t || (t = {}), t.components || (t.components = s);
        var a, c = [], o = [], l = -1, m = !1;
        if (0 !== e.indexOf("<")) {
            var u = e.indexOf("<");
            c.push({
                type: "text",
                content: -1 === u ? e : e.substring(0, u)
            });
        }
        return e.replace(r, function(r, s) {
            if (m) {
                if (r !== "</" + a.name + ">") return;
                m = !1;
            }
            var u, f = "/" !== r.charAt(1), h = r.startsWith("\x3c!--"), p = s + r.length, d = e.charAt(p);
            if (h) {
                var v = n(r);
                return l < 0 ? (c.push(v), c) : ((u = o[l]).children.push(v), c);
            }
            if (f && (l++, "tag" === (a = n(r)).type && t.components[a.name] && (a.type = "component", m = !0), a.voidElement || m || !d || "<" === d || a.children.push({
                type: "text",
                content: e.slice(p, e.indexOf("<", p))
            }), 0 === l && c.push(a), (u = o[l - 1]) && u.children.push(a), o[l] = a), (!f || a.voidElement) && (l > -1 && (a.voidElement || a.name === r.slice(2, -1)) && (l--, a = -1 === l ? c : o[l]), !m && "<" !== d && d)) {
                u = -1 === l ? c : o[l].children;
                var x = e.indexOf("<", p), g = e.slice(p, -1 === x ? void 0 : x);
                i.test(g) && (g = " "), (x > -1 && l + u.length >= 0 || " " !== g) && u.push({
                    type: "text",
                    content: g
                });
            }
        }), c;
    },
    stringify: function(e) {
        return e.reduce(function(e, t) {
            return e + a("", t);
        }, "");
    }
};
const __TURBOPACK__default__export__ = c;
 //# sourceMappingURL=html-parse-stringify.module.js.map
}),
"[project]/node_modules/react-i18next/dist/es/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDisplayName",
    ()=>getDisplayName,
    "hasLoadedNamespace",
    ()=>hasLoadedNamespace,
    "isObject",
    ()=>isObject,
    "isString",
    ()=>isString,
    "loadLanguages",
    ()=>loadLanguages,
    "loadNamespaces",
    ()=>loadNamespaces,
    "warn",
    ()=>warn,
    "warnOnce",
    ()=>warnOnce
]);
const warn = (i18n, code, msg, rest)=>{
    const args = [
        msg,
        {
            code,
            ...rest || {}
        }
    ];
    if (i18n?.services?.logger?.forward) {
        return i18n.services.logger.forward(args, 'warn', 'react-i18next::', true);
    }
    if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
    if (i18n?.services?.logger?.warn) {
        i18n.services.logger.warn(...args);
    } else if (console?.warn) {
        console.warn(...args);
    }
};
const alreadyWarned = {};
const warnOnce = (i18n, code, msg, rest)=>{
    if (isString(msg) && alreadyWarned[msg]) return;
    if (isString(msg)) alreadyWarned[msg] = new Date();
    warn(i18n, code, msg, rest);
};
const loadedClb = (i18n, cb)=>()=>{
        if (i18n.isInitialized) {
            cb();
        } else {
            const initialized = ()=>{
                setTimeout(()=>{
                    i18n.off('initialized', initialized);
                }, 0);
                cb();
            };
            i18n.on('initialized', initialized);
        }
    };
const loadNamespaces = (i18n, ns, cb)=>{
    i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
const loadLanguages = (i18n, lng, ns, cb)=>{
    if (isString(ns)) ns = [
        ns
    ];
    if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1) return loadNamespaces(i18n, ns, cb);
    ns.forEach((n)=>{
        if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
    });
    i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
const hasLoadedNamespace = (ns, i18n, options = {})=>{
    if (!i18n.languages || !i18n.languages.length) {
        warnOnce(i18n, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {
            languages: i18n.languages
        });
        return true;
    }
    return i18n.hasLoadedNamespace(ns, {
        lng: options.lng,
        precheck: (i18nInstance, loadNotPending)=>{
            if (options.bindI18n && options.bindI18n.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
        }
    });
};
const getDisplayName = (Component)=>Component.displayName || Component.name || (isString(Component) && Component.length > 0 ? Component : 'Unknown');
const isString = (obj)=>typeof obj === 'string';
const isObject = (obj)=>typeof obj === 'object' && obj !== null;
}),
"[project]/node_modules/react-i18next/dist/es/unescape.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unescape",
    ()=>unescape
]);
const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/'
};
const unescapeHtmlEntity = (m)=>htmlEntities[m];
const unescape = (text)=>text.replace(matchHtmlEntity, unescapeHtmlEntity);
}),
"[project]/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaults",
    ()=>getDefaults,
    "setDefaults",
    ()=>setDefaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$unescape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/unescape.js [app-ssr] (ecmascript)");
;
let defaultOptions = {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transWrapTextNodes: '',
    transKeepBasicHtmlNodesFor: [
        'br',
        'strong',
        'i',
        'p'
    ],
    useSuspense: true,
    unescape: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$unescape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unescape"]
};
const setDefaults = (options = {})=>{
    defaultOptions = {
        ...defaultOptions,
        ...options
    };
};
const getDefaults = ()=>defaultOptions;
}),
"[project]/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getI18n",
    ()=>getI18n,
    "setI18n",
    ()=>setI18n
]);
let i18nInstance;
const setI18n = (instance)=>{
    i18nInstance = instance;
};
const getI18n = ()=>i18nInstance;
}),
"[project]/node_modules/react-i18next/dist/es/TransWithoutContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trans",
    ()=>Trans,
    "nodesToString",
    ()=>nodesToString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$parse$2d$stringify$2f$dist$2f$html$2d$parse$2d$stringify$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-parse-stringify/dist/html-parse-stringify.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
;
;
;
;
;
const hasChildren = (node, checkLength)=>{
    if (!node) return false;
    const base = node.props?.children ?? node.children;
    if (checkLength) return base.length > 0;
    return !!base;
};
const getChildren = (node)=>{
    if (!node) return [];
    const children = node.props?.children ?? node.children;
    return node.props?.i18nIsDynamicList ? getAsArray(children) : children;
};
const hasValidReactChildren = (children)=>Array.isArray(children) && children.every(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"]);
const getAsArray = (data)=>Array.isArray(data) ? data : [
        data
    ];
const mergeProps = (source, target)=>{
    const newTarget = {
        ...target
    };
    newTarget.props = Object.assign(source.props, target.props);
    return newTarget;
};
const nodesToString = (children, i18nOptions, i18n, i18nKey)=>{
    if (!children) return '';
    let stringNode = '';
    const childrenArray = getAsArray(children);
    const keepArray = i18nOptions?.transSupportBasicHtmlNodes ? i18nOptions.transKeepBasicHtmlNodesFor ?? [] : [];
    childrenArray.forEach((child, childIndex)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(child)) {
            stringNode += `${child}`;
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child)) {
            const { props, type } = child;
            const childPropsCount = Object.keys(props).length;
            const shouldKeepChild = keepArray.indexOf(type) > -1;
            const childChildren = props.children;
            if (!childChildren && shouldKeepChild && !childPropsCount) {
                stringNode += `<${type}/>`;
                return;
            }
            if (!childChildren && (!shouldKeepChild || childPropsCount) || props.i18nIsDynamicList) {
                stringNode += `<${childIndex}></${childIndex}>`;
                return;
            }
            if (shouldKeepChild && childPropsCount === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(childChildren)) {
                stringNode += `<${type}>${childChildren}</${type}>`;
                return;
            }
            const content = nodesToString(childChildren, i18nOptions, i18n, i18nKey);
            stringNode += `<${childIndex}>${content}</${childIndex}>`;
            return;
        }
        if (child === null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])(i18n, 'TRANS_NULL_VALUE', `Passed in a null value as child`, {
                i18nKey
            });
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(child)) {
            const { format, ...clone } = child;
            const keys = Object.keys(clone);
            if (keys.length === 1) {
                const value = format ? `${keys[0]}, ${format}` : keys[0];
                stringNode += `{{${value}}}`;
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])(i18n, 'TRANS_INVALID_OBJ', `Invalid child - Object should only have keys {{ value, format }} (format is optional).`, {
                i18nKey,
                child
            });
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warn"])(i18n, 'TRANS_INVALID_VAR', `Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.`, {
            i18nKey,
            child
        });
    });
    return stringNode;
};
const renderNodes = (children, knownComponentsMap, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape)=>{
    if (targetString === '') return [];
    const keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
    const emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.map((keep)=>`<${keep}`).join('|')).test(targetString);
    if (!children && !knownComponentsMap && !emptyChildrenButNeedsHandling && !shouldUnescape) return [
        targetString
    ];
    const data = knownComponentsMap ?? {};
    const getData = (childs)=>{
        const childrenArray = getAsArray(childs);
        childrenArray.forEach((child)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(child)) return;
            if (hasChildren(child)) getData(getChildren(child));
            else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(child) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child)) Object.assign(data, child);
        });
    };
    getData(children);
    const ast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$parse$2d$stringify$2f$dist$2f$html$2d$parse$2d$stringify$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].parse(`<0>${targetString}</0>`);
    const opts = {
        ...data,
        ...combinedTOpts
    };
    const renderInner = (child, node, rootReactNode)=>{
        const childs = getChildren(child);
        const mappedChildren = mapAST(childs, node.children, rootReactNode);
        return hasValidReactChildren(childs) && mappedChildren.length === 0 || child.props?.i18nIsDynamicList ? childs : mappedChildren;
    };
    const pushTranslatedJSX = (child, inner, mem, i, isVoid)=>{
        if (child.dummy) {
            child.children = inner;
            mem.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(child, {
                key: i
            }, isVoid ? undefined : inner));
        } else {
            mem.push(...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map([
                child
            ], (c)=>{
                const props = {
                    ...c.props
                };
                delete props.i18nIsDynamicList;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(c.type, {
                    ...props,
                    key: i,
                    ref: c.props.ref ?? c.ref
                }, isVoid ? null : inner);
            }));
        }
    };
    const mapAST = (reactNode, astNode, rootReactNode)=>{
        const reactNodes = getAsArray(reactNode);
        const astNodes = getAsArray(astNode);
        return astNodes.reduce((mem, node, i)=>{
            const translationContent = node.children?.[0]?.content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);
            if (node.type === 'tag') {
                let tmp = reactNodes[parseInt(node.name, 10)];
                if (!tmp && knownComponentsMap) tmp = knownComponentsMap[node.name];
                if (rootReactNode.length === 1 && !tmp) tmp = rootReactNode[0][node.name];
                if (!tmp) tmp = {};
                const child = Object.keys(node.attrs).length !== 0 ? mergeProps({
                    props: node.attrs
                }, tmp) : tmp;
                const isElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(child);
                const isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
                const isEmptyTransWithHTML = emptyChildrenButNeedsHandling && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(child) && child.dummy && !isElement;
                const isKnownComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(knownComponentsMap) && Object.hasOwnProperty.call(knownComponentsMap, node.name);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(child)) {
                    const value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
                    mem.push(value);
                } else if (hasChildren(child) || isValidTranslationWithChildren) {
                    const inner = renderInner(child, node, rootReactNode);
                    pushTranslatedJSX(child, inner, mem, i);
                } else if (isEmptyTransWithHTML) {
                    const inner = mapAST(reactNodes, node.children, rootReactNode);
                    pushTranslatedJSX(child, inner, mem, i);
                } else if (Number.isNaN(parseFloat(node.name))) {
                    if (isKnownComponent) {
                        const inner = renderInner(child, node, rootReactNode);
                        pushTranslatedJSX(child, inner, mem, i, node.voidElement);
                    } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
                        if (node.voidElement) {
                            mem.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(node.name, {
                                key: `${node.name}-${i}`
                            }));
                        } else {
                            const inner = mapAST(reactNodes, node.children, rootReactNode);
                            mem.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(node.name, {
                                key: `${node.name}-${i}`
                            }, inner));
                        }
                    } else if (node.voidElement) {
                        mem.push(`<${node.name} />`);
                    } else {
                        const inner = mapAST(reactNodes, node.children, rootReactNode);
                        mem.push(`<${node.name}>${inner}</${node.name}>`);
                    }
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(child) && !isElement) {
                    const content = node.children[0] ? translationContent : null;
                    if (content) mem.push(content);
                } else {
                    pushTranslatedJSX(child, translationContent, mem, i, node.children.length !== 1 || !translationContent);
                }
            } else if (node.type === 'text') {
                const wrapTextNodes = i18nOptions.transWrapTextNodes;
                const content = shouldUnescape ? i18nOptions.unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);
                if (wrapTextNodes) {
                    mem.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(wrapTextNodes, {
                        key: `${node.name}-${i}`
                    }, content));
                } else {
                    mem.push(content);
                }
            }
            return mem;
        }, []);
    };
    const result = mapAST([
        {
            dummy: true,
            children: children || []
        }
    ], ast, getAsArray(children || []));
    return getChildren(result[0]);
};
const fixComponentProps = (component, index, translation)=>{
    const componentKey = component.key || index;
    const comp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"])(component, {
        key: componentKey
    });
    if (!comp.props || !comp.props.children || translation.indexOf(`${index}/>`) < 0 && translation.indexOf(`${index} />`) < 0) {
        return comp;
    }
    function Componentized() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, comp);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(Componentized, {
        key: componentKey
    });
};
const generateArrayComponents = (components, translation)=>components.map((c, index)=>fixComponentProps(c, index, translation));
const generateObjectComponents = (components, translation)=>{
    const componentMap = {};
    Object.keys(components).forEach((c)=>{
        Object.assign(componentMap, {
            [c]: fixComponentProps(components[c], c, translation)
        });
    });
    return componentMap;
};
const generateComponents = (components, translation, i18n, i18nKey)=>{
    if (!components) return null;
    if (Array.isArray(components)) {
        return generateArrayComponents(components, translation);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(components)) {
        return generateObjectComponents(components, translation);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOnce"])(i18n, 'TRANS_INVALID_COMPONENTS', `<Trans /> "components" prop expects an object or array`, {
        i18nKey
    });
    return null;
};
const isComponentsMap = (object)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(object)) return false;
    if (Array.isArray(object)) return false;
    return Object.keys(object).reduce((acc, key)=>acc && Number.isNaN(Number.parseFloat(key)), true);
};
function Trans({ children, count, parent, i18nKey, context, tOptions = {}, values, defaults, components, ns, i18n: i18nFromProps, t: tFromProps, shouldUnescape, ...additionalProps }) {
    const i18n = i18nFromProps || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    if (!i18n) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOnce"])(i18n, 'NO_I18NEXT_INSTANCE', `Trans: You need to pass in an i18next instance using i18nextReactModule`, {
            i18nKey
        });
        return children;
    }
    const t = tFromProps || i18n.t.bind(i18n) || ((k)=>k);
    const reactI18nextOptions = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaults"])(),
        ...i18n.options?.react
    };
    let namespaces = ns || t.ns || i18n.options?.defaultNS;
    namespaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(namespaces) ? [
        namespaces
    ] : namespaces || [
        'translation'
    ];
    const nodeAsString = nodesToString(children, reactI18nextOptions, i18n, i18nKey);
    const defaultValue = defaults || nodeAsString || reactI18nextOptions.transEmptyNodeValue || i18nKey;
    const { hashTransKey } = reactI18nextOptions;
    const key = i18nKey || (hashTransKey ? hashTransKey(nodeAsString || defaultValue) : nodeAsString || defaultValue);
    if (i18n.options?.interpolation?.defaultVariables) {
        values = values && Object.keys(values).length > 0 ? {
            ...values,
            ...i18n.options.interpolation.defaultVariables
        } : {
            ...i18n.options.interpolation.defaultVariables
        };
    }
    const interpolationOverride = values || count !== undefined && !i18n.options?.interpolation?.alwaysFormat || !children ? tOptions.interpolation : {
        interpolation: {
            ...tOptions.interpolation,
            prefix: '#$?',
            suffix: '?$#'
        }
    };
    const combinedTOpts = {
        ...tOptions,
        context: context || tOptions.context,
        count,
        ...values,
        ...interpolationOverride,
        defaultValue,
        ns: namespaces
    };
    const translation = key ? t(key, combinedTOpts) : defaultValue;
    const generatedComponents = generateComponents(components, translation, i18n, i18nKey);
    let indexedChildren = generatedComponents || children;
    let componentsMap = null;
    if (isComponentsMap(generatedComponents)) {
        componentsMap = generatedComponents;
        indexedChildren = children;
    }
    const content = renderNodes(indexedChildren, componentsMap, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
    const useAsParent = parent ?? reactI18nextOptions.defaultTransParent;
    return useAsParent ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(useAsParent, additionalProps, content) : content;
}
}),
"[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initReactI18next",
    ()=>initReactI18next
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
;
;
const initReactI18next = {
    type: '3rdParty',
    init (instance) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDefaults"])(instance.options.react);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setI18n"])(instance);
    }
};
}),
"[project]/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nContext",
    ()=>I18nContext,
    "ReportNamespaces",
    ()=>ReportNamespaces,
    "composeInitialProps",
    ()=>composeInitialProps,
    "getInitialProps",
    ()=>getInitialProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)");
;
;
;
;
;
const I18nContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
class ReportNamespaces {
    constructor(){
        this.usedNamespaces = {};
    }
    addUsedNamespaces(namespaces) {
        namespaces.forEach((ns)=>{
            if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
        });
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces);
    }
}
const composeInitialProps = (ForComponent)=>async (ctx)=>{
        const componentsInitialProps = await ForComponent.getInitialProps?.(ctx) ?? {};
        const i18nInitialProps = getInitialProps();
        return {
            ...componentsInitialProps,
            ...i18nInitialProps
        };
    };
const getInitialProps = ()=>{
    const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    const namespaces = i18n.reportNamespaces?.getUsedNamespaces() ?? [];
    const ret = {};
    const initialI18nStore = {};
    i18n.languages.forEach((l)=>{
        initialI18nStore[l] = {};
        namespaces.forEach((ns)=>{
            initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
        });
    });
    ret.initialI18nStore = initialI18nStore;
    ret.initialLanguage = i18n.language;
    return ret;
};
}),
"[project]/node_modules/react-i18next/dist/es/Trans.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trans",
    ()=>Trans
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$TransWithoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/TransWithoutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
;
;
;
;
function Trans({ children, count, parent, i18nKey, context, tOptions = {}, values, defaults, components, ns, i18n: i18nFromProps, t: tFromProps, shouldUnescape, ...additionalProps }) {
    const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I18nContext"]) || {};
    const i18n = i18nFromProps || i18nFromContext || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    const t = tFromProps || i18n?.t.bind(i18n);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$TransWithoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trans"])({
        children,
        count,
        parent,
        i18nKey,
        context,
        tOptions,
        values,
        defaults,
        components,
        ns: ns || t?.ns || defaultNSFromContext || i18n?.options?.defaultNS,
        i18n,
        t: tFromProps,
        shouldUnescape,
        ...additionalProps
    });
}
}),
"[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslation",
    ()=>useTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/utils.js [app-ssr] (ecmascript)");
;
;
;
const usePrevious = (value, ignore)=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ref.current = ignore ? ref.current : value;
    }, [
        value,
        ignore
    ]);
    return ref.current;
};
const alwaysNewT = (i18n, language, namespace, keyPrefix)=>i18n.getFixedT(language, namespace, keyPrefix);
const useMemoizedT = (i18n, language, namespace, keyPrefix)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(alwaysNewT(i18n, language, namespace, keyPrefix), [
        i18n,
        language,
        namespace,
        keyPrefix
    ]);
const useTranslation = (ns, props = {})=>{
    const { i18n: i18nFromProps } = props;
    const { i18n: i18nFromContext, defaultNS: defaultNSFromContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I18nContext"]) || {};
    const i18n = i18nFromProps || i18nFromContext || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReportNamespaces"]();
    if (!i18n) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOnce"])(i18n, 'NO_I18NEXT_INSTANCE', 'useTranslation: You will need to pass in an i18next instance by using initReactI18next');
        const notReadyT = (k, optsOrDefaultValue)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(optsOrDefaultValue)) return optsOrDefaultValue;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(optsOrDefaultValue) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
            return Array.isArray(k) ? k[k.length - 1] : k;
        };
        const retNotReady = [
            notReadyT,
            {},
            false
        ];
        retNotReady.t = notReadyT;
        retNotReady.i18n = {};
        retNotReady.ready = false;
        return retNotReady;
    }
    if (i18n.options.react?.wait) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["warnOnce"])(i18n, 'DEPRECATED_OPTION', 'useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
    const i18nOptions = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaults"])(),
        ...i18n.options.react,
        ...props
    };
    const { useSuspense, keyPrefix } = i18nOptions;
    let namespaces = ns || defaultNSFromContext || i18n.options?.defaultNS;
    namespaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isString"])(namespaces) ? [
        namespaces
    ] : namespaces || [
        'translation'
    ];
    i18n.reportNamespaces.addUsedNamespaces?.(namespaces);
    const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasLoadedNamespace"])(n, i18n, i18nOptions));
    const memoGetT = useMemoizedT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
    const getT = ()=>memoGetT;
    const getNewT = ()=>alwaysNewT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
    const [t, setT] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getT);
    let joinedNS = namespaces.join();
    if (props.lng) joinedNS = `${props.lng}${joinedNS}`;
    const previousJoinedNS = usePrevious(joinedNS);
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { bindI18n, bindI18nStore } = i18nOptions;
        isMounted.current = true;
        if (!ready && !useSuspense) {
            if (props.lng) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadLanguages"])(i18n, props.lng, namespaces, ()=>{
                    if (isMounted.current) setT(getNewT);
                });
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadNamespaces"])(i18n, namespaces, ()=>{
                    if (isMounted.current) setT(getNewT);
                });
            }
        }
        if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
            setT(getNewT);
        }
        const boundReset = ()=>{
            if (isMounted.current) setT(getNewT);
        };
        if (bindI18n) i18n?.on(bindI18n, boundReset);
        if (bindI18nStore) i18n?.store.on(bindI18nStore, boundReset);
        return ()=>{
            isMounted.current = false;
            if (i18n && bindI18n) bindI18n?.split(' ').forEach((e)=>i18n.off(e, boundReset));
            if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach((e)=>i18n.store.off(e, boundReset));
        };
    }, [
        i18n,
        joinedNS
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMounted.current && ready) {
            setT(getT);
        }
    }, [
        i18n,
        keyPrefix,
        ready
    ]);
    const ret = [
        t,
        i18n,
        ready
    ];
    ret.t = t;
    ret.i18n = i18n;
    ret.ready = ready;
    if (ready) return ret;
    if (!ready && !useSuspense) return ret;
    throw new Promise((resolve)=>{
        if (props.lng) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadLanguages"])(i18n, props.lng, namespaces, ()=>resolve());
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadNamespaces"])(i18n, namespaces, ()=>resolve());
        }
    });
};
}),
"[project]/node_modules/react-i18next/dist/es/withTranslation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withTranslation",
    ()=>withTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/utils.js [app-ssr] (ecmascript)");
;
;
;
const withTranslation = (ns, options = {})=>function Extend(WrappedComponent) {
        function I18nextWithTranslation({ forwardedRef, ...rest }) {
            const [t, i18n, ready] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])(ns, {
                ...rest,
                keyPrefix: options.keyPrefix
            });
            const passDownProps = {
                ...rest,
                t,
                i18n,
                tReady: ready
            };
            if (options.withRef && forwardedRef) {
                passDownProps.ref = forwardedRef;
            } else if (!options.withRef && forwardedRef) {
                passDownProps.forwardedRef = forwardedRef;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(WrappedComponent, passDownProps);
        }
        I18nextWithTranslation.displayName = `withI18nextTranslation(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayName"])(WrappedComponent)})`;
        I18nextWithTranslation.WrappedComponent = WrappedComponent;
        const forwardRef = (props, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(I18nextWithTranslation, Object.assign({}, props, {
                forwardedRef: ref
            }));
        return options.withRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(forwardRef) : I18nextWithTranslation;
    };
}),
"[project]/node_modules/react-i18next/dist/es/Translation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Translation",
    ()=>Translation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
;
const Translation = ({ ns, children, ...options })=>{
    const [t, i18n, ready] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslation"])(ns, options);
    return children(t, {
        i18n,
        lng: i18n.language
    }, ready);
};
}),
"[project]/node_modules/react-i18next/dist/es/I18nextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nextProvider",
    ()=>I18nextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
;
;
function I18nextProvider({ i18n, defaultNS, children }) {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            i18n,
            defaultNS
        }), [
        i18n,
        defaultNS
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I18nContext"].Provider, {
        value
    }, children);
}
}),
"[project]/node_modules/react-i18next/dist/es/useSSR.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSSR",
    ()=>useSSR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
;
;
const useSSR = (initialI18nStore, initialLanguage, props = {})=>{
    const { i18n: i18nFromProps } = props;
    const { i18n: i18nFromContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["I18nContext"]) || {};
    const i18n = i18nFromProps || i18nFromContext || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getI18n"])();
    if (i18n.options?.isClone) return;
    if (initialI18nStore && !i18n.initializedStoreOnce) {
        i18n.services.resourceStore.data = initialI18nStore;
        i18n.options.ns = Object.values(initialI18nStore).reduce((mem, lngResources)=>{
            Object.keys(lngResources).forEach((ns)=>{
                if (mem.indexOf(ns) < 0) mem.push(ns);
            });
            return mem;
        }, i18n.options.ns);
        i18n.initializedStoreOnce = true;
        i18n.isInitialized = true;
    }
    if (initialLanguage && !i18n.initializedLanguageOnce) {
        i18n.changeLanguage(initialLanguage);
        i18n.initializedLanguageOnce = true;
    }
};
}),
"[project]/node_modules/react-i18next/dist/es/withSSR.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withSSR",
    ()=>withSSR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useSSR.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/utils.js [app-ssr] (ecmascript)");
;
;
;
;
const withSSR = ()=>function Extend(WrappedComponent) {
        function I18nextWithSSR({ initialI18nStore, initialLanguage, ...rest }) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSSR"])(initialI18nStore, initialLanguage);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(WrappedComponent, {
                ...rest
            });
        }
        I18nextWithSSR.getInitialProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["composeInitialProps"])(WrappedComponent);
        I18nextWithSSR.displayName = `withI18nextSSR(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDisplayName"])(WrappedComponent)})`;
        I18nextWithSSR.WrappedComponent = WrappedComponent;
        return I18nextWithSSR;
    };
}),
"[project]/node_modules/react-i18next/dist/es/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "date",
    ()=>date,
    "number",
    ()=>number,
    "plural",
    ()=>plural,
    "select",
    ()=>select,
    "selectOrdinal",
    ()=>selectOrdinal,
    "time",
    ()=>time
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$Trans$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/Trans.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$TransWithoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/TransWithoutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$withTranslation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/withTranslation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$Translation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/Translation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$I18nextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/I18nextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$withSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/withSSR.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useSSR$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useSSR.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$initReactI18next$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/initReactI18next.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$i18nInstance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/i18nInstance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/context.js [app-ssr] (ecmascript) <locals>");
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
const date = ()=>'';
const time = ()=>'';
const number = ()=>'';
const select = ()=>'';
const plural = ()=>'';
const selectOrdinal = ()=>'';
}),
"[project]/node_modules/store2/dist/store2.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! store2 - v2.14.4 - 2024-12-26
* Copyright (c) 2024 Nathan Bubna; Licensed MIT */ ;
(function(window, define) {
    var _ = {
        version: "2.14.4",
        areas: {},
        apis: {},
        nsdelim: '.',
        // utilities
        inherit: function(api, o) {
            for(var p in api){
                if (!o.hasOwnProperty(p)) {
                    Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(api, p));
                }
            }
            return o;
        },
        stringify: function(d, fn) {
            return d === undefined || typeof d === "function" ? d + '' : JSON.stringify(d, fn || _.replace);
        },
        parse: function(s, fn) {
            // if it doesn't parse, return as is
            try {
                return JSON.parse(s, fn || _.revive);
            } catch (e) {
                return s;
            }
        },
        // extension hooks
        fn: function(name, fn) {
            _.storeAPI[name] = fn;
            for(var api in _.apis){
                _.apis[api][name] = fn;
            }
        },
        get: function(area, key) {
            return area.getItem(key);
        },
        set: function(area, key, string) {
            area.setItem(key, string);
        },
        remove: function(area, key) {
            area.removeItem(key);
        },
        key: function(area, i) {
            return area.key(i);
        },
        length: function(area) {
            return area.length;
        },
        clear: function(area) {
            area.clear();
        },
        // core functions
        Store: function(id, area, namespace) {
            var store = _.inherit(_.storeAPI, function(key, data, overwrite) {
                if (arguments.length === 0) {
                    return store.getAll();
                }
                if (typeof data === "function") {
                    return store.transact(key, data, overwrite);
                } // fn=data, alt=overwrite
                if (data !== undefined) {
                    return store.set(key, data, overwrite);
                }
                if (typeof key === "string" || typeof key === "number") {
                    return store.get(key);
                }
                if (typeof key === "function") {
                    return store.each(key);
                }
                if (!key) {
                    return store.clear();
                }
                return store.setAll(key, data); // overwrite=data, data=key
            });
            store._id = id;
            try {
                var testKey = '__store2_test';
                area.setItem(testKey, 'ok');
                store._area = area;
                area.removeItem(testKey);
            } catch (e) {
                store._area = _.storage('fake');
            }
            store._ns = namespace || '';
            if (!_.areas[id]) {
                _.areas[id] = store._area;
            }
            if (!_.apis[store._ns + store._id]) {
                _.apis[store._ns + store._id] = store;
            }
            return store;
        },
        storeAPI: {
            // admin functions
            area: function(id, area) {
                var store = this[id];
                if (!store || !store.area) {
                    store = _.Store(id, area, this._ns); //new area-specific api in this namespace
                    if (!this[id]) {
                        this[id] = store;
                    }
                }
                return store;
            },
            namespace: function(namespace, singleArea, delim) {
                delim = delim || this._delim || _.nsdelim;
                if (!namespace) {
                    return this._ns ? this._ns.substring(0, this._ns.length - delim.length) : '';
                }
                var ns = namespace, store = this[ns];
                if (!store || !store.namespace) {
                    store = _.Store(this._id, this._area, this._ns + ns + delim); //new namespaced api
                    store._delim = delim;
                    if (!this[ns]) {
                        this[ns] = store;
                    }
                    if (!singleArea) {
                        for(var name in _.areas){
                            store.area(name, _.areas[name]);
                        }
                    }
                }
                return store;
            },
            isFake: function(force) {
                if (force) {
                    this._real = this._area;
                    this._area = _.storage('fake');
                } else if (force === false) {
                    this._area = this._real || this._area;
                }
                return this._area.name === 'fake';
            },
            toString: function() {
                return 'store' + (this._ns ? '.' + this.namespace() : '') + '[' + this._id + ']';
            },
            // storage functions
            has: function(key) {
                if (this._area.has) {
                    return this._area.has(this._in(key)); //extension hook
                }
                return !!(this._in(key) in this._area);
            },
            size: function() {
                return this.keys().length;
            },
            each: function(fn, fill) {
                for(var i = 0, m = _.length(this._area); i < m; i++){
                    var key = this._out(_.key(this._area, i));
                    if (key !== undefined) {
                        if (fn.call(this, key, this.get(key), fill) === false) {
                            break;
                        }
                    }
                    if (m > _.length(this._area)) {
                        m--;
                        i--;
                    } // in case of removeItem
                }
                return fill || this;
            },
            keys: function(fillList) {
                return this.each(function(k, v, list) {
                    list.push(k);
                }, fillList || []);
            },
            get: function(key, alt) {
                var s = _.get(this._area, this._in(key)), fn;
                if (typeof alt === "function") {
                    fn = alt;
                    alt = null;
                }
                return s !== null ? _.parse(s, fn) : alt != null ? alt : s;
            },
            getAll: function(fillObj) {
                return this.each(function(k, v, all) {
                    all[k] = v;
                }, fillObj || {});
            },
            transact: function(key, fn, alt) {
                var val = this.get(key, alt), ret = fn(val);
                this.set(key, ret === undefined ? val : ret);
                return this;
            },
            set: function(key, data, overwrite) {
                var d = this.get(key), replacer;
                if (d != null && overwrite === false) {
                    return data;
                }
                if (typeof overwrite === "function") {
                    replacer = overwrite;
                    overwrite = undefined;
                }
                return _.set(this._area, this._in(key), _.stringify(data, replacer), overwrite) || d;
            },
            setAll: function(data, overwrite) {
                var changed, val;
                for(var key in data){
                    val = data[key];
                    if (this.set(key, val, overwrite) !== val) {
                        changed = true;
                    }
                }
                return changed;
            },
            add: function(key, data, replacer) {
                var d = this.get(key);
                if (d instanceof Array) {
                    data = d.concat(data);
                } else if (d !== null) {
                    var type = typeof d;
                    if (type === typeof data && type === 'object') {
                        for(var k in data){
                            d[k] = data[k];
                        }
                        data = d;
                    } else {
                        data = d + data;
                    }
                }
                _.set(this._area, this._in(key), _.stringify(data, replacer));
                return data;
            },
            remove: function(key, alt) {
                var d = this.get(key, alt);
                _.remove(this._area, this._in(key));
                return d;
            },
            clear: function() {
                if (!this._ns) {
                    _.clear(this._area);
                } else {
                    this.each(function(k) {
                        _.remove(this._area, this._in(k));
                    }, 1);
                }
                return this;
            },
            clearAll: function() {
                var area = this._area;
                for(var id in _.areas){
                    if (_.areas.hasOwnProperty(id)) {
                        this._area = _.areas[id];
                        this.clear();
                    }
                }
                this._area = area;
                return this;
            },
            // internal use functions
            _in: function(k) {
                if (typeof k !== "string") {
                    k = _.stringify(k);
                }
                return this._ns ? this._ns + k : k;
            },
            _out: function(k) {
                return this._ns ? k && k.indexOf(this._ns) === 0 ? k.substring(this._ns.length) : undefined : k;
            }
        },
        storage: function(name) {
            return _.inherit(_.storageAPI, {
                items: {},
                name: name
            });
        },
        storageAPI: {
            length: 0,
            has: function(k) {
                return this.items.hasOwnProperty(k);
            },
            key: function(i) {
                var c = 0;
                for(var k in this.items){
                    if (this.has(k) && i === c++) {
                        return k;
                    }
                }
            },
            setItem: function(k, v) {
                if (!this.has(k)) {
                    this.length++;
                }
                this.items[k] = v;
            },
            removeItem: function(k) {
                if (this.has(k)) {
                    delete this.items[k];
                    this.length--;
                }
            },
            getItem: function(k) {
                return this.has(k) ? this.items[k] : null;
            },
            clear: function() {
                for(var k in this.items){
                    this.removeItem(k);
                }
            }
        } // end _.storageAPI
    };
    var store = // safely set this up (throws error in IE10/32bit mode for local files)
    _.Store("local", function() {
        try {
            return localStorage;
        } catch (e) {}
    }());
    store.local = store; // for completeness
    store._ = _; // for extenders and debuggers...
    // safely setup store.session (throws exception in FF for file:/// urls)
    store.area("session", function() {
        try {
            return sessionStorage;
        } catch (e) {}
    }());
    store.area("page", _.storage("page"));
    if (typeof define === 'function' && define.amd !== undefined) {
        define('store2', [], function() {
            return store;
        });
    } else if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        module.exports = store;
    } else {
        // expose the primary store fn to the global object and save conflicts
        if (window.store) {
            _.conflict = window.store;
        }
        window.store = store;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.define);
}),
];

//# sourceMappingURL=_852abf97._.js.map