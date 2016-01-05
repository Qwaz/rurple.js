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
	exports.control = exports.view = undefined;

	var _Player = __webpack_require__(1);

	var player = _interopRequireWildcard(_Player);

	var _RobotControl = __webpack_require__(5);

	var robotControl = _interopRequireWildcard(_RobotControl);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var view = exports.view = {
	    Player: player.default
	};

	var control = exports.control = {
	    SimpleControl: robotControl.SimpleControl,
	    InteractiveControl: robotControl.InteractiveControl
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _MapDrawer = __webpack_require__(2);

	var _MapDrawer2 = _interopRequireDefault(_MapDrawer);

	var _MapData = __webpack_require__(4);

	var _MapData2 = _interopRequireDefault(_MapData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Player = (function () {
	    function Player(mapData, rendererConfig) {
	        _classCallCheck(this, Player);

	        this.mapData = new _MapData2.default(mapData);
	        this.mapDrawer = new _MapDrawer2.default(rendererConfig, this.mapData);
	    }

	    _createClass(Player, [{
	        key: 'attachAt',
	        value: function attachAt(element) {
	            element.appendChild(this.mapDrawer.renderer.view);
	            this.startAnimate();
	        }
	    }, {
	        key: 'startAnimate',
	        value: function startAnimate() {
	            var _this = this;

	            var animate = function animate() {
	                requestAnimationFrame(animate);
	                _this.mapDrawer.render();
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

	var MapDrawer = (function (_PIXI$Container) {
	    _inherits(MapDrawer, _PIXI$Container);

	    function MapDrawer(config, mapData) {
	        _classCallCheck(this, MapDrawer);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MapDrawer).call(this));

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

	        _this.draw();
	        return _this;
	    }

	    _createClass(MapDrawer, [{
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

	            this.gridSize = gridSize;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            this.draw();
	            this.renderer.render(this);
	        }
	    }]);

	    return MapDrawer;
	})(PIXI.Container);

	exports.default = MapDrawer;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

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
	        this.robotX = data.hasOwnProperty('robotX') ? data.robotX : 1;
	        this.robotY = data.hasOwnProperty('robotX') ? data.robotY : 1;
	        // 0 - right, 1 - down, 2 - left, 3 - up
	        this.robotDir = data.robotDir || 0;
	    }

	    _createClass(MapData, [{
	        key: 'numRows',
	        get: function get() {
	            return this._numRows;
	        }
	    }, {
	        key: 'numColumns',
	        get: function get() {
	            return this._numColumns;
	        }
	    }]);

	    return MapData;
	})();

	exports.default = MapData;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.InteractiveControl = exports.SimpleControl = undefined;

	var _pixi = __webpack_require__(3);

	var PIXI = _interopRequireWildcard(_pixi);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RobotSprite = (function (_PIXI$Container) {
	    _inherits(RobotSprite, _PIXI$Container);

	    function RobotSprite(radius) {
	        _classCallCheck(this, RobotSprite);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RobotSprite).call(this));

	        var graphics = new PIXI.Graphics();
	        graphics.beginFill(0x222222);
	        graphics.drawCircle(0, 0, radius);
	        graphics.beginFill(0xFFFFFF);
	        graphics.drawCircle(7, 0, 2);
	        _this.addChild(graphics);
	        return _this;
	    }

	    return RobotSprite;
	})(PIXI.Container);

	var SimpleControl = exports.SimpleControl = (function () {
	    function SimpleControl(view) {
	        _classCallCheck(this, SimpleControl);

	        this.mapDrawer = view.mapDrawer;
	        this.mapData = view.mapData;

	        this.robot = new RobotSprite(this.mapDrawer.gridSize / 2 - 5);
	        this.mapDrawer.addChild(this.robot);
	        this.drawRobot();
	    }

	    _createClass(SimpleControl, [{
	        key: "drawRobot",
	        value: function drawRobot() {
	            var baseX = this.mapDrawer.graphics.x - this.mapDrawer.gridSize / 2;
	            var baseY = this.mapDrawer.graphics.y - this.mapDrawer.gridSize / 2;

	            this.robot.rotation = Math.PI * 0.5 * this.mapData.robotDir;
	            this.robot.x = baseX + this.mapData.robotX * this.mapDrawer.gridSize;
	            this.robot.y = baseY + this.mapData.robotY * this.mapDrawer.gridSize;
	        }
	    }, {
	        key: "turnLeft",
	        value: function turnLeft() {
	            this.mapData.robotDir = (this.mapData.robotDir + 3) % 4;
	            this.drawRobot();
	        }
	    }, {
	        key: "turnRight",
	        value: function turnRight() {
	            this.mapData.robotDir = (this.mapData.robotDir + 1) % 4;
	            this.drawRobot();
	        }
	    }, {
	        key: "step",
	        value: function step(onError) {
	            var _this2 = this;

	            var delta = [[1, 0], //right
	            [0, 1], //down
	            [-1, 0], //left
	            [0, -1] //up
	            ];

	            var getNextMove = function getNextMove(x, y, dir) {
	                var nextX = x + delta[dir][0];
	                var nextY = y + delta[dir][1];

	                if (1 <= nextX && nextX <= _this2.mapData.numColumns && 1 <= nextY && nextY <= _this2.mapData.numRows) {
	                    return [nextX, nextY];
	                } else {
	                    return null;
	                }
	            };

	            var next = getNextMove(this.mapData.robotX, this.mapData.robotY, this.mapData.robotDir);

	            if (!next) {
	                if (onError) onError();
	            } else {
	                this.mapData.robotX = next[0];
	                this.mapData.robotY = next[1];
	                this.drawRobot();
	            }
	        }
	    }]);

	    return SimpleControl;
	})();

	var InteractiveControl = exports.InteractiveControl = (function (_SimpleControl) {
	    _inherits(InteractiveControl, _SimpleControl);

	    function InteractiveControl(view) {
	        _classCallCheck(this, InteractiveControl);

	        var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(InteractiveControl).call(this, view));

	        document.addEventListener("keydown", function (e) {
	            var left = 37,
	                up = 38,
	                right = 39;
	            switch (e.keyCode) {
	                case left:
	                    _this3.turnLeft();
	                    break;
	                case right:
	                    _this3.turnRight();
	                    break;
	                case up:
	                    _this3.step(_this3.onError);
	                    break;
	            }
	        });
	        return _this3;
	    }

	    return InteractiveControl;
	})(SimpleControl);

/***/ }
/******/ ])
});
;