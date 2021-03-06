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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/footer.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/footer.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n}\n\n* input {\n  outline: none;\n  background: none;\n  border: none;\n}\n* button {\n  outline: none;\n  cursor: pointer;\n}\n* li {\n  list-style: none;\n}\n* a {\n  text-decoration: none;\n  cursor: pointer;\n  color: inherit;\n}\n\n.footer {\n  display: flex;\n}\n.footer a:hover {\n  color: #f08080;\n}\n.footer.dark-theme {\n  background-color: #2f2f2f;\n  color: #fff;\n}\n.footer.dark-theme * {\n  color: #fff;\n}\n.footer.light-theme {\n  background-color: #6495ED;\n  color: #FDF5E6;\n}\n.footer.light-theme * {\n  color: #FDF5E6;\n}\n\n.footer-contents {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: 20px 5% 20px 5%;\n}\n\n.footer-top {\n  display: flex;\n}\n.footer-top div * {\n  margin: auto;\n}\n\n.footer-top-left {\n  flex-direction: column;\n  display: flex;\n  width: 30%;\n  margin: auto;\n}\n\n.footer-top-middle {\n  flex-direction: column;\n  display: flex;\n  width: 30%;\n  margin: auto;\n}\n\n.footer-top-right {\n  flex-direction: column;\n  display: flex;\n  width: 30%;\n  margin: auto;\n}\n\n.footer-bottom {\n  display: flex;\n}\n\n.footer-bottom-middle {\n  width: 50%;\n  margin: auto;\n}\n\n.copyright {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  margin: auto;\n}\n.copyright img {\n  width: 100px;\n  height: 100px;\n  margin: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/icons/calcIcon.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/icons/calcIcon.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@keyframes calc-icon-cube-1 {\n  0% {\n    left: 0;\n    top: 0;\n  }\n  25% {\n    left: 100px;\n    top: 25px;\n    width: 75px;\n    height: 75px;\n    border-radius: 50px;\n  }\n  50% {\n    left: 100px;\n    top: 100px;\n    width: 50px;\n    height: 50px;\n    border-radius: 10px;\n  }\n  75% {\n    left: 25px;\n    top: 100px;\n    width: 75px;\n    height: 75px;\n    border-radius: 50px;\n  }\n  100% {\n    left: 0;\n    top: 0;\n    width: 100px;\n    height: 100px;\n    border-radius: 10px;\n  }\n}\n@keyframes calc-icon-cube-2 {\n  0% {\n    left: 100px;\n    top: 0;\n    border-radius: 10px;\n  }\n  25% {\n    left: 100px;\n    top: 100px;\n    width: 75px;\n    height: 75px;\n    border-radius: 50px;\n  }\n  50% {\n    left: 50px;\n    top: 100px;\n    width: 50px;\n    height: 50px;\n    border-radius: 10px;\n  }\n  75% {\n    left: 25px;\n    top: 25px;\n    width: 75px;\n    height: 75px;\n    border-radius: 50px;\n  }\n  100% {\n    left: 100px;\n    top: 0;\n    width: 100px;\n    height: 100px;\n    border-radius: 10px;\n  }\n}\n@keyframes calc-icon-cube-3 {\n  0% {\n    left: 100px;\n    top: 100px;\n    border-radius: 10px;\n  }\n  25% {\n    left: 25px;\n    top: 100px;\n    width: 75px;\n    height: 75px;\n    border-radius: 50px;\n  }\n  50% {\n    left: 50px;\n    top: 50px;\n    width: 50px;\n    height: 50px;\n    border-radius: 10px;\n  }\n  75% {\n    left: 100px;\n    top: 25px;\n    width: 75px;\n    height: 75px;\n    border-radius: 50px;\n  }\n  100% {\n    left: 100px;\n    top: 100px;\n    width: 100px;\n    height: 100px;\n    border-radius: 10px;\n  }\n}\n@keyframes calc-icon-cube-4 {\n  0% {\n    left: 0;\n    top: 100px;\n    border-radius: 10px;\n  }\n  25% {\n    left: 25px;\n    top: 25px;\n    width: 75px;\n    height: 75px;\n    border-radius: 50px;\n  }\n  50% {\n    left: 100px;\n    top: 50px;\n    width: 50px;\n    height: 50px;\n    border-radius: 10px;\n  }\n  75% {\n    left: 100px;\n    top: 100px;\n    width: 75px;\n    height: 75px;\n    border-radius: 50px;\n  }\n  100% {\n    left: 0;\n    top: 100px;\n    width: 100px;\n    height: 100px;\n    border-radius: 10px;\n  }\n}\n.calc-icon {\n  width: 200px;\n  height: 200px;\n}\n.calc-icon .calc-icon-cube-1 {\n  width: 100px;\n  height: 100px;\n  left: 0;\n  top: 0;\n  background: red;\n  position: relative;\n  border-radius: 10px;\n  animation: calc-icon-cube-1 1.5s infinite;\n}\n.calc-icon .calc-icon-cube-2 {\n  width: 100px;\n  height: 100px;\n  left: 100px;\n  top: 0;\n  background: orange;\n  position: absolute;\n  border-radius: 10px;\n  animation: calc-icon-cube-2 1.5s infinite;\n}\n.calc-icon .calc-icon-cube-3 {\n  width: 100px;\n  height: 100px;\n  left: 100px;\n  top: 100px;\n  background: mediumpurple;\n  position: absolute;\n  border-radius: 10px;\n  animation: calc-icon-cube-3 1.5s infinite;\n}\n.calc-icon .calc-icon-cube-4 {\n  width: 100px;\n  height: 100px;\n  left: 0;\n  top: 100px;\n  background: royalblue;\n  position: absolute;\n  border-radius: 10px;\n  animation: calc-icon-cube-4 1.5s infinite;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/icons/loadingIcon.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/icons/loadingIcon.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@keyframes loading-icon-cube-1 {\n  0% {\n    background: red;\n    width: 50px;\n    height: 50px;\n  }\n  16.6% {\n    background: green;\n    transform: scale(0.875);\n  }\n  33.2% {\n    background: darkolivegreen;\n    transform: scale(0.75);\n  }\n  49.8% {\n    background: royalblue;\n    transform: scale(0.625);\n  }\n  66.4% {\n    background: mediumpurple;\n    transform: scale(0.75);\n  }\n  83% {\n    background: orange;\n    transform: scale(0.875);\n  }\n  100% {\n    background: red;\n    transform: scale(1);\n  }\n}\n@keyframes loading-icon-cube-2 {\n  0% {\n    background: orange;\n    width: 50px;\n    height: 50px;\n  }\n  16.6% {\n    background: mediumpurple;\n    transform: scale(0.875);\n  }\n  33.2% {\n    background: royalblue;\n    transform: scale(0.75);\n  }\n  49.8% {\n    background: darkolivegreen;\n    transform: scale(0.625);\n  }\n  66.4% {\n    background: green;\n    transform: scale(0.75);\n  }\n  83% {\n    background: red;\n    transform: scale(0.875);\n  }\n  100% {\n    background: orange;\n    transform: scale(1);\n  }\n}\n@keyframes loading-icon-cube-3 {\n  0% {\n    background: mediumpurple;\n    transform: scale(0.875);\n  }\n  16.6% {\n    background: royalblue;\n    transform: scale(0.75);\n  }\n  33.2% {\n    background: darkolivegreen;\n    transform: scale(0.625);\n  }\n  49.8% {\n    background: green;\n    transform: scale(0.75);\n  }\n  66.4% {\n    background: red;\n    transform: scale(0.875);\n  }\n  83% {\n    background: orange;\n    transform: scale(1);\n  }\n  100% {\n    background: mediumpurple;\n    width: 50px;\n    height: 50px;\n  }\n}\n@keyframes loading-icon-cube-4 {\n  0% {\n    background: royalblue;\n    transform: scale(0.875);\n  }\n  16.6% {\n    background: darkolivegreen;\n    transform: scale(0.75);\n  }\n  33.2% {\n    background: green;\n    transform: scale(0.625);\n  }\n  49.8% {\n    background: red;\n    transform: scale(0.75);\n  }\n  66.4% {\n    background: orange;\n    transform: scale(0.875);\n  }\n  83% {\n    background: mediumpurple;\n    transform: scale(1);\n  }\n  100% {\n    background: royalblue;\n    width: 50px;\n    height: 50px;\n  }\n}\n@keyframes loading-icon-cube-5 {\n  0% {\n    background: darkolivegreen;\n    transform: scale(0.875);\n  }\n  16.6% {\n    background: green;\n    transform: scale(0.75);\n  }\n  33.2% {\n    background: red;\n    transform: scale(0.625);\n  }\n  49.8% {\n    background: orange;\n    transform: scale(0.75);\n  }\n  66.4% {\n    background: mediumpurple;\n    transform: scale(0.875);\n  }\n  83% {\n    background: royalblue;\n    transform: scale(1);\n  }\n  100% {\n    background: darkolivegreen;\n    width: 50px;\n    height: 50px;\n  }\n}\n@keyframes loading-icon-cube-6 {\n  0% {\n    background: green;\n    transform: scale(0.875);\n  }\n  16.6% {\n    background: red;\n    transform: scale(0.75);\n  }\n  33.2% {\n    background: orange;\n    transform: scale(0.625);\n  }\n  49.8% {\n    background: mediumpurple;\n    transform: scale(0.75);\n  }\n  66.4% {\n    background: royalblue;\n    transform: scale(0.875);\n  }\n  83% {\n    background: darkolivegreen;\n    transform: scale(1);\n  }\n  100% {\n    background: green;\n    width: 50px;\n    height: 50px;\n  }\n}\n.loading-icon {\n  width: 200px;\n  height: 200px;\n}\n.loading-icon .loading-icon-cube-1 {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  left: 50px;\n  top: 30px;\n  border-radius: 25px;\n  background: red;\n  animation: loading-icon-cube-1 0.8s infinite;\n}\n.loading-icon .loading-icon-cube-2 {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  left: 100px;\n  top: 30px;\n  border-radius: 25px;\n  background: orange;\n  animation: loading-icon-cube-2 0.8s infinite;\n}\n.loading-icon .loading-icon-cube-3 {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  left: 122.360679775px;\n  top: 74.72135955px;\n  border-radius: 50px;\n  background: mediumpurple;\n  animation: loading-icon-cube-3 0.8s infinite;\n}\n.loading-icon .loading-icon-cube-4 {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  left: 100px;\n  top: 119.4427191px;\n  border-radius: 50px;\n  background: royalblue;\n  animation: loading-icon-cube-4 0.8s infinite;\n}\n.loading-icon .loading-icon-cube-5 {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  left: 50px;\n  top: 119.4427191px;\n  border-radius: 50px;\n  background: darkolivegreen;\n  animation: loading-icon-cube-5 0.8s infinite;\n}\n.loading-icon .loading-icon-cube-6 {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  left: 27.639320225px;\n  top: 74.72135955px;\n  border-radius: 50px;\n  background: green;\n  animation: loading-icon-cube-6 0.8s infinite;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/mainTemplate.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/mainTemplate.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n}\n\n* input {\n  outline: none;\n  background: none;\n  border: none;\n}\n* button {\n  outline: none;\n  cursor: pointer;\n}\n* li {\n  list-style: none;\n}\n* a {\n  text-decoration: none;\n  cursor: pointer;\n  color: inherit;\n}\n\n.main {\n  display: flex;\n  margin-top: 50px;\n  min-height: 800px;\n  width: 100%;\n}\n.main.dark-theme {\n  background-color: #1f1f1f;\n}\n.main.light-theme {\n  background-color: #FDF5E6;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/sidebarPick.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/sidebarPick.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n}\n\n* input {\n  outline: none;\n  background: none;\n  border: none;\n}\n* button {\n  outline: none;\n  cursor: pointer;\n}\n* li {\n  list-style: none;\n}\n* a {\n  text-decoration: none;\n  cursor: pointer;\n  color: inherit;\n}\n\n.sidebar-pick {\n  color: #fff;\n  width: 15%;\n  min-width: 185px;\n  min-height: 1000px;\n}\n.sidebar-pick.dark-theme {\n  background-color: #2f2f2f;\n  color: #fff;\n}\n.sidebar-pick.light-theme {\n  background-color: #6495ED;\n  color: #FDF5E6;\n}\n.sidebar-pick .sidebar-menu {\n  width: 80%;\n  margin: 15% 5% 15% 5%;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title {\n  display: flex;\n  height: 30px;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container {\n  cursor: pointer;\n  width: 20%;\n  height: 100%;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide {\n  position: relative;\n  margin: 0 10px 10px 0;\n  width: 20px;\n  height: 20px;\n  background-color: transparent;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide.light-theme {\n  border: #FDF5E6 1px solid;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide.light-theme::before {\n  background: #FDF5E6;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide.light-theme::after {\n  background: #FDF5E6;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide.dark-theme {\n  border: #fff 1px solid;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide.dark-theme::before {\n  background: #fff;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide.dark-theme::after {\n  background: #fff;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide:hover {\n  border: 1px #f08080 solid;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide:hover::before {\n  background: #f08080;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide:hover::after {\n  background: #f08080;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide::before {\n  content: \"\";\n  position: absolute;\n  left: 10%;\n  top: 40%;\n  width: 80%;\n  height: 20%;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-hide::after {\n  content: \"\";\n  position: absolute;\n  left: 40%;\n  top: 10%;\n  width: 20%;\n  height: 80%;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-show {\n  position: relative;\n  margin: 0 10px 10px 0;\n  width: 20px;\n  height: 20px;\n  background-color: transparent;\n  border: 1px white solid;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-show.light-theme {\n  border: #FDF5E6 1px solid;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-show.light-theme::before {\n  background: #FDF5E6;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-show.dark-theme {\n  border: #fff 1px solid;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-show.dark-theme::before {\n  background: #fff;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-show:hover {\n  border: 1px #f08080 solid;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-show:hover::before {\n  background: #f08080;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-icon-container .menu-icon-show::before {\n  content: \"\";\n  position: absolute;\n  left: 10%;\n  top: 40%;\n  width: 80%;\n  height: 20%;\n  background: white;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-text-container {\n  width: 80%;\n  height: 100%;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-title .menu-text-container p {\n  font-size: 120%;\n  font-weight: 900;\n  height: 100%;\n  margin: 0;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-dropdown {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-dropdown.light-theme {\n  border-left: #FDF5E6 3px solid;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-dropdown.dark-theme {\n  border-left: #fff 3px solid;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-dropdown a {\n  margin: 5%;\n  font-size: 90%;\n  font-weight: 500;\n}\n.sidebar-pick .sidebar-menu .sidebar-menu-dropdown a:hover {\n  color: #f08080;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/topbar.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/topbar.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n}\n\n* input {\n  outline: none;\n  background: none;\n  border: none;\n}\n* button {\n  outline: none;\n  cursor: pointer;\n}\n* li {\n  list-style: none;\n}\n* a {\n  text-decoration: none;\n  cursor: pointer;\n  color: inherit;\n}\n\n.header {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 50px;\n}\n.header.dark-theme {\n  background-color: #2f2f2f;\n}\n.header.dark-theme .nav * {\n  color: #fff;\n  background-color: #2f2f2f;\n}\n.header.dark-theme .nav *:hover {\n  color: #f08080;\n}\n.header.dark-theme .nav a:hover {\n  background-color: #696969;\n  color: #f08080;\n}\n.header.dark-theme .options * {\n  color: #fff;\n  background-color: #2f2f2f;\n}\n.header.dark-theme .options *:hover {\n  color: #f08080;\n}\n.header.dark-theme .options a:hover {\n  background-color: #696969;\n  color: #f08080;\n}\n.header.dark-theme .search-input input {\n  border: 2px solid #fff;\n  color: #fff;\n}\n.header.dark-theme .search-submit {\n  background-color: #2f2f2f;\n  color: #fff;\n}\n.header.dark-theme .search-cleaner {\n  background-color: #2f2f2f;\n  color: #fff;\n}\n.header.dark-theme .search-icon {\n  background-color: #2f2f2f;\n}\n.header.light-theme {\n  background-color: #6495ED;\n}\n.header.light-theme .nav * {\n  color: #FDF5E6;\n  background-color: #6495ED;\n}\n.header.light-theme .nav *:hover {\n  color: #f08080;\n}\n.header.light-theme .nav a:hover {\n  background-color: #B0C4DE;\n  color: #f08080;\n}\n.header.light-theme .options * {\n  color: #FDF5E6;\n  background-color: #6495ED;\n}\n.header.light-theme .options *:hover {\n  color: #f08080;\n}\n.header.light-theme .options a:hover {\n  background-color: #B0C4DE;\n  color: #f08080;\n}\n.header.light-theme .search-input input {\n  border: 2px solid #FDF5E6;\n  color: #FDF5E6;\n}\n.header.light-theme .search-input:focus {\n  border: 2px solid #f08080;\n}\n.header.light-theme .search-submit {\n  background-color: #6495ED;\n  color: #FDF5E6;\n}\n.header.light-theme .search-cleaner {\n  background-color: #6495ED;\n  color: #FDF5E6;\n}\n.header.light-theme .search-icon {\n  background-color: #6495ED;\n}\n\n.top-bar {\n  position: fixed;\n  display: flex;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: 40px;\n  margin-right: 40px;\n  height: 50px;\n  width: 90%;\n}\n\n.logo {\n  width: calc(100% / 6);\n  display: flex;\n  height: 100%;\n  text-decoration: none;\n  margin-right: 10px;\n}\n.logo img {\n  display: inline-block;\n  border-style: none;\n  margin: 10px 5px 10px 10px;\n  padding: 0;\n  border-radius: 8px;\n  height: 30px;\n  width: 30px;\n}\n.logo span {\n  text-align: center;\n  vertical-align: center;\n  font-weight: 700;\n  font-size: 20px;\n  margin: 15px 0 10px 5px;\n  overflow: no-display;\n  color: #f08080;\n}\n\n.nav {\n  display: flex;\n  height: 100%;\n  width: 40%;\n}\n\n.nav-container {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  width: 100px;\n}\n\n.nav-contents {\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.dropdown {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-weight: 400;\n  background-color: transparent;\n}\n.dropdown a {\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.search {\n  display: flex;\n  width: 30%;\n  height: 50px;\n  text-align: right;\n  justify-content: flex-end;\n  align-items: center;\n  margin-right: 40px;\n}\n\n.search-input {\n  display: flex;\n  width: 100%;\n}\n.search-input input {\n  display: flex;\n  width: 100%;\n  height: 26px;\n  background: transparent;\n  border-radius: 5px;\n  font-size: 14px;\n  padding: 0 10px 0 10px;\n}\n.search-input button:hover {\n  color: #f08080;\n}\n\n.search-submit {\n  position: relative;\n  right: 55px;\n  width: 30px;\n  height: 26px;\n  top: 2px;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0;\n}\n\n.search-cleaner {\n  position: relative;\n  right: 55px;\n  width: 20px;\n  height: 26px;\n  top: 2px;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 20px 0 10px;\n}\n\n.search-icon {\n  float: right;\n  width: 30px;\n  height: 30px;\n  border-radius: 4px;\n  border: none;\n  padding: 0;\n}\n\n.options {\n  display: flex;\n}\n\n.opt-container {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  width: 100px;\n}\n\n.opt-contents {\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.opt-contents:hover {\n  color: #f08080;\n}\n\n.language-container {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  width: 100px;\n}\n\n.language-contents {\n  cursor: pointer;\n  height: 50px;\n  width: 50%;\n  line-height: 50px;\n  margin: 0 auto;\n}\n\n.language-icon {\n  height: 100%;\n  width: 25px;\n  margin: 0 20% 0 20%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/404.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/404.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/index.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/index.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n}\n\n* input {\n  outline: none;\n  background: none;\n  border: none;\n}\n* button {\n  outline: none;\n  cursor: pointer;\n}\n* li {\n  list-style: none;\n}\n* a {\n  text-decoration: none;\n  cursor: pointer;\n  color: inherit;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  height: 100%;\n  margin: auto;\n}\n.main-container.dark-theme * {\n  color: #fff;\n}\n.main-container.dark-theme .title-name {\n  color: #f08080;\n}\n.main-container.light-theme * {\n  color: #333;\n}\n.main-container.light-theme .title-name {\n  color: #f08080;\n}\n\n.main-top {\n  display: flex;\n  width: 100%;\n  height: 300px;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  height: 100%;\n}\n\n.title-name {\n  font-size: 50px;\n  font-weight: 700;\n  margin: 40px 0 20px 0;\n}\n\n.title-description {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.main-contents {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 800px;\n}\n.main-contents div p {\n  border-bottom: currentColor 2px solid;\n  font-weight: 500;\n}\n\n.news-containers {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n}\n\n.new-contents-v {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n}\n.new-contents-v img {\n  width: 100%;\n  margin: 20px 10% 20px 10%;\n}\n\n.new-contents-h {\n  display: flex;\n}\n.new-contents-h img {\n  width: 100px;\n  height: 100px;\n  margin: 0 20px 0 20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/pickcard.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/pickcard.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n}\n\n* input {\n  outline: none;\n  background: none;\n  border: none;\n}\n* button {\n  outline: none;\n  cursor: pointer;\n}\n* li {\n  list-style: none;\n}\n* a {\n  text-decoration: none;\n  cursor: pointer;\n  color: inherit;\n}\n\n.main-pick {\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  width: 100%;\n}\n.main-pick .blank {\n  width: 5%;\n}\n.main-pick .pick {\n  width: 75%;\n}\n.main-pick .pick.dark-theme {\n  color: #fff;\n}\n.main-pick .pick.light-theme {\n  color: #333;\n}\n.main-pick .pick .pick-title {\n  display: flex;\n  width: 100%;\n  max-width: 1200px;\n  min-width: 600px;\n}\n.main-pick .pick .pick-title .pool-img {\n  width: 70%;\n  height: auto;\n}\n.main-pick .pick .pick-title .pool-img img {\n  width: 100%;\n}\n.main-pick .pick .pick-title .pickup-info {\n  margin-left: 5%;\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  height: 100%;\n}\n.main-pick .pick .pick-title .pickup-info .pickup-description {\n  font-weight: 700;\n  margin: 0;\n}\n.main-pick .pick .pick-title .pickup-info .pickup-box {\n  height: 20%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 5%;\n}\n.main-pick .pick .pick-title .pickup-info .pickup-box p {\n  height: 25%;\n  width: 100%;\n  display: inline-block;\n  margin: 1% 0 1% 0;\n}\n.main-pick .pick .pick-title .pickup-info .pickup-box .pickup-showcard {\n  display: flex;\n  margin: 2px 0 2px 0;\n}\n.main-pick .pick .pick-title .pickup-info .pickup-box .pickup-showcard .pickup-container {\n  width: 45%;\n  min-width: 130px;\n  display: flex;\n  height: 50px;\n  margin-right: 5%;\n  /*\n   div {\n    display: flex;\n    margin-right: 5%;\n    height: 100%;\n    max-width: 50%;\n    p {\n      width: 60%;\n      height: 10%;\n      margin: 0;\n      font-size: 100%;\n      font-weight: 500;\n    }\n    img{\n      width: 40%;\n      height: 40%;\n      margin-right: 1%;\n    }\n\n  }\n  */\n}\n.main-pick .pick .pick-title .pickup-info .pickup-box .pickup-showcard .pickup-container .pickup-img-container {\n  height: 100%;\n  width: 50px;\n}\n.main-pick .pick .pick-title .pickup-info .pickup-box .pickup-showcard .pickup-container .pickup-img-container img {\n  height: 46px;\n  width: 46px;\n}\n.main-pick .pick .pick-title .pickup-info .pickup-box .pickup-showcard .pickup-container .pickup-name-container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.main-pick .pick .pick-title .pickup-info .pickup-box .pickup-showcard .pickup-container .pickup-name-container p {\n  margin: 0 0 0 5px;\n  height: 20px;\n  min-width: 80px;\n  font-size: 110%;\n  font-weight: 700;\n}\n.main-pick .pick .pick-menu {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.main-pick .pick .pick-menu .buttons {\n  display: flex;\n}\n.main-pick .pick .pick-menu .buttons .menu-button {\n  display: flex;\n  padding: 5px 12px;\n  border: 1px solid #446d88;\n  background: #58a linear-gradient(#77a0bb, #58a);\n  border-radius: 3px;\n  box-shadow: 0 0.8px 4px gray;\n  color: white;\n  text-shadow: 0 -0.8px 0.8px #335166;\n  font-size: 125%;\n  line-height: 1.5;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.main-pick .pick .pick-menu .pick-info {\n  display: flex;\n  margin: 0;\n}\n.main-pick .pick .pick-menu .pick-info p {\n  margin: 10px 0 0 20px;\n}\n.main-pick .pick .case {\n  display: inline-block;\n  margin: 10px;\n}\n.main-pick .pick .case p {\n  font-size: 100%;\n  font-weight: 900;\n  margin: 0 0 5px 0;\n}\n.main-pick .pick .case .pick-img {\n  position: relative;\n}\n.main-pick .pick .case .pick-img .card {\n  width: 90px;\n  height: 165px;\n}\n.main-pick .pick .case .pick-img .class-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 25px;\n  height: 25px;\n}\n.main-pick .pick .case .pick-img .rare-icon {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n.main-pick .pick .record-container {\n  display: flex;\n  flex-direction: column;\n  margin: 50px 0 100px 0;\n  max-width: 100%;\n}\n.main-pick .pick .record-container .record {\n  display: flex;\n  max-width: 100%;\n  margin: 5px 0 0 0;\n}\n.main-pick .pick .record-container .record div {\n  font-size: 200%;\n}\n.main-pick .pick .record-container .record .pick-img-container {\n  display: inline-block;\n}\n.main-pick .pick .record-container .record .pick-img-container img {\n  border-radius: 3px;\n  width: 48px;\n  height: 48px;\n  margin: 0 5px 0 5px;\n}\n.main-pick .pick .wait-calc {\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  left: 0;\n  top: 0;\n  z-index: 990;\n}\n.main-pick .pick .wait-calc .bkg-blur {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 997;\n}\n.main-pick .pick .wait-calc .calc-icon-container {\n  position: absolute;\n  top: 30%;\n  left: 45%;\n  z-index: 998;\n  filter: blur(0.5px);\n}\n.main-pick .pick .wait-calc .calc-description {\n  position: fixed;\n  top: 60%;\n  left: 45%;\n  font-size: 36px;\n  font-weight: 900;\n  z-index: 999;\n}\n\n.\\36  {\n  color: red;\n}\n\n.\\35  {\n  color: orange;\n}\n\n.\\34  {\n  color: mediumpurple;\n}\n\n.\\33  {\n  color: royalblue;\n}\n\n.img {\n  background-color: white;\n  border: transparent 2px solid;\n}\n\n.img6 {\n  background: linear-gradient(red, white);\n}\n\n.img5 {\n  background: linear-gradient(orange, white);\n}\n\n.img4 {\n  background: linear-gradient(mediumpurple, white);\n}\n\n.img3 {\n  background: linear-gradient(royalblue, white);\n}\n\n.target {\n  border: greenyellow 2px solid;\n}\n\n.sidebar-target {\n  font-weight: 900;\n  color: greenyellow;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/pools.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/pools.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n}\n\n* input {\n  outline: none;\n  background: none;\n  border: none;\n}\n* button {\n  outline: none;\n  cursor: pointer;\n}\n* li {\n  list-style: none;\n}\n* a {\n  text-decoration: none;\n  cursor: pointer;\n  color: inherit;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  height: 100%;\n  margin: auto;\n}\n.main-container.dark-theme * {\n  color: #fff;\n}\n.main-container.dark-theme .title-name {\n  color: #f08080;\n}\n.main-container.light-theme * {\n  color: #333;\n}\n.main-container.light-theme .title-name {\n  color: #f08080;\n}\n\n.main-top {\n  display: flex;\n  width: 100%;\n  height: 300px;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  height: 100%;\n}\n\n.title-name {\n  font-size: 50px;\n  font-weight: 700;\n  margin: 40px 0 20px 0;\n}\n\n.title-description {\n  font-size: 20px;\n  font-weight: 500;\n}\n\n.main-contents {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 800px;\n}\n.main-contents div p {\n  border-bottom: currentColor 2px solid;\n  font-weight: 500;\n}\n\n.news-containers {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n}\n\n.new-contents-v {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n}\n.new-contents-v img {\n  width: 100%;\n  margin: 20px 10% 20px 10%;\n}\n\n.new-contents-h {\n  display: flex;\n}\n.new-contents-h img {\n  width: 100px;\n  height: 100px;\n  margin: 0 20px 0 20px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/templatePage.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/templatePage.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n}\n\n* input {\n  outline: none;\n  background: none;\n  border: none;\n}\n* button {\n  outline: none;\n  cursor: pointer;\n}\n* li {\n  list-style: none;\n}\n* a {\n  text-decoration: none;\n  cursor: pointer;\n  color: inherit;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  height: 100%;\n  margin: auto;\n}\n.main-container.dark-theme * {\n  color: #fff;\n}\n.main-container.dark-theme .title-name {\n  color: #f08080;\n}\n.main-container.light-theme * {\n  color: #333;\n}\n.main-container.light-theme .title-name {\n  color: #f08080;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/test.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/test.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loading-icon {\n  position: absolute;\n  top: 300px;\n  left: 700px;\n}\n\n.icon1-container {\n  position: absolute;\n  top: 300px;\n  left: 100px;\n  width: 200px;\n  height: 200px;\n}\n@keyframes wait-cube-1-1 {\n  0% {\n    background: red;\n    left: 0;\n    top: 0;\n    border-radius: 10px;\n  }\n  25% {\n    background: orange;\n    border-radius: 10px;\n    top: 0;\n    left: 100px;\n  }\n  50% {\n    background: mediumpurple;\n    border-radius: 50px;\n    top: 100px;\n    left: 100px;\n  }\n  75% {\n    background: royalblue;\n    border-radius: 50px;\n    top: 100px;\n    left: 0;\n  }\n  100% {\n    background: red;\n    border-radius: 10px;\n    top: 0;\n    left: 0;\n  }\n}\n@keyframes wait-cube-1-2 {\n  0% {\n    background: orange;\n    left: 100px;\n    top: 0;\n    border-radius: 50px;\n  }\n  25% {\n    background: mediumpurple;\n    border-radius: 50px;\n    top: 100px;\n    left: 100px;\n  }\n  50% {\n    background: royalblue;\n    border-radius: 10px;\n    top: 100px;\n    left: 0;\n  }\n  75% {\n    background: red;\n    border-radius: 10px;\n    top: 0;\n    left: 0;\n  }\n  100% {\n    background: orange;\n    border-radius: 50px;\n    top: 0;\n    left: 100px;\n  }\n}\n@keyframes wait-cube-1-3 {\n  0% {\n    background: mediumpurple;\n    left: 100px;\n    top: 100px;\n    border-radius: 10px;\n  }\n  25% {\n    background: royalblue;\n    border-radius: 10px;\n    top: 100px;\n    left: 0;\n  }\n  50% {\n    background: red;\n    border-radius: 50px;\n    top: 0;\n    left: 0;\n  }\n  75% {\n    background: orange;\n    border-radius: 50px;\n    top: 0;\n    left: 100px;\n  }\n  100% {\n    background: mediumpurple;\n    border-radius: 10px;\n    top: 100px;\n    left: 100px;\n  }\n}\n@keyframes wait-cube-1-4 {\n  0% {\n    background: royalblue;\n    left: 0;\n    top: 100px;\n    border-radius: 50px;\n  }\n  25% {\n    background: red;\n    border-radius: 50px;\n    top: 0;\n    left: 0;\n  }\n  50% {\n    background: orange;\n    border-radius: 10px;\n    top: 0;\n    left: 100px;\n  }\n  75% {\n    background: mediumpurple;\n    border-radius: 10px;\n    top: 100px;\n    left: 100px;\n  }\n  100% {\n    background: royalblue;\n    border-radius: 50px;\n    top: 100px;\n    left: 0;\n  }\n}\n.icon1-container .wait-cube-1-1 {\n  width: 100px;\n  height: 100px;\n  background: red;\n  position: relative;\n  border-radius: 10px;\n  animation: wait-cube-1-1 3s infinite;\n}\n.icon1-container .wait-cube-1-2 {\n  width: 100px;\n  height: 100px;\n  background: orange;\n  position: absolute;\n  border-radius: 10px;\n  top: 0;\n  left: 100px;\n  animation: wait-cube-1-2 3s infinite;\n}\n.icon1-container .wait-cube-1-3 {\n  width: 100px;\n  height: 100px;\n  background: mediumpurple;\n  position: absolute;\n  border-radius: 10px;\n  top: 100px;\n  left: 100px;\n  animation: wait-cube-1-3 3s infinite;\n}\n.icon1-container .wait-cube-1-4 {\n  width: 100px;\n  height: 100px;\n  background: royalblue;\n  position: absolute;\n  border-radius: 10px;\n  top: 100px;\n  left: 0;\n  animation: wait-cube-1-4 3s infinite;\n}\n\n.plus-icon {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  top: 300px;\n  border: black 5px solid;\n  left: 500px;\n}\n.plus-icon::before {\n  content: \"\";\n  position: absolute;\n  left: 10%;\n  top: 40%;\n  width: 80%;\n  height: 20%;\n  background: black;\n}\n.plus-icon::after {\n  content: \"\";\n  position: absolute;\n  left: 40%;\n  top: 10%;\n  width: 20%;\n  height: 80%;\n  background: black;\n}\n.plus-icon:hover::before {\n  animation: animation2 0.5s;\n  background: red;\n}\n.plus-icon:hover::after {\n  animation: animation1 0.5s;\n  background: transparent;\n}\n\n@keyframes animation1 {\n  from {\n    background: black;\n  }\n  to {\n    background: transparent;\n  }\n}\n@keyframes animation2 {\n  from {\n    background: black;\n  }\n  to {\n    background: red;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return createBrowserHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return createHashHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return createMemoryHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/esm/resolve-pathname.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/esm/value-equal.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__["default"])(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(prompt == null, 'A history supports only one prompt at a time') : undefined;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Browser history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Hash history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;
        setState();
      }
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__["default"])((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["default"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return BrowserRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["MemoryRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Prompt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Route"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["StaticRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["generatePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useHistory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["useRouteMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return react_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"]; });

/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createBrowserHistory"])(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (true) {
  BrowserRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
    forceRefresh: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  };

  BrowserRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : undefined;
  };
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createHashHistory"])(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["Router"], {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

if (true) {
  HashRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    hashType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_5__["default"])(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : undefined;
  };
}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", props);
});

