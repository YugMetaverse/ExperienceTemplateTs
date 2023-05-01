/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 225:
/***/ ((__unused_webpack_module, exports) => {



// Create a Module
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Hello = void 0;
// Hello
var Hello = /*#__PURE__*/function () {
  function Hello() {
    _classCallCheck(this, Hello);
  }
  _createClass(Hello, [{
    key: "TestFunction",
    value: function TestFunction() {
      console.log("Hello");
    }
  }]);
  return Hello;
}();
exports.Hello = Hello;

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Load": () => (/* binding */ Load)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: external "YReactUMG"
var external_YReactUMG_ = __webpack_require__(575);
;// CONCATENATED MODULE: ./src/main-ui/ui-components.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var SlotOfProgressBar = {
  Size: {
    SizeRule: 1
  }
};
var StatusBar = /*#__PURE__*/function (_React$Component) {
  _inherits(StatusBar, _React$Component);
  var _super = _createSuper(StatusBar);
  function StatusBar(props) {
    var _this;
    _classCallCheck(this, StatusBar);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "onIncrement", function () {
      return _this.setState({
        percent: _this.state.percent + 0.01
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onDecrement", function () {
      return _this.setState({
        percent: _this.state.percent - 0.01
      });
    });
    if ((props.initialPercent || 0) < 0) {
      throw new Error('initialPercent < 0');
    }
    _this.state = {
      percent: props.initialPercent || 0.5
    };
    return _this;
  }
  _createClass(StatusBar, [{
    key: "color",
    get: function get() {
      return {
        R: 1 - this.state.percent,
        G: 0,
        B: this.state.percent
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(external_YReactUMG_.HorizontalBox, null, /*#__PURE__*/react.createElement(external_YReactUMG_.TextBlock, {
        Text: "".concat(this.props.name, "(").concat(this.state.percent.toFixed(2), ")")
      }), /*#__PURE__*/react.createElement(external_YReactUMG_.ProgressBar, {
        Percent: this.state.percent,
        Slot: SlotOfProgressBar,
        FillColorAndOpacity: this.color
      }), /*#__PURE__*/react.createElement(external_YReactUMG_.Button, {
        OnClicked: this.onIncrement
      }, "+"), /*#__PURE__*/react.createElement(external_YReactUMG_.Button, {
        OnClicked: this.onDecrement
      }, "-"));
    }
  }]);
  return StatusBar;
}(react.Component);
;// CONCATENATED MODULE: ./src/main-ui/index.tsx
function main_ui_typeof(obj) { "@babel/helpers - typeof"; return main_ui_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, main_ui_typeof(obj); }
function main_ui_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function main_ui_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, main_ui_toPropertyKey(descriptor.key), descriptor); } }
function main_ui_createClass(Constructor, protoProps, staticProps) { if (protoProps) main_ui_defineProperties(Constructor.prototype, protoProps); if (staticProps) main_ui_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function main_ui_toPropertyKey(arg) { var key = main_ui_toPrimitive(arg, "string"); return main_ui_typeof(key) === "symbol" ? key : String(key); }
function main_ui_toPrimitive(input, hint) { if (main_ui_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (main_ui_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function main_ui_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) main_ui_setPrototypeOf(subClass, superClass); }
function main_ui_setPrototypeOf(o, p) { main_ui_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return main_ui_setPrototypeOf(o, p); }
function main_ui_createSuper(Derived) { var hasNativeReflectConstruct = main_ui_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = main_ui_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = main_ui_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return main_ui_possibleConstructorReturn(this, result); }; }
function main_ui_possibleConstructorReturn(self, call) { if (call && (main_ui_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return main_ui_assertThisInitialized(self); }
function main_ui_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function main_ui_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function main_ui_getPrototypeOf(o) { main_ui_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return main_ui_getPrototypeOf(o); }



var SlotOfVerticalBox = {
  LayoutData: {
    Offsets: {
      Left: 120,
      Top: 120,
      Right: 480,
      Bottom: 80
    }
  }
};
var Hello = /*#__PURE__*/function (_React$Component) {
  main_ui_inherits(Hello, _React$Component);
  var _super = main_ui_createSuper(Hello);
  function Hello(props) {
    var _this;
    main_ui_classCallCheck(this, Hello);
    console.log("Hello constructor");
    _this = _super.call(this, props);
    _this.state = {
      names: props.names,
      buttonTextureIndex: 0
    };
    _this.buttonTextures = ["Texture2D'/Game/StarterContent/Textures/ImageButtonNormal.ImageButtonNormal'", "Texture2D'/Game/StarterContent/Textures/ImageButtonActivated.ImageButtonActivated'"];
    return _this;
  }
  main_ui_createClass(Hello, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react.createElement(external_YReactUMG_.CanvasPanel, null, /*#__PURE__*/react.createElement(external_YReactUMG_.VerticalBox, {
        Slot: SlotOfVerticalBox
      }, /*#__PURE__*/react.createElement(external_YReactUMG_.HorizontalBox, null, /*#__PURE__*/react.createElement(external_YReactUMG_.Button, {
        OnHovered: function OnHovered() {
          return _this2.setState({
            buttonTextureIndex: 1
          });
        },
        OnUnhovered: function OnUnhovered() {
          return _this2.setState({
            buttonTextureIndex: 0
          });
        }
      }, /*#__PURE__*/react.createElement(external_YReactUMG_.TextureImage, {
        TextureName: this.buttonTextures[this.state.buttonTextureIndex],
        bMatchSize: true
      }))), this.state.names.map(function (name, idx) {
        return /*#__PURE__*/react.createElement(StatusBar, {
          name: name,
          key: idx
        });
      })));
    }
  }]);
  return Hello;
}(react.Component);
function Load() {
  return external_YReactUMG_.ReactUMG.render( /*#__PURE__*/react.createElement(Hello, {
    names: ["Health:", "Energy:"]
  }));
}
;

