"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/managment/ProductList.tsx":
/*!*******************************************!*\
  !*** ./src/app/managment/ProductList.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ProductList = (param)=>{\n    let { products, onDelete, onEdit } = param;\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // Убедимся, что код с useRouter выполняется только на клиенте\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"ProductList.useEffect\": ()=>{\n            setIsClient(true);\n        }\n    }[\"ProductList.useEffect\"], []);\n    const handleClick = (id)=>{\n        if (isClient) {\n            router.push(\"/products/\".concat(id));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Price\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"SKU\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Actions\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>handleClick(product.id),\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: product.price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: product.sku\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>onEdit(product.id),\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>onDelete(product.id),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\79998\\\\Desktop\\\\Тестовое\\\\product-crud-app\\\\frontend\\\\src\\\\app\\\\managment\\\\ProductList.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductList, \"qwS10yPL8Is4Y1PVgxDDCmDboi0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProductList;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFuYWdtZW50L1Byb2R1Y3RMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFHNUMsTUFBTUcsY0FBYztRQUFDLEVBQ25CQyxRQUFRLEVBQ1JDLFFBQVEsRUFDUkMsTUFBTSxFQUtQOztJQUNDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNTyxTQUFTVCxzREFBU0E7SUFFeEIsOERBQThEO0lBQzlEQyxnREFBU0E7aUNBQUM7WUFDUk8sWUFBWTtRQUNkO2dDQUFHLEVBQUU7SUFFTCxNQUFNRSxjQUFjLENBQUNDO1FBQ25CLElBQUlKLFVBQVU7WUFDWkUsT0FBT0csSUFBSSxDQUFDLGFBQWdCLE9BQUhEO1FBQzNCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDQzswQkFDQyw0RUFBQ0M7O3NDQUNDLDhEQUFDQztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQTtzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQTtzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNDOzBCQUNFYixTQUFTYyxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNKOzswQ0FDQyw4REFBQ0s7MENBQ0MsNEVBQUNDO29DQUFPQyxTQUFTLElBQU1aLFlBQVlTLFFBQVFSLEVBQUU7OENBQzFDUSxRQUFRSSxJQUFJOzs7Ozs7Ozs7OzswQ0FHakIsOERBQUNIOzBDQUFJRCxRQUFRSyxLQUFLOzs7Ozs7MENBQ2xCLDhEQUFDSjswQ0FBSUQsUUFBUU0sR0FBRzs7Ozs7OzBDQUNoQiw4REFBQ0w7O2tEQUNDLDhEQUFDQzt3Q0FBT0MsU0FBUyxJQUFNaEIsT0FBT2EsUUFBUVIsRUFBRTtrREFBRzs7Ozs7O2tEQUMzQyw4REFBQ1U7d0NBQU9DLFNBQVMsSUFBTWpCLFNBQVNjLFFBQVFSLEVBQUU7a0RBQUc7Ozs7Ozs7Ozs7Ozs7dUJBVnhDUSxRQUFRUixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUI3QjtHQXBETVI7O1FBVVdILGtEQUFTQTs7O0tBVnBCRztBQXNETixpRUFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFw3OTk5OFxcRGVza3RvcFxc0KLQtdGB0YLQvtCy0L7QtVxccHJvZHVjdC1jcnVkLWFwcFxcZnJvbnRlbmRcXHNyY1xcYXBwXFxtYW5hZ21lbnRcXFByb2R1Y3RMaXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAL3R5cGVzJztcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0ID0gKHtcclxuICBwcm9kdWN0cyxcclxuICBvbkRlbGV0ZSxcclxuICBvbkVkaXQsXHJcbn06IHtcclxuICBwcm9kdWN0czogUHJvZHVjdFtdO1xyXG4gIG9uRGVsZXRlOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcclxuICBvbkVkaXQ6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW2lzQ2xpZW50LCBzZXRJc0NsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vINCj0LHQtdC00LjQvNGB0Y8sINGH0YLQviDQutC+0LQg0YEgdXNlUm91dGVyINCy0YvQv9C+0LvQvdGP0LXRgtGB0Y8g0YLQvtC70YzQutC+INC90LAg0LrQu9C40LXQvdGC0LVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SXNDbGllbnQodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAoaXNDbGllbnQpIHtcclxuICAgICAgcm91dGVyLnB1c2goYC9wcm9kdWN0cy8ke2lkfWApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dGFibGU+XHJcbiAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgPHRoPlNLVTwvdGg+XHJcbiAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgPHRib2R5PlxyXG4gICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDx0ciBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhwcm9kdWN0LmlkKX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3Byb2R1Y3QucHJpY2V9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntwcm9kdWN0LnNrdX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkVkaXQocHJvZHVjdC5pZCl9PkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKHByb2R1Y3QuaWQpfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsIm9uRGVsZXRlIiwib25FZGl0IiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsInJvdXRlciIsImhhbmRsZUNsaWNrIiwiaWQiLCJwdXNoIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsInByb2R1Y3QiLCJ0ZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuYW1lIiwicHJpY2UiLCJza3UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/managment/ProductList.tsx\n"));

/***/ })

});