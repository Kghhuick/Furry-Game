/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function (event) {
  var Furry = function Furry(x, y, direction) {
    _classCallCheck(this, Furry);

    this.x = 0;
    this.y = 0;
    this.direction = "right";
  };

  var Coin = function Coin(x, y) {
    _classCallCheck(this, Coin);

    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
  };

  var Game = function () {
    function Game(board, furry, coin, score) {
      _classCallCheck(this, Game);

      this.board = document.querySelectorAll("#board div");
      this.furry = new Furry();
      this.coin = new Coin();
      this.score = 0;
    }

    _createClass(Game, [{
      key: "Index",
      value: function Index(x, y) {
        return x + y * 10;
      }
    }, {
      key: "showFurry",
      value: function showFurry() {
        this.board[this.Index(this.furry.x, this.furry.y)].classList.add('furry');
      }
    }, {
      key: "showCoin",
      value: function showCoin() {
        this.board[this.Index(this.coin.x, this.coin.y)].classList.add('coin');
      }
    }, {
      key: "moveFurry",
      value: function moveFurry() {
        this.hideVisibilityFurry();
        this.showFurry();

        if (this.furry.direction === "right") {
          this.furry.x = this.furry.x + 1;
        }

        console.log(this.furry);
      }
    }, {
      key: "hideVisibilityFurry",
      value: function hideVisibilityFurry() {
        var fur = document.querySelector(".furry");
        if (fur != null) {
          fur.classList.remove("furry");
        }
        console.log(fur);
      }
    }, {
      key: "startGame",
      value: function startGame() {
        var self = this;

        this.id = setInterval(function () {
          self.moveFurry();
        }, 250);
      }
    }]);

    return Game;
  }();

  var a = new Game();

  a.startGame();

  console.log("DOM fully loaded and parsed");
});

/***/ })
/******/ ]);