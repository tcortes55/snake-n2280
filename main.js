(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-container {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    position: relative;\r\n    display: block;\r\n    margin: auto;\r\n    /* background-color: #47565A; */\r\n    /* box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22); */\r\n    /* border-radius: 5px; */\r\n  }\r\n\r\n  .row {\r\n    height: 26px;\r\n  }\r\n\r\n  .column {\r\n    border: 1px solid rgba(97, 131, 138, .1);\r\n    width: 24px;\r\n    height: 24px;\r\n    display: inline-block;\r\n  }\r\n\r\n  .keypad {\r\n      width: 100%;\r\n      margin: auto;\r\n  }\r\n\r\n  .row-buttons {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    display: block;\r\n    margin: auto;\r\n  }\r\n\r\n  .arrow {\r\n      width: 80px;\r\n      height: 80px;\r\n      display: inline-block;\r\n      margin: auto;\r\n  }\r\n\r\n  .arrow-hidden {\r\n    width: 80px;\r\n    height: 80px;\r\n    display: inline-block;\r\n    margin: auto;\r\n  }\r\n\r\n  .head, .food {\r\n    position: absolute;\r\n    width: 36px;\r\n  }\r\n\r\n  .food {\r\n    -webkit-transform: translateX(-6px) translateY(-6px);\r\n            transform: translateX(-6px) translateY(-6px);\r\n  }\r\n\r\n  .dir-left {\r\n    -webkit-transform: translateX(-6px) translateY(-6px);\r\n            transform: translateX(-6px) translateY(-6px);\r\n  }\r\n\r\n  .dir-right {\r\n    -webkit-transform: translateX(-6px) translateY(-6px) scaleX(-1);\r\n            transform: translateX(-6px) translateY(-6px) scaleX(-1);\r\n  }\r\n\r\n  .dir-up {\r\n    -webkit-transform: translateX(-6px) translateY(-9px) rotateZ(90deg) scaleY(-1);\r\n            transform: translateX(-6px) translateY(-9px) rotateZ(90deg) scaleY(-1);\r\n  }\r\n\r\n  .dir-down {\r\n    -webkit-transform: translateX(-6px) translateY(-9px) rotateZ(-90deg);\r\n            transform: translateX(-6px) translateY(-9px) rotateZ(-90deg);\r\n  }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"game-container\">\n  <div class=\"game-header\">\n    <h3 class=\"logo\">ngx-Snake</h3>\n    <div class=\"score-block\">\n      <h3 class=\"score\" [ngClass]=\"{'new-best-score': newBestScore}\">Score: {{score}}</h3>\n      <h3 class=\"best-score\" [ngClass]=\"{'new-best-score': newBestScore}\">Best Score: {{best_score}}</h3>\n    </div>\n  </div>\n  <div class=\"row\" *ngFor=\"let column of board; let i = index;\">\n    <div class=\"column\" [ngStyle]=\"{'background-color': setColors(i, j)}\" *ngFor=\"let row of column; let j = index\"></div>\n  </div>\n  <div class=\"start-button\" [ngClass]=\"{'disable-clicks': gameStarted}\" (click)=\"showMenu()\">Start Game</div>\n  <div class=\"new-game-menu\" *ngIf=\"showMenuChecker\">\n    <span class=\"new-game-menu-label\">Select Mode</span>\n    <div class=\"start-button new-game-button\" (click)=\"newGame(mode)\" *ngFor=\"let mode of getKeys(all_modes)\">{{all_modes[mode]}}</div>\n  </div>\n</div> -->\n<div class=\"\">Score: {{score}}</div>\n<div class=\"game-container\">\n  <div class=\"row\" *ngFor=\"let column of board; let i = index\">\n    <div class=\"column\" [ngStyle]=\"{'background-color': setColors(i, j)}\" *ngFor=\"let row of column; let j = index\">\n      <div>\n        <img src=\"../assets/clara.png\" class=\"head\" [ngClass]=\"{\n          'dir-left': tempDirection == 37,\n          'dir-right': tempDirection == 39,\n          'dir-up': tempDirection == 38,\n          'dir-down': tempDirection == 40\n        }\" *ngIf=\"isHead(i, j)\">\n        <img src=\"../assets/burger.png\" class=\"food\" *ngIf=\"isFood(i, j)\">\n      </div>\n    </div>\n  </div>\n</div>\n<button id=\"start-button\" type=\"button\" (click)=\"newGame()\">Start</button>\n<div class=\"keypad\">\n  <div class=\"row-buttons\">\n    <div class=\"arrow-hidden\"></div>\n    <button class=\"arrow\" (click)=\"setDirection(38)\">↑</button>\n    <div class=\"arrow-hidden\"></div>\n  </div>\n  <div class=\"row-buttons\">\n    <button class=\"arrow\" (click)=\"setDirection(37)\">←</button>\n    <div class=\"arrow-hidden\"></div>\n    <button class=\"arrow\" (click)=\"setDirection(39)\">→</button>\n  </div>\n  <div class=\"row-buttons\">\n    <div class=\"arrow-hidden\"></div>\n    <button class=\"arrow\" (click)=\"setDirection(40)\">↓</button>\n    <div class=\"arrow-hidden\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.constants */ "./src/app/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'snake-n2280';
        this.board = [];
        this.score = 0;
        this.snake = {
            direction: _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].LEFT,
            parts: [
                {
                    // Initially it is not displayed
                    x: -1,
                    y: -1
                }
            ]
        };
        this.fruit = {
            // Initially it is not displayed
            x: -1,
            y: -1
        };
        this.setBoard();
    }
    AppComponent.prototype.setDirection = function (newDir) {
        if (newDir === _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].LEFT && this.snake.direction != _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].RIGHT) {
            this.tempDirection = _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].LEFT;
        }
        else if (newDir === _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].UP && this.snake.direction != _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].DOWN) {
            this.tempDirection = _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].UP;
        }
        else if (newDir === _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].RIGHT && this.snake.direction != _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].LEFT) {
            this.tempDirection = _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].RIGHT;
        }
        else if (newDir === _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].DOWN && this.snake.direction != _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].UP) {
            this.tempDirection = _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].DOWN;
        }
    };
    AppComponent.prototype.handleKeyboardEvents = function (e) {
        this.setDirection(e.keyCode);
    };
    AppComponent.prototype.setColors = function (col, row) {
        if (this.fruit.x === row && this.fruit.y === col) {
            return _app_constants__WEBPACK_IMPORTED_MODULE_1__["COLORS"].FRUIT;
        }
        else if (this.snake.parts[0].x === row && this.snake.parts[0].y === col) {
            return _app_constants__WEBPACK_IMPORTED_MODULE_1__["COLORS"].SNAKE_HEAD;
        }
        else if (this.board[col][row] === true) {
            return _app_constants__WEBPACK_IMPORTED_MODULE_1__["COLORS"].SNAKE_BODY;
        }
        return _app_constants__WEBPACK_IMPORTED_MODULE_1__["COLORS"].BOARD;
    };
    ;
    AppComponent.prototype.isHead = function (col, row) {
        if (this.snake.parts[0].x === row && this.snake.parts[0].y === col) {
            return true;
        }
        return false;
    };
    ;
    AppComponent.prototype.isFood = function (col, row) {
        if (this.fruit.x === row && this.fruit.y === col) {
            return true;
        }
        return false;
    };
    ;
    AppComponent.prototype.fruitCollision = function (part) {
        return (part.x === this.fruit.x && part.y === this.fruit.y);
    };
    AppComponent.prototype.selfCollision = function (part) {
        return (this.board[part.y][part.x] === true);
    };
    AppComponent.prototype.eatFruit = function () {
        this.score++;
        var newTail = Object.assign({}, this.snake.parts[this.snake.parts.length - 1]);
        this.snake.parts.push(newTail);
        this.resetFruit();
    };
    AppComponent.prototype.updatePositions = function () {
        var newHead = this.repositionHead();
        var me = this;
        this.headTransition(newHead);
        if (this.selfCollision(newHead)) {
            alert("PERDEU!");
            return;
        }
        ;
        if (this.fruitCollision(newHead)) {
            this.eatFruit();
        }
        var lastPart = this.snake.parts.pop();
        this.board[lastPart.y][lastPart.x] = false;
        this.snake.parts.unshift(newHead);
        this.board[newHead.y][newHead.x] = true;
        this.snake.direction = this.tempDirection;
        setTimeout(function () {
            me.updatePositions();
        }, this.interval);
    };
    AppComponent.prototype.repositionHead = function () {
        var newHead = Object.assign({}, this.snake.parts[0]);
        if (this.tempDirection === _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].LEFT) {
            newHead.x -= 1;
        }
        else if (this.tempDirection === _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].RIGHT) {
            newHead.x += 1;
        }
        else if (this.tempDirection === _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].UP) {
            newHead.y -= 1;
        }
        else if (this.tempDirection === _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].DOWN) {
            newHead.y += 1;
        }
        return newHead;
    };
    AppComponent.prototype.headTransition = function (part) {
        if (part.x === _app_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_WIDTH"]) {
            part.x = 0;
        }
        else if (part.x === -1) {
            part.x = _app_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_WIDTH"] - 1;
        }
        if (part.y === _app_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_HEIGHT"]) {
            part.y = 0;
        }
        else if (part.y === -1) {
            part.y = _app_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_HEIGHT"] - 1;
        }
    };
    AppComponent.prototype.resetFruit = function () {
        var x = this.randomWidth();
        var y = this.randomHeight();
        if (this.board[y][x] === true) {
            return this.resetFruit();
        }
        this.fruit = {
            x: x,
            y: y
        };
    };
    // Aux
    AppComponent.prototype.randomHeight = function () {
        return Math.floor(Math.random() * _app_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_HEIGHT"]);
    };
    AppComponent.prototype.randomWidth = function () {
        return Math.floor(Math.random() * _app_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_WIDTH"]);
    };
    // Preparing the game
    AppComponent.prototype.setBoard = function () {
        this.board = [];
        for (var i = 0; i < _app_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_HEIGHT"]; i++) {
            this.board[i] = [];
            for (var j = 0; j < _app_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_WIDTH"]; j++) {
                this.board[i][j] = false; // indicates that the snake is not currently in this location
            }
        }
    };
    //
    AppComponent.prototype.newGame = function () {
        this.setBoard();
        this.score = 0;
        this.interval = 150;
        this.tempDirection = _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].LEFT;
        this.snake = {
            direction: _app_constants__WEBPACK_IMPORTED_MODULE_1__["CONTROLS"].LEFT,
            parts: []
        };
        for (var i = 0; i < 3; i++) {
            this.snake.parts.push({ x: _app_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_WIDTH"] / 2 + i, y: Math.floor(_app_constants__WEBPACK_IMPORTED_MODULE_1__["BOARD_HEIGHT"] / 2) });
        }
        this.resetFruit();
        this.updatePositions();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'snake-n2280',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            host: {
                '(document:keydown)': 'handleKeyboardEvents($event)'
            }
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: BOARD_WIDTH, BOARD_HEIGHT, CONTROLS, COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_WIDTH", function() { return BOARD_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOARD_HEIGHT", function() { return BOARD_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROLS", function() { return CONTROLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
var BOARD_WIDTH = 12;
var BOARD_HEIGHT = 7;
var CONTROLS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
var COLORS = {
    GAME_OVER: '#D24D57',
    FRUIT: '#EC644B',
    SNAKE_HEAD: 'rgb(32,43,0)',
    // SNAKE_HEAD: 'rgba(255,255,255,0)',
    SNAKE_BODY: 'rgb(75,100,0)',
    BOARD: 'rgb(155,185,4)',
    OBSTACLE: '#383522'
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\snake-n2280\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map