if (true) {
  LinkAnchor.displayName = "LinkAnchor";
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref2, ["component", "replace", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <Link> outside a <Router>") : undefined : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component, props);
  });
});

if (true) {
  var toType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]);
  var refType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
  })]);
  Link.displayName = "Link";
  Link.propTypes = {
    innerRef: refType,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    replace: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    to: toType.isRequired
  };
}

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_0__["__RouterContext"].Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_8__["default"])(false, "You should not use <NavLink> outside a <Router>") : undefined : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? Object(react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, styleProp, {}, activeStyle) : styleProp;

    var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Link, props);
  });
});

if (true) {
  NavLink.displayName = "NavLink";
  var ariaCurrentType = prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["page", "step", "location", "date", "time", "true"]);
  NavLink.propTypes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    activeStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    exact: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    isActive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    sensitive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    strict: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
  });
}


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, __HistoryContext, __RouterContext, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return MemoryRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return Prompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return StaticRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__HistoryContext", function() { return historyContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return generatePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return matchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return useHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return useLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return useParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return useRouteMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return withRouter; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mini-create-react-context */ "./node_modules/mini-create-react-context/dist/esm/index.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/react-router/node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = Object(mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = Object(mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Router.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    staticContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(prevProps.history === this.props.history, "You cannot change <Router history>") : undefined;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createMemoryHistory"])(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    initialIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : undefined;
  };
}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Prompt> outside a <Router>") : undefined : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]);
  Prompt.propTypes = {
    when: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Redirect> outside a <Router>") : undefined : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(prevProps.to);

        if (!Object(history__WEBPACK_IMPORTED_MODULE_3__["locationsAreEqual"])(prevLocation, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    from: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : undefined;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Route> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : children : component ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
    component: function component(props, propName) {
      if (props[propName] && !Object(react_is__WEBPACK_IMPORTED_MODULE_9__["isValidElementType"])(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)]),
    render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    sensitive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    strict: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
  };

  Route.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : undefined;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : Object(history__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
}

function staticHandler(methodName) {
  return function () {
      true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You cannot %s with <StaticRouter>", methodName) : undefined ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  StaticRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    context: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : undefined;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Switch> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Switch.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(props, ["wrappedComponentRef"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <" + displayName + " /> outside a <Router>") : undefined : void 0;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default()(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext;
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useHistory()") : undefined : void 0;
  }

  return useContext(historyContext);
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useLocation()") : undefined : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useParams()") : undefined : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useRouteMatch()") : undefined : void 0;
  }

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-router/node_modules/isarray/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-router/node_modules/path-to-regexp/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/react-router/node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/sass/modules/footer.scss":
/*!**************************************!*\
  !*** ./src/sass/modules/footer.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/footer.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sass/modules/icons/calcIcon.scss":
/*!**********************************************!*\
  !*** ./src/sass/modules/icons/calcIcon.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./calcIcon.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/icons/calcIcon.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sass/modules/icons/loadingIcon.scss":
/*!*************************************************!*\
  !*** ./src/sass/modules/icons/loadingIcon.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./loadingIcon.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/icons/loadingIcon.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sass/modules/mainTemplate.scss":
/*!********************************************!*\
  !*** ./src/sass/modules/mainTemplate.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./mainTemplate.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/mainTemplate.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sass/modules/sidebarPick.scss":
/*!*******************************************!*\
  !*** ./src/sass/modules/sidebarPick.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./sidebarPick.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/sidebarPick.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sass/modules/topbar.scss":
/*!**************************************!*\
  !*** ./src/sass/modules/topbar.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./topbar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/modules/topbar.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sass/pages/404.scss":
/*!*********************************!*\
  !*** ./src/sass/pages/404.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./404.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/404.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sass/pages/index.scss":
/*!***********************************!*\
  !*** ./src/sass/pages/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sass/pages/pickcard.scss":
/*!**************************************!*\
  !*** ./src/sass/pages/pickcard.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./pickcard.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/pickcard.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sass/pages/pools.scss":
/*!***********************************!*\
  !*** ./src/sass/pages/pools.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./pools.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/pools.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sass/pages/templatePage.scss":
/*!******************************************!*\
  !*** ./src/sass/pages/templatePage.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./templatePage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/templatePage.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sass/pages/test.scss":
/*!**********************************!*\
  !*** ./src/sass/pages/test.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./test.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/pages/test.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scripts/app.jsx":
/*!*****************************!*\
  !*** ./src/scripts/app.jsx ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/index.jsx */ "./src/scripts/pages/index.jsx");
