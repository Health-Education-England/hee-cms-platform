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
        this.tableContents.hidden = true;
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

        // Check whether select dropdown has child filter and reset that too.
        if (parentGroup.classList.contains('has-subgroup') && evt.target.nodeName === 'SELECT') {
          var wrapper = evt.target.closest('.parent-group');
          if (wrapper) {
            var childSelect = wrapper.nextElementSibling.querySelector('.sub-group select');
            childSelect.selectedIndex = 0;
          }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztFQUNmdkUsbUdBQVMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9oZWUtYW5jaG9ybGlua3Mtc3RpY2t5L2FuY2hvcmxpbmtzLXN0aWNreS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLWNhcmQtLXN1bW1hcnkvc3VtbWFyeS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW1lZGlhL21lZGlhLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmF2bWFwL25hdm1hcC5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlci5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFicy90YWJzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvYW5jaG9ybGlua3MuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy90b2MuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9uaHN1ay1oZWUtY29va2llcy9jb29raWVzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL25oc3VrLWhlZS1oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2hlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgQW5jaG9yIGxpbmsgc3RpY2t5IHRvb2xiYXIgYXQgYm90dG9tIG9mIHZpZXdwb3J0LlxuICAgKi9cbiAgY2xhc3MgQW5jaG9yTGlua3NTdGlja3kge1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgdGhpcy50b2dnbGVCdG4gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uaGVlLWFuY2hvcmxpbmtzX19zdGlja3lfX2J0bicpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtYW5jaG9ybGlua3MnKTtcbiAgICAgIHRoaXMuc2lkZWJhckFuY2hvckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3JpZ2h0YmFyIC5oZWUtYW5jaG9ybGlua3MnKTtcblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgZm9yIFRPQyBidXR0b24gdG9nZ2xlLCBUT0MgbGluayBuYXZpZ2F0aW9uIGFuZFxuICAgICAqIHRoZSB3aW5kb3cgdmlld3BvcnQgc2Nyb2xsIHRvZ2dsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKSlcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyAmJiBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreVRvb2xiYXIoKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgc3RpY2t5IFRPQyBhbmNob3IgbGlua3Mgd2hlbiBcIlRhYmxlIG9mIENvbnRlbnRzXCIgYnV0dG9uXG4gICAgICogdHJpZ2dlcmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkge1xuICAgICAgdGhpcy50b2dnbGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXN0aWNreScpO1xuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdhOmZpcnN0LW9mLXR5cGUnKS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIC8gaGlkZXMgdGhlIFRPQyBib3R0b20gXCJ0b29sYmFyXCIgd2hlbiB0aGUgc2lkZWJhciBUT0MgaGVhZGluZyBpc1xuICAgICAqIG91dHNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHRvZ2dsZVN0aWNreVRvb2xiYXIoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzLnNpZGViYXJBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdoMicpKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBpbnNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0VsZW1lbnRJblZpZXdwb3J0KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJvdW5kaW5nID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIHJldHVybiBib3VuZGluZy50b3AgPj0gLWVsZW1lbnRIZWlnaHRcbiAgICAgICAgJiYgYm91bmRpbmcubGVmdCA+PSAtZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICsgZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgZWxlbWVudEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWFuY2hvcmxpbmtzX19zdGlja3knKV0uZm9yRWFjaChhbmNob3JMaW5rcyA9PiBuZXcgQW5jaG9yTGlua3NTdGlja3koYW5jaG9yTGlua3MpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cbiAgY2xhc3MgU3VtbWFyeUNhcmQge1xuXG4gICAgY29uc3RydWN0b3Ioc3VtbWFyeUNhcmQpIHtcbiAgICAgIHRoaXMuc3VtbWFyeUNhcmQgPSBzdW1tYXJ5Q2FyZDtcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMuc3VtbWFyeUNhcmQucXVlcnlTZWxlY3RvcignLmhlZS1jYXJkLS1zdW1tYXJ5X190b2dnbGUnKTtcblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIGxpbmsuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBjbGljayBldmVudC5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZVN1bW1hcnkoKTtcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdW1tYXJ5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGFsbCBleHBhbmRlciBjb250ZW50IHZpc2liaWxpdHkgd2l0aGluIHRhYmxlIGNhcmQuXG4gICAgICovXG4gICAgdG9nZ2xlU3VtbWFyeSgpIHtcbiAgICAgIHRoaXMuc3VtbWFyeUNhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnZGVmYXVsdCcpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtY2FyZC0tc3VtbWFyeScpXS5mb3JFYWNoKHN1bW1hcnlDYXJkID0+IG5ldyBTdW1tYXJ5Q2FyZChzdW1tYXJ5Q2FyZCkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNZWRpYSB0cmFuc2NyaXB0XG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5oZWUtbWVkaWEtdHJhbnNjcmlwdCcgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgVHJhbnNjcmlwdCB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgICAgdGhpcy50b2dnbGVzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpXG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFpbmVyKVxuICAgICAgY29uc29sZS5sb2codGhpcy50b2dnbGVzKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy50b2dnbGVzKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlcy5mb3JFYWNoKHRvZ2dsZSA9PiB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGV0cmFuc2NyaXB0KGV2dCkpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZXRyYW5zY3JpcHQoKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCgpKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0NvbGxhcHNlZCgpIHtcbiAgICAgIGlmKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImhlZS1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKSl7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtbWVkaWFfX3RyYW5zY3JpcHQnKV0uZm9yRWFjaCh0cmFuc2NyaXB0ID0+IG5ldyBUcmFuc2NyaXB0KHRyYW5zY3JpcHQpKVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWFwXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1yZWdpb24nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5hdk1hcCB7XG4gICAgY29uc3RydWN0b3IobWFwLCBzdmcpIHtcbiAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICB0aGlzLnJlZ2lvbnMgPSBbLi4uc3ZnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXJlZ2lvbicpXTtcbiAgICAgIHRoaXMubGlzdCA9IFsuLi5tYXAucXVlcnlTZWxlY3RvckFsbCgnI3JlZ2lvbkxpc3QgbGkgYScpXTtcblxuICAgICAgdGhpcy5hZGRMaW5rc1RvTWFwKCk7XG4gICAgICB0aGlzLmNsZWFuU3R5bGUoKTtcbiAgICAgIHRoaXMubWFwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMubGlua0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY2xlYW5TdHlsZSgpe1xuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAgICAgLnN0MHtmaWxsOiMwMDVFQjg7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5zdDF7ZmlsbDojQUVCN0JEO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuaG92ZXIgKiB7c3Ryb2tlOiNmZmViM2I7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgICAgLmZvY3VzIC5zdDAge2ZpbGw6I2ZmZWIzYjtzdHJva2U6IzIxMmIzMjt9XG4gICAgICAgIC5mb2N1cyAqIHtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgYCkpXG4gICAgfVxuXG4gICAgYWRkTGlua3NUb01hcCgpe1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChyZWdpb24uaWQpXG4gICAgICAgIGNvbnN0IHRoaXNIcmVmID0gKHRoaXNDb3VudGVycGFydC5ocmVmKT8gdGhpc0NvdW50ZXJwYXJ0LmhyZWYgOiBcIi9cIlxuICAgICAgICBjb25zdCB0aGlzVGl0bGUgPSAodGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCk/IHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwgOiBcIlwiXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcmVnaW9uLmlubmVySFRNTDtcbiAgICAgICAgY29uc3Qgd3JhcExpbmsgPSBgPGEgeGxpbms6aHJlZj1cIiR7dGhpc0hyZWZ9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgPHRpdGxlPiR7dGhpc1RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgJHtjaGlsZHJlbn1cbiAgICAgICAgPC9hPmBcbiAgICAgICAgcmVnaW9uLmlubmVySFRNTCA9IHdyYXBMaW5rXG4gICAgICB9KVxuICAgIH1cblxuICAgIG1hcEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHRoaXMubWFwSW4oZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHRoaXMubWFwT3V0KGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0aGlzLm1hcENsaWNrKGV2ZW50KSkpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJmb2N1c1wiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJmb2N1c1wiKSkpXG4gICAgfVxuXG4gICAgbW92ZVRvVG9wKG9iaikge1xuICAgICAgb2JqLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqKTtcbiAgICB9XG5cbiAgICBtYXBJbih0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRoaXMubW92ZVRvVG9wKHRhcmdldClcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBPdXQodGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwQ2xpY2soZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHRoaXNNYXBDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJnXCIpLmlkKVxuICAgICAgaWYodGhpc01hcENvdW50ZXJwYXJ0KSB0aGlzTWFwQ291bnRlcnBhcnQuY2xpY2soKVxuICAgIH1cblxuICAgIG1hcENvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saXN0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG5cbiAgICBsaW5rRXZlbnQodGFyZ2V0LCBkaXJlY3Rpb24sIHR5cGUpIHtcbiAgICAgIGNvbnN0IHRoaXNJZCA9IHRhcmdldC5pZFxuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saW5rQ291bnRlcnBhcnQodGhpc0lkKVxuICAgICAgaWYoZGlyZWN0aW9uID09PSBcImluXCIpIHtcbiAgICAgICAgdGhpcy5tYXBJbih0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcE91dCh0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGlua0NvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5yZWdpb25zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLW1hcCcpXS5mb3JFYWNoKG1hcCA9PiB7XG4gICAgLy8gbmVlZCB0byB3YWl0IGZvciBTVkcgdG8gbG9hZFxuICAgIGNvbnN0IG9iaiA9IG1hcC5xdWVyeVNlbGVjdG9yKCdvYmplY3QnKVxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IHN2ZyA9IG9iai5nZXRTVkdEb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpXG4gICAgICBpZihzdmcpe1xuICAgICAgICBuZXcgTmF2TWFwKG1hcCwgc3ZnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBOZXdzbGV0dGVyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmV3c2xldHRlciB7XG4gICAgY29uc3RydWN0b3IobmV3c2xldHRlcikge1xuICAgICAgdGhpcy5uZXdzbGV0dGVyID0gbmV3c2xldHRlcjtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMgPSBuZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcmVxdWlyZWRdXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgd2luZG93LnJlY2FwdGNoYUNhbGxiYWNrID0gdGhpcy5yZWNhcHRjaGFDYWxsYmFja1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgdGhpcy5hZGRFdmVudHMoKSAgICAgIDtcbiAgICB9XG4gICAgXG4gICAgYWRkRXZlbnRzKCkge1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGMgPT4gdGhpcy52YWxpZGF0ZShjLnRhcmdldCkpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0YXJnZXQpIHtcbiAgICAgIHZhciB0YXJnZXRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JzLVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIHZhciB0YXJnZXRTdW1tYXJ5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnktXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgaWYgKHRhcmdldC5uYW1lID09IFwiZmlyc3RuYW1lXCIgfHwgdGFyZ2V0Lm5hbWUgPT0gXCJsYXN0bmFtZVwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJlbWFpbFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJjb25zZW50XCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU3VtbWFyeSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN1bW1hcnkoKSB7XG4gICAgICB2YXIgZXJyb3JTdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5XCIpO1xuICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApXG4gICAgICB7ICAgICAgICBcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgaWYgKCFyZS50ZXN0KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIHNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCh0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgaXNFbXB0eShzdHIpIHtcbiAgICAgIHJldHVybiAhc3RyLnRyaW0oKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1tZXNzYWdlJyk7XG4gICAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JDbGFzc2VzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgZXJyb3JDbGFzc2VzLmZvckVhY2goZXJyb3JjbGFzcyA9PiB7XG4gICAgICAgIGVycm9yY2xhc3MuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnkgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLXN1bW1hcnknKTtcbiAgICAgIGVycm9yU3VtbWFyeS5mb3JFYWNoKGVycm9yc3VtbWFyeSA9PiB7XG4gICAgICAgIGVycm9yc3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeUl0ZW1zID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1zdW1tYXJ5LWl0ZW0nKTtcbiAgICAgIGVycm9yU3VtbWFyeUl0ZW1zLmZvckVhY2goc3VtbWFyeWl0ZW0gPT4ge1xuICAgICAgICBzdW1tYXJ5aXRlbS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJztcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVjYXB0Y2hhQ2FsbGJhY2soKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI25ld3NsZXR0ZXItZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScpXS5mb3JFYWNoKChuZXdzbGV0dGVyKSA9PiBuZXcgTmV3c2xldHRlcihuZXdzbGV0dGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIHByb3ZpZGluZyB0aGUgXCJleHBhbmQgYWxsXCIgdG9nZ2xlIGZ1bmN0aW9uYWxpdHkgZm9yIHRhYmxlXG4gICAqIGNhcmRzLlxuICAgKi9cbiAgY2xhc3MgVGFibGVDYXJkIHtcblxuICAgIGNvbnN0cnVjdG9yKHRhYmxlQ2FyZCkge1xuICAgICAgdGhpcy50YWJsZUNhcmQgPSB0YWJsZUNhcmQ7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLnRhYmxlQ2FyZC5xdWVyeVNlbGVjdG9yKCcuaGVlLXRhYmxlLWV4cGFuZGVyX190b2dnbGUgYScpO1xuICAgICAgdGhpcy5leHBhbmRlcnMgPSB0aGlzLnRhYmxlQ2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXhwYW5kZXInKTtcbiAgICAgIHRoaXMuc3RhdGVPcGVuID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLnRvZ2dsZUxpbmsgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbjtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmluaXRFeHBhbmRlck9ic2VydmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgbGluayBhbmQgc3VtbWFyeSBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGNsaWNrIGV2ZW50LlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZXJzKCk7XG4gICAgICB9KVxuXG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBsaW5rIGVudGVyIGFuZCBzcGFjZWJhciBrZXkgcHJlc3MuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZXJzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2UgdXNlIG9ic2VydmVycyB0byByZWFjdCB0byBjbGljayBldmVudHMgb24gaW5kaXZpZHVhbCBleHBhbmRlcnMsIGFzIHRoaXNcbiAgICAgKiBldmVudCBmdW5jdGlvbmFsaXR5IGlzIGhhbmRsZWQgYnkgdGhlIG5oc3VrLWRldGFpbHMgY29tcG9uZW50J3MgamF2YXNjcmlwdC5cbiAgICAgKi9cbiAgICBpbml0RXhwYW5kZXJPYnNlcnZlcigpIHtcbiAgICAgIC8vIENvbmZpZ3VyZSBvYnNlcnZlciB0byByZWFjdCB0byBjaGFuZ2VzIGluIGFuIGV4cGFuZGVyJ3MgXCJvcGVuXCIgYXR0cmlidXRlLlxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zTGlzdCkgPT4ge1xuICAgICAgICBtdXRhdGlvbnNMaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnb3BlbicpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9nZ2xlU3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZXhwYW5kZXIsIHthdHRyaWJ1dGVzOiB0cnVlfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYWxsIGV4cGFuZGVyIGNvbnRlbnQgdmlzaWJpbGl0eSB3aXRoaW4gdGFibGUgY2FyZC5cbiAgICAgKi9cbiAgICB0b2dnbGVFeHBhbmRlcnMoKSB7XG4gICAgICAvLyBPcGVuIC8gY2xvc2UgZWFjaCBleHBhbmRlciBkZXBlbmRpbmcgb24gY3VycmVudCBzdGF0ZS5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLm9wZW5FeHBhbmRlcihleHBhbmRlcikgOiB0aGlzLmNsb3NlRXhwYW5kZXIoZXhwYW5kZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRvZ2dsZSBzdGF0ZSBmbGFnLlxuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSAhdGhpcy5zdGF0ZU9wZW47XG5cbiAgICAgIC8vIFRvZ2dsZSBidXR0b24gdGV4dC5cbiAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW4gOiB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxDbG9zZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBEZXRlcm1pbmVzIHdoZXRoZXIgYWxsIGV4cGFuZGVycyBoYXZlIGJlZW4gb3BlbmVkIG9yIGNsb3NlZCBhbmQgdXBkYXRlc1xuICAgICAqICB0aGUgc3RhdGUgZmxhZyBhbmQgdG9nZ2xlIGxpbmsgdGV4dCBhY2NvcmRpbmdseS5cbiAgICAgKlxuICAgICAqICBGdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiBNdXRhdGlvbk9ic2VydmVyIGRldGVjdHMgYSBjaGFuZ2UgaW4gZXhwYW5kZXJcbiAgICAgKiAgXCJvcGVuXCIgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHVwZGF0ZVRvZ2dsZVN0YXRlKCkge1xuICAgICAgbGV0IGFsbE9wZW4gPSBmYWxzZTtcblxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgICFleHBhbmRlci5oYXNBdHRyaWJ1dGUoJ29wZW4nKSA/IGFsbE9wZW4gPSBmYWxzZSA6IGFsbE9wZW4gPSB0cnVlO1xuICAgICAgfSk7XG5cbiAgICAgICFhbGxPcGVuID8gdGhpcy5zdGF0ZU9wZW4gPSBmYWxzZSA6IHRoaXMuc3RhdGVPcGVuID0gdHJ1ZTtcbiAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW4gOiB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxDbG9zZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW5zIGFuIGV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZXhwYW5kZXIgRXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKi9cbiAgICBvcGVuRXhwYW5kZXIoZXhwYW5kZXIpIHtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fc3VtbWFyeScpO1xuICAgICAgY29uc3QgdGV4dCA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX190ZXh0Jyk7XG5cbiAgICAgIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgZXhwYW5kZXIuc2V0QXR0cmlidXRlKCdvcGVuJywgJ29wZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgYW4gZXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxuICAgICAqL1xuICAgIGNsb3NlRXhwYW5kZXIoZXhwYW5kZXIpIHtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fc3VtbWFyeScpO1xuICAgICAgY29uc3QgdGV4dCA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX190ZXh0Jyk7XG5cbiAgICAgIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgZXhwYW5kZXIucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS10YWJsZS1leHBhbmRlcicpXS5mb3JFYWNoKHRhYmxlQ2FyZCA9PiBuZXcgVGFibGVDYXJkKHRhYmxlQ2FyZCkpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAqIFRhYnNcclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstdGFicycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcclxuICAqL1xyXG4gIGNsYXNzIFRhYnMge1xyXG4gICAgY29uc3RydWN0b3IodGFiY29tcG9uZW50LCBpKSB7XHJcbiAgICAgIHRoaXMudGFiY29tcG9uZW50ID0gdGFiY29tcG9uZW50XHJcbiAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJylcclxuICAgICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwidGFibGlzdFwiXScpXHJcbiAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYyA9PiB0aGlzLmNoYW5nZVRhYnMoYykpXHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB0YWJGb2N1cyA9IDBcclxuICAgICAgdGFiTGlzdC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcclxuICAgICAgICAvLyBNb3ZlIHJpZ2h0XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgLTEpXHJcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgICAgICB0YWJGb2N1cysrXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPj0gdGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNb3ZlIGxlZnRcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgICB0YWJGb2N1cy0tXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBzdGFydCwgbW92ZSB0byB0aGUgZW5kXHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA8IDApIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IHRhYnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uZm9jdXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFicyhlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwYXJlbnQpO1xyXG4gICAgICBjb25zdCBncmFuZHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdyYW5kcGFyZW50KTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpWzBdO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZClcclxuICAgICAgY29uc3QgaXNfbW9iaWxlID0gZ3JhbmRwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay10YWJzX19tb2JpbGUnKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhpc19tb2JpbGUpXHJcblxyXG4gICAgICAvLyBDb21wYXJlIHNlbGVjdGVkIGFuZCB0YXJnZXQsIGFuZCBpZiBvbiBtb2JpbGVcclxuICAgICAgLy8gQ2xvc2UgdGhlIHRhYiBpZiBhbHJlYWR5IG9wZW5cclxuICAgICAgaWYodGFyZ2V0ID09IHNlbGVjdGVkICYmIGlzX21vYmlsZSkge1xyXG4gICAgICAgIC8vIFVuc2VsZWN0IGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBjdXJyZW50IHNlbGVjdGVkIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoaXMgdGFiIGFzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCh0YXJnZXQpXHJcblxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYiBwYW5lbHNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTaG93IHRoZSBzZWxlY3RlZCBwYW5lbFxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdGVkKGdyYW5kcGFyZW50LnBhcmVudE5vZGUsIHRhcmdldClcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHQgPT4gdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGZhbHNlKSk7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpXHJcbiAgICAgICAgLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgdHJ1ZSlcclxuICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRhYnMoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYnBhbmVsXCJdJylcclxuICAgICAgICAuZm9yRWFjaChwID0+IHAuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIHRydWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTZWxlY3RlZChlbGUsIHRhcmdldCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGUucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YCkpXHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKVxyXG4gICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFicycpXS5mb3JFYWNoKCh0YWJzLCBpKSA9PiBuZXcgVGFicyh0YWJzLCBpKSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEFuY2hvckxpbmtzXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1hbmNob3ItbGlua3MnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEFuY2hvckxpbmtzIHtcbiAgICBjb25zdHJ1Y3RvcihhbmNob3JMaW5rcykge1xuICAgICAgdGhpcy5hbmNob3JMaW5rcyA9IGFuY2hvckxpbmtzO1xuXG4gICAgICBpZiAodGhpcy5hbmNob3JMaW5rcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG9jLWpzJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MgPSB0aGlzLmZpbmRIZWFkaW5ncyhhbmNob3JMaW5rcy5kYXRhc2V0LmhlYWRpbmdzKTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRIZWFkaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hZGRBbmNob3JzVG9QYWdlKCk7XG4gICAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmluZEhlYWRpbmdzKGhlYWRpbmdzKSB7XG4gICAgICBsZXQgZm91bmRIZWFkaW5ncyA9IFtdXG4gICAgICBpZiAoaGVhZGluZ3MpIHtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBDU1Mgc2VsZWN0b3JzIGZvciBvbmx5IGZpcnN0IGxldmVsIGhlYWRpbmdzIGluc2lkZSByaWNoLXRleHRcbiAgICAgICAgLy8gYXJlYXMgYW5kIG91dHNpZGUgb2YgY29tcG9uZW50cy5cbiAgICAgICAgY29uc3QgaGVhZGluZ1R5cGVzID0gaGVhZGluZ3Muc3BsaXQoJywnKTtcbiAgICAgICAgbGV0IHNlbGVjdG9ycyA9IGhlYWRpbmdUeXBlcy5tYXAodHlwZSA9PiB7XG4gICAgICAgICAgcmV0dXJuICcucGFnZV9fY29udGVudCA+ICcgKyB0eXBlO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZWN0b3JzID0gc2VsZWN0b3JzLmpvaW4oJywgJyk7XG5cbiAgICAgICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19jb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMpLmZvckVhY2goKGhlYWRpbmcsIGkpID0+IHtcbiAgICAgICAgICBpZiAoIWhlYWRpbmcuaWQpIHtcbiAgICAgICAgICAgIGhlYWRpbmcuaWQgPSBoZWFkaW5nLmlubmVyVGV4dC5yZXBsYWNlKC8gLiovLCcnKS5yZXBsYWNlKC9bXFxuXFxyXS9nLCcnKS5yZXBsYWNlKC9cXHMvZywnJykudG9Mb3dlckNhc2UoKStpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3VuZEhlYWRpbmdzLnB1c2goaGVhZGluZyk7XG4gICAgICAgIH0pXG4gICAgICB9ICAgICAgXG4gICAgICByZXR1cm4gZm91bmRIZWFkaW5ncztcbiAgICB9XG5cbiAgICBhcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4oaGVhZGluZywgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildLnNvbWUoZWwgPT5cbiAgICAgICAgZWwgIT09IGhlYWRpbmcgJiYgZWwuY29udGFpbnMoaGVhZGluZylcbiAgICAgIClcbiAgICB9XG5cbiAgICBhZGRBbmNob3JzVG9QYWdlKCkge1xuICAgICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgIHRoaXMuZm91bmRIZWFkaW5ncy5mb3JFYWNoKGZvdW5kSGVhZGluZyA9PiB7XG4gICAgICAgIGlmICghZm91bmRIZWFkaW5nLmRhdGFzZXQuYW5jaG9ybGlua3NpZ25vcmVcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstdS12aXN1YWxseS1oaWRkZW4nKVxuICAgICAgICAgICYmICFmb3VuZEhlYWRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay1jYXJkX19oZWFkaW5nJylcbiAgICAgICAgICAmJiAhdGhpcy5hcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4oZm91bmRIZWFkaW5nLCAnLm5oc3VrLWdyaWQtY29sdW1uLW9uZS10aGlyZCcpKVxuICAgICAgICB7XG4gICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBhLmhyZWYgPSAnIycrZm91bmRIZWFkaW5nLmlkO1xuICAgICAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gZm91bmRIZWFkaW5nLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuaHN1ay11LXZpc3VhbGx5LWhpZGRlblwiKTtcbiAgICAgICAgICB3aGlsZSAoaGlkZGVuRWxlbWVudHMubGVuZ3RoID4gMCkgaGlkZGVuRWxlbWVudHNbMF0ucmVtb3ZlKCk7XG4gICAgICAgICAgYS5pbm5lclRleHQgPSBmb3VuZEhlYWRpbmcuaW5uZXJUZXh0OyAvLyBzdHJpcCB0YWdzXG4gICAgICAgICAgYS5pbm5lckhUTUwgPSBhLmlubmVySFRNTC5yZXBsYWNlKC88YnJcXHMqW1xcL10/Pi9naSwgXCIgXCIpOyAvLyBzdHJpcCA8YnI+XG4gICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuYXBwZW5kQ2hpbGQodWwpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1hbmNob3ItbGlua3MnKV0uZm9yRWFjaChhbmNob3JMaW5rcyA9PiBuZXcgQW5jaG9yTGlua3MoYW5jaG9yTGlua3MpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIFJlc3BvbnNpYmxlIGZvciBnZW5lcmF0aW5nIHRhYmxlIG9mIGNvbnRlbnRzIGxpbmtzLlxuICAqL1xuICBjbGFzcyBUYWJsZUNvbnRlbnRzIHtcblxuICAgIGNvbnN0cnVjdG9yKHRhYmxlQ29udGVudHMpIHtcbiAgICAgIHRoaXMudGFibGVDb250ZW50cyA9IHRhYmxlQ29udGVudHM7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyU2VsZWN0b3IgPSAnLnBhZ2VfX21haW4nO1xuICAgICAgdGhpcy5oZWFkaW5nU2VsZWN0b3IgPSAnaDIudG9jX2gyJztcbiAgICAgIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yID0gJ2gzLnRvY19oMyc7XG4gICAgICB0aGlzLmhlYWRpbmdQcmVmaXggPSAnaGVlLXRvYy1oZWFkaW5nJztcblxuICAgICAgLy8gQW5jaG9yIGxpbmtzIG1hY3JvIHNldHMgdGhpcyBkYXRhIGF0dHJpYnV0ZSB3aGVuIFRPQyBpcyBmbGFnZ2VkIGFzIHRydWUuXG4gICAgICBpZiAoIXRoaXMudGFibGVDb250ZW50cy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG9jLWpzJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGF0dGVtcHQgdG8gYnVpbGQgVE9DIGxpbmtzIGlmIEgyIGFuY2hvcnMgZm91bmQgb24gcGFnZS5cbiAgICAgIGxldCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuaGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChoZWFkaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy50YWJsZUNvbnRlbnRzLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQnVpbGQgbGluayBzdHJ1Y3R1cmUgZnJvbSBET00gYW5kIGFwcGVuZCBnZW5lcmF0ZWQgbWFya3VwIHRvIFRPQ1xuICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgY29uc3QgbGlua3MgPSB0aGlzLmNyZWF0ZVRvY0xpbmtzKGhlYWRpbmdzKTtcbiAgICAgIHRoaXMuc2V0VG9jTGlzdE1hcmt1cChsaW5rcyk7XG5cbiAgICAgIC8vIEJ1aWxkIGJhY2sgdG8gdG9wIGxpbmtzIGFuZCBhcHBlbmQgdG8gZWFjaCBUT0MgaGVhZGluZyB3aXRoaW4gcGFnZVxuICAgICAgLy8gY29udGVudC4gV2Ugc2tpcCB0aGUgZmlyc3QgaGVhZGluZyBvbiB0aGUgcGFnZS5cbiAgICAgIGhlYWRpbmdzID0gW10uc2xpY2UuY2FsbChoZWFkaW5ncywgMSk7XG4gICAgICB0aGlzLnNldEJhY2tUb1RvcExpbmtzKGhlYWRpbmdzKTtcbiAgICAgIGNvbnN0IHN1YkhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKHN1YkhlYWRpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhzdWJIZWFkaW5ncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGFycmF5IG9mIGhlYWRpbmcgbGluayBhdHRyaWJ1dGVzIGFuZCB0aGVpciBjaGlsZHJlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9ICAgICAgaGVhZGluZ3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICBjcmVhdGVUb2NMaW5rcyhoZWFkaW5ncykge1xuICAgICAgbGV0IGxpbmtzID0gW107XG5cbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRpbmdJZCA9IHRoaXMuaGVhZGluZ1ByZWZpeCArICctJyArIGluZGV4O1xuXG4gICAgICAgIC8vIFNldCB1bmlxdWUgaWQgZm9yIGN1cnJlbnQgaGVhZGluZyBIMiBlbGVtZW50LlxuICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBoZWFkaW5nSWQpXG5cbiAgICAgICAgbGV0IGxpbmsgPSB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpLFxuICAgICAgICAgIGFuY2hvcjogaGVhZGluZ0lkLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzaWJsaW5nID0gaGVhZGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8gVHJhdmVyc2UgRE9NIGZvciBIMyBlbGVtZW50cyBhZnRlciBjdXJyZW50IEgyIGhlYWRpbmcgYW5kIGFwcGVuZCB0b1xuICAgICAgICAvLyBjaGlsZHJlbiBsaW5rcyBhcnJheS5cbiAgICAgICAgd2hpbGUgKHNpYmxpbmcgJiYgIXNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDInKSkge1xuICAgICAgICAgIGlmIChzaWJsaW5nLnRhZ05hbWUgPT09ICdIMycgJiYgc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ3RvY19oMycpKSB7XG5cbiAgICAgICAgICAgIC8vIFNldCB1bmlxdWUgaWQgZm9yIGN1cnJlbnQgaGVhZGluZyBIMyBlbGVtZW50LlxuICAgICAgICAgICAgY29uc3Qgc3ViSGVhZGluZ0lkID0gaGVhZGluZ0lkICsgJy0nICsgY291bnQ7XG4gICAgICAgICAgICBzaWJsaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBzdWJIZWFkaW5nSWQpXG5cbiAgICAgICAgICAgIGxpbmsuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShzaWJsaW5nKSxcbiAgICAgICAgICAgICAgYW5jaG9yOiBzdWJIZWFkaW5nSWQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlua3MucHVzaChsaW5rKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbGlua3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBlaXRoZXIgdGhlIHNob3J0IG9yIGxvbmcgdGl0bGUgb2YgdGhlIGhlYWRpbmcgYmFzZWQgb24gZGF0YSBhdHRyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBoZWFkaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICAgKi9cbiAgICBnZXRIZWFkaW5nVGl0bGUoaGVhZGluZykge1xuICAgICAgbGV0IHRpdGxlO1xuXG4gICAgICBpZiAoaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvcnQtdGl0bGUnKSkge1xuICAgICAgICB0aXRsZSA9IGhlYWRpbmcuZGF0YXNldC5zaG9ydFRpdGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmlubmVyVGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgVE9DIG1hcmt1cCBhbmQgYXBwZW5kcyB0byBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0VG9jTGlzdE1hcmt1cChsaW5rcykge1xuICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdoYXMtY2hpbGRyZW4nKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWFuY2hvcmxpbmtzX193cmFwcGVyJylcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGV2cm9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENoZXZyb25TVkcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2lyY2xlU1ZHKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHNwYW4pO1xuXG4gICAgICAgIGxldCBwYXJlbnRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBwYXJlbnRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGxpbmsuYW5jaG9yKTtcbiAgICAgICAgcGFyZW50TGluay5pbm5lclRleHQgPSBsaW5rLnRpdGxlO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocGFyZW50TGluayk7XG5cbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBjaGlsZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgIGxpbmsuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNoaWxkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgIGxldCBjaGlsZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBjaGlsZExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgaXRlbS5hbmNob3IpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG5cbiAgICAgICAgICAgIGNoaWxkSXRlbS5hcHBlbmQoY2hpbGRMaW5rKTtcbiAgICAgICAgICAgIGNoaWxkTGlzdC5hcHBlbmQoY2hpbGRJdGVtKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZChjaGlsZExpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5hcHBlbmQobGlzdEl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGFibGVDb250ZW50cy5hcHBlbmQobGlzdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGJhY2sgdG8gdG9wIGxpbmsgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgY3JlYXRlQmFja1RvVG9wTGluaygpIHtcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWUtYmFjay10by10b3AnKTtcblxuICAgICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI21haW5jb250ZW50Jyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCd0aXRsZScsICdCYWNrIHRvIHRvcCcpO1xuICAgICAgYW5jaG9yLmlubmVyVGV4dCA9ICdCYWNrIHRvIHRvcCc7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoYW5jaG9yKTtcblxuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGJhY2sgdG8gdG9wIGxpbmtzIGFib3ZlIFRPQyBoZWFkaW5ncyB3aXRoaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9ICAgICAgaGVhZGluZ3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncykge1xuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gQXZvaWRzIGR1cGxpY2F0ZSBiYWNrIHRvIHRvcCBsaW5rcyB3aGVuIHN0aWNreSBpcyBwcmVzZW50LlxuICAgICAgICBpZiAoIWhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycpKSB7XG4gICAgICAgICAgY29uc3QgbGluayA9IHRoaXMuY3JlYXRlQmFja1RvVG9wTGluaygpO1xuICAgICAgICAgIGhlYWRpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGluaywgaGVhZGluZyk7XG4gICAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLXRvcC1saW5rJywgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2hldnJvbiBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaGV2cm9uU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiOFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCA4IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPHBhdGggZD1cIk04LjAwMDE5IDYuOTk5OTRDOC4wMDA5NSA3LjEzMTU1IDcuOTc1NzIgNy4yNjIwMSA3LjkyNTk2IDcuMzgzODVDNy44NzYxOSA3LjUwNTY5IDcuODAyODcgNy42MTY1IDcuNzEwMTkgNy43MDk5NEwyLjcxMDE5IDEyLjcwOTlDMi42MTY5NSAxMi44MDMyIDIuNTA2MjYgMTIuODc3MSAyLjM4NDQzIDEyLjkyNzZDMi4yNjI2MSAxMi45NzgxIDIuMTMyMDQgMTMuMDA0IDIuMDAwMTkgMTMuMDA0QzEuODY4MzMgMTMuMDA0IDEuNzM3NzYgMTIuOTc4MSAxLjYxNTk0IDEyLjkyNzZDMS40OTQxMSAxMi44NzcxIDEuMzgzNDIgMTIuODAzMiAxLjI5MDE4IDEyLjcwOTlDMS4xOTY5NSAxMi42MTY3IDEuMTIyOTkgMTIuNTA2IDEuMDcyNTMgMTIuMzg0MkMxLjAyMjA2IDEyLjI2MjQgMC45OTYwOTQgMTIuMTMxOCAwLjk5NjA5NCAxMS45OTk5QzAuOTk2MDk0IDExLjg2ODEgMS4wMjIwNiAxMS43Mzc1IDEuMDcyNTMgMTEuNjE1N0MxLjEyMjk5IDExLjQ5MzkgMS4xOTY5NSAxMS4zODMyIDEuMjkwMTggMTEuMjg5OUw1LjU5MDE5IDYuOTk5OTRMMS4yOTAxOCAyLjcwOTk0QzEuMTAxODggMi41MjE2NCAwLjk5NjA5NCAyLjI2NjI0IDAuOTk2MDk0IDEuOTk5OTRDMC45OTYwOTQgMS43MzM2NCAxLjEwMTg4IDEuNDc4MjUgMS4yOTAxOCAxLjI4OTk0QzEuNDc4NDkgMS4xMDE2NCAxLjczMzg4IDAuOTk1ODUgMi4wMDAxOSAwLjk5NTg1QzIuMjY2NDkgMC45OTU4NSAyLjUyMTg4IDEuMTAxNjQgMi43MTAxOSAxLjI4OTk0TDcuNzEwMTkgNi4yODk5NEM3LjgwMjg3IDYuMzgzMzggNy44NzYxOSA2LjQ5NDIgNy45MjU5NiA2LjYxNjAzQzcuOTc1NzIgNi43Mzc4NyA4LjAwMDk1IDYuODY4MzMgOC4wMDAxOSA2Ljk5OTk0WlwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNpcmNsZSBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaXJjbGVTVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiM1wiIHZpZXdCb3g9XCIwIDAgMyAzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiMS41XCIgcj1cIjEuNVwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWFuY2hvcmxpbmtzJyldLmZvckVhY2godGFibGVDb250ZW50cyA9PiBuZXcgVGFibGVDb250ZW50cyh0YWJsZUNvbnRlbnRzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogRmlsdGVyXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAgKi9cbiAgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICB0aGlzLmNoZWNrYm94ZXMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG4gICAgICB0aGlzLmRyb3Bkb3ducyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1zZWxlY3QnKV07XG4gICAgICB0aGlzLmdyb3VwcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXJfX2dyb3VwJyldO1xuICAgICAgdGhpcy5zdWJtaXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyX19zdWJtaXQnKTtcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cF9fY2xlYXInKV07XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhldnQpKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRyb3Bkb3ducy5mb3JFYWNoKGRyb3Bkb3duID0+IHtcbiAgICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhldnQpKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpZWxkc2V0X19sZWdlbmQnKTtcbiAgICAgICAgaWYgKGxlZ2VuZCkge1xuICAgICAgICAgIGxlZ2VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZUdyb3VwRmllbGRzZXQoZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMuY2xlYXJGaWx0ZXIoZXZ0KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci0tanMnKTtcblxuICAgICAgdGhpcy5pbml0RmlsdGVycygpO1xuICAgICAgdGhpcy5pbml0Q2xlYXJUb2dnbGVzKCk7XG4gICAgICB0aGlzLmluaXRDb3VudGVycygpO1xuXG4gICAgICAvLyBIaWRlIHN1Ym1pdCBidXR0b25cbiAgICAgIGlmICh0aGlzLnN1Ym1pdCkge1xuICAgICAgICB0aGlzLnN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGaWx0ZXJzKCkge1xuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzR3JvdXBGaWx0ZXJBY3RpdmUoZ3JvdXApKSB7XG4gICAgICAgICAgLy8gQ29sbGFwc2UgZ3JvdXAgaWYgZmlsdGVycyBub3QgYWN0aXZlLlxuICAgICAgICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzYWJsZSBzdWItZ3JvdXAgc2VsZWN0IGlmIG5vIG9wdGlvbiBpbiBwYXJlbnQgc2VsZWN0ZWQuXG4gICAgICAgIGlmIChncm91cC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1zdWJncm91cCcpKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50U2VsZWN0ID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWZvcm0tZ3JvdXAucGFyZW50LWdyb3VwIHNlbGVjdCcpO1xuICAgICAgICAgIGNvbnN0IHN1YlNlbGVjdCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1mb3JtLWdyb3VwLnN1Yi1ncm91cCBzZWxlY3QnKTtcblxuICAgICAgICAgIGlmIChzdWJTZWxlY3QgIT09IG51bGwgJiYgcGFyZW50U2VsZWN0ICE9PSBudWxsICYmIHBhcmVudFNlbGVjdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHN1YlNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW5hYmxlIHNjcm9sbGFibGUgY2hlY2tib3ggZ3JvdXBzIGlmIG1vcmUgdGhhbiBmb3VyIG9wdGlvbnMuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlcycpO1xuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICAgIGlmIChjYi5jaGlsZEVsZW1lbnRDb3VudCA+IDQpIHtcbiAgICAgICAgICAgIGNiLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGFibGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdENsZWFyVG9nZ2xlcygpIHtcbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCB0b2dnbGVMaW5rID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyk7XG4gICAgICAgIGlmICh0aGlzLmlzR3JvdXBGaWx0ZXJBY3RpdmUoZ3JvdXApKSB7XG4gICAgICAgICAgdG9nZ2xlTGluay5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRDb3VudGVycygpIHtcbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUNvdW50KGdyb3VwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2ZUNvdW50KGdyb3VwKSB7XG4gICAgICBjb25zdCBjb3VudEVsZW0gPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstaGludCcpO1xuXG4gICAgICBpZiAoY291bnRFbGVtID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGVja2JveGVzW2ldLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICBjb3VudEVsZW0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvdW50RWxlbS5pbm5lclRleHQgPSBgJHtjb3VudH0gc2VsZWN0ZWRgXG4gICAgICBjb3VudEVsZW0uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIGlzR3JvdXBGaWx0ZXJBY3RpdmUoZ3JvdXApIHtcbiAgICAgIC8vIENoZWNrIGlmIGNoZWNrYm94ZXMgYXJlIGFjdGl2ZS5cbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2hlY2tib3hlc1tpXS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgc2VsZWN0cyBhcmUgYWN0aXZlLlxuICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudHMgPSBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstc2VsZWN0Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzZWxlY3RFbGVtZW50c1tpXS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdG9nZ2xlR3JvdXBGaWVsZHNldChldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZ0LnRhcmdldC5jbG9zZXN0KCcubmhzdWstZmlsdGVyX19ncm91cCcpLmNsYXNzTGlzdC50b2dnbGUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpO1xuICAgIH1cblxuICAgIHNldFVwZGF0ZWRGbGFnKGlzVXBkYXRlZCkge1xuICAgICAgLy8gU2V0IHNvcnQgY29udGFpbmVyIGhpZGRlbiBzY3JvbGwgZmxhZyB2YWx1ZS4gdG8gZW5zdXJlIHZpZXdwb3J0IHJlc2V0c1xuICAgICAgLy8gYWZ0ZXIgZm9ybSBzdWJtaXQuXG4gICAgICBsZXQgZmxhZ0VsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLXVwZGF0ZS1mbGFnPVwiZmlsdGVyXCJdJyk7XG4gICAgICBpZiAoZmxhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZmxhZ0VsZW1lbnQudmFsdWUgPSBpc1VwZGF0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUmVzdWx0cyhldnQpIHtcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUsdG8gZW5zdXJlIHZpZXdwb3J0IHNjcm9sbHNcbiAgICAgIC8vIGRvd24gdG8gcmVzdWx0cyBsaXN0aW5ncyBhZnRlciBmb3JtIHN1Ym1pdC5cbiAgICAgIHRoaXMuc2V0VXBkYXRlZEZsYWcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHBhcmVudEdyb3VwID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcubmhzdWstZmlsdGVyX19ncm91cCcpO1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVDb3VudChwYXJlbnRHcm91cCk7XG5cbiAgICAgIC8vIENoZWNrIHdoZXRoZXIgc2VsZWN0IGRyb3Bkb3duIGhhcyBjaGlsZCBmaWx0ZXIgYW5kIHJlc2V0IHRoYXQgdG9vLlxuICAgICAgaWYgKHBhcmVudEdyb3VwLmNsYXNzTGlzdC5jb250YWlucygnaGFzLXN1Ymdyb3VwJykgJiYgZXZ0LnRhcmdldC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLnBhcmVudC1ncm91cCcpO1xuICAgICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICAgIGNvbnN0IGNoaWxkU2VsZWN0ID0gd3JhcHBlci5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLnN1Yi1ncm91cCBzZWxlY3QnKTtcbiAgICAgICAgICBjaGlsZFNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBjbGVhckZpbHRlcihldnQpIHtcbiAgICAgIHRoaXMuY2xlYXJDaGVja2JveGVzKGV2dCk7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0RWxlbWVudHMoZXZ0KTtcblxuICAgICAgdGhpcy51cGRhdGVSZXN1bHRzKGV2dCk7XG4gICAgfVxuXG4gICAgY2xlYXJDaGVja2JveGVzKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBldnQudGFyZ2V0O1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IHRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKTtcblxuICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgY2IucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhclNlbGVjdEVsZW1lbnRzKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBldnQudGFyZ2V0O1xuICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudHMgPSB0b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLXNlbGVjdCcpO1xuXG4gICAgICBzZWxlY3RFbGVtZW50cy5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXInKV0uZm9yRWFjaChmaWx0ZXIgPT4gbmV3IEZpbHRlcihmaWx0ZXIpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogRmlsdGVyVGFnXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1maWx0ZXItdGFnJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBGaWx0ZXJUYWcge1xuICAgIGNvbnN0cnVjdG9yKHRhZykge1xuICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICB0aGlzLmljb24gPSB0YWcucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlci10YWdfX2ljb24nKTtcblxuICAgICAgdGhpcy5zZXRVcCgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy50YWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB0aGlzLnJlbW92ZUZpbHRlcihldnQpKTtcbiAgICB9XG5cbiAgICByZW1vdmVGaWx0ZXIoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgZ3JvdXBUYWdzID0gdGhpcy50YWcucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZmlsdGVyLXRhZycpO1xuXG4gICAgICAvLyBSZW1vdmUgZW50aXJlIGZpbHRlciB0YWcgZ3JvdXAgaWYgbm8gb3RoZXIgdGFncyBwcmVzZW50LlxuICAgICAgaWYgKGdyb3VwVGFncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy50YWcucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgdGhpcy50YWcucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGZvcm0ubmhzdWstZmlsdGVyIGlucHV0W3ZhbHVlPScke3RoaXMudGFnLmRhdGFzZXQuZmlsdGVyfSddYCkuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tib3guZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBmb3JtLm5oc3VrLWZpbHRlciBzZWxlY3Qgb3B0aW9uW3ZhbHVlPScke3RoaXMudGFnLmRhdGFzZXQuZmlsdGVyfSddYCkuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRHcm91cFNlbGVjdCA9IG9wdGlvbi5wYXJlbnRFbGVtZW50O1xuICAgICAgICBwYXJlbnRHcm91cFNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcblxuICAgICAgICAvLyBSZXNldCBzdWItZ3JvdXAgc2VsZWN0IGlmIHdlIGFyZSBzZXR0aW5nIHRoZSBwYXJlbnQsXG4gICAgICAgIGNvbnN0IGZvcm1Hcm91cEVsZW0gPSBvcHRpb24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKGZvcm1Hcm91cEVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXJlbnQtZ3JvdXAnKSkge1xuICAgICAgICAgIGNvbnN0IHN1Ykdyb3VwU2VsZWN0ID0gZm9ybUdyb3VwRWxlbS5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLm5oc3VrLXNlbGVjdCcpO1xuICAgICAgICAgIHN1Ykdyb3VwU2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50R3JvdXBTZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFVwKCkge1xuICAgICAgdGhpcy50YWcuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLXRhZy0tanMnKTtcblxuICAgICAgaWYgKHRoaXMuaWNvbikge1xuICAgICAgICB0aGlzLmljb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlci10YWcnKV0uZm9yRWFjaCh0YWcgPT4gbmV3IEZpbHRlclRhZyh0YWcpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIExpc3RpbmdcbiAgICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1saXN0aW5nJyBhbmQgJy5oZWUtbGlzdGluZ3MnIGFyZSBwYXNzZWRcbiAgICogaW50byB0aGlzIGNsYXNzLlxuICAgKlxuICAgKiBAdG9kbyBSZW1vdmUgbGVnYWN5IHJlZmVyZW5jZXMgdG8gLm5oc3VrLWxpc3RpbmcgYW5kIGxvb3BzIG9uY2UgYWxsIG5ld1xuICAgKiBjb2xsZWN0aW9uIHRlbXBsYXRlcyBoYXZlIGJlZW4gaW1wbGVtZW50ZWQuXG4gICAqL1xuICBjbGFzcyBMaXN0aW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcblxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3NvcnQsIC5uaHN1ay1saXN0aW5nX19zb3J0JyldLmZvckVhY2goZm9ybUVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KTtcbiAgICAgICAgdGhpcy50b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIERpc2FibGVzIGJyb3dzZXIgcmVzdG9yaW5nIHZpZXdwb3J0IHRvIHBvc2l0aW9uIGJlZm9yZSBwYWdlIHJlbG9hZC5cbiAgICAgIGhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcblxuICAgICAgdGhpcy5zY3JvbGxUb1Jlc3VsdHMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCkge1xuICAgICAgaWYgKGZvcm1FbGVtZW50KSB7XG4gICAgICAgIFsuLi5mb3JtRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2VsZWN0JyldLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhmb3JtRWxlbWVudCkpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyhmb3JtRWxlbWVudCkge1xuICAgICAgaWYgKGZvcm1FbGVtZW50KSB7XG4gICAgICAgIFsuLi5mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmdfX2ZpbHRlcl9fc3VibWl0LCAubmhzdWstbGlzdGluZ19fc29ydF9fc3VibWl0JyldLmZvckVhY2goc3VibWl0ID0+IHtcbiAgICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgICBzdWJtaXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0VXBkYXRlZEZsYWcoaXNVcGRhdGVkKSB7XG4gICAgICBsZXQgZmxhZ0VsZW1lbnQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLXVwZGF0ZS1mbGFnPVwibGlzdGluZ1wiXScpO1xuICAgICAgaWYgKGZsYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZsYWdFbGVtZW50LnZhbHVlID0gaXNVcGRhdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUsdG8gZW5zdXJlIHZpZXdwb3J0IHNjcm9sbHNcbiAgICAgIC8vIGRvd24gdG8gcmVzdWx0cyBsaXN0aW5ncyBhZnRlciBmb3JtIHN1Ym1pdC5cbiAgICAgIHRoaXMuc2V0VXBkYXRlZEZsYWcodHJ1ZSk7XG5cbiAgICAgIGZvcm1FbGVtZW50LnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHNjcm9sbFRvUmVzdWx0cygpIHtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uKTtcblxuICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKCdyZXN1bHRzX3VwZGF0ZWQnKSkge1xuICAgICAgICBjb25zdCBsaXN0aW5nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMnKTtcblxuICAgICAgICBpZiAobGlzdGluZ0NvbnRhaW5lciAhPT0gbnVsbCkge1xuICAgICAgICAgIGxpc3RpbmdDb250YWluZXIuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmcsIC5uaHN1ay1saXN0aW5nJyldLmZvckVhY2gobGlzdGluZyA9PiBuZXcgTGlzdGluZyhsaXN0aW5nKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIENvb2tpZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gYmFubmVyXG4gICAgICB0aGlzLnVzZUNvb2tpZXMgPSAnJ1xuICAgICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWstY29va2llLWJhbm5lcicpXG4gICAgICB0aGlzLnNob3dDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dDb29raWVzJylcbiAgICAgIHRoaXMucmVtb3ZlQ29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmVDb29raWVzJylcbiAgICAgIHRoaXMuaG9zdCA9IHRoaXMuZ2V0SG9zdCgpXG5cbiAgICAgIHRoaXMuY29va2llU3RhdHVzKClcbiAgICAgIHRoaXMuc2V0Q29va2llcygpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgLy8gcG9saWN5IHBhZ2VcbiAgICAgIHRoaXMuU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrX19jb29raWVTdGF0dXMnKVxuICAgICAgdGhpcy5JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc0luJylcbiAgICAgIHRoaXMuT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzT3V0JylcblxuICAgICAgdGhpcy50b2dnbGVTdGF0dXMoKVxuICAgIH1cblxuICAgIGNvb2tpZVN0YXR1cygpe1xuICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIilcbiAgICAgIGNvb2tpZXMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBjLm1hdGNoKG5ldyBSZWdFeHAoJyhefCApY29va2llX2NvbnNlbnQoW147XSspJykpXG4gICAgICAgIGlmKG1hdGNoKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gYy5zcGxpdChcIj1cIilbMV1cbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZXMgPSBzdGF0dXNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRIb3N0KCl7XG4gICAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3QudG9TdHJpbmcoKS5zcGxpdChcIjpcIilbMF1cbiAgICAgIHJldHVybiBob3N0XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZih0aGlzLnNob3dDb29raWVzKSB7XG4gICAgICAgIHRoaXMuc2hvd0Nvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zaG93Q29va2llKVxuICAgICAgfVxuICAgICAgaWYodGhpcy5yZW1vdmVDb29raWVzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnJlbW92ZUNvb2tpZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiYW5uZXJTaG93KCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiYW5uZXJIaWRlKCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29va2llcygpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmJhbm5lclNob3coKVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0FjY2VwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2FjY2VwdF9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NBY2NlcHQpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0FjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0RlY2xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19kZWNsaW5lX2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0RlY2xpbmUpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0RlY2xpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PXRydWU7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgbm9Db29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9ZmFsc2U7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgdG9nZ2xlU3RhdHVzKCkge1xuICAgICAgaWYodGhpcy5TdGF0dXMpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNPdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc0luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09IFwiZmFsc2VcIiB8fCB0aGlzLnVzZUNvb2tpZXMgPT09ICcnICkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5JbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuSW4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5QmxvY2soaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpXG4gICAgfVxuXG4gICAgZGlzcGxheU5vbmUoaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKVxuICAgIH1cblxuICAgIC8vIHJlZHVuZGFudCBidXQgdXNlZnVsXG4gICAgc2hvd0Nvb2tpZSgpIHtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29raWVzJylcbiAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9ICc+ICcgKyBkb2N1bWVudC5jb29raWVcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVfY29uc2VudD1mYWxzZTsgbWF4LWFnZT0wXCJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gIH1cblxuICBuZXcgQ29va2llcyhkb2N1bWVudClcbn0iLCIvKipcbiogU3ViTmF2XG4qIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstc3VibmF2JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBzdWJOYXYge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgdGhpcy5wYXJlbnRMaXN0ID0gdGhpcy5jb250YWluZXIucGFyZW50Tm9kZVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVN0YXRlKCl7XG4gICAgICBjb25zdCBhY3RpdmVFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgYWN0aXZlRWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYoZWxlbSAhPSB0aGlzLmNvbnRhaW5lcil7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgICAgZWxlbS50b2dnbGVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihhY3RpdmVFbGVtcy5sZW5ndGggPT09IDApe1xuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZVN0YXRlKClcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5jb250YWluZXIsIFwiaXMtYWN0aXZlXCIpXG4gICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lciwgXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuXG4gICAgICBjb25zdCBoYXNDbGFzcyA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgIGlmIChoYXNDbGFzcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cikge1xuICAgICAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBhdHRyIGFyZSBtaXNzaW5nXG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWF0dHIpIHJldHVyblxuICAgICAgLy8gVG9nZ2xlIGF0dHJpYnV0ZSB2YWx1ZS4gVHJlYXQgbm8gZXhpc3RpbmcgYXR0ciBzYW1lIGFzIHdoZW4gc2V0IHRvIGZhbHNlXG4gICAgICBjb25zdCB2YWx1ZSA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnKSA/ICdmYWxzZScgOiAndHJ1ZSdcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXN1Ym5hdicpXS5mb3JFYWNoKHN1Ym5hdiA9PiBuZXcgc3ViTmF2KHN1Ym5hdikpXG5cbiAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pICovXG5cbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1tZW51XCIpO1xuXG4gIGNsb3NlTWVudSAmJiBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHVzZXJJbnB1dChldmVudClcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdXNlcklucHV0KSBcbiAgXG4gIGZ1bmN0aW9uIHVzZXJJbnB1dChldmVudCkge1xuICAgIC8vIGNsb3NlIG1lbnUgaWYgY2xpY2tpbmcgb3V0c2lkZVxuICAgIGNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgIGlmKG9wZW5NZW51KXtcbiAgICAgIGNvbnN0IGlzTm90TWVudSA9IGV2ZW50LnRhcmdldCAhPT0gb3Blbk1lbnVcbiAgICAgIGNvbnN0IGlzTm90TWVudUJ1dHRvbiA9IGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKVxuICAgICAgY29uc3QgaXNNZW51Q2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgICAgaWYoaXNOb3RNZW51ICYmIGlzTm90TWVudUJ1dHRvbiAmJiAhaXNNZW51Q2hpbGQpe1xuICAgICAgICBvcGVuTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2hvd1wiKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjbG9zZSBzdWIgbmF2IGlmIGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBkb2N1bWVudCBleGNlcHQgdGhlIG9wZW4gb3IgYSBuZXcgc3VibmF2XG4gICAgY29uc3Qgb3BlblN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgIGlmKG9wZW5TdWIpe1xuICAgICAgY29uc3QgaXNOb3RTdWIgPSBldmVudC50YXJnZXQgIT09IG9wZW5TdWJcbiAgICAgIGNvbnN0IGlzU3ViQ2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBpZihpc05vdFN1YiAmJiAhaXNTdWJDaGlsZCl7XG4gICAgICAgIG9wZW5TdWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWJuYXYtb3BlblwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTkhTVUstSEVFIENvbXBvbmVudHNcbmltcG9ydCBDb29raWVzIGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL25oc3VrLWhlZS1jb29raWVzL2Nvb2tpZXMnO1xuaW1wb3J0IFN1Yk5hdiBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9uaHN1ay1oZWUtaGVhZGVyL25hdmlnYXRpb24vc3VibmF2JztcblxuLy8gSEVFIENvbXBvbmVudHNcbmltcG9ydCBBbmNob3JMaW5rcyBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvaGVlLWFuY2hvcmxpbmtzL2FuY2hvcmxpbmtzJztcbmltcG9ydCBBbmNob3JMaW5rc1N0aWNreSBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9oZWUtYW5jaG9ybGlua3Mtc3RpY2t5L2FuY2hvcmxpbmtzLXN0aWNreSc7XG5pbXBvcnQgVGFibGVDb250ZW50cyBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvaGVlLWFuY2hvcmxpbmtzL3RvYyc7XG5pbXBvcnQgTGlzdGluZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1tZWRpYS9tZWRpYSc7XG5pbXBvcnQgTmF2TWFwIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmF2bWFwL25hdm1hcCc7XG5pbXBvcnQgTmV3c2xldHRlciBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlcic7XG5pbXBvcnQgU3VtbWFyeUNhcmQgZnJvbSBcIi4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtY2FyZC0tc3VtbWFyeS9zdW1tYXJ5XCI7XG5pbXBvcnQgVGFicyBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYnMvdGFicyc7XG5pbXBvcnQgVGFibGVDYXJkIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFibGUtZXhwYW5kZXIvdGFibGUtZXhwYW5kZXInO1xuXG4vLyBVbnNvcnRlZCBjb21wb25lbnRzXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVyL2ZpbHRlcic7XG5pbXBvcnQgRmlsdGVyVGFnIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZyc7XG5cbi8vIEluaXRpYWxpemUgY29tcG9uZW50c1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgVGFicygpO1xuICBBbmNob3JMaW5rcygpO1xuICBBbmNob3JMaW5rc1N0aWNreSgpO1xuICBDb29raWVzKCk7XG4gIEZpbHRlcigpO1xuICBGaWx0ZXJUYWcoKTtcbiAgTGlzdGluZygpO1xuICBNZWRpYSgpO1xuICBOYXZNYXAoKTtcbiAgU3ViTmF2KCk7XG4gIFN1bW1hcnlDYXJkKCk7XG4gIE5ld3NsZXR0ZXIoKTtcbiAgVGFibGVDb250ZW50cygpO1xuICBUYWJsZUNhcmQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkFuY2hvckxpbmtzU3RpY2t5IiwiY29udGFpbmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwidG9nZ2xlQnRuIiwicXVlcnlTZWxlY3RvciIsInN0aWNreUFuY2hvckxpbmtzIiwic2lkZWJhckFuY2hvckxpbmtzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVycyIsInRvZ2dsZVN0aWNreVRvb2xiYXIiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZVN0aWNreUFuY2hvckxpbmtzIiwiZXZlbnQiLCJrZXlDb2RlIiwidGFyZ2V0IiwidGFnTmFtZSIsIndpbmRvdyIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImZvY3VzIiwiaXNFbGVtZW50SW5WaWV3cG9ydCIsImFkZCIsInJlbW92ZSIsImVsZW1lbnQiLCJib3VuZGluZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsZW1lbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsInRvcCIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJhbmNob3JMaW5rcyIsIlN1bW1hcnlDYXJkIiwic3VtbWFyeUNhcmQiLCJ0b2dnbGVMaW5rIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVTdW1tYXJ5IiwiVHJhbnNjcmlwdCIsInRvZ2dsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImV2dCIsInRvZ2dsZXRyYW5zY3JpcHQiLCJpc0NvbGxhcHNlZCIsImNvbnRhaW5zIiwidHJhbnNjcmlwdCIsIk5hdk1hcCIsIm1hcCIsInN2ZyIsInJlZ2lvbnMiLCJsaXN0IiwiYWRkTGlua3NUb01hcCIsImNsZWFuU3R5bGUiLCJtYXBFdmVudExpc3RlbmVycyIsImxpbmtFdmVudExpc3RlbmVycyIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJyZWdpb24iLCJ0aGlzQ291bnRlcnBhcnQiLCJtYXBDb3VudGVycGFydCIsImlkIiwidGhpc0hyZWYiLCJocmVmIiwidGhpc1RpdGxlIiwiY2hpbGRyZW4iLCJ3cmFwTGluayIsImNvbmNhdCIsIl90aGlzMiIsIm1hcEluIiwibWFwT3V0IiwibWFwQ2xpY2siLCJfdGhpczMiLCJpdGVtIiwibGlua0V2ZW50IiwibW92ZVRvVG9wIiwib2JqIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwidGhpc0xpbmsiLCJ0aGlzTWFwQ291bnRlcnBhcnQiLCJjbG9zZXN0IiwiY2xpY2siLCJ0aGlzSWQiLCJmaW5kIiwiZGlyZWN0aW9uIiwidHlwZSIsImxpbmtDb3VudGVycGFydCIsImdldFNWR0RvY3VtZW50IiwiTmV3c2xldHRlciIsIm5ld3NsZXR0ZXIiLCJyZXF1aXJlZElucHV0cyIsImVycm9ycyIsImluaXQiLCJyZWNhcHRjaGFDYWxsYmFjayIsInJlc2V0Rm9ybSIsImFkZEV2ZW50cyIsImlucHV0IiwiYyIsInZhbGlkYXRlIiwidGFyZ2V0RXJyb3IiLCJnZXRFbGVtZW50QnlJZCIsIm5hbWUiLCJ0YXJnZXRTdW1tYXJ5RXJyb3IiLCJlcnJvckVtcHR5IiwiZXJyb3JFbWFpbCIsImVycm9yQ29uc2VudCIsInVwZGF0ZVN1bW1hcnkiLCJlcnJvclN1bW1hcnkiLCJsZW5ndGgiLCJkaXNwbGF5IiwiaXNFbXB0eSIsInNob3dFcnJvciIsImhpZGVFcnJvciIsInJlIiwidGVzdCIsImNoZWNrZWQiLCJmaWx0ZXIiLCJwdXNoIiwic3RyIiwidHJpbSIsImVycm9yIiwiZXJyb3JDbGFzc2VzIiwiZXJyb3JjbGFzcyIsImVycm9yc3VtbWFyeSIsImVycm9yU3VtbWFyeUl0ZW1zIiwic3VtbWFyeWl0ZW0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJUYWJsZUNhcmQiLCJ0YWJsZUNhcmQiLCJleHBhbmRlcnMiLCJzdGF0ZU9wZW4iLCJpbm5lclRleHQiLCJkYXRhc2V0IiwibGFiZWxPcGVuIiwiaW5pdEV4cGFuZGVyT2JzZXJ2ZXIiLCJ0b2dnbGVFeHBhbmRlcnMiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnNMaXN0IiwibXV0YXRpb24iLCJhdHRyaWJ1dGVOYW1lIiwidXBkYXRlVG9nZ2xlU3RhdGUiLCJleHBhbmRlciIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwib3BlbkV4cGFuZGVyIiwiY2xvc2VFeHBhbmRlciIsImxhYmVsQ2xvc2UiLCJhbGxPcGVuIiwiaGFzQXR0cmlidXRlIiwic3VtbWFyeSIsInRleHQiLCJUYWJzIiwidGFiY29tcG9uZW50IiwiaSIsInRhYnMiLCJ0YWJMaXN0IiwidGFiIiwiY2hhbmdlVGFicyIsInRhYkZvY3VzIiwiZSIsInBhcmVudCIsInBhcmVudE5vZGUiLCJncmFuZHBhcmVudCIsInNlbGVjdGVkIiwiaXNfbW9iaWxlIiwicmVtb3ZlU2VsZWN0ZWQiLCJoaWRlVGFicyIsInNldFNlbGVjdGVkIiwic2hvd1NlbGVjdGVkIiwiZWxlIiwidCIsInAiLCJBbmNob3JMaW5rcyIsImhpZGRlbiIsImZvdW5kSGVhZGluZ3MiLCJmaW5kSGVhZGluZ3MiLCJoZWFkaW5ncyIsImFkZEFuY2hvcnNUb1BhZ2UiLCJoZWFkaW5nVHlwZXMiLCJzcGxpdCIsInNlbGVjdG9ycyIsImpvaW4iLCJjb250ZW50Q29udGFpbmVyIiwiaGVhZGluZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbiIsInNlbGVjdG9yIiwic29tZSIsImVsIiwidWwiLCJjcmVhdGVFbGVtZW50IiwiZm91bmRIZWFkaW5nIiwiYW5jaG9ybGlua3NpZ25vcmUiLCJsaSIsImEiLCJoaWRkZW5FbGVtZW50cyIsIlRhYmxlQ29udGVudHMiLCJ0YWJsZUNvbnRlbnRzIiwiY29udGFpbmVyU2VsZWN0b3IiLCJoZWFkaW5nU2VsZWN0b3IiLCJzdWJIZWFkaW5nU2VsZWN0b3IiLCJoZWFkaW5nUHJlZml4IiwibGlua3MiLCJjcmVhdGVUb2NMaW5rcyIsInNldFRvY0xpc3RNYXJrdXAiLCJzbGljZSIsImNhbGwiLCJzZXRCYWNrVG9Ub3BMaW5rcyIsInN1YkhlYWRpbmdzIiwiaW5kZXgiLCJoZWFkaW5nSWQiLCJsaW5rIiwidGl0bGUiLCJnZXRIZWFkaW5nVGl0bGUiLCJhbmNob3IiLCJzaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY291bnQiLCJzdWJIZWFkaW5nSWQiLCJzaG9ydFRpdGxlIiwibGlzdEl0ZW0iLCJzcGFuIiwiZ2V0Q2hldnJvblNWRyIsImdldENpcmNsZVNWRyIsImFwcGVuZCIsInBhcmVudExpbmsiLCJjaGlsZExpc3QiLCJjaGlsZEl0ZW0iLCJjaGlsZExpbmsiLCJjcmVhdGVCYWNrVG9Ub3BMaW5rIiwiaW5zZXJ0QmVmb3JlIiwiRmlsdGVyIiwiY2hlY2tib3hlcyIsImRyb3Bkb3ducyIsImdyb3VwcyIsInN1Ym1pdCIsImNsZWFyVG9nZ2xlIiwic2V0VXAiLCJjaGVja2JveCIsInVwZGF0ZVJlc3VsdHMiLCJkcm9wZG93biIsImdyb3VwIiwibGVnZW5kIiwidG9nZ2xlR3JvdXBGaWVsZHNldCIsImNsZWFyRmlsdGVyIiwiaW5pdEZpbHRlcnMiLCJpbml0Q2xlYXJUb2dnbGVzIiwiaW5pdENvdW50ZXJzIiwiaXNHcm91cEZpbHRlckFjdGl2ZSIsInBhcmVudFNlbGVjdCIsInN1YlNlbGVjdCIsImNiIiwiY2hpbGRFbGVtZW50Q291bnQiLCJfdGhpczQiLCJ1cGRhdGVBY3RpdmVDb3VudCIsImNvdW50RWxlbSIsInNlbGVjdEVsZW1lbnRzIiwic2V0VXBkYXRlZEZsYWciLCJpc1VwZGF0ZWQiLCJmbGFnRWxlbWVudCIsInBhcmVudEdyb3VwIiwibm9kZU5hbWUiLCJ3cmFwcGVyIiwiY2hpbGRTZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiY2xlYXJDaGVja2JveGVzIiwiY2xlYXJTZWxlY3RFbGVtZW50cyIsInNlbGVjdCIsIkZpbHRlclRhZyIsInRhZyIsImljb24iLCJyZW1vdmVGaWx0ZXIiLCJncm91cFRhZ3MiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJvcHRpb24iLCJwYXJlbnRHcm91cFNlbGVjdCIsImZvcm1Hcm91cEVsZW0iLCJzdWJHcm91cFNlbGVjdCIsIkxpc3RpbmciLCJmb3JtRWxlbWVudCIsInRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyIsImhpc3RvcnkiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInNjcm9sbFRvUmVzdWx0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidXJsIiwiVVJMIiwibG9jYXRpb24iLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJsaXN0aW5nQ29udGFpbmVyIiwic2Nyb2xsSW50b1ZpZXciLCJsaXN0aW5nIiwiQ29va2llcyIsInVzZUNvb2tpZXMiLCJiYW5uZXIiLCJzaG93Q29va2llcyIsInJlbW92ZUNvb2tpZXMiLCJob3N0IiwiZ2V0SG9zdCIsImNvb2tpZVN0YXR1cyIsInNldENvb2tpZXMiLCJTdGF0dXMiLCJJbiIsIk91dCIsInRvZ2dsZVN0YXR1cyIsImNvb2tpZXMiLCJjb29raWUiLCJtYXRjaCIsIlJlZ0V4cCIsInN0YXR1cyIsInRvU3RyaW5nIiwic2hvd0Nvb2tpZSIsInJlbW92ZUNvb2tpZSIsImJhbm5lclNob3ciLCJiYW5uZXJIaWRlIiwiYW5hbHl0aWNzQWNjZXB0IiwidXNlQ29va2llIiwiYW5hbHl0aWNzRGVjbGluZSIsIm5vQ29va2llIiwicmVsb2FkIiwiZGlzcGxheUJsb2NrIiwiZGlzcGxheU5vbmUiLCJvdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN1Yk5hdiIsInBhcmVudExpc3QiLCJ0b2dnbGVNZW51IiwiaGFuZGxlU3RhdGUiLCJhY3RpdmVFbGVtcyIsImVsZW0iLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImNsYXNzTmFtZSIsImhhc0NsYXNzIiwiYXR0ciIsInN1Ym5hdiIsImNsb3NlTWVudSIsInVzZXJJbnB1dCIsIm9wZW5NZW51IiwiaXNOb3RNZW51IiwiaXNOb3RNZW51QnV0dG9uIiwiaXNNZW51Q2hpbGQiLCJvcGVuU3ViIiwiaXNOb3RTdWIiLCJpc1N1YkNoaWxkIiwiU3ViTmF2IiwiTWVkaWEiXSwic291cmNlUm9vdCI6IiJ9