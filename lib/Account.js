"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Account;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrap = require("react-bootstrap");
require("./css/customThemes.css");
var _Navbar = _interopRequireDefault(require("./Navbar.js"));
var _Footer = _interopRequireDefault(require("./Footer.js"));
var _Header = _interopRequireDefault(require("./Header.js"));
var _config = require("../config/config");
var _AuthContext = require("../context/AuthContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Account() {
  var _useContext = (0, _react.useContext)(_AuthContext.AuthContext),
    user = _useContext.user,
    logout = _useContext.logout;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    currentPassword = _useState2[0],
    setCurrentPassword = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    newPassword = _useState4[0],
    setNewPassword = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    confirmPassword = _useState6[0],
    setConfirmPassword = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    status = _useState8[0],
    setStatus = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    showDeleteModal = _useState0[0],
    setShowDeleteModal = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    deleting = _useState10[0],
    setDeleting = _useState10[1];
  var handleChangePassword = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var res, errData, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();
            if (!(newPassword !== confirmPassword)) {
              _context.n = 1;
              break;
            }
            setStatus("Passwords do not match");
            return _context.a(2);
          case 1:
            _context.p = 1;
            _context.n = 2;
            return fetch("".concat(_config.baseURL, "/auth/change-password"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(localStorage.getItem("token"))
              },
              body: JSON.stringify({
                currentPassword: currentPassword,
                newPassword: newPassword
              })
            });
          case 2:
            res = _context.v;
            if (res.ok) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return res.json();
          case 3:
            errData = _context.v;
            setStatus(errData.message || "Failed to change password");
            return _context.a(2);
          case 4:
            setStatus("Password changed successfully");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            setStatus("Error changing password");
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1, 5]]);
    }));
    return function handleChangePassword(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleDeleteAccount = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var res, errData, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setDeleting(true);
            setStatus("");
            _context2.p = 1;
            _context2.n = 2;
            return fetch("".concat(_config.baseURL, "/auth/delete-account"), {
              method: "DELETE",
              headers: {
                Authorization: "Bearer ".concat(localStorage.getItem("token"))
              }
            });
          case 2:
            res = _context2.v;
            if (res.ok) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return res.json();
          case 3:
            errData = _context2.v;
            setStatus(errData.message || "Failed to delete account");
            setDeleting(false);
            setShowDeleteModal(false);
            return _context2.a(2);
          case 4:
            // Logout user and redirect to homepage or login
            logout();
            setShowDeleteModal(false);
            // Redirect, for example:
            window.location.href = "/";
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
            setStatus("Error deleting account");
            setDeleting(false);
            setShowDeleteModal(false);
          case 6:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 5]]);
    }));
    return function handleDeleteAccount() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Container, {
    style: {
      width: "85%"
    },
    fluid: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_Navbar["default"], null)), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
    md: {
      span: 6,
      offset: 3
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "mb-4 text-center"
  }, "Account Details"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Name:"), " ", (user === null || user === void 0 ? void 0 : user.name) || "-"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Email:"), " ", (user === null || user === void 0 ? void 0 : user.email) || "-"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Registered on:"), " ", user !== null && user !== void 0 && user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "-"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form, {
    onSubmit: handleChangePassword
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
    className: "mb-3",
    controlId: "currentPassword"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, "Current Password"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Control, {
    type: "password",
    value: currentPassword,
    onChange: function onChange(e) {
      return setCurrentPassword(e.target.value);
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
    className: "mb-3",
    controlId: "newPassword"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, "New Password"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Control, {
    type: "password",
    value: newPassword,
    onChange: function onChange(e) {
      return setNewPassword(e.target.value);
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
    className: "mb-3",
    controlId: "confirmPassword"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, null, "Confirm New Password"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Control, {
    type: "password",
    value: confirmPassword,
    onChange: function onChange(e) {
      return setConfirmPassword(e.target.value);
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    variant: "primary",
    type: "submit",
    className: "w-100"
  }, "Change Password")), status && /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-3 text-center",
    style: {
      color: "red"
    }
  }, status), /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-grid mt-5"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    variant: "danger",
    onClick: function onClick() {
      return setShowDeleteModal(true);
    },
    disabled: deleting
  }, "Delete Account")), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal, {
    show: showDeleteModal,
    onHide: function onHide() {
      return setShowDeleteModal(false);
    },
    centered: true
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Title, null, "Confirm Account Deletion")), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Body, null, /*#__PURE__*/_react["default"].createElement("p", null, "Are you sure you want to delete your account? This action cannot be undone.")), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Modal.Footer, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    variant: "secondary",
    onClick: function onClick() {
      return setShowDeleteModal(false);
    }
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    variant: "danger",
    onClick: handleDeleteAccount,
    disabled: deleting
  }, deleting ? "Deleting..." : "Yes, Delete"))))), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react["default"].createElement(_Footer["default"], null)))));
}