/* harmony import */ var _pages_404_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/404.jsx */ "./src/scripts/pages/404.jsx");
/* harmony import */ var _pages_templatePage_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/templatePage.jsx */ "./src/scripts/pages/templatePage.jsx");
/* harmony import */ var _pages_showPool_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/showPool.jsx */ "./src/scripts/pages/showPool.jsx");
/* harmony import */ var _pages_pickcard_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pickcard.jsx */ "./src/scripts/pages/pickcard.jsx");
/* harmony import */ var _tools_checkThemeCookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/checkThemeCookie */ "./src/scripts/tools/checkThemeCookie.js");
/* harmony import */ var _tools_checkLanguageCookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tools/checkLanguageCookie */ "./src/scripts/tools/checkLanguageCookie.js");
/* harmony import */ var _pages_test_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/test.jsx */ "./src/scripts/pages/test.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class MainRouter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "makePickSimuRouter", array => {
      return array.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: x.url,
        key: `${x.type}${x.code}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_pickcard_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
        language: this.props.language,
        theme: this.props.theme,
        toDarkTheme: this.props.toDarkTheme,
        toLightTheme: this.props.toLightTheme,
        toZH_CN: this.props.toZH_CN,
        toEN_US: this.props.toEN_US,
        toJA_JP: this.props.toJA_JP,
        poolType: x.type,
        poolName: x.name,
        poolCode: x.url.split("/")[2],
        poolList: this.props.poolList
      })));
    });

    _defineProperty(this, "makePickSimuRootRouter", array => {
      return array.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: `/${x}`,
        key: x
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_showPool_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
        language: this.props.language,
        theme: this.props.theme,
        toDarkTheme: this.props.toDarkTheme,
        toLightTheme: this.props.toLightTheme,
        toZH_CN: this.props.toZH_CN,
        toEN_US: this.props.toEN_US,
        toJA_JP: this.props.toJA_JP,
        poolList: this.props.poolList,
        poolType: x
      })));
    });
  }

  render() {
    const pickSimuPoolArray = this.props.poolList.event.concat(this.props.poolList.limit).concat(this.props.poolList.regular);
    const pickSimuPoolList = this.makePickSimuRouter(pickSimuPoolArray);
    const pickSimuRootArray = ["regularPool", "limitPool", "eventPool"];
    const pickSimuRootList = this.makePickSimuRootRouter(pickSimuRootArray);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_index_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      language: this.props.language,
      theme: this.props.theme,
      toDarkTheme: this.props.toDarkTheme,
      toLightTheme: this.props.toLightTheme,
      toZH_CN: this.props.toZH_CN,
      toEN_US: this.props.toEN_US,
      toJA_JP: this.props.toJA_JP
    })), pickSimuRootList, pickSimuPoolList, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/test"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_test_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/*"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_templatePage_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      language: this.props.language,
      theme: this.props.theme,
      toDarkTheme: this.props.toDarkTheme,
      toLightTheme: this.props.toLightTheme,
      toZH_CN: this.props.toZH_CN,
      toEN_US: this.props.toEN_US,
      toJA_JP: this.props.toJA_JP
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/404"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_404_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
  }

}

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "toDarkTheme", () => {
      console.log("to-dark");
      document.cookie = "theme=dark-theme;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
      this.setState({
        theme: "dark-theme"
      });
    });

    _defineProperty(this, "toLightTheme", () => {
      console.log("to-light");
      document.cookie = "theme=light-theme;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
      this.setState({
        theme: "light-theme"
      });
    });

    _defineProperty(this, "toZH_CN", () => {
      console.log("change language to zh-cn");
      document.cookie = "language=zh-cn;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
      this.setState({
        language: "zh-cn"
      });
    });

    _defineProperty(this, "toEN_US", () => {
      console.log("change language to en-us");
      document.cookie = "language=en-us;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
      this.setState({
        language: "en-us"
      });
    });

    _defineProperty(this, "toJA_JP", () => {
      console.log("change language to ja-jp");
      document.cookie = "language=ja-jp;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
      this.setState({
        language: "ja-jp"
      });
    });

    _defineProperty(this, "getPoolList", () => {
      const data = {
        params: {
          type: "search",
          method: "getPoolList",
          poolType: "all"
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/getPoolList", data).then(res => {
        res.data.update = true;
        this.setState({
          poolList: res.data
        });
      });
    });

    this.state = {
      theme: Object(_tools_checkThemeCookie__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      language: Object(_tools_checkLanguageCookie__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      poolListUpdated: false,
      poolList: {
        event: [],
        limit: [],
        regular: []
      }
    };
  }

  componentDidMount() {
    if (!this.state.poolListUpdated) {
      console.log("init...");
      this.getPoolList();
      console.log("up to date!");
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainRouter, {
      language: this.state.language,
      theme: this.state.theme,
      toDarkTheme: this.toDarkTheme,
      toLightTheme: this.toLightTheme,
      toZH_CN: this.toZH_CN,
      toEN_US: this.toEN_US,
      toJA_JP: this.toJA_JP,
      poolList: this.state.poolList
    });
  }

}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById("react-root"));

/***/ }),

/***/ "./src/scripts/components/Footer.jsx":
/*!*******************************************!*\
  !*** ./src/scripts/components/Footer.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_modules_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sass/modules/footer.scss */ "./src/sass/modules/footer.scss");
/* harmony import */ var _sass_modules_footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_modules_footer_scss__WEBPACK_IMPORTED_MODULE_1__);



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      zh_cn: {
        contents: [{
          key: 0,
          content: "关于ArkMelon"
        }, {
          key: 1,
          content: "使用授权"
        }, {
          key: 2,
          content: "手机/便携设备视图"
        }]
      },
      ja_jp: {
        contents: [{
          key: 0,
          content: "ArkMelonについて"
        }, {
          key: 1,
          content: "著作権関連"
        }, {
          key: 2,
          content: "スマホ/携帯設備ページ"
        }]
      },
      en_us: {
        contents: [{
          key: 0,
          content: "About ArkMelon"
        }, {
          key: 1,
          content: "Authority"
        }, {
          key: 2,
          content: "Phone/Portable View"
        }]
      }
    };
  }

  render() {
    let ctx;

    if (this.props.language === "zh-cn") {
      ctx = this.state.zh_cn;
    } else if (this.props.language === "ja-jp") {
      ctx = this.state.ja_jp;
    } else if (this.props.language === "en-us") {
      ctx = this.state.en_us;
    } else {
      ctx = this.state.zh_cn;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `footer ${this.props.theme}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-contents"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-top-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/"
    }, " ", ctx.contents[0].content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-top-middle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/"
    }, " ", ctx.contents[1].content, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-top-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/"
    }, ctx.contents[2].content))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "copyright"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Copyright \xA9 2020 DragonCat Products."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "QR",
      src: "../../images/githubQR.png"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/scripts/components/MainTemplate.jsx":
