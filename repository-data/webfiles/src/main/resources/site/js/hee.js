/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/hee/blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky.js":
/*!***************************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky.js ***!
  \***************************************************************************************/
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

/***/ "./app/assets/hee/blocks/content/main/card--summary/summary.js":
/*!*********************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/card--summary/summary.js ***!
  \*********************************************************************/
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

/***/ "./app/assets/hee/blocks/content/main/table-expander/table-expander.js":
/*!*****************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/table-expander/table-expander.js ***!
  \*****************************************************************************/
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

/***/ "./app/assets/hee/blocks/content/sidebar/anchorlinks/anchorlinks.js":
/*!**************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/sidebar/anchorlinks/anchorlinks.js ***!
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
      } else {
        this.anchorLinks.hidden = false;
      }
    }
    _createClass(AnchorLinks, [{
      key: "findHeadings",
      value: function findHeadings(headings) {
        var foundHeadings = [];
        if (headings) {
          document.querySelectorAll(headings).forEach(function (heading, i) {
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
        this.anchorLinks.hidden = false;
      }
    }]);
    return AnchorLinks;
  }();
  _toConsumableArray(document.getElementsByClassName('nhsuk-anchor-links')).forEach(function (anchorLinks) {
    return new AnchorLinks(anchorLinks);
  });
});

/***/ }),

/***/ "./app/assets/hee/blocks/content/sidebar/anchorlinks/toc.js":
/*!******************************************************************!*\
  !*** ./app/assets/hee/blocks/content/sidebar/anchorlinks/toc.js ***!
  \******************************************************************/
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
        this.groups.forEach(function (group) {
          var legend = group.querySelector('.nhsuk-fieldset__legend');
          if (legend) {
            legend.addEventListener('click', function (evt) {
              return _this.toggleGroup(evt);
            });
          }
        });
        this.clearToggle.forEach(function (toggle) {
          toggle.addEventListener('click', function (evt) {
            return _this.clearCheckboxes(evt);
          });
        });
      }
    }, {
      key: "setUp",
      value: function setUp() {
        var _this2 = this;
        this.container.classList.add('nhsuk-filter--js');

        // Close groups
        // this.groups.forEach(group => group.classList.add('nhsuk-filter__group--closed'));

        this.clearToggle.forEach(function (toggle) {
          _this2.toggleClearLinkVisibility(toggle);
        });

        // Hide submit button
        if (this.submit) {
          this.submit.hidden = true;
        }
      }
    }, {
      key: "toggleGroup",
      value: function toggleGroup(evt) {
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
        this.container.submit();
      }
    }, {
      key: "clearCheckboxes",
      value: function clearCheckboxes(evt) {
        evt.preventDefault();
        var toggleLink = evt.target;
        var checkboxes = _toConsumableArray(toggleLink.parentElement.querySelectorAll('.nhsuk-checkboxes__input'));
        checkboxes.forEach(function (cb) {
          cb.removeAttribute('checked');
        });
        this.updateResults(evt);
      }
    }, {
      key: "toggleClearLinkVisibility",
      value: function toggleClearLinkVisibility(toggleLink) {
        var checkboxes = _toConsumableArray(toggleLink.parentElement.querySelectorAll('.nhsuk-checkboxes__input'));
        for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].hasAttribute('checked')) {
            toggleLink.classList.add('visible');
            break;
          }
        }
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
        document.querySelectorAll("input[value='".concat(this.tag.dataset.filter, "']")).forEach(function (checkbox) {
          checkbox.checked = false;
          checkbox.dispatchEvent(new Event('change'));
        });
        this.tag.remove();
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

/***/ "./app/assets/hee/blocks/scaffolding/cookies/cookies.js":
/*!**************************************************************!*\
  !*** ./app/assets/hee/blocks/scaffolding/cookies/cookies.js ***!
  \**************************************************************/
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

/***/ "./app/assets/hee/blocks/scaffolding/header/navigation/subnav.js":
/*!***********************************************************************!*\
  !*** ./app/assets/hee/blocks/scaffolding/header/navigation/subnav.js ***!
  \***********************************************************************/
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
/* harmony import */ var _blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/scaffolding/cookies/cookies */ "./app/assets/hee/blocks/scaffolding/cookies/cookies.js");
/* harmony import */ var _blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/scaffolding/header/navigation/subnav */ "./app/assets/hee/blocks/scaffolding/header/navigation/subnav.js");
/* harmony import */ var _blocks_content_sidebar_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/content/sidebar/anchorlinks/anchorlinks */ "./app/assets/hee/blocks/content/sidebar/anchorlinks/anchorlinks.js");
/* harmony import */ var _blocks_content_footer_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky */ "./app/assets/hee/blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky.js");
/* harmony import */ var _blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/content/sidebar/anchorlinks/toc */ "./app/assets/hee/blocks/content/sidebar/anchorlinks/toc.js");
/* harmony import */ var _blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-listing/listing */ "./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js");
/* harmony import */ var _blocks_content_main_hee_media_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/content/main/hee-media/media */ "./app/assets/hee/blocks/content/main/hee-media/media.js");
/* harmony import */ var _blocks_content_main_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/content/main/hee-navmap/navmap */ "./app/assets/hee/blocks/content/main/hee-navmap/navmap.js");
/* harmony import */ var _blocks_content_main_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/content/main/hee-newsletter/newsletter */ "./app/assets/hee/blocks/content/main/hee-newsletter/newsletter.js");
/* harmony import */ var _blocks_content_main_card_summary_summary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/content/main/card--summary/summary */ "./app/assets/hee/blocks/content/main/card--summary/summary.js");
/* harmony import */ var _blocks_content_main_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/content/main/hee-tabs/tabs */ "./app/assets/hee/blocks/content/main/hee-tabs/tabs.js");
/* harmony import */ var _blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/content/main/table-expander/table-expander */ "./app/assets/hee/blocks/content/main/table-expander/table-expander.js");
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
// NHSUK-HEE Components



// HEE Components











// Unsorted components