/***/ }),

/***/ 418:
/***/ ((module) => {

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

/***/ 408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(418),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};__webpack_unused_export__={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;__webpack_unused_export__=r;__webpack_unused_export__=u;__webpack_unused_export__=H;__webpack_unused_export__=t;__webpack_unused_export__=y;__webpack_unused_export__=ba;
__webpack_unused_export__=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};__webpack_unused_export__=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;__webpack_unused_export__=function(a){var b=M.bind(null,a);b.type=a;return b};__webpack_unused_export__=function(){return{current:null}};__webpack_unused_export__=function(a){return{$$typeof:x,render:a}};__webpack_unused_export__=O;
__webpack_unused_export__=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};__webpack_unused_export__=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};__webpack_unused_export__=function(a,b){return Z().useCallback(a,b)};__webpack_unused_export__=function(a,b){return Z().useContext(a,b)};__webpack_unused_export__=function(){};__webpack_unused_export__=function(a,b){return Z().useEffect(a,b)};__webpack_unused_export__=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
__webpack_unused_export__=function(a,b){return Z().useLayoutEffect(a,b)};__webpack_unused_export__=function(a,b){return Z().useMemo(a,b)};__webpack_unused_export__=function(a,b,c){return Z().useReducer(a,b,c)};__webpack_unused_export__=function(a){return Z().useRef(a)};__webpack_unused_export__=function(a){return Z().useState(a)};__webpack_unused_export__="16.14.0";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ }),

/***/ 575:
/***/ ((module) => {

module.exports = YReactUMG;

/***/ }),

