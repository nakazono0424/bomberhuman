(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/bomber_human_test.js":
/*!***********************************!*\
  !*** ../pkg/bomber_human_test.js ***!
  \***********************************/
/*! exports provided: GameData, __wbg_new_5a0e9648d379e335, __wbg_width_891c5c118c5c5713, __wbg_height_d06bb602edfd8abc, __wbindgen_object_drop_ref, __wbg_clearscreen_6f1c874f5b393234, __wbg_drawwall_ce09a79d4f843f4d, __wbg_drawsblock_82a73c065d5f5755, __wbg_drawbomb_9dd6c44409924409, __wbg_drawitem_7221919295a1e7d0, __wbg_drawfire_03cb6c94b1edec0d, __wbg_drawplayer_683c457783b244ba, __wbg_drawstatus_2f08132d7662af29, __wbg_drawtime_171e24a0263452e4, __wbg_drawend_43e054d83d92bb40, __wbg_getRandomValues_3ac1b33c90b52596, __wbg_randomFillSync_6f956029658662ec, __wbg_self_1c83eb4471d9eb9b, __wbg_require_5b2b5b594d809d9f, __wbg_crypto_c12f14e810edcaa2, __wbg_msCrypto_679be765111ba775, __wbindgen_is_undefined, __wbg_getRandomValues_05a60bf171bfc2be, __wbg_static_accessor_MODULE_abf5ae284bffdf45, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bomber_human_test_bg.wasm */ \"../pkg/bomber_human_test_bg.wasm\");\n/* harmony import */ var _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bomber_human_test_bg.js */ \"../pkg/bomber_human_test_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GameData\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"GameData\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_5a0e9648d379e335\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_5a0e9648d379e335\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_width_891c5c118c5c5713\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_width_891c5c118c5c5713\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_height_d06bb602edfd8abc\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_height_d06bb602edfd8abc\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clearscreen_6f1c874f5b393234\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_clearscreen_6f1c874f5b393234\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawwall_ce09a79d4f843f4d\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_drawwall_ce09a79d4f843f4d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawsblock_82a73c065d5f5755\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_drawsblock_82a73c065d5f5755\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawbomb_9dd6c44409924409\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_drawbomb_9dd6c44409924409\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawitem_7221919295a1e7d0\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_drawitem_7221919295a1e7d0\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawfire_03cb6c94b1edec0d\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_drawfire_03cb6c94b1edec0d\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawplayer_683c457783b244ba\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_drawplayer_683c457783b244ba\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawstatus_2f08132d7662af29\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_drawstatus_2f08132d7662af29\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawtime_171e24a0263452e4\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_drawtime_171e24a0263452e4\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawend_43e054d83d92bb40\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_drawend_43e054d83d92bb40\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_3ac1b33c90b52596\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_3ac1b33c90b52596\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_6f956029658662ec\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_randomFillSync_6f956029658662ec\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_1c83eb4471d9eb9b\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_self_1c83eb4471d9eb9b\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_5b2b5b594d809d9f\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_require_5b2b5b594d809d9f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_c12f14e810edcaa2\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_crypto_c12f14e810edcaa2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_679be765111ba775\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_msCrypto_679be765111ba775\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_is_undefined\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_05a60bf171bfc2be\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_getRandomValues_05a60bf171bfc2be\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_static_accessor_MODULE_abf5ae284bffdf45\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_static_accessor_MODULE_abf5ae284bffdf45\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _bomber_human_test_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/bomber_human_test.js?");

/***/ }),

/***/ "../pkg/bomber_human_test_bg.js":
/*!**************************************!*\
  !*** ../pkg/bomber_human_test_bg.js ***!
  \**************************************/
