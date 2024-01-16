/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Board = /*#__PURE__*/function () {
  // constructor that creates the board
  function Board() {
    _classCallCheck(this, Board);
    this.board = this.createGraph();
  }

  // create graph
  _createClass(Board, [{
    key: "createGraph",
    value: function createGraph() {
      var graph = {};

      // iterate through columns
      for (var y = 0; y <= 7; y++) {
        // iterate through rows
        for (var x = 0; x <= 7; x++) {
          // Check if y already exist in graph, if not create a key of y
          if (!(y in graph)) graph[y] = [];
          graph[y].push(x);
        }
      }
      return graph;
    }
  }]);
  return Board;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);

/*  0 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    1 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    2 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    3 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    5 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    6 : ["0", "1", "2", "3", "4", ""5, "6", "7"]
    7 : ["0", "1", "2", "3", "4", ""5, "6", "7"] */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var moves = [[2, 1], [1, 2], [-2, 1], [-1, 2], [2, -1], [1, -2], [-2, -1], [-1, -2]];

// Return possible moves from the given node
function getMoves(board, src) {
  var _src = _slicedToArray(src, 2),
    x = _src[0],
    y = _src[1];
  var possibleMoves = [];
  // Iterate through predefined moves and check if the new position is valid on the board
  for (var _i = 0, _moves = moves; _i < _moves.length; _i++) {
    var move = _moves[_i];
    var newX = x + move[0];
    var newY = y + move[1];
    if (board[newX] && board[newX][newY] !== undefined) {
      possibleMoves.push([newX, newY]);
    }
  }
  return possibleMoves;
}