/*!*************************************************!*\
  !*** ./src/scripts/components/MainTemplate.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_modules_mainTemplate_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sass/modules/mainTemplate.scss */ "./src/sass/modules/mainTemplate.scss");
/* harmony import */ var _sass_modules_mainTemplate_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_modules_mainTemplate_scss__WEBPACK_IMPORTED_MODULE_1__);



class MainTemplate extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `main ${this.props.theme}`
    }, this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MainTemplate);

/***/ }),

/***/ "./src/scripts/components/SideBarPick.jsx":
/*!************************************************!*\
  !*** ./src/scripts/components/SideBarPick.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_modules_sidebarPick_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sass/modules/sidebarPick.scss */ "./src/sass/modules/sidebarPick.scss");
/* harmony import */ var _sass_modules_sidebarPick_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_modules_sidebarPick_scss__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SideBarMenuDropdown extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.display) {
      const list = this.props.data.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: x.name === this.props.poolName ? "sidebar-target" : "",
        key: x.name,
        href: x.url
      }, x.name));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: `sidebar-menu-dropdown ${this.props.theme}`
      }, list);
    } else {
      return null;
    }
  }

}

class SideBarMenu extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "checkPool", () => {
      console.log(this.props.poolType, this.props.type);

      if (this.props.poolType === this.props.type) {
        this.setState({
          display: true
        });
      }
    });

    _defineProperty(this, "showMenu", () => {
      this.setState({
        display: !this.state.display
      });
    });

    this.state = {
      display: false,
      status: "hide"
    };
  }

  componentDidMount() {
    this.checkPool();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidebar-menu"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidebar-menu-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "menu-icon-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `menu-icon${this.state.display ? "-show" : "-hide"} ${this.props.theme}`,
      onClick: () => this.showMenu()
    }, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `menu-text-container ${this.props.theme}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.props.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBarMenuDropdown, {
      data: this.props.data,
      display: this.state.display,
      poolName: this.props.poolName,
      theme: this.props.theme
    }));
  }

}

class SideBarPick extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handlePoolList", () => {
      const poolList = this.props.poolList;
      delete poolList.update;
      let out = [];
      Object.keys(poolList).forEach(x => {
        let title;
        if (x === "event") title = "活动寻访";else if (x === "limit") title = "限定寻访";else title = "常驻标准寻访";
        poolList[x].forEach((y, i, arr) => {
          if (y.name === this.props.poolName) {
            arr.splice(i, 1);
            arr.push(y);
          }
        });
        out.push({
          type: `${x}Pool`,
          title,
          arr: poolList[x].reverse()
        });
      });
      this.setState({
        poolList: out
      });
    });

    this.state = {
      poolList: []
    };
  }

  componentDidMount() {
    this.handlePoolList();
  }

  render() {
    const list = this.state.poolList.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBarMenu, {
      key: x.type,
      type: x.type,
      title: x.title,
      data: x.arr,
      poolType: this.props.poolType,
      poolName: this.props.poolName,
      poolCode: this.props.poolCode,
      theme: this.props.theme
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `sidebar-pick ${this.props.theme}`
    }, list);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SideBarPick);

/***/ }),

/***/ "./src/scripts/components/Template.jsx":
/*!*********************************************!*\
  !*** ./src/scripts/components/Template.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopBar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar.jsx */ "./src/scripts/components/TopBar.jsx");
/* harmony import */ var _MainTemplate_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainTemplate.jsx */ "./src/scripts/components/MainTemplate.jsx");
/* harmony import */ var _Footer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.jsx */ "./src/scripts/components/Footer.jsx");





class Template extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TopBar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      language: this.props.language,
      theme: this.props.theme,
      toDarkTheme: this.props.toDarkTheme,
      toLightTheme: this.props.toLightTheme,
      toZH_CN: this.props.toZH_CN,
      toEN_US: this.props.toEN_US,
      toJA_JP: this.props.toJA_JP
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainTemplate_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      theme: this.props.theme
    }, this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      language: this.props.language,
      theme: this.props.theme
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Template);

/***/ }),

/***/ "./src/scripts/components/TopBar.jsx":
/*!*******************************************!*\
  !*** ./src/scripts/components/TopBar.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _basic_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic.jsx */ "./src/scripts/components/basic.jsx");
/* harmony import */ var _sass_modules_topbar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sass/modules/topbar.scss */ "./src/sass/modules/topbar.scss");
/* harmony import */ var _sass_modules_topbar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sass_modules_topbar_scss__WEBPACK_IMPORTED_MODULE_3__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Logo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basic_jsx__WEBPACK_IMPORTED_MODULE_2__["ImgA"], {
      className: "logo",
      tag: "logo",
      input: this.props.content
    });
  }

}

class TopBarContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.tag + "-container",
      onMouseOver: this.props.onMouseOver,
      onMouseLeave: this.props.onMouseLeave
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.tag + "-contents"
    }, this.props.content.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basic_jsx__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
      listInfo: this.props.content.listInfo
    }));
  }

}

class Nav extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const tmp = this.props.contents.slice();
    const listItem = tmp.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBarContainer, {
      tag: this.props.tag,
      key: x.key,
      content: x,
      onMouseOver: () => this.props.onMouseOver(x.key, "nav"),
      onMouseLeave: () => this.props.onMouseLeave(x.key, "nav")
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      className: "nav"
    }, listItem);
  }

}

class Search extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", event => {
      this.setState({
        value: event.target.value
      });
    });

    _defineProperty(this, "handleSubmit", event => {
      const data = {
        params: {
          method: "search",
          value: this.state.value
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/search", data).then(res => {
        window.open(res.data, "_blank");
      });
      event.preventDefault();
    });

    _defineProperty(this, "handleClean", () => {
      this.setState({
        value: ""
      });
    });

    this.state = {
      value: " "
    };
  }

  render() {
    let input;

    if (this.props.contents.input.display) {
      input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "search-input",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        placeholder: "  => search",
        value: this.state.value,
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "reset",
        className: "search-cleaner",
        onClick: this.handleClean
      }, " x   "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "search-submit",
        type: "submit"
      }, "go"));
    } else {
      input = null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "search"
    }, input, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "search-icon",
      onMouseOver: () => this.props.onMouseOver(null, this.props.tag),
      onMouseLeave: () => this.props.onMouseLeave(null, this.props.tag),
      onClick: () => this.props.onClick()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "100%",
      height: "100%",
      viewBox: "0 0 50 50"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: " M 21 3 C 11 3 4 10 4 20 C 4 30 11.5 37 21 37 C 25 37 27.5 35 30 35 L 42.5 46.5 L 46.5 42.5 L 34.5 30 C 36 27 38 24 38 20 C 38 10.5 30 3 21 3 Z M 21 7 C 28 7 34 13 34 20 C 34 27 28 33 21 33 C 14 33 8 27 8 20 C 8 12.5 13.5 7 21 7 Z M 21 7 ",
      fill: this.props.contents.button.color
    }))));
  }

}

class ChangeTheme extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.tag + "-container",
      onMouseOver: this.props.onMouseOver,
      onMouseLeave: this.props.onMouseLeave
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.tag + "-contents"
    }, this.props.content.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basic_jsx__WEBPACK_IMPORTED_MODULE_2__["ChangeAttrDropdown"], {
      listInfo: this.props.content.listInfo
    }));
  }

}

class Language extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.tag + "-container",
      onMouseOver: this.props.onMouseOver,
      onMouseLeave: this.props.onMouseLeave
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.tag + "-contents"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: "language-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: " M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z",
      fill: this.props.content.color
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_basic_jsx__WEBPACK_IMPORTED_MODULE_2__["ChangeAttrDropdown"], {
      listInfo: this.props.content.listInfo
    }));
  }

}

class Github extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.tag + "-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: this.props.tag + "-contents",
      href: this.props.content.href,
      target: "_blank"
    }, " ", this.props.content.name, " "));
  }

}

class Options extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "options"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChangeTheme, {
      tag: this.props.tag,
      content: this.props.contents[0],
      onMouseOver: () => this.props.onMouseOver(0, "opt"),
      onMouseLeave: () => this.props.onMouseLeave(0, "opt")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Language, {
      tag: "language",
      content: this.props.contents[1],
      onMouseOver: () => this.props.onMouseOver(1, "opt"),
      onMouseLeave: () => this.props.onMouseLeave(1, "opt")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Github, {
      tag: this.props.tag,
      content: this.props.contents[2]
    }));
  }

}

class TopBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleHover", (x, type) => {
      let tmp;

      if (this.props.language === "zh-cn") {
        tmp = this.state.zh_cn;

        if (type === "nav") {
          tmp.nav[x].listInfo.display = true;

          if (tmp.nav[x].hasOwnProperty("color")) {
            tmp.nav[x].color = "#f08080";
          }

          this.setState({
            zh_cn: tmp
          });
        }

        if (type === "opt") {
          tmp.opt[x].listInfo.display = true;

          if (tmp.opt[x].hasOwnProperty("color")) {
            tmp.opt[x].color = "#f08080";
          }

          this.setState({
            zh_cn: tmp
          });
        }

        if (type === "srh") {
          if (tmp.srh.button.hasOwnProperty("color")) {
            tmp.srh.button.color = "#f08080";
          }

          this.setState({
            zh_cn: tmp
          });
        }
      } else if (this.props.language === "ja-jp") {
        tmp = this.state.ja_jp;

        if (type === "nav") {
          tmp.nav[x].listInfo.display = true;

          if (tmp.nav[x].hasOwnProperty("color")) {
            tmp.nav[x].color = "#f08080";
          }

          this.setState({
            ja_jp: tmp
          });
        }

        if (type === "opt") {
          tmp.opt[x].listInfo.display = true;

          if (tmp.opt[x].hasOwnProperty("color")) {
            tmp.opt[x].color = "#f08080";
          }

          this.setState({
            ja_jp: tmp
          });
        }

        if (type === "srh") {
          if (tmp.srh.button.hasOwnProperty("color")) {
            tmp.srh.button.color = "#f08080";
          }

          this.setState({
            ja_jp: tmp
          });
        }
      } else if (this.props.language === "en-us") {
        tmp = this.state.en_us;

        if (type === "nav") {
          tmp.nav[x].listInfo.display = true;

          if (tmp.nav[x].hasOwnProperty("color")) {
            tmp.nav[x].color = "#f08080";
          }

          this.setState({
            en_us: tmp
          });
        }

        if (type === "opt") {
          tmp.opt[x].listInfo.display = true;

          if (tmp.opt[x].hasOwnProperty("color")) {
            tmp.opt[x].color = "#f08080";
          }

          this.setState({
            en_us: tmp
          });
        }

        if (type === "srh") {
          if (tmp.srh.button.hasOwnProperty("color")) {
            tmp.srh.button.color = "#f08080";
          }

          this.setState({
            en_us: tmp
          });
        }
      }
    });

    _defineProperty(this, "handleLeave", (x, type) => {
      let tmp;

      if (this.props.language === "zh-cn") {
        tmp = this.state.zh_cn;

        if (type === "nav") {
          tmp.nav[x].listInfo.display = false;

          if (tmp.nav[x].hasOwnProperty("color")) {
            tmp.nav[x].color = "#fff";
          }

          this.setState({
            zh_cn: tmp
          });
        }

        if (type === "opt") {
          tmp.opt[x].listInfo.display = false;

          if (tmp.opt[x].hasOwnProperty("color")) {
            tmp.opt[x].color = "#fff";
          }

          this.setState({
            zh_cn: tmp
          });
        }

        if (type === "srh") {
          if (tmp.srh.button.hasOwnProperty("color")) {
            tmp.srh.button.color = "#fff";
          }

          this.setState({
            zh_cn: tmp
          });
        }
      } else if (this.props.language === "ja-jp") {
        tmp = this.state.ja_jp;

        if (type === "nav") {
          tmp.nav[x].listInfo.display = false;

          if (tmp.nav[x].hasOwnProperty("color")) {
            tmp.nav[x].color = "#fff";
          }

          this.setState({
            ja_jp: tmp
          });
        }

        if (type === "opt") {
          tmp.opt[x].listInfo.display = false;

          if (tmp.opt[x].hasOwnProperty("color")) {
            tmp.opt[x].color = "#fff";
          }

          this.setState({
            ja_jp: tmp
          });
        }

        if (type === "srh") {
          if (tmp.srh.button.hasOwnProperty("color")) {
            tmp.srh.button.color = "#fff";
          }

          this.setState({
            ja_jp: tmp
          });
        }
      } else if (this.props.language === "en-us") {
        tmp = this.state.en_us;

        if (type === "nav") {
          tmp.nav[x].listInfo.display = false;

          if (tmp.nav[x].hasOwnProperty("color")) {
            tmp.nav[x].color = "#fff";
          }

          this.setState({
            en_us: tmp
          });
        }

        if (type === "opt") {
          tmp.opt[x].listInfo.display = false;

          if (tmp.opt[x].hasOwnProperty("color")) {
            tmp.opt[x].color = "#fff";
          }

          this.setState({
            en_us: tmp
          });
        }

        if (type === "srh") {
          if (tmp.srh.button.hasOwnProperty("color")) {
            tmp.srh.button.color = "#fff";
          }

          this.setState({
            en_us: tmp
          });
        }
      }
    });

    _defineProperty(this, "showSearchBar", () => {
      let tmp;

      if (this.props.language === "zh-cn") {
        tmp = this.state.zh_cn;

        if (tmp.hasOwnProperty("srh")) {
          if (tmp.srh.hasOwnProperty("input") && tmp.srh.hasOwnProperty("button")) {
            tmp.srh.input.display = !tmp.srh.input.display;
            this.setState({
              zh_cn: tmp
            });
          }
        }
      } else if (this.props.language === "ja-jp") {
        tmp = this.state.ja_jp;

        if (tmp.hasOwnProperty("srh")) {
          if (tmp.srh.hasOwnProperty("input") && tmp.srh.hasOwnProperty("button")) {
            tmp.srh.input.display = !tmp.srh.input.display;
            this.setState({
              ja_jp: tmp
            });
          }
        }
      } else if (this.props.language === "en-us") {
        tmp = this.state.en_us;

        if (tmp.hasOwnProperty("srh")) {
          if (tmp.srh.hasOwnProperty("input") && tmp.srh.hasOwnProperty("button")) {
            tmp.srh.input.display = !tmp.srh.input.display;
            this.setState({
              en_us: tmp
            });
          }
        }
      }
    });

    this.state = {
      zh_cn: {
        language: "zh-cn",
        logo: {
          key: 0,
          tag: "logo",
          href: "/",
          img: "../../images/logo.jpg",
          name: "ArkMelon"
        },
        nav: [{
          key: 0,
          name: "游戏数据",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "干员",
              href: "/operators"
            }, {
              key: 1,
              title: "敌人",
              href: "/enemies"
            }, {
              key: 2,
              title: "服装",
              href: "/clothes"
            }, {
              key: 3,
              title: "地图",
              href: "/maps"
            }, {
              key: 4,
              title: "家具",
              href: "/themes"
            }, {
              key: 5,
              title: "活动",
              href: "/events"
            }, {
              key: 6,
              title: "卡池",
              href: "/pools"
            }, {
              key: 7,
              title: "道具",
              href: "/items"
            }]
          }
        }, {
          key: 1,
          name: "材料相关",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "干员升级",
              href: "/levelUp"
            }, {
              key: 1,
              title: "刷图规划",
              href: "/planner"
            }, {
              key: 2,
              title: "合成计算",
              href: "/conversion"
            }]
          }
        }, {
          key: 2,
          name: "寻访模拟",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "常驻卡池",
              href: "/regularPool"
            }, {
              key: 1,
              title: "限定卡池",
              href: "/limitPool"
            }, {
              key: 2,
              title: "活动卡池",
              href: "/eventPool"
            }]
          }
        }],
        srh: {
          input: {
            display: false
          },
          button: {
            color: "#fff"
          }
        },
        opt: [{
          key: 0,
          name: "主题",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "浅色",
              func: this.props.toLightTheme
            }, {
              key: 1,
              title: "深色",
              func: this.props.toDarkTheme
            }]
          }
        }, {
          key: 1,
          name: "多语言",
          color: "#ffffff",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "中文",
              func: this.props.toZH_CN
            }, {
              key: 1,
              title: "English",
              func: this.props.toEN_US
            }, {
              key: 2,
              title: "日本語",
              func: this.props.toJA_JP
            }]
          }
        }, {
          key: 2,
          name: "Github",
          href: "https://github.com/killbe5419/ArkMelon",
          listInfo: {}
        }]
      },
      ja_jp: {
        language: "ja-jp",
        logo: {
          key: 0,
          tag: "logo",
          href: "/",
          img: "../../images/logo.jpg",
          name: "ArkMelon"
        },
        nav: [{
          key: 0,
          name: "ゲームデータ",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "オペレーター",
              href: "/operators"
            }, {
              key: 1,
              title: "敵",
              href: "/enemies"
            }, {
              key: 2,
              title: "服装",
              href: "/clothes"
            }, {
              key: 3,
              title: "地図",
              href: "/maps"
            }, {
              key: 4,
              title: "家具",
              href: "/themes"
            }, {
              key: 5,
              title: "イベント",
              href: "/events"
            }, {
              key: 6,
              title: "スカウト",
              href: "/pools"
            }, {
              key: 7,
              title: "アイテム",
              href: "/items"
            }]
          }
        }, {
          key: 1,
          name: "素材関連",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "オペレーター関連",
              href: "/levelUp"
            }, {
              key: 1,
              title: "地図関連",
              href: "/planner"
            }, {
              key: 2,
              title: "合成計算",
              href: "/conversion"
            }]
          }
        }, {
          key: 2,
          name: "ガチャシミュ",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "常設",
              href: "/regularPool"
            }, {
              key: 1,
              title: "限定",
              href: "/limitPool"
            }, {
              key: 2,
              title: "イベント",
              href: "/eventPool"
            }]
          }
        }],
        srh: {
          input: {
            display: false
          },
          button: {
            color: "#fff"
          }
        },
        opt: [{
          key: 0,
          name: "テーマ",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "Light",
              func: this.props.toLightTheme
            }, {
              key: 1,
              title: "Dark",
              func: this.props.toDarkTheme
            }]
          }
        }, {
          key: 1,
          name: "多语言",
          color: "#ffffff",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "中文",
              func: this.props.toZH_CN
            }, {
              key: 1,
              title: "English",
              func: this.props.toEN_US
            }, {
              key: 2,
              title: "日本語",
              func: this.props.toJA_JP
            }]
          }
        }, {
          key: 2,
          name: "Github",
          href: "https://github.com/killbe5419/ArkMelon",
          listInfo: {}
        }]
      },
      en_us: {
        language: "en-us",
        logo: {
          key: 0,
          tag: "logo",
          href: "/",
          img: "../../images/logo.jpg",
          name: "ArkMelon"
        },
        nav: [{
          key: 0,
          name: "Game Data",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "Operators",
              href: "/operators"
            }, {
              key: 1,
              title: "Enemies",
              href: "/enemies"
            }, {
              key: 2,
              title: "Clothes",
              href: "/clothes"
            }, {
              key: 3,
              title: "Stages",
              href: "/maps"
            }, {
              key: 4,
              title: "Themes",
              href: "/themes"
            }, {
              key: 5,
              title: "Events",
              href: "/events"
            }, {
              key: 6,
              title: "Scouts",
              href: "/pools"
            }, {
              key: 7,
              title: "Items",
              href: "/items"
            }]
          }
        }, {
          key: 1,
          name: "Materials",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "Operators Data",
              href: "/levelUp"
            }, {
              key: 1,
              title: "Stages Data",
              href: "/planner"
            }, {
              key: 2,
              title: "Conversion",
              href: "/conversion"
            }]
          }
        }, {
          key: 2,
          name: "Scout SIMU",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "Regular Scout",
              href: "/en-us/regularPool"
            }, {
              key: 1,
              title: "Limit",
              href: "/en-us/limitPool"
            }, {
              key: 2,
              title: "Event",
              href: "/en-us/eventPool"
            }]
          }
        }],
        srh: {
          input: {
            display: false
          },
          button: {
            color: "#fff"
          }
        },
        opt: [{
          key: 0,
          name: "Theme",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "Light",
              func: this.props.toLightTheme
            }, {
              key: 1,
              title: "Dark",
              func: this.props.toDarkTheme
            }]
          }
        }, {
          key: 1,
          name: "多语言",
          color: "#ffffff",
          listInfo: {
            display: false,
            data: [{
              key: 0,
              title: "中文",
              func: this.props.toZH_CN
            }, {
              key: 1,
              title: "English",
              func: this.props.toEN_US
            }, {
              key: 2,
              title: "日本語",
              func: this.props.toJA_JP
            }]
          }
        }, {
          key: 2,
          name: "Github",
          href: "https://github.com/killbe5419/ArkMelon",
          listInfo: {}
        }]
      }
    };
  }

  render() {
    let ctx;

    if (this.props.language === "zh-cn") {
      ctx = this.state.zh_cn;
    } else if (this.props.language === "ja-jp") {
      ctx = this.state.ja_jp;
    } else if (this.props.language === "en-us") {
      ctx = this.state.en_us;
    } else {
      ctx = this.state.zh_cn;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `header ${this.props.theme}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "top-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
      content: ctx.logo
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
      tag: "nav",
      contents: ctx.nav,
      onMouseOver: this.handleHover,
      onMouseLeave: this.handleLeave
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, {
      tag: "srh",
      contents: ctx.srh,
      onMouseOver: this.handleHover,
      onMouseLeave: this.handleLeave,
      onClick: this.showSearchBar
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Options, {
      tag: "opt",
      contents: ctx.opt,
      onMouseOver: this.handleHover,
      onMouseLeave: this.handleLeave
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./src/scripts/components/basic.jsx":
/*!******************************************!*\
  !*** ./src/scripts/components/basic.jsx ***!
  \******************************************/
/*! exports provided: ImgA, DropdownMenu, ChangeAttrDropdown, Title, MainContents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgA", function() { return ImgA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeAttrDropdown", function() { return ChangeAttrDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContents", function() { return MainContents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class ImgA extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const span = this.props.input.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.input.name) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: this.props.className,
      target: "_blank",
      href: this.props.input.href
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: this.props.tag + this.props.input.key,
      src: this.props.input.img
    }), span);
  }

}

class DropdownMenu extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const tmp = this.props.listInfo.data;
    const listItems = tmp.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: x.key.toString(),
      href: x.href
    }, x.title));

    if (this.props.listInfo.display) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown"
      }, listItems);
    } else {
      return null;
    }
  }

}

class ChangeAttrDropdown extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const tmp = this.props.listInfo.data;
    const listItems = tmp.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: x.key.toString(),
      onClick: x.func
    }, x.title));

    if (this.props.listInfo.display) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown"
      }, listItems);
    } else {
      return null;
    }
  }

}

class ContentsContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let listItem;

    if (this.props.content.data && Array.isArray(this.props.content.data)) {
      listItem = this.props.content.data.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImgA, {
        input: x,
        tag: this.props.content.tag,
        key: x.key
      }));
    } else {
      listItem = null;
    }

    if (listItem !== null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "new-contents-v"
      }, listItem);
    } else {
      return null;
    }
  }

}

class Title extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.content.tag
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: this.props.content.tag + "-name"
    }, " ", this.props.content.name, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: this.props.content.tag + "-description"
    }, " ", this.props.content.description, " ")));
  }

}

class MainContent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "news-containers"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " ", this.props.content.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentsContainer, {
      content: this.props.content
    }));
  }

}

class MainContents extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let listItem;

    if (this.props.contents && Array.isArray(this.props.contents)) {
      listItem = this.props.contents.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainContent, {
        content: x,
        key: x.key
      }));
    } else {
      listItem = null;
    }

    if (listItem !== null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-contents"
      }, listItem);
    } else {
      return null;
    }
  }

}



/***/ }),

