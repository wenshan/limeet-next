(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ProductGroup/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/rootStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const { projectId, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('common');
    const { productDetail } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { itemGroupList, setItemGroupList } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { pagination, setPagination } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(paginationInit);
    const { total, setTotal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { item_group_id } = productDetail;
    const getItemGroupList = async ()=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryProductGroup"])({
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductGroup.useEffect": ()=>{
            getItemGroupList();
        }
    }["ProductGroup.useEffect"], [
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
                html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "img-box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "title",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductGroup/index.jsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "price",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "unit",
                                        children: item.monetary_unit
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductGroup/index.jsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "value",
                                        children: item.sale_price
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProductGroup/index.jsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                }, "".concat(item.id, "_").concat(idx), false, {
                    fileName: "[project]/src/components/ProductGroup/index.jsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this));
            });
        }
        return html;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        className: "product-group clearfix",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "prev",
                onClick: prev,
                children: "prev"
            }, void 0, false, {
                fileName: "[project]/src/components/ProductGroup/index.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: listAttr()
            }, void 0, false, {
                fileName: "[project]/src/components/ProductGroup/index.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(ProductGroup, "WQmj7mtSlHIFHQCjMMXwCTCUXRA=");
_c = ProductGroup;
const __TURBOPACK__default__export__ = ProductGroup;
var _c;
__turbopack_context__.k.register(_c, "ProductGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DetailSwiper/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Carousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Carousel$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Carousel.js [app-client] (ecmascript) <export default as Carousel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/rootStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function DetailSwiper(props) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { productDetail, saleSkusList, setSaleSkusList, currentSaleSku, setCurrentSaleSku } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$rootStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [initSwiperImg, setSwiperImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const goToBack = ()=>{
        router.back();
    };
    const handleSelect = (selectedIndex)=>{
        setIndex(selectedIndex);
    };
    const renderSwiperHtml = (list)=>{
        const html = [];
        if (list && list.length > 0) {
            list.map((item, idx)=>{
                html.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Carousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Carousel$3e$__["Carousel"].Item, {
                    index: item.index,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                        src: item.src,
                        fluid: true,
                        alt: productDetail.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this)
                }, idx, false, {
                    fileName: "[project]/src/components/DetailSwiper/index.jsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this));
            });
        }
        return html;
    };
    const selectSaleSkuHandle = (item)=>{
        const newSaleSkus = [];
        if (saleSkusList && saleSkusList[0]) {
            setIndex(item.index);
            saleSkusList.forEach((list)=>{
                if (item.id == list.id) {
                    if (list.current && list.current == true) {
                        newSaleSkus.push(Object.assign({}, list, {
                            current: false
                        }));
                    } else {
                        setCurrentSaleSku(list);
                        newSaleSkus.push(Object.assign({}, list, {
                            current: true
                        }));
                    }
                } else {
                    newSaleSkus.push(Object.assign({}, list, {
                        current: false
                    }));
                }
            });
        }
        setSaleSkusList(newSaleSkus);
    };
    const cardHtmlSku = ()=>{
        const cardHtml = [];
        if (saleSkusList && saleSkusList[0]) {
            saleSkusList.forEach((item, idx)=>{
                if (item.saleType && item.saleType !== 'default') {
                    cardHtml.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "".concat(item.current == true ? 'item current' : 'item'),
                        id: "".concat(item.product_main_id, "_").concat(item.product_id, "_").concat(item.id),
                        onClick: ()=>selectSaleSkuHandle(item, idx),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "box",
                            children: item.saleType === 'pattern' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pattern",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                            src: "".concat(item.pattern + '?x-oss-process=style/w480'),
                                            fluid: true,
                                            alt: item.saleValue
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailSwiper/index.jsx",
                                            lineNumber: 60,
                                            columnNumber: 76
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                                        lineNumber: 60,
                                        columnNumber: 51
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pattern-name ellipsis",
                                        children: item.pattern_name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sale-value ellipsis",
                                children: item.saleValue
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailSwiper/index.jsx",
                                lineNumber: 61,
                                columnNumber: 91
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DetailSwiper/index.jsx",
                            lineNumber: 59,
                            columnNumber: 15
                        }, this)
                    }, "".concat(item.product_main_id, "_").concat(item.product_id, "_").concat(item.id), false, {
                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this));
                }
            });
        }
        return cardHtml;
    };
    const gtagEvent = (data)=>{
        if (window.gtag && gtag && data && data.projectId && data.offer_id && currentSaleSku) {
            gtag('event', 'detail_buy_click', {
                'language': data.language,
                'title': data.title,
                'offer_id': data.offer_id,
                'product_id': data.product_id,
                'product_main_id': data.product_main_id,
                'projectId': data.projectId,
                'saleType': currentSaleSku.saleType,
                'saleValue': currentSaleSku.saleValue,
                'sale_price': currentSaleSku.sale_price,
                'monetary_unit': currentSaleSku.monetary_unit,
                'discount': currentSaleSku.discount,
                'price': currentSaleSku.price
            });
        }
    };
    const buyLink = ()=>{
        let html = '';
        let defaultLink = 'https://www.amazon.co.jp/-/en/stores/LIMEETKET%E3%83%9A%E3%83%83%E3%83%88%E3%83%9B%E3%83%BC%E3%83%A0/page/E8D38BBB-5773-49C9-8A2F-0CC199CAC4C7';
        if (productDetail && productDetail.link && productDetail.link.indexOf('www.taobao.com') > -1) {
            html = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                onClick: ()=>gtagEvent(productDetail),
                href: "".concat(productDetail.mobile_link ? productDetail.mobile_link : productDetail.link),
                target: "_blank",
                children: "淘宝购买"
            }, void 0, false, {
                fileName: "[project]/src/components/DetailSwiper/index.jsx",
                lineNumber: 93,
                columnNumber: 15
            }, this);
        } else {
            html = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                onClick: ()=>gtagEvent(productDetail),
                href: defaultLink,
                target: "_blank",
                children: "Go to Amazon to buy"
            }, void 0, false, {
                fileName: "[project]/src/components/DetailSwiper/index.jsx",
                lineNumber: 95,
                columnNumber: 15
            }, this);
        }
        return html;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DetailSwiper.useEffect": ()=>{
            let listImgs = [];
            const restSwiperImg = [];
            const restSkuList = [];
            if (productDetail && productDetail.image_link && productDetail.additional_image_link && productDetail.additional_image_link[0] && productDetail.saleSkusList) {
                // 主图
                if (productDetail.image_link) {
                    listImgs.push(productDetail.image_link);
                }
                if (productDetail.additional_image_link && productDetail.additional_image_link[0]) {
                    listImgs = listImgs.concat(productDetail.additional_image_link);
                }
                // 附属图
                listImgs.forEach({
                    "DetailSwiper.useEffect": (item, index)=>{
                        restSwiperImg.push(Object.assign({}, {
                            src: item,
                            des: 'additional_image_link'
                        }, {
                            index: index
                        }));
                    }
                }["DetailSwiper.useEffect"]);
                // sku 图
                if (productDetail.saleSkusList[0]) {
                    productDetail.saleSkusList.forEach({
                        "DetailSwiper.useEffect": (item, idx)=>{
                            const currentIndex = listImgs.length + idx;
                            if (item.saleType === 'pattern') {
                                restSwiperImg.push(Object.assign({}, {
                                    src: item.pattern,
                                    des: item.saleValue
                                }, {
                                    index: currentIndex
                                }));
                            }
                            if (idx === 0) {
                                restSkuList.push(Object.assign({}, item, {
                                    index: currentIndex,
                                    current: true
                                }));
                            } else {
                                restSkuList.push(Object.assign({}, item, {
                                    index: currentIndex,
                                    current: false
                                }));
                            }
                        }
                    }["DetailSwiper.useEffect"]);
                }
                setSaleSkusList(restSkuList);
                setSwiperImg(restSwiperImg);
            } else {
                setSwiperImg([]);
            }
        }
    }["DetailSwiper.useEffect"], [
        productDetail.product_id
    ]);
    if (!(productDetail.image_link || productDetail.additional_image_link || !productDetail.saleSkusList[0])) {
        return false;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                className: "detail-swiper clearfix",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "swiper-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Carousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Carousel$3e$__["Carousel"], {
                            "data-bs-theme": "dark",
                            interval: 3000,
                            activeIndex: index,
                            onSelect: handleSelect,
                            children: renderSwiperHtml(initSwiperImg)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DetailSwiper/index.jsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "arrow-left",
                        onClick: goToBack
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailSwiper/index.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            currentSaleSku && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                className: "page-detail-sale-sku",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "price-wrap clearfix",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "price",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "unit",
                                        children: currentSaleSku.monetary_unit
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "value",
                                        children: currentSaleSku.sale_price
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "del-value",
                                        children: currentSaleSku.price
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    currentSaleSku.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "original-value",
                                        children: [
                                            "-",
                                            currentSaleSku.discount,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                                        lineNumber: 158,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailSwiper/index.jsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "title",
                                children: [
                                    productDetail.title,
                                    " ",
                                    currentSaleSku.saleValue && saleSkusList.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "（",
                                            currentSaleSku.saleValue,
                                            "）"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                                        lineNumber: 161,
                                        columnNumber: 94
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailSwiper/index.jsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sale-sku",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: currentSaleSku && cardHtmlSku()
                        }, void 0, false, {
                            fileName: "[project]/src/components/DetailSwiper/index.jsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "submit-button clearfix",
                        children: buyLink()
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailSwiper/index.jsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailSwiper/index.jsx",
                lineNumber: 152,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true);
}
_s(DetailSwiper, "XaS04umoHVbq79JUPKntcx9Iolc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DetailSwiper;
const __TURBOPACK__default__export__ = DetailSwiper;
var _c;
__turbopack_context__.k.register(_c, "DetailSwiper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Title/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Title(props) {
    _s();
    const { t, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "title-wrap clearfix",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "title",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "left-icon"
                }, void 0, false, {
                    fileName: "[project]/src/components/Title/index.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: props.title
                }, void 0, false, {
                    fileName: "[project]/src/components/Title/index.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
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
_s(Title, "OZwazanA59tbNDUkc8lMSmTHj9Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Title;
const __TURBOPACK__default__export__ = Title;
var _c;
__turbopack_context__.k.register(_c, "Title");
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
]);

//# sourceMappingURL=src_components_1f46d468._.js.map