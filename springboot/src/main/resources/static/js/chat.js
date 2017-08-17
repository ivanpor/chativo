webpackJsonp([0],{

/***/ 0:
/*!***********************!*\
  !*** ./chat/chat.jsx ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 158);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _ChatPage = __webpack_require__(/*! ./ChatPage.jsx */ 159);
	
	var _ChatPage2 = _interopRequireDefault(_ChatPage);
	
	__webpack_require__(/*! ./chat.less */ 162);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_ChatPage2.default, null), document.getElementById('mainContainer'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "chat.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 159:
/*!***************************!*\
  !*** ./chat/ChatPage.jsx ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChatTable = __webpack_require__(/*! ./ChatTable.jsx */ 160);
	
	var _ChatTable2 = _interopRequireDefault(_ChatTable);
	
	var _ChatForm = __webpack_require__(/*! ./ChatForm.jsx */ 161);
	
	var _ChatForm2 = _interopRequireDefault(_ChatForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ChatPage = _react2.default.createClass({
	    displayName: 'ChatPage',
	    getInitialState: function getInitialState() {
	        return { currentUser: "" };
	    },
	    componentWillMount: function componentWillMount() {
	        var _this = this;
	
	        fetch('/springboot/currentuser', {
	            credentials: 'same-origin' }).then(function (response) {
	            return response.text();
	        }).then(function (recurso) {
	            _this.setState({ currentUser: recurso });
	        });
	    },
	
	
	    render: function render() {
	
	        return _react2.default.createElement(
	            'div',
	            { id: 'main-content', className: 'container-fluid mainContainer' },
	            _react2.default.createElement(_ChatTable2.default, { mensage: this.state.currentUser }),
	            _react2.default.createElement(_ChatForm2.default, null)
	        );
	    }
	});
	
	exports.default = ChatPage;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 160:
/*!****************************!*\
  !*** ./chat/ChatTable.jsx ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ChatTable = _react2.default.createClass({
	    displayName: "ChatTable",
	
	
	    render: function render() {
	
	        return _react2.default.createElement(
	            "div",
	            { className: "row" },
	            _react2.default.createElement(
	                "div",
	                { className: "row" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "col-md-10 col-md-offset-1" },
	                    _react2.default.createElement(
	                        "table",
	                        { className: "table table-striped" },
	                        _react2.default.createElement(
	                            "thead",
	                            null,
	                            _react2.default.createElement(
	                                "tr",
	                                null,
	                                _react2.default.createElement(
	                                    "th",
	                                    null,
	                                    "Hola ",
	                                    this.props.mensage
	                                ),
	                                _react2.default.createElement(
	                                    "th",
	                                    null,
	                                    _react2.default.createElement(
	                                        "form",
	                                        { name: "formLogout", action: "/springboot/logout", className: "form-inline pull-right" },
	                                        _react2.default.createElement(
	                                            "div",
	                                            { className: "form-group" },
	                                            _react2.default.createElement(
	                                                "button",
	                                                { id: "disconnect", className: "btn btn-default", type: "submit" },
	                                                "Log out"
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                "div",
	                { className: "row" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "col-md-1" },
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        _react2.default.createElement(
	                            "table",
	                            null,
	                            _react2.default.createElement("tbody", { id: "conversations" })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "col-md-10" },
	                    _react2.default.createElement(
	                        "div",
	                        { id: "charla" },
	                        _react2.default.createElement(
	                            "table",
	                            null,
	                            _react2.default.createElement(
	                                "tbody",
	                                { id: "conversation" },
	                                _react2.default.createElement(
	                                    "tr",
	                                    null,
	                                    _react2.default.createElement("td", { id: "left" }),
	                                    _react2.default.createElement("td", { id: "right" })
	                                )
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "col-md-1" },
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        _react2.default.createElement(
	                            "table",
	                            null,
	                            _react2.default.createElement("tbody", { id: "users" })
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	
	exports.default = ChatTable;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatTable.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 161:
/*!***************************!*\
  !*** ./chat/ChatForm.jsx ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ChatForm = _react2.default.createClass({
	    displayName: "ChatForm",
	
	
	    render: function render() {
	
	        return _react2.default.createElement(
	            "div",
	            { className: "row" },
	            _react2.default.createElement(
	                "div",
	                { className: "col-md-10 col-md-offset-1" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "form-inline" },
	                    _react2.default.createElement("input", { type: "text", id: "message", className: "form-control", placeholder: "Comience a escribir..", autoComplete: "off" }),
	                    _react2.default.createElement(
	                        "button",
	                        { id: "send", className: "btn btn-default", type: "submit" },
	                        "Enviar"
	                    )
	                )
	            )
	        );
	    }
	});
	
	exports.default = ChatForm;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\dev\\workspaces\\workspace_springboot\\springboot\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 162:
/*!************************!*\
  !*** ./chat/chat.less ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../../../~/css-loader?sourceMap!../../../../~/less-loader?sourceMap!./chat.less */ 163);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../../../~/style-loader/addStyles.js */ 165)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/less-loader/index.js?sourceMap!./chat.less", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/less-loader/index.js?sourceMap!./chat.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 163:
