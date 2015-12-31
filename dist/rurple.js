(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PIXI"));
	else if(typeof define === 'function' && define.amd)
		define(["PIXI"], factory);
	else if(typeof exports === 'object')
		exports["rurple"] = factory(require("PIXI"));
	else
		root["rurple"] = factory(root["PIXI"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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

	var _map_container = __webpack_require__(2);

	var _map_container2 = _interopRequireDefault(_map_container);

	var _map_data = __webpack_require__(4);

	var _map_data2 = _interopRequireDefault(_map_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Player = (function () {
	    function Player(mapData, rendererConfig) {
	        _classCallCheck(this, Player);

	        this.mapData = new _map_data2.default(mapData);
	        this.map = new _map_container2.default(rendererConfig, this.mapData);
	    }

	    _createClass(Player, [{
	        key: 'attachAt',
	        value: function attachAt(element) {
	            element.appendChild(this.map.renderer.view);
	            this.startAnimate();
	        }
	    }, {
	        key: 'startAnimate',
	        value: function startAnimate() {
	            var _this = this;

	            var animate = function animate() {
	                requestAnimationFrame(animate);
	                _this.map.render();
	            };
	            animate();
	        }
	    }]);

	    return Player;
	})();

	exports.default = Player;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pixi = __webpack_require__(3);

	var PIXI = _interopRequireWildcard(_pixi);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MapContainer = (function (_PIXI$Container) {
	    _inherits(MapContainer, _PIXI$Container);

	    function MapContainer(config, mapData) {
	        _classCallCheck(this, MapContainer);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MapContainer).call(this));

	        config = config || {};
	        config.renderWidth = config.renderWidth || 800;
	        config.renderHeight = config.renderHeight || 600;
	        config.backgroundColor = config.hasOwnProperty('backgroundColor') ? config.backgroundColor : 0xABCDEF;
	        config.lineColor = config.hasOwnProperty('lineColor') ? config.lineColor : 0x000000;
	        _this.config = config;
	        _this.mapData = mapData;

	        _this.graphics = new PIXI.Graphics();
	        _this.addChild(_this.graphics);
	        _this.renderer = PIXI.autoDetectRenderer(_this.config.renderWidth, _this.config.renderHeight, {
	            backgroundColor: _this.config.backgroundColor
	        });
	        return _this;
	    }

	    _createClass(MapContainer, [{
	        key: 'draw',
	        value: function draw() {
	            this.graphics.clear();

	            var GAP = 10;
	            var gridSize = Math.min((this.config.renderWidth - 2 * GAP) / this.mapData.numColumns, (this.config.renderHeight - 2 * GAP) / this.mapData.numRows);

	            this.graphics.lineStyle(2, this.config.lineColor, 1);
	            for (var i = 1; i < this.mapData.numColumns; i++) {
	                this.graphics.moveTo(i * gridSize, 0);
	                this.graphics.lineTo(i * gridSize, this.mapData.numRows * gridSize);
	            }

	            for (var i = 1; i < this.mapData.numColumns; i++) {
	                this.graphics.moveTo(0, i * gridSize);
	                this.graphics.lineTo(this.mapData.numColumns * gridSize, i * gridSize);
	            }
	            this.graphics.lineStyle(5, this.config.lineColor, 1);
	            this.graphics.moveTo(0, 0);
	            this.graphics.lineTo(this.mapData.numColumns * gridSize, 0);
	            this.graphics.lineTo(this.mapData.numColumns * gridSize, this.mapData.numRows * gridSize);
	            this.graphics.lineTo(0, this.mapData.numRows * gridSize);
	            this.graphics.lineTo(0, 0);

	            this.graphics.x = (this.config.renderWidth - gridSize * this.mapData.numColumns) / 2;
	            this.graphics.y = (this.config.renderHeight - gridSize * this.mapData.numRows) / 2;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.draw();
	            this.renderer.render(this);
	        }
	    }]);

	    return MapContainer;
	})(PIXI.Container);

	exports.default = MapContainer;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MapData = (function () {
	    function MapData(data) {
	        _classCallCheck(this, MapData);

	        data = data || {};
	        this._numRows = data.numRows || 15;
	        this._numColumns = data.numColumns || 15;
	    }

	    _createClass(MapData, [{
	        key: "numRows",
	        get: function get() {
	            return this._numRows;
	        }
	    }, {
	        key: "numColumns",
	        get: function get() {
	            return this._numColumns;
	        }
	    }]);

	    return MapData;
	})();

	exports.default = MapData;

/***/ }
/******/ ])
});
;