/***/ "./src/scripts/components/icons/calcIcon.jsx":
/*!***************************************************!*\
  !*** ./src/scripts/components/icons/calcIcon.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_modules_icons_calcIcon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sass/modules/icons/calcIcon.scss */ "./src/sass/modules/icons/calcIcon.scss");
/* harmony import */ var _sass_modules_icons_calcIcon_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_modules_icons_calcIcon_scss__WEBPACK_IMPORTED_MODULE_1__);



class CalcIcon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let list = Array(4);

    for (let i = 0; i < list.length; i++) {
      list[i] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        className: `calc-icon-cube-${i + 1}`
      }, " ");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `calc-icon`
    }, list));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CalcIcon);

/***/ }),

/***/ "./src/scripts/components/icons/loadingIcon.jsx":
/*!******************************************************!*\
  !*** ./src/scripts/components/icons/loadingIcon.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_modules_icons_loadingIcon_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../sass/modules/icons/loadingIcon.scss */ "./src/sass/modules/icons/loadingIcon.scss");
/* harmony import */ var _sass_modules_icons_loadingIcon_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_modules_icons_loadingIcon_scss__WEBPACK_IMPORTED_MODULE_1__);



class LoadingIcon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let list = Array(6);

    for (let i = 0; i < list.length; i++) {
      list[i] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        className: `loading-icon-cube-${i + 1}`
      }, " ");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `loading-icon`
    }, list));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoadingIcon);