/*! exports provided: GameData, __wbg_new_5a0e9648d379e335, __wbg_width_891c5c118c5c5713, __wbg_height_d06bb602edfd8abc, __wbindgen_object_drop_ref, __wbg_clearscreen_6f1c874f5b393234, __wbg_drawwall_ce09a79d4f843f4d, __wbg_drawsblock_82a73c065d5f5755, __wbg_drawbomb_9dd6c44409924409, __wbg_drawitem_7221919295a1e7d0, __wbg_drawfire_03cb6c94b1edec0d, __wbg_drawplayer_683c457783b244ba, __wbg_drawstatus_2f08132d7662af29, __wbg_drawtime_171e24a0263452e4, __wbg_drawend_43e054d83d92bb40, __wbg_getRandomValues_3ac1b33c90b52596, __wbg_randomFillSync_6f956029658662ec, __wbg_self_1c83eb4471d9eb9b, __wbg_require_5b2b5b594d809d9f, __wbg_crypto_c12f14e810edcaa2, __wbg_msCrypto_679be765111ba775, __wbindgen_is_undefined, __wbg_getRandomValues_05a60bf171bfc2be, __wbg_static_accessor_MODULE_abf5ae284bffdf45, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameData\", function() { return GameData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_5a0e9648d379e335\", function() { return __wbg_new_5a0e9648d379e335; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_width_891c5c118c5c5713\", function() { return __wbg_width_891c5c118c5c5713; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_height_d06bb602edfd8abc\", function() { return __wbg_height_d06bb602edfd8abc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_clearscreen_6f1c874f5b393234\", function() { return __wbg_clearscreen_6f1c874f5b393234; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawwall_ce09a79d4f843f4d\", function() { return __wbg_drawwall_ce09a79d4f843f4d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawsblock_82a73c065d5f5755\", function() { return __wbg_drawsblock_82a73c065d5f5755; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawbomb_9dd6c44409924409\", function() { return __wbg_drawbomb_9dd6c44409924409; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawitem_7221919295a1e7d0\", function() { return __wbg_drawitem_7221919295a1e7d0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawfire_03cb6c94b1edec0d\", function() { return __wbg_drawfire_03cb6c94b1edec0d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawplayer_683c457783b244ba\", function() { return __wbg_drawplayer_683c457783b244ba; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawstatus_2f08132d7662af29\", function() { return __wbg_drawstatus_2f08132d7662af29; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawtime_171e24a0263452e4\", function() { return __wbg_drawtime_171e24a0263452e4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_drawend_43e054d83d92bb40\", function() { return __wbg_drawend_43e054d83d92bb40; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_3ac1b33c90b52596\", function() { return __wbg_getRandomValues_3ac1b33c90b52596; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_randomFillSync_6f956029658662ec\", function() { return __wbg_randomFillSync_6f956029658662ec; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_1c83eb4471d9eb9b\", function() { return __wbg_self_1c83eb4471d9eb9b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_require_5b2b5b594d809d9f\", function() { return __wbg_require_5b2b5b594d809d9f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_crypto_c12f14e810edcaa2\", function() { return __wbg_crypto_c12f14e810edcaa2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_msCrypto_679be765111ba775\", function() { return __wbg_msCrypto_679be765111ba775; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_getRandomValues_05a60bf171bfc2be\", function() { return __wbg_getRandomValues_05a60bf171bfc2be; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_static_accessor_MODULE_abf5ae284bffdf45\", function() { return __wbg_static_accessor_MODULE_abf5ae284bffdf45; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _snippets_bomber_human_test_7e7679115d024a5c_src_javascript_draw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snippets/bomber-human-test-7e7679115d024a5c/src/javascript/draw.js */ \"../pkg/snippets/bomber-human-test-7e7679115d024a5c/src/javascript/draw.js\");\n/* harmony import */ var _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bomber_human_test_bg.wasm */ \"../pkg/bomber_human_test_bg.wasm\");\n\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction handleError(f) {\n    return function () {\n        try {\n            return f.apply(this, arguments);\n\n        } catch (e) {\n            _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_exn_store\"](addHeapObject(e));\n        }\n    };\n}\n\nfunction getArrayU8FromWasm0(ptr, len) {\n    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);\n}\n/**\n*/\nclass GameData {\n\n    static __wrap(ptr) {\n        const obj = Object.create(GameData.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_gamedata_free\"](ptr);\n    }\n    /**\n    * @param {number} num_of_player\n    * @returns {GameData}\n    */\n    static new(num_of_player) {\n        var ret = _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"gamedata_new\"](num_of_player);\n        return GameData.__wrap(ret);\n    }\n    /**\n    * @param {number} time\n    */\n    update(time) {\n        _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"gamedata_update\"](this.ptr, time);\n    }\n    /**\n    * @param {number} i\n    * @param {number} b\n    */\n    toggle_move_up(i, b) {\n        _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"gamedata_toggle_move_up\"](this.ptr, i, b);\n    }\n    /**\n    * @param {number} i\n    * @param {number} b\n    */\n    toggle_move_down(i, b) {\n        _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"gamedata_toggle_move_down\"](this.ptr, i, b);\n    }\n    /**\n    * @param {number} i\n    * @param {number} b\n    */\n    toggle_move_right(i, b) {\n        _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"gamedata_toggle_move_right\"](this.ptr, i, b);\n    }\n    /**\n    * @param {number} i\n    * @param {number} b\n    */\n    toggle_move_left(i, b) {\n        _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"gamedata_toggle_move_left\"](this.ptr, i, b);\n    }\n    /**\n    * @param {number} i\n    * @param {number} b\n    */\n    toggle_put_bomb(i, b) {\n        _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"gamedata_toggle_put_bomb\"](this.ptr, i, b);\n    }\n    /**\n    */\n    draw() {\n        _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"gamedata_draw\"](this.ptr);\n    }\n    /**\n    * @param {boolean} b\n    */\n    delete_wall(b) {\n        _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"gamedata_delete_wall\"](this.ptr, b);\n    }\n    /**\n    * @param {boolean} b\n    */\n    delete_sblock(b) {\n        _bomber_human_test_bg_wasm__WEBPACK_IMPORTED_MODULE_1__[\"gamedata_delete_sblock\"](this.ptr, b);\n    }\n}\n\nconst __wbg_new_5a0e9648d379e335 = function() {\n    var ret = new _snippets_bomber_human_test_7e7679115d024a5c_src_javascript_draw_js__WEBPACK_IMPORTED_MODULE_0__[\"Draw\"]();\n    return addHeapObject(ret);\n};\n\nconst __wbg_width_891c5c118c5c5713 = function(arg0) {\n    var ret = getObject(arg0).width();\n    return ret;\n};\n\nconst __wbg_height_d06bb602edfd8abc = function(arg0) {\n    var ret = getObject(arg0).height();\n    return ret;\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_clearscreen_6f1c874f5b393234 = function(arg0) {\n    getObject(arg0).clear_screen();\n};\n\nconst __wbg_drawwall_ce09a79d4f843f4d = function(arg0, arg1, arg2) {\n    getObject(arg0).draw_wall(arg1, arg2);\n};\n\nconst __wbg_drawsblock_82a73c065d5f5755 = function(arg0, arg1, arg2) {\n    getObject(arg0).draw_sblock(arg1, arg2);\n};\n\nconst __wbg_drawbomb_9dd6c44409924409 = function(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).draw_bomb(arg1, arg2, arg3, arg4);\n};\n\nconst __wbg_drawitem_7221919295a1e7d0 = function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).draw_item(arg1, arg2, arg3);\n};\n\nconst __wbg_drawfire_03cb6c94b1edec0d = function(arg0, arg1, arg2, arg3, arg4) {\n    getObject(arg0).draw_fire(arg1, arg2, arg3, arg4);\n};\n\nconst __wbg_drawplayer_683c457783b244ba = function(arg0, arg1, arg2, arg3, arg4, arg5) {\n    getObject(arg0).draw_player(arg1, arg2, arg3, arg4, arg5);\n};\n\nconst __wbg_drawstatus_2f08132d7662af29 = function(arg0, arg1, arg2, arg3, arg4, arg5) {\n    getObject(arg0).draw_status(arg1 !== 0, arg2, arg3, arg4, arg5);\n};\n\nconst __wbg_drawtime_171e24a0263452e4 = function(arg0, arg1, arg2, arg3) {\n    getObject(arg0).draw_time(arg1, arg2, arg3);\n};\n\nconst __wbg_drawend_43e054d83d92bb40 = function(arg0, arg1) {\n    getObject(arg0).draw_end(arg1);\n};\n\nconst __wbg_getRandomValues_3ac1b33c90b52596 = function(arg0, arg1, arg2) {\n    getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));\n};\n\nconst __wbg_randomFillSync_6f956029658662ec = function(arg0, arg1, arg2) {\n    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));\n};\n\nconst __wbg_self_1c83eb4471d9eb9b = handleError(function() {\n    var ret = self.self;\n    return addHeapObject(ret);\n});\n\nconst __wbg_require_5b2b5b594d809d9f = function(arg0, arg1, arg2) {\n    var ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));\n    return addHeapObject(ret);\n};\n\nconst __wbg_crypto_c12f14e810edcaa2 = function(arg0) {\n    var ret = getObject(arg0).crypto;\n    return addHeapObject(ret);\n};\n\nconst __wbg_msCrypto_679be765111ba775 = function(arg0) {\n    var ret = getObject(arg0).msCrypto;\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    return ret;\n};\n\nconst __wbg_getRandomValues_05a60bf171bfc2be = function(arg0) {\n    var ret = getObject(arg0).getRandomValues;\n    return addHeapObject(ret);\n};\n\nconst __wbg_static_accessor_MODULE_abf5ae284bffdf45 = function() {\n    var ret = module;\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/bomber_human_test_bg.js?");

