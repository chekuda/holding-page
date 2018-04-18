/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/public/js/form.js":
/*!**********************************!*\
  !*** ./server/public/js/form.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isEmail = function isEmail(val) {\n  return val.match(/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/g);\n};\nwindow.onload = function () {\n  document.getElementById('email-address').addEventListener('input', function (_ref) {\n    var target = _ref.target;\n\n    if (target.value && isEmail(target.value)) {\n      document.getElementById('submit-button').classList.remove('disabled');\n      document.getElementById('submit-button').removeAttribute('disabled');\n    } else {\n      document.getElementById('submit-button').classList.add('disabled');\n      document.getElementById('submit-button').setAttribute('disabled', true);\n    }\n  });\n};\n\n//# sourceURL=webpack:///./server/public/js/form.js?");

/***/ }),

/***/ "./server/public/styles/form.css":
/*!***************************************!*\
  !*** ./server/public/styles/form.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./server/public/styles/form.css?");

/***/ }),

/***/ "./server/public/styles/index.css":
/*!****************************************!*\
  !*** ./server/public/styles/index.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./server/public/styles/index.css?");

/***/ }),

/***/ 0:
/*!*********************************************************************************************************!*\
  !*** multi ./server/public/js/form.js ./server/public/styles/index.css ./server/public/styles/form.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/exposij/Desktop/projects/holding-page/server/public/js/form.js */\"./server/public/js/form.js\");\n__webpack_require__(/*! /Users/exposij/Desktop/projects/holding-page/server/public/styles/index.css */\"./server/public/styles/index.css\");\nmodule.exports = __webpack_require__(/*! /Users/exposij/Desktop/projects/holding-page/server/public/styles/form.css */\"./server/public/styles/form.css\");\n\n\n//# sourceURL=webpack:///multi_./server/public/js/form.js_./server/public/styles/index.css_./server/public/styles/form.css?");

/***/ })

/******/ });