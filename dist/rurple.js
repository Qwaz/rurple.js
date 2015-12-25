(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PIXI"));
	else if(typeof define === 'function' && define.amd)
		define(["PIXI"], factory);
	else if(typeof exports === 'object')
		exports["rurple"] = factory(require("PIXI"));
	else
		root["rurple"] = factory(root["PIXI"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	__webpack_require__.p = "dist/";

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
	exports.Player = undefined;

	var _player = __webpack_require__(1);

	var player = _interopRequireWildcard(_player);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var Player = exports.Player = player.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pixi = __webpack_require__(2);

	var PIXI = _interopRequireWildcard(_pixi);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Player = (function () {
	    function Player(config) {
	        _classCallCheck(this, Player);

	        config = config || {};
	        config.renderWidth = config.renderWidth || 800;
	        config.renderHeight = config.renderHeight || 600;
	        config.width = config.width || 15;
	        config.height = config.height || 15;
	        config.backgroundColor = config.hasOwnProperty('backgroundColor') ? config.backgroundColor : 0xABCDEF;
	        config.lineColor = config.hasOwnProperty('lineColor') ? config.lineColor : 0x000000;
	        this.config = config;

	        var GAP = 10;
	        var gridSize = Math.min((this.config.renderWidth - 2 * GAP) / this.config.width, (this.config.renderHeight - 2 * GAP) / this.config.height);

	        this.stage = new PIXI.Container();

	        this.map = new PIXI.Graphics();
	        this.map.lineStyle(2, 0x000000, 1);
	        for (var i = 1; i < this.config.width; i++) {
	            this.map.moveTo(i * gridSize, 0);
	            this.map.lineTo(i * gridSize, this.config.height * gridSize);
	        }

	        for (var i = 1; i < this.config.width; i++) {
	            this.map.moveTo(0, i * gridSize);
	            this.map.lineTo(this.config.width * gridSize, i * gridSize);
	        }
	        this.map.lineStyle(5, 0x000000, 1);
	        this.map.moveTo(0, 0);
	        this.map.lineTo(this.config.width * gridSize, 0);
	        this.map.lineTo(this.config.width * gridSize, this.config.height * gridSize);
	        this.map.lineTo(0, this.config.height * gridSize);
	        this.map.lineTo(0, 0);

	        this.stage.addChild(this.map);
	        this.map.x = this.config.renderWidth / 2 - this.map.width / 2;
	        this.map.y = this.config.renderHeight / 2 - this.map.height / 2;
	    }

	    _createClass(Player, [{
	        key: 'initRenderer',
	        value: function initRenderer(element) {
	            console.log(this.config.backgroundColor);
	            this.renderer = PIXI.autoDetectRenderer(this.config.renderWidth, this.config.renderHeight, {
	                backgroundColor: this.config.backgroundColor
	            });
	            element.appendChild(this.renderer.view);
	        }
	    }, {
	        key: 'startAnimate',
	        value: function startAnimate() {
	            var _this = this;

	            var animate = function animate() {
	                requestAnimationFrame(animate);
	                _this.renderer.render(_this.stage);
	            };
	            animate();
	        }
	    }]);

	    return Player;
	})();

	exports.default = Player;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;