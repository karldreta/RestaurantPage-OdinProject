/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.woff */ "./src/fonts/Roboto-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Lobster-Regular.woff */ "./src/fonts/Lobster-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/background.jpg */ "./src/imgs/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Lobster';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: normal;
    font-style: normal;
}


* {
    box-sizing: border-box;
}

:root {
    --text-color: #E84A5F;
    --background-color: #C9DBB2;
    --primary-color: #F6FFDE;
    --accent-color: #AAC8A7;
    --ul-color: #889E81;
    --li-color: #D24545;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow-x: hidden; /* We'll have to use x since the axis has been reversed by body's flex direction*/
}

h1 {
    font-family: 'Lobster', cursive;
    margin: 0;
    padding: 0 0 20px 0;
    letter-spacing: 4px;
}

h2 {
    font-family: 'Lobster', cursive;
    margin: 0;
    padding: 0 0 5px 0;
    letter-spacing: 3px;
}

p {
    font-family: 'Roboto';
    margin: 0 0 20px 0;
    padding: 0;
    font-size: 16px;
    line-height: 22px;
}

#header {
    background-color: var(--primary-color);
    position: sticky;
    top: 0;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 0;
}

.logoContainer > img {
    width: 70px;
    height: auto;
    padding: 10px;
    padding-top: 15px;
    padding-bottom: 5px;
}

.logoContainer{
    border: 10px solid var(--accent-color);
    border-radius: 50%;
    height: auto;
    margin-left: 50px;
    align-items: center;
  }

#header > .cafeName {
    color: var(--text-color);
    padding: 0;
    justify-self: left;
    margin-right: 500px;
}

#header > #navPanel {
    /* border: 1px solid blue; */
    display: flex;
    margin-right: 50px;
    height: 125%;
    width: 300px;
}

#navPanel > button {
    padding: 10px 15px;
    border: none;
    color: var(--text-color);
    background-color: transparent;
    font-size: 14px;
    height: 100%;
    width: 75px;
    text-align: center;
}

#navPanel > button:hover {
    background-color: var(--background-color);
    cursor: pointer;
}

#navPanel > button:active {
    opacity: .5;
}

#content {
    background-color: aliceblue;
    width: 70%;
    height: auto;
    margin: 20px 0;
    padding: 30px;
    color: var(--text-color);
    background-color: var(--primary-color);
    border-radius: 20px;
    box-shadow: -10px 15px 1px var(--accent-color);
    text-align: justify;
}

#content.home {
    width: 500px;
    height: auto;
    align-self: flex-start;
    margin-left: 50px;
}

#content.menu {
    width: 900px;
    height: auto;
    margin-bottom: 30px;
}

#content.menu > ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
    padding: 0;
    gap: 30px;
    list-style: none;
}

#content.menu .menu-category ul {
    color: var(--li-color);
    margin-top: 20px;
}

#content.menu .menu-category ul > li {
    /* border: 1px solid red; */
    margin-bottom: 5px;
}

#content.contact {
    width: 500px;
    height: auto;
    align-self: flex-end;
    margin-right: 50px;
}

#content.about {
    width: 700px;
}

#footer {
    background-color: var(--primary-color);
    width: 100%;
    display: flex;
    justify-content: center;
}

