/**
 * StockDB v0.0.5
 * https://github.com/stockdb/stockdb-js
 * MIT License
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["StockDB"] = factory();
	else
		root["StockDB"] = factory();
})(this, function() {
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
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var New = exports.New = function New(uri, auth) {
	    var token = window.btoa(auth);
	    var stockdb = hprose.HttpClient(uri, ['PutOHLC', 'PutOHLCs', 'GetTimeRange', 'GetOHLCs', 'GetDepth']);

	    stockdb.setHeader('Authorization', 'Basic ' + token);

	    return stockdb;
	};

	var Second = exports.Second = 1;
	var Minute = exports.Minute = 60;
	var Hour = exports.Hour = 3600;
	var Day = exports.Day = 86400;
	var Week = exports.Week = 604800;
	var Month = exports.Month = 2592000;
	var Quarter = exports.Quarter = 7776000;
	var Year = exports.Year = 31536000;

/***/ }
/******/ ])
});
;