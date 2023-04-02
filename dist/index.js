"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSSProvider = void 0;
exports["default"] = withCss;
exports.useCss = useCss;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var styles = {};
var CSSContext = /*#__PURE__*/(0, _react.createContext)();
var CSSProvider = CSSContext.Provider;
exports.CSSProvider = CSSProvider;
var injectCss = function injectCss(cssModules) {
  cssModules.map(function (cssModule) {
    var id = "".concat(cssModule['0']['0']);
    if (!styles[id]) {
      var css = document.getElementById('css');
      if (!css) {
        css = document.createElement('style');
        document.head.appendChild(css);
      }
      if (css && css.innerHTML.indexOf(cssModule['0']['1']) == -1) {
        css.innerHTML = css.innerHTML + cssModule['0']['1'];
      }
    }
    styles[id] = (styles[id] || 0) + 1;
  });
};
var removeCss = function removeCss(cssModules) {
  cssModules.map(function (cssModule) {
    var id = "".concat(cssModule['0']['0']);
    styles[id] = (styles[id] || 0) - 1;
    if (styles[id] < 1) {
      var css = document.getElementById('css');
      css.innerHTML = css.innerHTML.replace(cssModule['0']['1'], '');
    }
  });
};
var serverCss = function serverCss(cssModules, cssSet) {
  cssModules.map(function (cssModule) {
    cssSet.add(cssModule['0']['1']);
  });
};
function withCss() {
  for (var _len = arguments.length, cssModule = new Array(_len), _key = 0; _key < _len; _key++) {
    cssModule[_key] = arguments[_key];
  }
  return function (Com) {
    return /*#__PURE__*/function (_Component) {
      _inherits(WithCSS, _Component);
      var _super = _createSuper(WithCSS);
      function WithCSS() {
        _classCallCheck(this, WithCSS);
        return _super.apply(this, arguments);
      }
      _createClass(WithCSS, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          injectCss(cssModule);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          removeCss(cssModule);
        }
      }, {
        key: "render",
        value: function render() {
          var _this = this;
          if (typeof window != 'undefined') return /*#__PURE__*/_react["default"].createElement(Com, this.props);
          return /*#__PURE__*/_react["default"].createElement(CSSContext.Consumer, null, function (cssSet) {
            serverCss(cssModule, cssSet);
            return /*#__PURE__*/_react["default"].createElement(Com, _this.props);
          });
        }
      }]);
      return WithCSS;
    }(_react.Component);
  };
}
function useCss() {
  for (var _len2 = arguments.length, cssModule = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    cssModule[_key2] = arguments[_key2];
  }
  var cssSet = (0, _react.useContext)(CSSContext);
  (0, _react.useEffect)(function () {
    injectCss(cssModule);
    return function () {
      removeCss(cssModule);
    };
  }, []);
  if (typeof window != 'undefined') return cssModule;
  serverCss(cssModule, cssSet);
  return cssModule;
}
