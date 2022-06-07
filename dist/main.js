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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalHandler */ \"./src/modules/modalHandler.js\");\n/* harmony import */ var _modules_modalHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modalHandlers */ \"./src/modules/modalHandlers.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ \"./src/modules/forms.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/modules/scrollUp.js\");\n\n\n\n\n\n// import { sendForm } from \"./modules/sendForm\"\n\n\n\n\n// modalHandler('.mobile-menu .callback-btn', 'block')\n(0,_modules_modalHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.header .callback-btn', 'block')\n;(0,_modules_modalHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.modal-close', 'none')\n;(0,_modules_modalHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.quest-section .button-services', 'block')\n;(0,_modules_modalHandlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.services-carousel .element', 'block')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n// sendForm()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n\n\n//# sourceURL=webpack://graduateworkjs/./src/index.js?");

/***/ }),

/***/ "./src/modules/forms.js":
/*!******************************!*\
  !*** ./src/modules/forms.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\n    const nameInput = document.querySelector('.form-control')\n    const telInput = document.querySelector('.tel')\n\n    nameInput.addEventListener('input', (e) => {\n        nameInput.value = e.target.value.replace(/[^А-Яа-яёЁ]/ig, '')\n    })\n    telInput.addEventListener('input', (e) => {\n        telInput.value = e.target.value.replace(/[^0-9+]/ig, '')\n    })\n    \n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack://graduateworkjs/./src/modules/forms.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = (e) => {\n    const smoothLinks = document.querySelectorAll('a[href^=\"#\"]')\n    for (let smoothLink of smoothLinks) {\n        smoothLink.addEventListener('click', function (e) {\n            e.preventDefault();\n            const id = smoothLink.getAttribute('href')\n\n            document.querySelector(id).scrollIntoView({\n                behavior: 'smooth',\n                block: 'start'\n            })\n        })\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://graduateworkjs/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modalHandler.js":
/*!*************************************!*\
  !*** ./src/modules/modalHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst defaultModalMeta = {\n    modalSelector: '.modal-callback',\n    modalOverlaySelector: '.modal-overlay'\n}\n\nconst modalHandler = (selector, display, modalMeta = defaultModalMeta) => {\n    const button = document.querySelector(selector)\n\n    button.addEventListener('click', (e) => {\n        e.preventDefault()\n        const modal = document.querySelector(modalMeta.modalSelector)\n        const modalOverlay = document.querySelector(modalMeta.modalOverlaySelector)\n\n        modal.style.display = display\n        modalOverlay.style.display = display\n\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalHandler);\n\n\n\n//# sourceURL=webpack://graduateworkjs/./src/modules/modalHandler.js?");

/***/ }),

/***/ "./src/modules/modalHandlers.js":
/*!**************************************!*\
  !*** ./src/modules/modalHandlers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst defaultModalMeta = {\r\n    modalSelector: '.modal-callback',\r\n    modalOverlaySelector: '.modal-overlay'\r\n}\r\n\r\nconst modalHandlers = (selector, display, modalMeta = defaultModalMeta) => {\r\n    const buttons = document.querySelectorAll(selector)\r\n    buttons.forEach((button) => {\r\n        button.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            const modal = document.querySelector(modalMeta.modalSelector)\r\n            const modalOverlay = document.querySelector(modalMeta.modalOverlaySelector)\r\n\r\n            modal.style.display = display\r\n            modalOverlay.style.display = display\r\n\r\n        })\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalHandlers);\n\n//# sourceURL=webpack://graduateworkjs/./src/modules/modalHandlers.js?");

/***/ }),

/***/ "./src/modules/scrollUp.js":
/*!*********************************!*\
  !*** ./src/modules/scrollUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollUp = () => {\n    const imgUp = document.querySelector('img.up')\n    const serviceNode = document.querySelector('#services')\n    const servicePositionTop = serviceNode.getBoundingClientRect().top\n    const initialBodyPositionTop = Math.abs(document.body.getBoundingClientRect().top)\n\n    if (initialBodyPositionTop < servicePositionTop) {\n        imgUp.style.display = 'none'\n    } else {\n        imgUp.style.display = 'block'\n    }\n\n    document.addEventListener('scroll', () => {\n        const bodyPositionTop = Math.abs(document.body.getBoundingClientRect().top)\n        if (bodyPositionTop < servicePositionTop) {\n            imgUp.style.display = 'none'\n        } else {\n            imgUp.style.display = 'block'\n        }\n    })\n\n    imgUp.addEventListener('click', function (e) {\n        window.scrollTo({\n            top: 0,\n            left: 0,\n            behavior: 'smooth'\n        })\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollUp);\n\n\n\n//# sourceURL=webpack://graduateworkjs/./src/modules/scrollUp.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst slider = () => {\n    let sliderBlock = document.querySelector('.top-slider')\n\n    for (const element of sliderBlock.children) {\n        element.querySelector('.table').classList.add('active')\n    }\n\n    const newSlide = () => {\n        let copySliderBlock = [...sliderBlock.children];\n\n        sliderBlock.replaceChildren(\n            ...[\n                ...copySliderBlock.slice(1),\n                ...copySliderBlock.slice(0, 1)\n            ]\n        )\n    }\n\n    let timerId = setTimeout(function tick() {\n        newSlide();\n        timerId = setTimeout(tick, 3000);\n    }, 3000);\n    \n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n\n//# sourceURL=webpack://graduateworkjs/./src/modules/slider.js?");

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