// BFS to find the shortest path from source to destination
function knightMoves(board, src, dst) {
  var visited = new Set();
  var queue = [[src]];

  // Main BFS loop
  while (queue.length > 0) {
    var currentPath = queue.shift();
    var current = currentPath[currentPath.length - 1];
    var _current = _slicedToArray(current, 2),
      x = _current[0],
      y = _current[1];
    var currentString = current.toString();

    // Check if the destination is reached
    if (x === dst[0] && y === dst[1]) {
      console.log("Found it! Shortest path:", currentPath);
      return currentPath; // Return the shortest path
    }

    // Explore possible moves from the current position
    if (!visited.has(currentString)) {
      visited.add(currentString);
      var currentMoves = getMoves(board, current);
      var _iterator = _createForOfIteratorHelper(currentMoves),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var move = _step.value;
          // Create a new path by appending the current move
          var newPath = [].concat(_toConsumableArray(currentPath), [move]);
          queue.push(newPath);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

  // If no path to the destination is found
  return "No path found to the destination.";
}

// Create a new chessboard instance
var chessBoard = new _board__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtNQUFBO1FBQS9CLEtBQUFGLFNBQUEsQ0FBQUcsQ0FBQSxNQUFBRCxLQUFBLEdBQUFGLFNBQUEsQ0FBQUksQ0FBQSxJQUFBQyxJQUFBLEdBQWlDO1VBQUEsSUFBdEJ6QixJQUFJLEdBQUFzQixLQUFBLENBQUFwQyxLQUFBO1VBQ1g7VUFDQSxJQUFNd0MsT0FBTyxNQUFBQyxNQUFBLENBQUFDLGtCQUFBLENBQU9uQixXQUFXLElBQUVULElBQUksRUFBQztVQUN0Q1EsS0FBSyxDQUFDbEIsSUFBSSxDQUFDb0MsT0FBTyxDQUFDO1FBQ3ZCO01BQUMsU0FBQUcsR0FBQTtRQUFBVCxTQUFBLENBQUFVLENBQUEsQ0FBQUQsR0FBQTtNQUFBO1FBQUFULFNBQUEsQ0FBQVcsQ0FBQTtNQUFBO0lBQ0w7RUFDSjs7RUFFQTtFQUNBLE9BQU8sbUNBQW1DO0FBQzlDOztBQUVBO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLElBQUlwRCw4Q0FBSyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0tuaWdodHMgVHJhdmFpbHMvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vS25pZ2h0cyBUcmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9LbmlnaHRzIFRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9LbmlnaHRzIFRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vS25pZ2h0cyBUcmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0tuaWdodHMgVHJhdmFpbHMvLi9zcmMva25pZ2h0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEJvYXJkIHtcbiAgICAvLyBjb25zdHJ1Y3RvciB0aGF0IGNyZWF0ZXMgdGhlIGJvYXJkXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUdyYXBoKCk7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGdyYXBoXG4gICAgY3JlYXRlR3JhcGgoKSB7XG4gICAgICAgIGNvbnN0IGdyYXBoID0ge307XG4gICAgICAgIFxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggY29sdW1uc1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8PSA3OyB5Kyspe1xuICAgICAgICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCByb3dzXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSA3OyB4Kyspe1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHkgYWxyZWFkeSBleGlzdCBpbiBncmFwaCwgaWYgbm90IGNyZWF0ZSBhIGtleSBvZiB5XG4gICAgICAgICAgICAgICAgaWYoISh5IGluIGdyYXBoKSkgZ3JhcGhbeV0gPSBbXTtcbiAgICAgICAgICAgICAgICBncmFwaFt5XS5wdXNoKHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBncmFwaDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuXG5cbi8qICAwIDogW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCJcIjUsIFwiNlwiLCBcIjdcIl1cbiAgICAxIDogW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCJcIjUsIFwiNlwiLCBcIjdcIl1cbiAgICAyIDogW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCJcIjUsIFwiNlwiLCBcIjdcIl1cbiAgICAzIDogW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCJcIjUsIFwiNlwiLCBcIjdcIl1cbiAgICA1IDogW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCJcIjUsIFwiNlwiLCBcIjdcIl1cbiAgICA2IDogW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCJcIjUsIFwiNlwiLCBcIjdcIl1cbiAgICA3IDogW1wiMFwiLCBcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCJcIjUsIFwiNlwiLCBcIjdcIl0gKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi9ib2FyZFwiO1xuXG5jb25zdCBtb3ZlcyA9IFtbMiwgMV0sWzEsIDJdLFstMiwgMV0sWy0xLCAyXSxbMiwgLTFdLFsxLCAtMl0sWy0yLCAtMV0sWy0xLCAtMl1dO1xuXG4vLyBSZXR1cm4gcG9zc2libGUgbW92ZXMgZnJvbSB0aGUgZ2l2ZW4gbm9kZVxuZnVuY3Rpb24gZ2V0TW92ZXMoYm9hcmQsIHNyYykge1xuICAgIGxldCBbeCwgeV0gPSBzcmM7XG4gICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBwcmVkZWZpbmVkIG1vdmVzIGFuZCBjaGVjayBpZiB0aGUgbmV3IHBvc2l0aW9uIGlzIHZhbGlkIG9uIHRoZSBib2FyZFxuICAgIGZvciAoY29uc3QgbW92ZSBvZiBtb3Zlcykge1xuICAgICAgICBsZXQgbmV3WCA9IHggKyBtb3ZlWzBdO1xuICAgICAgICBsZXQgbmV3WSA9IHkgKyBtb3ZlWzFdO1xuXG4gICAgICAgIGlmIChib2FyZFtuZXdYXSAmJiBib2FyZFtuZXdYXVtuZXdZXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW25ld1gsIG5ld1ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwb3NzaWJsZU1vdmVzO1xufVxuXG4vLyBCRlMgdG8gZmluZCB0aGUgc2hvcnRlc3QgcGF0aCBmcm9tIHNvdXJjZSB0byBkZXN0aW5hdGlvblxuZnVuY3Rpb24ga25pZ2h0TW92ZXMoYm9hcmQsIHNyYywgZHN0KSB7XG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBxdWV1ZSA9IFtbc3JjXV07XG5cbiAgICAvLyBNYWluIEJGUyBsb29wXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gY3VycmVudFBhdGhbY3VycmVudFBhdGgubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGN1cnJlbnQ7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFN0cmluZyA9IGN1cnJlbnQudG9TdHJpbmcoKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZGVzdGluYXRpb24gaXMgcmVhY2hlZFxuICAgICAgICBpZiAoeCA9PT0gZHN0WzBdICYmIHkgPT09IGRzdFsxXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBpdCEgU2hvcnRlc3QgcGF0aDpcIiwgY3VycmVudFBhdGgpO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYXRoOyAgLy8gUmV0dXJuIHRoZSBzaG9ydGVzdCBwYXRoXG4gICAgICAgIH1cblxuICAgICAgICAvLyBFeHBsb3JlIHBvc3NpYmxlIG1vdmVzIGZyb20gdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhjdXJyZW50U3RyaW5nKSkge1xuICAgICAgICAgICAgdmlzaXRlZC5hZGQoY3VycmVudFN0cmluZyk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TW92ZXMgPSBnZXRNb3Zlcyhib2FyZCwgY3VycmVudCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1vdmUgb2YgY3VycmVudE1vdmVzKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHBhdGggYnkgYXBwZW5kaW5nIHRoZSBjdXJyZW50IG1vdmVcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gWy4uLmN1cnJlbnRQYXRoLCBtb3ZlXTtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5ld1BhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gcGF0aCB0byB0aGUgZGVzdGluYXRpb24gaXMgZm91bmRcbiAgICByZXR1cm4gXCJObyBwYXRoIGZvdW5kIHRvIHRoZSBkZXN0aW5hdGlvbi5cIjtcbn1cblxuLy8gQ3JlYXRlIGEgbmV3IGNoZXNzYm9hcmQgaW5zdGFuY2VcbmNvbnN0IGNoZXNzQm9hcmQgPSBuZXcgQm9hcmQoKTtcbiJdLCJuYW1lcyI6WyJCb2FyZCIsIl9jbGFzc0NhbGxDaGVjayIsImJvYXJkIiwiY3JlYXRlR3JhcGgiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdyYXBoIiwieSIsIngiLCJwdXNoIiwibW92ZXMiLCJnZXRNb3ZlcyIsInNyYyIsIl9zcmMiLCJfc2xpY2VkVG9BcnJheSIsInBvc3NpYmxlTW92ZXMiLCJfaSIsIl9tb3ZlcyIsImxlbmd0aCIsIm1vdmUiLCJuZXdYIiwibmV3WSIsInVuZGVmaW5lZCIsImtuaWdodE1vdmVzIiwiZHN0IiwidmlzaXRlZCIsIlNldCIsInF1ZXVlIiwiY3VycmVudFBhdGgiLCJzaGlmdCIsImN1cnJlbnQiLCJfY3VycmVudCIsImN1cnJlbnRTdHJpbmciLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJoYXMiLCJhZGQiLCJjdXJyZW50TW92ZXMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwibmV3UGF0aCIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImVyciIsImUiLCJmIiwiY2hlc3NCb2FyZCJdLCJzb3VyY2VSb290IjoiIn0=