/***/ }),

/***/ "./src/scripts/pages/404.jsx":
/*!***********************************!*\
  !*** ./src/scripts/pages/404.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_basic_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/basic.jsx */ "./src/scripts/components/basic.jsx");
/* harmony import */ var _sass_pages_404_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sass/pages/404.scss */ "./src/sass/pages/404.scss");
/* harmony import */ var _sass_pages_404_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_404_scss__WEBPACK_IMPORTED_MODULE_2__);




class _404 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        tag: "title",
        name: "Oops! There's something wrong happened!",
        description: "we can't found what you want."
      }
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_jsx__WEBPACK_IMPORTED_MODULE_1__["Title"], {
      className: "message",
      content: this.state.title
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (_404);

/***/ }),

/***/ "./src/scripts/pages/index.jsx":
/*!*************************************!*\
  !*** ./src/scripts/pages/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_basic_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/basic.jsx */ "./src/scripts/components/basic.jsx");
/* harmony import */ var _sass_pages_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sass/pages/index.scss */ "./src/sass/pages/index.scss");
/* harmony import */ var _sass_pages_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Template_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Template.jsx */ "./src/scripts/components/Template.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "checkLanguage", () => {
      if (this.props.language === "zh-cn") {
        return this.state.zh_cn;
      } else if (this.props.language === "ja-jp") {
        return this.state.ja_jp;
      } else if (this.props.language === "en-us") {
        return this.state.en_us;
      } else {
        return this.state.zh_cn;
      }
    });

    this.state = {
      zh_cn: {
        title: {
          tag: "title",
          name: "ArkMelon",
          description: "用于快速查看明日方舟游戏数据的资料库"
        },
        contents: [{
          key: 0,
          tag: "event",
          name: "最新活动",
          data: [{
            key: 0,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/event0.jpg"
          }, {
            key: 1,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/event1.jpg"
          }, {
            key: 2,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/event2.jpg"
          }, {
            key: 3,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/event3.jpg"
          }, {
            key: 4,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/event4.jpg"
          }]
        }, {
          key: 1,
          tag: "pool",
          name: "新增卡池",
          data: [{
            key: 0,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/pool0.jpg"
          }]
        }, {
          key: 2,
          tag: "operator",
          name: "新增干员",
          data: [{
            key: 0,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/operator0.png"
          }]
        }, {
          key: 3,
          tag: "cloth",
          name: "新增服装",
          data: [{
            key: 0,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/cloth0.jpg"
          }, {
            key: 1,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/cloth1.jpg"
          }, {
            key: 2,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/cloth2.jpg"
          }, {
            key: 3,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/cloth3.jpg"
          }]
        }, {
          key: 4,
          tag: "theme",
          name: "新增家具",
          data: [{
            key: 0,
            href: "https://ak.hypergryph.com/news/2020087452.html",
            img: "../images/index/zh-cn/theme0.jpg"
          }]
        }]
      },
      ja_jp: {
        title: {
          tag: "title",
          name: "ArkMelon",
          description: "アークナイツの情報を便利に調べるためのデータベース"
        },
        contents: [{
          key: 0,
          tag: "event",
          name: "最新イベント",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/ja-jp/event1.jpg"
          }, {
            key: 1,
            href: "/",
            img: "../images/index/ja-jp/event2.jpg"
          }, {
            key: 2,
            href: "/",
            img: "../images/index/ja-jp/event3.jpg"
          }]
        }, {
          key: 1,
          tag: "pool",
          name: "最新スカウト",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/ja-jp/pool1.png"
          }]
        }, {
          key: 2,
          tag: "operator",
          name: "最新オペレーター",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/ja-jp/operator1.png"
          }]
        }, {
          key: 3,
          tag: "cloth",
          name: "最新服装",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/ja-jp/cloth1.jpg"
          }, {
            key: 1,
            href: "/",
            img: "../images/index/ja-jp/cloth2.jpg"
          }]
        }, {
          key: 4,
          tag: "theme",
          name: "最新家具",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/ja-jp/theme1.jpg"
          }]
        }, {
          key: 5,
          tag: "stage",
          name: "最新ステージ",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/ja-jp/stage1.jpg"
          }, {
            key: 1,
            href: "/",
            img: "../images/index/ja-jp/stage2.jpg"
          }]
        }]
      },
      en_us: {
        title: {
          tag: "title",
          name: "ArkMelon",
          description: "A Database To Search Data Of Arknights Efficiently"
        },
        contents: [{
          key: 0,
          tag: "event",
          name: "Newest Events",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/en-us/nothing.jpg"
          }]
        }, {
          key: 1,
          tag: "pool",
          name: "Newest Scouts",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/en-us/nothing.jpg"
          }]
        }, {
          key: 2,
          tag: "operator",
          name: "Newest Operators",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/en-us/nothing.jpg"
          }]
        }, {
          key: 3,
          tag: "cloth",
          name: "Newest Clothes",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/en-us/nothing.jpg"
          }]
        }, {
          key: 4,
          tag: "theme",
          name: "Newest Themes",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/en-us/nothing.jpg"
          }]
        }, {
          key: 5,
          tag: "stage",
          name: "Newest Stages",
          data: [{
            key: 0,
            href: "/",
            img: "../images/index/en-us/nothing.jpg"
          }]
        }]
      }
    };
  }

  render() {
    let language = this.checkLanguage();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      language: this.props.language,
      theme: this.props.theme,
      toDarkTheme: this.props.toDarkTheme,
      toLightTheme: this.props.toLightTheme,
      toZH_CN: this.props.toZH_CN,
      toEN_US: this.props.toEN_US,
      toJA_JP: this.props.toJA_JP
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `main-container ${this.props.theme}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_jsx__WEBPACK_IMPORTED_MODULE_1__["Title"], {
      className: "main-top",
      content: language.title,
      theme: this.props.theme
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_jsx__WEBPACK_IMPORTED_MODULE_1__["MainContents"], {
      contents: language.contents,
      theme: this.props.theme
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/scripts/pages/pickcard.jsx":
/*!****************************************!*\
  !*** ./src/scripts/pages/pickcard.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Template.jsx */ "./src/scripts/components/Template.jsx");
/* harmony import */ var _components_SideBarPick_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SideBarPick.jsx */ "./src/scripts/components/SideBarPick.jsx");
/* harmony import */ var _components_icons_calcIcon_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/icons/calcIcon.jsx */ "./src/scripts/components/icons/calcIcon.jsx");
/* harmony import */ var _sass_pages_pickcard_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sass/pages/pickcard.scss */ "./src/sass/pages/pickcard.scss");
/* harmony import */ var _sass_pages_pickcard_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_pickcard_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tools_gp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tools/gp */ "./src/scripts/tools/gp.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class PoolImg extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pool-img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "",
      src: `../../../images/pools/${this.props.poolType}/${this.props.poolName}.jpg`
    }));
  }

}

class PickupContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.hasOwnProperty("name")) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pickup-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pickup-img-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img",
        alt: " ",
        src: `../../../images/character/icon/${this.props.name}.png`
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pickup-name-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: this.props.rare
      }, this.props.name)));
    } else {
      return null;
    }
  }

}

class PickupInfoContent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.data.length !== 0) {
      const list = this.props.data.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickupContainer, {
        key: x,
        name: x,
        rare: this.props.rare
      }));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pickup-showcard"
      }, list);
    } else {
      return null;
    }
  }

}

class PickupInfoContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.data.length !== 0) {
      let list = [];

      for (let i = 0; i < this.props.data.length; i += 2) {
        list.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickupInfoContent, {
          key: i / 2,
          data: this.props.data[i + 1] !== undefined ? [this.props.data[i], this.props.data[i + 1]] : [this.props.data[i]],
          rare: this.props.rare
        }));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pickup-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: this.props.rare
      }, this.props.star), list, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "(\u5360", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: this.props.rare
      }, this.props.rare, "\u2605"), "\u51FA\u7387\u7684 ", this.props.rate, "%)")));
    } else {
      return null;
    }
  }

}

class PickUpInfo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      star: {
        six: "★★★★★★",
        five: "★★★★★",
        four: "★★★★",
        three: "★★★",
        two: "★★",
        one: "★"
      }
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pickup-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "pickup-description"
    }, "\u3010", this.props.poolName, "\u3011\u5BFB\u8BBF\u4E2D\u4EE5\u4E0B\u5E72\u5458\u83B7\u5F97\u6982\u7387\u63D0\u5347"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickupInfoContainer, {
      data: this.props.data.six,
      star: this.state.star.six,
      rare: "6",
      rate: this.props.data.type === "limit" ? 75 : 50
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickupInfoContainer, {
      data: this.props.data.five,
      star: this.state.star.five,
      rare: "5",
      rate: "50"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickupInfoContainer, {
      data: this.props.data.four,
      star: this.state.star.four,
      rare: "4",
      rate: "20"
    }));
  }

}

class PickTitle extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pick-title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PoolImg, {
      poolName: this.props.poolName,
      poolType: this.props.poolType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickUpInfo, {
      poolName: this.props.poolName,
      poolType: this.props.poolType,
      data: this.props.info.pickup
    }));
  }

}

class Buttons extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const buttonList = this.props.buttons.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: x.key,
      className: "menu-button",
      onClick: x.func
    }, x.name));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buttons"
    }, buttonList);
  }

}

class PickInfo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.info.method === "calculation") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pick-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u53D6\u6B21\u6570: ", this.props.info.pickNum), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u53D6\u76EE\u6807\u5E72\u5458\u7684\u6B21\u6570: ", this.props.info.count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u5230\u76EE\u6807\u5E72\u5458\u7684\u6982\u7387: ", `${(this.props.info.targetP * 100).toFixed(2)}%`, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u82B1\u8D39\u7684\u5408\u6210\u7389: ", this.props.info.coin), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u82B1\u8D39\u7684\u81F3\u7EAF\u6E90\u77F3: ", Math.round(this.props.info.coin / 180))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pick-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u5230", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "6"
      }, "6\u2605"), "\u4E2A\u6570: ", this.props.info.six.num, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u5230", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "5"
      }, "5\u2605"), "\u4E2A\u6570: ", this.props.info.five.num, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u5230", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "4"
      }, "4\u2605"), "\u4E2A\u6570: ", this.props.info.four.num, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u5230", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "3"
      }, "3\u2605"), "\u4E2A\u6570: ", this.props.info.three.num, " ")));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pick-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u53D6\u6B21\u6570:", this.props.info.pickNum), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6CA1\u6709\u62BD\u52306\u2605\u7684\u6B21\u6570: ", this.props.info.g), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u52306\u2605\u7684\u6982\u7387:  ", `${Object(_tools_gp__WEBPACK_IMPORTED_MODULE_6__["default"])(Number(this.props.info.g)) + 2} %`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u82B1\u8D39\u7684\u5408\u6210\u7389: ", this.props.info.coin), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u82B1\u8D39\u7684\u81F3\u7EAF\u6E90\u77F3: ", Math.round(this.props.info.coin / 180))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pick-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u5230", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "6"
      }, "6\u2605"), "\u4E2A\u6570: ", this.props.info.six.num, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u5230", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "5"
      }, "5\u2605"), "\u4E2A\u6570: ", this.props.info.five.num, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u5230", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "4"
      }, "4\u2605"), "\u4E2A\u6570: ", this.props.info.four.num, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u62BD\u5230", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "3"
      }, "3\u2605"), "\u4E2A\u6570: ", this.props.info.three.num, " ")));
    }
  }

}

class PickMenu extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pick-menu"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Buttons, {
      buttons: this.props.info.buttons
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickInfo, {
      info: this.props.info
    }));
  }

}

class PickOneCase extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "case",
      key: this.props.data._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: this.props.data.rare
    }, " ", this.props.data.name, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pick-img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: `card img${this.props.data.rare}`,
      src: `../../../images/character/half/${this.props.data.name}.png`,
      alt: "card"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: `class-icon`,
      src: `../../../images/class/${this.props.data.class}.png`,
      alt: "class-icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: `rare-icon`,
      src: `../../../images/rare/${this.props.data.rare}.png`,
      alt: "rare-icon"
    })));
  }

}

class PickTenCase extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const list = this.props.data.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "case",
      key: x.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: x.rare
    }, x.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pick-img"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: `card img${x.rare}`,
      src: `../../../images/character/half/${x.name}.png`,
      alt: "card"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: `class-icon`,
      src: `../../../images/class/${x.class}.png`,
      alt: "class-icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: `rare-icon`,
      src: `../../../images/rare/${x.rare}.png`,
      alt: "rare-icon"
    }))));
    list.splice(5, 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      key: "br"
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pickTenCase"
    }, list);
  }

}

class Case extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.method === "pickOne") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickOneCase, {
        data: this.props.data
      });
    }

    if (this.props.method === "pickTen") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickTenCase, {
        data: this.props.data
      });
    }

    if (this.props.method === "calculation") {
      return null;
    }

    return null;
  }

}

class CalcWaiter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: ""
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.point === "...") {
        this.setState({
          point: ""
        });
      } else {
        this.setState({
          point: this.state.point + "."
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if (this.props.running) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wait-calc",
        style: {
          width: window.innerWidth,
          height: window.innerHeight
        },
        onWheel: e => e.preventDefault()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bkg-blur"
      }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icons_calcIcon_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "calc-icon-container"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "calc-description"
      }, `计算中,请稍候${this.state.point}`));
    } else {
      return null;
    }
  }

}

class Record extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.data.arr.length !== 0) {
      const list = this.props.data.arr.map(x => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: `img ${x.name === this.props.targetName ? "target" : ""}`,
        key: x.id,
        alt: " ",
        src: `../../../images/character/icon/${x.name}.png`
      }));

      for (let i = 0; i < list.length; i++) {
        if (i % 10 === 0) {
          list.splice(i, 0, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
            className: "br",
            key: "br" + i
          }));
        }
      }

      list.shift();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "record"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props.rare
      }, this.props.rare, "\u2605"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "pick-img-container"
      }, list));
    } else {
      return null;
    }
  }

}

class RecordContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.info.six.num !== 0 || this.props.info.five.num !== 0 || this.props.info.four.num !== 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "record-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Record, {
        data: this.props.info.six,
        targetName: this.props.info.targetName,
        rare: "6"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Record, {
        data: this.props.info.five,
        targetName: this.props.info.targetName,
        rare: "5"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Record, {
        data: this.props.info.four,
        targetName: this.props.info.targetName,
        rare: "4"
      }));
    } else {
      return null;
    }
  }

}

class Pick extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `pick ${this.props.theme}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickTitle, {
      poolName: this.props.poolName,
      poolType: this.props.poolType,
      info: this.props.info
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PickMenu, {
      poolName: this.props.poolName,
      poolType: this.props.poolType,
      info: this.props.info
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Case, {
      method: this.props.info.method,
      data: this.props.info.data
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecordContainer, {
      info: this.props.info
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CalcWaiter, {
      running: this.props.info.runningCalc
    }));
  }

}

class Main extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `main-pick ${this.props.theme}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SideBarPick_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: this.props.info.sidebar,
      poolType: this.props.poolType,
      poolName: this.props.poolName,
      poolCode: this.props.poolCode,
      poolList: this.props.poolList,
      theme: this.props.theme
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "blank"
    }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pick, {
      poolName: this.props.poolName,
      poolType: this.props.poolType,
      poolCode: this.props.poolCode,
      info: this.props.info,
      theme: this.props.theme
    }));
  }

}

class Pickcard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getPickup", () => {
      const data = {
        params: {
          type: "search",
          method: "getPickup",
          poolName: this.props.poolName
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/getPickup", data).then(res => {
        console.log(res.data);
        this.setState({
          pickup: res.data
        });
      });
    });

    _defineProperty(this, "showRecord", () => {
      const data = this.state.data;

      if (this.state.method === "pickOne") {
        if (data.rare === 6) {
          alert(`哇！抽到了6★干员: ${data.name}`);
          let arr = this.state.six.arr;
          const newObj = {
            id: this.state.pickNum,
            name: data.name
          };
          arr.push(newObj);
          this.setState({
            six: {
              num: arr.length,
              arr
            }
          });
        } else if (data.rare === 5) {
          let arr = this.state.five.arr;
          const newObj = {
            id: this.state.pickNum,
            name: data.name
          };
          arr.push(newObj);
          this.setState({
            five: {
              num: arr.length,
              arr
            }
          });
        } else if (data.rare === 4) {
          let arr = this.state.four.arr;
          const newObj = {
            id: this.state.pickNum,
            name: data.name
          };
          arr.push(newObj);
          this.setState({
            four: {
              num: arr.length,
              arr
            }
          });
        } else {
          let arr = this.state.three.arr;
          arr.push({
            id: this.state.pickNum,
            name: data.name
          });
          this.setState({
            three: {
              num: arr.length,
              arr
            }
          });
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data[i].rare === 6) {
            alert(`哇！抽到了6★干员: ${data[i].name}`);
            let arr = this.state.six.arr;
            const newObj = {
              id: this.state.pickNum + i,
              name: data[i].name
            };
            arr.push(newObj);
            this.setState({
              six: {
                num: arr.length,
                arr
              }
            });
          } else if (data[i].rare === 5) {
            let arr = this.state.five.arr;
            const newObj = {
              id: this.state.pickNum + i,
              name: data[i].name
            };
            arr.push(newObj);
            this.setState({
              five: {
                num: arr.length,
                arr
              }
            });
          } else if (data[i].rare === 4) {
            let arr = this.state.four.arr;
            const newObj = {
              id: this.state.pickNum + i,
              name: data[i].name
            };
            arr.push(newObj);
            this.setState({
              four: {
                num: arr.length,
                arr
              }
            });
          } else {
            let arr = this.state.three.arr;
            const newObj = {
              key: this.state.pickNum + i,
              name: data[i].name
            };
            arr.push(newObj);
            this.setState({
              three: {
                num: arr.length,
                arr
              }
            });
          }
        }
      }
    });

    _defineProperty(this, "pickOne", () => {
      const data = {
        params: {
          type: "pick",
          method: "pickOne",
          poolName: this.props.poolName,
          g: this.state.g
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/pickOne", data).then(res => {
        if (res.data === "refresh") {
          alert("服务器已重置，已自动刷新页面");
          location.reload();
          return;
        }

        console.log(res.data);
        this.setState({
          g: res.data.g,
          method: "pickOne",
          data: res.data,
          pickNum: this.state.pickNum + 1,
          coin: this.state.coin + 600
        });
        this.showRecord();
      });
    });

    _defineProperty(this, "pickTen", () => {
      const data = {
        params: {
          type: "pick",
          method: "pickTen",
          poolName: this.props.poolName,
          g: this.state.g
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/pickTen", data).then(res => {
        console.log(res.data);

        if (res.data === "refresh") {
          alert("服务器已重置，已自动刷新页面");
          location.reload();
          return;
        }

        this.setState({
          g: res.data.g,
          method: "pickTen",
          data: res.data.array,
          pickNum: this.state.pickNum + 10,
          coin: this.state.coin + 6000
        });
        this.showRecord();
      });
    });

    _defineProperty(this, "calc", () => {
      const input = {};
      input.target = prompt("请输入干员名称(存在于该卡池中): ");
      if (input.target === null) return;
      const data = {
        params: {
          type: "search",
          method: "searchName",
          poolName: this.props.poolName,
          name: input.target
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/searchName", data).then(res => {
        console.log(res.data);

        if (!res.data) {
          alert("请输入正确的干员名称！");
        } else {
          input.num = Number(prompt("请输入干员数量: "));
          console.log(input.num);

          if (Number.isNaN(input.num)) {
            alert("请输入正确的干员数量！");
          } else {
            if (input.num === 0) {
              alert("请输入正确的干员数量！");
            } else {
              this.clearRecord();
              this.setState({
                runningCalc: true
              });
              const data = {
                params: {
                  type: "calculation",
                  poolName: this.props.poolName,
                  target: input.target,
                  num: input.num
                }
              };
              axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/calc", data).then(res => {
                console.log(res.data);

                if (res.data === "refresh") {
                  alert("服务器已重置，已自动刷新页面");
                  location.reload();
                  return;
                }

                if (res.data.pickNum <= 1500) {
                  this.setState({
                    method: "calculation",
                    targetName: input.target,
                    targetNum: res.data.count,
                    data: res.data.array,
                    pickNum: res.data.pickNum,
                    targetP: res.data.percentage,
                    coin: res.data.pickNum * 600,
                    count: res.data.count,
                    six: res.data.six,
                    five: res.data.five,
                    four: res.data.four,
                    three: res.data.three
                  });
                } else {
                  alert(`由于抽取次数过多，仅显示数据结果`);
                  this.setState({
                    method: "calculation",
                    targetName: input.target,
                    targetNum: res.data.count,
                    data: res.data.array,
                    pickNum: res.data.pickNum,
                    targetP: res.data.percentage,
                    count: res.data.count,
                    coin: res.data.pickNum * 600,
                    six: {
                      num: res.data.six.num,
                      arr: []
                    },
                    five: {
                      num: res.data.five.num,
                      arr: []
                    },
                    four: {
                      num: res.data.four.num,
                      arr: []
                    },
                    three: {
                      num: res.data.three.num,
                      arr: []
                    }
                  });
                }

                if (res.data.overflow) alert(`已超过处理临界值 返回抽取${res.data.pickNum}次的结果`);
              });
            }
          }
        }
      });
    });

    _defineProperty(this, "clearRecord", () => {
      this.setState({
        coin: 0,
        //合成玉
        pickNum: 0,
        g: 0,
        six: {
          num: 0,
          arr: []
        },
        five: {
          num: 0,
          arr: []
        },
        four: {
          num: 0,
          arr: []
        },
        three: {
          num: 0,
          arr: []
        },
        method: "",
        data: {},
        targetName: "",
        targetNum: 0,
        targetP: 0
      });
    });

    this.state = {
      handlePoolList: false,
      sidebar: [],
      buttons: [{
        key: 0,
        name: "寻访一次",
        func: this.pickOne
      }, {
        key: 1,
        name: "寻访十次",
        func: this.pickTen
      }, {
        key: 2,
        name: "清空记录",
        func: this.clearRecord
      }, {
        key: 3,
        name: "寻访计算",
        func: this.calc
      }],
      pickup: {
        six: [],
        five: [],
        four: [],
        type: ""
      },
      coin: 0,
      //合成玉
      coinUrl: "../../../images/materials/coin.png",
      coinAlt: "orundum",
      pickNum: 0,
      count: 0,
      g: 0,
      six: {
        num: 0,
        arr: []
      },
      five: {
        num: 0,
        arr: []
      },
      four: {
        num: 0,
        arr: []
      },
      three: {
        num: 0,
        arr: []
      },
      method: "",
      runningCalc: false,
      data: {}
    };
  }

  componentDidMount() {
    this.getPickup();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.data !== prevState.data) {
      this.setState({
        runningCalc: false
      });
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      language: this.props.language,
      theme: this.props.theme,
      toDarkTheme: this.props.toDarkTheme,
      toLightTheme: this.props.toLightTheme,
      toZH_CN: this.props.toZH_CN,
      toEN_US: this.props.toEN_US,
      toJA_JP: this.props.toJA_JP
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
      poolName: this.props.poolName,
      poolType: this.props.poolType,
      poolCode: this.props.poolCode,
      poolList: this.props.poolList,
      info: this.state,
      theme: this.props.theme,
      pickOne: this.pickOne,
      pickTen: this.pickTen,
      calc: this.calc
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Pickcard);

/***/ }),

/***/ "./src/scripts/pages/showPool.jsx":
/*!****************************************!*\
  !*** ./src/scripts/pages/showPool.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_basic_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/basic.jsx */ "./src/scripts/components/basic.jsx");
/* harmony import */ var _sass_pages_pools_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sass/pages/pools.scss */ "./src/sass/pages/pools.scss");
/* harmony import */ var _sass_pages_pools_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_pools_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Template_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Template.jsx */ "./src/scripts/components/Template.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ShowPool extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "checkLanguage", () => {
      if (this.props.language === "zh-cn") {
        return this.state.zh_cn;
      } else if (this.props.language === "ja-jp") {
        return this.state.ja_jp;
      } else if (this.props.language === "en-us") {
        return this.state.en_us;
      } else {
        return this.state.zh_cn;
      }
    });

    _defineProperty(this, "handlePoolList", () => {
      const poolList = this.props.poolList[this.props.poolType.split("Pool")[0]].reverse();
      let arr = [];
      poolList.forEach(x => {
        arr.push({
          key: x.type + x.code,
          tag: "pool",
          name: `${x.name} [ ${x.date} ] `,
          data: [{
            key: 0,
            href: x.url,
            img: `../images/pools/${this.props.poolType}/${x.name}.jpg`
          }]
        });
      });
      this.setState({
        zh_cn: {
          contents: arr
        }
      });
    });

    this.state = {
      zh_cn: {},
      ja_jp: {},
      en_us: {}
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.poolList !== prevProps.poolList) {
      this.handlePoolList();
    }
  }

  render() {
    let language = this.checkLanguage();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      language: this.props.language,
      theme: this.props.theme,
      toDarkTheme: this.props.toDarkTheme,
      toLightTheme: this.props.toLightTheme,
      toZH_CN: this.props.toZH_CN,
      toEN_US: this.props.toEN_US,
      toJA_JP: this.props.toJA_JP
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `main-container ${this.props.theme}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_basic_jsx__WEBPACK_IMPORTED_MODULE_1__["MainContents"], {
      contents: language.contents,
      theme: this.props.theme
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ShowPool);

/***/ }),

