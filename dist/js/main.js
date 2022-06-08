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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalHandler */ \"./modules/modalHandler.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n//import modalHandlers from \"./modules/modalHandlers\"\r\n\r\n//import menu from \"./modules/menu\"\r\n\r\n//import slider from \"./modules/slider\"\r\n//import scrollUp from \"./modules/scrollUp\"\r\n//import accordeon from \"./modules/accordeon\"\r\n//import carousel from \"./modules/carusel\"\r\n\r\n\r\n(0,_modules_modalHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.mobile-menu .callback-btn', 'block')\r\n;(0,_modules_modalHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.header .callback-btn', 'block')\r\n;(0,_modules_modalHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.modal-close', 'none')\r\n;(0,_modules_modalHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.quest-section .button-services', 'block')\r\n;(0,_modules_modalHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.services-carousel .element', 'block')\r\n//menu()\r\n;(0,_modules_forms__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n//slider()\r\n//scrollUp()\r\n//accordeon()\r\n//carousel()\r\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\n    const nameInput = document.querySelector('.form-control')\n    const telInput = document.querySelector('.tel')\n\n    nameInput.addEventListener('input', (e) => {\n        nameInput.value = e.target.value.replace(/[^А-Яа-яёЁ]/ig, '')\n    })\n    telInput.addEventListener('input', (e) => {\n        telInput.value = e.target.value.replace(/[^0-9+]/ig, '')\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/modalHandler.js":
/*!*********************************!*\
  !*** ./modules/modalHandler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst defaultModalMeta = {\r\n    modalSelector: '.modal-callback',\r\n    modalOverlaySelector: '.modal-overlay'\r\n}\r\n\r\nconst modalHandler = (selector, display, modalMeta = defaultModalMeta) => {\r\n    const button = document.querySelector(selector)\r\n\r\n    button.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        const modal = document.querySelector(modalMeta.modalSelector)\r\n        const modalOverlay = document.querySelector(modalMeta.modalOverlaySelector)\r\n\r\n        modal.style.display = display\r\n        modalOverlay.style.display = display\r\n\r\n    })\r\n    const buttons = document.querySelectorAll(selector)\r\n    buttons.forEach((button) => {\r\n        button.addEventListener('click', (e) => {\r\n            e.preventDefault()\r\n            const modal = document.querySelector(modalMeta.modalSelector)\r\n            const modalOverlay = document.querySelector(modalMeta.modalOverlaySelector)\r\n\r\n            modal.style.display = display\r\n            modalOverlay.style.display = display\r\n\r\n        })\r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalHandler);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/modalHandler.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = () => {\r\n    const form = document.querySelector('form[name=\"form-callback\"]')\r\n    const name = document.querySelector('.form-control')\r\n    const tel = document.querySelector('.tel')\r\n    const statusBlock = document.createElement('div')\r\n    const modalCallback = document.getElementById('callback')\r\n    const modalOverlay = document.querySelector('.modal-overlay')\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка'\r\n    const successText = 'Отправлено'\r\n\r\n    form.addEventListener('submit', async (e) => {\r\n        e.preventDefault()\r\n\r\n        const user = {\r\n            username: name.value,\r\n            phone: tel.value\r\n        }\r\n\r\n        statusBlock.textContent = loadText\r\n        form.append(statusBlock)\r\n        const a = 1\r\n\r\n        try {\r\n            const response = await fetch(\"https://jsonplaceholder.typicode.com/users\", {\r\n                method: \"POST\",\r\n                body: JSON.stringify(user),\r\n                headers: {\r\n                    \"Content-Type\": \"application/json; charset=UTF-8\"\r\n                }\r\n\r\n            })\r\n\r\n            if (response.status === 404) {\r\n                throw new Error('Ошибка отправки формы')\r\n            } else {\r\n                const data = await response.json()\r\n                console.log(data)\r\n                statusBlock.textContent = successText\r\n                form.append(statusBlock)\r\n                setTimeout(() => {\r\n                    name.value = ''\r\n                    tel.value = ''\r\n                    statusBlock.textContent = ''\r\n                    modalCallback.style.display = 'none'\r\n                    modalOverlay.style.display = 'none'\r\n                }, 3000)\r\n\r\n            }\r\n        } catch (error) {\r\n            console.log(error)\r\n            statusBlock.textContent = errorText\r\n            form.append(statusBlock)\r\n        }\r\n    })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;