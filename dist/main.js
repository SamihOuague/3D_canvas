/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib2d_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib2d/Scene */ \"./src/js/lib2d/Scene.js\");\n/* harmony import */ var _lib2d_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib2d/Vector */ \"./src/js/lib2d/Vector.js\");\n/* harmony import */ var _lib2d_Neurone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib2d/Neurone */ \"./src/js/lib2d/Neurone.js\");\n\n\n\n\n\nlet canvas = document.getElementById(\"game\");\nlet ctx = canvas.getContext(\"2d\");\n\nlet scene = new _lib2d_Scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"](400, 400, ctx, 10);\n\n\nlet canvas2 = document.getElementById(\"tanh\");\nlet ctx2 = canvas2.getContext(\"2d\");\n\nlet actfun = new _lib2d_Scene__WEBPACK_IMPORTED_MODULE_0__[\"default\"](400, 400, ctx2, 10);\n\n\nlet n = new _lib2d_Neurone__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Math.random() * 2, Math.random() * 2, Math.random() * 2);\n\nlet sy = -(n.w1/n.w2);\n\nlet y = -(n.bias/n.w2);\n\nscene.draw_line({x: 10, y: (sy * 10) + y}, {x: -10, y: (sy * -10) + y}, \"#ffffff\");\n\nlet elt = document.getElementsByClassName(\"range\");\nlet points = [];\nconst e = 2.71828;\n\nlet d_points = () => {\n    for (const p in points) {\n        const { x, y } = points[p];\n        actfun.add_point({x, y});\n    }\n}\n\n\nlet y0_points = [];\nlet y1_points = [];\n\nfor (let i = -10; i < 10; i += 0.5) {\n    points.push(new _lib2d_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](i, Math.tanh(i)));\n}\n\nif (Math.round(Math.random() * 10) % 2 != 0) {\n    for (let i = 0; i < 20; i++) {\n\n        let x = Math.floor(Math.random() * 20) - 10;\n        let y = Math.floor(Math.random() * 8) - 10;\n        y0_points.push(new _lib2d_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y));\n\n        x = Math.floor(Math.random() * 20) - 10;\n        y = Math.floor(Math.random() * 13) - 10;\n        y1_points.push(new _lib2d_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, -y));\n    }\n} else {\n    for (let i = 0; i < 15; i++) {\n        let x = Math.floor(Math.random() * 10) - 10;\n        let y = Math.floor(Math.random() * 20) - 10;\n        y0_points.push(new _lib2d_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x, y));\n\n        x = Math.floor(Math.random() * 10) - 10;\n        y = Math.floor(Math.random() * 20) - 10;\n        y1_points.push(new _lib2d_Vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](-x, y));\n    }\n}\nlet e_points = () => {\n    for (let i = 0; i < y0_points.length; i++) {\n        \n        scene.add_point(y0_points[i], \"#ff0000\");\n        scene.add_point(y1_points[i], \"#00ff00\");\n    }\n}\n\nd_points();\ne_points();\n\n\n\ndocument.getElementById(\"add-point\").addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    let r = 0.1;\n    \n    for (let i = 0; i < y1_points.length; i++) {\n        let { x, y } = y1_points[i];\n        if (n.get_z(x, y) < 0) {\n            n.w1 = n.w1 + (r * 1 * x);\n            n.w2 = n.w2 + (r * 1 * y);\n            n.bias = n.bias + (r * 1 * 1);\n        }\n    }\n    \n\n    for (let i = 0; i < y0_points.length; i++) {\n        const { x, y } = y0_points[i];\n        if (n.get_z(x, y) > 0) {\n            n.w1 = n.w1 + (r * -1 * x);\n            n.w2 = n.w2 + (r * -1 * y);\n            n.bias = n.bias + (r * -1 * 1);\n        }\n    }\n\n    \n    sy = -(n.w1/n.w2);\n    y = -(n.bias/n.w2);\n\n    scene.reset();\n    d_points();\n    e_points();\n    scene.draw_line({x: 10, y: (sy * 10) + y}, {x: -10, y: (sy * -10) + y}, \"#ffffff\");\n    for (let i = 0; i < elt.length; i++) {\n        switch(elt[i].name) {\n            case \"w1\":\n                elt[i].value = n.w1;\n                break;\n            case \"w2\":\n                elt[i].value = n.w2;\n                break;\n            case \"b\":\n                elt[i].value = n.bias;\n                break;\n        }\n    }\n});\n\n\n//# sourceURL=webpack://phaser_game/./src/js/index.js?");