/***/ "./src/scripts/pages/templatePage.jsx":
/*!********************************************!*\
  !*** ./src/scripts/pages/templatePage.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_pages_templatePage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sass/pages/templatePage.scss */ "./src/sass/pages/templatePage.scss");
/* harmony import */ var _sass_pages_templatePage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_templatePage_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Template_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Template.jsx */ "./src/scripts/components/Template.jsx");




class TemplatePage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      language: this.props.language,
      theme: this.props.theme,
      toDarkTheme: this.props.toDarkTheme,
      toLightTheme: this.props.toLightTheme,
      toZH_CN: this.props.toZH_CN,
      toEN_US: this.props.toEN_US,
      toJA_JP: this.props.toJA_JP
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TemplatePage);

/***/ }),

/***/ "./src/scripts/pages/test.jsx":
/*!************************************!*\
  !*** ./src/scripts/pages/test.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sass_pages_test_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sass/pages/test.scss */ "./src/sass/pages/test.scss");
/* harmony import */ var _sass_pages_test_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_pages_test_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_icons_loadingIcon_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/icons/loadingIcon.jsx */ "./src/scripts/components/icons/loadingIcon.jsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Icon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "showNum", () => {
      console.log(`num: ${this.props.num} cubeNum: ${this.props.cubeNum}`);
    });
  }

  render() {
    this.showNum();
    let list = Array(Number(this.props.cubeNum));

    for (let i = 0; i < list.length; i++) {
      list[i] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        className: `wait-cube-${this.props.num}-${i + 1}`
      }, " ");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `icon${this.props.num}-container`
    }, list);
  }

}

