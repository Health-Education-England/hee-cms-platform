/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/hee/blocks/content/footer/hee-anchorlinks-sticky/anchorlinks-sticky.js":
/*!*******************************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/footer/hee-anchorlinks-sticky/anchorlinks-sticky.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
   * Responsible for Anchor link sticky toolbar at bottom of viewport.
   */
  var AnchorLinksSticky = /*#__PURE__*/function () {
    function AnchorLinksSticky(container) {
      _classCallCheck(this, AnchorLinksSticky);
      this.container = container;
      this.toggleBtn = this.container.querySelector('button.hee-anchorlinks__sticky__btn');
      this.stickyAnchorLinks = this.container.querySelector('.hee-anchorlinks');
      this.sidebarAnchorLinks = document.querySelector('.page__rightbar .hee-anchorlinks');
      this.addEventListeners();
      this.toggleStickyToolbar();
    }

    /**
     * Adds event listeners for TOC button toggle, TOC link navigation and
     * the window viewport scroll toggle.
     *
     * @returns void
     */
    _createClass(AnchorLinksSticky, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;
        this.toggleBtn.addEventListener('mousedown', function () {
          return _this.toggleStickyAnchorLinks();
        });
        this.toggleBtn.addEventListener('keyup', function (event) {
          if (event.keyCode === 13) {
            _this.toggleStickyAnchorLinks();
          }
        });
        this.stickyAnchorLinks.addEventListener('click', function (event) {
          if (event.target.tagName === 'A') {
            _this.toggleStickyAnchorLinks();
          }
        });
        this.toggleBtn.addEventListener('keyup', function (event) {
          if (event.target.tagName === 'A' && event.keyCode === 13) {
            _this.toggleStickyAnchorLinks();
          }
        });
        window.addEventListener('scroll', function () {
          _this.toggleStickyToolbar();
        });
      }

      /**
       * Shows / hides the sticky TOC anchor links when "Table of Contents" button
       * triggered.
       *
       * @returns void
       */
    }, {
      key: "toggleStickyAnchorLinks",
      value: function toggleStickyAnchorLinks() {
        this.toggleBtn.classList.toggle('active');
        this.stickyAnchorLinks.classList.toggle('is-sticky');
        if (this.container.getAttribute('aria-expanded') === 'false') {
          this.container.setAttribute('aria-expanded', 'true');
        } else {
          this.container.setAttribute('aria-expanded', 'false');
        }
        this.stickyAnchorLinks.querySelector('a:first-of-type').focus();
      }

      /**
       * Shows / hides the TOC bottom "toolbar" when the sidebar TOC heading is
       * outside the viewport.
       *
       * @returns void
       */
    }, {
      key: "toggleStickyToolbar",
      value: function toggleStickyToolbar() {
        if (!this.isElementInViewport(this.sidebarAnchorLinks.querySelector('h2'))) {
          this.container.classList.add('active');
        } else {
          this.container.classList.remove('active');
        }
      }

      /**
       * Utility function to determine whether an element is inside the viewport.
       *
       * @param {Object} element
       *
       * @returns boolean
       */
    }, {
      key: "isElementInViewport",
      value: function isElementInViewport(element) {
        var bounding = element.getBoundingClientRect();
        var elementHeight = element.offsetHeight;
        var elementWidth = element.offsetWidth;
        return bounding.top >= -elementHeight && bounding.left >= -elementWidth && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + elementWidth && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementHeight;
      }
    }]);
    return AnchorLinksSticky;
  }();
  _toConsumableArray(document.getElementsByClassName('hee-anchorlinks__sticky')).forEach(function (anchorLinks) {
    return new AnchorLinksSticky(anchorLinks);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/main/hee-card--summary/summary.js":
/*!*************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-card--summary/summary.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var SummaryCard = /*#__PURE__*/function () {
    function SummaryCard(summaryCard) {
      _classCallCheck(this, SummaryCard);
      this.summaryCard = summaryCard;
      this.toggleLink = this.summaryCard.querySelector('.hee-card--summary__toggle');
      this.addEventListeners();
    }

    /**
     * Add event listeners to toggle link.
     */
    _createClass(SummaryCard, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;
        // Handles toggle click event.
        this.toggleLink.addEventListener('click', function (event) {
          event.preventDefault();
          _this.toggleSummary();
        });

        // Handles toggle link enter and spacebar key press.
        this.toggleLink.addEventListener('keydown', function (event) {
          if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            _this.toggleSummary();
          }
        });
      }

      /**
       * Toggle all expander content visibility within table card.
       */
    }, {
      key: "toggleSummary",
      value: function toggleSummary() {
        this.summaryCard.classList.toggle('default');
      }
    }]);
    return SummaryCard;
  }();
  _toConsumableArray(document.getElementsByClassName('hee-card--summary')).forEach(function (summaryCard) {
    return new SummaryCard(summaryCard);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/main/hee-media/media.js":
/*!***************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-media/media.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Media transcript
  * Elements with the selector '.hee-media-transcript' are passed into this class
  */
  var Transcript = /*#__PURE__*/function () {
    function Transcript(container) {
      _classCallCheck(this, Transcript);
      this.container = container;
      this.toggles = container.querySelectorAll("a");
      console.log(this.container);
      console.log(this.toggles);
      this.addEventListeners();
    }
    _createClass(Transcript, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;
        if (this.toggles) {
          this.toggles.forEach(function (toggle) {
            return toggle.addEventListener('click', function (evt) {
              return _this.toggletranscript(evt);
            });
          });
        }
      }
    }, {
      key: "toggletranscript",
      value: function toggletranscript() {
        if (this.isCollapsed()) {
          this.container.classList.remove("hee-media__transcript-expanded");
        } else {
          this.container.classList.add("hee-media__transcript-expanded");
        }
      }
    }, {
      key: "isCollapsed",
      value: function isCollapsed() {
        if (this.container.classList.contains("hee-media__transcript-expanded")) {
          return true;
        } else {
          return false;
        }
      }
    }]);
    return Transcript;
  }();
  _toConsumableArray(document.getElementsByClassName('hee-media__transcript')).forEach(function (transcript) {
    return new Transcript(transcript);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/main/hee-navmap/navmap.js":
/*!*****************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-navmap/navmap.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Map
  * Elements with the selector '.nhsuk-region' are passed into this class
  */
  var NavMap = /*#__PURE__*/function () {
    function NavMap(map, svg) {
      _classCallCheck(this, NavMap);
      this.map = map;
      this.svg = svg;
      this.regions = _toConsumableArray(svg.getElementsByClassName('nhsuk-region'));
      this.list = _toConsumableArray(map.querySelectorAll('#regionList li a'));
      this.addLinksToMap();
      this.cleanStyle();
      this.mapEventListeners();
      this.linkEventListeners();
    }
    _createClass(NavMap, [{
      key: "cleanStyle",
      value: function cleanStyle() {
        this.svg.querySelector('style').innerHTML = "";
        this.svg.querySelector('style').appendChild(document.createTextNode("\n        .st0{fill:#005EB8;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n        .st1{fill:#AEB7BD;stroke:#FFFFFF;stroke-width:0.5;stroke-miterlimit:10;}\n        .hover * {stroke:#ffeb3b;stroke-width: 6;stroke-miterlimit: 1;}\n        .focus .st0 {fill:#ffeb3b;stroke:#212b32;}\n        .focus * {stroke-width: 6;stroke-miterlimit: 1;}\n      "));
      }
    }, {
      key: "addLinksToMap",
      value: function addLinksToMap() {
        var _this = this;
        this.regions.forEach(function (region) {
          var thisCounterpart = _this.mapCounterpart(region.id);
          var thisHref = thisCounterpart.href ? thisCounterpart.href : "/";
          var thisTitle = thisCounterpart.innerHTML ? thisCounterpart.innerHTML : "";
          var children = region.innerHTML;
          var wrapLink = "<a xlink:href=\"".concat(thisHref, "\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <title>").concat(thisTitle, "</title>\n          ").concat(children, "\n        </a>");
          region.innerHTML = wrapLink;
        });
      }
    }, {
      key: "mapEventListeners",
      value: function mapEventListeners() {
        var _this2 = this;
        this.regions.forEach(function (element) {
          return element.addEventListener("mouseenter", function () {
            return _this2.mapIn(element, "hover", true);
          });
        });
        this.regions.forEach(function (element) {
          return element.addEventListener("mouseout", function () {
            return _this2.mapOut(element, "hover", true);
          });
        });
        this.regions.forEach(function (element) {
          return element.addEventListener("click", function (event) {
            return _this2.mapClick(event);
          });
        });
      }
    }, {
      key: "linkEventListeners",
      value: function linkEventListeners() {
        var _this3 = this;
        this.list.forEach(function (item) {
          return item.addEventListener("mouseenter", function (event) {
            return _this3.linkEvent(event.target, "in", "hover");
          });
        });
        this.list.forEach(function (element) {
          return element.addEventListener("mouseout", function (event) {
            return _this3.linkEvent(event.target, "out", "hover");
          });
        });
        this.list.forEach(function (item) {
          return item.addEventListener("focusin", function (event) {
            return _this3.linkEvent(event.target, "in", "focus");
          });
        });
        this.list.forEach(function (item) {
          return item.addEventListener("focusout", function (event) {
            return _this3.linkEvent(event.target, "out", "focus");
          });
        });
      }
    }, {
      key: "moveToTop",
      value: function moveToTop(obj) {
        obj.parentElement.appendChild(obj);
      }
    }, {
      key: "mapIn",
      value: function mapIn(target, style, map) {
        this.moveToTop(target);
        target.classList.add(style);
        if (map) {
          var thisLink = this.mapCounterpart(target.id);
          if (thisLink) thisLink.classList.add("hover");
        }
      }
    }, {
      key: "mapOut",
      value: function mapOut(target, style, map) {
        target.classList.remove(style);
        if (map) {
          var thisLink = this.mapCounterpart(target.id);
          if (thisLink) thisLink.classList.remove("hover");
        }
      }
    }, {
      key: "mapClick",
      value: function mapClick(event) {
        event.preventDefault();
        var thisMapCounterpart = this.mapCounterpart(event.target.closest("g").id);
        if (thisMapCounterpart) thisMapCounterpart.click();
      }
    }, {
      key: "mapCounterpart",
      value: function mapCounterpart(thisId) {
        var thisCounterpart = this.list.find(function (item) {
          return item.id === thisId;
        });
        return thisCounterpart;
      }
    }, {
      key: "linkEvent",
      value: function linkEvent(target, direction, type) {
        var thisId = target.id;
        var thisCounterpart = this.linkCounterpart(thisId);
        if (direction === "in") {
          this.mapIn(thisCounterpart, type);
        } else {
          this.mapOut(thisCounterpart, type);
        }
      }
    }, {
      key: "linkCounterpart",
      value: function linkCounterpart(thisId) {
        var thisCounterpart = this.regions.find(function (item) {
          return item.id === thisId;
        });
        return thisCounterpart;
      }
    }]);
    return NavMap;
  }();
  _toConsumableArray(document.querySelectorAll('.nhsuk-map')).forEach(function (map) {
    // need to wait for SVG to load
    var obj = map.querySelector('object');
    obj.addEventListener('load', function () {
      var svg = obj.getSVGDocument().querySelector('svg');
      if (svg) {
        new NavMap(map, svg);
      }
    });
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/main/hee-newsletter/newsletter.js":
/*!*************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-newsletter/newsletter.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Newsletter
  * Elements with the selector 'nhsuk-newsletter-form' are passed into this class
  */
  var Newsletter = /*#__PURE__*/function () {
    function Newsletter(newsletter) {
      _classCallCheck(this, Newsletter);
      this.newsletter = newsletter;
      this.requiredInputs = newsletter.querySelectorAll("[required]");
      this.errors = [];
      this.init();
      window.recaptchaCallback = this.recaptchaCallback;
    }
    _createClass(Newsletter, [{
      key: "init",
      value: function init() {
        this.resetForm();
        this.addEvents();
      }
    }, {
      key: "addEvents",
      value: function addEvents() {
        var _this = this;
        this.requiredInputs.forEach(function (input) {
          input.addEventListener("focusout", function (c) {
            return _this.validate(c.target);
          });
        });
      }
    }, {
      key: "validate",
      value: function validate(target) {
        var targetError = document.getElementById("errors-" + target.name);
        var targetSummaryError = document.getElementById("error-summary-" + target.name);
        if (target.name == "firstname" || target.name == "lastname") {
          this.errorEmpty(target, targetError, targetSummaryError);
        } else if (target.name == "email") {
          this.errorEmail(target, targetError, targetSummaryError);
        } else if (target.name == "consent") {
          this.errorConsent(target, targetError, targetSummaryError);
        }
        this.updateSummary();
      }
    }, {
      key: "updateSummary",
      value: function updateSummary() {
        var errorSummary = document.getElementById("error-summary");
        if (this.errors.length > 0) {
          errorSummary.style.display = 'block';
        } else {
          errorSummary.style.display = 'none';
        }
      }
    }, {
      key: "errorEmpty",
      value: function errorEmpty(target, targetError, targetSummaryError) {
        if (this.isEmpty(target.value)) {
          this.showError(target, targetError, targetSummaryError);
        } else {
          this.hideError(target, targetError, targetSummaryError);
        }
      }
    }, {
      key: "errorEmail",
      value: function errorEmail(target, targetError, targetSummaryError) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(target.value)) {
          this.showError(target, targetError, targetSummaryError);
        } else {
          this.hideError(target, targetError, targetSummaryError);
        }
      }
    }, {
      key: "errorConsent",
      value: function errorConsent(target, targetError, targetSummaryError) {
        if (!target.checked) {
          this.showError(target, targetError, targetSummaryError);
        } else {
          this.hideError(target, targetError, targetSummaryError);
        }
      }
    }, {
      key: "hideError",
      value: function hideError(target, targetError, targetSummaryError) {
        target.parentElement.classList.remove('nhsuk-form-group--error');
        targetError.style.display = 'none';
        targetSummaryError.style.display = 'none';
        this.errors = this.errors.filter(function (item) {
          return item !== target.name;
        });
      }
    }, {
      key: "showError",
      value: function showError(target, targetError, targetSummaryError) {
        target.parentElement.classList.add('nhsuk-form-group--error');
        targetError.style.display = 'block';
        targetSummaryError.style.display = 'block';
        this.errors = this.errors.filter(function (item) {
          return item !== target.name;
        });
        this.errors.push(target.name);
      }
    }, {
      key: "isEmpty",
      value: function isEmpty(str) {
        return !str.trim().length;
      }
    }, {
      key: "resetForm",
      value: function resetForm() {
        var errors = this.newsletter.querySelectorAll('.nhsuk-error-message');
        errors.forEach(function (error) {
          error.style.display = 'none';
        });
        var errorClasses = this.newsletter.querySelectorAll('.nhsuk-form-group--error');
        errorClasses.forEach(function (errorclass) {
          errorclass.classList.remove('nhsuk-form-group--error');
        });
        var errorSummary = this.newsletter.querySelectorAll('.nhsuk-error-summary');
        errorSummary.forEach(function (errorsummary) {
          errorsummary.style.display = 'none';
        });
        var errorSummaryItems = this.newsletter.querySelectorAll('.error-summary-item');
        errorSummaryItems.forEach(function (summaryitem) {
          summaryitem.style.display = 'none';
        });
      }
    }, {
      key: "recaptchaCallback",
      value: function recaptchaCallback() {
        document.querySelector('form#newsletter-form button[type="submit"]').removeAttribute('disabled');
      }
    }]);
    return Newsletter;
  }();
  _toConsumableArray(document.getElementsByClassName('nhsuk-newsletter-form')).forEach(function (newsletter) {
    return new Newsletter(newsletter);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/main/hee-table-expander/table-expander.js":
/*!*********************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-table-expander/table-expander.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
   * Responsible for providing the "expand all" toggle functionality for table
   * cards.
   */
  var TableCard = /*#__PURE__*/function () {
    function TableCard(tableCard) {
      _classCallCheck(this, TableCard);
      this.tableCard = tableCard;
      this.toggleLink = this.tableCard.querySelector('.hee-table-expander__toggle a');
      this.expanders = this.tableCard.querySelectorAll('.nhsuk-expander');
      this.stateOpen = false;
      if (this.toggleLink !== null) {
        this.toggleLink.innerText = this.toggleLink.dataset.labelOpen;
        this.addEventListeners();
        this.initExpanderObserver();
      }
    }

    /**
     * Add event listeners to toggle link and summary elements.
     */
    _createClass(TableCard, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;
        // Handles toggle click event.
        this.toggleLink.addEventListener('click', function (event) {
          event.preventDefault();
          _this.toggleExpanders();
        });

        // Handles toggle link enter and spacebar key press.
        this.toggleLink.addEventListener('keydown', function (event) {
          if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            _this.toggleExpanders();
          }
        });
      }

      /**
       * We use observers to react to click events on individual expanders, as this
       * event functionality is handled by the nhsuk-details component's javascript.
       */
    }, {
      key: "initExpanderObserver",
      value: function initExpanderObserver() {
        var _this2 = this;
        // Configure observer to react to changes in an expander's "open" attribute.
        var observer = new MutationObserver(function (mutationsList) {
          mutationsList.forEach(function (mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
              _this2.updateToggleState();
            }
          });
        });
        this.expanders.forEach(function (expander) {
          observer.observe(expander, {
            attributes: true
          });
        });
      }

      /**
       * Toggle all expander content visibility within table card.
       */
    }, {
      key: "toggleExpanders",
      value: function toggleExpanders() {
        var _this3 = this;
        // Open / close each expander depending on current state.
        this.expanders.forEach(function (expander) {
          !_this3.stateOpen ? _this3.openExpander(expander) : _this3.closeExpander(expander);
        });

        // Toggle state flag.
        this.stateOpen = !this.stateOpen;

        // Toggle button text.
        !this.stateOpen ? this.toggleLink.innerText = this.toggleLink.dataset.labelOpen : this.toggleLink.innerText = this.toggleLink.dataset.labelClose;
      }

      /**
       *  Determines whether all expanders have been opened or closed and updates
       *  the state flag and toggle link text accordingly.
       *
       *  Function is called when MutationObserver detects a change in expander
       *  "open" attribute.
       */
    }, {
      key: "updateToggleState",
      value: function updateToggleState() {
        var allOpen = false;
        this.expanders.forEach(function (expander) {
          !expander.hasAttribute('open') ? allOpen = false : allOpen = true;
        });
        !allOpen ? this.stateOpen = false : this.stateOpen = true;
        !this.stateOpen ? this.toggleLink.innerText = this.toggleLink.dataset.labelOpen : this.toggleLink.innerText = this.toggleLink.dataset.labelClose;
      }

      /**
       * Opens an expander element.
       * @param {HTMLElement} expander Expander element.
       */
    }, {
      key: "openExpander",
      value: function openExpander(expander) {
        var summary = expander.querySelector('.nhsuk-details__summary');
        var text = expander.querySelector('.nhsuk-details__text');
        summary.setAttribute('aria-expanded', 'true');
        text.setAttribute('aria-hidden', 'false');
        expander.setAttribute('open', 'open');
      }

      /**
       * Closes an expander element.
       * @param {HTMLElement} expander Expander element.
       */
    }, {
      key: "closeExpander",
      value: function closeExpander(expander) {
        var summary = expander.querySelector('.nhsuk-details__summary');
        var text = expander.querySelector('.nhsuk-details__text');
        summary.setAttribute('aria-expanded', 'false');
        text.setAttribute('aria-hidden', 'true');
        expander.removeAttribute('open');
      }
    }]);
    return TableCard;
  }();
  _toConsumableArray(document.getElementsByClassName('hee-table-expander')).forEach(function (tableCard) {
    return new TableCard(tableCard);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/main/hee-tabs/tabs.js":
/*!*************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/hee-tabs/tabs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Tabs
  * Elements with the selector '.nhsuk-tabs' are passed into this class
  */
  var Tabs = /*#__PURE__*/function () {
    function Tabs(tabcomponent, i) {
      _classCallCheck(this, Tabs);
      this.tabcomponent = tabcomponent;
      this.init();
    }
    _createClass(Tabs, [{
      key: "init",
      value: function init() {
        var _this = this;
        var tabs = this.tabcomponent.querySelectorAll('[role="tab"]');
        var tabList = this.tabcomponent.querySelector('[role="tablist"]');
        tabs.forEach(function (tab) {
          tab.addEventListener("click", function (c) {
            return _this.changeTabs(c);
          });
        });
        var tabFocus = 0;
        tabList.addEventListener("keydown", function (e) {
          // Move right
          if (e.keyCode === 39 || e.keyCode === 37) {
            tabs[tabFocus].setAttribute("tabindex", -1);
            if (e.keyCode === 39) {
              tabFocus++;
              // If we're at the end, go to the start
              if (tabFocus >= tabs.length) {
                tabFocus = 0;
              }
              // Move left
            } else if (e.keyCode === 37) {
              tabFocus--;
              // If we're at the start, move to the end
              if (tabFocus < 0) {
                tabFocus = tabs.length - 1;
              }
            }
            tabs[tabFocus].setAttribute("tabindex", 0);
            tabs[tabFocus].focus();
          }
        });
      }
    }, {
      key: "changeTabs",
      value: function changeTabs(e) {
        // console.log(e);
        var target = e.target;
        // console.log(target);
        var parent = target.parentNode;
        // console.log(parent);
        var grandparent = parent.parentNode;
        // console.log(grandparent);
        var selected = parent.getElementsByClassName('nhsuk-tabs__list-item--selected')[0];
        // console.log(selected)
        var is_mobile = grandparent.classList.contains('nhsuk-tabs__mobile');
        //console.log(is_mobile)

        // Compare selected and target, and if on mobile
        // Close the tab if already open
        if (target == selected && is_mobile) {
          // Unselect all tabs
          this.removeSelected(parent);
          // Hide all tabs
          this.hideTabs(grandparent);
        } else {
          // Remove all current selected tabs
          this.removeSelected(parent);

          // Set this tab as selected
          this.setSelected(target);

          // Hide all tab panels
          this.hideTabs(grandparent);

          // Show the selected panel
          this.showSelected(grandparent.parentNode, target);
        }
      }
    }, {
      key: "removeSelected",
      value: function removeSelected(ele) {
        ele.querySelectorAll('[aria-selected="true"]').forEach(function (t) {
          return t.setAttribute("aria-selected", false);
        });
        ele.querySelectorAll('.nhsuk-tabs__list-item--selected').forEach(function (c) {
          return c.classList.remove("nhsuk-tabs__list-item--selected");
        });
      }
    }, {
      key: "setSelected",
      value: function setSelected(ele) {
        ele.setAttribute("aria-selected", true);
        ele.classList.add("nhsuk-tabs__list-item--selected");
      }
    }, {
      key: "hideTabs",
      value: function hideTabs(ele) {
        ele.querySelectorAll('[role="tabpanel"]').forEach(function (p) {
          return p.setAttribute("hidden", true);
        });
      }
    }, {
      key: "showSelected",
      value: function showSelected(ele, target) {
        // console.log(ele.querySelector(`#${target.getAttribute("aria-controls")}`))
        ele.querySelector("#".concat(target.getAttribute("aria-controls"))).removeAttribute("hidden");
      }
    }]);
    return Tabs;
  }();
  _toConsumableArray(document.getElementsByClassName('nhsuk-tabs')).forEach(function (tabs, i) {
    return new Tabs(tabs, i);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/anchorlinks.js":
/*!******************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/anchorlinks.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * AnchorLinks
  * Elements with the selector '.nhsuk-anchor-links' are passed into this class
  */
  var AnchorLinks = /*#__PURE__*/function () {
    function AnchorLinks(anchorLinks) {
      _classCallCheck(this, AnchorLinks);
      this.anchorLinks = anchorLinks;
      if (this.anchorLinks.hasAttribute('data-toc-js')) {
        return;
      }
      this.anchorLinks.hidden = true;
      this.foundHeadings = this.findHeadings(anchorLinks.dataset.headings);
      if (this.foundHeadings.length) {
        this.addAnchorsToPage();
        this.anchorLinks.hidden = false;
      }
    }
    _createClass(AnchorLinks, [{
      key: "findHeadings",
      value: function findHeadings(headings) {
        var foundHeadings = [];
        if (headings) {
          // Generate CSS selectors for only first level headings inside rich-text
          // areas and outside of components.
          var headingTypes = headings.split(',');
          var selectors = headingTypes.map(function (type) {
            return '.page__content > ' + type;
          });
          selectors = selectors.join(', ');
          var contentContainer = document.querySelector('.page__content');
          contentContainer.querySelectorAll(selectors).forEach(function (heading, i) {
            if (!heading.id) {
              heading.id = heading.innerText.replace(/ .*/, '').replace(/[\n\r]/g, '').replace(/\s/g, '').toLowerCase() + i;
            }
            foundHeadings.push(heading);
          });
        }
        return foundHeadings;
      }
    }, {
      key: "appearsOnRightPageColumn",
      value: function appearsOnRightPageColumn(heading, selector) {
        return _toConsumableArray(document.querySelectorAll(selector)).some(function (el) {
          return el !== heading && el.contains(heading);
        });
      }
    }, {
      key: "addAnchorsToPage",
      value: function addAnchorsToPage() {
        var _this = this;
        var ul = document.createElement('ul');
        this.foundHeadings.forEach(function (foundHeading) {
          if (!foundHeading.dataset.anchorlinksignore && !foundHeading.classList.contains('nhsuk-u-visually-hidden') && !foundHeading.classList.contains('nhsuk-card__heading') && !_this.appearsOnRightPageColumn(foundHeading, '.nhsuk-grid-column-one-third')) {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = '#' + foundHeading.id;
            var hiddenElements = foundHeading.getElementsByClassName("nhsuk-u-visually-hidden");
            while (hiddenElements.length > 0) hiddenElements[0].remove();
            a.innerText = foundHeading.innerText; // strip tags
            a.innerHTML = a.innerHTML.replace(/<br\s*[\/]?>/gi, " "); // strip <br>
            li.appendChild(a);
            ul.appendChild(li);
          }
        });
        this.anchorLinks.appendChild(ul);
      }
    }]);
    return AnchorLinks;
  }();
  _toConsumableArray(document.getElementsByClassName('nhsuk-anchor-links')).forEach(function (anchorLinks) {
    return new AnchorLinks(anchorLinks);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/toc.js":
/*!**********************************************************************!*\
  !*** ./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/toc.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Responsible for generating table of contents links.
  */
  var TableContents = /*#__PURE__*/function () {
    function TableContents(tableContents) {
      _classCallCheck(this, TableContents);
      this.tableContents = tableContents;
      this.containerSelector = '.page__main';
      this.headingSelector = 'h2.toc_h2';
      this.subHeadingSelector = 'h3.toc_h3';
      this.headingPrefix = 'hee-toc-heading';

      // Anchor links macro sets this data attribute when TOC is flagged as true.
      if (!this.tableContents.hasAttribute('data-toc-js')) {
        return;
      }

      // Only attempt to build TOC links if H2 anchors found on page.
      var headings = document.querySelectorAll(this.containerSelector + ' ' + this.headingSelector);
      if (headings.length === 0) {
        return;
      }

      // Build link structure from DOM and append generated markup to TOC
      // component.
      var links = this.createTocLinks(headings);
      this.setTocListMarkup(links);

      // Build back to top links and append to each TOC heading within page
      // content. We skip the first heading on the page.
      headings = [].slice.call(headings, 1);
      this.setBackToTopLinks(headings);
      var subHeadings = document.querySelectorAll(this.containerSelector + ' ' + this.subHeadingSelector);
      if (subHeadings.length > 0) {
        this.setBackToTopLinks(subHeadings);
      }
    }

    /**
     * Builds array of heading link attributes and their children.
     *
     * @param {NodeList}      headings
     *
     * @returns {Object[]}
     */
    _createClass(TableContents, [{
      key: "createTocLinks",
      value: function createTocLinks(headings) {
        var _this = this;
        var links = [];
        headings.forEach(function (heading, index) {
          var headingId = _this.headingPrefix + '-' + index;

          // Set unique id for current heading H2 element.
          heading.setAttribute('id', headingId);
          var link = {
            title: _this.getHeadingTitle(heading),
            anchor: headingId,
            children: []
          };
          var sibling = heading.nextElementSibling;
          var count = 0;

          // Traverse DOM for H3 elements after current H2 heading and append to
          // children links array.
          while (sibling && !sibling.classList.contains('toc_h2')) {
            if (sibling.tagName === 'H3' && sibling.classList.contains('toc_h3')) {
              // Set unique id for current heading H3 element.
              var subHeadingId = headingId + '-' + count;
              sibling.setAttribute('id', subHeadingId);
              link.children.push({
                title: _this.getHeadingTitle(sibling),
                anchor: subHeadingId
              });
              count++;
            }
            sibling = sibling.nextElementSibling;
          }
          links.push(link);
        });
        return links;
      }

      /**
       * Gets either the short or long title of the heading based on data attr.
       *
       * @param {Object}  heading
       *
       * @returns Object
       */
    }, {
      key: "getHeadingTitle",
      value: function getHeadingTitle(heading) {
        var title;
        if (heading.hasAttribute('data-short-title')) {
          title = heading.dataset.shortTitle;
        } else {
          title = heading.innerText;
        }
        return title;
      }

      /**
       * Creates TOC markup and appends to component.
       *
       * @returns void
       */
    }, {
      key: "setTocListMarkup",
      value: function setTocListMarkup(links) {
        var _this2 = this;
        var list = document.createElement('ul');
        links.forEach(function (link) {
          var listItem = document.createElement('li');
          if (link.children.length > 0) {
            listItem.classList.add('has-children');
          }
          var container = document.createElement('div');
          container.classList.add('hee-anchorlinks__wrapper');
          if (link.children.length > 0) {
            container.classList.add('chevron');
          } else {
            container.classList.add('circle');
          }
          var span = document.createElement('span');
          if (link.children.length > 0) {
            span.innerHTML = _this2.getChevronSVG();
          } else {
            span.innerHTML = _this2.getCircleSVG();
          }
          container.append(span);
          var parentLink = document.createElement('a');
          parentLink.setAttribute('href', '#' + link.anchor);
          parentLink.innerText = link.title;
          container.append(parentLink);
          listItem.append(container);
          if (link.children.length > 0) {
            var childList = document.createElement('ul');
            link.children.forEach(function (item) {
              var childItem = document.createElement('li');
              var childLink = document.createElement('a');
              childLink.setAttribute('href', '#' + item.anchor);
              childLink.innerText = item.title;
              childItem.append(childLink);
              childList.append(childItem);
            });
            listItem.append(childList);
          }
          list.append(listItem);
        });
        this.tableContents.append(list);
      }

      /**
       * Builds back to top link component.
       *
       * @returns Object
       */
    }, {
      key: "createBackToTopLink",
      value: function createBackToTopLink() {
        var container = document.createElement('div');
        container.classList.add('hee-back-to-top');
        var anchor = document.createElement('a');
        anchor.setAttribute('href', '#maincontent');
        anchor.setAttribute('title', 'Back to top');
        anchor.innerText = 'Back to top';
        container.append(anchor);
        return container;
      }

      /**
       * Injects back to top links above TOC headings within content.
       *
       * @param {NodeList}      headings
       *
       * @returns void
       */
    }, {
      key: "setBackToTopLinks",
      value: function setBackToTopLinks(headings) {
        var _this3 = this;
        headings.forEach(function (heading, index) {
          // Avoids duplicate back to top links when sticky is present.
          if (!heading.hasAttribute('data-has-top-link')) {
            var link = _this3.createBackToTopLink();
            heading.parentNode.insertBefore(link, heading);
            heading.setAttribute('data-has-top-link', 1);
          }
        });
      }

      /**
       * Returns markup for list item chevron SVG.
       *
       * @returns string
       */
    }, {
      key: "getChevronSVG",
      value: function getChevronSVG() {
        return '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M8.00019 6.99994C8.00095 7.13155 7.97572 7.26201 7.92596 7.38385C7.87619 7.50569 7.80287 7.6165 7.71019 7.70994L2.71019 12.7099C2.61695 12.8032 2.50626 12.8771 2.38443 12.9276C2.26261 12.9781 2.13204 13.004 2.00019 13.004C1.86833 13.004 1.73776 12.9781 1.61594 12.9276C1.49411 12.8771 1.38342 12.8032 1.29018 12.7099C1.19695 12.6167 1.12299 12.506 1.07253 12.3842C1.02206 12.2624 0.996094 12.1318 0.996094 11.9999C0.996094 11.8681 1.02206 11.7375 1.07253 11.6157C1.12299 11.4939 1.19695 11.3832 1.29018 11.2899L5.59019 6.99994L1.29018 2.70994C1.10188 2.52164 0.996094 2.26624 0.996094 1.99994C0.996094 1.73364 1.10188 1.47825 1.29018 1.28994C1.47849 1.10164 1.73388 0.99585 2.00019 0.99585C2.26649 0.99585 2.52188 1.10164 2.71019 1.28994L7.71019 6.28994C7.80287 6.38338 7.87619 6.4942 7.92596 6.61603C7.97572 6.73787 8.00095 6.86833 8.00019 6.99994Z" fill="black"/>' + '</svg>';
      }

      /**
       * Returns markup for list item circle SVG.
       *
       * @returns string
       */
    }, {
      key: "getCircleSVG",
      value: function getCircleSVG() {
        return '<svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<circle cx="1.5" cy="1.5" r="1.5" fill="black"/>' + '</svg>';
      }
    }]);
    return TableContents;
  }();
  _toConsumableArray(document.getElementsByClassName('hee-anchorlinks')).forEach(function (tableContents) {
    return new TableContents(tableContents);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js":
/*!**************************************************************************!*\
  !*** ./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
   * Filter
   * Elements with the selector '.nhsuk-filter' are passed into this class
   */
  var Filter = /*#__PURE__*/function () {
    function Filter(container) {
      _classCallCheck(this, Filter);
      this.container = container;
      this.checkboxes = _toConsumableArray(this.container.getElementsByClassName('nhsuk-checkboxes__input'));
      this.dropdowns = _toConsumableArray(this.container.getElementsByClassName('nhsuk-select'));
      this.groups = _toConsumableArray(this.container.getElementsByClassName('nhsuk-filter__group'));
      this.submit = this.container.querySelector('.nhsuk-filter__submit');
      this.clearToggle = _toConsumableArray(this.container.getElementsByClassName('nhsuk-filter__group__clear'));
      this.setUp();
      this.addEventListeners();
    }
    _createClass(Filter, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;
        this.checkboxes.forEach(function (checkbox) {
          checkbox.addEventListener('change', function (evt) {
            return _this.updateResults(evt);
          });
        });
        this.dropdowns.forEach(function (dropdown) {
          dropdown.addEventListener('change', function (evt) {
            return _this.updateResults(evt);
          });
        });
        this.groups.forEach(function (group) {
          var legend = group.querySelector('.nhsuk-fieldset__legend');
          if (legend) {
            legend.addEventListener('click', function (evt) {
              return _this.toggleGroupFieldset(evt);
            });
          }
        });
        this.clearToggle.forEach(function (toggle) {
          toggle.addEventListener('click', function (evt) {
            return _this.clearFilter(evt);
          });
        });
      }
    }, {
      key: "setUp",
      value: function setUp() {
        this.container.classList.add('nhsuk-filter--js');
        this.initFilters();
        this.initClearToggles();
        this.initCounters();

        // Hide submit button
        if (this.submit) {
          this.submit.hidden = true;
        }
      }
    }, {
      key: "initFilters",
      value: function initFilters() {
        var _this2 = this;
        this.groups.forEach(function (group) {
          if (!_this2.isGroupFilterActive(group)) {
            // Collapse group if filters not active.
            group.classList.add('nhsuk-filter__group--closed');
          }

          // Disable sub-group select if no option in parent selected.
          if (group.classList.contains('has-subgroup')) {
            var parentSelect = group.querySelector('.nhsuk-form-group.parent-group select');
            var subSelect = group.querySelector('.nhsuk-form-group.sub-group select');
            if (subSelect !== null && parentSelect !== null && parentSelect.value === '') {
              subSelect.setAttribute('disabled', 'disabled');
            }
          }

          // Enable scrollable checkbox groups if more than four options.
          var checkboxes = group.querySelectorAll('.nhsuk-checkboxes');
          checkboxes.forEach(function (cb) {
            if (cb.childElementCount > 4) {
              cb.classList.add('scrollable');
            }
          });
        });
      }
    }, {
      key: "initClearToggles",
      value: function initClearToggles() {
        var _this3 = this;
        this.groups.forEach(function (group) {
          var toggleLink = group.querySelector('.nhsuk-filter__group__clear');
          if (_this3.isGroupFilterActive(group)) {
            toggleLink.classList.add('visible');
          }
        });
      }
    }, {
      key: "initCounters",
      value: function initCounters() {
        var _this4 = this;
        this.groups.forEach(function (group) {
          _this4.updateActiveCount(group);
        });
      }
    }, {
      key: "updateActiveCount",
      value: function updateActiveCount(group) {
        var countElem = group.querySelector('.nhsuk-hint');
        if (countElem === null) {
          return;
        }
        var count = 0;
        var checkboxes = group.querySelectorAll('.nhsuk-checkboxes__input');
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked === true) {
            count++;
          }
        }
        if (count === 0) {
          countElem.classList.remove('visible');
          return;
        }
        countElem.innerText = "".concat(count, " selected");
        countElem.classList.add('visible');
      }
    }, {
      key: "isGroupFilterActive",
      value: function isGroupFilterActive(group) {
        // Check if checkboxes are active.
        var checkboxes = group.querySelectorAll('.nhsuk-checkboxes__input');
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked === true) {
            return true;
          }
        }

        // Check if selects are active.
        var selectElements = group.querySelectorAll('.nhsuk-select');
        for (var _i = 0; _i < selectElements.length; _i++) {
          if (selectElements[_i].value !== '') {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "toggleGroupFieldset",
      value: function toggleGroupFieldset(evt) {
        evt.preventDefault();
        evt.target.closest('.nhsuk-filter__group').classList.toggle('nhsuk-filter__group--closed');
      }
    }, {
      key: "setUpdatedFlag",
      value: function setUpdatedFlag(isUpdated) {
        // Set sort container hidden scroll flag value. to ensure viewport resets
        // after form submit.
        var flagElement = this.container.querySelector('input[data-update-flag="filter"]');
        if (flagElement !== null) {
          flagElement.value = isUpdated;
        }
      }
    }, {
      key: "updateResults",
      value: function updateResults(evt) {
        // Set sort container hidden scroll flag value,to ensure viewport scrolls
        // down to results listings after form submit.
        this.setUpdatedFlag(true);
        var parentGroup = evt.target.closest('.nhsuk-filter__group');
        this.updateActiveCount(parentGroup);
        this.container.submit();
      }
    }, {
      key: "clearFilter",
      value: function clearFilter(evt) {
        this.clearCheckboxes(evt);
        this.clearSelectElements(evt);
        this.updateResults(evt);
      }
    }, {
      key: "clearCheckboxes",
      value: function clearCheckboxes(evt) {
        evt.preventDefault();
        var toggleLink = evt.target;
        var checkboxes = toggleLink.parentElement.querySelectorAll('.nhsuk-checkboxes__input');
        checkboxes.forEach(function (cb) {
          cb.removeAttribute('checked');
        });
      }
    }, {
      key: "clearSelectElements",
      value: function clearSelectElements(evt) {
        evt.preventDefault();
        var toggleLink = evt.target;
        var selectElements = toggleLink.parentElement.querySelectorAll('.nhsuk-select');
        selectElements.forEach(function (select) {
          select.selectedIndex = 0;
        });
      }
    }]);
    return Filter;
  }();
  _toConsumableArray(document.getElementsByClassName('nhsuk-filter')).forEach(function (filter) {
    return new Filter(filter);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js":
/*!********************************************************************************!*\
  !*** ./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * FilterTag
  * Elements with the selector '.nhsuk-filter-tag' are passed into this class
  */
  var FilterTag = /*#__PURE__*/function () {
    function FilterTag(tag) {
      _classCallCheck(this, FilterTag);
      this.tag = tag;
      this.icon = tag.querySelector('.nhsuk-filter-tag__icon');
      this.setUp();
      this.addEventListeners();
    }
    _createClass(FilterTag, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;
        this.tag.addEventListener('click', function (evt) {
          return _this.removeFilter(evt);
        });
      }
    }, {
      key: "removeFilter",
      value: function removeFilter(evt) {
        evt.preventDefault();
        var groupTags = this.tag.parentElement.querySelectorAll('.nhsuk-filter-tag');

        // Remove entire filter tag group if no other tags present.
        if (groupTags.length === 1) {
          this.tag.parentElement.remove();
        } else {
          this.tag.remove();
        }
        document.querySelectorAll("form.nhsuk-filter input[value='".concat(this.tag.dataset.filter, "']")).forEach(function (checkbox) {
          checkbox.checked = false;
          checkbox.dispatchEvent(new Event('change'));
        });
        document.querySelectorAll("form.nhsuk-filter select option[value='".concat(this.tag.dataset.filter, "']")).forEach(function (option) {
          var parentGroupSelect = option.parentElement;
          parentGroupSelect.selectedIndex = 0;

          // Reset sub-group select if we are setting the parent,
          var formGroupElem = option.parentElement.parentElement.parentElement.parentElement;
          if (formGroupElem.classList.contains('parent-group')) {
            var subGroupSelect = formGroupElem.nextElementSibling.querySelector('.nhsuk-select');
            subGroupSelect.selectedIndex = 0;
          }
          parentGroupSelect.dispatchEvent(new Event('change'));
        });
      }
    }, {
      key: "setUp",
      value: function setUp() {
        this.tag.classList.add('nhsuk-filter-tag--js');
        if (this.icon) {
          this.icon.hidden = false;
        }
      }
    }]);
    return FilterTag;
  }();
  _toConsumableArray(document.getElementsByClassName('nhsuk-filter-tag')).forEach(function (tag) {
    return new FilterTag(tag);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js":
/*!****************************************************************************!*\
  !*** ./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
   * Listing
   * Elements with the selector '.nhsuk-listing' and '.hee-listings' are passed
   * into this class.
   *
   * @todo Remove legacy references to .nhsuk-listing and loops once all new
   * collection templates have been implemented.
   */
  var Listing = /*#__PURE__*/function () {
    function Listing(container) {
      var _this = this;
      _classCallCheck(this, Listing);
      this.container = container;
      _toConsumableArray(container.querySelectorAll('.hee-listing__filter__sort, .nhsuk-listing__sort')).forEach(function (formElement) {
        _this.addEventListeners(formElement);
        _this.toggleJavascriptElements(formElement);
      });

      // Disables browser restoring viewport to position before page reload.
      history.scrollRestoration = 'manual';
      this.scrollToResults();
    }
    _createClass(Listing, [{
      key: "addEventListeners",
      value: function addEventListeners(formElement) {
        var _this2 = this;
        if (formElement) {
          _toConsumableArray(formElement.getElementsByTagName('select')).forEach(function (select) {
            select.addEventListener('change', function (evt) {
              return _this2.updateResults(formElement);
            });
          });
        }
      }
    }, {
      key: "toggleJavascriptElements",
      value: function toggleJavascriptElements(formElement) {
        if (formElement) {
          _toConsumableArray(formElement.querySelectorAll('.hee-listing__filter__submit, .nhsuk-listing__sort__submit')).forEach(function (submit) {
            if (submit) {
              submit.hidden = true;
            }
          });
        }
      }
    }, {
      key: "setUpdatedFlag",
      value: function setUpdatedFlag(isUpdated) {
        var flagElement = this.container.querySelector('input[data-update-flag="listing"]');
        if (flagElement !== null) {
          flagElement.value = isUpdated;
        }
      }
    }, {
      key: "updateResults",
      value: function updateResults(formElement) {
        // Set sort container hidden scroll flag value,to ensure viewport scrolls
        // down to results listings after form submit.
        this.setUpdatedFlag(true);
        formElement.submit();
      }
    }, {
      key: "scrollToResults",
      value: function scrollToResults() {
        var url = new URL(window.location);
        if (url.searchParams.has('results_updated')) {
          var listingContainer = document.getElementById('results');
          if (listingContainer !== null) {
            listingContainer.scrollIntoView();
          }
        }
      }
    }]);
    return Listing;
  }();
  _toConsumableArray(document.querySelectorAll('.hee-listing, .nhsuk-listing')).forEach(function (listing) {
    return new Listing(listing);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/scaffolding/nhsuk-hee-cookies/cookies.js":
/*!************************************************************************!*\
  !*** ./app/assets/hee/blocks/scaffolding/nhsuk-hee-cookies/cookies.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var Cookies = /*#__PURE__*/function () {
    function Cookies() {
      _classCallCheck(this, Cookies);
      // banner
      this.useCookies = '';
      this.banner = document.querySelector('.nhsuk-cookie-banner');
      this.showCookies = document.getElementById('showCookies');
      this.removeCookies = document.getElementById('removeCookies');
      this.host = this.getHost();
      this.cookieStatus();
      this.setCookies();
      this.addEventListeners();

      // policy page
      this.Status = document.querySelector('.nhsuk__cookieStatus');
      this.In = document.querySelectorAll('.nhsuk__cookiesIn');
      this.Out = document.querySelectorAll('.nhsuk__cookiesOut');
      this.toggleStatus();
    }
    _createClass(Cookies, [{
      key: "cookieStatus",
      value: function cookieStatus() {
        var _this = this;
        var cookies = document.cookie.split(";");
        cookies.forEach(function (c) {
          var match = c.match(new RegExp('(^| )cookie_consent([^;]+)'));
          if (match) {
            var status = c.split("=")[1];
            _this.useCookies = status;
          }
        });
      }
    }, {
      key: "getHost",
      value: function getHost() {
        var host = window.location.host.toString().split(":")[0];
        return host;
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        if (this.showCookies) {
          this.showCookies.addEventListener('mousedown', this.showCookie);
        }
        if (this.removeCookies) {
          this.removeCookies.addEventListener('mousedown', this.removeCookie);
        }
      }
    }, {
      key: "bannerShow",
      value: function bannerShow() {
        if (this.banner) {
          this.banner.style.display = "block";
        }
      }
    }, {
      key: "bannerHide",
      value: function bannerHide() {
        if (this.banner) {
          this.banner.style.display = "none";
        }
      }
    }, {
      key: "setCookies",
      value: function setCookies() {
        var _this2 = this;
        if (this.useCookies === '') {
          this.bannerShow();
          var analyticsAccept = document.querySelector('#nhsuk-cookie-banner__link_accept_analytics');
          if (analyticsAccept) {
            analyticsAccept.addEventListener('click', function (evt) {
              evt.preventDefault();
              _this2.bannerHide();
              _this2.useCookie();
            });
          }
          var analyticsDecline = document.querySelector('#nhsuk-cookie-banner__link_decline_analytics');
          if (analyticsDecline) {
            analyticsDecline.addEventListener('click', function (evt) {
              evt.preventDefault();
              _this2.bannerHide();
              _this2.noCookie();
            });
          }
        }
      }
    }, {
      key: "useCookie",
      value: function useCookie() {
        document.cookie = "cookie_consent=true; domain=".concat(this.host, "; max-age=7776000");
        location.reload();
      }
    }, {
      key: "noCookie",
      value: function noCookie() {
        document.cookie = "cookie_consent=false; domain=".concat(this.host, "; max-age=7776000");
        location.reload();
      }
    }, {
      key: "toggleStatus",
      value: function toggleStatus() {
        var _this3 = this;
        if (this.Status) {
          document.querySelector('button.nhsuk__cookiesOut').addEventListener('click', function (evt) {
            evt.preventDefault();
            _this3.bannerHide();
            _this3.useCookie();
            location.reload();
          });
          document.querySelector('button.nhsuk__cookiesIn').addEventListener('click', function (evt) {
            evt.preventDefault();
            _this3.bannerHide();
            _this3.noCookie();
            location.reload();
          });
          if (this.useCookies === "false" || this.useCookies === '') {
            this.displayBlock(this.Out);
            this.displayNone(this.In);
          } else {
            this.displayNone(this.Out);
            this.displayBlock(this.In);
          }
        }
      }
    }, {
      key: "displayBlock",
      value: function displayBlock(item) {
        item.forEach(function (e) {
          return e.style.display = "inline-block";
        });
      }
    }, {
      key: "displayNone",
      value: function displayNone(item) {
        item.forEach(function (e) {
          return e.style.display = "none";
        });
      }

      // redundant but useful
    }, {
      key: "showCookie",
      value: function showCookie() {
        var output = document.getElementById('cookies');
        output.textContent = '> ' + document.cookie;
      }
    }, {
      key: "removeCookie",
      value: function removeCookie() {
        document.cookie = "cookie_consent=false; max-age=0";
        location.reload();
      }
    }]);
    return Cookies;
  }();
  new Cookies(document);
});

/***/ }),

/***/ "./app/assets/hee/blocks/scaffolding/nhsuk-hee-header/navigation/subnav.js":
/*!*********************************************************************************!*\
  !*** ./app/assets/hee/blocks/scaffolding/nhsuk-hee-header/navigation/subnav.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
* SubNav
* Elements with the selector '.nhsuk-subnav' are passed into this class
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var subNav = /*#__PURE__*/function () {
    function subNav(container) {
      _classCallCheck(this, subNav);
      this.container = container;
      this.toggleLink = this.container.querySelector('a');
      this.parentList = this.container.parentNode;
      this.addEventListeners();
    }
    _createClass(subNav, [{
      key: "addEventListeners",
      value: function addEventListeners() {
        var _this = this;
        if (this.toggleLink) {
          this.toggleLink.addEventListener('click', function (event) {
            return event.preventDefault();
          });
          this.toggleLink.addEventListener('mousedown', function (event) {
            return _this.toggleMenu(event);
          });
          this.toggleLink.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
              _this.toggleMenu(event);
            }
          });
        }
      }
    }, {
      key: "handleState",
      value: function handleState() {
        var _this2 = this;
        var activeElems = document.querySelectorAll(".nhsuk-subnav.is-active");
        activeElems.forEach(function (elem) {
          if (elem != _this2.container) {
            elem.classList.remove("is-active");
            elem.toggleAttribute("aria-expanded");
          } else {
            _this2.toggleClass(_this2.parentList, 'subnav-open');
          }
        });
        if (activeElems.length === 0) {
          this.toggleClass(this.parentList, 'subnav-open');
        }
      }
    }, {
      key: "toggleMenu",
      value: function toggleMenu(event) {
        this.handleState();
        this.toggleClass(this.container, "is-active");
        this.toggleAttribute(this.container, "aria-expanded");
      }
    }, {
      key: "toggleClass",
      value: function toggleClass(element, className) {
        if (!element || !className) return;
        var hasClass = element.classList.contains(className);
        if (hasClass) {
          element.classList.remove(className);
        } else {
          element.classList.add(className);
        }
      }
    }, {
      key: "toggleAttribute",
      value: function toggleAttribute(element, attr) {
        // Return without error if element or attr are missing
        if (!element || !attr) return;
        // Toggle attribute value. Treat no existing attr same as when set to false
        var value = element.getAttribute(attr) === 'true' ? 'false' : 'true';
        element.setAttribute(attr, value);
      }
    }]);
    return subNav;
  }();
  _toConsumableArray(document.getElementsByClassName('nhsuk-subnav')).forEach(function (subnav) {
    return new subNav(subnav);
  });

  /* document.getElementById("close-menu").addEventListener('mousedown', function(){
    document.getElementById("toggle-menu").focus()
  }) */

  var closeMenu = document.querySelector("#close-menu");
  closeMenu && closeMenu.addEventListener('mousedown', function () {
    document.querySelector("#toggle-menu").focus();
  });
  document.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
      userInput(event);
    }
  });
  document.addEventListener('mousedown', userInput);
  function userInput(event) {
    // close menu if clicking outside
    var openMenu = document.querySelector(".nhsuk-header__navigation.js-show");
    if (openMenu) {
      var isNotMenu = event.target !== openMenu;
      var isNotMenuButton = event.target !== document.querySelector("#toggle-menu");
      var isMenuChild = event.target.closest(".nhsuk-header__navigation.js-show");
      if (isNotMenu && isNotMenuButton && !isMenuChild) {
        openMenu.classList.remove("js-show");
      }
    }
    // close sub nav if clicking anywhere on the document except the open or a new subnav
    var openSub = document.querySelector(".nhsuk-subnav.is-active");
    if (openSub) {
      var isNotSub = event.target !== openSub;
      var isSubChild = event.target.closest(".nhsuk-subnav.is-active");
      if (isNotSub && !isSubChild) {
        openSub.classList.remove("is-active");
        document.querySelector(".nhsuk-header__navigation-list").classList.remove("subnav-open");
      }
    }
  }
});

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
/*!*******************************!*\
  !*** ./app/assets/hee/hee.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_scaffolding_nhsuk_hee_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/scaffolding/nhsuk-hee-cookies/cookies */ "./app/assets/hee/blocks/scaffolding/nhsuk-hee-cookies/cookies.js");
