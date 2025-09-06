(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ClientRunTimeDom/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
// carousels-detail
function ClientRunTimeDom(param) {
    let { saleSkusList } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientRunTimeDom.useEffect": ()=>{
            if ($) {
                $('#carousels-banner').Carousels({
                    autoPlay: true,
                    interval: 6000,
                    disableEdgeButtons: false // 设置为true可在首尾页禁用按钮
                });
                if (saleSkusList) {
                    $('#carousels-detail').Carousels({
                        autoPlay: true,
                        interval: 6000,
                        disableEdgeButtons: false,
                        pageFrom: 'detail',
                        skuItem: saleSkusList
                    });
                }
            }
        }
    }["ClientRunTimeDom.useEffect"], []);
    return null;
}
_s(ClientRunTimeDom, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ClientRunTimeDom;
;
const __TURBOPACK__default__export__ = ClientRunTimeDom;
var _c;
__turbopack_context__.k.register(_c, "ClientRunTimeDom");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ClientRunTimeDom_index_jsx_d1ba0e18._.js.map