// Initialize components
document.addEventListener('DOMContentLoaded', function () {
  (0,_blocks_content_main_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_content_footer_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_blocks_content_main_hee_media_media__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_content_main_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_content_main_card_summary_summary__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_content_main_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBTyxDQUFDLENBQUM7RUFDVHJDLDRGQUFNLENBQUMsQ0FBQztFQUNSaUIsa0dBQVMsQ0FBQyxDQUFDO0VBQ1hNLDZGQUFPLENBQUMsQ0FBQztFQUNUcUUsZ0ZBQUssQ0FBQyxDQUFDO0VBQ1BuUixrRkFBTSxDQUFDLENBQUM7RUFDUmtSLHdGQUFNLENBQUMsQ0FBQztFQUNSalMscUZBQVcsQ0FBQyxDQUFDO0VBQ2IwRCwwRkFBVSxDQUFDLENBQUM7RUFDWnlHLG1GQUFhLENBQUMsQ0FBQztFQUNmN0MsK0ZBQVMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9jYXJkLS1zdW1tYXJ5L3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1tZWRpYS9tZWRpYS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5hdm1hcC9uYXZtYXAuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL3RhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9hbmNob3JsaW5rcy9hbmNob3JsaW5rcy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvYW5jaG9ybGlua3MvdG9jLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvY29va2llcy9jb29raWVzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL2hlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdi5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvaGVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIGZvciBBbmNob3IgbGluayBzdGlja3kgdG9vbGJhciBhdCBib3R0b20gb2Ygdmlld3BvcnQuXG4gICAqL1xuICBjbGFzcyBBbmNob3JMaW5rc1N0aWNreSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcblxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICB0aGlzLnRvZ2dsZUJ0biA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5oZWUtYW5jaG9ybGlua3NfX3N0aWNreV9fYnRuJyk7XG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmhlZS1hbmNob3JsaW5rcycpO1xuICAgICAgdGhpcy5zaWRlYmFyQW5jaG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fcmlnaHRiYXIgLmhlZS1hbmNob3JsaW5rcycpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnRvZ2dsZVN0aWNreVRvb2xiYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyBmb3IgVE9DIGJ1dHRvbiB0b2dnbGUsIFRPQyBsaW5rIG5hdmlnYXRpb24gYW5kXG4gICAgICogdGhlIHdpbmRvdyB2aWV3cG9ydCBzY3JvbGwgdG9nZ2xlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpKVxuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnICYmIGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyAvIGhpZGVzIHRoZSBzdGlja3kgVE9DIGFuY2hvciBsaW5rcyB3aGVuIFwiVGFibGUgb2YgQ29udGVudHNcIiBidXR0b25cbiAgICAgKiB0cmlnZ2VyZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgdG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc3RpY2t5Jyk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLnF1ZXJ5U2VsZWN0b3IoJ2E6Zmlyc3Qtb2YtdHlwZScpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgVE9DIGJvdHRvbSBcInRvb2xiYXJcIiB3aGVuIHRoZSBzaWRlYmFyIFRPQyBoZWFkaW5nIGlzXG4gICAgICogb3V0c2lkZSB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgdG9nZ2xlU3RpY2t5VG9vbGJhcigpIHtcbiAgICAgIGlmICghdGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0KHRoaXMuc2lkZWJhckFuY2hvckxpbmtzLnF1ZXJ5U2VsZWN0b3IoJ2gyJykpKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgd2hldGhlciBhbiBlbGVtZW50IGlzIGluc2lkZSB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGlzRWxlbWVudEluVmlld3BvcnQoZWxlbWVudCkge1xuICAgICAgY29uc3QgYm91bmRpbmcgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3QgZWxlbWVudFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgcmV0dXJuIGJvdW5kaW5nLnRvcCA+PSAtZWxlbWVudEhlaWdodFxuICAgICAgICAmJiBib3VuZGluZy5sZWZ0ID49IC1lbGVtZW50V2lkdGhcbiAgICAgICAgJiYgYm91bmRpbmcucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgKyBlbGVtZW50V2lkdGhcbiAgICAgICAgJiYgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyBlbGVtZW50SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3NfX3N0aWNreScpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rc1N0aWNreShhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICBjbGFzcyBTdW1tYXJ5Q2FyZCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzdW1tYXJ5Q2FyZCkge1xuICAgICAgdGhpcy5zdW1tYXJ5Q2FyZCA9IHN1bW1hcnlDYXJkO1xuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy5zdW1tYXJ5Q2FyZC5xdWVyeVNlbGVjdG9yKCcuaGVlLWNhcmQtLXN1bW1hcnlfX3RvZ2dsZScpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgbGluay5cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGNsaWNrIGV2ZW50LlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlU3VtbWFyeSgpO1xuICAgICAgfSlcblxuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgbGluayBlbnRlciBhbmQgc3BhY2ViYXIga2V5IHByZXNzLlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN1bW1hcnkoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYWxsIGV4cGFuZGVyIGNvbnRlbnQgdmlzaWJpbGl0eSB3aXRoaW4gdGFibGUgY2FyZC5cbiAgICAgKi9cbiAgICB0b2dnbGVTdW1tYXJ5KCkge1xuICAgICAgdGhpcy5zdW1tYXJ5Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdkZWZhdWx0Jyk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1jYXJkLS1zdW1tYXJ5JyldLmZvckVhY2goc3VtbWFyeUNhcmQgPT4gbmV3IFN1bW1hcnlDYXJkKHN1bW1hcnlDYXJkKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1lZGlhIHRyYW5zY3JpcHRcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLmhlZS1tZWRpYS10cmFuc2NyaXB0JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBUcmFuc2NyaXB0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250YWluZXIpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZ2dsZXMpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZXMpIHtcbiAgICAgICAgdGhpcy50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZXRyYW5zY3JpcHQoZXZ0KSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xldHJhbnNjcmlwdCgpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKCkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhlZS1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlZS1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlzQ29sbGFwc2VkKCkge1xuICAgICAgaWYodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1tZWRpYV9fdHJhbnNjcmlwdCcpXS5mb3JFYWNoKHRyYW5zY3JpcHQgPT4gbmV3IFRyYW5zY3JpcHQodHJhbnNjcmlwdCkpXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNYXBcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXJlZ2lvbicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmF2TWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIHN2Zykge1xuICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICAgIHRoaXMucmVnaW9ucyA9IFsuLi5zdmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstcmVnaW9uJyldO1xuICAgICAgdGhpcy5saXN0ID0gWy4uLm1hcC5xdWVyeVNlbGVjdG9yQWxsKCcjcmVnaW9uTGlzdCBsaSBhJyldO1xuXG4gICAgICB0aGlzLmFkZExpbmtzVG9NYXAoKTtcbiAgICAgIHRoaXMuY2xlYW5TdHlsZSgpO1xuICAgICAgdGhpcy5tYXBFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5saW5rRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBjbGVhblN0eWxlKCl7XG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmlubmVySFRNTCA9IFwiXCJcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFxuICAgICAgICAuc3Qwe2ZpbGw6IzAwNUVCODtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLnN0MXtmaWxsOiNBRUI3QkQ7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5ob3ZlciAqIHtzdHJva2U6I2ZmZWIzYjtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgICAuZm9jdXMgLnN0MCB7ZmlsbDojZmZlYjNiO3N0cm9rZTojMjEyYjMyO31cbiAgICAgICAgLmZvY3VzICoge3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICBgKSlcbiAgICB9XG5cbiAgICBhZGRMaW5rc1RvTWFwKCl7XG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHJlZ2lvbi5pZClcbiAgICAgICAgY29uc3QgdGhpc0hyZWYgPSAodGhpc0NvdW50ZXJwYXJ0LmhyZWYpPyB0aGlzQ291bnRlcnBhcnQuaHJlZiA6IFwiL1wiXG4gICAgICAgIGNvbnN0IHRoaXNUaXRsZSA9ICh0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MKT8gdGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCA6IFwiXCJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSByZWdpb24uaW5uZXJIVE1MO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IGA8YSB4bGluazpocmVmPVwiJHt0aGlzSHJlZn1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgICAgICA8dGl0bGU+JHt0aGlzVGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAke2NoaWxkcmVufVxuICAgICAgICA8L2E+YFxuICAgICAgICByZWdpb24uaW5uZXJIVE1MID0gd3JhcExpbmtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWFwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5tYXBJbihlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4gdGhpcy5tYXBPdXQoZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHRoaXMubWFwQ2xpY2soZXZlbnQpKSlcbiAgICB9XG5cbiAgICBsaW5rRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiaG92ZXJcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiaG92ZXJcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImZvY3VzXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImZvY3VzXCIpKSlcbiAgICB9XG5cbiAgICBtb3ZlVG9Ub3Aob2JqKSB7XG4gICAgICBvYmoucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChvYmopO1xuICAgIH1cblxuICAgIG1hcEluKHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGhpcy5tb3ZlVG9Ub3AodGFyZ2V0KVxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcE91dCh0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBDbGljayhldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgdGhpc01hcENvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChldmVudC50YXJnZXQuY2xvc2VzdChcImdcIikuaWQpXG4gICAgICBpZih0aGlzTWFwQ291bnRlcnBhcnQpIHRoaXNNYXBDb3VudGVycGFydC5jbGljaygpXG4gICAgfVxuXG4gICAgbWFwQ291bnRlcnBhcnQodGhpc0lkKSB7XG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLmxpc3QuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXNJZClcbiAgICAgIHJldHVybiAodGhpc0NvdW50ZXJwYXJ0KVxuICAgIH1cblxuICAgIGxpbmtFdmVudCh0YXJnZXQsIGRpcmVjdGlvbiwgdHlwZSkge1xuICAgICAgY29uc3QgdGhpc0lkID0gdGFyZ2V0LmlkXG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLmxpbmtDb3VudGVycGFydCh0aGlzSWQpXG4gICAgICBpZihkaXJlY3Rpb24gPT09IFwiaW5cIikge1xuICAgICAgICB0aGlzLm1hcEluKHRoaXNDb3VudGVycGFydCwgdHlwZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFwT3V0KHRoaXNDb3VudGVycGFydCwgdHlwZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rQ291bnRlcnBhcnQodGhpc0lkKSB7XG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLnJlZ2lvbnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXNJZClcbiAgICAgIHJldHVybiAodGhpc0NvdW50ZXJwYXJ0KVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstbWFwJyldLmZvckVhY2gobWFwID0+IHtcbiAgICAvLyBuZWVkIHRvIHdhaXQgZm9yIFNWRyB0byBsb2FkXG4gICAgY29uc3Qgb2JqID0gbWFwLnF1ZXJ5U2VsZWN0b3IoJ29iamVjdCcpXG4gICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgY29uc3Qgc3ZnID0gb2JqLmdldFNWR0RvY3VtZW50KCkucXVlcnlTZWxlY3Rvcignc3ZnJylcbiAgICAgIGlmKHN2Zyl7XG4gICAgICAgIG5ldyBOYXZNYXAobWFwLCBzdmcpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE5ld3NsZXR0ZXJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnbmhzdWstbmV3c2xldHRlci1mb3JtJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOZXdzbGV0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihuZXdzbGV0dGVyKSB7XG4gICAgICB0aGlzLm5ld3NsZXR0ZXIgPSBuZXdzbGV0dGVyO1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cyA9IG5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbChcIltyZXF1aXJlZF1cIik7XG4gICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB3aW5kb3cucmVjYXB0Y2hhQ2FsbGJhY2sgPSB0aGlzLnJlY2FwdGNoYUNhbGxiYWNrXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50cygpICAgICAgO1xuICAgIH1cbiAgICBcbiAgICBhZGRFdmVudHMoKSB7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgYyA9PiB0aGlzLnZhbGlkYXRlKGMudGFyZ2V0KSk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHZhbGlkYXRlKHRhcmdldCkge1xuICAgICAgdmFyIHRhcmdldEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcnMtXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgdmFyIHRhcmdldFN1bW1hcnlFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeS1cIit0YXJnZXQubmFtZSk7XG4gICAgICBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJmaXJzdG5hbWVcIiB8fCB0YXJnZXQubmFtZSA9PSBcImxhc3RuYW1lXCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0YXJnZXQubmFtZSA9PSBcImVtYWlsXCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckVtYWlsKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0YXJnZXQubmFtZSA9PSBcImNvbnNlbnRcIikge1xuICAgICAgICB0aGlzLmVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVTdW1tYXJ5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3VtbWFyeSgpIHtcbiAgICAgIHZhciBlcnJvclN1bW1hcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnlcIik7XG4gICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMClcbiAgICAgIHsgICAgICAgIFxuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICh0aGlzLmlzRW1wdHkodGFyZ2V0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtYWlsKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICBpZiAoIXJlLnRlc3QodGFyZ2V0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAoIXRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQubmFtZSk7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KHN0cikge1xuICAgICAgcmV0dXJuICFzdHIudHJpbSgpLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLW1lc3NhZ2UnKTtcbiAgICAgIGVycm9ycy5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvckNsYXNzZXMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICBlcnJvckNsYXNzZXMuZm9yRWFjaChlcnJvcmNsYXNzID0+IHtcbiAgICAgICAgZXJyb3JjbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeSA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3Itc3VtbWFyeScpO1xuICAgICAgZXJyb3JTdW1tYXJ5LmZvckVhY2goZXJyb3JzdW1tYXJ5ID0+IHtcbiAgICAgICAgZXJyb3JzdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5SXRlbXMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yLXN1bW1hcnktaXRlbScpO1xuICAgICAgZXJyb3JTdW1tYXJ5SXRlbXMuZm9yRWFjaChzdW1tYXJ5aXRlbSA9PiB7XG4gICAgICAgIHN1bW1hcnlpdGVtLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZWNhcHRjaGFDYWxsYmFjaygpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jbmV3c2xldHRlci1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstbmV3c2xldHRlci1mb3JtJyldLmZvckVhY2goKG5ld3NsZXR0ZXIpID0+IG5ldyBOZXdzbGV0dGVyKG5ld3NsZXR0ZXIpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgKiBUYWJzXHJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXRhYnMnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXHJcbiAgKi9cclxuICBjbGFzcyBUYWJzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhYmNvbXBvbmVudCwgaSkge1xyXG4gICAgICB0aGlzLnRhYmNvbXBvbmVudCA9IHRhYmNvbXBvbmVudFxyXG4gICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYlwiXScpXHJcbiAgICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInRhYmxpc3RcIl0nKVxyXG4gICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMgPT4gdGhpcy5jaGFuZ2VUYWJzKGMpKVxyXG4gICAgICB9KVxyXG4gICAgICBsZXQgdGFiRm9jdXMgPSAwXHJcbiAgICAgIHRhYkxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XHJcbiAgICAgICAgLy8gTW92ZSByaWdodFxyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIC0xKVxyXG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMrK1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgZW5kLCBnbyB0byB0aGUgc3RhcnRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzID49IHRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTW92ZSBsZWZ0XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMtLVxyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgc3RhcnQsIG1vdmUgdG8gdGhlIGVuZFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSB0YWJzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMClcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLmZvY3VzKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRhYnMoZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2cocGFyZW50KTtcclxuICAgICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhncmFuZHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVswXTtcclxuICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWQpXHJcbiAgICAgIGNvbnN0IGlzX21vYmlsZSA9IGdyYW5kcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstdGFic19fbW9iaWxlJyk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coaXNfbW9iaWxlKVxyXG5cclxuICAgICAgLy8gQ29tcGFyZSBzZWxlY3RlZCBhbmQgdGFyZ2V0LCBhbmQgaWYgb24gbW9iaWxlXHJcbiAgICAgIC8vIENsb3NlIHRoZSB0YWIgaWYgYWxyZWFkeSBvcGVuXHJcbiAgICAgIGlmKHRhcmdldCA9PSBzZWxlY3RlZCAmJiBpc19tb2JpbGUpIHtcclxuICAgICAgICAvLyBVbnNlbGVjdCBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgY3VycmVudCBzZWxlY3RlZCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNldCB0aGlzIHRhYiBhcyBzZWxlY3RlZFxyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQodGFyZ2V0KVxyXG5cclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWIgcGFuZWxzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0aGUgc2VsZWN0ZWQgcGFuZWxcclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RlZChncmFuZHBhcmVudC5wYXJlbnROb2RlLCB0YXJnZXQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJylcclxuICAgICAgICAuZm9yRWFjaCh0ID0+IHQuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBmYWxzZSkpO1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVxyXG4gICAgICAgIC5mb3JFYWNoKGMgPT4gYy5jbGFzc0xpc3QucmVtb3ZlKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIHRydWUpXHJcbiAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVUYWJzKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJwYW5lbFwiXScpXHJcbiAgICAgICAgLmZvckVhY2gocCA9PiBwLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCB0cnVlKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2VsZWN0ZWQoZWxlLCB0YXJnZXQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApKVxyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YClcclxuICAgICAgICAucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnMnKV0uZm9yRWFjaCgodGFicywgaSkgPT4gbmV3IFRhYnModGFicywgaSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIHByb3ZpZGluZyB0aGUgXCJleHBhbmQgYWxsXCIgdG9nZ2xlIGZ1bmN0aW9uYWxpdHkgZm9yIHRhYmxlXG4gICAqIGNhcmRzLlxuICAgKi9cbiAgY2xhc3MgVGFibGVDYXJkIHtcblxuICAgIGNvbnN0cnVjdG9yKHRhYmxlQ2FyZCkge1xuICAgICAgdGhpcy50YWJsZUNhcmQgPSB0YWJsZUNhcmQ7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLnRhYmxlQ2FyZC5xdWVyeVNlbGVjdG9yKCcuaGVlLXRhYmxlLWV4cGFuZGVyX190b2dnbGUgYScpO1xuICAgICAgdGhpcy5leHBhbmRlcnMgPSB0aGlzLnRhYmxlQ2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXhwYW5kZXInKTtcbiAgICAgIHRoaXMuc3RhdGVPcGVuID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLnRvZ2dsZUxpbmsgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbjtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmluaXRFeHBhbmRlck9ic2VydmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgbGluayBhbmQgc3VtbWFyeSBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGNsaWNrIGV2ZW50LlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZXJzKCk7XG4gICAgICB9KVxuXG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBsaW5rIGVudGVyIGFuZCBzcGFjZWJhciBrZXkgcHJlc3MuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZXJzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2UgdXNlIG9ic2VydmVycyB0byByZWFjdCB0byBjbGljayBldmVudHMgb24gaW5kaXZpZHVhbCBleHBhbmRlcnMsIGFzIHRoaXNcbiAgICAgKiBldmVudCBmdW5jdGlvbmFsaXR5IGlzIGhhbmRsZWQgYnkgdGhlIG5oc3VrLWRldGFpbHMgY29tcG9uZW50J3MgamF2YXNjcmlwdC5cbiAgICAgKi9cbiAgICBpbml0RXhwYW5kZXJPYnNlcnZlcigpIHtcbiAgICAgIC8vIENvbmZpZ3VyZSBvYnNlcnZlciB0byByZWFjdCB0byBjaGFuZ2VzIGluIGFuIGV4cGFuZGVyJ3MgXCJvcGVuXCIgYXR0cmlidXRlLlxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zTGlzdCkgPT4ge1xuICAgICAgICBtdXRhdGlvbnNMaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnb3BlbicpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9nZ2xlU3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZXhwYW5kZXIsIHthdHRyaWJ1dGVzOiB0cnVlfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYWxsIGV4cGFuZGVyIGNvbnRlbnQgdmlzaWJpbGl0eSB3aXRoaW4gdGFibGUgY2FyZC5cbiAgICAgKi9cbiAgICB0b2dnbGVFeHBhbmRlcnMoKSB7XG4gICAgICAvLyBPcGVuIC8gY2xvc2UgZWFjaCBleHBhbmRlciBkZXBlbmRpbmcgb24gY3VycmVudCBzdGF0ZS5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLm9wZW5FeHBhbmRlcihleHBhbmRlcikgOiB0aGlzLmNsb3NlRXhwYW5kZXIoZXhwYW5kZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRvZ2dsZSBzdGF0ZSBmbGFnLlxuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSAhdGhpcy5zdGF0ZU9wZW47XG5cbiAgICAgIC8vIFRvZ2dsZSBidXR0b24gdGV4dC5cbiAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW4gOiB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxDbG9zZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBEZXRlcm1pbmVzIHdoZXRoZXIgYWxsIGV4cGFuZGVycyBoYXZlIGJlZW4gb3BlbmVkIG9yIGNsb3NlZCBhbmQgdXBkYXRlc1xuICAgICAqICB0aGUgc3RhdGUgZmxhZyBhbmQgdG9nZ2xlIGxpbmsgdGV4dCBhY2NvcmRpbmdseS5cbiAgICAgKlxuICAgICAqICBGdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiBNdXRhdGlvbk9ic2VydmVyIGRldGVjdHMgYSBjaGFuZ2UgaW4gZXhwYW5kZXJcbiAgICAgKiAgXCJvcGVuXCIgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHVwZGF0ZVRvZ2dsZVN0YXRlKCkge1xuICAgICAgbGV0IGFsbE9wZW4gPSBmYWxzZTtcblxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgICFleHBhbmRlci5oYXNBdHRyaWJ1dGUoJ29wZW4nKSA/IGFsbE9wZW4gPSBmYWxzZSA6IGFsbE9wZW4gPSB0cnVlO1xuICAgICAgfSk7XG5cbiAgICAgICFhbGxPcGVuID8gdGhpcy5zdGF0ZU9wZW4gPSBmYWxzZSA6IHRoaXMuc3RhdGVPcGVuID0gdHJ1ZTtcbiAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW4gOiB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxDbG9zZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW5zIGFuIGV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZXhwYW5kZXIgRXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKi9cbiAgICBvcGVuRXhwYW5kZXIoZXhwYW5kZXIpIHtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fc3VtbWFyeScpO1xuICAgICAgY29uc3QgdGV4dCA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX190ZXh0Jyk7XG5cbiAgICAgIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgZXhwYW5kZXIuc2V0QXR0cmlidXRlKCdvcGVuJywgJ29wZW4nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgYW4gZXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxuICAgICAqL1xuICAgIGNsb3NlRXhwYW5kZXIoZXhwYW5kZXIpIHtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fc3VtbWFyeScpO1xuICAgICAgY29uc3QgdGV4dCA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX190ZXh0Jyk7XG5cbiAgICAgIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgZXhwYW5kZXIucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS10YWJsZS1leHBhbmRlcicpXS5mb3JFYWNoKHRhYmxlQ2FyZCA9PiBuZXcgVGFibGVDYXJkKHRhYmxlQ2FyZCkpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogQW5jaG9yTGlua3NcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWFuY2hvci1saW5rcycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgQW5jaG9yTGlua3Mge1xuICAgIGNvbnN0cnVjdG9yKGFuY2hvckxpbmtzKSB7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzID0gYW5jaG9yTGlua3M7XG5cbiAgICAgIGlmICh0aGlzLmFuY2hvckxpbmtzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuZm91bmRIZWFkaW5ncyA9IHRoaXMuZmluZEhlYWRpbmdzKGFuY2hvckxpbmtzLmRhdGFzZXQuaGVhZGluZ3MpO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEhlYWRpbmdzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFkZEFuY2hvcnNUb1BhZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmluZEhlYWRpbmdzKGhlYWRpbmdzKSB7XG4gICAgICBsZXQgZm91bmRIZWFkaW5ncyA9IFtdXG4gICAgICBpZiAoaGVhZGluZ3MpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChoZWFkaW5ncykuZm9yRWFjaCgoaGVhZGluZywgaSkgPT4ge1xuICAgICAgICAgIGlmICghaGVhZGluZy5pZCkge1xuICAgICAgICAgICAgaGVhZGluZy5pZCA9IGhlYWRpbmcuaW5uZXJUZXh0LnJlcGxhY2UoLyAuKi8sJycpLnJlcGxhY2UoL1tcXG5cXHJdL2csJycpLnJlcGxhY2UoL1xccy9nLCcnKS50b0xvd2VyQ2FzZSgpK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvdW5kSGVhZGluZ3MucHVzaChoZWFkaW5nKTtcbiAgICAgICAgfSlcbiAgICAgIH0gICAgICBcbiAgICAgIHJldHVybiBmb3VuZEhlYWRpbmdzO1xuICAgIH1cblxuICAgIGFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihoZWFkaW5nLCBzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0uc29tZShlbCA9PlxuICAgICAgICBlbCAhPT0gaGVhZGluZyAmJiBlbC5jb250YWlucyhoZWFkaW5nKVxuICAgICAgKVxuICAgIH1cblxuICAgIGFkZEFuY2hvcnNUb1BhZ2UoKSB7XG4gICAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzLmZvckVhY2goZm91bmRIZWFkaW5nID0+IHtcbiAgICAgICAgaWYgKCFmb3VuZEhlYWRpbmcuZGF0YXNldC5hbmNob3JsaW5rc2lnbm9yZVxuICAgICAgICAgICYmICFmb3VuZEhlYWRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay11LXZpc3VhbGx5LWhpZGRlbicpXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLWNhcmRfX2hlYWRpbmcnKVxuICAgICAgICAgICYmICF0aGlzLmFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihmb3VuZEhlYWRpbmcsICcubmhzdWstZ3JpZC1jb2x1bW4tb25lLXRoaXJkJykpXG4gICAgICAgIHtcbiAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGEuaHJlZiA9ICcjJytmb3VuZEhlYWRpbmcuaWQ7XG4gICAgICAgICAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSBmb3VuZEhlYWRpbmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5oc3VrLXUtdmlzdWFsbHktaGlkZGVuXCIpO1xuICAgICAgICAgIHdoaWxlIChoaWRkZW5FbGVtZW50cy5sZW5ndGggPiAwKSBoaWRkZW5FbGVtZW50c1swXS5yZW1vdmUoKTtcbiAgICAgICAgICBhLmlubmVyVGV4dCA9IGZvdW5kSGVhZGluZy5pbm5lclRleHQ7IC8vIHN0cmlwIHRhZ3NcbiAgICAgICAgICBhLmlubmVySFRNTCA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzxiclxccypbXFwvXT8+L2dpLCBcIiBcIik7IC8vIHN0cmlwIDxicj5cbiAgICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmNob3JMaW5rcy5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1hbmNob3ItbGlua3MnKV0uZm9yRWFjaChhbmNob3JMaW5rcyA9PiBuZXcgQW5jaG9yTGlua3MoYW5jaG9yTGlua3MpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIFJlc3BvbnNpYmxlIGZvciBnZW5lcmF0aW5nIHRhYmxlIG9mIGNvbnRlbnRzIGxpbmtzLlxuICAqL1xuICBjbGFzcyBUYWJsZUNvbnRlbnRzIHtcblxuICAgIGNvbnN0cnVjdG9yKHRhYmxlQ29udGVudHMpIHtcbiAgICAgIHRoaXMudGFibGVDb250ZW50cyA9IHRhYmxlQ29udGVudHM7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyU2VsZWN0b3IgPSAnLnBhZ2VfX21haW4nO1xuICAgICAgdGhpcy5oZWFkaW5nU2VsZWN0b3IgPSAnaDIudG9jX2gyJztcbiAgICAgIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yID0gJ2gzLnRvY19oMyc7XG4gICAgICB0aGlzLmhlYWRpbmdQcmVmaXggPSAnaGVlLXRvYy1oZWFkaW5nJztcblxuICAgICAgLy8gQW5jaG9yIGxpbmtzIG1hY3JvIHNldHMgdGhpcyBkYXRhIGF0dHJpYnV0ZSB3aGVuIFRPQyBpcyBmbGFnZ2VkIGFzIHRydWUuXG4gICAgICBpZiAoIXRoaXMudGFibGVDb250ZW50cy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG9jLWpzJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGF0dGVtcHQgdG8gYnVpbGQgVE9DIGxpbmtzIGlmIEgyIGFuY2hvcnMgZm91bmQgb24gcGFnZS5cbiAgICAgIGxldCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuaGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChoZWFkaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBCdWlsZCBsaW5rIHN0cnVjdHVyZSBmcm9tIERPTSBhbmQgYXBwZW5kIGdlbmVyYXRlZCBtYXJrdXAgdG8gVE9DXG4gICAgICAvLyBjb21wb25lbnQuXG4gICAgICBjb25zdCBsaW5rcyA9IHRoaXMuY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpO1xuICAgICAgdGhpcy5zZXRUb2NMaXN0TWFya3VwKGxpbmtzKTtcblxuICAgICAgLy8gQnVpbGQgYmFjayB0byB0b3AgbGlua3MgYW5kIGFwcGVuZCB0byBlYWNoIFRPQyBoZWFkaW5nIHdpdGhpbiBwYWdlXG4gICAgICAvLyBjb250ZW50LiBXZSBza2lwIHRoZSBmaXJzdCBoZWFkaW5nIG9uIHRoZSBwYWdlLlxuICAgICAgaGVhZGluZ3MgPSBbXS5zbGljZS5jYWxsKGhlYWRpbmdzLCAxKTtcbiAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpO1xuICAgICAgY29uc3Qgc3ViSGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGFpbmVyU2VsZWN0b3IgKyAnICcgKyB0aGlzLnN1YkhlYWRpbmdTZWxlY3Rvcik7XG4gICAgICBpZiAoc3ViSGVhZGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNldEJhY2tUb1RvcExpbmtzKHN1YkhlYWRpbmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYXJyYXkgb2YgaGVhZGluZyBsaW5rIGF0dHJpYnV0ZXMgYW5kIHRoZWlyIGNoaWxkcmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlTGlzdH0gICAgICBoZWFkaW5nc1xuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdFtdfVxuICAgICAqL1xuICAgIGNyZWF0ZVRvY0xpbmtzKGhlYWRpbmdzKSB7XG4gICAgICBsZXQgbGlua3MgPSBbXTtcblxuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGluZ0lkID0gdGhpcy5oZWFkaW5nUHJlZml4ICsgJy0nICsgaW5kZXg7XG5cbiAgICAgICAgLy8gU2V0IHVuaXF1ZSBpZCBmb3IgY3VycmVudCBoZWFkaW5nIEgyIGVsZW1lbnQuXG4gICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGhlYWRpbmdJZClcblxuICAgICAgICBsZXQgbGluayA9IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoaGVhZGluZyksXG4gICAgICAgICAgYW5jaG9yOiBoZWFkaW5nSWQsXG4gICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNpYmxpbmcgPSBoZWFkaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICAvLyBUcmF2ZXJzZSBET00gZm9yIEgzIGVsZW1lbnRzIGFmdGVyIGN1cnJlbnQgSDIgaGVhZGluZyBhbmQgYXBwZW5kIHRvXG4gICAgICAgIC8vIGNoaWxkcmVuIGxpbmtzIGFycmF5LlxuICAgICAgICB3aGlsZSAoc2libGluZyAmJiAhc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ3RvY19oMicpKSB7XG4gICAgICAgICAgaWYgKHNpYmxpbmcudGFnTmFtZSA9PT0gJ0gzJyAmJiBzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gzJykpIHtcblxuICAgICAgICAgICAgLy8gU2V0IHVuaXF1ZSBpZCBmb3IgY3VycmVudCBoZWFkaW5nIEgzIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBzdWJIZWFkaW5nSWQgPSBoZWFkaW5nSWQgKyAnLScgKyBjb3VudDtcbiAgICAgICAgICAgIHNpYmxpbmcuc2V0QXR0cmlidXRlKCdpZCcsIHN1YkhlYWRpbmdJZClcblxuICAgICAgICAgICAgbGluay5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0SGVhZGluZ1RpdGxlKHNpYmxpbmcpLFxuICAgICAgICAgICAgICBhbmNob3I6IHN1YkhlYWRpbmdJZCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBsaW5rcy5wdXNoKGxpbmspO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBsaW5rcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGVpdGhlciB0aGUgc2hvcnQgb3IgbG9uZyB0aXRsZSBvZiB0aGUgaGVhZGluZyBiYXNlZCBvbiBkYXRhIGF0dHIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gIGhlYWRpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSB7XG4gICAgICBsZXQgdGl0bGU7XG5cbiAgICAgIGlmIChoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG9ydC10aXRsZScpKSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5kYXRhc2V0LnNob3J0VGl0bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZSA9IGhlYWRpbmcuaW5uZXJUZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBUT0MgbWFya3VwIGFuZCBhcHBlbmRzIHRvIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXRUb2NMaXN0TWFya3VwKGxpbmtzKSB7XG4gICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2hhcy1jaGlsZHJlbicpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWUtYW5jaG9ybGlua3NfX3dyYXBwZXInKVxuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZXZyb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2hldnJvblNWRygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaXJjbGVTVkcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc3Bhbik7XG5cbiAgICAgICAgbGV0IHBhcmVudExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHBhcmVudExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgbGluay5hbmNob3IpO1xuICAgICAgICBwYXJlbnRMaW5rLmlubmVyVGV4dCA9IGxpbmsudGl0bGU7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChwYXJlbnRMaW5rKTtcblxuICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY29udGFpbmVyKTtcblxuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgbGluay5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hpbGRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICAgICAgbGV0IGNoaWxkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBpdGVtLmFuY2hvcik7XG4gICAgICAgICAgICBjaGlsZExpbmsuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcblxuICAgICAgICAgICAgY2hpbGRJdGVtLmFwcGVuZChjaGlsZExpbmspO1xuICAgICAgICAgICAgY2hpbGRMaXN0LmFwcGVuZChjaGlsZEl0ZW0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNoaWxkTGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LmFwcGVuZChsaXN0SXRlbSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzLmFwcGVuZChsaXN0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYmFjayB0byB0b3AgbGluayBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICAgKi9cbiAgICBjcmVhdGVCYWNrVG9Ub3BMaW5rKCkge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1iYWNrLXRvLXRvcCcpO1xuXG4gICAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjbWFpbmNvbnRlbnQnKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0JhY2sgdG8gdG9wJyk7XG4gICAgICBhbmNob3IuaW5uZXJUZXh0ID0gJ0JhY2sgdG8gdG9wJztcblxuICAgICAgY29udGFpbmVyLmFwcGVuZChhbmNob3IpO1xuXG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYmFjayB0byB0b3AgbGlua3MgYWJvdmUgVE9DIGhlYWRpbmdzIHdpdGhpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlTGlzdH0gICAgICBoZWFkaW5nc1xuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldEJhY2tUb1RvcExpbmtzKGhlYWRpbmdzKSB7XG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBBdm9pZHMgZHVwbGljYXRlIGJhY2sgdG8gdG9wIGxpbmtzIHdoZW4gc3RpY2t5IGlzIHByZXNlbnQuXG4gICAgICAgIGlmICghaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtaGFzLXRvcC1saW5rJykpIHtcbiAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5jcmVhdGVCYWNrVG9Ub3BMaW5rKCk7XG4gICAgICAgICAgaGVhZGluZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rLCBoZWFkaW5nKTtcbiAgICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaGV2cm9uIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENoZXZyb25TVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDggMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8cGF0aCBkPVwiTTguMDAwMTkgNi45OTk5NEM4LjAwMDk1IDcuMTMxNTUgNy45NzU3MiA3LjI2MjAxIDcuOTI1OTYgNy4zODM4NUM3Ljg3NjE5IDcuNTA1NjkgNy44MDI4NyA3LjYxNjUgNy43MTAxOSA3LjcwOTk0TDIuNzEwMTkgMTIuNzA5OUMyLjYxNjk1IDEyLjgwMzIgMi41MDYyNiAxMi44NzcxIDIuMzg0NDMgMTIuOTI3NkMyLjI2MjYxIDEyLjk3ODEgMi4xMzIwNCAxMy4wMDQgMi4wMDAxOSAxMy4wMDRDMS44NjgzMyAxMy4wMDQgMS43Mzc3NiAxMi45NzgxIDEuNjE1OTQgMTIuOTI3NkMxLjQ5NDExIDEyLjg3NzEgMS4zODM0MiAxMi44MDMyIDEuMjkwMTggMTIuNzA5OUMxLjE5Njk1IDEyLjYxNjcgMS4xMjI5OSAxMi41MDYgMS4wNzI1MyAxMi4zODQyQzEuMDIyMDYgMTIuMjYyNCAwLjk5NjA5NCAxMi4xMzE4IDAuOTk2MDk0IDExLjk5OTlDMC45OTYwOTQgMTEuODY4MSAxLjAyMjA2IDExLjczNzUgMS4wNzI1MyAxMS42MTU3QzEuMTIyOTkgMTEuNDkzOSAxLjE5Njk1IDExLjM4MzIgMS4yOTAxOCAxMS4yODk5TDUuNTkwMTkgNi45OTk5NEwxLjI5MDE4IDIuNzA5OTRDMS4xMDE4OCAyLjUyMTY0IDAuOTk2MDk0IDIuMjY2MjQgMC45OTYwOTQgMS45OTk5NEMwLjk5NjA5NCAxLjczMzY0IDEuMTAxODggMS40NzgyNSAxLjI5MDE4IDEuMjg5OTRDMS40Nzg0OSAxLjEwMTY0IDEuNzMzODggMC45OTU4NSAyLjAwMDE5IDAuOTk1ODVDMi4yNjY0OSAwLjk5NTg1IDIuNTIxODggMS4xMDE2NCAyLjcxMDE5IDEuMjg5OTRMNy43MTAxOSA2LjI4OTk0QzcuODAyODcgNi4zODMzOCA3Ljg3NjE5IDYuNDk0MiA3LjkyNTk2IDYuNjE2MDNDNy45NzU3MiA2LjczNzg3IDguMDAwOTUgNi44NjgzMyA4LjAwMDE5IDYuOTk5OTRaXCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2lyY2xlIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENpcmNsZVNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIzXCIgdmlld0JveD1cIjAgMCAzIDNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3MnKV0uZm9yRWFjaCh0YWJsZUNvbnRlbnRzID0+IG5ldyBUYWJsZUNvbnRlbnRzKHRhYmxlQ29udGVudHMpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBGaWx0ZXJcbiAgICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1maWx0ZXInIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICAqL1xuICBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIHRoaXMuY2hlY2tib3hlcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcbiAgICAgIHRoaXMuZ3JvdXBzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAnKV07XG4gICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXJfX3N1Ym1pdCcpO1xuICAgICAgdGhpcy5jbGVhclRvZ2dsZSA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXJfX2dyb3VwX19jbGVhcicpXTtcblxuICAgICAgdGhpcy5zZXRVcCgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGV2dCkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBsZWdlbmQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmllbGRzZXRfX2xlZ2VuZCcpO1xuICAgICAgICBpZiAobGVnZW5kKSB7XG4gICAgICAgICAgbGVnZW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xlR3JvdXAoZXZ0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMuY2xlYXJDaGVja2JveGVzKGV2dCkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItLWpzJyk7XG5cbiAgICAgIC8vIENsb3NlIGdyb3Vwc1xuICAgICAgLy8gdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiBncm91cC5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkodG9nZ2xlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBIaWRlIHN1Ym1pdCBidXR0b25cbiAgICAgIGlmICh0aGlzLnN1Ym1pdCkge1xuICAgICAgICB0aGlzLnN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUdyb3VwKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldnQudGFyZ2V0LmNsb3Nlc3QoJy5uaHN1ay1maWx0ZXJfX2dyb3VwJykuY2xhc3NMaXN0LnRvZ2dsZSgnbmhzdWstZmlsdGVyX19ncm91cC0tY2xvc2VkJyk7XG4gICAgfVxuXG4gICAgc2V0VXBkYXRlZEZsYWcoaXNVcGRhdGVkKSB7XG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLiB0byBlbnN1cmUgdmlld3BvcnQgcmVzZXRzXG4gICAgICAvLyBhZnRlciBmb3JtIHN1Ym1pdC5cbiAgICAgIGxldCBmbGFnRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtdXBkYXRlLWZsYWc9XCJmaWx0ZXJcIl0nKTtcbiAgICAgIGlmIChmbGFnRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBmbGFnRWxlbWVudC52YWx1ZSA9IGlzVXBkYXRlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGV2dCkge1xuICAgICAgLy8gU2V0IHNvcnQgY29udGFpbmVyIGhpZGRlbiBzY3JvbGwgZmxhZyB2YWx1ZSx0byBlbnN1cmUgdmlld3BvcnQgc2Nyb2xsc1xuICAgICAgLy8gZG93biB0byByZXN1bHRzIGxpc3RpbmdzIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgdGhpcy5zZXRVcGRhdGVkRmxhZyh0cnVlKTtcblxuICAgICAgdGhpcy5jb250YWluZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJDaGVja2JveGVzKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBldnQudGFyZ2V0O1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFsuLi50b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuXG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KTtcbiAgICB9XG5cbiAgICB0b2dnbGVDbGVhckxpbmtWaXNpYmlsaXR5KHRvZ2dsZUxpbmspIHtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBbLi4udG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcbiAgICAgICAgICB0b2dnbGVMaW5rLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXInKV0uZm9yRWFjaChmaWx0ZXIgPT4gbmV3IEZpbHRlcihmaWx0ZXIpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogRmlsdGVyVGFnXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1maWx0ZXItdGFnJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBGaWx0ZXJUYWcge1xuICAgIGNvbnN0cnVjdG9yKHRhZykge1xuICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICB0aGlzLmljb24gPSB0YWcucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlci10YWdfX2ljb24nKTtcblxuICAgICAgdGhpcy5zZXRVcCgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy50YWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB0aGlzLnJlbW92ZUZpbHRlcihldnQpKTtcbiAgICB9XG5cbiAgICByZW1vdmVGaWx0ZXIoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdmFsdWU9JyR7dGhpcy50YWcuZGF0YXNldC5maWx0ZXJ9J11gKS5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja2JveC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGFnLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHNldFVwKCkge1xuICAgICAgdGhpcy50YWcuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLXRhZy0tanMnKTtcblxuICAgICAgaWYgKHRoaXMuaWNvbikge1xuICAgICAgICB0aGlzLmljb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlci10YWcnKV0uZm9yRWFjaCh0YWcgPT4gbmV3IEZpbHRlclRhZyh0YWcpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBMaXN0aW5nXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstbGlzdGluZycgYW5kICcuaGVlLWxpc3RpbmdzJyBhcmUgcGFzc2VkXG4gICAqIGludG8gdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHRvZG8gUmVtb3ZlIGxlZ2FjeSByZWZlcmVuY2VzIHRvIC5uaHN1ay1saXN0aW5nIGFuZCBsb29wcyBvbmNlIGFsbCBuZXdcbiAgICogY29sbGVjdGlvbiB0ZW1wbGF0ZXMgaGF2ZSBiZWVuIGltcGxlbWVudGVkLlxuICAgKi9cbiAgY2xhc3MgTGlzdGluZyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zb3J0LCAubmhzdWstbGlzdGluZ19fc29ydCcpXS5mb3JFYWNoKGZvcm1FbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNjcm9sbFRvUmVzdWx0cygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWxlY3QnKV0uZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zdWJtaXQsIC5uaHN1ay1saXN0aW5nX19zb3J0X19zdWJtaXQnKV0uZm9yRWFjaChzdWJtaXQgPT4ge1xuICAgICAgICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgICAgIHN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRVcGRhdGVkRmxhZyhpc1VwZGF0ZWQpIHtcbiAgICAgIGxldCBmbGFnRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtdXBkYXRlLWZsYWc9XCJsaXN0aW5nXCJdJyk7XG4gICAgICBpZiAoZmxhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZmxhZ0VsZW1lbnQudmFsdWUgPSBpc1VwZGF0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUmVzdWx0cyhmb3JtRWxlbWVudCkge1xuICAgICAgLy8gU2V0IHNvcnQgY29udGFpbmVyIGhpZGRlbiBzY3JvbGwgZmxhZyB2YWx1ZSx0byBlbnN1cmUgdmlld3BvcnQgc2Nyb2xsc1xuICAgICAgLy8gZG93biB0byByZXN1bHRzIGxpc3RpbmdzIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgdGhpcy5zZXRVcGRhdGVkRmxhZyh0cnVlKTtcblxuICAgICAgZm9ybUVsZW1lbnQuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9SZXN1bHRzKCkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24pO1xuXG4gICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3Jlc3VsdHNfdXBkYXRlZCcpKSB7XG4gICAgICAgIGNvbnN0IGxpc3RpbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChsaXN0aW5nQ29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgbGlzdGluZ0NvbnRhaW5lci5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZywgLm5oc3VrLWxpc3RpbmcnKV0uZm9yRWFjaChsaXN0aW5nID0+IG5ldyBMaXN0aW5nKGxpc3RpbmcpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3MgQ29va2llcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvLyBiYW5uZXJcbiAgICAgIHRoaXMudXNlQ29va2llcyA9ICcnXG4gICAgICB0aGlzLmJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1jb29raWUtYmFubmVyJylcbiAgICAgIHRoaXMuc2hvd0Nvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0Nvb2tpZXMnKVxuICAgICAgdGhpcy5yZW1vdmVDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZUNvb2tpZXMnKVxuICAgICAgdGhpcy5ob3N0ID0gdGhpcy5nZXRIb3N0KClcblxuICAgICAgdGhpcy5jb29raWVTdGF0dXMoKVxuICAgICAgdGhpcy5zZXRDb29raWVzKClcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgICAvLyBwb2xpY3kgcGFnZVxuICAgICAgdGhpcy5TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWtfX2Nvb2tpZVN0YXR1cycpXG4gICAgICB0aGlzLkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzSW4nKVxuICAgICAgdGhpcy5PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNPdXQnKVxuXG4gICAgICB0aGlzLnRvZ2dsZVN0YXR1cygpXG4gICAgfVxuXG4gICAgY29va2llU3RhdHVzKCl7XG4gICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKVxuICAgICAgY29va2llcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGMubWF0Y2gobmV3IFJlZ0V4cCgnKF58ICljb29raWVfY29uc2VudChbXjtdKyknKSlcbiAgICAgICAgaWYobWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBjLnNwbGl0KFwiPVwiKVsxXVxuICAgICAgICAgIHRoaXMudXNlQ29va2llcyA9IHN0YXR1c1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGdldEhvc3QoKXtcbiAgICAgIGNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdC50b1N0cmluZygpLnNwbGl0KFwiOlwiKVswXVxuICAgICAgcmV0dXJuIGhvc3RcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmKHRoaXMuc2hvd0Nvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5zaG93Q29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnNob3dDb29raWUpXG4gICAgICB9XG4gICAgICBpZih0aGlzLnJlbW92ZUNvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMucmVtb3ZlQ29va2llKVxuICAgICAgfVxuICAgIH1cblxuICAgIGJhbm5lclNob3coKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJhbm5lckhpZGUoKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb29raWVzKCkge1xuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSAnJykge1xuICAgICAgICAgIHRoaXMuYmFubmVyU2hvdygpXG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzQWNjZXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfYWNjZXB0X2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0FjY2VwdCkge1xuICAgICAgICAgICAgYW5hbHl0aWNzQWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzRGVjbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2RlY2xpbmVfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzRGVjbGluZSkge1xuICAgICAgICAgICAgYW5hbHl0aWNzRGVjbGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9dHJ1ZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICBub0Nvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD1mYWxzZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgICBpZih0aGlzLlN0YXR1cyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc091dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzSW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gXCJmYWxzZVwiIHx8IHRoaXMudXNlQ29va2llcyA9PT0gJycgKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLkluKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5JbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlCbG9jayhpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIilcbiAgICB9XG5cbiAgICBkaXNwbGF5Tm9uZShpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpXG4gICAgfVxuXG4gICAgLy8gcmVkdW5kYW50IGJ1dCB1c2VmdWxcbiAgICBzaG93Q29va2llKCkge1xuICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2tpZXMnKVxuICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gJz4gJyArIGRvY3VtZW50LmNvb2tpZVxuICAgIH1cbiAgICBcbiAgICByZW1vdmVDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZV9jb25zZW50PWZhbHNlOyBtYXgtYWdlPTBcIlxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgfVxuXG4gIG5ldyBDb29raWVzKGRvY3VtZW50KVxufSIsIi8qKlxuKiBTdWJOYXZcbiogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1zdWJuYXYnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4qL1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIHN1Yk5hdiB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignYScpXG4gICAgICB0aGlzLnBhcmVudExpc3QgPSB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZUxpbmspIHtcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHRoaXMudG9nZ2xlTWVudShldmVudCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudShldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3RhdGUoKXtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBhY3RpdmVFbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBpZihlbGVtICE9IHRoaXMuY29udGFpbmVyKXtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgICBlbGVtLnRvZ2dsZUF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGFjdGl2ZUVsZW1zLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3RhdGUoKVxuICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLmNvbnRhaW5lciwgXCJpcy1hY3RpdmVcIilcbiAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKHRoaXMuY29udGFpbmVyLCBcImFyaWEtZXhwYW5kZWRcIilcbiAgICB9XG5cbiAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICAgIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm5cbiAgICAgIGNvbnN0IGhhc0NsYXNzID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICAgICAgaWYgKGhhc0NsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyKSB7XG4gICAgICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGF0dHIgYXJlIG1pc3NpbmdcbiAgICAgIGlmICghZWxlbWVudCB8fCAhYXR0cikgcmV0dXJuXG4gICAgICAvLyBUb2dnbGUgYXR0cmlidXRlIHZhbHVlLiBUcmVhdCBubyBleGlzdGluZyBhdHRyIHNhbWUgYXMgd2hlbiBzZXQgdG8gZmFsc2VcbiAgICAgIGNvbnN0IHZhbHVlID0gKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZScpID8gJ2ZhbHNlJyA6ICd0cnVlJ1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstc3VibmF2JyldLmZvckVhY2goc3VibmF2ID0+IG5ldyBzdWJOYXYoc3VibmF2KSlcblxuICAvKiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSkgKi9cblxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLW1lbnVcIik7XG5cbiAgY2xvc2VNZW51ICYmIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdXNlcklucHV0KGV2ZW50KVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB1c2VySW5wdXQpIFxuICBcbiAgZnVuY3Rpb24gdXNlcklucHV0KGV2ZW50KSB7XG4gICAgLy8gY2xvc2UgbWVudSBpZiBjbGlja2luZyBvdXRzaWRlXG4gICAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgaWYob3Blbk1lbnUpe1xuICAgICAgY29uc3QgaXNOb3RNZW51ID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuTWVudVxuICAgICAgY29uc3QgaXNOb3RNZW51QnV0dG9uID0gZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpXG4gICAgICBjb25zdCBpc01lbnVDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgICBpZihpc05vdE1lbnUgJiYgaXNOb3RNZW51QnV0dG9uICYmICFpc01lbnVDaGlsZCl7XG4gICAgICAgIG9wZW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zaG93XCIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNsb3NlIHN1YiBuYXYgaWYgY2xpY2tpbmcgYW55d2hlcmUgb24gdGhlIGRvY3VtZW50IGV4Y2VwdCB0aGUgb3BlbiBvciBhIG5ldyBzdWJuYXZcbiAgICBjb25zdCBvcGVuU3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgaWYob3BlblN1Yil7XG4gICAgICBjb25zdCBpc05vdFN1YiA9IGV2ZW50LnRhcmdldCAhPT0gb3BlblN1YlxuICAgICAgY29uc3QgaXNTdWJDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGlmKGlzTm90U3ViICYmICFpc1N1YkNoaWxkKXtcbiAgICAgICAgb3BlblN1Yi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLWxpc3RcIikuY2xhc3NMaXN0LnJlbW92ZShcInN1Ym5hdi1vcGVuXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBOSFNVSy1IRUUgQ29tcG9uZW50c1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvY29va2llcy9jb29raWVzJztcbmltcG9ydCBTdWJOYXYgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvaGVhZGVyL25hdmlnYXRpb24vc3VibmF2JztcblxuLy8gSEVFIENvbXBvbmVudHNcbmltcG9ydCBBbmNob3JMaW5rcyBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvYW5jaG9ybGlua3MvYW5jaG9ybGlua3MnO1xuaW1wb3J0IEFuY2hvckxpbmtzU3RpY2t5IGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2FuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3knO1xuaW1wb3J0IFRhYmxlQ29udGVudHMgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL3RvYyc7XG5pbXBvcnQgTGlzdGluZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1tZWRpYS9tZWRpYSc7XG5pbXBvcnQgTmF2TWFwIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmF2bWFwL25hdm1hcCc7XG5pbXBvcnQgTmV3c2xldHRlciBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlcic7XG5pbXBvcnQgU3VtbWFyeUNhcmQgZnJvbSBcIi4vYmxvY2tzL2NvbnRlbnQvbWFpbi9jYXJkLS1zdW1tYXJ5L3N1bW1hcnlcIjtcbmltcG9ydCBUYWJzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFicy90YWJzJztcbmltcG9ydCBUYWJsZUNhcmQgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL3RhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyJztcblxuLy8gVW5zb3J0ZWQgY29tcG9uZW50c1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXInO1xuaW1wb3J0IEZpbHRlclRhZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcnO1xuXG4vLyBJbml0aWFsaXplIGNvbXBvbmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIFRhYnMoKTtcbiAgQW5jaG9yTGlua3MoKTtcbiAgQW5jaG9yTGlua3NTdGlja3koKTtcbiAgQ29va2llcygpO1xuICBGaWx0ZXIoKTtcbiAgRmlsdGVyVGFnKCk7XG4gIExpc3RpbmcoKTtcbiAgTWVkaWEoKTtcbiAgTmF2TWFwKCk7XG4gIFN1Yk5hdigpO1xuICBTdW1tYXJ5Q2FyZCgpO1xuICBOZXdzbGV0dGVyKCk7XG4gIFRhYmxlQ29udGVudHMoKTtcbiAgVGFibGVDYXJkKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJBbmNob3JMaW5rc1N0aWNreSIsImNvbnRhaW5lciIsIl9jbGFzc0NhbGxDaGVjayIsInRvZ2dsZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJzdGlja3lBbmNob3JMaW5rcyIsInNpZGViYXJBbmNob3JMaW5rcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJ0b2dnbGVTdGlja3lUb29sYmFyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVTdGlja3lBbmNob3JMaW5rcyIsImV2ZW50Iiwia2V5Q29kZSIsInRhcmdldCIsInRhZ05hbWUiLCJ3aW5kb3ciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJmb2N1cyIsImlzRWxlbWVudEluVmlld3BvcnQiLCJhZGQiLCJyZW1vdmUiLCJlbGVtZW50IiwiYm91bmRpbmciLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbGVtZW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxlbWVudFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImNsaWVudEhlaWdodCIsIl90b0NvbnN1bWFibGVBcnJheSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiYW5jaG9yTGlua3MiLCJTdW1tYXJ5Q2FyZCIsInN1bW1hcnlDYXJkIiwidG9nZ2xlTGluayIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlU3VtbWFyeSIsIlRyYW5zY3JpcHQiLCJ0b2dnbGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJldnQiLCJ0b2dnbGV0cmFuc2NyaXB0IiwiaXNDb2xsYXBzZWQiLCJjb250YWlucyIsInRyYW5zY3JpcHQiLCJOYXZNYXAiLCJtYXAiLCJzdmciLCJyZWdpb25zIiwibGlzdCIsImFkZExpbmtzVG9NYXAiLCJjbGVhblN0eWxlIiwibWFwRXZlbnRMaXN0ZW5lcnMiLCJsaW5rRXZlbnRMaXN0ZW5lcnMiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwicmVnaW9uIiwidGhpc0NvdW50ZXJwYXJ0IiwibWFwQ291bnRlcnBhcnQiLCJpZCIsInRoaXNIcmVmIiwiaHJlZiIsInRoaXNUaXRsZSIsImNoaWxkcmVuIiwid3JhcExpbmsiLCJjb25jYXQiLCJfdGhpczIiLCJtYXBJbiIsIm1hcE91dCIsIm1hcENsaWNrIiwiX3RoaXMzIiwiaXRlbSIsImxpbmtFdmVudCIsIm1vdmVUb1RvcCIsIm9iaiIsInBhcmVudEVsZW1lbnQiLCJzdHlsZSIsInRoaXNMaW5rIiwidGhpc01hcENvdW50ZXJwYXJ0IiwiY2xvc2VzdCIsImNsaWNrIiwidGhpc0lkIiwiZmluZCIsImRpcmVjdGlvbiIsInR5cGUiLCJsaW5rQ291bnRlcnBhcnQiLCJnZXRTVkdEb2N1bWVudCIsIk5ld3NsZXR0ZXIiLCJuZXdzbGV0dGVyIiwicmVxdWlyZWRJbnB1dHMiLCJlcnJvcnMiLCJpbml0IiwicmVjYXB0Y2hhQ2FsbGJhY2siLCJyZXNldEZvcm0iLCJhZGRFdmVudHMiLCJpbnB1dCIsImMiLCJ2YWxpZGF0ZSIsInRhcmdldEVycm9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJuYW1lIiwidGFyZ2V0U3VtbWFyeUVycm9yIiwiZXJyb3JFbXB0eSIsImVycm9yRW1haWwiLCJlcnJvckNvbnNlbnQiLCJ1cGRhdGVTdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5IiwibGVuZ3RoIiwiZGlzcGxheSIsImlzRW1wdHkiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJyZSIsInRlc3QiLCJjaGVja2VkIiwiZmlsdGVyIiwicHVzaCIsInN0ciIsInRyaW0iLCJlcnJvciIsImVycm9yQ2xhc3NlcyIsImVycm9yY2xhc3MiLCJlcnJvcnN1bW1hcnkiLCJlcnJvclN1bW1hcnlJdGVtcyIsInN1bW1hcnlpdGVtIiwicmVtb3ZlQXR0cmlidXRlIiwiVGFicyIsInRhYmNvbXBvbmVudCIsImkiLCJ0YWJzIiwidGFiTGlzdCIsInRhYiIsImNoYW5nZVRhYnMiLCJ0YWJGb2N1cyIsImUiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiZ3JhbmRwYXJlbnQiLCJzZWxlY3RlZCIsImlzX21vYmlsZSIsInJlbW92ZVNlbGVjdGVkIiwiaGlkZVRhYnMiLCJzZXRTZWxlY3RlZCIsInNob3dTZWxlY3RlZCIsImVsZSIsInQiLCJwIiwiVGFibGVDYXJkIiwidGFibGVDYXJkIiwiZXhwYW5kZXJzIiwic3RhdGVPcGVuIiwiaW5uZXJUZXh0IiwiZGF0YXNldCIsImxhYmVsT3BlbiIsImluaXRFeHBhbmRlck9ic2VydmVyIiwidG9nZ2xlRXhwYW5kZXJzIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zTGlzdCIsIm11dGF0aW9uIiwiYXR0cmlidXRlTmFtZSIsInVwZGF0ZVRvZ2dsZVN0YXRlIiwiZXhwYW5kZXIiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsIm9wZW5FeHBhbmRlciIsImNsb3NlRXhwYW5kZXIiLCJsYWJlbENsb3NlIiwiYWxsT3BlbiIsImhhc0F0dHJpYnV0ZSIsInN1bW1hcnkiLCJ0ZXh0IiwiQW5jaG9yTGlua3MiLCJoaWRkZW4iLCJmb3VuZEhlYWRpbmdzIiwiZmluZEhlYWRpbmdzIiwiaGVhZGluZ3MiLCJhZGRBbmNob3JzVG9QYWdlIiwiaGVhZGluZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbiIsInNlbGVjdG9yIiwic29tZSIsImVsIiwidWwiLCJjcmVhdGVFbGVtZW50IiwiZm91bmRIZWFkaW5nIiwiYW5jaG9ybGlua3NpZ25vcmUiLCJsaSIsImEiLCJoaWRkZW5FbGVtZW50cyIsIlRhYmxlQ29udGVudHMiLCJ0YWJsZUNvbnRlbnRzIiwiY29udGFpbmVyU2VsZWN0b3IiLCJoZWFkaW5nU2VsZWN0b3IiLCJzdWJIZWFkaW5nU2VsZWN0b3IiLCJoZWFkaW5nUHJlZml4IiwibGlua3MiLCJjcmVhdGVUb2NMaW5rcyIsInNldFRvY0xpc3RNYXJrdXAiLCJzbGljZSIsImNhbGwiLCJzZXRCYWNrVG9Ub3BMaW5rcyIsInN1YkhlYWRpbmdzIiwiaW5kZXgiLCJoZWFkaW5nSWQiLCJsaW5rIiwidGl0bGUiLCJnZXRIZWFkaW5nVGl0bGUiLCJhbmNob3IiLCJzaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY291bnQiLCJzdWJIZWFkaW5nSWQiLCJzaG9ydFRpdGxlIiwibGlzdEl0ZW0iLCJzcGFuIiwiZ2V0Q2hldnJvblNWRyIsImdldENpcmNsZVNWRyIsImFwcGVuZCIsInBhcmVudExpbmsiLCJjaGlsZExpc3QiLCJjaGlsZEl0ZW0iLCJjaGlsZExpbmsiLCJjcmVhdGVCYWNrVG9Ub3BMaW5rIiwiaW5zZXJ0QmVmb3JlIiwiRmlsdGVyIiwiY2hlY2tib3hlcyIsImdyb3VwcyIsInN1Ym1pdCIsImNsZWFyVG9nZ2xlIiwic2V0VXAiLCJjaGVja2JveCIsInVwZGF0ZVJlc3VsdHMiLCJncm91cCIsImxlZ2VuZCIsInRvZ2dsZUdyb3VwIiwiY2xlYXJDaGVja2JveGVzIiwidG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSIsInNldFVwZGF0ZWRGbGFnIiwiaXNVcGRhdGVkIiwiZmxhZ0VsZW1lbnQiLCJjYiIsIkZpbHRlclRhZyIsInRhZyIsImljb24iLCJyZW1vdmVGaWx0ZXIiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJMaXN0aW5nIiwiZm9ybUVsZW1lbnQiLCJ0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMiLCJzY3JvbGxUb1Jlc3VsdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNlbGVjdCIsInVybCIsIlVSTCIsImxvY2F0aW9uIiwic2VhcmNoUGFyYW1zIiwiaGFzIiwibGlzdGluZ0NvbnRhaW5lciIsInNjcm9sbEludG9WaWV3IiwibGlzdGluZyIsIkNvb2tpZXMiLCJ1c2VDb29raWVzIiwiYmFubmVyIiwic2hvd0Nvb2tpZXMiLCJyZW1vdmVDb29raWVzIiwiaG9zdCIsImdldEhvc3QiLCJjb29raWVTdGF0dXMiLCJzZXRDb29raWVzIiwiU3RhdHVzIiwiSW4iLCJPdXQiLCJ0b2dnbGVTdGF0dXMiLCJjb29raWVzIiwiY29va2llIiwic3BsaXQiLCJtYXRjaCIsIlJlZ0V4cCIsInN0YXR1cyIsInRvU3RyaW5nIiwic2hvd0Nvb2tpZSIsInJlbW92ZUNvb2tpZSIsImJhbm5lclNob3ciLCJiYW5uZXJIaWRlIiwiYW5hbHl0aWNzQWNjZXB0IiwidXNlQ29va2llIiwiYW5hbHl0aWNzRGVjbGluZSIsIm5vQ29va2llIiwicmVsb2FkIiwiZGlzcGxheUJsb2NrIiwiZGlzcGxheU5vbmUiLCJvdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN1Yk5hdiIsInBhcmVudExpc3QiLCJ0b2dnbGVNZW51IiwiaGFuZGxlU3RhdGUiLCJhY3RpdmVFbGVtcyIsImVsZW0iLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImNsYXNzTmFtZSIsImhhc0NsYXNzIiwiYXR0ciIsInN1Ym5hdiIsImNsb3NlTWVudSIsInVzZXJJbnB1dCIsIm9wZW5NZW51IiwiaXNOb3RNZW51IiwiaXNOb3RNZW51QnV0dG9uIiwiaXNNZW51Q2hpbGQiLCJvcGVuU3ViIiwiaXNOb3RTdWIiLCJpc1N1YkNoaWxkIiwiU3ViTmF2IiwiTWVkaWEiXSwic291cmNlUm9vdCI6IiJ9