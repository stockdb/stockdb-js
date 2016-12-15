/**
 * StockDB v0.1.4
 * https://github.com/stockdb/stockdb-js
 * MIT License
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("hprose-html5/dist/hprose-html5"));
	else if(typeof define === 'function' && define.amd)
		define(["hprose-html5/dist/hprose-html5"], factory);
	else if(typeof exports === 'object')
		exports["StockDB"] = factory(require("hprose-html5/dist/hprose-html5"));
	else
		root["StockDB"] = factory(root["hprose-html5/dist/hprose-html5"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _hproseHtml = __webpack_require__(1);

	exports.default = {
	    New: function New(uri, auth) {
	        var token = window.btoa(auth);
	        var stockdb = _hproseHtml.Client.create(uri, ['PutOHLC', 'PutOHLCs', 'PutOrder', 'PutOrders', 'GetStats', 'GetMarkets', 'GetSymbols', 'GetTimeRange', 'GetOHLCs', 'GetDepth']);
	        stockdb.setHeader('Authorization', 'Basic ' + token);
	        return stockdb;
	    },
	    Second: 1,
	    Minute: 60,
	    Hour: 3600,
	    Day: 86400,
	    Week: 604800,
	    Month: 2592000,
	    Quarter: 7776000,
	    Year: 31536000
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;