#footer p {
    margin: 10px 0;
    color: var(--text-color);
    font-family: 'Lobster';
    letter-spacing: 2px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAAuC;IACvC,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,4CAAwC;IACxC,mBAAmB;IACnB,kBAAkB;AACtB;;;AAGA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;IACrB,2BAA2B;IAC3B,wBAAwB;IACxB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,yDAA8C;IAC9C,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,4BAA4B;IAC5B,kBAAkB,EAAE,iFAAiF;AACzG;;AAEA;IACI,+BAA+B;IAC/B,SAAS;IACT,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;IAC/B,SAAS;IACT,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,UAAU;IACV,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,sCAAsC;IACtC,gBAAgB;IAChB,MAAM;IACN,WAAW;IACX,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;EACrB;;AAEF;IACI,wBAAwB;IACxB,UAAU;IACV,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;IACxB,6BAA6B;IAC7B,eAAe;IACf,YAAY;IACZ,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;IACzC,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,UAAU;IACV,YAAY;IACZ,cAAc;IACd,aAAa;IACb,wBAAwB;IACxB,sCAAsC;IACtC,mBAAmB;IACnB,8CAA8C;IAC9C,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,SAAS;IACT,UAAU;IACV,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,sCAAsC;IACtC,WAAW;IACX,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,wBAAwB;IACxB,sBAAsB;IACtB,mBAAmB;AACvB","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    src: url('./fonts/Roboto-Regular.woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Lobster';\n    src: url('./fonts/Lobster-Regular.woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n\n* {\n    box-sizing: border-box;\n}\n\n:root {\n    --text-color: #E84A5F;\n    --background-color: #C9DBB2;\n    --primary-color: #F6FFDE;\n    --accent-color: #AAC8A7;\n    --ul-color: #889E81;\n    --li-color: #D24545;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0;\n    background-image: url('./imgs/background.jpg');\n    background-size: cover;\n    background-position: center; \n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    overflow-x: hidden; /* We'll have to use x since the axis has been reversed by body's flex direction*/\n}\n\nh1 {\n    font-family: 'Lobster', cursive;\n    margin: 0;\n    padding: 0 0 20px 0;\n    letter-spacing: 4px;\n}\n\nh2 {\n    font-family: 'Lobster', cursive;\n    margin: 0;\n    padding: 0 0 5px 0;\n    letter-spacing: 3px;\n}\n\np {\n    font-family: 'Roboto';\n    margin: 0 0 20px 0;\n    padding: 0;\n    font-size: 16px;\n    line-height: 22px;\n}\n\n#header {\n    background-color: var(--primary-color);\n    position: sticky;\n    top: 0;\n    width: 100%;\n    height: 100px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    margin: 0;\n}\n\n.logoContainer > img {\n    width: 70px;\n    height: auto;\n    padding: 10px;\n    padding-top: 15px;\n    padding-bottom: 5px;\n}\n\n.logoContainer{\n    border: 10px solid var(--accent-color);\n    border-radius: 50%;\n    height: auto;\n    margin-left: 50px;\n    align-items: center;\n  }\n\n#header > .cafeName {\n    color: var(--text-color);\n    padding: 0;\n    justify-self: left;\n    margin-right: 500px;\n}\n\n#header > #navPanel {\n    /* border: 1px solid blue; */\n    display: flex;\n    margin-right: 50px;\n    height: 125%;\n    width: 300px;\n}\n\n#navPanel > button {\n    padding: 10px 15px;\n    border: none;\n    color: var(--text-color);\n    background-color: transparent;\n    font-size: 14px;\n    height: 100%;\n    width: 75px;\n    text-align: center;\n}\n\n#navPanel > button:hover {\n    background-color: var(--background-color);\n    cursor: pointer;\n}\n\n#navPanel > button:active {\n    opacity: .5;\n}\n\n#content {\n    background-color: aliceblue;\n    width: 70%;\n    height: auto;\n    margin: 20px 0;\n    padding: 30px;\n    color: var(--text-color);\n    background-color: var(--primary-color);\n    border-radius: 20px;\n    box-shadow: -10px 15px 1px var(--accent-color);\n    text-align: justify;\n}\n\n#content.home {\n    width: 500px;\n    height: auto;\n    align-self: flex-start;\n    margin-left: 50px;\n}\n\n#content.menu {\n    width: 900px;\n    height: auto;\n    margin-bottom: 30px;\n}\n\n#content.menu > ul {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    margin: 0;\n    padding: 0;\n    gap: 30px;\n    list-style: none;\n}\n\n#content.menu .menu-category ul {\n    color: var(--li-color);\n    margin-top: 20px;\n}\n\n#content.menu .menu-category ul > li {\n    /* border: 1px solid red; */\n    margin-bottom: 5px;\n}\n\n#content.contact {\n    width: 500px;\n    height: auto;\n    align-self: flex-end;\n    margin-right: 50px;\n}\n\n#content.about {\n    width: 700px;\n}\n\n#footer {\n    background-color: var(--primary-color);\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n#footer p {\n    margin: 10px 0;\n    color: var(--text-color);\n    font-family: 'Lobster';\n    letter-spacing: 2px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderAbout)
/* harmony export */ });
function renderAbout() {
    const main = document.querySelector('#content');
    main.innerHTML = '';
    main.className = ''; // Remove all existing classes
    main.classList.add('about');
    main.innerHTML = `
    <h1 class="heading">About Us</h1>

    <p>Welcome to Sophia's Station Cafe, where exceptional coffee, delicious food, and a cozy atmosphere converge. Our passion for quality is evident in every cup, crafted from the finest global coffee beans into signature blends that delight. Enjoy gourmet teas and locally sourced dishes, ensuring freshness and flavor in every bite.</p>

    <p>Beyond coffee and cuisine, Sophia's Station Cafe is a vibrant community hub where creativity thrives and connections blossom. Whether you're diving into a project, unwinding with a book, or simply seeking tranquility, our space welcomes you with warmth and hospitality.</p>

    <p>At Sophia's Station Cafe, the reindeer symbolizes our guiding principles: strength, community, and resilience. Just as reindeer traverse vast distances and endure the harshest conditions, we strive to provide a steadfast haven for all. Our cafe is a place where you can find comfort and support, no matter where your journey has taken you.</p>

    <p>With high-speed WiFi and comfortable seating, Sophia's Station Cafe is your ideal spot for remote work or relaxation. Join us in Amsterdam and discover why we're not just another cafe; we're your still home even when away from home.</p>

    `;
    
    return main;
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContact)
/* harmony export */ });
function renderContact() {
    const main = document.querySelector('#content');
    main.innerHTML = '';
    main.className = ''; // Remove all existing classes
    main.classList.add('contact');
    main.innerHTML = `
    <div class="contact-info">
        <h1 class="heading">Contact Us</h1>
        <p>We are always excited to hear from you! Whether you have a question about our menu, want to book a table, or simply want to say hello, feel free to reach out to us. Our team at Sophia's Station Cafe is here to ensure you have a delightful experience every time you visit.</p>
        
        <h2>You may reach us from any of these channels</h2>
        <ul class="contact-list">
            <li>Email: info@sophiasstationcafe.com</li>
            <li>Phone: +31 612345678</li>
            <li>Visit us in person at Prinsengracht, 3141 GT Amsterdam, Netherlands</li>
        </ul>
        
        <h2>Opening Hours</h2>
        <ul class="opening-hours">
            <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
            <li>Saturday: 9:00 AM - 10:00 PM</li>
            <li>Sunday: 9:00 AM - 6:00 PM</li>
        </ul>
    </div>
    `;

    return main;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHome)