/*!***************************************************************************************************************************************************************************!*\
  !*** C:/dev/workspaces/workspace_springboot/springboot/~/css-loader?sourceMap!C:/dev/workspaces/workspace_springboot/springboot/~/less-loader?sourceMap!./chat/chat.less ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../../~/css-loader/lib/css-base.js */ 164)();
	// imports
	
	
	// module
	exports.push([module.id, "html,\nbody {\n  background-color: #f7f4f4;\n  display: flex;\n  flex-dorection: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n  overflow: hidden;\n}\n#charla {\n  width: 100%;\n  height: 80vh;\n  overflow-y: auto;\n  /*display: table-cell;*/\n  vertical-align: bottom;\n  /* \tborder: 1px solid black; */\n}\n#message {\n  width: 90%;\n}\n#send {\n  width: 9.5%;\n}\n#charla table td {\n  font-size: 10px;\n  padding: 3px;\n  width: 100%;\n}\n#left {\n  width: 100%;\n}\n#right {\n  width: 20%;\n}\n", "", {"version":3,"sources":["/./chat/C:/dev/workspaces/workspace_springboot/springboot/src/main/jsx/chat/chat.less","/./chat/chat.less"],"names":[],"mappings":"AAAA;;EACA,0BAAA;EACC,cAAA;EACA,uBAAA;EACA,wBAAA;EACA,oBAAA;EACA,aAAA;EACA,0CAAA;EACA,iBAAA;CCEA;ADAD;EACC,YAAA;EACA,aAAA;EACA,iBAAA;ECEC,wBAAwB;EDAtB,uBAAA;ECEF,+BAA+B;CAChC;ADCD;EACC,WAAA;CCCA;ADED;EACC,YAAA;CCAA;ADGD;EACC,gBAAA;EACA,aAAA;EACA,YAAA;CCDA;ADID;EACC,YAAA;CCFA;ADKD;EACC,WAAA;CCHA","file":"chat.less","sourcesContent":["html,body{\nbackground-color:#f7f4f4;\n display: flex;\n flex-dorection: column;\n justify-content: center;\n align-items: center;\n height: 100%;\n font-family: Arial, Helvetica, sans-serif;\n overflow:hidden;\n}\n#charla {\n\twidth:100%;\n\theight:80vh;\n\toverflow-y: auto;\n\t/*display: table-cell;*/\n    vertical-align: bottom;\n/* \tborder: 1px solid black; */\n}\n\n#message {\n\twidth:90%;\n}\n\n#send {\n\twidth:9.5%;\n}\n\n#charla table td {\n\tfont-size:10px;\n\tpadding:3px;\n\twidth:100%;\n}\n\n#left {\n\twidth:100%;\n}\n\n#right {\n\twidth:20%;\n}\n\n.rounded(@radius: 2px) {\n  -webkit-border-radius: @radius;\n  -moz-border-radius: @radius;\n  border-radius: @radius;\n  border: 1px solid black;\n  padding: 5px;\n}","html,\nbody {\n  background-color: #f7f4f4;\n  display: flex;\n  flex-dorection: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n  overflow: hidden;\n}\n#charla {\n  width: 100%;\n  height: 80vh;\n  overflow-y: auto;\n  /*display: table-cell;*/\n  vertical-align: bottom;\n  /* \tborder: 1px solid black; */\n}\n#message {\n  width: 90%;\n}\n#send {\n  width: 9.5%;\n}\n#charla table td {\n  font-size: 10px;\n  padding: 3px;\n  width: 100%;\n}\n#left {\n  width: 100%;\n}\n#right {\n  width: 20%;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),

/***/ 164:
/*!**************************************************************************************!*\
  !*** C:/dev/workspaces/workspace_springboot/springboot/~/css-loader/lib/css-base.js ***!
  \**************************************************************************************/
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),

/***/ 165:
/*!*************************************************************************************!*\
  !*** C:/dev/workspaces/workspace_springboot/springboot/~/style-loader/addStyles.js ***!
  \*************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })

});
//# sourceMappingURL=chat.js.map