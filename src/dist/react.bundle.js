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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n    /*light colors*/\n    --bar-background-color-light: #606087;\n    --main-background-color-light: \t#FFFFF0;\n    --bar-font-color-light: #FFFBCD;\n    --main-font-color-light: #9370DB;\n    --bar-hover-color-light: #E6E6FA;\n\n    /*dark colors*/\n    --bar-background-color-dark: #1f1f1f;\n    --main-background-color-dark: #2f2f2f;\n    --bar-font-color-dark: #ffffff;\n    --main-font-color-dark: #ffffff;\n    --bar-hover-color-dark: #696969;\n\n    /*theme colors*/\n    --special-color: #f08080;\n}\n\n* {\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n}\na {\n    text-decoration: none;\n    cursor: pointer;\n}\ninput {\n    outline: none;\n    background:none;\n    border:none;\n}\nbutton {\n    outline: none;\n    cursor: pointer;\n}\nli {\n    list-style:none;\n}\n\n\n\n.header {\n    position: fixed;\n    display: block;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 50px;\n    background-color: var(--bar-background-color-dark);\n}\n\n.header * {\n    color: var(--bar-font-color-dark);\n}\n\n.top-bar {\n    position: fixed;\n    display: flex;\n    padding-left: 20px;\n    padding-right: 20px;\n    margin-left: 40px;\n    margin-right: 40px;\n    height: 50px;\n    width: 90%;\n}\n\n.logo {\n    width: calc(100% / 6);\n    display: flex;\n    height: 100%;\n    text-decoration: none;\n    margin-right: 10px;\n}\n\n.logo img {\n    display: inline-block;\n    border-style: none;\n    margin: 10px 5px 10px 10px;\n    padding: 0;\n    border-radius: 8px;\n    height: 30px;\n    width: 30px;\n}\n\n.logo span {\n    text-align:center;\n    vertical-align: center;\n    font-weight: 700;\n    font-size: 20px;\n    margin: 15px 0 10px 5px;\n    overflow: no-display;\n    color: var(--special-color);\n}\n\n.nav {\n    display: flex;\n    height: 100%;\n    width: 30%;\n}\n\n.nav-container {\n    cursor: pointer;\n    display: flex;\n    flex-direction:column;\n    width: 100px;\n}\n\n.nav-contents {\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n}\n\n.nav-contents:hover {\n    color: var(--special-color);\n}\n\n.dropdown {\n    display: flex;\n    flex-direction:column;\n    width: 100%;\n    font-weight: 400;\n    background-color: transparent;\n}\n\n.dropdown a {\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    font-weight: 400;\n    text-align: center;\n    background-color: var(--bar-background-color-dark);\n}\n\n.dropdown a:hover {\n    background-color: var(--bar-hover-color-dark);\n    color: var(--special-color);\n}\n\n.search {\n    display: flex;\n    width: 40%;\n    height: 50px;\n    text-align: right;\n    justify-content: flex-end;\n    align-items: center;\n    margin-right: 40px;\n}\n\n.search-input {\n    width: 75%;\n}\n\n.search-input input{\n    width: 50%;\n    height: 26px;\n    background: #1f1f1f;\n    border: 2px solid #fff;\n    border-right: none;\n    color: #fff;\n    border-radius: 5px 0 0 5px;\n    font-size: 14px;\n    padding: 0;\n}\n\n.search-input button {\n    width: 30px;\n    height: 30px;\n    background: #1f1f1f;\n    border: 2px solid #fff;\n    border-left: none;\n    color: #fff;\n    border-radius: 0 5px 5px 0;\n    font-size: 14px;\n    padding: 0;\n}\n\n.search-icon {\n    float:right;\n    width: 30px;\n    height: 30px;\n    background-color: #1f1f1f;\n    border-radius: 4px;\n    border: none;\n    padding: 0;\n    margin-left: 20px;\n}\n\n\n\n.options {\n    display: flex;\n}\n\n.opt-container {\n    cursor: pointer;\n    display: flex;\n    flex-direction:column;\n    width: 100px;\n}\n\n.opt-contents {\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n}\n\n.opt-contents:hover {\n    color: var(--special-color);\n}\n\n.language-container {\n    cursor: pointer;\n    display: flex;\n    flex-direction:column;\n    width: 100px;\n}\n\n.language-contents {\n    cursor: pointer;\n    height: 50px;\n    width: 50%;\n    line-height: 50px;\n    margin: 0 auto;\n}\n\n.language-icon {\n    height: 100%;\n    width: 25px;\n    margin: 0 20% 0 20%;\n}\n\n\n\n/*********************************************************************/\n\n.main {\n    display: flex;\n    margin-top: 50px;\n    min-height: 1000px;\n    width: 100%;\n    background-color: var(--main-background-color-dark);\n}\n\n.main * {\n    color: var(--main-font-color-dark);\n}\n\n.main-container {\n    display: flex;\n    flex-direction:column;\n    width: 70%;\n    height: 100%;\n    margin: auto;\n\n}\n\n.main-top {\n    display: flex;\n    width: 100%;\n    height: 300px;\n}\n\n.title {\n    display: flex;\n    flex-direction:column;\n    margin: auto;\n    height: 100%;\n}\n\n.title-name {\n    font-size: 50px;\n    font-weight: 700;\n    color: #f08080;\n    margin: 40px 0 20px 0;\n}\n\n.title-description {\n    font-size: 20px;\n    font-weight: 500;\n}\n\n.main-contents {\n    display: flex;\n    flex-direction:column;\n    width: 100%;\n    min-height: 800px;\n}\n\n\n.main-contents div p {\n    border-bottom: currentColor 2px solid;\n    font-weight: 500;\n}\n\n.news-containers {\n    display: flex;\n    flex-direction:column;\n    margin-bottom: 30px;\n}\n\n.new-contents-v {\n    display: flex;\n    flex-direction:column;\n    width: 80%;\n}\n\n.new-contents-v img {\n    width: 100%;\n    margin: 20px 10% 20px 10%;\n}\n\n.new-contents-h {\n    display: flex;\n}\n\n.new-contents-h img {\n    width: 100px;\n    height: 100px;\n    margin: 0 20px 0 20px;\n}\n\n\n\n\n/*********************************************************************/\n\n.footer {\n    display: flex;\n    width: 100%;\n    min-height: 300px;\n    bottom: 0;\n    left: 0;\n    background-color: var(--bar-background-color-dark);\n}\n\n.footer * {\n    color: var(--bar-font-color-dark);\n}\n\n.footer-contents {\n    display: flex;\n    flex-direction:column;\n    width: 90%;\n    margin: 20px 5% 20px 5%;\n}\n\n.footer-top {\n    display: flex;\n}\n\n.footer-top-left {\n    flex-direction:column;\n    display: flex;\n    width: 30%;\n    margin: auto;\n}\n\n.footer-top-middle {\n    flex-direction:column;\n    display: flex;\n    width: 30%;\n    margin: auto;\n}\n\n.footer-top-right {\n    flex-direction:column;\n    display: flex;\n    width: 30%;\n    margin: auto;\n}\n\n.footer-top div * {\n    margin: auto;\n}\n\n.footer-bottom {\n    display: flex;\n}\n\n.footer-bottom-middle {\n    width: 50%;\n    margin: auto;\n}\n\n\n\n.copyright {\n    display: flex;\n    flex-direction:column;\n    width: 300px;\n    margin: auto;\n}\n\n.copyright img{\n    width: 100px;\n    height: 100px;\n    margin: auto;\n}\n", ""]);
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