/* harmony export */ });
function renderHome() {
    const main = document.querySelector('#content');
    main.innerHTML = '';
    main.className = ''; // Remove all existing classes
    main.classList.add('home');
    // We'll use template literals here for efficient code writing.
    main.innerHTML = `
    <p>Welcome to Sophia's Station Cafe, where elegance meets comfort in every cup. Named after the Greek word for wisdom, our cafe in Amsterdam offers a tranquil to relax with a book, unwind, or enjoy exceptional coffee and cuisine.</p>
    
    <p>With high-speed WiFi and a cozy atmosphere, it's also the perfect place to work or connect with friends. Indulge in our signature coffee blends, gourmet teas, and delectable dishes crafted from the finest ingredients. Whether for a brief respite or a productive day, Sophia's Station ensures every visit is filled with warmth and sophistication.</p>`

    return main;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
function renderMenu() {
    const main = document.querySelector('#content');
    main.innerHTML = '';
    main.className = '';
    main.classList.add('menu');
    main.innerHTML = `
    <h1 class="heading">Our Menu</h1>
    <p class="menu-description">Explore our delicious offerings at Sophia's Station Cafe:</p>
    <ul>
        <li class="menu-category"><strong>Coffee:</strong> Enjoy our signature blends made from the finest coffee beans.
            <ul>
                <li class="menu-item">Espresso</li>
                <li class="menu-item">Cappuccino</li>
                <li class="menu-item">Latte</li>
                <li class="menu-item">Americano</li>
            </ul>
        </li>
        <li class="menu-category"><strong>Tea:</strong> Delight in a selection of gourmet teas, perfect for any tea lover.
            <ul>
                <li class="menu-item">Earl Grey</li>
                <li class="menu-item">Chamomile</li>
                <li class="menu-item">Green Tea</li>
                <li class="menu-item">Hibiscus</li>
                <li class="menu-item">Peppermint</li>
            </ul>
        </li>
        <li class="menu-category"><strong>Breakfast:</strong> Start your day right with our hearty breakfast options.
            <ul>
                <li class="menu-item">Classic Pancakes</li>
                <li class="menu-item">Eggs Benedict</li>
                <li class="menu-item">Avocado Toast</li>
                <li class="menu-item">Belgian Waffles</li>
                <li class="menu-item">French Toast</li>
                <li class="menu-item">Vegetarian Omelette</li>
                <li class="menu-item">Full English Breakfast</li>
            </ul>
        </li>
        <li class="menu-category"><strong>Lunch:</strong> Indulge in delicious lunches made from locally sourced ingredients.
            <ul>
                <li class="menu-item">Caprese Salad</li>
                <li class="menu-item">Chicken Panini</li>
                <li class="menu-item">Quinoa Bowl</li>
                <li class="menu-item">Vegetarian Wrap</li>
                <li class="menu-item">Grilled Salmon</li>
                <li class="menu-item">Pasta Primavera</li>
                <li class="menu-item">Beef Burger</li>
            </ul>
        </li>
        <li class="menu-category"><strong>Desserts:</strong> Treat yourself to our delectable desserts, crafted with care.
            <ul>
                <li class="menu-item">Chocolate Brownie</li>
                <li class="menu-item">New York Cheesecake</li>
                <li class="menu-item">Tiramisu</li>
                <li class="menu-item">Apple Pie</li>
                <li class="menu-item">Crème Brûlée</li>
                <li class="menu-item">Lemon Tart</li>
                <li class="menu-item">Red Velvet Cake</li>
            </ul>
        </li>
    </ul>
`;
    return main;
}

/***/ }),

