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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Graphics_3D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Graphics_3D */ \"./src/js/Graphics_3D.js\");\n\n\n\nlet points = [[-2, 2, 2], [2, 2, 2], [2, -2, 2], [-2, -2, 2],\n            [-2, 2, -2], [2, 2, -2], [2, -2, -2], [-2, -2, -2], \n            [2, 2, 0], [-2, 2, 0], [0, 2, 2], [0, 2, -2], [0, 2, 0],\n            [-2, -2, 0], [0, -2, 2], [0, -2, -2], [2, -2, 0], [0, -2, 0],\n            [2, 0, 2], [2, 0, -2], [-2, 0, -2], [-2, 0, 2],\n            [2, 0, 0], [-2, 0, 0], [0, 0, 2], [0, 0, -2]];\nlet g = new _js_Graphics_3D__WEBPACK_IMPORTED_MODULE_0__[\"default\"](200, 200, points);\n\ng.init_graphic();\n\nlet rx, ry, rz;\nrx = ry = rz = 0;\n\nlet myInt = setInterval(() => {\n    rx = ry = rx + 1;\n    g.rotation_3D(rx, ry, rz);\n\n}, 100);\n\n//# sourceURL=webpack://phaser_game/./src/index.js?");

/***/ }),

/***/ "./src/js/Graphics_3D.js":
/*!*******************************!*\
  !*** ./src/js/Graphics_3D.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Graphics_3D {\n    constructor(w, h, v) {\n        let canvas = document.getElementById(\"game\");\n        this.ctx = canvas.getContext(\"2d\");\n        this.width = w;\n        this.height = h;\n        this.initial_vertices = [...v];\n        this.vertices = v;\n        this.vectors = [];\n    }\n\n    init_graphic = () => {\n        for (let i in this.vertices) {\n            let v = this.vertices[i];\n            this.draw_point(v[0], v[1]);\n        }\n    }\n\n    draw_point = (x, y) => {\n        let pos_x = (x * 20) + 100;\n        let pos_y = 100 - (y * 20);\n        this.ctx.beginPath();\n        this.ctx.fillStyle = \"#afafaf\";\n        this.ctx.fillRect(pos_x - 2, pos_y - 2, 4, 4);\n        this.ctx.closePath();\n    }\n\n    draw_line = (from, to) => {\n        let [start_x, start_y] = from;\n        let [end_x, end_y] = to;\n        let x = [(start_x * 20) + 100, (end_x * 20) + 100];\n        let y = [100 - (start_y * 20), 100 - (end_y * 20)]\n        this.ctx.beginPath();\n        this.ctx.strokeStyle = \"#ffffff\";\n        this.ctx.moveTo(x[0], y[0]);\n        this.ctx.lineTo(x[1], y[1]);\n        this.ctx.stroke();\n        this.ctx.closePath();\n    }\n\n    reset_graph = () => {\n        this.ctx.clearRect(0, 0, this.width, this.height);\n    }\n\n    get_radians = (deg) => {\n        return deg * (Math.PI/180);\n    }\n\n    rotation_3D = (alpha, beta, gamma) => {\n        let tetha_x = this.get_radians(alpha);\n        let tetha_y = this.get_radians(beta);\n        let tetha_z = this.get_radians(gamma);\n\n        let [cos_x, sin_x] = [Math.cos(tetha_x), Math.sin(tetha_x)];\n        let [cos_y, sin_y] = [Math.cos(tetha_y), Math.sin(tetha_y)];\n        let [cos_z, sin_z] = [Math.cos(tetha_z), Math.sin(tetha_z)];\n        this.vertices = [...this.initial_vertices];\n        for (let i in this.vertices) {\n            let [x, y, z] = this.vertices[i];\n            this.vertices[i] = [x, (y * cos_x) - (z * sin_x), (y * sin_x) + (z * cos_x)];\n\n            [x, y, z] = this.vertices[i];\n            this.vertices[i] = [(x * cos_y) + (z * sin_y), y, (z * cos_y) - (x * sin_y)];\n\n            [x, y, z] = this.vertices[i];\n            this.vertices[i] = [(x * cos_z) - (y * sin_z), (x * sin_z) + (y * cos_z), z];\n        }\n\n        this.reset_graph();\n        this.init_graphic();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graphics_3D);\n\n//# sourceURL=webpack://phaser_game/./src/js/Graphics_3D.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;