/***/ "./src/scripts/index.jsx":
/*!*******************************!*\
  !*** ./src/scripts/index.jsx ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Logo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "logo",
      href: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "logo",
      src: "../images/logo.jpg"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "ArkMelon"));
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

class TopBarContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.tag + "-container",
      onMouseOver: this.props.onMouseOver,
      onMouseLeave: this.props.onMouseLeave
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.tag + "-contents"
    }, this.props.content.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownMenu, {
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
  render() {
    let input;

    if (this.props.contents.input.display) {
      input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "search-input"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        placeholder: "  \u641C\u7D22"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
    }, this.props.content.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownMenu, {
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
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownMenu, {
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
      let tmp = this.state.contents;

      if (type === "nav") {
        tmp.nav[x].listInfo.display = true;

        if (tmp.nav[x].hasOwnProperty("color")) {
          tmp.nav[x].color = "#f08080";
        }

        this.setState({
          contents: tmp
        });
      }

      if (type === "opt") {
        tmp.opt[x].listInfo.display = true;

        if (tmp.opt[x].hasOwnProperty("color")) {
          tmp.opt[x].color = "#f08080";
        }

        this.setState({
          contents: tmp
        });
      }

      if (type === "srh") {
        if (tmp.srh.button.hasOwnProperty("color")) {
          tmp.srh.button.color = "#f08080";
        }

        this.setState({
          contents: tmp
        });
      }
    });

    _defineProperty(this, "handleLeave", (x, type) => {
      let tmp = this.state.contents;

      if (type === "nav") {
        tmp.nav[x].listInfo.display = false;

        if (tmp.nav[x].hasOwnProperty("color")) {
          tmp.nav[x].color = "#ffffff";
        }

        this.setState({
          contents: tmp
        });
      }

      if (type === "opt") {
        tmp.opt[x].listInfo.display = false;

        if (tmp.opt[x].hasOwnProperty("color")) {
          tmp.opt[x].color = "#ffffff";
        }

        this.setState({
          contents: tmp
        });
      }

      if (type === "srh") {
        if (tmp.srh.button.hasOwnProperty("color")) {
          tmp.srh.button.color = "#fff";
        }

        this.setState({
          contents: tmp
        });
      }
    });

    _defineProperty(this, "showSearchBar", () => {
      let tmp = this.state.contents;

      if (tmp.hasOwnProperty("srh")) {
        if (tmp.srh.hasOwnProperty("input") && tmp.srh.hasOwnProperty("button")) {
          tmp.srh.input.display = !tmp.srh.input.display;
          this.setState({
            contents: tmp
          });
        }
      }
    });

    this.state = {
      contents: {
        nav: [{
          key: 0,
          name: "游戏数据",
          listInfo: {
            display: false,
            data: [{
              key: "l1",
              title: "#####",
              href: "/"
            }, {
              key: "l2",
              title: "#####",
              href: "/"
            }, {
              key: "l3",
              title: "#####",
              href: "/"
            }]
          }
        }, {
          key: 1,
          name: "材料相关",
          listInfo: {
            display: false,
            data: [{
              key: "l1",
              title: "#####",
              href: "/"
            }, {
              key: "l2",
              title: "#####",
              href: "/"
            }, {
              key: "l3",
              title: "#####",
              href: "/"
            }]
          }
        }, {
          key: 2,
          name: "寻访模拟",
          listInfo: {
            display: false,
            data: [{
              key: "l1",
              title: "#####",
              href: "/"
            }, {
              key: "l2",
              title: "#####",
              href: "/"
            }, {
              key: "l3",
              title: "#####",
              href: "/"
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
              key: "l1",
              title: "#####",
              href: "/"
            }, {
              key: "l2",
              title: "#####",
              href: "/"
            }]
          }
        }, {
          key: 1,
          name: "多语言",
          color: "#ffffff",
          listInfo: {
            display: false,
            data: [{
              key: "l1",
              title: "#####",
              href: "/"
            }, {
              key: "l2",
              title: "#####",
              href: "/"
            }, {
              key: "l3",
              title: "#####",
              href: "/"
            }]
          }
        }, {
          key: 2,
          name: "Github",
          href: "https://github.com/killbe5419",
          listInfo: {}
        }]
      }
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.theme === "dark" ? "header dark-mode-bar" : "header light-mode-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "top-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, {
      tag: "nav",
      contents: this.state.contents.nav,
      onMouseOver: this.handleHover,
      onMouseLeave: this.handleLeave
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, {
      tag: "srh",
      contents: this.state.contents.srh,
      onMouseOver: this.handleHover,
      onMouseLeave: this.handleLeave,
      onClick: this.showSearchBar
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Options, {
      tag: "opt",
      contents: this.state.contents.opt,
      onMouseOver: this.handleHover,
      onMouseLeave: this.handleLeave
    })));
  }

}

class Main extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.theme === "dark" ? "main dark-mode-main" : "main light-mode-main"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "title-name"
    }, " ArkMelon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "title-description"
    }, "\u7528\u4E8E\u5FEB\u901F\u67E5\u770B\u660E\u65E5\u65B9\u821F\u6E38\u620F\u6570\u636E\u7684\u8D44\u6599\u5E93"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main-contents"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "news-containers"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6700\u65B0\u6D3B\u52A8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new-contents-v"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "event1",
      src: "../images/index/event1.png"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "event2",
      src: "../images/index/event2.png"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "news-containers"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u65B0\u589E\u5361\u6C60"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new-contents-v"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "pool1",
      src: "../images/index/pool1.png"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "pool2",
      src: "../images/index/pool2.png"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "news-containers"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u65B0\u589E\u5E72\u5458"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new-contents-v"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "operator1",
      src: "../images/index/operators1.png"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "news-containers"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u65B0\u589E\u670D\u88C5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new-contents-v"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "cloth1",
      src: "../images/index/cloth1.png"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "news-containers"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u65B0\u589E\u5BB6\u5177"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new-contents-v"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "theme1",
      src: "../images/index/theme1.png"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "news-containers"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u65B0\u589E\u5173\u5361"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "new-contents-v"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "stage1",
      src: "../images/index/stage1.png"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "stage2",
      src: "../images/index/stage2.png"
    })))))));
  }

}

class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: this.props.theme === "dark" ? "footer dark-mode-bar" : "footer light-mode-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-contents"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-top-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "example text 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-top-middle"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "example text 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-top-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "example text 3"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer-bottom-middle"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "copyright"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Copyright \xA9 2020 DragonCat Products."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "QR",
      src: "../images/githubQR.png"
    }))));
  }

}

class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "changeTheme", () => {
      if (this.state.theme === "light") {
        console.log("light");
        this.setState({
          theme: "dark"
        });
      } else {
        console.log("dark");
        this.setState({
          theme: "light"
        });
      }
    });

    this.state = {
      theme: "dark"
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBar, {
      theme: this.state.theme,
      changeTheme: () => this.changeTheme()
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, {
      theme: this.state.theme
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
      theme: this.state.theme
    }));
  }

}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById("react-root"));

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

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
//# sourceMappingURL=react.bundle.js.map