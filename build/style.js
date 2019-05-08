"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module))) module.exports = t();else if ("function" == typeof define && define.amd) define([], t);else {
    var n = t();for (var o in n) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[o] = n[o];
    }
  }
}("undefined" != typeof self ? self : undefined, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;var r = n[o] = { i: o, l: !1, exports: {} };return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }var n = {};return t.m = e, t.c = n, t.d = function (e, n, o) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: o });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "build/", t(t.s = 10);
  }({ 10: function _(e, t) {} });
});