/***/ 508:
/***/ ((module) => {

module.exports = ue;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;


/*
@YugObject
id: 123123123123123,
itemDisplayName: UI Script,
itemType: Script,
itemPath: scripts/index.js,
baseActorToSpawn: ScriptActor,
itemDefaultProperties: []
*/
__webpack_unused_export__ = ({
  value: true
});
var dep_1 = __webpack_require__(225);
var UE = __webpack_require__(508);
var UI = __webpack_require__(35);
var react_umg_1 = __webpack_require__(575);
var world = globalThis.World;
console.log("Current Platform: " + UE.GameplayStatics.GetPlatformName());
console.log("Hello World");
var hello = new dep_1.Hello();
hello.description;
hello.TestFunction();
react_umg_1.ReactUMG.init(world);
UI.Load();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FBVUEsSUFBQVcsS0FBQSxHQUFBQyxtQkFBQTtBQUVBLElBQUFDLEVBQUEsR0FBQUQsbUJBQUE7QUFDQSxJQUFBRSxFQUFBLEdBQUFGLG1CQUFBO0FBQ0EsSUFBQUcsV0FBQSxHQUFBSCxtQkFBQTtBQUNBLElBQU1JLEtBQUssR0FBY0MsVUFBVSxDQUFDQyxLQUFLO0FBRXpDdkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLEdBQUdpRSxFQUFFLENBQUNNLGVBQWUsQ0FBQ0MsZUFBZSxFQUFFLENBQUM7QUFDeEV6RSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFFMUIsSUFBTXlFLEtBQUssR0FBRyxJQUFJVixLQUFBLENBQUFuRSxLQUFLLEVBQUU7QUFDekI2RSxLQUFLLENBQUNDLFdBQVc7QUFDakJELEtBQUssQ0FBQzNFLFlBQVksRUFBRTtBQUNwQnFFLFdBQUEsQ0FBQXhCLFFBQVEsQ0FBQ2dDLElBQUksQ0FBQ1AsS0FBSyxDQUFDO0FBQ3BCRixFQUFFLENBQUNKLElBQUksRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja3Rlc3QvLi9zcmMvZGVwLnRzIiwid2VicGFjazovL3dlYnBhY2t0ZXN0Ly4vc3JjL21haW4tdWkvdWktY29tcG9uZW50cy50c3giLCJ3ZWJwYWNrOi8vd2VicGFja3Rlc3QvLi9zcmMvbWFpbi11aS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vd2VicGFja3Rlc3QvLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVzdC8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFja3Rlc3QvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFja3Rlc3QvZXh0ZXJuYWwgdmFyIFwiWVJlYWN0VU1HXCIiLCJ3ZWJwYWNrOi8vd2VicGFja3Rlc3QvZXh0ZXJuYWwgdmFyIFwidWVcIiIsIndlYnBhY2s6Ly93ZWJwYWNrdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja3Rlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2t0ZXN0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZSBhIE1vZHVsZVxuXG4vLyBIZWxsb1xuXG5leHBvcnQgIGNsYXNzIEhlbGxvIHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGNyZWF0ZWRfYXQ6IERhdGU7XG4gICAgdXBkYXRlZF9hdDogRGF0ZTtcbiAgICBUZXN0RnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIik7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgSG9yaXpvbnRhbEJveCwgVGV4dEJsb2NrLCBQcm9ncmVzc0JhciwgSG9yaXpvbnRhbEJveFNsb3QgfSBmcm9tIFwicmVhY3QtdW1nXCI7XG5pbXBvcnQge0xpbmVhckNvbG9yfSBmcm9tICd1ZSdcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGluaXRpYWxQZXJjZW50PzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICAgIHBlcmNlbnQ6IG51bWJlcjtcbn1cblxubGV0IFNsb3RPZlByb2dyZXNzQmFyID0ge1xuICAgIFNpemU6IHtcbiAgICAgICAgU2l6ZVJ1bGU6IDFcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBpZiAoKHByb3BzLmluaXRpYWxQZXJjZW50IHx8IDApIDwgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbml0aWFsUGVyY2VudCA8IDAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwZXJjZW50OiBwcm9wcy5pbml0aWFsUGVyY2VudCB8fCAwLjVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgY29sb3IoKTogUGFydGlhbDxMaW5lYXJDb2xvcj4ge1xuICAgICAgICByZXR1cm4ge1I6IDEgLSB0aGlzLnN0YXRlLnBlcmNlbnQgLCBHOiAwLCBCOiB0aGlzLnN0YXRlLnBlcmNlbnR9O1xuICAgIH1cblxuICAgIG9uSW5jcmVtZW50ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGVyY2VudDogdGhpcy5zdGF0ZS5wZXJjZW50ICsgMC4wMX0pO1xuICAgIG9uRGVjcmVtZW50ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGVyY2VudDogdGhpcy5zdGF0ZS5wZXJjZW50IC0gMC4wMX0pO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEhvcml6b250YWxCb3g+XG4gICAgICAgICAgICAgICAgPFRleHRCbG9jayBUZXh0PXtgJHt0aGlzLnByb3BzLm5hbWV9KCR7dGhpcy5zdGF0ZS5wZXJjZW50LnRvRml4ZWQoMil9KWB9Lz5cbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NCYXIgUGVyY2VudD17dGhpcy5zdGF0ZS5wZXJjZW50fSBTbG90PXtTbG90T2ZQcm9ncmVzc0Jhcn0gRmlsbENvbG9yQW5kT3BhY2l0eT17dGhpcy5jb2xvcn0vPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gT25DbGlja2VkPXt0aGlzLm9uSW5jcmVtZW50fSA+KzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gT25DbGlja2VkPXt0aGlzLm9uRGVjcmVtZW50fSA+LTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Ib3Jpem9udGFsQm94PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1N0YXR1c0Jhcn0gZnJvbSAnLi91aS1jb21wb25lbnRzJ1xuaW1wb3J0IHsgVmVydGljYWxCb3gsIENhbnZhc1BhbmVsLCBSZWFjdFVNRywgQ2FudmFzUGFuZWxTbG90LCBCdXR0b24sIEhvcml6b250YWxCb3gsIFRleHR1cmVJbWFnZSB9IGZyb20gXCJyZWFjdC11bWdcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBuYW1lczogc3RyaW5nW107XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gICAgbmFtZXM6IHN0cmluZ1tdO1xuICAgIGJ1dHRvblRleHR1cmVJbmRleDogbnVtYmVyO1xufVxuXG5sZXQgU2xvdE9mVmVydGljYWxCb3g6IGFueSA9IHtcbiAgICBMYXlvdXREYXRhOiB7XG4gICAgICAgIE9mZnNldHM6IHtcbiAgICAgICAgICAgIExlZnQ6IDEyMCxcbiAgICAgICAgICAgIFRvcDogMTIwLFxuICAgICAgICAgICAgUmlnaHQ6IDQ4MCxcbiAgICAgICAgICAgIEJvdHRvbTogODBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgSGVsbG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gICAgYnV0dG9uVGV4dHVyZXM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG8gY29uc3RydWN0b3JcIik7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWVzOiBwcm9wcy5uYW1lcyxcbiAgICAgICAgICAgIGJ1dHRvblRleHR1cmVJbmRleCA6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnV0dG9uVGV4dHVyZXMgPSBbXG4gICAgICAgICAgICBcIlRleHR1cmUyRCcvR2FtZS9TdGFydGVyQ29udGVudC9UZXh0dXJlcy9JbWFnZUJ1dHRvbk5vcm1hbC5JbWFnZUJ1dHRvbk5vcm1hbCdcIixcbiAgICAgICAgICAgIFwiVGV4dHVyZTJEJy9HYW1lL1N0YXJ0ZXJDb250ZW50L1RleHR1cmVzL0ltYWdlQnV0dG9uQWN0aXZhdGVkLkltYWdlQnV0dG9uQWN0aXZhdGVkJ1wiXG4gICAgICAgIF1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhbnZhc1BhbmVsPlxuICAgICAgICAgICAgICAgIDxWZXJ0aWNhbEJveCBTbG90PXtTbG90T2ZWZXJ0aWNhbEJveH0+XG4gICAgICAgICAgICAgICAgICAgIDxIb3Jpem9udGFsQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBPbkhvdmVyZWQ9eygpID0+IHRoaXMuc2V0U3RhdGUoe2J1dHRvblRleHR1cmVJbmRleDogMX0pfSBPblVuaG92ZXJlZD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7YnV0dG9uVGV4dHVyZUluZGV4OiAwfSl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dHVyZUltYWdlIFRleHR1cmVOYW1lPXt0aGlzLmJ1dHRvblRleHR1cmVzW3RoaXMuc3RhdGUuYnV0dG9uVGV4dHVyZUluZGV4XX0gYk1hdGNoU2l6ZT17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvSG9yaXpvbnRhbEJveD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubmFtZXMubWFwKChuYW1lLCBpZHgpID0+IDxTdGF0dXNCYXIgbmFtZT17bmFtZX0ga2V5PXtpZHh9Lz4pfVxuICAgICAgICAgICAgICAgIDwvVmVydGljYWxCb3g+XG4gICAgICAgICAgICA8L0NhbnZhc1BhbmVsPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvYWQoKXtcbiAgICByZXR1cm4gUmVhY3RVTUcucmVuZGVyKFxuICAgICAgICA8SGVsbG8gbmFtZXM9e1tcIkhlYWx0aDpcIiwgXCJFbmVyZ3k6XCJdfS8+XG4gICAgKTtcbn07XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xNC4wXG4gKiByZWFjdC5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgbD1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxuPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IscD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLHE9bj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LHI9bj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsdD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCx1PW4/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LHY9bj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksdz1uP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLHg9bj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIseT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyx6PW4/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6NjAxMTUsQT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOlxuNjAxMTYsQj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gQyhhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1cbnZhciBEPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxFPXt9O2Z1bmN0aW9uIEYoYSxiLGMpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RTt0aGlzLnVwZGF0ZXI9Y3x8RH1GLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0YucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YSl0aHJvdyBFcnJvcihDKDg1KSk7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtGLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtcbmZ1bmN0aW9uIEcoKXt9Ry5wcm90b3R5cGU9Ri5wcm90b3R5cGU7ZnVuY3Rpb24gSChhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1FO3RoaXMudXBkYXRlcj1jfHxEfXZhciBJPUgucHJvdG90eXBlPW5ldyBHO0kuY29uc3RydWN0b3I9SDtsKEksRi5wcm90b3R5cGUpO0kuaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEo9e2N1cnJlbnQ6bnVsbH0sSz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEw9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIE0oYSxiLGMpe3ZhciBlLGQ9e30sZz1udWxsLGs9bnVsbDtpZihudWxsIT1iKWZvcihlIGluIHZvaWQgMCE9PWIucmVmJiYoaz1iLnJlZiksdm9pZCAwIT09Yi5rZXkmJihnPVwiXCIrYi5rZXkpLGIpSy5jYWxsKGIsZSkmJiFMLmhhc093blByb3BlcnR5KGUpJiYoZFtlXT1iW2VdKTt2YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZC5jaGlsZHJlbj1jO2Vsc2UgaWYoMTxmKXtmb3IodmFyIGg9QXJyYXkoZiksbT0wO208ZjttKyspaFttXT1hcmd1bWVudHNbbSsyXTtkLmNoaWxkcmVuPWh9aWYoYSYmYS5kZWZhdWx0UHJvcHMpZm9yKGUgaW4gZj1hLmRlZmF1bHRQcm9wcyxmKXZvaWQgMD09PWRbZV0mJihkW2VdPWZbZV0pO3JldHVybnskJHR5cGVvZjpwLHR5cGU6YSxrZXk6ZyxyZWY6ayxwcm9wczpkLF9vd25lcjpKLmN1cnJlbnR9fVxuZnVuY3Rpb24gTihhLGIpe3JldHVybnskJHR5cGVvZjpwLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTyhhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09cH1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiKyhcIlwiK2EpLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBQPS9cXC8rL2csUT1bXTtmdW5jdGlvbiBSKGEsYixjLGUpe2lmKFEubGVuZ3RoKXt2YXIgZD1RLnBvcCgpO2QucmVzdWx0PWE7ZC5rZXlQcmVmaXg9YjtkLmZ1bmM9YztkLmNvbnRleHQ9ZTtkLmNvdW50PTA7cmV0dXJuIGR9cmV0dXJue3Jlc3VsdDphLGtleVByZWZpeDpiLGZ1bmM6Yyxjb250ZXh0OmUsY291bnQ6MH19XG5mdW5jdGlvbiBTKGEpe2EucmVzdWx0PW51bGw7YS5rZXlQcmVmaXg9bnVsbDthLmZ1bmM9bnVsbDthLmNvbnRleHQ9bnVsbDthLmNvdW50PTA7MTA+US5sZW5ndGgmJlEucHVzaChhKX1cbmZ1bmN0aW9uIFQoYSxiLGMsZSl7dmFyIGQ9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWR8fFwiYm9vbGVhblwiPT09ZClhPW51bGw7dmFyIGc9ITE7aWYobnVsbD09PWEpZz0hMDtlbHNlIHN3aXRjaChkKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmc9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHA6Y2FzZSBxOmc9ITB9fWlmKGcpcmV0dXJuIGMoZSxhLFwiXCI9PT1iP1wiLlwiK1UoYSwwKTpiKSwxO2c9MDtiPVwiXCI9PT1iP1wiLlwiOmIrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGs9MDtrPGEubGVuZ3RoO2srKyl7ZD1hW2tdO3ZhciBmPWIrVShkLGspO2crPVQoZCxmLGMsZSl9ZWxzZSBpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhP2Y9bnVsbDooZj1CJiZhW0JdfHxhW1wiQEBpdGVyYXRvclwiXSxmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBmP2Y6bnVsbCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGs9XG4wOyEoZD1hLm5leHQoKSkuZG9uZTspZD1kLnZhbHVlLGY9YitVKGQsaysrKSxnKz1UKGQsZixjLGUpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWQpdGhyb3cgYz1cIlwiK2EsRXJyb3IoQygzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09Yz9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpjLFwiXCIpKTtyZXR1cm4gZ31mdW5jdGlvbiBWKGEsYixjKXtyZXR1cm4gbnVsbD09YT8wOlQoYSxcIlwiLGIsYyl9ZnVuY3Rpb24gVShhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShhLmtleSk6Yi50b1N0cmluZygzNil9ZnVuY3Rpb24gVyhhLGIpe2EuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyl9XG5mdW5jdGlvbiBhYShhLGIsYyl7dmFyIGU9YS5yZXN1bHQsZD1hLmtleVByZWZpeDthPWEuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyk7QXJyYXkuaXNBcnJheShhKT9YKGEsZSxjLGZ1bmN0aW9uKGEpe3JldHVybiBhfSk6bnVsbCE9YSYmKE8oYSkmJihhPU4oYSxkKyghYS5rZXl8fGImJmIua2V5PT09YS5rZXk/XCJcIjooXCJcIithLmtleSkucmVwbGFjZShQLFwiJCYvXCIpK1wiL1wiKStjKSksZS5wdXNoKGEpKX1mdW5jdGlvbiBYKGEsYixjLGUsZCl7dmFyIGc9XCJcIjtudWxsIT1jJiYoZz0oXCJcIitjKS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpO2I9UihiLGcsZSxkKTtWKGEsYWEsYik7UyhiKX12YXIgWT17Y3VycmVudDpudWxsfTtmdW5jdGlvbiBaKCl7dmFyIGE9WS5jdXJyZW50O2lmKG51bGw9PT1hKXRocm93IEVycm9yKEMoMzIxKSk7cmV0dXJuIGF9XG52YXIgYmE9e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6WSxSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzp7c3VzcGVuc2U6bnVsbH0sUmVhY3RDdXJyZW50T3duZXI6SixJc1NvbWVSZW5kZXJlckFjdGluZzp7Y3VycmVudDohMX0sYXNzaWduOmx9O2V4cG9ydHMuQ2hpbGRyZW49e21hcDpmdW5jdGlvbihhLGIsYyl7aWYobnVsbD09YSlyZXR1cm4gYTt2YXIgZT1bXTtYKGEsZSxudWxsLGIsYyk7cmV0dXJuIGV9LGZvckVhY2g6ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGw9PWEpcmV0dXJuIGE7Yj1SKG51bGwsbnVsbCxiLGMpO1YoYSxXLGIpO1MoYil9LGNvdW50OmZ1bmN0aW9uKGEpe3JldHVybiBWKGEsZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sbnVsbCl9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7dmFyIGI9W107WChhLGIsbnVsbCxmdW5jdGlvbihhKXtyZXR1cm4gYX0pO3JldHVybiBifSxvbmx5OmZ1bmN0aW9uKGEpe2lmKCFPKGEpKXRocm93IEVycm9yKEMoMTQzKSk7cmV0dXJuIGF9fTtcbmV4cG9ydHMuQ29tcG9uZW50PUY7ZXhwb3J0cy5GcmFnbWVudD1yO2V4cG9ydHMuUHJvZmlsZXI9dTtleHBvcnRzLlB1cmVDb21wb25lbnQ9SDtleHBvcnRzLlN0cmljdE1vZGU9dDtleHBvcnRzLlN1c3BlbnNlPXk7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1iYTtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcihDKDI2NyxhKSk7dmFyIGU9bCh7fSxhLnByb3BzKSxkPWEua2V5LGc9YS5yZWYsaz1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGc9Yi5yZWYsaz1KLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZD1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGY9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoaCBpbiBiKUsuY2FsbChiLGgpJiYhTC5oYXNPd25Qcm9wZXJ0eShoKSYmKGVbaF09dm9pZCAwPT09YltoXSYmdm9pZCAwIT09Zj9mW2hdOmJbaF0pfXZhciBoPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09aCllLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGgpe2Y9QXJyYXkoaCk7Zm9yKHZhciBtPTA7bTxoO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49Zn1yZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEudHlwZSxcbmtleTpkLHJlZjpnLHByb3BzOmUsX293bmVyOmt9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjp3LF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLF9jdXJyZW50VmFsdWU6YSxfY3VycmVudFZhbHVlMjphLF90aHJlYWRDb3VudDowLFByb3ZpZGVyOm51bGwsQ29uc3VtZXI6bnVsbH07YS5Qcm92aWRlcj17JCR0eXBlb2Y6dixfY29udGV4dDphfTtyZXR1cm4gYS5Db25zdW1lcj1hfTtleHBvcnRzLmNyZWF0ZUVsZW1lbnQ9TTtleHBvcnRzLmNyZWF0ZUZhY3Rvcnk9ZnVuY3Rpb24oYSl7dmFyIGI9TS5iaW5kKG51bGwsYSk7Yi50eXBlPWE7cmV0dXJuIGJ9O2V4cG9ydHMuY3JlYXRlUmVmPWZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bnVsbH19O2V4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6eCxyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TztcbmV4cG9ydHMubGF6eT1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6QSxfY3RvcjphLF9zdGF0dXM6LTEsX3Jlc3VsdDpudWxsfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOnosdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnVzZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFooKS51c2VDYWxsYmFjayhhLGIpfTtleHBvcnRzLnVzZUNvbnRleHQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gWigpLnVzZUNvbnRleHQoYSxiKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBaKCkudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFooKS51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixjKX07XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBaKCkudXNlTGF5b3V0RWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTWVtbz1mdW5jdGlvbihhLGIpe3JldHVybiBaKCkudXNlTWVtbyhhLGIpfTtleHBvcnRzLnVzZVJlZHVjZXI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBaKCkudXNlUmVkdWNlcihhLGIsYyl9O2V4cG9ydHMudXNlUmVmPWZ1bmN0aW9uKGEpe3JldHVybiBaKCkudXNlUmVmKGEpfTtleHBvcnRzLnVzZVN0YXRlPWZ1bmN0aW9uKGEpe3JldHVybiBaKCkudXNlU3RhdGUoYSl9O2V4cG9ydHMudmVyc2lvbj1cIjE2LjE0LjBcIjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBZUmVhY3RVTUc7IiwibW9kdWxlLmV4cG9ydHMgPSB1ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qXG5AWXVnT2JqZWN0XG5pZDogMTIzMTIzMTIzMTIzMTIzLFxuaXRlbURpc3BsYXlOYW1lOiBVSSBTY3JpcHQsXG5pdGVtVHlwZTogU2NyaXB0LFxuaXRlbVBhdGg6IHNjcmlwdHMvaW5kZXguanMsXG5iYXNlQWN0b3JUb1NwYXduOiBTY3JpcHRBY3Rvcixcbml0ZW1EZWZhdWx0UHJvcGVydGllczogW11cbiovXG5cbmltcG9ydCB7IEhlbGxvIH0gZnJvbSBcIi4vZGVwXCI7XG5pbXBvcnQgKiBhcyBwdWVydHMgZnJvbSBcInB1ZXJ0c1wiO1xuaW1wb3J0ICogYXMgVUUgZnJvbSAgXCJ1ZVwiO1xuaW1wb3J0ICogYXMgVUkgZnJvbSAnLi9tYWluLXVpJztcbmltcG9ydCB7UmVhY3RVTUd9IGZyb20gXCJyZWFjdC11bWdcIjtcbmNvbnN0IHdvcmxkIDogVUUuV29ybGQgPSBnbG9iYWxUaGlzLldvcmxkO1xuXG5jb25zb2xlLmxvZyhcIkN1cnJlbnQgUGxhdGZvcm06IFwiICsgVUUuR2FtZXBsYXlTdGF0aWNzLkdldFBsYXRmb3JtTmFtZSgpKTtcbmNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGRcIik7XG5cbmNvbnN0IGhlbGxvID0gbmV3IEhlbGxvKCk7XG5oZWxsby5kZXNjcmlwdGlvbjtcbmhlbGxvLlRlc3RGdW5jdGlvbigpO1xuUmVhY3RVTUcuaW5pdCh3b3JsZCk7XG5VSS5Mb2FkKCk7XG4iXSwibmFtZXMiOlsiX3R5cGVvZiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsImFyZyIsIl90b1ByaW1pdGl2ZSIsIlN0cmluZyIsImlucHV0IiwiaGludCIsInByaW0iLCJ0b1ByaW1pdGl2ZSIsInVuZGVmaW5lZCIsInJlcyIsImNhbGwiLCJOdW1iZXIiLCJIZWxsbyIsInZhbHVlIiwiVGVzdEZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsImV4cG9ydHMiLCJSZWFjdCIsIkJ1dHRvbiIsIkhvcml6b250YWxCb3giLCJUZXh0QmxvY2siLCJQcm9ncmVzc0JhciIsIlNsb3RPZlByb2dyZXNzQmFyIiwiU2l6ZSIsIlNpemVSdWxlIiwiU3RhdHVzQmFyIiwiX1JlYWN0JENvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzIiwiX2RlZmluZVByb3BlcnR5IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInNldFN0YXRlIiwicGVyY2VudCIsInN0YXRlIiwiaW5pdGlhbFBlcmNlbnQiLCJFcnJvciIsImdldCIsIlIiLCJHIiwiQiIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJUZXh0IiwiY29uY2F0IiwibmFtZSIsInRvRml4ZWQiLCJQZXJjZW50IiwiU2xvdCIsIkZpbGxDb2xvckFuZE9wYWNpdHkiLCJjb2xvciIsIk9uQ2xpY2tlZCIsIm9uSW5jcmVtZW50Iiwib25EZWNyZW1lbnQiLCJDb21wb25lbnQiLCJWZXJ0aWNhbEJveCIsIkNhbnZhc1BhbmVsIiwiUmVhY3RVTUciLCJUZXh0dXJlSW1hZ2UiLCJTbG90T2ZWZXJ0aWNhbEJveCIsIkxheW91dERhdGEiLCJPZmZzZXRzIiwiTGVmdCIsIlRvcCIsIlJpZ2h0IiwiQm90dG9tIiwibmFtZXMiLCJidXR0b25UZXh0dXJlSW5kZXgiLCJidXR0b25UZXh0dXJlcyIsIl90aGlzMiIsIk9uSG92ZXJlZCIsIk9uVW5ob3ZlcmVkIiwiVGV4dHVyZU5hbWUiLCJiTWF0Y2hTaXplIiwibWFwIiwiaWR4IiwiTG9hZCIsImRlcF8xIiwicmVxdWlyZSIsIlVFIiwiVUkiLCJyZWFjdF91bWdfMSIsIndvcmxkIiwiZ2xvYmFsVGhpcyIsIldvcmxkIiwiR2FtZXBsYXlTdGF0aWNzIiwiR2V0UGxhdGZvcm1OYW1lIiwiaGVsbG8iLCJkZXNjcmlwdGlvbiIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9