/***/ }),

/***/ "./src/js/lib2d/Neurone.js":
/*!*********************************!*\
  !*** ./src/js/lib2d/Neurone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Neurone {\n    constructor(b, w1, w2) {\n        this.w1 = w1;\n        this.w2 = w2;\n        this.bias = b;\n    }\n\n    get_z(x1, x2) {\n        return (this.w1 * x1) + (this.w2 * x2) + this.bias;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neurone);\n\n//# sourceURL=webpack://phaser_game/./src/js/lib2d/Neurone.js?");

/***/ }),

/***/ "./src/js/lib2d/Scene.js":
/*!*******************************!*\
  !*** ./src/js/lib2d/Scene.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ \"./src/js/lib2d/Vector.js\");\n\n\nclass Scene {\n    constructor(w, h, ctx, o = 10) {\n        this.width = w;\n        this.height = h;\n        this.ctx = ctx;\n        this.origin = o;\n        this.init_scene();\n    }\n\n    init_scene = () => {\n        for (let i = 1; i < 20; i++) {\n            if (i != this.origin)\n                this.draw_line([i * 20, 0], [i * 20, this.height], \"#1f1f1f\", true);\n            if (i != 20 - this.origin)\n                this.draw_line([0, i * 20], [this.width, i * 20], \"#1f1f1f\", true);\n        }\n        this.draw_line([this.origin * 20, 0], [this.origin * 20, this.height], \"#ff0000\", true);\n        this.draw_line([0, this.height - this.origin * 20], [this.width, this.height - this.origin * 20], \"#ff0000\", true);\n    }\n\n    draw_line = (from, to, color = \"#1f1f1f\", noctx = false) => {\n        let [from_x, from_y] = this.transform_xy(from);\n        let [to_x, to_y] = this.transform_xy(to);\n        if (noctx) {\n            [from_x, from_y] = from;\n            [to_x, to_y] = to;\n        }\n\n        this.ctx.beginPath();\n\n        this.ctx.strokeStyle = color;\n        this.ctx.moveTo(from_x, from_y);\n        this.ctx.lineTo(to_x, to_y);\n        this.ctx.stroke();\n\n        this.ctx.closePath();\n    }\n\n    reset = () => {\n        this.ctx.clearRect(0, 0, this.width, this.height);\n        this.init_scene();\n    }\n\n    transform_xy = (vector) => {\n        let x = 20 * (vector.x + this.origin);\n        let y = this.height - (20 * (vector.y + this.origin));\n\n        return [x, y];\n    }\n\n    add_point = (vector, color = \"#ffffff\") => {\n        const [x, y] = this.transform_xy(vector);\n        this.ctx.beginPath();\n        this.ctx.fillStyle = color;\n        this.ctx.fillRect(x - 2, y - 2, 4, 4);\n        this.ctx.closePath();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scene);\n\n//# sourceURL=webpack://phaser_game/./src/js/lib2d/Scene.js?");

/***/ }),

/***/ "./src/js/lib2d/Vector.js":
/*!********************************!*\
  !*** ./src/js/lib2d/Vector.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Vector {\n    constructor(x, y, w = 1) {\n        this.x = x;\n        this.y = y;\n        this.w = w;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vector);\n\n//# sourceURL=webpack://phaser_game/./src/js/lib2d/Vector.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;