/* harmony import */ var _blocks_scaffolding_nhsuk_hee_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/scaffolding/nhsuk-hee-header/navigation/subnav */ "./app/assets/hee/blocks/scaffolding/nhsuk-hee-header/navigation/subnav.js");
/* harmony import */ var _blocks_content_sidebar_hee_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/content/sidebar/hee-anchorlinks/anchorlinks */ "./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/anchorlinks.js");
/* harmony import */ var _blocks_content_footer_hee_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/content/footer/hee-anchorlinks-sticky/anchorlinks-sticky */ "./app/assets/hee/blocks/content/footer/hee-anchorlinks-sticky/anchorlinks-sticky.js");
/* harmony import */ var _blocks_content_sidebar_hee_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/content/sidebar/hee-anchorlinks/toc */ "./app/assets/hee/blocks/content/sidebar/hee-anchorlinks/toc.js");
/* harmony import */ var _blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-listing/listing */ "./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js");
/* harmony import */ var _blocks_content_main_hee_media_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/content/main/hee-media/media */ "./app/assets/hee/blocks/content/main/hee-media/media.js");
/* harmony import */ var _blocks_content_main_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/content/main/hee-navmap/navmap */ "./app/assets/hee/blocks/content/main/hee-navmap/navmap.js");
/* harmony import */ var _blocks_content_main_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/content/main/hee-newsletter/newsletter */ "./app/assets/hee/blocks/content/main/hee-newsletter/newsletter.js");
/* harmony import */ var _blocks_content_main_hee_card_summary_summary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/content/main/hee-card--summary/summary */ "./app/assets/hee/blocks/content/main/hee-card--summary/summary.js");
/* harmony import */ var _blocks_content_main_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/content/main/hee-tabs/tabs */ "./app/assets/hee/blocks/content/main/hee-tabs/tabs.js");
/* harmony import */ var _blocks_content_main_hee_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/content/main/hee-table-expander/table-expander */ "./app/assets/hee/blocks/content/main/hee-table-expander/table-expander.js");
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
// NHSUK-HEE Components



// HEE Components











// Unsorted components



