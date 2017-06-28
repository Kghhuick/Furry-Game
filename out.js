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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

    this.board = [].concat(_toConsumableArray(document.querySelectorAll("#board div")));
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
      //console.log(this.furry.x, this.furry.y,this.Index(this.furry.x, this.furry.y),this.board[0]);
      this.board[this.Index(this.furry.x, this.furry.y)].classList.add('furry');
    }
  }, {
    key: "showCoin",
    value: function showCoin() {
      this.board[this.Index(this.coin.x, this.coin.y)].classList.add('coin');
    }
  }, {
    key: "checkCoinCollision",
    value: function checkCoinCollision() {
      if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
        this.score++;
        document.querySelector("#score div strong").innerHTML = this.score;
        this.board[this.Index(this.coin.x, this.coin.y)].classList.remove("coin");
        this.coin = new Coin();
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry > 9) {
        clearInterval(this.id);
        this.hideVisibilityFurry();
        alert("GAME IS OVER");
        alert("YOUR RESULT" + " " + this.score);
      }
    }
  }, {
    key: "moveFurry",
    value: function moveFurry() {

      this.hideVisibilityFurry();
      this.showFurry();
      this.showCoin();
      this.gameOver();
      if (this.furry.direction === "right") {
        this.furry.x = this.furry.x + 1;
      } else if (this.furry.direction === "left") {
        this.furry.x = this.furry.x - 1;
      } else if (this.furry.direction === "up") {
        this.furry.y = this.furry.y - 1;
      } else if (this.furry.direction === "down") {
        this.furry.y = this.furry.y + 1;
      }

      this.checkCoinCollision();
    }
  }, {
    key: "hideVisibilityFurry",
    value: function hideVisibilityFurry() {
      var fur = document.querySelector(".furry");
      if (fur != null) {
        fur.classList.remove("furry");
      }
    }
  }, {
    key: "keyboard",
    value: function keyboard(event) {

      console.log(this, "keyboard");
      var key = event.which;
      switch (key) {
        case 37:
          this.furry.direction = "left";
          break;
        case 38:
          this.furry.direction = "up";
          break;
        case 39:
          this.furry.direction = "right";
          break;
        case 40:
          this.furry.direction = "down";
          break;
      }
    }
  }, {
    key: "startGame",
    value: function startGame() {
      var self = this;
      this.id = setInterval(function () {
        self.moveFurry();
      }, 250);
      document.addEventListener('keydown', function (e) {
        self.keyboard(e);
      });
    }
  }]);

  return Game;
}();

document.addEventListener("DOMContentLoaded", function (event) {
  var a = new Game();

  a.startGame();
});

/***/ })
/******/ ]);