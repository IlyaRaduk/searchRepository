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

/***/ "./\u0000#src/js/countRepos.js":
/*!********************************!*\
  !*** ./ #src/js/countRepos.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ countRepos)\n/* harmony export */ });\nfunction countRepos() {\r\n    let counts = document.querySelectorAll('.repos__item').length;\r\n    const lastOne = counts % 10;\r\n    const lastTwo = counts % 100;\r\n    let str = '';\r\n    if (lastTwo > 10 && lastTwo < 15) {\r\n        str = ' репозиториев';\r\n    }\r\n    else if (lastOne == 1) {\r\n        str = 'репозиторий';\r\n    }\r\n    else if (lastOne > 1 && lastOne < 5) {\r\n        str = 'репозитория';\r\n    }\r\n    else {\r\n        str = ' репозиториев';\r\n    }\r\n    let title = document.querySelector('.repos__count');\r\n    title.innerHTML = counts + \" \" + str;\r\n}\r\n\n\n//# sourceURL=webpack://myform/./%00#src/js/countRepos.js?");

/***/ }),

/***/ "./\u0000#src/js/script.js":
/*!****************************!*\
  !*** ./ #src/js/script.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _countRepos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countRepos.js */ \"./\\u0000#src/js/countRepos.js\");\n/* harmony import */ var _searchRepos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchRepos.js */ \"./\\u0000#src/js/searchRepos.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    (0,_countRepos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_searchRepos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\r\n\r\nconst inputs = document.querySelectorAll('.form__input')\r\nfor (let input of inputs) {\r\n    input.addEventListener('input', (e) => {\r\n        if (e.target.closest('.error')) e.target.closest('.error').classList.remove('error');\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://myform/./%00#src/js/script.js?");

/***/ }),

/***/ "./\u0000#src/js/searchRepos.js":
/*!*********************************!*\
  !*** ./ #src/js/searchRepos.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchRepos)\n/* harmony export */ });\n/* harmony import */ var _countRepos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countRepos.js */ \"./\\u0000#src/js/countRepos.js\");\n/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.js */ \"./\\u0000#src/js/validation.js\");\n\r\n\r\n\r\nfunction searchRepos() {\r\n\r\n    const form = document.querySelector('.form');\r\n    const reposContainer = document.querySelector('.repos__colomns')\r\n\r\n    form.addEventListener('submit', async (e) => {\r\n        e.preventDefault();\r\n        if (!(0,_validation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()) return;\r\n        reposContainer.innerHTML = '';\r\n        document.querySelector('.preloader').classList.add('preloader-activ');\r\n        let response = await fetch(`https://api.github.com/search/repositories?q=${form.name.value}&per_page=10`);\r\n        let data = await response.json();\r\n        document.querySelector('.preloader').classList.remove('preloader-activ');\r\n        if (data.total_count === 0) {\r\n            let alert = document.createElement('div');\r\n            alert.classList.add('alert');\r\n            alert.innerHTML = ' Ничего не найдено';\r\n            reposContainer.prepend(alert);\r\n            return;\r\n        }\r\n        let repos = data.items.reverse();\r\n        for (let repo of repos) {\r\n            let newRepo = document.createElement('div');\r\n            newRepo.classList.add('repos__item');\r\n            newRepo.innerHTML = `\r\n                <div class=\"repos__title\">\r\n                    Repository:<a target=\"_blank\" href=\"${repo.html_url}\"> ${repo.name}</a>\r\n                </div>\r\n                <div class=\"repos__text\">\r\n                    <p class=\"repos__profile\">Profile: <span>${repo.owner.login}</span></p>\r\n                    <p class=\"repos__description\">Description: <span> ${repo.description}</span></p>\r\n                </div>`;\r\n            reposContainer.prepend(newRepo);\r\n        }\r\n        (0,_countRepos_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    })\r\n}\n\n//# sourceURL=webpack://myform/./%00#src/js/searchRepos.js?");

/***/ }),

/***/ "./\u0000#src/js/validation.js":
/*!********************************!*\
  !*** ./ #src/js/validation.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ validation)\n/* harmony export */ });\nconst form = document.querySelector('.form');\r\n\r\nfunction validation() {\r\n    let result = true;\r\n    if (!form.name.value || form.name.value.length<3) {\r\n        document.querySelector('.form__name').classList.add('error');\r\n        result = false;\r\n    }\r\n    return result;\r\n}\n\n//# sourceURL=webpack://myform/./%00#src/js/validation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./\u0000#src/js/script.js");
/******/ 	
/******/ })()
;