// Initialize components
document.addEventListener('DOMContentLoaded', function () {
  (0,_blocks_content_main_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_content_sidebar_hee_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_content_footer_hee_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_scaffolding_nhsuk_hee_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_blocks_content_main_hee_media_media__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_content_main_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_blocks_scaffolding_nhsuk_hee_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_content_main_hee_card_summary_summary__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_content_main_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_blocks_content_sidebar_hee_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_blocks_content_main_hee_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsWUFBTTtFQUNuQjtBQUNGO0FBQ0E7RUFGRSxJQUdNQSxpQkFBaUI7SUFFckIsU0FBQUEsa0JBQVlDLFNBQVMsRUFBRTtNQUFBQyxlQUFBLE9BQUFGLGlCQUFBO01BRXJCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO01BQzFCLElBQUksQ0FBQ0UsU0FBUyxHQUFHLElBQUksQ0FBQ0YsU0FBUyxDQUFDRyxhQUFhLENBQUMscUNBQXFDLENBQUM7TUFDcEYsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0csYUFBYSxDQUFDLGtCQUFrQixDQUFDO01BQ3pFLElBQUksQ0FBQ0Usa0JBQWtCLEdBQUdDLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLGtDQUFrQyxDQUFDO01BRXBGLElBQUksQ0FBQ0ksaUJBQWlCLENBQUMsQ0FBQztNQUN4QixJQUFJLENBQUNDLG1CQUFtQixDQUFDLENBQUM7SUFDNUI7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBTElDLFlBQUEsQ0FBQVYsaUJBQUE7TUFBQVcsR0FBQTtNQUFBQyxLQUFBLEVBTUEsU0FBQUosa0JBQUEsRUFBb0I7UUFBQSxJQUFBSyxLQUFBO1FBQ2xCLElBQUksQ0FBQ1YsU0FBUyxDQUFDVyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7VUFBQSxPQUFNRCxLQUFJLENBQUNFLHVCQUF1QixDQUFDLENBQUM7UUFBQSxFQUFDO1FBQ2xGLElBQUksQ0FBQ1osU0FBUyxDQUFDVyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQUUsS0FBSyxFQUFJO1VBQ2hELElBQUlBLEtBQUssQ0FBQ0MsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN4QkosS0FBSSxDQUFDRSx1QkFBdUIsQ0FBQyxDQUFDO1VBQ2hDO1FBQ0YsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDVixpQkFBaUIsQ0FBQ1MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNFLEtBQUssRUFBSztVQUMxRCxJQUFJQSxLQUFLLENBQUNFLE1BQU0sQ0FBQ0MsT0FBTyxLQUFLLEdBQUcsRUFBRTtZQUNoQ04sS0FBSSxDQUFDRSx1QkFBdUIsQ0FBQyxDQUFDO1VBQ2hDO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDWixTQUFTLENBQUNXLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBRSxLQUFLLEVBQUk7VUFDaEQsSUFBSUEsS0FBSyxDQUFDRSxNQUFNLENBQUNDLE9BQU8sS0FBSyxHQUFHLElBQUlILEtBQUssQ0FBQ0MsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN4REosS0FBSSxDQUFDRSx1QkFBdUIsQ0FBQyxDQUFDO1VBQ2hDO1FBQ0YsQ0FBQyxDQUFDO1FBRUZLLE1BQU0sQ0FBQ04sZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07VUFDdENELEtBQUksQ0FBQ0osbUJBQW1CLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUM7TUFDSjs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFMSTtNQUFBRSxHQUFBO01BQUFDLEtBQUEsRUFNQSxTQUFBRyx3QkFBQSxFQUEwQjtRQUN4QixJQUFJLENBQUNaLFNBQVMsQ0FBQ2tCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUNqQixpQkFBaUIsQ0FBQ2dCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUVwRCxJQUFJLElBQUksQ0FBQ3JCLFNBQVMsQ0FBQ3NCLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSyxPQUFPLEVBQUU7VUFDNUQsSUFBSSxDQUFDdEIsU0FBUyxDQUFDdUIsWUFBWSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUM7UUFDdEQsQ0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDdkIsU0FBUyxDQUFDdUIsWUFBWSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUM7UUFDdkQ7UUFFQSxJQUFJLENBQUNuQixpQkFBaUIsQ0FBQ0QsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUNxQixLQUFLLENBQUMsQ0FBQztNQUNqRTs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFMSTtNQUFBZCxHQUFBO01BQUFDLEtBQUEsRUFNQSxTQUFBSCxvQkFBQSxFQUFzQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDaUIsbUJBQW1CLENBQUMsSUFBSSxDQUFDcEIsa0JBQWtCLENBQUNGLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1VBQzFFLElBQUksQ0FBQ0gsU0FBUyxDQUFDb0IsU0FBUyxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ3hDLENBQUMsTUFBTTtVQUNMLElBQUksQ0FBQzFCLFNBQVMsQ0FBQ29CLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUMzQztNQUNGOztNQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBTkk7TUFBQWpCLEdBQUE7TUFBQUMsS0FBQSxFQU9BLFNBQUFjLG9CQUFvQkcsT0FBTyxFQUFFO1FBQzNCLElBQU1DLFFBQVEsR0FBR0QsT0FBTyxDQUFDRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELElBQU1DLGFBQWEsR0FBR0gsT0FBTyxDQUFDSSxZQUFZO1FBQzFDLElBQU1DLFlBQVksR0FBR0wsT0FBTyxDQUFDTSxXQUFXO1FBRXhDLE9BQU9MLFFBQVEsQ0FBQ00sR0FBRyxJQUFJLENBQUNKLGFBQWEsSUFDaENGLFFBQVEsQ0FBQ08sSUFBSSxJQUFJLENBQUNILFlBQVksSUFDOUJKLFFBQVEsQ0FBQ1EsS0FBSyxJQUFJLENBQUNsQixNQUFNLENBQUNtQixVQUFVLElBQUloQyxRQUFRLENBQUNpQyxlQUFlLENBQUNDLFdBQVcsSUFBSVAsWUFBWSxJQUM1RkosUUFBUSxDQUFDWSxNQUFNLElBQUksQ0FBQ3RCLE1BQU0sQ0FBQ3VCLFdBQVcsSUFBSXBDLFFBQVEsQ0FBQ2lDLGVBQWUsQ0FBQ0ksWUFBWSxJQUFJWixhQUFhO01BQ3ZHO0lBQUM7SUFBQSxPQUFBaEMsaUJBQUE7RUFBQTtFQUdINkMsa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ3VDLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDLEVBQUVDLE9BQU8sQ0FBQyxVQUFBQyxXQUFXO0lBQUEsT0FBSSxJQUFJaEQsaUJBQWlCLENBQUNnRCxXQUFXLENBQUM7RUFBQSxFQUFDO0FBQzVILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdELGlFQUFlLFlBQU07RUFBQSxJQUViQyxXQUFXO0lBRWYsU0FBQUEsWUFBWUMsV0FBVyxFQUFFO01BQUFoRCxlQUFBLE9BQUErQyxXQUFBO01BQ3ZCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXO01BQzlCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0QsV0FBVyxDQUFDOUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDO01BRTlFLElBQUksQ0FBQ0ksaUJBQWlCLENBQUMsQ0FBQztJQUMxQjs7SUFFQTtBQUNKO0FBQ0E7SUFGSUUsWUFBQSxDQUFBdUMsV0FBQTtNQUFBdEMsR0FBQTtNQUFBQyxLQUFBLEVBR0EsU0FBQUosa0JBQUEsRUFBb0I7UUFBQSxJQUFBSyxLQUFBO1FBQ2xCO1FBQ0EsSUFBSSxDQUFDc0MsVUFBVSxDQUFDckMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNFLEtBQUssRUFBSztVQUNuREEsS0FBSyxDQUFDb0MsY0FBYyxDQUFDLENBQUM7VUFDdEJ2QyxLQUFJLENBQUN3QyxhQUFhLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUM7O1FBRUY7UUFDQSxJQUFJLENBQUNGLFVBQVUsQ0FBQ3JDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFDRSxLQUFLLEVBQUs7VUFDckQsSUFBSUEsS0FBSyxDQUFDQyxPQUFPLEtBQUssRUFBRSxJQUFJRCxLQUFLLENBQUNDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDaERELEtBQUssQ0FBQ29DLGNBQWMsQ0FBQyxDQUFDO1lBQ3RCdkMsS0FBSSxDQUFDd0MsYUFBYSxDQUFDLENBQUM7VUFDdEI7UUFDRixDQUFDLENBQUM7TUFDSjs7TUFFQTtBQUNKO0FBQ0E7SUFGSTtNQUFBMUMsR0FBQTtNQUFBQyxLQUFBLEVBR0EsU0FBQXlDLGNBQUEsRUFBZ0I7UUFDZCxJQUFJLENBQUNILFdBQVcsQ0FBQzdCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsQ0FBQztNQUM5QztJQUFDO0lBQUEsT0FBQTJCLFdBQUE7RUFBQTtFQUdISixrQkFBQSxDQUFJdEMsUUFBUSxDQUFDdUMsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsRUFBRUMsT0FBTyxDQUFDLFVBQUFHLFdBQVc7SUFBQSxPQUFJLElBQUlELFdBQVcsQ0FBQ0MsV0FBVyxDQUFDO0VBQUEsRUFBQztBQUNoSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDRCxpRUFBZSxZQUFNO0VBQ25CO0FBQ0Y7QUFDQTtBQUNBO0VBSEUsSUFJTUksVUFBVTtJQUNkLFNBQUFBLFdBQVlyRCxTQUFTLEVBQUU7TUFBQUMsZUFBQSxPQUFBb0QsVUFBQTtNQUNyQixJQUFJLENBQUNyRCxTQUFTLEdBQUdBLFNBQVM7TUFDMUIsSUFBSSxDQUFDc0QsT0FBTyxHQUFHdEQsU0FBUyxDQUFDdUQsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO01BRTlDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUN6RCxTQUFTLENBQUM7TUFDM0J3RCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNILE9BQU8sQ0FBQztNQUN6QixJQUFJLENBQUMvQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFCO0lBQUNFLFlBQUEsQ0FBQTRDLFVBQUE7TUFBQTNDLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFKLGtCQUFBLEVBQW9CO1FBQUEsSUFBQUssS0FBQTtRQUNsQixJQUFJLElBQUksQ0FBQzBDLE9BQU8sRUFBRTtVQUNoQixJQUFJLENBQUNBLE9BQU8sQ0FBQ1IsT0FBTyxDQUFDLFVBQUF6QixNQUFNO1lBQUEsT0FBSUEsTUFBTSxDQUFDUixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQTZDLEdBQUc7Y0FBQSxPQUFJOUMsS0FBSSxDQUFDK0MsZ0JBQWdCLENBQUNELEdBQUcsQ0FBQztZQUFBLEVBQUM7VUFBQSxFQUFDO1FBQ3JHO01BQ0Y7SUFBQztNQUFBaEQsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWdELGlCQUFBLEVBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxFQUFFO1VBQ3RCLElBQUksQ0FBQzVELFNBQVMsQ0FBQ29CLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLGdDQUFnQyxDQUFDO1FBQ25FLENBQUMsTUFBTTtVQUNMLElBQUksQ0FBQzNCLFNBQVMsQ0FBQ29CLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLGdDQUFnQyxDQUFDO1FBQ2hFO01BQ0Y7SUFBQztNQUFBaEIsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWlELFlBQUEsRUFBYztRQUNaLElBQUcsSUFBSSxDQUFDNUQsU0FBUyxDQUFDb0IsU0FBUyxDQUFDeUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLEVBQUM7VUFDckUsT0FBTyxJQUFJO1FBQ2IsQ0FBQyxNQUFNO1VBQ0wsT0FBTyxLQUFLO1FBQ2Q7TUFDRjtJQUFDO0lBQUEsT0FBQVIsVUFBQTtFQUFBO0VBSUhULGtCQUFBLENBQUl0QyxRQUFRLENBQUN1QyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFQyxPQUFPLENBQUMsVUFBQWdCLFVBQVU7SUFBQSxPQUFJLElBQUlULFVBQVUsQ0FBQ1MsVUFBVSxDQUFDO0VBQUEsRUFBQztBQUNqSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRCxpRUFBZSxZQUFNO0VBQ25CO0FBQ0Y7QUFDQTtBQUNBO0VBSEUsSUFJTUMsTUFBTTtJQUNWLFNBQUFBLE9BQVlDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO01BQUFoRSxlQUFBLE9BQUE4RCxNQUFBO01BQ3BCLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO01BQ2QsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7TUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBQXRCLGtCQUFBLENBQU9xQixHQUFHLENBQUNwQixzQkFBc0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztNQUM5RCxJQUFJLENBQUNzQixJQUFJLEdBQUF2QixrQkFBQSxDQUFPb0IsR0FBRyxDQUFDVCxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO01BRXpELElBQUksQ0FBQ2EsYUFBYSxDQUFDLENBQUM7TUFDcEIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztNQUNqQixJQUFJLENBQUNDLGlCQUFpQixDQUFDLENBQUM7TUFDeEIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNCO0lBQUM5RCxZQUFBLENBQUFzRCxNQUFBO01BQUFyRCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBMEQsV0FBQSxFQUFZO1FBQ1YsSUFBSSxDQUFDSixHQUFHLENBQUM5RCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNxRSxTQUFTLEdBQUcsRUFBRTtRQUM5QyxJQUFJLENBQUNQLEdBQUcsQ0FBQzlELGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ3NFLFdBQVcsQ0FBQ25FLFFBQVEsQ0FBQ29FLGNBQWMsc1dBTWxFLENBQUMsQ0FBQztNQUNMO0lBQUM7TUFBQWhFLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUF5RCxjQUFBLEVBQWU7UUFBQSxJQUFBeEQsS0FBQTtRQUNiLElBQUksQ0FBQ3NELE9BQU8sQ0FBQ3BCLE9BQU8sQ0FBQyxVQUFBNkIsTUFBTSxFQUFJO1VBQzdCLElBQU1DLGVBQWUsR0FBR2hFLEtBQUksQ0FBQ2lFLGNBQWMsQ0FBQ0YsTUFBTSxDQUFDRyxFQUFFLENBQUM7VUFDdEQsSUFBTUMsUUFBUSxHQUFJSCxlQUFlLENBQUNJLElBQUksR0FBR0osZUFBZSxDQUFDSSxJQUFJLEdBQUcsR0FBRztVQUNuRSxJQUFNQyxTQUFTLEdBQUlMLGVBQWUsQ0FBQ0osU0FBUyxHQUFHSSxlQUFlLENBQUNKLFNBQVMsR0FBRyxFQUFFO1VBQzdFLElBQU1VLFFBQVEsR0FBR1AsTUFBTSxDQUFDSCxTQUFTO1VBQ2pDLElBQU1XLFFBQVEsc0JBQUFDLE1BQUEsQ0FBcUJMLFFBQVEseUVBQUFLLE1BQUEsQ0FDaENILFNBQVMsMEJBQUFHLE1BQUEsQ0FDaEJGLFFBQVEsbUJBQ1A7VUFDTFAsTUFBTSxDQUFDSCxTQUFTLEdBQUdXLFFBQVE7UUFDN0IsQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBekUsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQTJELGtCQUFBLEVBQW9CO1FBQUEsSUFBQWUsTUFBQTtRQUNsQixJQUFJLENBQUNuQixPQUFPLENBQUNwQixPQUFPLENBQUMsVUFBQWxCLE9BQU87VUFBQSxPQUFJQSxPQUFPLENBQUNmLGdCQUFnQixDQUFDLFlBQVksRUFBRTtZQUFBLE9BQU13RSxNQUFJLENBQUNDLEtBQUssQ0FBQzFELE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDO1VBQUEsRUFBQztRQUFBLEVBQUM7UUFDakgsSUFBSSxDQUFDc0MsT0FBTyxDQUFDcEIsT0FBTyxDQUFDLFVBQUFsQixPQUFPO1VBQUEsT0FBSUEsT0FBTyxDQUFDZixnQkFBZ0IsQ0FBQyxVQUFVLEVBQUU7WUFBQSxPQUFNd0UsTUFBSSxDQUFDRSxNQUFNLENBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztVQUFBLEVBQUM7UUFBQSxFQUFDO1FBQ2hILElBQUksQ0FBQ3NDLE9BQU8sQ0FBQ3BCLE9BQU8sQ0FBQyxVQUFBbEIsT0FBTztVQUFBLE9BQUlBLE9BQU8sQ0FBQ2YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUFFLEtBQUs7WUFBQSxPQUFJc0UsTUFBSSxDQUFDRyxRQUFRLENBQUN6RSxLQUFLLENBQUM7VUFBQSxFQUFDO1FBQUEsRUFBQztNQUNuRztJQUFDO01BQUFMLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUE0RCxtQkFBQSxFQUFxQjtRQUFBLElBQUFrQixNQUFBO1FBQ25CLElBQUksQ0FBQ3RCLElBQUksQ0FBQ3JCLE9BQU8sQ0FBQyxVQUFBNEMsSUFBSTtVQUFBLE9BQUlBLElBQUksQ0FBQzdFLGdCQUFnQixDQUFDLFlBQVksRUFBRSxVQUFBRSxLQUFLO1lBQUEsT0FBSTBFLE1BQUksQ0FBQ0UsU0FBUyxDQUFDNUUsS0FBSyxDQUFDRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztVQUFBLEVBQUM7UUFBQSxFQUFDO1FBQ3BILElBQUksQ0FBQ2tELElBQUksQ0FBQ3JCLE9BQU8sQ0FBQyxVQUFBbEIsT0FBTztVQUFBLE9BQUlBLE9BQU8sQ0FBQ2YsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQUFFLEtBQUs7WUFBQSxPQUFJMEUsTUFBSSxDQUFDRSxTQUFTLENBQUM1RSxLQUFLLENBQUNFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDO1VBQUEsRUFBQztRQUFBLEVBQUM7UUFDekgsSUFBSSxDQUFDa0QsSUFBSSxDQUFDckIsT0FBTyxDQUFDLFVBQUE0QyxJQUFJO1VBQUEsT0FBSUEsSUFBSSxDQUFDN0UsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUFFLEtBQUs7WUFBQSxPQUFJMEUsTUFBSSxDQUFDRSxTQUFTLENBQUM1RSxLQUFLLENBQUNFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO1VBQUEsRUFBQztRQUFBLEVBQUM7UUFDakgsSUFBSSxDQUFDa0QsSUFBSSxDQUFDckIsT0FBTyxDQUFDLFVBQUE0QyxJQUFJO1VBQUEsT0FBSUEsSUFBSSxDQUFDN0UsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQUFFLEtBQUs7WUFBQSxPQUFJMEUsTUFBSSxDQUFDRSxTQUFTLENBQUM1RSxLQUFLLENBQUNFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDO1VBQUEsRUFBQztRQUFBLEVBQUM7TUFDckg7SUFBQztNQUFBUCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBaUYsVUFBVUMsR0FBRyxFQUFFO1FBQ2JBLEdBQUcsQ0FBQ0MsYUFBYSxDQUFDckIsV0FBVyxDQUFDb0IsR0FBRyxDQUFDO01BQ3BDO0lBQUM7TUFBQW5GLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUEyRSxNQUFNckUsTUFBTSxFQUFFOEUsS0FBSyxFQUFFL0IsR0FBRyxFQUFFO1FBQ3hCLElBQUksQ0FBQzRCLFNBQVMsQ0FBQzNFLE1BQU0sQ0FBQztRQUN0QkEsTUFBTSxDQUFDRyxTQUFTLENBQUNNLEdBQUcsQ0FBQ3FFLEtBQUssQ0FBQztRQUMzQixJQUFHL0IsR0FBRyxFQUFFO1VBQ04sSUFBTWdDLFFBQVEsR0FBRyxJQUFJLENBQUNuQixjQUFjLENBQUM1RCxNQUFNLENBQUM2RCxFQUFFLENBQUM7VUFDL0MsSUFBR2tCLFFBQVEsRUFBRUEsUUFBUSxDQUFDNUUsU0FBUyxDQUFDTSxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzlDO01BQ0Y7SUFBQztNQUFBaEIsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQTRFLE9BQU90RSxNQUFNLEVBQUU4RSxLQUFLLEVBQUUvQixHQUFHLEVBQUU7UUFDekIvQyxNQUFNLENBQUNHLFNBQVMsQ0FBQ08sTUFBTSxDQUFDb0UsS0FBSyxDQUFDO1FBQzlCLElBQUcvQixHQUFHLEVBQUU7VUFDTixJQUFNZ0MsUUFBUSxHQUFHLElBQUksQ0FBQ25CLGNBQWMsQ0FBQzVELE1BQU0sQ0FBQzZELEVBQUUsQ0FBQztVQUMvQyxJQUFHa0IsUUFBUSxFQUFFQSxRQUFRLENBQUM1RSxTQUFTLENBQUNPLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakQ7TUFDRjtJQUFDO01BQUFqQixHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBNkUsU0FBU3pFLEtBQUssRUFBRTtRQUNkQSxLQUFLLENBQUNvQyxjQUFjLENBQUMsQ0FBQztRQUN0QixJQUFNOEMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDcEIsY0FBYyxDQUFDOUQsS0FBSyxDQUFDRSxNQUFNLENBQUNpRixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUNwQixFQUFFLENBQUM7UUFDNUUsSUFBR21CLGtCQUFrQixFQUFFQSxrQkFBa0IsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7TUFDbkQ7SUFBQztNQUFBekYsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWtFLGVBQWV1QixNQUFNLEVBQUU7UUFDckIsSUFBTXhCLGVBQWUsR0FBRyxJQUFJLENBQUNULElBQUksQ0FBQ2tDLElBQUksQ0FBQyxVQUFBWCxJQUFJO1VBQUEsT0FBSUEsSUFBSSxDQUFDWixFQUFFLEtBQUtzQixNQUFNO1FBQUEsRUFBQztRQUNsRSxPQUFReEIsZUFBZTtNQUN6QjtJQUFDO01BQUFsRSxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBZ0YsVUFBVTFFLE1BQU0sRUFBRXFGLFNBQVMsRUFBRUMsSUFBSSxFQUFFO1FBQ2pDLElBQU1ILE1BQU0sR0FBR25GLE1BQU0sQ0FBQzZELEVBQUU7UUFDeEIsSUFBTUYsZUFBZSxHQUFHLElBQUksQ0FBQzRCLGVBQWUsQ0FBQ0osTUFBTSxDQUFDO1FBQ3BELElBQUdFLFNBQVMsS0FBSyxJQUFJLEVBQUU7VUFDckIsSUFBSSxDQUFDaEIsS0FBSyxDQUFDVixlQUFlLEVBQUUyQixJQUFJLENBQUM7UUFDbkMsQ0FBQyxNQUFNO1VBQ0wsSUFBSSxDQUFDaEIsTUFBTSxDQUFDWCxlQUFlLEVBQUUyQixJQUFJLENBQUM7UUFDcEM7TUFDRjtJQUFDO01BQUE3RixHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBNkYsZ0JBQWdCSixNQUFNLEVBQUU7UUFDdEIsSUFBTXhCLGVBQWUsR0FBRyxJQUFJLENBQUNWLE9BQU8sQ0FBQ21DLElBQUksQ0FBQyxVQUFBWCxJQUFJO1VBQUEsT0FBSUEsSUFBSSxDQUFDWixFQUFFLEtBQUtzQixNQUFNO1FBQUEsRUFBQztRQUNyRSxPQUFReEIsZUFBZTtNQUN6QjtJQUFDO0lBQUEsT0FBQWIsTUFBQTtFQUFBO0VBR0huQixrQkFBQSxDQUFJdEMsUUFBUSxDQUFDaUQsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUVULE9BQU8sQ0FBQyxVQUFBa0IsR0FBRyxFQUFJO0lBQzFEO0lBQ0EsSUFBTTZCLEdBQUcsR0FBRzdCLEdBQUcsQ0FBQzdELGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDdkMwRixHQUFHLENBQUNoRixnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBVTtNQUNyQyxJQUFNb0QsR0FBRyxHQUFHNEIsR0FBRyxDQUFDWSxjQUFjLENBQUMsQ0FBQyxDQUFDdEcsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUNyRCxJQUFHOEQsR0FBRyxFQUFDO1FBQ0wsSUFBSUYsTUFBTSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQztNQUN0QjtJQUNGLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhELGlFQUFlLFlBQU07RUFDbkI7QUFDRjtBQUNBO0FBQ0E7RUFIRSxJQUlNeUMsVUFBVTtJQUNkLFNBQUFBLFdBQVlDLFVBQVUsRUFBRTtNQUFBMUcsZUFBQSxPQUFBeUcsVUFBQTtNQUN0QixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVTtNQUM1QixJQUFJLENBQUNDLGNBQWMsR0FBR0QsVUFBVSxDQUFDcEQsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO01BQy9ELElBQUksQ0FBQ3NELE1BQU0sR0FBRyxFQUFFO01BQ2hCLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUM7TUFDWDNGLE1BQU0sQ0FBQzRGLGlCQUFpQixHQUFHLElBQUksQ0FBQ0EsaUJBQWlCO0lBQ25EO0lBQUN0RyxZQUFBLENBQUFpRyxVQUFBO01BQUFoRyxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBbUcsS0FBQSxFQUFPO1FBQ0wsSUFBSSxDQUFDRSxTQUFTLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO01BQ2xCO0lBQUM7TUFBQXZHLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFzRyxVQUFBLEVBQVk7UUFBQSxJQUFBckcsS0FBQTtRQUNWLElBQUksQ0FBQ2dHLGNBQWMsQ0FBQzlELE9BQU8sQ0FBQyxVQUFBb0UsS0FBSyxFQUFJO1VBQ25DQSxLQUFLLENBQUNyRyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsVUFBQXNHLENBQUM7WUFBQSxPQUFJdkcsS0FBSSxDQUFDd0csUUFBUSxDQUFDRCxDQUFDLENBQUNsRyxNQUFNLENBQUM7VUFBQSxFQUFDO1FBQ2xFLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQVAsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXlHLFNBQVNuRyxNQUFNLEVBQUU7UUFDZixJQUFJb0csV0FBVyxHQUFHL0csUUFBUSxDQUFDZ0gsY0FBYyxDQUFDLFNBQVMsR0FBQ3JHLE1BQU0sQ0FBQ3NHLElBQUksQ0FBQztRQUNoRSxJQUFJQyxrQkFBa0IsR0FBR2xILFFBQVEsQ0FBQ2dILGNBQWMsQ0FBQyxnQkFBZ0IsR0FBQ3JHLE1BQU0sQ0FBQ3NHLElBQUksQ0FBQztRQUM5RSxJQUFJdEcsTUFBTSxDQUFDc0csSUFBSSxJQUFJLFdBQVcsSUFBSXRHLE1BQU0sQ0FBQ3NHLElBQUksSUFBSSxVQUFVLEVBQUU7VUFDM0QsSUFBSSxDQUFDRSxVQUFVLENBQUN4RyxNQUFNLEVBQUVvRyxXQUFXLEVBQUVHLGtCQUFrQixDQUFDO1FBQzFELENBQUMsTUFDSSxJQUFJdkcsTUFBTSxDQUFDc0csSUFBSSxJQUFJLE9BQU8sRUFBRTtVQUMvQixJQUFJLENBQUNHLFVBQVUsQ0FBQ3pHLE1BQU0sRUFBRW9HLFdBQVcsRUFBRUcsa0JBQWtCLENBQUM7UUFDMUQsQ0FBQyxNQUNJLElBQUl2RyxNQUFNLENBQUNzRyxJQUFJLElBQUksU0FBUyxFQUFFO1VBQ2pDLElBQUksQ0FBQ0ksWUFBWSxDQUFDMUcsTUFBTSxFQUFFb0csV0FBVyxFQUFFRyxrQkFBa0IsQ0FBQztRQUM1RDtRQUNBLElBQUksQ0FBQ0ksYUFBYSxDQUFDLENBQUM7TUFDdEI7SUFBQztNQUFBbEgsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWlILGNBQUEsRUFBZ0I7UUFDZCxJQUFJQyxZQUFZLEdBQUd2SCxRQUFRLENBQUNnSCxjQUFjLENBQUMsZUFBZSxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDVCxNQUFNLENBQUNpQixNQUFNLEdBQUcsQ0FBQyxFQUMxQjtVQUNFRCxZQUFZLENBQUM5QixLQUFLLENBQUNnQyxPQUFPLEdBQUcsT0FBTztRQUN0QyxDQUFDLE1BQ0k7VUFDSEYsWUFBWSxDQUFDOUIsS0FBSyxDQUFDZ0MsT0FBTyxHQUFHLE1BQU07UUFDckM7TUFDRjtJQUFDO01BQUFySCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBOEcsV0FBV3hHLE1BQU0sRUFBRW9HLFdBQVcsRUFBRUcsa0JBQWtCLEVBQUU7UUFDbEQsSUFBSSxJQUFJLENBQUNRLE9BQU8sQ0FBQy9HLE1BQU0sQ0FBQ04sS0FBSyxDQUFDLEVBQUU7VUFDOUIsSUFBSSxDQUFDc0gsU0FBUyxDQUFDaEgsTUFBTSxFQUFFb0csV0FBVyxFQUFFRyxrQkFBa0IsQ0FBQztRQUN6RCxDQUFDLE1BQ0k7VUFDSCxJQUFJLENBQUNVLFNBQVMsQ0FBQ2pILE1BQU0sRUFBRW9HLFdBQVcsRUFBRUcsa0JBQWtCLENBQUM7UUFDekQ7TUFDRjtJQUFDO01BQUE5RyxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBK0csV0FBV3pHLE1BQU0sRUFBRW9HLFdBQVcsRUFBRUcsa0JBQWtCLEVBQUU7UUFDbEQsSUFBSVcsRUFBRSxHQUFHLDJKQUEySjtRQUNwSyxJQUFJLENBQUNBLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDbkgsTUFBTSxDQUFDTixLQUFLLENBQUMsRUFBRTtVQUMxQixJQUFJLENBQUNzSCxTQUFTLENBQUNoSCxNQUFNLEVBQUVvRyxXQUFXLEVBQUVHLGtCQUFrQixDQUFDO1FBQ3pELENBQUMsTUFDSTtVQUNILElBQUksQ0FBQ1UsU0FBUyxDQUFDakgsTUFBTSxFQUFFb0csV0FBVyxFQUFFRyxrQkFBa0IsQ0FBQztRQUN6RDtNQUNGO0lBQUM7TUFBQTlHLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFnSCxhQUFhMUcsTUFBTSxFQUFFb0csV0FBVyxFQUFFRyxrQkFBa0IsRUFBRTtRQUNwRCxJQUFJLENBQUN2RyxNQUFNLENBQUNvSCxPQUFPLEVBQUU7VUFDbkIsSUFBSSxDQUFDSixTQUFTLENBQUNoSCxNQUFNLEVBQUVvRyxXQUFXLEVBQUVHLGtCQUFrQixDQUFDO1FBQ3pELENBQUMsTUFDSTtVQUNILElBQUksQ0FBQ1UsU0FBUyxDQUFDakgsTUFBTSxFQUFFb0csV0FBVyxFQUFFRyxrQkFBa0IsQ0FBQztRQUN6RDtNQUNGO0lBQUM7TUFBQTlHLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUF1SCxVQUFVakgsTUFBTSxFQUFFb0csV0FBVyxFQUFFRyxrQkFBa0IsRUFBRTtRQUNqRHZHLE1BQU0sQ0FBQzZFLGFBQWEsQ0FBQzFFLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLHlCQUF5QixDQUFDO1FBQ2hFMEYsV0FBVyxDQUFDdEIsS0FBSyxDQUFDZ0MsT0FBTyxHQUFHLE1BQU07UUFDbENQLGtCQUFrQixDQUFDekIsS0FBSyxDQUFDZ0MsT0FBTyxHQUFHLE1BQU07UUFDekMsSUFBSSxDQUFDbEIsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDeUIsTUFBTSxDQUFDLFVBQUE1QyxJQUFJO1VBQUEsT0FBSUEsSUFBSSxLQUFLekUsTUFBTSxDQUFDc0csSUFBSTtRQUFBLEVBQUM7TUFDaEU7SUFBQztNQUFBN0csR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXNILFVBQVVoSCxNQUFNLEVBQUVvRyxXQUFXLEVBQUVHLGtCQUFrQixFQUFFO1FBQ2pEdkcsTUFBTSxDQUFDNkUsYUFBYSxDQUFDMUUsU0FBUyxDQUFDTSxHQUFHLENBQUMseUJBQXlCLENBQUM7UUFDN0QyRixXQUFXLENBQUN0QixLQUFLLENBQUNnQyxPQUFPLEdBQUcsT0FBTztRQUNuQ1Asa0JBQWtCLENBQUN6QixLQUFLLENBQUNnQyxPQUFPLEdBQUcsT0FBTztRQUMxQyxJQUFJLENBQUNsQixNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUN5QixNQUFNLENBQUMsVUFBQTVDLElBQUk7VUFBQSxPQUFJQSxJQUFJLEtBQUt6RSxNQUFNLENBQUNzRyxJQUFJO1FBQUEsRUFBQztRQUM5RCxJQUFJLENBQUNWLE1BQU0sQ0FBQzBCLElBQUksQ0FBQ3RILE1BQU0sQ0FBQ3NHLElBQUksQ0FBQztNQUMvQjtJQUFDO01BQUE3RyxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBcUgsUUFBUVEsR0FBRyxFQUFFO1FBQ1gsT0FBTyxDQUFDQSxHQUFHLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUNYLE1BQU07TUFDM0I7SUFBQztNQUFBcEgsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXFHLFVBQUEsRUFBWTtRQUNWLElBQU1ILE1BQU0sR0FBRyxJQUFJLENBQUNGLFVBQVUsQ0FBQ3BELGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO1FBQ3ZFc0QsTUFBTSxDQUFDL0QsT0FBTyxDQUFDLFVBQUE0RixLQUFLLEVBQUk7VUFDdEJBLEtBQUssQ0FBQzNDLEtBQUssQ0FBQ2dDLE9BQU8sR0FBRyxNQUFNO1FBQzlCLENBQUMsQ0FBQztRQUNGLElBQU1ZLFlBQVksR0FBRyxJQUFJLENBQUNoQyxVQUFVLENBQUNwRCxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQztRQUNqRm9GLFlBQVksQ0FBQzdGLE9BQU8sQ0FBQyxVQUFBOEYsVUFBVSxFQUFJO1VBQ2pDQSxVQUFVLENBQUN4SCxTQUFTLENBQUNPLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztRQUN4RCxDQUFDLENBQUM7UUFDRixJQUFNa0csWUFBWSxHQUFHLElBQUksQ0FBQ2xCLFVBQVUsQ0FBQ3BELGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO1FBQzdFc0UsWUFBWSxDQUFDL0UsT0FBTyxDQUFDLFVBQUErRixZQUFZLEVBQUk7VUFDbkNBLFlBQVksQ0FBQzlDLEtBQUssQ0FBQ2dDLE9BQU8sR0FBRyxNQUFNO1FBQ3JDLENBQUMsQ0FBQztRQUNGLElBQU1lLGlCQUFpQixHQUFHLElBQUksQ0FBQ25DLFVBQVUsQ0FBQ3BELGdCQUFnQixDQUFDLHFCQUFxQixDQUFDO1FBQ2pGdUYsaUJBQWlCLENBQUNoRyxPQUFPLENBQUMsVUFBQWlHLFdBQVcsRUFBSTtVQUN2Q0EsV0FBVyxDQUFDaEQsS0FBSyxDQUFDZ0MsT0FBTyxHQUFJLE1BQU07UUFDckMsQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBckgsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQW9HLGtCQUFBLEVBQW9CO1FBQ2xCekcsUUFBUSxDQUFDSCxhQUFhLENBQUMsNENBQTRDLENBQUMsQ0FBQzZJLGVBQWUsQ0FBQyxVQUFVLENBQUM7TUFDbEc7SUFBQztJQUFBLE9BQUF0QyxVQUFBO0VBQUE7RUFFSDlELGtCQUFBLENBQUl0QyxRQUFRLENBQUN1QyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFQyxPQUFPLENBQUMsVUFBQzZELFVBQVU7SUFBQSxPQUFLLElBQUlELFVBQVUsQ0FBQ0MsVUFBVSxDQUFDO0VBQUEsRUFBQztBQUNuSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFIRCxpRUFBZSxZQUFNO0VBQ25CO0FBQ0Y7QUFDQTtBQUNBO0VBSEUsSUFJTXNDLFNBQVM7SUFFYixTQUFBQSxVQUFZQyxTQUFTLEVBQUU7TUFBQWpKLGVBQUEsT0FBQWdKLFNBQUE7TUFDckIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVM7TUFDMUIsSUFBSSxDQUFDaEcsVUFBVSxHQUFHLElBQUksQ0FBQ2dHLFNBQVMsQ0FBQy9JLGFBQWEsQ0FBQywrQkFBK0IsQ0FBQztNQUMvRSxJQUFJLENBQUNnSixTQUFTLEdBQUcsSUFBSSxDQUFDRCxTQUFTLENBQUMzRixnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztNQUNuRSxJQUFJLENBQUM2RixTQUFTLEdBQUcsS0FBSztNQUV0QixJQUFJLElBQUksQ0FBQ2xHLFVBQVUsS0FBSyxJQUFJLEVBQUU7UUFDNUIsSUFBSSxDQUFDQSxVQUFVLENBQUNtRyxTQUFTLEdBQUcsSUFBSSxDQUFDbkcsVUFBVSxDQUFDb0csT0FBTyxDQUFDQyxTQUFTO1FBQzdELElBQUksQ0FBQ2hKLGlCQUFpQixDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDaUosb0JBQW9CLENBQUMsQ0FBQztNQUM3QjtJQUNGOztJQUVBO0FBQ0o7QUFDQTtJQUZJL0ksWUFBQSxDQUFBd0ksU0FBQTtNQUFBdkksR0FBQTtNQUFBQyxLQUFBLEVBR0EsU0FBQUosa0JBQUEsRUFBb0I7UUFBQSxJQUFBSyxLQUFBO1FBQ2xCO1FBQ0EsSUFBSSxDQUFDc0MsVUFBVSxDQUFDckMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNFLEtBQUssRUFBSztVQUNuREEsS0FBSyxDQUFDb0MsY0FBYyxDQUFDLENBQUM7VUFDdEJ2QyxLQUFJLENBQUM2SSxlQUFlLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7O1FBRUY7UUFDQSxJQUFJLENBQUN2RyxVQUFVLENBQUNyQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQ0UsS0FBSyxFQUFLO1VBQ3JELElBQUlBLEtBQUssQ0FBQ0MsT0FBTyxLQUFLLEVBQUUsSUFBSUQsS0FBSyxDQUFDQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ2hERCxLQUFLLENBQUNvQyxjQUFjLENBQUMsQ0FBQztZQUN0QnZDLEtBQUksQ0FBQzZJLGVBQWUsQ0FBQyxDQUFDO1VBQ3hCO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7O01BRUE7QUFDSjtBQUNBO0FBQ0E7SUFISTtNQUFBL0ksR0FBQTtNQUFBQyxLQUFBLEVBSUEsU0FBQTZJLHFCQUFBLEVBQXVCO1FBQUEsSUFBQW5FLE1BQUE7UUFDckI7UUFDQSxJQUFNcUUsUUFBUSxHQUFHLElBQUlDLGdCQUFnQixDQUFDLFVBQUNDLGFBQWEsRUFBSztVQUN2REEsYUFBYSxDQUFDOUcsT0FBTyxDQUFDLFVBQUMrRyxRQUFRLEVBQUs7WUFDbEMsSUFBSUEsUUFBUSxDQUFDdEQsSUFBSSxLQUFLLFlBQVksSUFBSXNELFFBQVEsQ0FBQ0MsYUFBYSxLQUFLLE1BQU0sRUFBRTtjQUN2RXpFLE1BQUksQ0FBQzBFLGlCQUFpQixDQUFDLENBQUM7WUFDMUI7VUFDRixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7UUFFRixJQUFJLENBQUNaLFNBQVMsQ0FBQ3JHLE9BQU8sQ0FBRSxVQUFDa0gsUUFBUSxFQUFLO1VBQ3BDTixRQUFRLENBQUNPLE9BQU8sQ0FBQ0QsUUFBUSxFQUFFO1lBQUNFLFVBQVUsRUFBRTtVQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUM7TUFDSjs7TUFFQTtBQUNKO0FBQ0E7SUFGSTtNQUFBeEosR0FBQTtNQUFBQyxLQUFBLEVBR0EsU0FBQThJLGdCQUFBLEVBQWtCO1FBQUEsSUFBQWhFLE1BQUE7UUFDaEI7UUFDQSxJQUFJLENBQUMwRCxTQUFTLENBQUNyRyxPQUFPLENBQUUsVUFBQ2tILFFBQVEsRUFBSztVQUNwQyxDQUFDdkUsTUFBSSxDQUFDMkQsU0FBUyxHQUFHM0QsTUFBSSxDQUFDMEUsWUFBWSxDQUFDSCxRQUFRLENBQUMsR0FBR3ZFLE1BQUksQ0FBQzJFLGFBQWEsQ0FBQ0osUUFBUSxDQUFDO1FBQzlFLENBQUMsQ0FBQzs7UUFFRjtRQUNBLElBQUksQ0FBQ1osU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDQSxTQUFTOztRQUVoQztRQUNBLENBQUMsSUFBSSxDQUFDQSxTQUFTLEdBQUcsSUFBSSxDQUFDbEcsVUFBVSxDQUFDbUcsU0FBUyxHQUFHLElBQUksQ0FBQ25HLFVBQVUsQ0FBQ29HLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ3JHLFVBQVUsQ0FBQ21HLFNBQVMsR0FBRyxJQUFJLENBQUNuRyxVQUFVLENBQUNvRyxPQUFPLENBQUNlLFVBQVU7TUFDbEo7O01BRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFOSTtNQUFBM0osR0FBQTtNQUFBQyxLQUFBLEVBT0EsU0FBQW9KLGtCQUFBLEVBQW9CO1FBQ2xCLElBQUlPLE9BQU8sR0FBRyxLQUFLO1FBRW5CLElBQUksQ0FBQ25CLFNBQVMsQ0FBQ3JHLE9BQU8sQ0FBRSxVQUFDa0gsUUFBUSxFQUFLO1VBQ3BDLENBQUNBLFFBQVEsQ0FBQ08sWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHRCxPQUFPLEdBQUcsS0FBSyxHQUFHQSxPQUFPLEdBQUcsSUFBSTtRQUNuRSxDQUFDLENBQUM7UUFFRixDQUFDQSxPQUFPLEdBQUcsSUFBSSxDQUFDbEIsU0FBUyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUNBLFNBQVMsR0FBRyxJQUFJO1FBQ3pELENBQUMsSUFBSSxDQUFDQSxTQUFTLEdBQUcsSUFBSSxDQUFDbEcsVUFBVSxDQUFDbUcsU0FBUyxHQUFHLElBQUksQ0FBQ25HLFVBQVUsQ0FBQ29HLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ3JHLFVBQVUsQ0FBQ21HLFNBQVMsR0FBRyxJQUFJLENBQUNuRyxVQUFVLENBQUNvRyxPQUFPLENBQUNlLFVBQVU7TUFDbEo7O01BRUE7QUFDSjtBQUNBO0FBQ0E7SUFISTtNQUFBM0osR0FBQTtNQUFBQyxLQUFBLEVBSUEsU0FBQXdKLGFBQWFILFFBQVEsRUFBRTtRQUNyQixJQUFNUSxPQUFPLEdBQUdSLFFBQVEsQ0FBQzdKLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztRQUNqRSxJQUFNc0ssSUFBSSxHQUFHVCxRQUFRLENBQUM3SixhQUFhLENBQUMsc0JBQXNCLENBQUM7UUFFM0RxSyxPQUFPLENBQUNqSixZQUFZLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQztRQUM3Q2tKLElBQUksQ0FBQ2xKLFlBQVksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO1FBQ3pDeUksUUFBUSxDQUFDekksWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7TUFDdkM7O01BRUE7QUFDSjtBQUNBO0FBQ0E7SUFISTtNQUFBYixHQUFBO01BQUFDLEtBQUEsRUFJQSxTQUFBeUosY0FBY0osUUFBUSxFQUFFO1FBQ3RCLElBQU1RLE9BQU8sR0FBR1IsUUFBUSxDQUFDN0osYUFBYSxDQUFDLHlCQUF5QixDQUFDO1FBQ2pFLElBQU1zSyxJQUFJLEdBQUdULFFBQVEsQ0FBQzdKLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztRQUUzRHFLLE9BQU8sQ0FBQ2pKLFlBQVksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDO1FBQzlDa0osSUFBSSxDQUFDbEosWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7UUFDeEN5SSxRQUFRLENBQUNoQixlQUFlLENBQUMsTUFBTSxDQUFDO01BQ2xDO0lBQUM7SUFBQSxPQUFBQyxTQUFBO0VBQUE7RUFHSHJHLGtCQUFBLENBQUl0QyxRQUFRLENBQUN1QyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFQyxPQUFPLENBQUMsVUFBQW9HLFNBQVM7SUFBQSxPQUFJLElBQUlELFNBQVMsQ0FBQ0MsU0FBUyxDQUFDO0VBQUEsRUFBQztBQUMzRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIRCxpRUFBZSxZQUFNO0VBQ25CO0FBQ0Y7QUFDQTtBQUNBO0VBSEUsSUFJTXdCLElBQUk7SUFDUixTQUFBQSxLQUFZQyxZQUFZLEVBQUVDLENBQUMsRUFBRTtNQUFBM0ssZUFBQSxPQUFBeUssSUFBQTtNQUMzQixJQUFJLENBQUNDLFlBQVksR0FBR0EsWUFBWTtNQUNoQyxJQUFJLENBQUM3RCxJQUFJLENBQUMsQ0FBQztJQUNiO0lBQUNyRyxZQUFBLENBQUFpSyxJQUFBO01BQUFoSyxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBbUcsS0FBQSxFQUFPO1FBQUEsSUFBQWxHLEtBQUE7UUFDTCxJQUFNaUssSUFBSSxHQUFHLElBQUksQ0FBQ0YsWUFBWSxDQUFDcEgsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1FBQy9ELElBQU11SCxPQUFPLEdBQUcsSUFBSSxDQUFDSCxZQUFZLENBQUN4SyxhQUFhLENBQUMsa0JBQWtCLENBQUM7UUFDbkUwSyxJQUFJLENBQUMvSCxPQUFPLENBQUMsVUFBQWlJLEdBQUcsRUFBSTtVQUNsQkEsR0FBRyxDQUFDbEssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUFzRyxDQUFDO1lBQUEsT0FBSXZHLEtBQUksQ0FBQ29LLFVBQVUsQ0FBQzdELENBQUMsQ0FBQztVQUFBLEVBQUM7UUFDeEQsQ0FBQyxDQUFDO1FBQ0YsSUFBSThELFFBQVEsR0FBRyxDQUFDO1FBQ2hCSCxPQUFPLENBQUNqSyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQXFLLENBQUMsRUFBSTtVQUN2QztVQUNBLElBQUlBLENBQUMsQ0FBQ2xLLE9BQU8sS0FBSyxFQUFFLElBQUlrSyxDQUFDLENBQUNsSyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ3hDNkosSUFBSSxDQUFDSSxRQUFRLENBQUMsQ0FBQzFKLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSTJKLENBQUMsQ0FBQ2xLLE9BQU8sS0FBSyxFQUFFLEVBQUU7Y0FDcEJpSyxRQUFRLEVBQUU7Y0FDVjtjQUNBLElBQUlBLFFBQVEsSUFBSUosSUFBSSxDQUFDL0MsTUFBTSxFQUFFO2dCQUMzQm1ELFFBQVEsR0FBRyxDQUFDO2NBQ2Q7Y0FDQTtZQUNGLENBQUMsTUFBTSxJQUFJQyxDQUFDLENBQUNsSyxPQUFPLEtBQUssRUFBRSxFQUFFO2NBQzNCaUssUUFBUSxFQUFFO2NBQ1Y7Y0FDQSxJQUFJQSxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQkEsUUFBUSxHQUFHSixJQUFJLENBQUMvQyxNQUFNLEdBQUcsQ0FBQztjQUM1QjtZQUNGO1lBQ0ErQyxJQUFJLENBQUNJLFFBQVEsQ0FBQyxDQUFDMUosWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDMUNzSixJQUFJLENBQUNJLFFBQVEsQ0FBQyxDQUFDekosS0FBSyxDQUFDLENBQUM7VUFDeEI7UUFDRixDQUFDLENBQUM7TUFFSjtJQUFDO01BQUFkLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFxSyxXQUFXRSxDQUFDLEVBQUU7UUFDWjtRQUNBLElBQU1qSyxNQUFNLEdBQUdpSyxDQUFDLENBQUNqSyxNQUFNO1FBQ3ZCO1FBQ0EsSUFBTWtLLE1BQU0sR0FBR2xLLE1BQU0sQ0FBQ21LLFVBQVU7UUFDaEM7UUFDQSxJQUFNQyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0MsVUFBVTtRQUNyQztRQUNBLElBQU1FLFFBQVEsR0FBR0gsTUFBTSxDQUFDdEksc0JBQXNCLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEY7UUFDQSxJQUFNMEksU0FBUyxHQUFHRixXQUFXLENBQUNqSyxTQUFTLENBQUN5QyxRQUFRLENBQUMsb0JBQW9CLENBQUM7UUFDdEU7O1FBRUE7UUFDQTtRQUNBLElBQUc1QyxNQUFNLElBQUlxSyxRQUFRLElBQUlDLFNBQVMsRUFBRTtVQUNsQztVQUNBLElBQUksQ0FBQ0MsY0FBYyxDQUFDTCxNQUFNLENBQUM7VUFDM0I7VUFDQSxJQUFJLENBQUNNLFFBQVEsQ0FBQ0osV0FBVyxDQUFDO1FBQzVCLENBQUMsTUFBTTtVQUNMO1VBQ0EsSUFBSSxDQUFDRyxjQUFjLENBQUNMLE1BQU0sQ0FBQzs7VUFFM0I7VUFDQSxJQUFJLENBQUNPLFdBQVcsQ0FBQ3pLLE1BQU0sQ0FBQzs7VUFFeEI7VUFDQSxJQUFJLENBQUN3SyxRQUFRLENBQUNKLFdBQVcsQ0FBQzs7VUFFMUI7VUFDQSxJQUFJLENBQUNNLFlBQVksQ0FBQ04sV0FBVyxDQUFDRCxVQUFVLEVBQUVuSyxNQUFNLENBQUM7UUFDbkQ7TUFHRjtJQUFDO01BQUFQLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUE2SyxlQUFlSSxHQUFHLEVBQUU7UUFDbEJBLEdBQUcsQ0FDQXJJLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLENBQzFDVCxPQUFPLENBQUMsVUFBQStJLENBQUM7VUFBQSxPQUFJQSxDQUFDLENBQUN0SyxZQUFZLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQztRQUFBLEVBQUM7UUFDdkRxSyxHQUFHLENBQ0FySSxnQkFBZ0IsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUNwRFQsT0FBTyxDQUFDLFVBQUFxRSxDQUFDO1VBQUEsT0FBSUEsQ0FBQyxDQUFDL0YsU0FBUyxDQUFDTyxNQUFNLENBQUMsaUNBQWlDLENBQUM7UUFBQSxFQUFDO01BQ3hFO0lBQUM7TUFBQWpCLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUErSyxZQUFZRSxHQUFHLEVBQUU7UUFDZkEsR0FBRyxDQUFDckssWUFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUM7UUFDdkNxSyxHQUFHLENBQUN4SyxTQUFTLENBQUNNLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztNQUN0RDtJQUFDO01BQUFoQixHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBOEssU0FBU0csR0FBRyxFQUFFO1FBQ1pBLEdBQUcsQ0FDQXJJLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQ3JDVCxPQUFPLENBQUMsVUFBQWdKLENBQUM7VUFBQSxPQUFJQSxDQUFDLENBQUN2SyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztRQUFBLEVBQUM7TUFDakQ7SUFBQztNQUFBYixHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBZ0wsYUFBYUMsR0FBRyxFQUFFM0ssTUFBTSxFQUFFO1FBQ3hCO1FBQ0EySyxHQUFHLENBQ0F6TCxhQUFhLEtBQUFpRixNQUFBLENBQUtuRSxNQUFNLENBQUNLLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBRSxDQUFDLENBQ3pEMEgsZUFBZSxDQUFDLFFBQVEsQ0FBQztNQUM5QjtJQUFDO0lBQUEsT0FBQTBCLElBQUE7RUFBQTtFQUlIOUgsa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ3VDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxFQUFFQyxPQUFPLENBQUMsVUFBQytILElBQUksRUFBRUQsQ0FBQztJQUFBLE9BQUssSUFBSUYsSUFBSSxDQUFDRyxJQUFJLEVBQUVELENBQUMsQ0FBQztFQUFBLEVBQUM7QUFDNUYsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5R0QsaUVBQWUsWUFBTTtFQUNuQjtBQUNGO0FBQ0E7QUFDQTtFQUhFLElBSU1tQixXQUFXO0lBQ2YsU0FBQUEsWUFBWWhKLFdBQVcsRUFBRTtNQUFBOUMsZUFBQSxPQUFBOEwsV0FBQTtNQUN2QixJQUFJLENBQUNoSixXQUFXLEdBQUdBLFdBQVc7TUFFOUIsSUFBSSxJQUFJLENBQUNBLFdBQVcsQ0FBQ3dILFlBQVksQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNoRDtNQUNGO01BRUEsSUFBSSxDQUFDeEgsV0FBVyxDQUFDaUosTUFBTSxHQUFHLElBQUk7TUFDOUIsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUNuSixXQUFXLENBQUN1RyxPQUFPLENBQUM2QyxRQUFRLENBQUM7TUFFcEUsSUFBSSxJQUFJLENBQUNGLGFBQWEsQ0FBQ25FLE1BQU0sRUFBRTtRQUM3QixJQUFJLENBQUNzRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQ3JKLFdBQVcsQ0FBQ2lKLE1BQU0sR0FBRyxLQUFLO01BQ2pDO0lBQ0Y7SUFBQ3ZMLFlBQUEsQ0FBQXNMLFdBQUE7TUFBQXJMLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUF1TCxhQUFhQyxRQUFRLEVBQUU7UUFDckIsSUFBSUYsYUFBYSxHQUFHLEVBQUU7UUFDdEIsSUFBSUUsUUFBUSxFQUFFO1VBRVo7VUFDQTtVQUNBLElBQU1FLFlBQVksR0FBR0YsUUFBUSxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO1VBQ3hDLElBQUlDLFNBQVMsR0FBR0YsWUFBWSxDQUFDckksR0FBRyxDQUFDLFVBQUF1QyxJQUFJLEVBQUk7WUFDdkMsT0FBTyxtQkFBbUIsR0FBR0EsSUFBSTtVQUNuQyxDQUFDLENBQUM7VUFDRmdHLFNBQVMsR0FBR0EsU0FBUyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO1VBRWhDLElBQU1DLGdCQUFnQixHQUFHbk0sUUFBUSxDQUFDSCxhQUFhLENBQUMsZ0JBQWdCLENBQUM7VUFDakVzTSxnQkFBZ0IsQ0FBQ2xKLGdCQUFnQixDQUFDZ0osU0FBUyxDQUFDLENBQUN6SixPQUFPLENBQUMsVUFBQzRKLE9BQU8sRUFBRTlCLENBQUMsRUFBSztZQUNuRSxJQUFJLENBQUM4QixPQUFPLENBQUM1SCxFQUFFLEVBQUU7Y0FDZjRILE9BQU8sQ0FBQzVILEVBQUUsR0FBRzRILE9BQU8sQ0FBQ3JELFNBQVMsQ0FBQ3NELE9BQU8sQ0FBQyxLQUFLLEVBQUMsRUFBRSxDQUFDLENBQUNBLE9BQU8sQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLENBQUNBLE9BQU8sQ0FBQyxLQUFLLEVBQUMsRUFBRSxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDLEdBQUNoQyxDQUFDO1lBQzFHO1lBQ0FxQixhQUFhLENBQUMxRCxJQUFJLENBQUNtRSxPQUFPLENBQUM7VUFDN0IsQ0FBQyxDQUFDO1FBQ0o7UUFDQSxPQUFPVCxhQUFhO01BQ3RCO0lBQUM7TUFBQXZMLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFrTSx5QkFBeUJILE9BQU8sRUFBRUksUUFBUSxFQUFFO1FBQzFDLE9BQU9sSyxrQkFBQSxDQUFJdEMsUUFBUSxDQUFDaUQsZ0JBQWdCLENBQUN1SixRQUFRLENBQUMsRUFBRUMsSUFBSSxDQUFDLFVBQUFDLEVBQUU7VUFBQSxPQUNyREEsRUFBRSxLQUFLTixPQUFPLElBQUlNLEVBQUUsQ0FBQ25KLFFBQVEsQ0FBQzZJLE9BQU8sQ0FBQztRQUFBLENBQ3hDLENBQUM7TUFDSDtJQUFDO01BQUFoTSxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBeUwsaUJBQUEsRUFBbUI7UUFBQSxJQUFBeEwsS0FBQTtRQUNqQixJQUFJcU0sRUFBRSxHQUFHM00sUUFBUSxDQUFDNE0sYUFBYSxDQUFDLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUNqQixhQUFhLENBQUNuSixPQUFPLENBQUMsVUFBQXFLLFlBQVksRUFBSTtVQUN6QyxJQUFJLENBQUNBLFlBQVksQ0FBQzdELE9BQU8sQ0FBQzhELGlCQUFpQixJQUN0QyxDQUFDRCxZQUFZLENBQUMvTCxTQUFTLENBQUN5QyxRQUFRLENBQUMseUJBQXlCLENBQUMsSUFDM0QsQ0FBQ3NKLFlBQVksQ0FBQy9MLFNBQVMsQ0FBQ3lDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUN2RCxDQUFDakQsS0FBSSxDQUFDaU0sd0JBQXdCLENBQUNNLFlBQVksRUFBRSw4QkFBOEIsQ0FBQyxFQUNqRjtZQUNFLElBQUlFLEVBQUUsR0FBRy9NLFFBQVEsQ0FBQzRNLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDckMsSUFBSUksQ0FBQyxHQUFHaE4sUUFBUSxDQUFDNE0sYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUNuQ0ksQ0FBQyxDQUFDdEksSUFBSSxHQUFHLEdBQUcsR0FBQ21JLFlBQVksQ0FBQ3JJLEVBQUU7WUFDNUIsSUFBTXlJLGNBQWMsR0FBR0osWUFBWSxDQUFDdEssc0JBQXNCLENBQUMseUJBQXlCLENBQUM7WUFDckYsT0FBTzBLLGNBQWMsQ0FBQ3pGLE1BQU0sR0FBRyxDQUFDLEVBQUV5RixjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM1TCxNQUFNLENBQUMsQ0FBQztZQUM1RDJMLENBQUMsQ0FBQ2pFLFNBQVMsR0FBRzhELFlBQVksQ0FBQzlELFNBQVMsQ0FBQyxDQUFDO1lBQ3RDaUUsQ0FBQyxDQUFDOUksU0FBUyxHQUFHOEksQ0FBQyxDQUFDOUksU0FBUyxDQUFDbUksT0FBTyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMURVLEVBQUUsQ0FBQzVJLFdBQVcsQ0FBQzZJLENBQUMsQ0FBQztZQUNqQkwsRUFBRSxDQUFDeEksV0FBVyxDQUFDNEksRUFBRSxDQUFDO1VBQ3BCO1FBQ0YsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDdEssV0FBVyxDQUFDMEIsV0FBVyxDQUFDd0ksRUFBRSxDQUFDO01BQ2xDO0lBQUM7SUFBQSxPQUFBbEIsV0FBQTtFQUFBO0VBR0huSixrQkFBQSxDQUFJdEMsUUFBUSxDQUFDdUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsRUFBRUMsT0FBTyxDQUFDLFVBQUFDLFdBQVc7SUFBQSxPQUFJLElBQUlnSixXQUFXLENBQUNoSixXQUFXLENBQUM7RUFBQSxFQUFDO0FBQ2pILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VELGlFQUFlLFlBQU07RUFDbkI7QUFDRjtBQUNBO0VBRkUsSUFHTXlLLGFBQWE7SUFFakIsU0FBQUEsY0FBWUMsYUFBYSxFQUFFO01BQUF4TixlQUFBLE9BQUF1TixhQUFBO01BQ3pCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQSxhQUFhO01BRWxDLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsYUFBYTtNQUN0QyxJQUFJLENBQUNDLGVBQWUsR0FBRyxXQUFXO01BQ2xDLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUcsV0FBVztNQUNyQyxJQUFJLENBQUNDLGFBQWEsR0FBRyxpQkFBaUI7O01BRXRDO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ0osYUFBYSxDQUFDbEQsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQ25EO01BQ0Y7O01BRUE7TUFDQSxJQUFJNEIsUUFBUSxHQUFHN0wsUUFBUSxDQUFDaUQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDbUssaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ0MsZUFBZSxDQUFDO01BQzdGLElBQUl4QixRQUFRLENBQUNyRSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3pCO01BQ0Y7O01BRUE7TUFDQTtNQUNBLElBQU1nRyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxjQUFjLENBQUM1QixRQUFRLENBQUM7TUFDM0MsSUFBSSxDQUFDNkIsZ0JBQWdCLENBQUNGLEtBQUssQ0FBQzs7TUFFNUI7TUFDQTtNQUNBM0IsUUFBUSxHQUFHLEVBQUUsQ0FBQzhCLEtBQUssQ0FBQ0MsSUFBSSxDQUFDL0IsUUFBUSxFQUFFLENBQUMsQ0FBQztNQUNyQyxJQUFJLENBQUNnQyxpQkFBaUIsQ0FBQ2hDLFFBQVEsQ0FBQztNQUNoQyxJQUFNaUMsV0FBVyxHQUFHOU4sUUFBUSxDQUFDaUQsZ0JBQWdCLENBQUMsSUFBSSxDQUFDbUssaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ0Usa0JBQWtCLENBQUM7TUFDckcsSUFBSVEsV0FBVyxDQUFDdEcsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMxQixJQUFJLENBQUNxRyxpQkFBaUIsQ0FBQ0MsV0FBVyxDQUFDO01BQ3JDO0lBQ0Y7O0lBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFOSTNOLFlBQUEsQ0FBQStNLGFBQUE7TUFBQTlNLEdBQUE7TUFBQUMsS0FBQSxFQU9BLFNBQUFvTixlQUFlNUIsUUFBUSxFQUFFO1FBQUEsSUFBQXZMLEtBQUE7UUFDdkIsSUFBSWtOLEtBQUssR0FBRyxFQUFFO1FBRWQzQixRQUFRLENBQUNySixPQUFPLENBQUMsVUFBQzRKLE9BQU8sRUFBRTJCLEtBQUssRUFBSztVQUNuQyxJQUFNQyxTQUFTLEdBQUcxTixLQUFJLENBQUNpTixhQUFhLEdBQUcsR0FBRyxHQUFHUSxLQUFLOztVQUVsRDtVQUNBM0IsT0FBTyxDQUFDbkwsWUFBWSxDQUFDLElBQUksRUFBRStNLFNBQVMsQ0FBQztVQUVyQyxJQUFJQyxJQUFJLEdBQUc7WUFDVEMsS0FBSyxFQUFFNU4sS0FBSSxDQUFDNk4sZUFBZSxDQUFDL0IsT0FBTyxDQUFDO1lBQ3BDZ0MsTUFBTSxFQUFFSixTQUFTO1lBQ2pCcEosUUFBUSxFQUFFO1VBQ1osQ0FBQztVQUVELElBQUl5SixPQUFPLEdBQUdqQyxPQUFPLENBQUNrQyxrQkFBa0I7VUFDeEMsSUFBSUMsS0FBSyxHQUFHLENBQUM7O1VBRWI7VUFDQTtVQUNBLE9BQU9GLE9BQU8sSUFBSSxDQUFDQSxPQUFPLENBQUN2TixTQUFTLENBQUN5QyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkQsSUFBSThLLE9BQU8sQ0FBQ3pOLE9BQU8sS0FBSyxJQUFJLElBQUl5TixPQUFPLENBQUN2TixTQUFTLENBQUN5QyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Y0FFcEU7Y0FDQSxJQUFNaUwsWUFBWSxHQUFHUixTQUFTLEdBQUcsR0FBRyxHQUFHTyxLQUFLO2NBQzVDRixPQUFPLENBQUNwTixZQUFZLENBQUMsSUFBSSxFQUFFdU4sWUFBWSxDQUFDO2NBRXhDUCxJQUFJLENBQUNySixRQUFRLENBQUNxRCxJQUFJLENBQUM7Z0JBQ2pCaUcsS0FBSyxFQUFFNU4sS0FBSSxDQUFDNk4sZUFBZSxDQUFDRSxPQUFPLENBQUM7Z0JBQ3BDRCxNQUFNLEVBQUVJO2NBQ1YsQ0FBQyxDQUFDO2NBRUZELEtBQUssRUFBRTtZQUNUO1lBQ0FGLE9BQU8sR0FBR0EsT0FBTyxDQUFDQyxrQkFBa0I7VUFDdEM7VUFFQWQsS0FBSyxDQUFDdkYsSUFBSSxDQUFDZ0csSUFBSSxDQUFDO1FBQ2xCLENBQUMsQ0FBQztRQUVGLE9BQU9ULEtBQUs7TUFDZDs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQU5JO01BQUFwTixHQUFBO01BQUFDLEtBQUEsRUFPQSxTQUFBOE4sZ0JBQWdCL0IsT0FBTyxFQUFFO1FBQ3ZCLElBQUk4QixLQUFLO1FBRVQsSUFBSTlCLE9BQU8sQ0FBQ25DLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1VBQzVDaUUsS0FBSyxHQUFHOUIsT0FBTyxDQUFDcEQsT0FBTyxDQUFDeUYsVUFBVTtRQUNwQyxDQUFDLE1BQU07VUFDTFAsS0FBSyxHQUFHOUIsT0FBTyxDQUFDckQsU0FBUztRQUMzQjtRQUVBLE9BQU9tRixLQUFLO01BQ2Q7O01BRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtJQUpJO01BQUE5TixHQUFBO01BQUFDLEtBQUEsRUFLQSxTQUFBcU4saUJBQWlCRixLQUFLLEVBQUU7UUFBQSxJQUFBekksTUFBQTtRQUN0QixJQUFJbEIsSUFBSSxHQUFHN0QsUUFBUSxDQUFDNE0sYUFBYSxDQUFDLElBQUksQ0FBQztRQUV2Q1ksS0FBSyxDQUFDaEwsT0FBTyxDQUFDLFVBQUN5TCxJQUFJLEVBQUs7VUFDdEIsSUFBSVMsUUFBUSxHQUFHMU8sUUFBUSxDQUFDNE0sYUFBYSxDQUFDLElBQUksQ0FBQztVQUMzQyxJQUFJcUIsSUFBSSxDQUFDckosUUFBUSxDQUFDNEMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QmtILFFBQVEsQ0FBQzVOLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLGNBQWMsQ0FBQztVQUN4QztVQUVBLElBQUkxQixTQUFTLEdBQUdNLFFBQVEsQ0FBQzRNLGFBQWEsQ0FBQyxLQUFLLENBQUM7VUFDN0NsTixTQUFTLENBQUNvQixTQUFTLENBQUNNLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQztVQUNuRCxJQUFJNk0sSUFBSSxDQUFDckosUUFBUSxDQUFDNEMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QjlILFNBQVMsQ0FBQ29CLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLFNBQVMsQ0FBQztVQUNwQyxDQUFDLE1BQU07WUFDTDFCLFNBQVMsQ0FBQ29CLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBQztVQUNuQztVQUVBLElBQUl1TixJQUFJLEdBQUczTyxRQUFRLENBQUM0TSxhQUFhLENBQUMsTUFBTSxDQUFDO1VBQ3pDLElBQUlxQixJQUFJLENBQUNySixRQUFRLENBQUM0QyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVCbUgsSUFBSSxDQUFDekssU0FBUyxHQUFHYSxNQUFJLENBQUM2SixhQUFhLENBQUMsQ0FBQztVQUN2QyxDQUFDLE1BQU07WUFDTEQsSUFBSSxDQUFDekssU0FBUyxHQUFHYSxNQUFJLENBQUM4SixZQUFZLENBQUMsQ0FBQztVQUN0QztVQUVBblAsU0FBUyxDQUFDb1AsTUFBTSxDQUFDSCxJQUFJLENBQUM7VUFFdEIsSUFBSUksVUFBVSxHQUFHL08sUUFBUSxDQUFDNE0sYUFBYSxDQUFDLEdBQUcsQ0FBQztVQUM1Q21DLFVBQVUsQ0FBQzlOLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHZ04sSUFBSSxDQUFDRyxNQUFNLENBQUM7VUFDbERXLFVBQVUsQ0FBQ2hHLFNBQVMsR0FBR2tGLElBQUksQ0FBQ0MsS0FBSztVQUVqQ3hPLFNBQVMsQ0FBQ29QLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDO1VBRTVCTCxRQUFRLENBQUNJLE1BQU0sQ0FBQ3BQLFNBQVMsQ0FBQztVQUUxQixJQUFJdU8sSUFBSSxDQUFDckosUUFBUSxDQUFDNEMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJd0gsU0FBUyxHQUFHaFAsUUFBUSxDQUFDNE0sYUFBYSxDQUFDLElBQUksQ0FBQztZQUM1Q3FCLElBQUksQ0FBQ3JKLFFBQVEsQ0FBQ3BDLE9BQU8sQ0FBQyxVQUFDNEMsSUFBSSxFQUFLO2NBQzlCLElBQUk2SixTQUFTLEdBQUdqUCxRQUFRLENBQUM0TSxhQUFhLENBQUMsSUFBSSxDQUFDO2NBRTVDLElBQUlzQyxTQUFTLEdBQUdsUCxRQUFRLENBQUM0TSxhQUFhLENBQUMsR0FBRyxDQUFDO2NBQzNDc0MsU0FBUyxDQUFDak8sWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUdtRSxJQUFJLENBQUNnSixNQUFNLENBQUM7Y0FDakRjLFNBQVMsQ0FBQ25HLFNBQVMsR0FBRzNELElBQUksQ0FBQzhJLEtBQUs7Y0FFaENlLFNBQVMsQ0FBQ0gsTUFBTSxDQUFDSSxTQUFTLENBQUM7Y0FDM0JGLFNBQVMsQ0FBQ0YsTUFBTSxDQUFDRyxTQUFTLENBQUM7WUFDN0IsQ0FBQyxDQUFDO1lBRUZQLFFBQVEsQ0FBQ0ksTUFBTSxDQUFDRSxTQUFTLENBQUM7VUFDNUI7VUFFQW5MLElBQUksQ0FBQ2lMLE1BQU0sQ0FBQ0osUUFBUSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ3ZCLGFBQWEsQ0FBQzJCLE1BQU0sQ0FBQ2pMLElBQUksQ0FBQztNQUNqQzs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBSkk7TUFBQXpELEdBQUE7TUFBQUMsS0FBQSxFQUtBLFNBQUE4TyxvQkFBQSxFQUFzQjtRQUNwQixJQUFJelAsU0FBUyxHQUFHTSxRQUFRLENBQUM0TSxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzdDbE4sU0FBUyxDQUFDb0IsU0FBUyxDQUFDTSxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFFMUMsSUFBSWdOLE1BQU0sR0FBR3BPLFFBQVEsQ0FBQzRNLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDeEN3QixNQUFNLENBQUNuTixZQUFZLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQztRQUMzQ21OLE1BQU0sQ0FBQ25OLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDO1FBQzNDbU4sTUFBTSxDQUFDckYsU0FBUyxHQUFHLGFBQWE7UUFFaENySixTQUFTLENBQUNvUCxNQUFNLENBQUNWLE1BQU0sQ0FBQztRQUV4QixPQUFPMU8sU0FBUztNQUNsQjs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQU5JO01BQUFVLEdBQUE7TUFBQUMsS0FBQSxFQU9BLFNBQUF3TixrQkFBa0JoQyxRQUFRLEVBQUU7UUFBQSxJQUFBMUcsTUFBQTtRQUMxQjBHLFFBQVEsQ0FBQ3JKLE9BQU8sQ0FBQyxVQUFDNEosT0FBTyxFQUFFMkIsS0FBSyxFQUFLO1VBQ25DO1VBQ0EsSUFBSSxDQUFDM0IsT0FBTyxDQUFDbkMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDOUMsSUFBTWdFLElBQUksR0FBRzlJLE1BQUksQ0FBQ2dLLG1CQUFtQixDQUFDLENBQUM7WUFDdkMvQyxPQUFPLENBQUN0QixVQUFVLENBQUNzRSxZQUFZLENBQUNuQixJQUFJLEVBQUU3QixPQUFPLENBQUM7WUFDOUNBLE9BQU8sQ0FBQ25MLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7VUFDOUM7UUFDRixDQUFDLENBQUM7TUFDSjs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBSkk7TUFBQWIsR0FBQTtNQUFBQyxLQUFBLEVBS0EsU0FBQXVPLGNBQUEsRUFBZ0I7UUFDZCxPQUFPLCtGQUErRixHQUM3Riw0MkJBQTQyQixHQUM5MkIsUUFBUTtNQUNqQjs7TUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0lBSkk7TUFBQXhPLEdBQUE7TUFBQUMsS0FBQSxFQUtBLFNBQUF3TyxhQUFBLEVBQWU7UUFDYixPQUFPLDZGQUE2RixHQUMzRixrREFBa0QsR0FDcEQsUUFBUTtNQUNqQjtJQUFDO0lBQUEsT0FBQTNCLGFBQUE7RUFBQTtFQUdINUssa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ3VDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLEVBQUVDLE9BQU8sQ0FBQyxVQUFBMkssYUFBYTtJQUFBLE9BQUksSUFBSUQsYUFBYSxDQUFDQyxhQUFhLENBQUM7RUFBQSxFQUFDO0FBQ3BILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk9ELGlFQUFlLFlBQU07RUFDbkI7QUFDRjtBQUNBO0FBQ0E7RUFIRSxJQUlNa0MsTUFBTTtJQUNWLFNBQUFBLE9BQVkzUCxTQUFTLEVBQUU7TUFBQUMsZUFBQSxPQUFBMFAsTUFBQTtNQUNyQixJQUFJLENBQUMzUCxTQUFTLEdBQUdBLFNBQVM7TUFFMUIsSUFBSSxDQUFDNFAsVUFBVSxHQUFBaE4sa0JBQUEsQ0FBTyxJQUFJLENBQUM1QyxTQUFTLENBQUM2QyxzQkFBc0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO01BQ3ZGLElBQUksQ0FBQ2dOLFNBQVMsR0FBQWpOLGtCQUFBLENBQU8sSUFBSSxDQUFDNUMsU0FBUyxDQUFDNkMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7TUFDM0UsSUFBSSxDQUFDaU4sTUFBTSxHQUFBbE4sa0JBQUEsQ0FBTyxJQUFJLENBQUM1QyxTQUFTLENBQUM2QyxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO01BQy9FLElBQUksQ0FBQ2tOLE1BQU0sR0FBRyxJQUFJLENBQUMvUCxTQUFTLENBQUNHLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztNQUNuRSxJQUFJLENBQUM2UCxXQUFXLEdBQUFwTixrQkFBQSxDQUFPLElBQUksQ0FBQzVDLFNBQVMsQ0FBQzZDLHNCQUFzQixDQUFDLDRCQUE0QixDQUFDLENBQUM7TUFFM0YsSUFBSSxDQUFDb04sS0FBSyxDQUFDLENBQUM7TUFDWixJQUFJLENBQUMxUCxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFCO0lBQUNFLFlBQUEsQ0FBQWtQLE1BQUE7TUFBQWpQLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFKLGtCQUFBLEVBQW9CO1FBQUEsSUFBQUssS0FBQTtRQUNsQixJQUFJLENBQUNnUCxVQUFVLENBQUM5TSxPQUFPLENBQUMsVUFBQW9OLFFBQVEsRUFBSTtVQUNsQ0EsUUFBUSxDQUFDclAsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUE2QyxHQUFHO1lBQUEsT0FBSTlDLEtBQUksQ0FBQ3VQLGFBQWEsQ0FBQ3pNLEdBQUcsQ0FBQztVQUFBLEVBQUM7UUFDckUsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDbU0sU0FBUyxDQUFDL00sT0FBTyxDQUFDLFVBQUFzTixRQUFRLEVBQUk7VUFDakNBLFFBQVEsQ0FBQ3ZQLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFBNkMsR0FBRztZQUFBLE9BQUk5QyxLQUFJLENBQUN1UCxhQUFhLENBQUN6TSxHQUFHLENBQUM7VUFBQSxFQUFDO1FBQ3JFLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ29NLE1BQU0sQ0FBQ2hOLE9BQU8sQ0FBQyxVQUFBdU4sS0FBSyxFQUFJO1VBQzNCLElBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDbFEsYUFBYSxDQUFDLHlCQUF5QixDQUFDO1VBQzdELElBQUltUSxNQUFNLEVBQUU7WUFDVkEsTUFBTSxDQUFDelAsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUE2QyxHQUFHO2NBQUEsT0FBSTlDLEtBQUksQ0FBQzJQLG1CQUFtQixDQUFDN00sR0FBRyxDQUFDO1lBQUEsRUFBQztVQUN4RTtRQUNGLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQ3NNLFdBQVcsQ0FBQ2xOLE9BQU8sQ0FBQyxVQUFBekIsTUFBTSxFQUFJO1VBQ2pDQSxNQUFNLENBQUNSLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBNkMsR0FBRztZQUFBLE9BQUk5QyxLQUFJLENBQUM0UCxXQUFXLENBQUM5TSxHQUFHLENBQUM7VUFBQSxFQUFDO1FBQ2hFLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQWhELEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFzUCxNQUFBLEVBQVE7UUFDTixJQUFJLENBQUNqUSxTQUFTLENBQUNvQixTQUFTLENBQUNNLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztRQUVoRCxJQUFJLENBQUMrTyxXQUFXLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUNDLGdCQUFnQixDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQzs7UUFFbkI7UUFDQSxJQUFJLElBQUksQ0FBQ1osTUFBTSxFQUFFO1VBQ2YsSUFBSSxDQUFDQSxNQUFNLENBQUMvRCxNQUFNLEdBQUcsSUFBSTtRQUMzQjtNQUNGO0lBQUM7TUFBQXRMLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUE4UCxZQUFBLEVBQWM7UUFBQSxJQUFBcEwsTUFBQTtRQUNaLElBQUksQ0FBQ3lLLE1BQU0sQ0FBQ2hOLE9BQU8sQ0FBQyxVQUFBdU4sS0FBSyxFQUFJO1VBRTNCLElBQUksQ0FBQ2hMLE1BQUksQ0FBQ3VMLG1CQUFtQixDQUFDUCxLQUFLLENBQUMsRUFBRTtZQUNwQztZQUNBQSxLQUFLLENBQUNqUCxTQUFTLENBQUNNLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztVQUNwRDs7VUFFQTtVQUNBLElBQUkyTyxLQUFLLENBQUNqUCxTQUFTLENBQUN5QyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDNUMsSUFBTWdOLFlBQVksR0FBR1IsS0FBSyxDQUFDbFEsYUFBYSxDQUFDLHVDQUF1QyxDQUFDO1lBQ2pGLElBQU0yUSxTQUFTLEdBQUdULEtBQUssQ0FBQ2xRLGFBQWEsQ0FBQyxvQ0FBb0MsQ0FBQztZQUUzRSxJQUFJMlEsU0FBUyxLQUFLLElBQUksSUFBSUQsWUFBWSxLQUFLLElBQUksSUFBSUEsWUFBWSxDQUFDbFEsS0FBSyxLQUFLLEVBQUUsRUFBRTtjQUM1RW1RLFNBQVMsQ0FBQ3ZQLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO1lBQ2hEO1VBQ0Y7O1VBRUE7VUFDQSxJQUFNcU8sVUFBVSxHQUFHUyxLQUFLLENBQUM5TSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztVQUM5RHFNLFVBQVUsQ0FBQzlNLE9BQU8sQ0FBQyxVQUFBaU8sRUFBRSxFQUFJO1lBQ3ZCLElBQUlBLEVBQUUsQ0FBQ0MsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO2NBQzVCRCxFQUFFLENBQUMzUCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDaEM7VUFDRixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7TUFDSjtJQUFDO01BQUFoQixHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBK1AsaUJBQUEsRUFBbUI7UUFBQSxJQUFBakwsTUFBQTtRQUNqQixJQUFJLENBQUNxSyxNQUFNLENBQUNoTixPQUFPLENBQUMsVUFBQXVOLEtBQUssRUFBSTtVQUMzQixJQUFNbk4sVUFBVSxHQUFHbU4sS0FBSyxDQUFDbFEsYUFBYSxDQUFDLDZCQUE2QixDQUFDO1VBQ3JFLElBQUlzRixNQUFJLENBQUNtTCxtQkFBbUIsQ0FBQ1AsS0FBSyxDQUFDLEVBQUU7WUFDbkNuTixVQUFVLENBQUM5QixTQUFTLENBQUNNLEdBQUcsQ0FBQyxTQUFTLENBQUM7VUFDckM7UUFDRixDQUFDLENBQUM7TUFDSjtJQUFDO01BQUFoQixHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBZ1EsYUFBQSxFQUFlO1FBQUEsSUFBQU0sTUFBQTtRQUNiLElBQUksQ0FBQ25CLE1BQU0sQ0FBQ2hOLE9BQU8sQ0FBQyxVQUFBdU4sS0FBSyxFQUFJO1VBQzNCWSxNQUFJLENBQUNDLGlCQUFpQixDQUFDYixLQUFLLENBQUM7UUFDL0IsQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBM1AsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXVRLGtCQUFrQmIsS0FBSyxFQUFFO1FBQ3ZCLElBQU1jLFNBQVMsR0FBR2QsS0FBSyxDQUFDbFEsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUVwRCxJQUFJZ1IsU0FBUyxLQUFLLElBQUksRUFBRTtVQUN0QjtRQUNGO1FBRUEsSUFBSXRDLEtBQUssR0FBRyxDQUFDO1FBQ2IsSUFBTWUsVUFBVSxHQUFHUyxLQUFLLENBQUM5TSxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQztRQUVyRSxLQUFLLElBQUlxSCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdnRixVQUFVLENBQUM5SCxNQUFNLEVBQUU4QyxDQUFDLEVBQUUsRUFBRTtVQUMxQyxJQUFJZ0YsVUFBVSxDQUFDaEYsQ0FBQyxDQUFDLENBQUN2QyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xDd0csS0FBSyxFQUFFO1VBQ1Q7UUFDRjtRQUVBLElBQUlBLEtBQUssS0FBSyxDQUFDLEVBQUU7VUFDZnNDLFNBQVMsQ0FBQy9QLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLFNBQVMsQ0FBQztVQUNyQztRQUNGO1FBRUF3UCxTQUFTLENBQUM5SCxTQUFTLE1BQUFqRSxNQUFBLENBQU15SixLQUFLLGNBQVc7UUFDekNzQyxTQUFTLENBQUMvUCxTQUFTLENBQUNNLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDcEM7SUFBQztNQUFBaEIsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWlRLG9CQUFvQlAsS0FBSyxFQUFFO1FBQ3pCO1FBQ0EsSUFBTVQsVUFBVSxHQUFHUyxLQUFLLENBQUM5TSxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQztRQUNyRSxLQUFLLElBQUlxSCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdnRixVQUFVLENBQUM5SCxNQUFNLEVBQUU4QyxDQUFDLEVBQUUsRUFBRTtVQUMxQyxJQUFJZ0YsVUFBVSxDQUFDaEYsQ0FBQyxDQUFDLENBQUN2QyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xDLE9BQU8sSUFBSTtVQUNiO1FBQ0Y7O1FBRUE7UUFDQSxJQUFNK0ksY0FBYyxHQUFHZixLQUFLLENBQUM5TSxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFDOUQsS0FBSyxJQUFJcUgsRUFBQyxHQUFHLENBQUMsRUFBRUEsRUFBQyxHQUFHd0csY0FBYyxDQUFDdEosTUFBTSxFQUFFOEMsRUFBQyxFQUFFLEVBQUU7VUFDOUMsSUFBSXdHLGNBQWMsQ0FBQ3hHLEVBQUMsQ0FBQyxDQUFDakssS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNsQyxPQUFPLElBQUk7VUFDYjtRQUNGO1FBRUEsT0FBTyxLQUFLO01BQ2Q7SUFBQztNQUFBRCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBNFAsb0JBQW9CN00sR0FBRyxFQUFFO1FBQ3ZCQSxHQUFHLENBQUNQLGNBQWMsQ0FBQyxDQUFDO1FBQ3BCTyxHQUFHLENBQUN6QyxNQUFNLENBQUNpRixPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQzlFLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLDZCQUE2QixDQUFDO01BQzVGO0lBQUM7TUFBQVgsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQTBRLGVBQWVDLFNBQVMsRUFBRTtRQUN4QjtRQUNBO1FBQ0EsSUFBSUMsV0FBVyxHQUFHLElBQUksQ0FBQ3ZSLFNBQVMsQ0FBQ0csYUFBYSxDQUFDLGtDQUFrQyxDQUFDO1FBQ2xGLElBQUlvUixXQUFXLEtBQUssSUFBSSxFQUFFO1VBQ3hCQSxXQUFXLENBQUM1USxLQUFLLEdBQUcyUSxTQUFTO1FBQy9CO01BQ0Y7SUFBQztNQUFBNVEsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXdQLGNBQWN6TSxHQUFHLEVBQUU7UUFDakI7UUFDQTtRQUNBLElBQUksQ0FBQzJOLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFFekIsSUFBTUcsV0FBVyxHQUFHOU4sR0FBRyxDQUFDekMsTUFBTSxDQUFDaUYsT0FBTyxDQUFDLHNCQUFzQixDQUFDO1FBQzlELElBQUksQ0FBQ2dMLGlCQUFpQixDQUFDTSxXQUFXLENBQUM7UUFFbkMsSUFBSSxDQUFDeFIsU0FBUyxDQUFDK1AsTUFBTSxDQUFDLENBQUM7TUFDekI7SUFBQztNQUFBclAsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQTZQLFlBQVk5TSxHQUFHLEVBQUU7UUFDZixJQUFJLENBQUMrTixlQUFlLENBQUMvTixHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDZ08sbUJBQW1CLENBQUNoTyxHQUFHLENBQUM7UUFFN0IsSUFBSSxDQUFDeU0sYUFBYSxDQUFDek0sR0FBRyxDQUFDO01BQ3pCO0lBQUM7TUFBQWhELEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUE4USxnQkFBZ0IvTixHQUFHLEVBQUU7UUFDbkJBLEdBQUcsQ0FBQ1AsY0FBYyxDQUFDLENBQUM7UUFFcEIsSUFBTUQsVUFBVSxHQUFHUSxHQUFHLENBQUN6QyxNQUFNO1FBQzdCLElBQU0yTyxVQUFVLEdBQUcxTSxVQUFVLENBQUM0QyxhQUFhLENBQUN2QyxnQkFBZ0IsQ0FBQywwQkFBMEIsQ0FBQztRQUV4RnFNLFVBQVUsQ0FBQzlNLE9BQU8sQ0FBQyxVQUFBaU8sRUFBRSxFQUFJO1VBQ3ZCQSxFQUFFLENBQUMvSCxlQUFlLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUMsQ0FBQztNQUNKO0lBQUM7TUFBQXRJLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUErUSxvQkFBb0JoTyxHQUFHLEVBQUU7UUFDdkJBLEdBQUcsQ0FBQ1AsY0FBYyxDQUFDLENBQUM7UUFFcEIsSUFBTUQsVUFBVSxHQUFHUSxHQUFHLENBQUN6QyxNQUFNO1FBQzdCLElBQU1tUSxjQUFjLEdBQUdsTyxVQUFVLENBQUM0QyxhQUFhLENBQUN2QyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7UUFFakY2TixjQUFjLENBQUN0TyxPQUFPLENBQUMsVUFBQTZPLE1BQU0sRUFBSTtVQUMvQkEsTUFBTSxDQUFDQyxhQUFhLEdBQUcsQ0FBQztRQUMxQixDQUFDLENBQUM7TUFDSjtJQUFDO0lBQUEsT0FBQWpDLE1BQUE7RUFBQTtFQUdIL00sa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ3VDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxFQUFFQyxPQUFPLENBQUMsVUFBQXdGLE1BQU07SUFBQSxPQUFJLElBQUlxSCxNQUFNLENBQUNySCxNQUFNLENBQUM7RUFBQSxFQUFDO0FBQzVGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck1ELGlFQUFlLFlBQU07RUFDbkI7QUFDRjtBQUNBO0FBQ0E7RUFIRSxJQUlNdUosU0FBUztJQUNiLFNBQUFBLFVBQVlDLEdBQUcsRUFBRTtNQUFBN1IsZUFBQSxPQUFBNFIsU0FBQTtNQUNmLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO01BQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdELEdBQUcsQ0FBQzNSLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztNQUV4RCxJQUFJLENBQUM4UCxLQUFLLENBQUMsQ0FBQztNQUNaLElBQUksQ0FBQzFQLGlCQUFpQixDQUFDLENBQUM7SUFDMUI7SUFBQ0UsWUFBQSxDQUFBb1IsU0FBQTtNQUFBblIsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQUosa0JBQUEsRUFBb0I7UUFBQSxJQUFBSyxLQUFBO1FBQ2xCLElBQUksQ0FBQ2tSLEdBQUcsQ0FBQ2pSLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDNkMsR0FBRztVQUFBLE9BQUs5QyxLQUFJLENBQUNvUixZQUFZLENBQUN0TyxHQUFHLENBQUM7UUFBQSxFQUFDO01BQ3JFO0lBQUM7TUFBQWhELEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFxUixhQUFhdE8sR0FBRyxFQUFFO1FBQ2hCQSxHQUFHLENBQUNQLGNBQWMsQ0FBQyxDQUFDO1FBRXBCLElBQU04TyxTQUFTLEdBQUcsSUFBSSxDQUFDSCxHQUFHLENBQUNoTSxhQUFhLENBQUN2QyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQzs7UUFFOUU7UUFDQSxJQUFJME8sU0FBUyxDQUFDbkssTUFBTSxLQUFLLENBQUMsRUFBRTtVQUMxQixJQUFJLENBQUNnSyxHQUFHLENBQUNoTSxhQUFhLENBQUNuRSxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDLE1BQUs7VUFDSixJQUFJLENBQUNtUSxHQUFHLENBQUNuUSxNQUFNLENBQUMsQ0FBQztRQUNuQjtRQUVBckIsUUFBUSxDQUFDaUQsZ0JBQWdCLG1DQUFBNkIsTUFBQSxDQUFtQyxJQUFJLENBQUMwTSxHQUFHLENBQUN4SSxPQUFPLENBQUNoQixNQUFNLE9BQUksQ0FBQyxDQUFDeEYsT0FBTyxDQUFDLFVBQUFvTixRQUFRLEVBQUk7VUFDM0dBLFFBQVEsQ0FBQzdILE9BQU8sR0FBRyxLQUFLO1VBQ3hCNkgsUUFBUSxDQUFDZ0MsYUFBYSxDQUFDLElBQUlDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7UUFFRjdSLFFBQVEsQ0FBQ2lELGdCQUFnQiwyQ0FBQTZCLE1BQUEsQ0FBMkMsSUFBSSxDQUFDME0sR0FBRyxDQUFDeEksT0FBTyxDQUFDaEIsTUFBTSxPQUFJLENBQUMsQ0FBQ3hGLE9BQU8sQ0FBQyxVQUFBc1AsTUFBTSxFQUFJO1VBQ2pILElBQU1DLGlCQUFpQixHQUFHRCxNQUFNLENBQUN0TSxhQUFhO1VBQzlDdU0saUJBQWlCLENBQUNULGFBQWEsR0FBRyxDQUFDOztVQUVuQztVQUNBLElBQU1VLGFBQWEsR0FBR0YsTUFBTSxDQUFDdE0sYUFBYSxDQUFDQSxhQUFhLENBQUNBLGFBQWEsQ0FBQ0EsYUFBYTtVQUNwRixJQUFJd00sYUFBYSxDQUFDbFIsU0FBUyxDQUFDeUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3BELElBQU0wTyxjQUFjLEdBQUdELGFBQWEsQ0FBQzFELGtCQUFrQixDQUFDek8sYUFBYSxDQUFDLGVBQWUsQ0FBQztZQUN0Rm9TLGNBQWMsQ0FBQ1gsYUFBYSxHQUFHLENBQUM7VUFDbEM7VUFFQVMsaUJBQWlCLENBQUNILGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDO01BQ0o7SUFBQztNQUFBelIsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXNQLE1BQUEsRUFBUTtRQUNOLElBQUksQ0FBQzZCLEdBQUcsQ0FBQzFRLFNBQVMsQ0FBQ00sR0FBRyxDQUFDLHNCQUFzQixDQUFDO1FBRTlDLElBQUksSUFBSSxDQUFDcVEsSUFBSSxFQUFFO1VBQ2IsSUFBSSxDQUFDQSxJQUFJLENBQUMvRixNQUFNLEdBQUcsS0FBSztRQUMxQjtNQUNGO0lBQUM7SUFBQSxPQUFBNkYsU0FBQTtFQUFBO0VBR0hqUCxrQkFBQSxDQUFJdEMsUUFBUSxDQUFDdUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsRUFBRUMsT0FBTyxDQUFDLFVBQUFnUCxHQUFHO0lBQUEsT0FBSSxJQUFJRCxTQUFTLENBQUNDLEdBQUcsQ0FBQztFQUFBLEVBQUM7QUFDN0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REQsaUVBQWUsWUFBTTtFQUNuQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEUsSUFRTVUsT0FBTztJQUNYLFNBQUFBLFFBQVl4UyxTQUFTLEVBQUU7TUFBQSxJQUFBWSxLQUFBO01BQUFYLGVBQUEsT0FBQXVTLE9BQUE7TUFFckIsSUFBSSxDQUFDeFMsU0FBUyxHQUFHQSxTQUFTO01BRTFCNEMsa0JBQUEsQ0FBSTVDLFNBQVMsQ0FBQ3VELGdCQUFnQixDQUFDLGtEQUFrRCxDQUFDLEVBQUVULE9BQU8sQ0FBQyxVQUFBMlAsV0FBVyxFQUFJO1FBQ3pHN1IsS0FBSSxDQUFDTCxpQkFBaUIsQ0FBQ2tTLFdBQVcsQ0FBQztRQUNuQzdSLEtBQUksQ0FBQzhSLHdCQUF3QixDQUFDRCxXQUFXLENBQUM7TUFDNUMsQ0FBQyxDQUFDOztNQUVGO01BQ0FFLE9BQU8sQ0FBQ0MsaUJBQWlCLEdBQUcsUUFBUTtNQUVwQyxJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hCO0lBQUNwUyxZQUFBLENBQUErUixPQUFBO01BQUE5UixHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBSixrQkFBa0JrUyxXQUFXLEVBQUU7UUFBQSxJQUFBcE4sTUFBQTtRQUM3QixJQUFJb04sV0FBVyxFQUFFO1VBQ2Y3UCxrQkFBQSxDQUFJNlAsV0FBVyxDQUFDSyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRWhRLE9BQU8sQ0FBQyxVQUFBNk8sTUFBTSxFQUFJO1lBQ2hFQSxNQUFNLENBQUM5USxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQTZDLEdBQUc7Y0FBQSxPQUFJMkIsTUFBSSxDQUFDOEssYUFBYSxDQUFDc0MsV0FBVyxDQUFDO1lBQUEsRUFBQztVQUMzRSxDQUFDLENBQUM7UUFDSjtNQUNGO0lBQUM7TUFBQS9SLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUErUix5QkFBeUJELFdBQVcsRUFBRTtRQUNwQyxJQUFJQSxXQUFXLEVBQUU7VUFDZjdQLGtCQUFBLENBQUk2UCxXQUFXLENBQUNsUCxnQkFBZ0IsQ0FBQyw0REFBNEQsQ0FBQyxFQUFFVCxPQUFPLENBQUMsVUFBQWlOLE1BQU0sRUFBSTtZQUNoSCxJQUFJQSxNQUFNLEVBQUU7Y0FDVkEsTUFBTSxDQUFDL0QsTUFBTSxHQUFHLElBQUk7WUFDdEI7VUFDRixDQUFDLENBQUM7UUFDSjtNQUNGO0lBQUM7TUFBQXRMLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUEwUSxlQUFlQyxTQUFTLEVBQUU7UUFDeEIsSUFBSUMsV0FBVyxHQUFHLElBQUksQ0FBQ3ZSLFNBQVMsQ0FBQ0csYUFBYSxDQUFDLG1DQUFtQyxDQUFDO1FBQ25GLElBQUlvUixXQUFXLEtBQUssSUFBSSxFQUFFO1VBQ3hCQSxXQUFXLENBQUM1USxLQUFLLEdBQUcyUSxTQUFTO1FBQy9CO01BQ0Y7SUFBQztNQUFBNVEsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXdQLGNBQWNzQyxXQUFXLEVBQUU7UUFDekI7UUFDQTtRQUNBLElBQUksQ0FBQ3BCLGNBQWMsQ0FBQyxJQUFJLENBQUM7UUFFekJvQixXQUFXLENBQUMxQyxNQUFNLENBQUMsQ0FBQztNQUN0QjtJQUFDO01BQUFyUCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBa1MsZ0JBQUEsRUFBa0I7UUFDaEIsSUFBTUUsR0FBRyxHQUFHLElBQUlDLEdBQUcsQ0FBQzdSLE1BQU0sQ0FBQzhSLFFBQVEsQ0FBQztRQUVwQyxJQUFJRixHQUFHLENBQUNHLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7VUFDM0MsSUFBTUMsZ0JBQWdCLEdBQUc5UyxRQUFRLENBQUNnSCxjQUFjLENBQUMsU0FBUyxDQUFDO1VBRTNELElBQUk4TCxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7WUFDN0JBLGdCQUFnQixDQUFDQyxjQUFjLENBQUMsQ0FBQztVQUNuQztRQUNGO01BQ0Y7SUFBQztJQUFBLE9BQUFiLE9BQUE7RUFBQTtFQUdINVAsa0JBQUEsQ0FBSXRDLFFBQVEsQ0FBQ2lELGdCQUFnQixDQUFDLDhCQUE4QixDQUFDLEVBQUVULE9BQU8sQ0FBQyxVQUFBd1EsT0FBTztJQUFBLE9BQUksSUFBSWQsT0FBTyxDQUFDYyxPQUFPLENBQUM7RUFBQSxFQUFDO0FBQ3pHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVELGlFQUFlLFlBQU07RUFBQSxJQUNiQyxPQUFPO0lBQ1gsU0FBQUEsUUFBQSxFQUFjO01BQUF0VCxlQUFBLE9BQUFzVCxPQUFBO01BQ1o7TUFDQSxJQUFJLENBQUNDLFVBQVUsR0FBRyxFQUFFO01BQ3BCLElBQUksQ0FBQ0MsTUFBTSxHQUFHblQsUUFBUSxDQUFDSCxhQUFhLENBQUMsc0JBQXNCLENBQUM7TUFDNUQsSUFBSSxDQUFDdVQsV0FBVyxHQUFHcFQsUUFBUSxDQUFDZ0gsY0FBYyxDQUFDLGFBQWEsQ0FBQztNQUN6RCxJQUFJLENBQUNxTSxhQUFhLEdBQUdyVCxRQUFRLENBQUNnSCxjQUFjLENBQUMsZUFBZSxDQUFDO01BQzdELElBQUksQ0FBQ3NNLElBQUksR0FBRyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDO01BRTFCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7TUFDbkIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztNQUNqQixJQUFJLENBQUN4VCxpQkFBaUIsQ0FBQyxDQUFDOztNQUV4QjtNQUNBLElBQUksQ0FBQ3lULE1BQU0sR0FBRzFULFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLHNCQUFzQixDQUFDO01BQzVELElBQUksQ0FBQzhULEVBQUUsR0FBRzNULFFBQVEsQ0FBQ2lELGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO01BQ3hELElBQUksQ0FBQzJRLEdBQUcsR0FBRzVULFFBQVEsQ0FBQ2lELGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO01BRTFELElBQUksQ0FBQzRRLFlBQVksQ0FBQyxDQUFDO0lBQ3JCO0lBQUMxVCxZQUFBLENBQUE4UyxPQUFBO01BQUE3UyxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBbVQsYUFBQSxFQUFjO1FBQUEsSUFBQWxULEtBQUE7UUFDWixJQUFNd1QsT0FBTyxHQUFHOVQsUUFBUSxDQUFDK1QsTUFBTSxDQUFDL0gsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMxQzhILE9BQU8sQ0FBQ3RSLE9BQU8sQ0FBQyxVQUFBcUUsQ0FBQyxFQUFJO1VBQ25CLElBQU1tTixLQUFLLEdBQUduTixDQUFDLENBQUNtTixLQUFLLENBQUMsSUFBSUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7VUFDL0QsSUFBR0QsS0FBSyxFQUFFO1lBQ1IsSUFBTUUsTUFBTSxHQUFHck4sQ0FBQyxDQUFDbUYsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QjFMLEtBQUksQ0FBQzRTLFVBQVUsR0FBR2dCLE1BQU07VUFDMUI7UUFDRixDQUFDLENBQUM7TUFDSjtJQUFDO01BQUE5VCxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBa1QsUUFBQSxFQUFTO1FBQ1AsSUFBTUQsSUFBSSxHQUFHelMsTUFBTSxDQUFDOFIsUUFBUSxDQUFDVyxJQUFJLENBQUNhLFFBQVEsQ0FBQyxDQUFDLENBQUNuSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELE9BQU9zSCxJQUFJO01BQ2I7SUFBQztNQUFBbFQsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQUosa0JBQUEsRUFBb0I7UUFDbEIsSUFBRyxJQUFJLENBQUNtVCxXQUFXLEVBQUU7VUFDbkIsSUFBSSxDQUFDQSxXQUFXLENBQUM3UyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDNlQsVUFBVSxDQUFDO1FBQ2pFO1FBQ0EsSUFBRyxJQUFJLENBQUNmLGFBQWEsRUFBRTtVQUNyQixJQUFJLENBQUNBLGFBQWEsQ0FBQzlTLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM4VCxZQUFZLENBQUM7UUFDckU7TUFDRjtJQUFDO01BQUFqVSxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBaVUsV0FBQSxFQUFhO1FBQ1gsSUFBRyxJQUFJLENBQUNuQixNQUFNLEVBQUU7VUFDZCxJQUFJLENBQUNBLE1BQU0sQ0FBQzFOLEtBQUssQ0FBQ2dDLE9BQU8sR0FBRyxPQUFPO1FBQ3JDO01BQ0Y7SUFBQztNQUFBckgsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWtVLFdBQUEsRUFBYTtRQUNYLElBQUcsSUFBSSxDQUFDcEIsTUFBTSxFQUFFO1VBQ2QsSUFBSSxDQUFDQSxNQUFNLENBQUMxTixLQUFLLENBQUNnQyxPQUFPLEdBQUcsTUFBTTtRQUNwQztNQUNGO0lBQUM7TUFBQXJILEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFvVCxXQUFBLEVBQWE7UUFBQSxJQUFBMU8sTUFBQTtRQUNULElBQUksSUFBSSxDQUFDbU8sVUFBVSxLQUFLLEVBQUUsRUFBRTtVQUMxQixJQUFJLENBQUNvQixVQUFVLENBQUMsQ0FBQztVQUNqQixJQUFNRSxlQUFlLEdBQUd4VSxRQUFRLENBQUNILGFBQWEsQ0FBQyw2Q0FBNkMsQ0FBQztVQUM3RixJQUFJMlUsZUFBZSxFQUFFO1lBQ25CQSxlQUFlLENBQUNqVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQTZDLEdBQUcsRUFBSTtjQUMvQ0EsR0FBRyxDQUFDUCxjQUFjLENBQUMsQ0FBQztjQUNwQmtDLE1BQUksQ0FBQ3dQLFVBQVUsQ0FBQyxDQUFDO2NBQ2pCeFAsTUFBSSxDQUFDMFAsU0FBUyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDO1VBQ0o7VUFDQSxJQUFNQyxnQkFBZ0IsR0FBRzFVLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLDhDQUE4QyxDQUFDO1VBQy9GLElBQUk2VSxnQkFBZ0IsRUFBRTtZQUNwQkEsZ0JBQWdCLENBQUNuVSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQTZDLEdBQUcsRUFBSTtjQUNoREEsR0FBRyxDQUFDUCxjQUFjLENBQUMsQ0FBQztjQUNwQmtDLE1BQUksQ0FBQ3dQLFVBQVUsQ0FBQyxDQUFDO2NBQ2pCeFAsTUFBSSxDQUFDNFAsUUFBUSxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDO1VBQ0o7UUFDRjtNQUNKO0lBQUM7TUFBQXZVLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFvVSxVQUFBLEVBQVk7UUFDVnpVLFFBQVEsQ0FBQytULE1BQU0sa0NBQUFqUCxNQUFBLENBQWtDLElBQUksQ0FBQ3dPLElBQUksc0JBQW1CO1FBQzdFWCxRQUFRLENBQUNpQyxNQUFNLENBQUMsQ0FBQztNQUNuQjtJQUFDO01BQUF4VSxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBc1UsU0FBQSxFQUFXO1FBQ1QzVSxRQUFRLENBQUMrVCxNQUFNLG1DQUFBalAsTUFBQSxDQUFtQyxJQUFJLENBQUN3TyxJQUFJLHNCQUFtQjtRQUM5RVgsUUFBUSxDQUFDaUMsTUFBTSxDQUFDLENBQUM7TUFDbkI7SUFBQztNQUFBeFUsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXdULGFBQUEsRUFBZTtRQUFBLElBQUExTyxNQUFBO1FBQ2IsSUFBRyxJQUFJLENBQUN1TyxNQUFNLEVBQUM7VUFDYjFULFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBNkMsR0FBRyxFQUFJO1lBQ2xGQSxHQUFHLENBQUNQLGNBQWMsQ0FBQyxDQUFDO1lBQ3BCc0MsTUFBSSxDQUFDb1AsVUFBVSxDQUFDLENBQUM7WUFDakJwUCxNQUFJLENBQUNzUCxTQUFTLENBQUMsQ0FBQztZQUNoQjlCLFFBQVEsQ0FBQ2lDLE1BQU0sQ0FBQyxDQUFDO1VBQ25CLENBQUMsQ0FBQztVQUVGNVUsUUFBUSxDQUFDSCxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQ1UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUE2QyxHQUFHLEVBQUk7WUFDakZBLEdBQUcsQ0FBQ1AsY0FBYyxDQUFDLENBQUM7WUFDcEJzQyxNQUFJLENBQUNvUCxVQUFVLENBQUMsQ0FBQztZQUNqQnBQLE1BQUksQ0FBQ3dQLFFBQVEsQ0FBQyxDQUFDO1lBQ2ZoQyxRQUFRLENBQUNpQyxNQUFNLENBQUMsQ0FBQztVQUNuQixDQUFDLENBQUM7VUFFRixJQUFJLElBQUksQ0FBQzFCLFVBQVUsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDQSxVQUFVLEtBQUssRUFBRSxFQUFHO1lBQzFELElBQUksQ0FBQzJCLFlBQVksQ0FBQyxJQUFJLENBQUNqQixHQUFHLENBQUM7WUFDM0IsSUFBSSxDQUFDa0IsV0FBVyxDQUFDLElBQUksQ0FBQ25CLEVBQUUsQ0FBQztVQUMzQixDQUFDLE1BQU07WUFDTCxJQUFJLENBQUNtQixXQUFXLENBQUMsSUFBSSxDQUFDbEIsR0FBRyxDQUFDO1lBQzFCLElBQUksQ0FBQ2lCLFlBQVksQ0FBQyxJQUFJLENBQUNsQixFQUFFLENBQUM7VUFDNUI7UUFDRjtNQUNGO0lBQUM7TUFBQXZULEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUF3VSxhQUFhelAsSUFBSSxFQUFFO1FBQ2pCQSxJQUFJLENBQUM1QyxPQUFPLENBQUMsVUFBQW9JLENBQUM7VUFBQSxPQUFJQSxDQUFDLENBQUNuRixLQUFLLENBQUNnQyxPQUFPLEdBQUMsY0FBYztRQUFBLEVBQUM7TUFDbkQ7SUFBQztNQUFBckgsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQXlVLFlBQVkxUCxJQUFJLEVBQUU7UUFDaEJBLElBQUksQ0FBQzVDLE9BQU8sQ0FBQyxVQUFBb0ksQ0FBQztVQUFBLE9BQUlBLENBQUMsQ0FBQ25GLEtBQUssQ0FBQ2dDLE9BQU8sR0FBQyxNQUFNO1FBQUEsRUFBQztNQUMzQzs7TUFFQTtJQUFBO01BQUFySCxHQUFBO01BQUFDLEtBQUEsRUFDQSxTQUFBK1QsV0FBQSxFQUFhO1FBQ1gsSUFBTVcsTUFBTSxHQUFHL1UsUUFBUSxDQUFDZ0gsY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUNqRCtOLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLElBQUksR0FBR2hWLFFBQVEsQ0FBQytULE1BQU07TUFDN0M7SUFBQztNQUFBM1QsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWdVLGFBQUEsRUFBZTtRQUNiclUsUUFBUSxDQUFDK1QsTUFBTSxHQUFHLGlDQUFpQztRQUNuRHBCLFFBQVEsQ0FBQ2lDLE1BQU0sQ0FBQyxDQUFDO01BQ25CO0lBQUM7SUFBQSxPQUFBM0IsT0FBQTtFQUFBO0VBSUgsSUFBSUEsT0FBTyxDQUFDalQsUUFBUSxDQUFDO0FBQ3ZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0lEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQU07RUFBQSxJQUNiaVYsTUFBTTtJQUNWLFNBQUFBLE9BQVl2VixTQUFTLEVBQUU7TUFBQUMsZUFBQSxPQUFBc1YsTUFBQTtNQUNyQixJQUFJLENBQUN2VixTQUFTLEdBQUdBLFNBQVM7TUFDMUIsSUFBSSxDQUFDa0QsVUFBVSxHQUFHLElBQUksQ0FBQ2xELFNBQVMsQ0FBQ0csYUFBYSxDQUFDLEdBQUcsQ0FBQztNQUNuRCxJQUFJLENBQUNxVixVQUFVLEdBQUcsSUFBSSxDQUFDeFYsU0FBUyxDQUFDb0wsVUFBVTtNQUMzQyxJQUFJLENBQUM3SyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFCO0lBQUNFLFlBQUEsQ0FBQThVLE1BQUE7TUFBQTdVLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUFKLGtCQUFBLEVBQW9CO1FBQUEsSUFBQUssS0FBQTtRQUNsQixJQUFJLElBQUksQ0FBQ3NDLFVBQVUsRUFBRTtVQUNuQixJQUFJLENBQUNBLFVBQVUsQ0FBQ3JDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBRSxLQUFLO1lBQUEsT0FBSUEsS0FBSyxDQUFDb0MsY0FBYyxDQUFDLENBQUM7VUFBQSxFQUFDO1VBQzFFLElBQUksQ0FBQ0QsVUFBVSxDQUFDckMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUFFLEtBQUs7WUFBQSxPQUFJSCxLQUFJLENBQUM2VSxVQUFVLENBQUMxVSxLQUFLLENBQUM7VUFBQSxFQUFDO1VBQzlFLElBQUksQ0FBQ21DLFVBQVUsQ0FBQ3JDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBRSxLQUFLLEVBQUk7WUFDakQsSUFBSUEsS0FBSyxDQUFDQyxPQUFPLEtBQUssRUFBRSxFQUFFO2NBQ3hCSixLQUFJLENBQUM2VSxVQUFVLENBQUMxVSxLQUFLLENBQUM7WUFDeEI7VUFDRixDQUFDLENBQUM7UUFDSjtNQUNGO0lBQUM7TUFBQUwsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQStVLFlBQUEsRUFBYTtRQUFBLElBQUFyUSxNQUFBO1FBQ1gsSUFBTXNRLFdBQVcsR0FBR3JWLFFBQVEsQ0FBQ2lELGdCQUFnQixDQUFDLHlCQUF5QixDQUFDO1FBQ3hFb1MsV0FBVyxDQUFDN1MsT0FBTyxDQUFDLFVBQUE4UyxJQUFJLEVBQUk7VUFDMUIsSUFBR0EsSUFBSSxJQUFJdlEsTUFBSSxDQUFDckYsU0FBUyxFQUFDO1lBQ3hCNFYsSUFBSSxDQUFDeFUsU0FBUyxDQUFDTyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ2xDaVUsSUFBSSxDQUFDQyxlQUFlLENBQUMsZUFBZSxDQUFDO1VBQ3ZDLENBQUMsTUFBTTtZQUNMeFEsTUFBSSxDQUFDeVEsV0FBVyxDQUFDelEsTUFBSSxDQUFDbVEsVUFBVSxFQUFFLGFBQWEsQ0FBQztVQUNsRDtRQUNGLENBQUMsQ0FBQztRQUNGLElBQUdHLFdBQVcsQ0FBQzdOLE1BQU0sS0FBSyxDQUFDLEVBQUM7VUFDMUIsSUFBSSxDQUFDZ08sV0FBVyxDQUFDLElBQUksQ0FBQ04sVUFBVSxFQUFFLGFBQWEsQ0FBQztRQUNsRDtNQUNGO0lBQUM7TUFBQTlVLEdBQUE7TUFBQUMsS0FBQSxFQUVELFNBQUE4VSxXQUFXMVUsS0FBSyxFQUFFO1FBQ2hCLElBQUksQ0FBQzJVLFdBQVcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQ0ksV0FBVyxDQUFDLElBQUksQ0FBQzlWLFNBQVMsRUFBRSxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDNlYsZUFBZSxDQUFDLElBQUksQ0FBQzdWLFNBQVMsRUFBRSxlQUFlLENBQUM7TUFDdkQ7SUFBQztNQUFBVSxHQUFBO01BQUFDLEtBQUEsRUFFRCxTQUFBbVYsWUFBWWxVLE9BQU8sRUFBRW1VLFNBQVMsRUFBRTtRQUM5QixJQUFJLENBQUNuVSxPQUFPLElBQUksQ0FBQ21VLFNBQVMsRUFBRTtRQUM1QixJQUFNQyxRQUFRLEdBQUdwVSxPQUFPLENBQUNSLFNBQVMsQ0FBQ3lDLFFBQVEsQ0FBQ2tTLFNBQVMsQ0FBQztRQUN0RCxJQUFJQyxRQUFRLEVBQUU7VUFDWnBVLE9BQU8sQ0FBQ1IsU0FBUyxDQUFDTyxNQUFNLENBQUNvVSxTQUFTLENBQUM7UUFDckMsQ0FBQyxNQUFNO1VBQ0xuVSxPQUFPLENBQUNSLFNBQVMsQ0FBQ00sR0FBRyxDQUFDcVUsU0FBUyxDQUFDO1FBQ2xDO01BQ0Y7SUFBQztNQUFBclYsR0FBQTtNQUFBQyxLQUFBLEVBRUQsU0FBQWtWLGdCQUFnQmpVLE9BQU8sRUFBRXFVLElBQUksRUFBRTtRQUM3QjtRQUNBLElBQUksQ0FBQ3JVLE9BQU8sSUFBSSxDQUFDcVUsSUFBSSxFQUFFO1FBQ3ZCO1FBQ0EsSUFBTXRWLEtBQUssR0FBSWlCLE9BQU8sQ0FBQ04sWUFBWSxDQUFDMlUsSUFBSSxDQUFDLEtBQUssTUFBTSxHQUFJLE9BQU8sR0FBRyxNQUFNO1FBQ3hFclUsT0FBTyxDQUFDTCxZQUFZLENBQUMwVSxJQUFJLEVBQUV0VixLQUFLLENBQUM7TUFDbkM7SUFBQztJQUFBLE9BQUE0VSxNQUFBO0VBQUE7RUFJSDNTLGtCQUFBLENBQUl0QyxRQUFRLENBQUN1QyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsRUFBRUMsT0FBTyxDQUFDLFVBQUFvVCxNQUFNO0lBQUEsT0FBSSxJQUFJWCxNQUFNLENBQUNXLE1BQU0sQ0FBQztFQUFBLEVBQUM7O0VBRTFGO0FBQ0Y7QUFDQTs7RUFFRSxJQUFNQyxTQUFTLEdBQUc3VixRQUFRLENBQUNILGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFFdkRnVyxTQUFTLElBQUlBLFNBQVMsQ0FBQ3RWLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxZQUFVO0lBQzdEUCxRQUFRLENBQUNILGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQ3FCLEtBQUssQ0FBQyxDQUFDO0VBQ2hELENBQUMsQ0FBQztFQUVGbEIsUUFBUSxDQUFDTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQUUsS0FBSyxFQUFJO0lBQzFDLElBQUlBLEtBQUssQ0FBQ0MsT0FBTyxLQUFLLEVBQUUsRUFBRTtNQUN4Qm9WLFNBQVMsQ0FBQ3JWLEtBQUssQ0FBQztJQUNsQjtFQUNGLENBQUMsQ0FBQztFQUVGVCxRQUFRLENBQUNPLGdCQUFnQixDQUFDLFdBQVcsRUFBRXVWLFNBQVMsQ0FBQztFQUVqRCxTQUFTQSxTQUFTQSxDQUFDclYsS0FBSyxFQUFFO0lBQ3hCO0lBQ0EsSUFBTXNWLFFBQVEsR0FBRy9WLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLG1DQUFtQyxDQUFDO0lBQzVFLElBQUdrVyxRQUFRLEVBQUM7TUFDVixJQUFNQyxTQUFTLEdBQUd2VixLQUFLLENBQUNFLE1BQU0sS0FBS29WLFFBQVE7TUFDM0MsSUFBTUUsZUFBZSxHQUFHeFYsS0FBSyxDQUFDRSxNQUFNLEtBQUtYLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLGNBQWMsQ0FBQztNQUMvRSxJQUFNcVcsV0FBVyxHQUFHelYsS0FBSyxDQUFDRSxNQUFNLENBQUNpRixPQUFPLENBQUMsbUNBQW1DLENBQUM7TUFDN0UsSUFBR29RLFNBQVMsSUFBSUMsZUFBZSxJQUFJLENBQUNDLFdBQVcsRUFBQztRQUM5Q0gsUUFBUSxDQUFDalYsU0FBUyxDQUFDTyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ3RDO0lBQ0Y7SUFDQTtJQUNBLElBQU04VSxPQUFPLEdBQUduVyxRQUFRLENBQUNILGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztJQUNqRSxJQUFHc1csT0FBTyxFQUFDO01BQ1QsSUFBTUMsUUFBUSxHQUFHM1YsS0FBSyxDQUFDRSxNQUFNLEtBQUt3VixPQUFPO01BQ3pDLElBQU1FLFVBQVUsR0FBRzVWLEtBQUssQ0FBQ0UsTUFBTSxDQUFDaUYsT0FBTyxDQUFDLHlCQUF5QixDQUFDO01BQ2xFLElBQUd3USxRQUFRLElBQUksQ0FBQ0MsVUFBVSxFQUFDO1FBQ3pCRixPQUFPLENBQUNyVixTQUFTLENBQUNPLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckNyQixRQUFRLENBQUNILGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDaUIsU0FBUyxDQUFDTyxNQUFNLENBQUMsYUFBYSxDQUFDO01BQzFGO0lBQ0Y7RUFDRjtBQUNGLENBQUM7Ozs7OztVQzdHRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3FFO0FBQ1E7O0FBRTdFO0FBQytFO0FBQ21CO0FBQ3pCO0FBQ0E7QUFDZjtBQUNHO0FBQ1k7QUFDQztBQUNuQjtBQUN5Qjs7QUFFaEY7QUFDc0U7QUFDUzs7QUFFL0U7QUFDQXJCLFFBQVEsQ0FBQ08sZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNsRDZKLCtFQUFJLENBQUMsQ0FBQztFQUNOcUIsK0ZBQVcsQ0FBQyxDQUFDO0VBQ2JoTSw0R0FBaUIsQ0FBQyxDQUFDO0VBQ25Cd1QseUZBQU8sQ0FBQyxDQUFDO0VBQ1Q1RCw0RkFBTSxDQUFDLENBQUM7RUFDUmtDLGtHQUFTLENBQUMsQ0FBQztFQUNYVyw2RkFBTyxDQUFDLENBQUM7RUFDVHFFLGdGQUFLLENBQUMsQ0FBQztFQUNQOVMsa0ZBQU0sQ0FBQyxDQUFDO0VBQ1I2UyxrR0FBTSxDQUFDLENBQUM7RUFDUjVULHlGQUFXLENBQUMsQ0FBQztFQUNiMEQsMEZBQVUsQ0FBQyxDQUFDO0VBQ1o4Ryx1RkFBYSxDQUFDLENBQUM7RUFDZnZFLG1HQUFTLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9mb290ZXIvaGVlLWFuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3kuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1jYXJkLS1zdW1tYXJ5L3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1tZWRpYS9tZWRpYS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5hdm1hcC9uYXZtYXAuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJsZS1leHBhbmRlci90YWJsZS1leHBhbmRlci5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYnMvdGFicy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvaGVlLWFuY2hvcmxpbmtzL2FuY2hvcmxpbmtzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvdG9jLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWNvb2tpZXMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9uaHN1ay1oZWUtaGVhZGVyL25hdmlnYXRpb24vc3VibmF2LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9oZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIEFuY2hvciBsaW5rIHN0aWNreSB0b29sYmFyIGF0IGJvdHRvbSBvZiB2aWV3cG9ydC5cbiAgICovXG4gIGNsYXNzIEFuY2hvckxpbmtzU3RpY2t5IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgIHRoaXMudG9nZ2xlQnRuID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uLmhlZS1hbmNob3JsaW5rc19fc3RpY2t5X19idG4nKTtcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGVlLWFuY2hvcmxpbmtzJyk7XG4gICAgICB0aGlzLnNpZGViYXJBbmNob3JMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19yaWdodGJhciAuaGVlLWFuY2hvcmxpbmtzJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIGZvciBUT0MgYnV0dG9uIHRvZ2dsZSwgVE9DIGxpbmsgbmF2aWdhdGlvbiBhbmRcbiAgICAgKiB0aGUgd2luZG93IHZpZXdwb3J0IHNjcm9sbCB0b2dnbGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkpXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIC8gaGlkZXMgdGhlIHN0aWNreSBUT0MgYW5jaG9yIGxpbmtzIHdoZW4gXCJUYWJsZSBvZiBDb250ZW50c1wiIGJ1dHRvblxuICAgICAqIHRyaWdnZXJlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lBbmNob3JMaW5rcygpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zdGlja3knKTtcblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignYTpmaXJzdC1vZi10eXBlJykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyAvIGhpZGVzIHRoZSBUT0MgYm90dG9tIFwidG9vbGJhclwiIHdoZW4gdGhlIHNpZGViYXIgVE9DIGhlYWRpbmcgaXNcbiAgICAgKiBvdXRzaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lUb29sYmFyKCkge1xuICAgICAgaWYgKCF0aGlzLmlzRWxlbWVudEluVmlld3BvcnQodGhpcy5zaWRlYmFyQW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignaDInKSkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgaXNFbGVtZW50SW5WaWV3cG9ydChlbGVtZW50KSB7XG4gICAgICBjb25zdCBib3VuZGluZyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zdCBlbGVtZW50V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICByZXR1cm4gYm91bmRpbmcudG9wID49IC1lbGVtZW50SGVpZ2h0XG4gICAgICAgICYmIGJvdW5kaW5nLmxlZnQgPj0gLWVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSArIGVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIGVsZW1lbnRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rc19fc3RpY2t5JyldLmZvckVhY2goYW5jaG9yTGlua3MgPT4gbmV3IEFuY2hvckxpbmtzU3RpY2t5KGFuY2hvckxpbmtzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXG4gIGNsYXNzIFN1bW1hcnlDYXJkIHtcblxuICAgIGNvbnN0cnVjdG9yKHN1bW1hcnlDYXJkKSB7XG4gICAgICB0aGlzLnN1bW1hcnlDYXJkID0gc3VtbWFyeUNhcmQ7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLnN1bW1hcnlDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtY2FyZC0tc3VtbWFyeV9fdG9nZ2xlJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVTdW1tYXJ5KCk7XG4gICAgICB9KVxuXG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBsaW5rIGVudGVyIGFuZCBzcGFjZWJhciBrZXkgcHJlc3MuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3VtbWFyeSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZVN1bW1hcnkoKSB7XG4gICAgICB0aGlzLnN1bW1hcnlDYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2RlZmF1bHQnKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWNhcmQtLXN1bW1hcnknKV0uZm9yRWFjaChzdW1tYXJ5Q2FyZCA9PiBuZXcgU3VtbWFyeUNhcmQoc3VtbWFyeUNhcmQpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWVkaWEgdHJhbnNjcmlwdFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcuaGVlLW1lZGlhLXRyYW5zY3JpcHQnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIFRyYW5zY3JpcHQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9nZ2xlcylcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlcykge1xuICAgICAgICB0aGlzLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xldHJhbnNjcmlwdChldnQpKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGV0cmFuc2NyaXB0KCkge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQoKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaXNDb2xsYXBzZWQoKSB7XG4gICAgICBpZih0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIikpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLW1lZGlhX190cmFuc2NyaXB0JyldLmZvckVhY2godHJhbnNjcmlwdCA9PiBuZXcgVHJhbnNjcmlwdCh0cmFuc2NyaXB0KSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1hcFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstcmVnaW9uJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOYXZNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgc3ZnKSB7XG4gICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgdGhpcy5yZWdpb25zID0gWy4uLnN2Zy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1yZWdpb24nKV07XG4gICAgICB0aGlzLmxpc3QgPSBbLi4ubWFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyNyZWdpb25MaXN0IGxpIGEnKV07XG5cbiAgICAgIHRoaXMuYWRkTGlua3NUb01hcCgpO1xuICAgICAgdGhpcy5jbGVhblN0eWxlKCk7XG4gICAgICB0aGlzLm1hcEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmxpbmtFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsZWFuU3R5bGUoKXtcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgIC5zdDB7ZmlsbDojMDA1RUI4O3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuc3Qxe2ZpbGw6I0FFQjdCRDtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLmhvdmVyICoge3N0cm9rZTojZmZlYjNiO3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICAgIC5mb2N1cyAuc3QwIHtmaWxsOiNmZmViM2I7c3Ryb2tlOiMyMTJiMzI7fVxuICAgICAgICAuZm9jdXMgKiB7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgIGApKVxuICAgIH1cblxuICAgIGFkZExpbmtzVG9NYXAoKXtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQocmVnaW9uLmlkKVxuICAgICAgICBjb25zdCB0aGlzSHJlZiA9ICh0aGlzQ291bnRlcnBhcnQuaHJlZik/IHRoaXNDb3VudGVycGFydC5ocmVmIDogXCIvXCJcbiAgICAgICAgY29uc3QgdGhpc1RpdGxlID0gKHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwpPyB0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MIDogXCJcIlxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlZ2lvbi5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gYDxhIHhsaW5rOmhyZWY9XCIke3RoaXNIcmVmfVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXNUaXRsZX08L3RpdGxlPlxuICAgICAgICAgICR7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5gXG4gICAgICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3cmFwTGlua1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBtYXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm1hcEluKGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLm1hcE91dChlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdGhpcy5tYXBDbGljayhldmVudCkpKVxuICAgIH1cblxuICAgIGxpbmtFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiZm9jdXNcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiZm9jdXNcIikpKVxuICAgIH1cblxuICAgIG1vdmVUb1RvcChvYmopIHtcbiAgICAgIG9iai5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG9iaik7XG4gICAgfVxuXG4gICAgbWFwSW4odGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0aGlzLm1vdmVUb1RvcCh0YXJnZXQpXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwT3V0KHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcENsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCB0aGlzTWFwQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiZ1wiKS5pZClcbiAgICAgIGlmKHRoaXNNYXBDb3VudGVycGFydCkgdGhpc01hcENvdW50ZXJwYXJ0LmNsaWNrKClcbiAgICB9XG5cbiAgICBtYXBDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50KHRhcmdldCwgZGlyZWN0aW9uLCB0eXBlKSB7XG4gICAgICBjb25zdCB0aGlzSWQgPSB0YXJnZXQuaWRcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlua0NvdW50ZXJwYXJ0KHRoaXNJZClcbiAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJpblwiKSB7XG4gICAgICAgIHRoaXMubWFwSW4odGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXBPdXQodGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMucmVnaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1tYXAnKV0uZm9yRWFjaChtYXAgPT4ge1xuICAgIC8vIG5lZWQgdG8gd2FpdCBmb3IgU1ZHIHRvIGxvYWRcbiAgICBjb25zdCBvYmogPSBtYXAucXVlcnlTZWxlY3Rvcignb2JqZWN0JylcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBzdmcgPSBvYmouZ2V0U1ZHRG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgICAgaWYoc3ZnKXtcbiAgICAgICAgbmV3IE5hdk1hcChtYXAsIHN2ZylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTmV3c2xldHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICduaHN1ay1uZXdzbGV0dGVyLWZvcm0nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5ld3NsZXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5ld3NsZXR0ZXIpIHtcbiAgICAgIHRoaXMubmV3c2xldHRlciA9IG5ld3NsZXR0ZXI7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gbmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlcXVpcmVkXVwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHdpbmRvdy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2tcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCkgICAgICA7XG4gICAgfVxuICAgIFxuICAgIGFkZEV2ZW50cygpIHtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBjID0+IHRoaXMudmFsaWRhdGUoYy50YXJnZXQpKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGFyZ2V0KSB7XG4gICAgICB2YXIgdGFyZ2V0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9ycy1cIit0YXJnZXQubmFtZSk7XG4gICAgICB2YXIgdGFyZ2V0U3VtbWFyeUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5LVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIGlmICh0YXJnZXQubmFtZSA9PSBcImZpcnN0bmFtZVwiIHx8IHRhcmdldC5uYW1lID09IFwibGFzdG5hbWVcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiZW1haWxcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiY29uc2VudFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN1bW1hcnkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdW1tYXJ5KCkge1xuICAgICAgdmFyIGVycm9yU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeVwiKTtcbiAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKVxuICAgICAgeyAgICAgICAgXG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgIGlmICghcmUudGVzdCh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIGlzRW1wdHkoc3RyKSB7XG4gICAgICByZXR1cm4gIXN0ci50cmltKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3ItbWVzc2FnZScpO1xuICAgICAgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yQ2xhc3NlcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIGVycm9yQ2xhc3Nlcy5mb3JFYWNoKGVycm9yY2xhc3MgPT4ge1xuICAgICAgICBlcnJvcmNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5ID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1zdW1tYXJ5Jyk7XG4gICAgICBlcnJvclN1bW1hcnkuZm9yRWFjaChlcnJvcnN1bW1hcnkgPT4ge1xuICAgICAgICBlcnJvcnN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnlJdGVtcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3Itc3VtbWFyeS1pdGVtJyk7XG4gICAgICBlcnJvclN1bW1hcnlJdGVtcy5mb3JFYWNoKHN1bW1hcnlpdGVtID0+IHtcbiAgICAgICAgc3VtbWFyeWl0ZW0uc3R5bGUuZGlzcGxheSAgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNuZXdzbGV0dGVyLWZvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1uZXdzbGV0dGVyLWZvcm0nKV0uZm9yRWFjaCgobmV3c2xldHRlcikgPT4gbmV3IE5ld3NsZXR0ZXIobmV3c2xldHRlcikpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIGZvciBwcm92aWRpbmcgdGhlIFwiZXhwYW5kIGFsbFwiIHRvZ2dsZSBmdW5jdGlvbmFsaXR5IGZvciB0YWJsZVxuICAgKiBjYXJkcy5cbiAgICovXG4gIGNsYXNzIFRhYmxlQ2FyZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNhcmQpIHtcbiAgICAgIHRoaXMudGFibGVDYXJkID0gdGFibGVDYXJkO1xuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy50YWJsZUNhcmQucXVlcnlTZWxlY3RvcignLmhlZS10YWJsZS1leHBhbmRlcl9fdG9nZ2xlIGEnKTtcbiAgICAgIHRoaXMuZXhwYW5kZXJzID0gdGhpcy50YWJsZUNhcmQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWV4cGFuZGVyJyk7XG4gICAgICB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW47XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5pbml0RXhwYW5kZXJPYnNlcnZlcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIGxpbmsgYW5kIHN1bW1hcnkgZWxlbWVudHMuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBjbGljayBldmVudC5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVycygpO1xuICAgICAgfSlcblxuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgbGluayBlbnRlciBhbmQgc3BhY2ViYXIga2V5IHByZXNzLlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVycygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIHVzZSBvYnNlcnZlcnMgdG8gcmVhY3QgdG8gY2xpY2sgZXZlbnRzIG9uIGluZGl2aWR1YWwgZXhwYW5kZXJzLCBhcyB0aGlzXG4gICAgICogZXZlbnQgZnVuY3Rpb25hbGl0eSBpcyBoYW5kbGVkIGJ5IHRoZSBuaHN1ay1kZXRhaWxzIGNvbXBvbmVudCdzIGphdmFzY3JpcHQuXG4gICAgICovXG4gICAgaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKSB7XG4gICAgICAvLyBDb25maWd1cmUgb2JzZXJ2ZXIgdG8gcmVhY3QgdG8gY2hhbmdlcyBpbiBhbiBleHBhbmRlcidzIFwib3BlblwiIGF0dHJpYnV0ZS5cbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uc0xpc3QpID0+IHtcbiAgICAgICAgbXV0YXRpb25zTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvZ2dsZVN0YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGV4cGFuZGVyLCB7YXR0cmlidXRlczogdHJ1ZX0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGFsbCBleHBhbmRlciBjb250ZW50IHZpc2liaWxpdHkgd2l0aGluIHRhYmxlIGNhcmQuXG4gICAgICovXG4gICAgdG9nZ2xlRXhwYW5kZXJzKCkge1xuICAgICAgLy8gT3BlbiAvIGNsb3NlIGVhY2ggZXhwYW5kZXIgZGVwZW5kaW5nIG9uIGN1cnJlbnQgc3RhdGUuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy5vcGVuRXhwYW5kZXIoZXhwYW5kZXIpIDogdGhpcy5jbG9zZUV4cGFuZGVyKGV4cGFuZGVyKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgc3RhdGUgZmxhZy5cbiAgICAgIHRoaXMuc3RhdGVPcGVuID0gIXRoaXMuc3RhdGVPcGVuO1xuXG4gICAgICAvLyBUb2dnbGUgYnV0dG9uIHRleHQuXG4gICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuIDogdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsQ2xvc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgRGV0ZXJtaW5lcyB3aGV0aGVyIGFsbCBleHBhbmRlcnMgaGF2ZSBiZWVuIG9wZW5lZCBvciBjbG9zZWQgYW5kIHVwZGF0ZXNcbiAgICAgKiAgdGhlIHN0YXRlIGZsYWcgYW5kIHRvZ2dsZSBsaW5rIHRleHQgYWNjb3JkaW5nbHkuXG4gICAgICpcbiAgICAgKiAgRnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gTXV0YXRpb25PYnNlcnZlciBkZXRlY3RzIGEgY2hhbmdlIGluIGV4cGFuZGVyXG4gICAgICogIFwib3BlblwiIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICB1cGRhdGVUb2dnbGVTdGF0ZSgpIHtcbiAgICAgIGxldCBhbGxPcGVuID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICAhZXhwYW5kZXIuaGFzQXR0cmlidXRlKCdvcGVuJykgPyBhbGxPcGVuID0gZmFsc2UgOiBhbGxPcGVuID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICAhYWxsT3BlbiA/IHRoaXMuc3RhdGVPcGVuID0gZmFsc2UgOiB0aGlzLnN0YXRlT3BlbiA9IHRydWU7XG4gICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuIDogdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsQ2xvc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgb3BlbkV4cGFuZGVyKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgIGV4cGFuZGVyLnNldEF0dHJpYnV0ZSgnb3BlbicsICdvcGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGFuIGV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZXhwYW5kZXIgRXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKi9cbiAgICBjbG9zZUV4cGFuZGVyKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIGV4cGFuZGVyLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtdGFibGUtZXhwYW5kZXInKV0uZm9yRWFjaCh0YWJsZUNhcmQgPT4gbmV3IFRhYmxlQ2FyZCh0YWJsZUNhcmQpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgKiBUYWJzXHJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXRhYnMnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXHJcbiAgKi9cclxuICBjbGFzcyBUYWJzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhYmNvbXBvbmVudCwgaSkge1xyXG4gICAgICB0aGlzLnRhYmNvbXBvbmVudCA9IHRhYmNvbXBvbmVudFxyXG4gICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYlwiXScpXHJcbiAgICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInRhYmxpc3RcIl0nKVxyXG4gICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMgPT4gdGhpcy5jaGFuZ2VUYWJzKGMpKVxyXG4gICAgICB9KVxyXG4gICAgICBsZXQgdGFiRm9jdXMgPSAwXHJcbiAgICAgIHRhYkxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XHJcbiAgICAgICAgLy8gTW92ZSByaWdodFxyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIC0xKVxyXG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMrK1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgZW5kLCBnbyB0byB0aGUgc3RhcnRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzID49IHRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTW92ZSBsZWZ0XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMtLVxyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgc3RhcnQsIG1vdmUgdG8gdGhlIGVuZFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSB0YWJzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMClcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLmZvY3VzKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRhYnMoZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2cocGFyZW50KTtcclxuICAgICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhncmFuZHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVswXTtcclxuICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWQpXHJcbiAgICAgIGNvbnN0IGlzX21vYmlsZSA9IGdyYW5kcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstdGFic19fbW9iaWxlJyk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coaXNfbW9iaWxlKVxyXG5cclxuICAgICAgLy8gQ29tcGFyZSBzZWxlY3RlZCBhbmQgdGFyZ2V0LCBhbmQgaWYgb24gbW9iaWxlXHJcbiAgICAgIC8vIENsb3NlIHRoZSB0YWIgaWYgYWxyZWFkeSBvcGVuXHJcbiAgICAgIGlmKHRhcmdldCA9PSBzZWxlY3RlZCAmJiBpc19tb2JpbGUpIHtcclxuICAgICAgICAvLyBVbnNlbGVjdCBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgY3VycmVudCBzZWxlY3RlZCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNldCB0aGlzIHRhYiBhcyBzZWxlY3RlZFxyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQodGFyZ2V0KVxyXG5cclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWIgcGFuZWxzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0aGUgc2VsZWN0ZWQgcGFuZWxcclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RlZChncmFuZHBhcmVudC5wYXJlbnROb2RlLCB0YXJnZXQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJylcclxuICAgICAgICAuZm9yRWFjaCh0ID0+IHQuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBmYWxzZSkpO1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVxyXG4gICAgICAgIC5mb3JFYWNoKGMgPT4gYy5jbGFzc0xpc3QucmVtb3ZlKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIHRydWUpXHJcbiAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVUYWJzKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJwYW5lbFwiXScpXHJcbiAgICAgICAgLmZvckVhY2gocCA9PiBwLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCB0cnVlKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2VsZWN0ZWQoZWxlLCB0YXJnZXQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApKVxyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YClcclxuICAgICAgICAucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnMnKV0uZm9yRWFjaCgodGFicywgaSkgPT4gbmV3IFRhYnModGFicywgaSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRIZWFkaW5ncyhoZWFkaW5ncykge1xuICAgICAgbGV0IGZvdW5kSGVhZGluZ3MgPSBbXVxuICAgICAgaWYgKGhlYWRpbmdzKSB7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgQ1NTIHNlbGVjdG9ycyBmb3Igb25seSBmaXJzdCBsZXZlbCBoZWFkaW5ncyBpbnNpZGUgcmljaC10ZXh0XG4gICAgICAgIC8vIGFyZWFzIGFuZCBvdXRzaWRlIG9mIGNvbXBvbmVudHMuXG4gICAgICAgIGNvbnN0IGhlYWRpbmdUeXBlcyA9IGhlYWRpbmdzLnNwbGl0KCcsJyk7XG4gICAgICAgIGxldCBzZWxlY3RvcnMgPSBoZWFkaW5nVHlwZXMubWFwKHR5cGUgPT4ge1xuICAgICAgICAgIHJldHVybiAnLnBhZ2VfX2NvbnRlbnQgPiAnICsgdHlwZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5qb2luKCcsICcpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fY29udGVudCcpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstYW5jaG9yLWxpbmtzJyldLmZvckVhY2goYW5jaG9yTGlua3MgPT4gbmV3IEFuY2hvckxpbmtzKGFuY2hvckxpbmtzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBSZXNwb25zaWJsZSBmb3IgZ2VuZXJhdGluZyB0YWJsZSBvZiBjb250ZW50cyBsaW5rcy5cbiAgKi9cbiAgY2xhc3MgVGFibGVDb250ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNvbnRlbnRzKSB7XG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMgPSB0YWJsZUNvbnRlbnRzO1xuXG4gICAgICB0aGlzLmNvbnRhaW5lclNlbGVjdG9yID0gJy5wYWdlX19tYWluJztcbiAgICAgIHRoaXMuaGVhZGluZ1NlbGVjdG9yID0gJ2gyLnRvY19oMic7XG4gICAgICB0aGlzLnN1YkhlYWRpbmdTZWxlY3RvciA9ICdoMy50b2NfaDMnO1xuICAgICAgdGhpcy5oZWFkaW5nUHJlZml4ID0gJ2hlZS10b2MtaGVhZGluZyc7XG5cbiAgICAgIC8vIEFuY2hvciBsaW5rcyBtYWNybyBzZXRzIHRoaXMgZGF0YSBhdHRyaWJ1dGUgd2hlbiBUT0MgaXMgZmxhZ2dlZCBhcyB0cnVlLlxuICAgICAgaWYgKCF0aGlzLnRhYmxlQ29udGVudHMuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSBhdHRlbXB0IHRvIGJ1aWxkIFRPQyBsaW5rcyBpZiBIMiBhbmNob3JzIGZvdW5kIG9uIHBhZ2UuXG4gICAgICBsZXQgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGFpbmVyU2VsZWN0b3IgKyAnICcgKyB0aGlzLmhlYWRpbmdTZWxlY3Rvcik7XG4gICAgICBpZiAoaGVhZGluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQnVpbGQgbGluayBzdHJ1Y3R1cmUgZnJvbSBET00gYW5kIGFwcGVuZCBnZW5lcmF0ZWQgbWFya3VwIHRvIFRPQ1xuICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgY29uc3QgbGlua3MgPSB0aGlzLmNyZWF0ZVRvY0xpbmtzKGhlYWRpbmdzKTtcbiAgICAgIHRoaXMuc2V0VG9jTGlzdE1hcmt1cChsaW5rcyk7XG5cbiAgICAgIC8vIEJ1aWxkIGJhY2sgdG8gdG9wIGxpbmtzIGFuZCBhcHBlbmQgdG8gZWFjaCBUT0MgaGVhZGluZyB3aXRoaW4gcGFnZVxuICAgICAgLy8gY29udGVudC4gV2Ugc2tpcCB0aGUgZmlyc3QgaGVhZGluZyBvbiB0aGUgcGFnZS5cbiAgICAgIGhlYWRpbmdzID0gW10uc2xpY2UuY2FsbChoZWFkaW5ncywgMSk7XG4gICAgICB0aGlzLnNldEJhY2tUb1RvcExpbmtzKGhlYWRpbmdzKTtcbiAgICAgIGNvbnN0IHN1YkhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKHN1YkhlYWRpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhzdWJIZWFkaW5ncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGFycmF5IG9mIGhlYWRpbmcgbGluayBhdHRyaWJ1dGVzIGFuZCB0aGVpciBjaGlsZHJlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9ICAgICAgaGVhZGluZ3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICBjcmVhdGVUb2NMaW5rcyhoZWFkaW5ncykge1xuICAgICAgbGV0IGxpbmtzID0gW107XG5cbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRpbmdJZCA9IHRoaXMuaGVhZGluZ1ByZWZpeCArICctJyArIGluZGV4O1xuXG4gICAgICAgIC8vIFNldCB1bmlxdWUgaWQgZm9yIGN1cnJlbnQgaGVhZGluZyBIMiBlbGVtZW50LlxuICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBoZWFkaW5nSWQpXG5cbiAgICAgICAgbGV0IGxpbmsgPSB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpLFxuICAgICAgICAgIGFuY2hvcjogaGVhZGluZ0lkLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzaWJsaW5nID0gaGVhZGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8gVHJhdmVyc2UgRE9NIGZvciBIMyBlbGVtZW50cyBhZnRlciBjdXJyZW50IEgyIGhlYWRpbmcgYW5kIGFwcGVuZCB0b1xuICAgICAgICAvLyBjaGlsZHJlbiBsaW5rcyBhcnJheS5cbiAgICAgICAgd2hpbGUgKHNpYmxpbmcgJiYgIXNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDInKSkge1xuICAgICAgICAgIGlmIChzaWJsaW5nLnRhZ05hbWUgPT09ICdIMycgJiYgc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ3RvY19oMycpKSB7XG5cbiAgICAgICAgICAgIC8vIFNldCB1bmlxdWUgaWQgZm9yIGN1cnJlbnQgaGVhZGluZyBIMyBlbGVtZW50LlxuICAgICAgICAgICAgY29uc3Qgc3ViSGVhZGluZ0lkID0gaGVhZGluZ0lkICsgJy0nICsgY291bnQ7XG4gICAgICAgICAgICBzaWJsaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBzdWJIZWFkaW5nSWQpXG5cbiAgICAgICAgICAgIGxpbmsuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShzaWJsaW5nKSxcbiAgICAgICAgICAgICAgYW5jaG9yOiBzdWJIZWFkaW5nSWQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlua3MucHVzaChsaW5rKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbGlua3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBlaXRoZXIgdGhlIHNob3J0IG9yIGxvbmcgdGl0bGUgb2YgdGhlIGhlYWRpbmcgYmFzZWQgb24gZGF0YSBhdHRyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBoZWFkaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICAgKi9cbiAgICBnZXRIZWFkaW5nVGl0bGUoaGVhZGluZykge1xuICAgICAgbGV0IHRpdGxlO1xuXG4gICAgICBpZiAoaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvcnQtdGl0bGUnKSkge1xuICAgICAgICB0aXRsZSA9IGhlYWRpbmcuZGF0YXNldC5zaG9ydFRpdGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmlubmVyVGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgVE9DIG1hcmt1cCBhbmQgYXBwZW5kcyB0byBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0VG9jTGlzdE1hcmt1cChsaW5rcykge1xuICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdoYXMtY2hpbGRyZW4nKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWFuY2hvcmxpbmtzX193cmFwcGVyJylcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGV2cm9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENoZXZyb25TVkcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2lyY2xlU1ZHKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHNwYW4pO1xuXG4gICAgICAgIGxldCBwYXJlbnRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBwYXJlbnRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGxpbmsuYW5jaG9yKTtcbiAgICAgICAgcGFyZW50TGluay5pbm5lclRleHQgPSBsaW5rLnRpdGxlO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocGFyZW50TGluayk7XG5cbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBjaGlsZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgIGxpbmsuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNoaWxkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgIGxldCBjaGlsZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBjaGlsZExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgaXRlbS5hbmNob3IpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG5cbiAgICAgICAgICAgIGNoaWxkSXRlbS5hcHBlbmQoY2hpbGRMaW5rKTtcbiAgICAgICAgICAgIGNoaWxkTGlzdC5hcHBlbmQoY2hpbGRJdGVtKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZChjaGlsZExpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5hcHBlbmQobGlzdEl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGFibGVDb250ZW50cy5hcHBlbmQobGlzdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGJhY2sgdG8gdG9wIGxpbmsgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgY3JlYXRlQmFja1RvVG9wTGluaygpIHtcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWUtYmFjay10by10b3AnKTtcblxuICAgICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI21haW5jb250ZW50Jyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCd0aXRsZScsICdCYWNrIHRvIHRvcCcpO1xuICAgICAgYW5jaG9yLmlubmVyVGV4dCA9ICdCYWNrIHRvIHRvcCc7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoYW5jaG9yKTtcblxuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGJhY2sgdG8gdG9wIGxpbmtzIGFib3ZlIFRPQyBoZWFkaW5ncyB3aXRoaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9ICAgICAgaGVhZGluZ3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncykge1xuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gQXZvaWRzIGR1cGxpY2F0ZSBiYWNrIHRvIHRvcCBsaW5rcyB3aGVuIHN0aWNreSBpcyBwcmVzZW50LlxuICAgICAgICBpZiAoIWhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycpKSB7XG4gICAgICAgICAgY29uc3QgbGluayA9IHRoaXMuY3JlYXRlQmFja1RvVG9wTGluaygpO1xuICAgICAgICAgIGhlYWRpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGluaywgaGVhZGluZyk7XG4gICAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLXRvcC1saW5rJywgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2hldnJvbiBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaGV2cm9uU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiOFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCA4IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPHBhdGggZD1cIk04LjAwMDE5IDYuOTk5OTRDOC4wMDA5NSA3LjEzMTU1IDcuOTc1NzIgNy4yNjIwMSA3LjkyNTk2IDcuMzgzODVDNy44NzYxOSA3LjUwNTY5IDcuODAyODcgNy42MTY1IDcuNzEwMTkgNy43MDk5NEwyLjcxMDE5IDEyLjcwOTlDMi42MTY5NSAxMi44MDMyIDIuNTA2MjYgMTIuODc3MSAyLjM4NDQzIDEyLjkyNzZDMi4yNjI2MSAxMi45NzgxIDIuMTMyMDQgMTMuMDA0IDIuMDAwMTkgMTMuMDA0QzEuODY4MzMgMTMuMDA0IDEuNzM3NzYgMTIuOTc4MSAxLjYxNTk0IDEyLjkyNzZDMS40OTQxMSAxMi44NzcxIDEuMzgzNDIgMTIuODAzMiAxLjI5MDE4IDEyLjcwOTlDMS4xOTY5NSAxMi42MTY3IDEuMTIyOTkgMTIuNTA2IDEuMDcyNTMgMTIuMzg0MkMxLjAyMjA2IDEyLjI2MjQgMC45OTYwOTQgMTIuMTMxOCAwLjk5NjA5NCAxMS45OTk5QzAuOTk2MDk0IDExLjg2ODEgMS4wMjIwNiAxMS43Mzc1IDEuMDcyNTMgMTEuNjE1N0MxLjEyMjk5IDExLjQ5MzkgMS4xOTY5NSAxMS4zODMyIDEuMjkwMTggMTEuMjg5OUw1LjU5MDE5IDYuOTk5OTRMMS4yOTAxOCAyLjcwOTk0QzEuMTAxODggMi41MjE2NCAwLjk5NjA5NCAyLjI2NjI0IDAuOTk2MDk0IDEuOTk5OTRDMC45OTYwOTQgMS43MzM2NCAxLjEwMTg4IDEuNDc4MjUgMS4yOTAxOCAxLjI4OTk0QzEuNDc4NDkgMS4xMDE2NCAxLjczMzg4IDAuOTk1ODUgMi4wMDAxOSAwLjk5NTg1QzIuMjY2NDkgMC45OTU4NSAyLjUyMTg4IDEuMTAxNjQgMi43MTAxOSAxLjI4OTk0TDcuNzEwMTkgNi4yODk5NEM3LjgwMjg3IDYuMzgzMzggNy44NzYxOSA2LjQ5NDIgNy45MjU5NiA2LjYxNjAzQzcuOTc1NzIgNi43Mzc4NyA4LjAwMDk1IDYuODY4MzMgOC4wMDAxOSA2Ljk5OTk0WlwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNpcmNsZSBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaXJjbGVTVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiM1wiIHZpZXdCb3g9XCIwIDAgMyAzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiMS41XCIgcj1cIjEuNVwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWFuY2hvcmxpbmtzJyldLmZvckVhY2godGFibGVDb250ZW50cyA9PiBuZXcgVGFibGVDb250ZW50cyh0YWJsZUNvbnRlbnRzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogRmlsdGVyXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAgKi9cbiAgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICB0aGlzLmNoZWNrYm94ZXMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG4gICAgICB0aGlzLmRyb3Bkb3ducyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1zZWxlY3QnKV07XG4gICAgICB0aGlzLmdyb3VwcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXJfX2dyb3VwJyldO1xuICAgICAgdGhpcy5zdWJtaXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyX19zdWJtaXQnKTtcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cF9fY2xlYXInKV07XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhldnQpKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRyb3Bkb3ducy5mb3JFYWNoKGRyb3Bkb3duID0+IHtcbiAgICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhldnQpKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpZWxkc2V0X19sZWdlbmQnKTtcbiAgICAgICAgaWYgKGxlZ2VuZCkge1xuICAgICAgICAgIGxlZ2VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZUdyb3VwRmllbGRzZXQoZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMuY2xlYXJGaWx0ZXIoZXZ0KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci0tanMnKTtcblxuICAgICAgdGhpcy5pbml0RmlsdGVycygpO1xuICAgICAgdGhpcy5pbml0Q2xlYXJUb2dnbGVzKCk7XG4gICAgICB0aGlzLmluaXRDb3VudGVycygpO1xuXG4gICAgICAvLyBIaWRlIHN1Ym1pdCBidXR0b25cbiAgICAgIGlmICh0aGlzLnN1Ym1pdCkge1xuICAgICAgICB0aGlzLnN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGaWx0ZXJzKCkge1xuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzR3JvdXBGaWx0ZXJBY3RpdmUoZ3JvdXApKSB7XG4gICAgICAgICAgLy8gQ29sbGFwc2UgZ3JvdXAgaWYgZmlsdGVycyBub3QgYWN0aXZlLlxuICAgICAgICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzYWJsZSBzdWItZ3JvdXAgc2VsZWN0IGlmIG5vIG9wdGlvbiBpbiBwYXJlbnQgc2VsZWN0ZWQuXG4gICAgICAgIGlmIChncm91cC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1zdWJncm91cCcpKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50U2VsZWN0ID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWZvcm0tZ3JvdXAucGFyZW50LWdyb3VwIHNlbGVjdCcpO1xuICAgICAgICAgIGNvbnN0IHN1YlNlbGVjdCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1mb3JtLWdyb3VwLnN1Yi1ncm91cCBzZWxlY3QnKTtcblxuICAgICAgICAgIGlmIChzdWJTZWxlY3QgIT09IG51bGwgJiYgcGFyZW50U2VsZWN0ICE9PSBudWxsICYmIHBhcmVudFNlbGVjdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHN1YlNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW5hYmxlIHNjcm9sbGFibGUgY2hlY2tib3ggZ3JvdXBzIGlmIG1vcmUgdGhhbiBmb3VyIG9wdGlvbnMuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlcycpO1xuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICAgIGlmIChjYi5jaGlsZEVsZW1lbnRDb3VudCA+IDQpIHtcbiAgICAgICAgICAgIGNiLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGFibGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdENsZWFyVG9nZ2xlcygpIHtcbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCB0b2dnbGVMaW5rID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyk7XG4gICAgICAgIGlmICh0aGlzLmlzR3JvdXBGaWx0ZXJBY3RpdmUoZ3JvdXApKSB7XG4gICAgICAgICAgdG9nZ2xlTGluay5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRDb3VudGVycygpIHtcbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUNvdW50KGdyb3VwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2ZUNvdW50KGdyb3VwKSB7XG4gICAgICBjb25zdCBjb3VudEVsZW0gPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstaGludCcpO1xuXG4gICAgICBpZiAoY291bnRFbGVtID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGVja2JveGVzW2ldLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICBjb3VudEVsZW0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvdW50RWxlbS5pbm5lclRleHQgPSBgJHtjb3VudH0gc2VsZWN0ZWRgXG4gICAgICBjb3VudEVsZW0uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIGlzR3JvdXBGaWx0ZXJBY3RpdmUoZ3JvdXApIHtcbiAgICAgIC8vIENoZWNrIGlmIGNoZWNrYm94ZXMgYXJlIGFjdGl2ZS5cbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2hlY2tib3hlc1tpXS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgc2VsZWN0cyBhcmUgYWN0aXZlLlxuICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudHMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstc2VsZWN0Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxlY3RFbGVtZW50c1tpXS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdG9nZ2xlR3JvdXBGaWVsZHNldChldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZ0LnRhcmdldC5jbG9zZXN0KCcubmhzdWstZmlsdGVyX19ncm91cCcpLmNsYXNzTGlzdC50b2dnbGUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpO1xuICAgIH1cblxuICAgIHNldFVwZGF0ZWRGbGFnKGlzVXBkYXRlZCkge1xuICAgICAgLy8gU2V0IHNvcnQgY29udGFpbmVyIGhpZGRlbiBzY3JvbGwgZmxhZyB2YWx1ZS4gdG8gZW5zdXJlIHZpZXdwb3J0IHJlc2V0c1xuICAgICAgLy8gYWZ0ZXIgZm9ybSBzdWJtaXQuXG4gICAgICBsZXQgZmxhZ0VsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLXVwZGF0ZS1mbGFnPVwiZmlsdGVyXCJdJyk7XG4gICAgICBpZiAoZmxhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZmxhZ0VsZW1lbnQudmFsdWUgPSBpc1VwZGF0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUmVzdWx0cyhldnQpIHtcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUsdG8gZW5zdXJlIHZpZXdwb3J0IHNjcm9sbHNcbiAgICAgIC8vIGRvd24gdG8gcmVzdWx0cyBsaXN0aW5ncyBhZnRlciBmb3JtIHN1Ym1pdC5cbiAgICAgIHRoaXMuc2V0VXBkYXRlZEZsYWcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHBhcmVudEdyb3VwID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcubmhzdWstZmlsdGVyX19ncm91cCcpO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVDb3VudChwYXJlbnRHcm91cCk7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIGNsZWFyRmlsdGVyKGV2dCkge1xuICAgICAgdGhpcy5jbGVhckNoZWNrYm94ZXMoZXZ0KTtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3RFbGVtZW50cyhldnQpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KTtcbiAgICB9XG5cbiAgICBjbGVhckNoZWNrYm94ZXMoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGV2dC50YXJnZXQ7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gdG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpO1xuXG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyU2VsZWN0RWxlbWVudHMoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGV2dC50YXJnZXQ7XG4gICAgICBjb25zdCBzZWxlY3RFbGVtZW50cyA9IHRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstc2VsZWN0Jyk7XG5cbiAgICAgIHNlbGVjdEVsZW1lbnRzLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcicpXS5mb3JFYWNoKGZpbHRlciA9PiBuZXcgRmlsdGVyKGZpbHRlcikpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBGaWx0ZXJUYWdcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlci10YWcnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlclRhZyB7XG4gICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgIHRoaXMuaWNvbiA9IHRhZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyLXRhZ19faWNvbicpO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHRoaXMucmVtb3ZlRmlsdGVyKGV2dCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUZpbHRlcihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBncm91cFRhZ3MgPSB0aGlzLnRhZy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1maWx0ZXItdGFnJyk7XG5cbiAgICAgIC8vIFJlbW92ZSBlbnRpcmUgZmlsdGVyIHRhZyBncm91cCBpZiBubyBvdGhlciB0YWdzIHByZXNlbnQuXG4gICAgICBpZiAoZ3JvdXBUYWdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLnRhZy5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnRhZy5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZm9ybS5uaHN1ay1maWx0ZXIgaW5wdXRbdmFsdWU9JyR7dGhpcy50YWcuZGF0YXNldC5maWx0ZXJ9J11gKS5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja2JveC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGZvcm0ubmhzdWstZmlsdGVyIHNlbGVjdCBvcHRpb25bdmFsdWU9JyR7dGhpcy50YWcuZGF0YXNldC5maWx0ZXJ9J11gKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudEdyb3VwU2VsZWN0ID0gb3B0aW9uLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHBhcmVudEdyb3VwU2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuXG4gICAgICAgIC8vIFJlc2V0IHN1Yi1ncm91cCBzZWxlY3QgaWYgd2UgYXJlIHNldHRpbmcgdGhlIHBhcmVudCxcbiAgICAgICAgY29uc3QgZm9ybUdyb3VwRWxlbSA9IG9wdGlvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAoZm9ybUdyb3VwRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhcmVudC1ncm91cCcpKSB7XG4gICAgICAgICAgY29uc3Qgc3ViR3JvdXBTZWxlY3QgPSBmb3JtR3JvdXBFbGVtLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstc2VsZWN0Jyk7XG4gICAgICAgICAgc3ViR3JvdXBTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRHcm91cFNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLnRhZy5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItdGFnLS1qcycpO1xuXG4gICAgICBpZiAodGhpcy5pY29uKSB7XG4gICAgICAgIHRoaXMuaWNvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyLXRhZycpXS5mb3JFYWNoKHRhZyA9PiBuZXcgRmlsdGVyVGFnKHRhZykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogTGlzdGluZ1xuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWxpc3RpbmcnIGFuZCAnLmhlZS1saXN0aW5ncycgYXJlIHBhc3NlZFxuICAgKiBpbnRvIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEB0b2RvIFJlbW92ZSBsZWdhY3kgcmVmZXJlbmNlcyB0byAubmhzdWstbGlzdGluZyBhbmQgbG9vcHMgb25jZSBhbGwgbmV3XG4gICAqIGNvbGxlY3Rpb24gdGVtcGxhdGVzIGhhdmUgYmVlbiBpbXBsZW1lbnRlZC5cbiAgICovXG4gIGNsYXNzIExpc3Rpbmcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmdfX2ZpbHRlcl9fc29ydCwgLm5oc3VrLWxpc3RpbmdfX3NvcnQnKV0uZm9yRWFjaChmb3JtRWxlbWVudCA9PiB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpO1xuICAgICAgICB0aGlzLnRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyhmb3JtRWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gRGlzYWJsZXMgYnJvd3NlciByZXN0b3Jpbmcgdmlld3BvcnQgdG8gcG9zaXRpb24gYmVmb3JlIHBhZ2UgcmVsb2FkLlxuICAgICAgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuXG4gICAgICB0aGlzLnNjcm9sbFRvUmVzdWx0cygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWxlY3QnKV0uZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zdWJtaXQsIC5uaHN1ay1saXN0aW5nX19zb3J0X19zdWJtaXQnKV0uZm9yRWFjaChzdWJtaXQgPT4ge1xuICAgICAgICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgICAgIHN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRVcGRhdGVkRmxhZyhpc1VwZGF0ZWQpIHtcbiAgICAgIGxldCBmbGFnRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtdXBkYXRlLWZsYWc9XCJsaXN0aW5nXCJdJyk7XG4gICAgICBpZiAoZmxhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZmxhZ0VsZW1lbnQudmFsdWUgPSBpc1VwZGF0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUmVzdWx0cyhmb3JtRWxlbWVudCkge1xuICAgICAgLy8gU2V0IHNvcnQgY29udGFpbmVyIGhpZGRlbiBzY3JvbGwgZmxhZyB2YWx1ZSx0byBlbnN1cmUgdmlld3BvcnQgc2Nyb2xsc1xuICAgICAgLy8gZG93biB0byByZXN1bHRzIGxpc3RpbmdzIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgdGhpcy5zZXRVcGRhdGVkRmxhZyh0cnVlKTtcblxuICAgICAgZm9ybUVsZW1lbnQuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9SZXN1bHRzKCkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24pO1xuXG4gICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3Jlc3VsdHNfdXBkYXRlZCcpKSB7XG4gICAgICAgIGNvbnN0IGxpc3RpbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChsaXN0aW5nQ29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgbGlzdGluZ0NvbnRhaW5lci5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZywgLm5oc3VrLWxpc3RpbmcnKV0uZm9yRWFjaChsaXN0aW5nID0+IG5ldyBMaXN0aW5nKGxpc3RpbmcpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3MgQ29va2llcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvLyBiYW5uZXJcbiAgICAgIHRoaXMudXNlQ29va2llcyA9ICcnXG4gICAgICB0aGlzLmJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1jb29raWUtYmFubmVyJylcbiAgICAgIHRoaXMuc2hvd0Nvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0Nvb2tpZXMnKVxuICAgICAgdGhpcy5yZW1vdmVDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZUNvb2tpZXMnKVxuICAgICAgdGhpcy5ob3N0ID0gdGhpcy5nZXRIb3N0KClcblxuICAgICAgdGhpcy5jb29raWVTdGF0dXMoKVxuICAgICAgdGhpcy5zZXRDb29raWVzKClcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgICAvLyBwb2xpY3kgcGFnZVxuICAgICAgdGhpcy5TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWtfX2Nvb2tpZVN0YXR1cycpXG4gICAgICB0aGlzLkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzSW4nKVxuICAgICAgdGhpcy5PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNPdXQnKVxuXG4gICAgICB0aGlzLnRvZ2dsZVN0YXR1cygpXG4gICAgfVxuXG4gICAgY29va2llU3RhdHVzKCl7XG4gICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKVxuICAgICAgY29va2llcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGMubWF0Y2gobmV3IFJlZ0V4cCgnKF58ICljb29raWVfY29uc2VudChbXjtdKyknKSlcbiAgICAgICAgaWYobWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBjLnNwbGl0KFwiPVwiKVsxXVxuICAgICAgICAgIHRoaXMudXNlQ29va2llcyA9IHN0YXR1c1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGdldEhvc3QoKXtcbiAgICAgIGNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdC50b1N0cmluZygpLnNwbGl0KFwiOlwiKVswXVxuICAgICAgcmV0dXJuIGhvc3RcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmKHRoaXMuc2hvd0Nvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5zaG93Q29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnNob3dDb29raWUpXG4gICAgICB9XG4gICAgICBpZih0aGlzLnJlbW92ZUNvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMucmVtb3ZlQ29va2llKVxuICAgICAgfVxuICAgIH1cblxuICAgIGJhbm5lclNob3coKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJhbm5lckhpZGUoKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb29raWVzKCkge1xuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSAnJykge1xuICAgICAgICAgIHRoaXMuYmFubmVyU2hvdygpXG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzQWNjZXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfYWNjZXB0X2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0FjY2VwdCkge1xuICAgICAgICAgICAgYW5hbHl0aWNzQWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzRGVjbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2RlY2xpbmVfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzRGVjbGluZSkge1xuICAgICAgICAgICAgYW5hbHl0aWNzRGVjbGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9dHJ1ZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICBub0Nvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD1mYWxzZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgICBpZih0aGlzLlN0YXR1cyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc091dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzSW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gXCJmYWxzZVwiIHx8IHRoaXMudXNlQ29va2llcyA9PT0gJycgKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLkluKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5JbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlCbG9jayhpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIilcbiAgICB9XG5cbiAgICBkaXNwbGF5Tm9uZShpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpXG4gICAgfVxuXG4gICAgLy8gcmVkdW5kYW50IGJ1dCB1c2VmdWxcbiAgICBzaG93Q29va2llKCkge1xuICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2tpZXMnKVxuICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gJz4gJyArIGRvY3VtZW50LmNvb2tpZVxuICAgIH1cbiAgICBcbiAgICByZW1vdmVDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZV9jb25zZW50PWZhbHNlOyBtYXgtYWdlPTBcIlxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgfVxuXG4gIG5ldyBDb29raWVzKGRvY3VtZW50KVxufSIsIi8qKlxuKiBTdWJOYXZcbiogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1zdWJuYXYnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4qL1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIHN1Yk5hdiB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignYScpXG4gICAgICB0aGlzLnBhcmVudExpc3QgPSB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZUxpbmspIHtcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHRoaXMudG9nZ2xlTWVudShldmVudCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudShldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3RhdGUoKXtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBhY3RpdmVFbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBpZihlbGVtICE9IHRoaXMuY29udGFpbmVyKXtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgICBlbGVtLnRvZ2dsZUF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGFjdGl2ZUVsZW1zLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3RhdGUoKVxuICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLmNvbnRhaW5lciwgXCJpcy1hY3RpdmVcIilcbiAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKHRoaXMuY29udGFpbmVyLCBcImFyaWEtZXhwYW5kZWRcIilcbiAgICB9XG5cbiAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICAgIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm5cbiAgICAgIGNvbnN0IGhhc0NsYXNzID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICAgICAgaWYgKGhhc0NsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyKSB7XG4gICAgICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGF0dHIgYXJlIG1pc3NpbmdcbiAgICAgIGlmICghZWxlbWVudCB8fCAhYXR0cikgcmV0dXJuXG4gICAgICAvLyBUb2dnbGUgYXR0cmlidXRlIHZhbHVlLiBUcmVhdCBubyBleGlzdGluZyBhdHRyIHNhbWUgYXMgd2hlbiBzZXQgdG8gZmFsc2VcbiAgICAgIGNvbnN0IHZhbHVlID0gKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZScpID8gJ2ZhbHNlJyA6ICd0cnVlJ1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstc3VibmF2JyldLmZvckVhY2goc3VibmF2ID0+IG5ldyBzdWJOYXYoc3VibmF2KSlcblxuICAvKiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSkgKi9cblxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLW1lbnVcIik7XG5cbiAgY2xvc2VNZW51ICYmIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdXNlcklucHV0KGV2ZW50KVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB1c2VySW5wdXQpIFxuICBcbiAgZnVuY3Rpb24gdXNlcklucHV0KGV2ZW50KSB7XG4gICAgLy8gY2xvc2UgbWVudSBpZiBjbGlja2luZyBvdXRzaWRlXG4gICAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgaWYob3Blbk1lbnUpe1xuICAgICAgY29uc3QgaXNOb3RNZW51ID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuTWVudVxuICAgICAgY29uc3QgaXNOb3RNZW51QnV0dG9uID0gZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpXG4gICAgICBjb25zdCBpc01lbnVDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgICBpZihpc05vdE1lbnUgJiYgaXNOb3RNZW51QnV0dG9uICYmICFpc01lbnVDaGlsZCl7XG4gICAgICAgIG9wZW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zaG93XCIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNsb3NlIHN1YiBuYXYgaWYgY2xpY2tpbmcgYW55d2hlcmUgb24gdGhlIGRvY3VtZW50IGV4Y2VwdCB0aGUgb3BlbiBvciBhIG5ldyBzdWJuYXZcbiAgICBjb25zdCBvcGVuU3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgaWYob3BlblN1Yil7XG4gICAgICBjb25zdCBpc05vdFN1YiA9IGV2ZW50LnRhcmdldCAhPT0gb3BlblN1YlxuICAgICAgY29uc3QgaXNTdWJDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGlmKGlzTm90U3ViICYmICFpc1N1YkNoaWxkKXtcbiAgICAgICAgb3BlblN1Yi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLWxpc3RcIikuY2xhc3NMaXN0LnJlbW92ZShcInN1Ym5hdi1vcGVuXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBOSFNVSy1IRUUgQ29tcG9uZW50c1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWNvb2tpZXMvY29va2llcyc7XG5pbXBvcnQgU3ViTmF2IGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL25oc3VrLWhlZS1oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYnO1xuXG4vLyBIRUUgQ29tcG9uZW50c1xuaW1wb3J0IEFuY2hvckxpbmtzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvYW5jaG9ybGlua3MnO1xuaW1wb3J0IEFuY2hvckxpbmtzU3RpY2t5IGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2hlZS1hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5JztcbmltcG9ydCBUYWJsZUNvbnRlbnRzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvdG9jJztcbmltcG9ydCBMaXN0aW5nIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW1lZGlhL21lZGlhJztcbmltcG9ydCBOYXZNYXAgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uYXZtYXAvbmF2bWFwJztcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmV3c2xldHRlci9uZXdzbGV0dGVyJztcbmltcG9ydCBTdW1tYXJ5Q2FyZCBmcm9tIFwiLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1jYXJkLS1zdW1tYXJ5L3N1bW1hcnlcIjtcbmltcG9ydCBUYWJzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFicy90YWJzJztcbmltcG9ydCBUYWJsZUNhcmQgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJsZS1leHBhbmRlci90YWJsZS1leHBhbmRlcic7XG5cbi8vIFVuc29ydGVkIGNvbXBvbmVudHNcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyJztcbmltcG9ydCBGaWx0ZXJUYWcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnJztcblxuLy8gSW5pdGlhbGl6ZSBjb21wb25lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBUYWJzKCk7XG4gIEFuY2hvckxpbmtzKCk7XG4gIEFuY2hvckxpbmtzU3RpY2t5KCk7XG4gIENvb2tpZXMoKTtcbiAgRmlsdGVyKCk7XG4gIEZpbHRlclRhZygpO1xuICBMaXN0aW5nKCk7XG4gIE1lZGlhKCk7XG4gIE5hdk1hcCgpO1xuICBTdWJOYXYoKTtcbiAgU3VtbWFyeUNhcmQoKTtcbiAgTmV3c2xldHRlcigpO1xuICBUYWJsZUNvbnRlbnRzKCk7XG4gIFRhYmxlQ2FyZCgpO1xufSk7XG4iXSwibmFtZXMiOlsiQW5jaG9yTGlua3NTdGlja3kiLCJjb250YWluZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0b2dnbGVCdG4iLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5QW5jaG9yTGlua3MiLCJzaWRlYmFyQW5jaG9yTGlua3MiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXJzIiwidG9nZ2xlU3RpY2t5VG9vbGJhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MiLCJldmVudCIsImtleUNvZGUiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwid2luZG93IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiYWRkIiwicmVtb3ZlIiwiZWxlbWVudCIsImJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxlbWVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsImVsZW1lbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImFuY2hvckxpbmtzIiwiU3VtbWFyeUNhcmQiLCJzdW1tYXJ5Q2FyZCIsInRvZ2dsZUxpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZVN1bW1hcnkiLCJUcmFuc2NyaXB0IiwidG9nZ2xlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiZXZ0IiwidG9nZ2xldHJhbnNjcmlwdCIsImlzQ29sbGFwc2VkIiwiY29udGFpbnMiLCJ0cmFuc2NyaXB0IiwiTmF2TWFwIiwibWFwIiwic3ZnIiwicmVnaW9ucyIsImxpc3QiLCJhZGRMaW5rc1RvTWFwIiwiY2xlYW5TdHlsZSIsIm1hcEV2ZW50TGlzdGVuZXJzIiwibGlua0V2ZW50TGlzdGVuZXJzIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlZ2lvbiIsInRoaXNDb3VudGVycGFydCIsIm1hcENvdW50ZXJwYXJ0IiwiaWQiLCJ0aGlzSHJlZiIsImhyZWYiLCJ0aGlzVGl0bGUiLCJjaGlsZHJlbiIsIndyYXBMaW5rIiwiY29uY2F0IiwiX3RoaXMyIiwibWFwSW4iLCJtYXBPdXQiLCJtYXBDbGljayIsIl90aGlzMyIsIml0ZW0iLCJsaW5rRXZlbnQiLCJtb3ZlVG9Ub3AiLCJvYmoiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJ0aGlzTGluayIsInRoaXNNYXBDb3VudGVycGFydCIsImNsb3Nlc3QiLCJjbGljayIsInRoaXNJZCIsImZpbmQiLCJkaXJlY3Rpb24iLCJ0eXBlIiwibGlua0NvdW50ZXJwYXJ0IiwiZ2V0U1ZHRG9jdW1lbnQiLCJOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInJlcXVpcmVkSW5wdXRzIiwiZXJyb3JzIiwiaW5pdCIsInJlY2FwdGNoYUNhbGxiYWNrIiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInRhcmdldFN1bW1hcnlFcnJvciIsImVycm9yRW1wdHkiLCJlcnJvckVtYWlsIiwiZXJyb3JDb25zZW50IiwidXBkYXRlU3VtbWFyeSIsImVycm9yU3VtbWFyeSIsImxlbmd0aCIsImRpc3BsYXkiLCJpc0VtcHR5Iiwic2hvd0Vycm9yIiwiaGlkZUVycm9yIiwicmUiLCJ0ZXN0IiwiY2hlY2tlZCIsImZpbHRlciIsInB1c2giLCJzdHIiLCJ0cmltIiwiZXJyb3IiLCJlcnJvckNsYXNzZXMiLCJlcnJvcmNsYXNzIiwiZXJyb3JzdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5SXRlbXMiLCJzdW1tYXJ5aXRlbSIsInJlbW92ZUF0dHJpYnV0ZSIsIlRhYmxlQ2FyZCIsInRhYmxlQ2FyZCIsImV4cGFuZGVycyIsInN0YXRlT3BlbiIsImlubmVyVGV4dCIsImRhdGFzZXQiLCJsYWJlbE9wZW4iLCJpbml0RXhwYW5kZXJPYnNlcnZlciIsInRvZ2dsZUV4cGFuZGVycyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uc0xpc3QiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJ1cGRhdGVUb2dnbGVTdGF0ZSIsImV4cGFuZGVyIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJvcGVuRXhwYW5kZXIiLCJjbG9zZUV4cGFuZGVyIiwibGFiZWxDbG9zZSIsImFsbE9wZW4iLCJoYXNBdHRyaWJ1dGUiLCJzdW1tYXJ5IiwidGV4dCIsIlRhYnMiLCJ0YWJjb21wb25lbnQiLCJpIiwidGFicyIsInRhYkxpc3QiLCJ0YWIiLCJjaGFuZ2VUYWJzIiwidGFiRm9jdXMiLCJlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImdyYW5kcGFyZW50Iiwic2VsZWN0ZWQiLCJpc19tb2JpbGUiLCJyZW1vdmVTZWxlY3RlZCIsImhpZGVUYWJzIiwic2V0U2VsZWN0ZWQiLCJzaG93U2VsZWN0ZWQiLCJlbGUiLCJ0IiwicCIsIkFuY2hvckxpbmtzIiwiaGlkZGVuIiwiZm91bmRIZWFkaW5ncyIsImZpbmRIZWFkaW5ncyIsImhlYWRpbmdzIiwiYWRkQW5jaG9yc1RvUGFnZSIsImhlYWRpbmdUeXBlcyIsInNwbGl0Iiwic2VsZWN0b3JzIiwiam9pbiIsImNvbnRlbnRDb250YWluZXIiLCJoZWFkaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uIiwic2VsZWN0b3IiLCJzb21lIiwiZWwiLCJ1bCIsImNyZWF0ZUVsZW1lbnQiLCJmb3VuZEhlYWRpbmciLCJhbmNob3JsaW5rc2lnbm9yZSIsImxpIiwiYSIsImhpZGRlbkVsZW1lbnRzIiwiVGFibGVDb250ZW50cyIsInRhYmxlQ29udGVudHMiLCJjb250YWluZXJTZWxlY3RvciIsImhlYWRpbmdTZWxlY3RvciIsInN1YkhlYWRpbmdTZWxlY3RvciIsImhlYWRpbmdQcmVmaXgiLCJsaW5rcyIsImNyZWF0ZVRvY0xpbmtzIiwic2V0VG9jTGlzdE1hcmt1cCIsInNsaWNlIiwiY2FsbCIsInNldEJhY2tUb1RvcExpbmtzIiwic3ViSGVhZGluZ3MiLCJpbmRleCIsImhlYWRpbmdJZCIsImxpbmsiLCJ0aXRsZSIsImdldEhlYWRpbmdUaXRsZSIsImFuY2hvciIsInNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjb3VudCIsInN1YkhlYWRpbmdJZCIsInNob3J0VGl0bGUiLCJsaXN0SXRlbSIsInNwYW4iLCJnZXRDaGV2cm9uU1ZHIiwiZ2V0Q2lyY2xlU1ZHIiwiYXBwZW5kIiwicGFyZW50TGluayIsImNoaWxkTGlzdCIsImNoaWxkSXRlbSIsImNoaWxkTGluayIsImNyZWF0ZUJhY2tUb1RvcExpbmsiLCJpbnNlcnRCZWZvcmUiLCJGaWx0ZXIiLCJjaGVja2JveGVzIiwiZHJvcGRvd25zIiwiZ3JvdXBzIiwic3VibWl0IiwiY2xlYXJUb2dnbGUiLCJzZXRVcCIsImNoZWNrYm94IiwidXBkYXRlUmVzdWx0cyIsImRyb3Bkb3duIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cEZpZWxkc2V0IiwiY2xlYXJGaWx0ZXIiLCJpbml0RmlsdGVycyIsImluaXRDbGVhclRvZ2dsZXMiLCJpbml0Q291bnRlcnMiLCJpc0dyb3VwRmlsdGVyQWN0aXZlIiwicGFyZW50U2VsZWN0Iiwic3ViU2VsZWN0IiwiY2IiLCJjaGlsZEVsZW1lbnRDb3VudCIsIl90aGlzNCIsInVwZGF0ZUFjdGl2ZUNvdW50IiwiY291bnRFbGVtIiwic2VsZWN0RWxlbWVudHMiLCJzZXRVcGRhdGVkRmxhZyIsImlzVXBkYXRlZCIsImZsYWdFbGVtZW50IiwicGFyZW50R3JvdXAiLCJjbGVhckNoZWNrYm94ZXMiLCJjbGVhclNlbGVjdEVsZW1lbnRzIiwic2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsIkZpbHRlclRhZyIsInRhZyIsImljb24iLCJyZW1vdmVGaWx0ZXIiLCJncm91cFRhZ3MiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJvcHRpb24iLCJwYXJlbnRHcm91cFNlbGVjdCIsImZvcm1Hcm91cEVsZW0iLCJzdWJHcm91cFNlbGVjdCIsIkxpc3RpbmciLCJmb3JtRWxlbWVudCIsInRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyIsImhpc3RvcnkiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInNjcm9sbFRvUmVzdWx0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidXJsIiwiVVJMIiwibG9jYXRpb24iLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJsaXN0aW5nQ29udGFpbmVyIiwic2Nyb2xsSW50b1ZpZXciLCJsaXN0aW5nIiwiQ29va2llcyIsInVzZUNvb2tpZXMiLCJiYW5uZXIiLCJzaG93Q29va2llcyIsInJlbW92ZUNvb2tpZXMiLCJob3N0IiwiZ2V0SG9zdCIsImNvb2tpZVN0YXR1cyIsInNldENvb2tpZXMiLCJTdGF0dXMiLCJJbiIsIk91dCIsInRvZ2dsZVN0YXR1cyIsImNvb2tpZXMiLCJjb29raWUiLCJtYXRjaCIsIlJlZ0V4cCIsInN0YXR1cyIsInRvU3RyaW5nIiwic2hvd0Nvb2tpZSIsInJlbW92ZUNvb2tpZSIsImJhbm5lclNob3ciLCJiYW5uZXJIaWRlIiwiYW5hbHl0aWNzQWNjZXB0IiwidXNlQ29va2llIiwiYW5hbHl0aWNzRGVjbGluZSIsIm5vQ29va2llIiwicmVsb2FkIiwiZGlzcGxheUJsb2NrIiwiZGlzcGxheU5vbmUiLCJvdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN1Yk5hdiIsInBhcmVudExpc3QiLCJ0b2dnbGVNZW51IiwiaGFuZGxlU3RhdGUiLCJhY3RpdmVFbGVtcyIsImVsZW0iLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImNsYXNzTmFtZSIsImhhc0NsYXNzIiwiYXR0ciIsInN1Ym5hdiIsImNsb3NlTWVudSIsInVzZXJJbnB1dCIsIm9wZW5NZW51IiwiaXNOb3RNZW51IiwiaXNOb3RNZW51QnV0dG9uIiwiaXNNZW51Q2hpbGQiLCJvcGVuU3ViIiwiaXNOb3RTdWIiLCJpc1N1YkNoaWxkIiwiU3ViTmF2IiwiTWVkaWEiXSwic291cmNlUm9vdCI6IiJ9