/***/ "./src/fonts/Lobster-Regular.woff":
/*!****************************************!*\
  !*** ./src/fonts/Lobster-Regular.woff ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59d2843311dd6e1cb1cf.woff";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.woff":
/*!***************************************!*\
  !*** ./src/fonts/Roboto-Regular.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "774f99460b8c31560a3c.woff";

/***/ }),

/***/ "./src/imgs/background.jpg":
/*!*********************************!*\
  !*** ./src/imgs/background.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d1f47a6c75bd27f4903.jpg";

/***/ }),

/***/ "./src/imgs/icon.png":
/*!***************************!*\
  !*** ./src/imgs/icon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "374e9f45c491d06a835b.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _imgs_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/icon.png */ "./src/imgs/icon.png");







document.addEventListener("DOMContentLoaded", function () {
    (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Load the HomePage first
    
    const header = document.querySelector('#header');
    const navPanel = document.querySelector('#navPanel');
    const logoContainer = document.createElement('div');
    logoContainer.classList.add("logoContainer");
    const logoIcon = new Image();
    logoIcon.src = _imgs_icon_png__WEBPACK_IMPORTED_MODULE_5__;
    logoContainer.appendChild(logoIcon)
    header.insertBefore(logoContainer, navPanel);

    const cafeName = document.createElement('h1')
    cafeName.classList.add('cafeName');
    cafeName.textContent = "Sophia's Station Cafe";
    header.insertBefore(cafeName, navPanel);

    // Footer
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    footer.innerHTML = `
        <p>Welcome to our cozy cafe. Enjoy your stay!</p>
    `;
    document.body.appendChild(footer);


    document.querySelector('#home').addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_1__["default"]);
    document.querySelector('#menu').addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__["default"]);
    document.querySelector('#contact').addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_3__["default"]);
    document.querySelector('#about').addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_4__["default"]);
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3QvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3QvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0xvYnN0ZXItUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWdzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuXG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gICAgLS10ZXh0LWNvbG9yOiAjRTg0QTVGO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI0M5REJCMjtcbiAgICAtLXByaW1hcnktY29sb3I6ICNGNkZGREU7XG4gICAgLS1hY2NlbnQtY29sb3I6ICNBQUM4QTc7XG4gICAgLS11bC1jb2xvcjogIzg4OUU4MTtcbiAgICAtLWxpLWNvbG9yOiAjRDI0NTQ1O1xufVxuXG5ib2R5IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogV2UnbGwgaGF2ZSB0byB1c2UgeCBzaW5jZSB0aGUgYXhpcyBoYXMgYmVlbiByZXZlcnNlZCBieSBib2R5J3MgZmxleCBkaXJlY3Rpb24qL1xufVxuXG5oMSB7XG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAwIDIwcHggMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuXG5oMiB7XG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAwIDVweCAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG5cbnAge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbiNoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmxvZ29Db250YWluZXIgPiBpbWcge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5sb2dvQ29udGFpbmVye1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4jaGVhZGVyID4gLmNhZmVOYW1lIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgcGFkZGluZzogMDtcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MDBweDtcbn1cblxuI2hlYWRlciA+ICNuYXZQYW5lbCB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBoZWlnaHQ6IDEyNSU7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4jbmF2UGFuZWwgPiBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbmF2UGFuZWwgPiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25hdlBhbmVsID4gYnV0dG9uOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogLjU7XG59XG5cbiNjb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiAtMTBweCAxNXB4IDFweCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbiNjb250ZW50LmhvbWUge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuI2NvbnRlbnQubWVudSB7XG4gICAgd2lkdGg6IDkwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jY29udGVudC5tZW51ID4gdWwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBnYXA6IDMwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuI2NvbnRlbnQubWVudSAubWVudS1jYXRlZ29yeSB1bCB7XG4gICAgY29sb3I6IHZhcigtLWxpLWNvbG9yKTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jY29udGVudC5tZW51IC5tZW51LWNhdGVnb3J5IHVsID4gbGkge1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbiNjb250ZW50LmNvbnRhY3Qge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4jY29udGVudC5hYm91dCB7XG4gICAgd2lkdGg6IDcwMHB4O1xufVxuXG4jZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jZm9vdGVyIHAge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUF3QztJQUN4QyxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHlEQUE4QztJQUM5QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsa0JBQWtCLEVBQUUsaUZBQWlGO0FBQ3pHOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztBQUVGO0lBQ0ksd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLDhDQUE4QztJQUM5QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1JvYm90by1SZWd1bGFyLndvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvTG9ic3Rlci1SZWd1bGFyLndvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXRleHQtY29sb3I6ICNFODRBNUY7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI0M5REJCMjtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjRjZGRkRFO1xcbiAgICAtLWFjY2VudC1jb2xvcjogI0FBQzhBNztcXG4gICAgLS11bC1jb2xvcjogIzg4OUU4MTtcXG4gICAgLS1saS1jb2xvcjogI0QyNDU0NTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWdzL2JhY2tncm91bmQuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogV2UnbGwgaGF2ZSB0byB1c2UgeCBzaW5jZSB0aGUgYXhpcyBoYXMgYmVlbiByZXZlcnNlZCBieSBib2R5J3MgZmxleCBkaXJlY3Rpb24qL1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAwIDIwcHggMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMCA1cHggMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuXFxucCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9nb0NvbnRhaW5lciA+IGltZyB7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubG9nb0NvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4jaGVhZGVyID4gLmNhZmVOYW1lIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICAgIG1hcmdpbi1yaWdodDogNTAwcHg7XFxufVxcblxcbiNoZWFkZXIgPiAjbmF2UGFuZWwge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICAgIGhlaWdodDogMTI1JTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4jbmF2UGFuZWwgPiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNuYXZQYW5lbCA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuYXZQYW5lbCA+IGJ1dHRvbjphY3RpdmUge1xcbiAgICBvcGFjaXR5OiAuNTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IC0xMHB4IDE1cHggMXB4IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbiNjb250ZW50LmhvbWUge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcbiNjb250ZW50Lm1lbnUge1xcbiAgICB3aWR0aDogOTAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI2NvbnRlbnQubWVudSA+IHVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNjb250ZW50Lm1lbnUgLm1lbnUtY2F0ZWdvcnkgdWwge1xcbiAgICBjb2xvcjogdmFyKC0tbGktY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4jY29udGVudC5tZW51IC5tZW51LWNhdGVnb3J5IHVsID4gbGkge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuI2NvbnRlbnQuY29udGFjdCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jY29udGVudC5hYm91dCB7XFxuICAgIHdpZHRoOiA3MDBweDtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXIgcCB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckFib3V0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5jbGFzc05hbWUgPSAnJzsgLy8gUmVtb3ZlIGFsbCBleGlzdGluZyBjbGFzc2VzXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gYFxuICAgIDxoMSBjbGFzcz1cImhlYWRpbmdcIj5BYm91dCBVczwvaDE+XG5cbiAgICA8cD5XZWxjb21lIHRvIFNvcGhpYSdzIFN0YXRpb24gQ2FmZSwgd2hlcmUgZXhjZXB0aW9uYWwgY29mZmVlLCBkZWxpY2lvdXMgZm9vZCwgYW5kIGEgY296eSBhdG1vc3BoZXJlIGNvbnZlcmdlLiBPdXIgcGFzc2lvbiBmb3IgcXVhbGl0eSBpcyBldmlkZW50IGluIGV2ZXJ5IGN1cCwgY3JhZnRlZCBmcm9tIHRoZSBmaW5lc3QgZ2xvYmFsIGNvZmZlZSBiZWFucyBpbnRvIHNpZ25hdHVyZSBibGVuZHMgdGhhdCBkZWxpZ2h0LiBFbmpveSBnb3VybWV0IHRlYXMgYW5kIGxvY2FsbHkgc291cmNlZCBkaXNoZXMsIGVuc3VyaW5nIGZyZXNobmVzcyBhbmQgZmxhdm9yIGluIGV2ZXJ5IGJpdGUuPC9wPlxuXG4gICAgPHA+QmV5b25kIGNvZmZlZSBhbmQgY3Vpc2luZSwgU29waGlhJ3MgU3RhdGlvbiBDYWZlIGlzIGEgdmlicmFudCBjb21tdW5pdHkgaHViIHdoZXJlIGNyZWF0aXZpdHkgdGhyaXZlcyBhbmQgY29ubmVjdGlvbnMgYmxvc3NvbS4gV2hldGhlciB5b3UncmUgZGl2aW5nIGludG8gYSBwcm9qZWN0LCB1bndpbmRpbmcgd2l0aCBhIGJvb2ssIG9yIHNpbXBseSBzZWVraW5nIHRyYW5xdWlsaXR5LCBvdXIgc3BhY2Ugd2VsY29tZXMgeW91IHdpdGggd2FybXRoIGFuZCBob3NwaXRhbGl0eS48L3A+XG5cbiAgICA8cD5BdCBTb3BoaWEncyBTdGF0aW9uIENhZmUsIHRoZSByZWluZGVlciBzeW1ib2xpemVzIG91ciBndWlkaW5nIHByaW5jaXBsZXM6IHN0cmVuZ3RoLCBjb21tdW5pdHksIGFuZCByZXNpbGllbmNlLiBKdXN0IGFzIHJlaW5kZWVyIHRyYXZlcnNlIHZhc3QgZGlzdGFuY2VzIGFuZCBlbmR1cmUgdGhlIGhhcnNoZXN0IGNvbmRpdGlvbnMsIHdlIHN0cml2ZSB0byBwcm92aWRlIGEgc3RlYWRmYXN0IGhhdmVuIGZvciBhbGwuIE91ciBjYWZlIGlzIGEgcGxhY2Ugd2hlcmUgeW91IGNhbiBmaW5kIGNvbWZvcnQgYW5kIHN1cHBvcnQsIG5vIG1hdHRlciB3aGVyZSB5b3VyIGpvdXJuZXkgaGFzIHRha2VuIHlvdS48L3A+XG5cbiAgICA8cD5XaXRoIGhpZ2gtc3BlZWQgV2lGaSBhbmQgY29tZm9ydGFibGUgc2VhdGluZywgU29waGlhJ3MgU3RhdGlvbiBDYWZlIGlzIHlvdXIgaWRlYWwgc3BvdCBmb3IgcmVtb3RlIHdvcmsgb3IgcmVsYXhhdGlvbi4gSm9pbiB1cyBpbiBBbXN0ZXJkYW0gYW5kIGRpc2NvdmVyIHdoeSB3ZSdyZSBub3QganVzdCBhbm90aGVyIGNhZmU7IHdlJ3JlIHlvdXIgc3RpbGwgaG9tZSBldmVuIHdoZW4gYXdheSBmcm9tIGhvbWUuPC9wPlxuXG4gICAgYDtcbiAgICBcbiAgICByZXR1cm4gbWFpbjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5jbGFzc05hbWUgPSAnJzsgLy8gUmVtb3ZlIGFsbCBleGlzdGluZyBjbGFzc2VzXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtaW5mb1wiPlxuICAgICAgICA8aDEgY2xhc3M9XCJoZWFkaW5nXCI+Q29udGFjdCBVczwvaDE+XG4gICAgICAgIDxwPldlIGFyZSBhbHdheXMgZXhjaXRlZCB0byBoZWFyIGZyb20geW91ISBXaGV0aGVyIHlvdSBoYXZlIGEgcXVlc3Rpb24gYWJvdXQgb3VyIG1lbnUsIHdhbnQgdG8gYm9vayBhIHRhYmxlLCBvciBzaW1wbHkgd2FudCB0byBzYXkgaGVsbG8sIGZlZWwgZnJlZSB0byByZWFjaCBvdXQgdG8gdXMuIE91ciB0ZWFtIGF0IFNvcGhpYSdzIFN0YXRpb24gQ2FmZSBpcyBoZXJlIHRvIGVuc3VyZSB5b3UgaGF2ZSBhIGRlbGlnaHRmdWwgZXhwZXJpZW5jZSBldmVyeSB0aW1lIHlvdSB2aXNpdC48L3A+XG4gICAgICAgIFxuICAgICAgICA8aDI+WW91IG1heSByZWFjaCB1cyBmcm9tIGFueSBvZiB0aGVzZSBjaGFubmVsczwvaDI+XG4gICAgICAgIDx1bCBjbGFzcz1cImNvbnRhY3QtbGlzdFwiPlxuICAgICAgICAgICAgPGxpPkVtYWlsOiBpbmZvQHNvcGhpYXNzdGF0aW9uY2FmZS5jb208L2xpPlxuICAgICAgICAgICAgPGxpPlBob25lOiArMzEgNjEyMzQ1Njc4PC9saT5cbiAgICAgICAgICAgIDxsaT5WaXNpdCB1cyBpbiBwZXJzb24gYXQgUHJpbnNlbmdyYWNodCwgMzE0MSBHVCBBbXN0ZXJkYW0sIE5ldGhlcmxhbmRzPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgXG4gICAgICAgIDxoMj5PcGVuaW5nIEhvdXJzPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzPVwib3BlbmluZy1ob3Vyc1wiPlxuICAgICAgICAgICAgPGxpPk1vbmRheSAtIEZyaWRheTogODowMCBBTSAtIDg6MDAgUE08L2xpPlxuICAgICAgICAgICAgPGxpPlNhdHVyZGF5OiA5OjAwIEFNIC0gMTA6MDAgUE08L2xpPlxuICAgICAgICAgICAgPGxpPlN1bmRheTogOTowMCBBTSAtIDY6MDAgUE08L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICByZXR1cm4gbWFpbjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5jbGFzc05hbWUgPSAnJzsgLy8gUmVtb3ZlIGFsbCBleGlzdGluZyBjbGFzc2VzXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgLy8gV2UnbGwgdXNlIHRlbXBsYXRlIGxpdGVyYWxzIGhlcmUgZm9yIGVmZmljaWVudCBjb2RlIHdyaXRpbmcuXG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgPHA+V2VsY29tZSB0byBTb3BoaWEncyBTdGF0aW9uIENhZmUsIHdoZXJlIGVsZWdhbmNlIG1lZXRzIGNvbWZvcnQgaW4gZXZlcnkgY3VwLiBOYW1lZCBhZnRlciB0aGUgR3JlZWsgd29yZCBmb3Igd2lzZG9tLCBvdXIgY2FmZSBpbiBBbXN0ZXJkYW0gb2ZmZXJzIGEgdHJhbnF1aWwgdG8gcmVsYXggd2l0aCBhIGJvb2ssIHVud2luZCwgb3IgZW5qb3kgZXhjZXB0aW9uYWwgY29mZmVlIGFuZCBjdWlzaW5lLjwvcD5cbiAgICBcbiAgICA8cD5XaXRoIGhpZ2gtc3BlZWQgV2lGaSBhbmQgYSBjb3p5IGF0bW9zcGhlcmUsIGl0J3MgYWxzbyB0aGUgcGVyZmVjdCBwbGFjZSB0byB3b3JrIG9yIGNvbm5lY3Qgd2l0aCBmcmllbmRzLiBJbmR1bGdlIGluIG91ciBzaWduYXR1cmUgY29mZmVlIGJsZW5kcywgZ291cm1ldCB0ZWFzLCBhbmQgZGVsZWN0YWJsZSBkaXNoZXMgY3JhZnRlZCBmcm9tIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMuIFdoZXRoZXIgZm9yIGEgYnJpZWYgcmVzcGl0ZSBvciBhIHByb2R1Y3RpdmUgZGF5LCBTb3BoaWEncyBTdGF0aW9uIGVuc3VyZXMgZXZlcnkgdmlzaXQgaXMgZmlsbGVkIHdpdGggd2FybXRoIGFuZCBzb3BoaXN0aWNhdGlvbi48L3A+YFxuXG4gICAgcmV0dXJuIG1haW47XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uY2xhc3NOYW1lID0gJyc7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSBgXG4gICAgPGgxIGNsYXNzPVwiaGVhZGluZ1wiPk91ciBNZW51PC9oMT5cbiAgICA8cCBjbGFzcz1cIm1lbnUtZGVzY3JpcHRpb25cIj5FeHBsb3JlIG91ciBkZWxpY2lvdXMgb2ZmZXJpbmdzIGF0IFNvcGhpYSdzIFN0YXRpb24gQ2FmZTo8L3A+XG4gICAgPHVsPlxuICAgICAgICA8bGkgY2xhc3M9XCJtZW51LWNhdGVnb3J5XCI+PHN0cm9uZz5Db2ZmZWU6PC9zdHJvbmc+IEVuam95IG91ciBzaWduYXR1cmUgYmxlbmRzIG1hZGUgZnJvbSB0aGUgZmluZXN0IGNvZmZlZSBiZWFucy5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51LWl0ZW1cIj5Fc3ByZXNzbzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudS1pdGVtXCI+Q2FwcHVjY2lubzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudS1pdGVtXCI+TGF0dGU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPkFtZXJpY2FubzwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJtZW51LWNhdGVnb3J5XCI+PHN0cm9uZz5UZWE6PC9zdHJvbmc+IERlbGlnaHQgaW4gYSBzZWxlY3Rpb24gb2YgZ291cm1ldCB0ZWFzLCBwZXJmZWN0IGZvciBhbnkgdGVhIGxvdmVyLlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPkVhcmwgR3JleTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudS1pdGVtXCI+Q2hhbW9taWxlPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51LWl0ZW1cIj5HcmVlbiBUZWE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPkhpYmlzY3VzPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51LWl0ZW1cIj5QZXBwZXJtaW50PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtY2F0ZWdvcnlcIj48c3Ryb25nPkJyZWFrZmFzdDo8L3N0cm9uZz4gU3RhcnQgeW91ciBkYXkgcmlnaHQgd2l0aCBvdXIgaGVhcnR5IGJyZWFrZmFzdCBvcHRpb25zLlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPkNsYXNzaWMgUGFuY2FrZXM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPkVnZ3MgQmVuZWRpY3Q8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPkF2b2NhZG8gVG9hc3Q8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPkJlbGdpYW4gV2FmZmxlczwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudS1pdGVtXCI+RnJlbmNoIFRvYXN0PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51LWl0ZW1cIj5WZWdldGFyaWFuIE9tZWxldHRlPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51LWl0ZW1cIj5GdWxsIEVuZ2xpc2ggQnJlYWtmYXN0PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtY2F0ZWdvcnlcIj48c3Ryb25nPkx1bmNoOjwvc3Ryb25nPiBJbmR1bGdlIGluIGRlbGljaW91cyBsdW5jaGVzIG1hZGUgZnJvbSBsb2NhbGx5IHNvdXJjZWQgaW5ncmVkaWVudHMuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudS1pdGVtXCI+Q2FwcmVzZSBTYWxhZDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudS1pdGVtXCI+Q2hpY2tlbiBQYW5pbmk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPlF1aW5vYSBCb3dsPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51LWl0ZW1cIj5WZWdldGFyaWFuIFdyYXA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPkdyaWxsZWQgU2FsbW9uPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51LWl0ZW1cIj5QYXN0YSBQcmltYXZlcmE8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPkJlZWYgQnVyZ2VyPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtY2F0ZWdvcnlcIj48c3Ryb25nPkRlc3NlcnRzOjwvc3Ryb25nPiBUcmVhdCB5b3Vyc2VsZiB0byBvdXIgZGVsZWN0YWJsZSBkZXNzZXJ0cywgY3JhZnRlZCB3aXRoIGNhcmUuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudS1pdGVtXCI+Q2hvY29sYXRlIEJyb3duaWU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPk5ldyBZb3JrIENoZWVzZWNha2U8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPlRpcmFtaXN1PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtZW51LWl0ZW1cIj5BcHBsZSBQaWU8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1lbnUtaXRlbVwiPkNyw6htZSBCcsO7bMOpZTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudS1pdGVtXCI+TGVtb24gVGFydDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWVudS1pdGVtXCI+UmVkIFZlbHZldCBDYWtlPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbmA7XG4gICAgcmV0dXJuIG1haW47XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHJlbmRlckhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCByZW5kZXJNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgcmVuZGVyQ29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHJlbmRlckFib3V0IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IGljb25QYXRoIGZyb20gJy4vaW1ncy9pY29uLnBuZyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZW5kZXJIb21lKCk7IC8vIExvYWQgdGhlIEhvbWVQYWdlIGZpcnN0XG4gICAgXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpO1xuICAgIGNvbnN0IG5hdlBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdlBhbmVsJyk7XG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ29Db250YWluZXJcIik7XG4gICAgY29uc3QgbG9nb0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvSWNvbi5zcmMgPSBpY29uUGF0aDtcbiAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JY29uKVxuICAgIGhlYWRlci5pbnNlcnRCZWZvcmUobG9nb0NvbnRhaW5lciwgbmF2UGFuZWwpO1xuXG4gICAgY29uc3QgY2FmZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgY2FmZU5hbWUuY2xhc3NMaXN0LmFkZCgnY2FmZU5hbWUnKTtcbiAgICBjYWZlTmFtZS50ZXh0Q29udGVudCA9IFwiU29waGlhJ3MgU3RhdGlvbiBDYWZlXCI7XG4gICAgaGVhZGVyLmluc2VydEJlZm9yZShjYWZlTmFtZSwgbmF2UGFuZWwpO1xuXG4gICAgLy8gRm9vdGVyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHA+V2VsY29tZSB0byBvdXIgY296eSBjYWZlLiBFbmpveSB5b3VyIHN0YXkhPC9wPlxuICAgIGA7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVySG9tZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlck1lbnUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJDb250YWN0KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFib3V0KTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==