/***/ }),

/***/ "../pkg/bomber_human_test_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/bomber_human_test_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, __wbg_gamedata_free, gamedata_new, gamedata_update, gamedata_toggle_move_up, gamedata_toggle_move_down, gamedata_toggle_move_right, gamedata_toggle_move_left, gamedata_toggle_put_bomb, gamedata_draw, gamedata_delete_wall, gamedata_delete_sblock, __wbindgen_exn_store */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./bomber_human_test_bg.js */ \"../pkg/bomber_human_test_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/bomber_human_test_bg.wasm?");

/***/ }),

/***/ "../pkg/snippets/bomber-human-test-7e7679115d024a5c/src/javascript/draw.js":
/*!*********************************************************************************!*\
  !*** ../pkg/snippets/bomber-human-test-7e7679115d024a5c/src/javascript/draw.js ***!
  \*********************************************************************************/
/*! exports provided: Draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Draw\", function() { return Draw; });\nconst GLID_SIZE = 40; //px\nconst GAMEDATA_WIDTH = 15;\nconst GAMEDATA_HEIGHT = 13;\n\nconst canvas = document.getElementById(\"bomberhuman\");\ncanvas.width = GAMEDATA_WIDTH * GLID_SIZE + 300;\ncanvas.height = GAMEDATA_HEIGHT * GLID_SIZE;\ncanvas.style.position = \"absolute\";\ncanvas.style.left = \"100px\";\ncanvas.style.top = \"100px\";\nvar ctx = canvas.getContext(\"2d\");\n\nfunction resources() {\n    let res = {\n \tplayers: [new Object(), new Object(), new Object(), new Object()],\n\twall: new Object(),\n\tsblock: new Object(),\n\tbomb: new Object(),\n\tfire: new Object(),\n\titems: [new Object(), new Object(), new Object()],\n\tpien: new Object()\n    }\n\n    //Player1\n    res.players[0].img = new Image();\n    res.players[0].img.src = 'image/pipo-charachip001.png';\n\n    //Player2\n    res.players[1].img = new Image();\n    res.players[1].img.src = 'image/pipo-charachip002.png';\n\n    //Player3\n    res.players[2].img = new Image();\n    res.players[2].img.src = 'image/pipo-charachip003.png';\n\n    //Player4\n    res.players[3].img = new Image();\n    res.players[3].img.src = 'image/pipo-charachip004.png';\n    \n    //Wall\n    res.wall.img = new Image();\n    res.wall.img.src = 'image/wall.png';\n\n    // SoftBlock\n    res.sblock.img = new Image();\n    res.sblock.img.src = 'image/takarabako.png';\n\n    //Bomb\n    res.bomb.img = new Image();\n    res.bomb.img.src = 'image/bomb.png';\n\n    //Fire\n    res.fire.img = new Image();\n    res.fire.img.src = 'image/bomb.png';\n\n    // Item0 bomb\n    res.items[0].img = new Image();\n    res.items[0].img.src = 'image/bomb_up.png';\n\n    // Item1 fire\n    res.items[1].img = new Image();\n    res.items[1].img.src = 'image/power_up.png';\n\n    // Item2 speed\n    res.items[2].img = new Image();\n    res.items[2].img.src = 'image/speed_up.png';\n\n    // Pien\n    res.pien.img = new Image();\n    res.pien.img.src = 'image/pien.png';\n\n    return res;\n}\n\nconst res = resources();\n\nclass Draw {\n    width() {\n\treturn canvas.width;\n    }\n\n    height() {\n\treturn canvas.height;\n    }\n    \n    clear_screen() {\n\tctx.fillStyle = \"green\";\n\tctx.fillRect(0, 0, canvas.width, canvas.height);\n    }\n\n    draw_player(i, x, y, rect_x, rect_y) {\n\tctx.drawImage(res.players[i].img, rect_x, rect_y, 32, 32, x-20, y-20, 40, 40);\n    }\n\n    draw_wall(x, y) {\n\tctx.drawImage(res.wall.img, 0, 0, 16, 16, x-20, y-20, 40, 40);\n    }\n\n    draw_sblock(x, y) {\n\tctx.drawImage(res.sblock.img, 0, 16, 16, 16, x-20, y-20, 40, 40);\n    }\n\n    draw_bomb(i, x, y, condition) {\n\tctx.drawImage(res.bomb.img, condition * 32, i * 32, 32, 32, x-20, y-20, 40, 40);\n    }\n\n    draw_fire(i, x, y, condition) {\n\tctx.drawImage(res.fire.img, condition * 32, i * 32 + 160, 32, 32, x-20, y-20, 40, 40);\n    }\n\n    draw_item(i, x, y) {\n\tctx.drawImage(res.items[i].img, x-20, y-20, 40, 40);\n    }\n\n    draw_time(minutes, second1, second2) {\n\tctx.fillStyle = \"white\";\n\tctx.font = \"48px serif\";\n\tctx.textAlign = \"left\";\n\tctx.fillText(\"残り時間 \" + minutes + \":\" + second1 + second2, 650, 100, 200);\n    }\n\n    draw_status(live, id, speed, bomb, fire) {\n\tctx.drawImage(res.players[id].img, 0, 0, 32, 32, 650, 150 + id * 70, 60, 60);\n\tif(!live) {\n\t    ctx.fillStyle = \"black\";\n\t    ctx.font = \"80px serif\";\n\t    ctx.textAlign = \"center\";\n\t    ctx.fillText(\"✕\", 681, 210 + id * 70, 60, 60); \n\t}\n\tctx.fillStyle = \"white\";\n\tctx.font = \"20px serif\";\n\tctx.textAlign = \"left\";\n\tctx.fillText(\"SPEED: \" + speed, 720, 170 + id * 70);\n\tctx.fillText(\"BOMB: \" + bomb, 720, 190 + id * 70);\n\tctx.fillText(\"POWER: \" + fire, 720, 210 + id * 70);\n    }\n\n    draw_end(id) {\n\tctx.fillStyle = \"white\";\n\tctx.font = \"80px serif\";\n\tctx.strokeStyle = \"black\";\n\tctx.textAlign = \"center\";\n\tif(id == 0) {\n\t    ctx.fillText(\"Draw\", 450, 250);\n\t    ctx.strokeText(\"Draw\", 450, 250);\n\t} else {\n\t    ctx.fillText(\"Winner\", 450, 250);\n\t    ctx.fillText(\"Player\" + id, 450, 350);\n\t    ctx.strokeText(\"Winner\", 450, 250);\n\t    ctx.strokeText(\"Player\" + id, 450, 350);\n\t}\n    }\n}\n\n\n//# sourceURL=webpack:///../pkg/snippets/bomber-human-test-7e7679115d024a5c/src/javascript/draw.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bomber_human_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bomber-human-test */ \"../pkg/bomber_human_test.js\");\n\n\nconst debug = false\n\nvar num_of_player = window.prompt(\"プレイヤー数を入力してください．(2，3，4)\", \"\");\n\nif(num_of_player !== 2 || num_of_player !== 3 || num_of_player !== 4){\n    num_of_player = 4;\n}\n\nlet gamedata = bomber_human_test__WEBPACK_IMPORTED_MODULE_0__[\"GameData\"].new(num_of_player);\n\nclass Key {\n    constructor(key1, key2, key3, key4, key5, num) {\n        this.up = key1;\n        this.left = key2;\n        this.down = key3;\n        this.right = key4;\n        this.put_bomb = key5;\n        this.player_num = num;\n    }\n    scan(keys){\n        gamedata.toggle_move_up(this.player_num, keys.some(e => e === this.up));\n        gamedata.toggle_move_left(this.player_num, keys.some(e => e === this.left));\n        gamedata.toggle_move_down(this.player_num, keys.some(e => e === this.down));\n\tgamedata.toggle_move_right(this.player_num, keys.some(e => e === this.right));\n        gamedata.toggle_put_bomb(this.player_num, keys.some(e => e === this.put_bomb));\n    }\n}\n\nfunction pushKey(keys, key, repeat){\n    if(!repeat) {\n\tkeys.push(key);\n    }\n}\nfunction popKey(keys, key){\n    put_keys = keys.filter(e => e !== key);\n}\n\nvar put_keys = [];\nvar key_bind = [];\nkey_bind[0] = new Key(\"ArrowUp\",\"ArrowLeft\",\"ArrowDown\",\"ArrowRight\",\" \",0);\nkey_bind[1] = new Key(\"w\",\"a\",\"s\",\"d\",\"x\",1);\nkey_bind[2] = new Key(\"t\",\"f\",\"g\",\"h\",\"b\",2);\nkey_bind[3] = new Key(\"i\",\"j\",\"k\",\"l\",\",\",3);\n\ndocument.addEventListener('keydown', e => pushKey(put_keys, e.key, e.repeat));\ndocument.addEventListener('keyup', e => popKey(put_keys, e.key));\n\n//Gameloop\nlet start = null;\nlet prevTimestamp = null;\nlet drawAndUpdate = (timestamp) => {\n    //Initialization\n    if (!prevTimestamp) {\n\t    start = timestamp;\n\t    prevTimestamp = timestamp;\n\t    requestAnimationFrame(drawAndUpdate);\n\t    return;\n    }\n\n    var i;\n    for (i = 0; i < num_of_player; i++) {\n        key_bind[i].scan(put_keys);\n    }\n    if(navigator.getGamepads) {\n\t    var gamepad_list = navigator.getGamepads();\n\t    var num = gamepad_list.length;\n\t    for(i=0; i<num; i++) {\n\t        var gamepad = gamepad_list[i];\n\t        if(!gamepad) continue;\n\t        console.log(gamepad);\n\n\t        var buttons = gamepad.buttons;\n\t        var axes = gamepad.axes;\n\n\t        if(buttons.length <= 12) {\n\t            gamedata.toggle_move_up(i, axes[1] < -0.3);\n\t            gamedata.toggle_move_down(i, axes[1] > 0.3);\n\t            gamedata.toggle_move_left(i, axes[0] < -0.3);\n\t            gamedata.toggle_move_right(i, axes[0] > 0.3);\n\t            gamedata.toggle_put_bomb(i, buttons[1].pressed);\n\t        } else {\n                gamedata.toggle_move_up(i, buttons[12].pressed || axes[1] < -0.3);\n                gamedata.toggle_move_down(i, buttons[13].pressed || axes[1] > 0.3);\n                gamedata.toggle_move_left(i, buttons[14].pressed || axes[0] < -0.3);\n                gamedata.toggle_move_right(i, buttons[15].pressed || axes[0] > 0.3);\n                gamedata.toggle_put_bomb(i, buttons[1].pressed);\n            }\n        }\n    }\n\n    //Update and draw\n    let progress = (timestamp - prevTimestamp) / 1000;\n    gamedata.update(progress);\n    gamedata.draw();\n\n    //Some bookkeeping\n    prevTimestamp = timestamp;\n    requestAnimationFrame(drawAndUpdate);\n};\n\ndrawAndUpdate();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);