class Test extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "try", () => {
      const data = {
        params: {
          type: "search",
          method: "findAll"
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/findAll", data).then(res => {
        console.log(res.data);
      });
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
      num: "1",
      cubeNum: "4"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
      num: "2",
      cubeNum: "4"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_icons_loadingIcon_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "loading-icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "plus-icon"
    }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.try()
    }, "click!"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ }),

/***/ "./src/scripts/tools/checkLanguageCookie.js":
/*!**************************************************!*\
  !*** ./src/scripts/tools/checkLanguageCookie.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkLanguageCookie; });
function checkLanguageCookie () {
    if(document.cookie.length === 0) {
        document.cookie = "language=zh-cn;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "zh-cn";
    } else {
        const cookieArr = document.cookie.split(";");
        for(let i=0;i<cookieArr.length;i++) {
            if(cookieArr[i].split("=")[0].trim() === "language") {
                return cookieArr[i].split("=")[1];
            }
        }
        document.cookie = "language=zh-cn;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "zh-cn";
    }
}

/***/ }),

/***/ "./src/scripts/tools/checkThemeCookie.js":
/*!***********************************************!*\
  !*** ./src/scripts/tools/checkThemeCookie.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkThemeCookie; });
function checkThemeCookie() {
    if(document.cookie.length === 0) {
        document.cookie = "theme=dark-theme;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "dark-theme";
    } else {
        let cookieArr = document.cookie.split(";");
        for(let i=0;i<cookieArr.length;i++) {
            if(cookieArr[i].split("=")[0].trim() === "theme") {
                return cookieArr[i].split("=")[1];
            }
        }
        document.cookie = "theme=dark-theme;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "dark-theme";
    }
}

/***/ }),

/***/ "./src/scripts/tools/gp.js":
/*!*********************************!*\
  !*** ./src/scripts/tools/gp.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gp; });
function gp (g) {
    if(g > 50) {
        return (g - 50) * 2;
    } else {
        return 0;
    }
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map