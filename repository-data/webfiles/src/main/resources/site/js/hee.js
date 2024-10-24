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
      this.footer = document.querySelector('.nhsuk-footer');
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
        var tocBlockVisible = this.isElementInViewport(this.sidebarAnchorLinks.querySelector('h2'));
        var footerVisible = this.footer && this.isElementInViewport(this.footer);
        if (!tocBlockVisible && !footerVisible) {
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
        if (target.name == "name") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztFQUNYVyw2RkFBTyxDQUFDLENBQUM7RUFDVHFFLGdGQUFLLENBQUMsQ0FBQztFQUNQalQsa0ZBQU0sQ0FBQyxDQUFDO0VBQ1JnVCxrR0FBTSxDQUFDLENBQUM7RUFDUi9ULHlGQUFXLENBQUMsQ0FBQztFQUNiMEQsMEZBQVUsQ0FBQyxDQUFDO0VBQ1o4Ryx1RkFBYSxDQUFDLENBQUM7RUFDZnZFLG1HQUFTLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9mb290ZXIvaGVlLWFuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3kuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1jYXJkLS1zdW1tYXJ5L3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1tZWRpYS9tZWRpYS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5hdm1hcC9uYXZtYXAuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJsZS1leHBhbmRlci90YWJsZS1leHBhbmRlci5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYnMvdGFicy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvaGVlLWFuY2hvcmxpbmtzL2FuY2hvcmxpbmtzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvdG9jLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWNvb2tpZXMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9uaHN1ay1oZWUtaGVhZGVyL25hdmlnYXRpb24vc3VibmF2LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9oZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIEFuY2hvciBsaW5rIHN0aWNreSB0b29sYmFyIGF0IGJvdHRvbSBvZiB2aWV3cG9ydC5cbiAgICovXG4gIGNsYXNzIEFuY2hvckxpbmtzU3RpY2t5IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgIHRoaXMudG9nZ2xlQnRuID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignYnV0dG9uLmhlZS1hbmNob3JsaW5rc19fc3RpY2t5X19idG4nKTtcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGVlLWFuY2hvcmxpbmtzJyk7XG4gICAgICB0aGlzLnNpZGViYXJBbmNob3JMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19yaWdodGJhciAuaGVlLWFuY2hvcmxpbmtzJyk7XG4gICAgICB0aGlzLmZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1mb290ZXInKTtcblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgZm9yIFRPQyBidXR0b24gdG9nZ2xlLCBUT0MgbGluayBuYXZpZ2F0aW9uIGFuZFxuICAgICAqIHRoZSB3aW5kb3cgdmlld3BvcnQgc2Nyb2xsIHRvZ2dsZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKSlcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyAmJiBldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreVRvb2xiYXIoKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgc3RpY2t5IFRPQyBhbmNob3IgbGlua3Mgd2hlbiBcIlRhYmxlIG9mIENvbnRlbnRzXCIgYnV0dG9uXG4gICAgICogdHJpZ2dlcmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkge1xuICAgICAgdGhpcy50b2dnbGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXN0aWNreScpO1xuXG4gICAgICBpZiAodGhpcy5jb250YWluZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdhOmZpcnN0LW9mLXR5cGUnKS5mb2N1cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIC8gaGlkZXMgdGhlIFRPQyBib3R0b20gXCJ0b29sYmFyXCIgd2hlbiB0aGUgc2lkZWJhciBUT0MgaGVhZGluZyBpc1xuICAgICAqIG91dHNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHRvZ2dsZVN0aWNreVRvb2xiYXIoKSB7XG4gICAgICBjb25zdCB0b2NCbG9ja1Zpc2libGUgPSB0aGlzLmlzRWxlbWVudEluVmlld3BvcnQodGhpcy5zaWRlYmFyQW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignaDInKSk7XG4gICAgICBjb25zdCBmb290ZXJWaXNpYmxlID0gdGhpcy5mb290ZXIgJiYgdGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0KHRoaXMuZm9vdGVyKTtcblxuICAgICAgaWYgKCF0b2NCbG9ja1Zpc2libGUgJiYgIWZvb3RlclZpc2libGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgaXNFbGVtZW50SW5WaWV3cG9ydChlbGVtZW50KSB7XG4gICAgICBjb25zdCBib3VuZGluZyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zdCBlbGVtZW50V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICByZXR1cm4gYm91bmRpbmcudG9wID49IC1lbGVtZW50SGVpZ2h0XG4gICAgICAgICYmIGJvdW5kaW5nLmxlZnQgPj0gLWVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSArIGVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIGVsZW1lbnRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rc19fc3RpY2t5JyldLmZvckVhY2goYW5jaG9yTGlua3MgPT4gbmV3IEFuY2hvckxpbmtzU3RpY2t5KGFuY2hvckxpbmtzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXG4gIGNsYXNzIFN1bW1hcnlDYXJkIHtcblxuICAgIGNvbnN0cnVjdG9yKHN1bW1hcnlDYXJkKSB7XG4gICAgICB0aGlzLnN1bW1hcnlDYXJkID0gc3VtbWFyeUNhcmQ7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLnN1bW1hcnlDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtY2FyZC0tc3VtbWFyeV9fdG9nZ2xlJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVTdW1tYXJ5KCk7XG4gICAgICB9KVxuXG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBsaW5rIGVudGVyIGFuZCBzcGFjZWJhciBrZXkgcHJlc3MuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3VtbWFyeSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZVN1bW1hcnkoKSB7XG4gICAgICB0aGlzLnN1bW1hcnlDYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2RlZmF1bHQnKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWNhcmQtLXN1bW1hcnknKV0uZm9yRWFjaChzdW1tYXJ5Q2FyZCA9PiBuZXcgU3VtbWFyeUNhcmQoc3VtbWFyeUNhcmQpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWVkaWEgdHJhbnNjcmlwdFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcuaGVlLW1lZGlhLXRyYW5zY3JpcHQnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIFRyYW5zY3JpcHQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9nZ2xlcylcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlcykge1xuICAgICAgICB0aGlzLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xldHJhbnNjcmlwdChldnQpKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGV0cmFuc2NyaXB0KCkge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQoKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaXNDb2xsYXBzZWQoKSB7XG4gICAgICBpZih0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIikpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLW1lZGlhX190cmFuc2NyaXB0JyldLmZvckVhY2godHJhbnNjcmlwdCA9PiBuZXcgVHJhbnNjcmlwdCh0cmFuc2NyaXB0KSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1hcFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstcmVnaW9uJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOYXZNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgc3ZnKSB7XG4gICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgdGhpcy5yZWdpb25zID0gWy4uLnN2Zy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1yZWdpb24nKV07XG4gICAgICB0aGlzLmxpc3QgPSBbLi4ubWFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyNyZWdpb25MaXN0IGxpIGEnKV07XG5cbiAgICAgIHRoaXMuYWRkTGlua3NUb01hcCgpO1xuICAgICAgdGhpcy5jbGVhblN0eWxlKCk7XG4gICAgICB0aGlzLm1hcEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmxpbmtFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsZWFuU3R5bGUoKXtcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgIC5zdDB7ZmlsbDojMDA1RUI4O3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuc3Qxe2ZpbGw6I0FFQjdCRDtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLmhvdmVyICoge3N0cm9rZTojZmZlYjNiO3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICAgIC5mb2N1cyAuc3QwIHtmaWxsOiNmZmViM2I7c3Ryb2tlOiMyMTJiMzI7fVxuICAgICAgICAuZm9jdXMgKiB7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgIGApKVxuICAgIH1cblxuICAgIGFkZExpbmtzVG9NYXAoKXtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQocmVnaW9uLmlkKVxuICAgICAgICBjb25zdCB0aGlzSHJlZiA9ICh0aGlzQ291bnRlcnBhcnQuaHJlZik/IHRoaXNDb3VudGVycGFydC5ocmVmIDogXCIvXCJcbiAgICAgICAgY29uc3QgdGhpc1RpdGxlID0gKHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwpPyB0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MIDogXCJcIlxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlZ2lvbi5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gYDxhIHhsaW5rOmhyZWY9XCIke3RoaXNIcmVmfVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXNUaXRsZX08L3RpdGxlPlxuICAgICAgICAgICR7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5gXG4gICAgICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3cmFwTGlua1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBtYXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm1hcEluKGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLm1hcE91dChlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdGhpcy5tYXBDbGljayhldmVudCkpKVxuICAgIH1cblxuICAgIGxpbmtFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiZm9jdXNcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiZm9jdXNcIikpKVxuICAgIH1cblxuICAgIG1vdmVUb1RvcChvYmopIHtcbiAgICAgIG9iai5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG9iaik7XG4gICAgfVxuXG4gICAgbWFwSW4odGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0aGlzLm1vdmVUb1RvcCh0YXJnZXQpXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwT3V0KHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcENsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCB0aGlzTWFwQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiZ1wiKS5pZClcbiAgICAgIGlmKHRoaXNNYXBDb3VudGVycGFydCkgdGhpc01hcENvdW50ZXJwYXJ0LmNsaWNrKClcbiAgICB9XG5cbiAgICBtYXBDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50KHRhcmdldCwgZGlyZWN0aW9uLCB0eXBlKSB7XG4gICAgICBjb25zdCB0aGlzSWQgPSB0YXJnZXQuaWRcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlua0NvdW50ZXJwYXJ0KHRoaXNJZClcbiAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJpblwiKSB7XG4gICAgICAgIHRoaXMubWFwSW4odGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXBPdXQodGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMucmVnaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1tYXAnKV0uZm9yRWFjaChtYXAgPT4ge1xuICAgIC8vIG5lZWQgdG8gd2FpdCBmb3IgU1ZHIHRvIGxvYWRcbiAgICBjb25zdCBvYmogPSBtYXAucXVlcnlTZWxlY3Rvcignb2JqZWN0JylcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBzdmcgPSBvYmouZ2V0U1ZHRG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgICAgaWYoc3ZnKXtcbiAgICAgICAgbmV3IE5hdk1hcChtYXAsIHN2ZylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTmV3c2xldHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICduaHN1ay1uZXdzbGV0dGVyLWZvcm0nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5ld3NsZXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5ld3NsZXR0ZXIpIHtcbiAgICAgIHRoaXMubmV3c2xldHRlciA9IG5ld3NsZXR0ZXI7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gbmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlcXVpcmVkXVwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHdpbmRvdy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2tcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCkgICAgICA7XG4gICAgfVxuICAgIFxuICAgIGFkZEV2ZW50cygpIHtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBjID0+IHRoaXMudmFsaWRhdGUoYy50YXJnZXQpKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGFyZ2V0KSB7XG4gICAgICB2YXIgdGFyZ2V0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9ycy1cIit0YXJnZXQubmFtZSk7XG4gICAgICB2YXIgdGFyZ2V0U3VtbWFyeUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5LVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIGlmICh0YXJnZXQubmFtZSA9PSBcIm5hbWVcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiZW1haWxcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiY29uc2VudFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN1bW1hcnkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdW1tYXJ5KCkge1xuICAgICAgdmFyIGVycm9yU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeVwiKTtcbiAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKVxuICAgICAgeyAgICAgICAgXG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgIGlmICghcmUudGVzdCh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIGlzRW1wdHkoc3RyKSB7XG4gICAgICByZXR1cm4gIXN0ci50cmltKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3ItbWVzc2FnZScpO1xuICAgICAgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yQ2xhc3NlcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIGVycm9yQ2xhc3Nlcy5mb3JFYWNoKGVycm9yY2xhc3MgPT4ge1xuICAgICAgICBlcnJvcmNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5ID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1zdW1tYXJ5Jyk7XG4gICAgICBlcnJvclN1bW1hcnkuZm9yRWFjaChlcnJvcnN1bW1hcnkgPT4ge1xuICAgICAgICBlcnJvcnN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnlJdGVtcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3Itc3VtbWFyeS1pdGVtJyk7XG4gICAgICBlcnJvclN1bW1hcnlJdGVtcy5mb3JFYWNoKHN1bW1hcnlpdGVtID0+IHtcbiAgICAgICAgc3VtbWFyeWl0ZW0uc3R5bGUuZGlzcGxheSAgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNuZXdzbGV0dGVyLWZvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1uZXdzbGV0dGVyLWZvcm0nKV0uZm9yRWFjaCgobmV3c2xldHRlcikgPT4gbmV3IE5ld3NsZXR0ZXIobmV3c2xldHRlcikpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIGZvciBwcm92aWRpbmcgdGhlIFwiZXhwYW5kIGFsbFwiIHRvZ2dsZSBmdW5jdGlvbmFsaXR5IGZvciB0YWJsZVxuICAgKiBjYXJkcy5cbiAgICovXG4gIGNsYXNzIFRhYmxlQ2FyZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNhcmQpIHtcbiAgICAgIHRoaXMudGFibGVDYXJkID0gdGFibGVDYXJkO1xuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy50YWJsZUNhcmQucXVlcnlTZWxlY3RvcignLmhlZS10YWJsZS1leHBhbmRlcl9fdG9nZ2xlIGEnKTtcbiAgICAgIHRoaXMuZXhwYW5kZXJzID0gdGhpcy50YWJsZUNhcmQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWV4cGFuZGVyJyk7XG4gICAgICB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW47XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5pbml0RXhwYW5kZXJPYnNlcnZlcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIGxpbmsgYW5kIHN1bW1hcnkgZWxlbWVudHMuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBjbGljayBldmVudC5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVycygpO1xuICAgICAgfSlcblxuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgbGluayBlbnRlciBhbmQgc3BhY2ViYXIga2V5IHByZXNzLlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVycygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIHVzZSBvYnNlcnZlcnMgdG8gcmVhY3QgdG8gY2xpY2sgZXZlbnRzIG9uIGluZGl2aWR1YWwgZXhwYW5kZXJzLCBhcyB0aGlzXG4gICAgICogZXZlbnQgZnVuY3Rpb25hbGl0eSBpcyBoYW5kbGVkIGJ5IHRoZSBuaHN1ay1kZXRhaWxzIGNvbXBvbmVudCdzIGphdmFzY3JpcHQuXG4gICAgICovXG4gICAgaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKSB7XG4gICAgICAvLyBDb25maWd1cmUgb2JzZXJ2ZXIgdG8gcmVhY3QgdG8gY2hhbmdlcyBpbiBhbiBleHBhbmRlcidzIFwib3BlblwiIGF0dHJpYnV0ZS5cbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uc0xpc3QpID0+IHtcbiAgICAgICAgbXV0YXRpb25zTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvZ2dsZVN0YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGV4cGFuZGVyLCB7YXR0cmlidXRlczogdHJ1ZX0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGFsbCBleHBhbmRlciBjb250ZW50IHZpc2liaWxpdHkgd2l0aGluIHRhYmxlIGNhcmQuXG4gICAgICovXG4gICAgdG9nZ2xlRXhwYW5kZXJzKCkge1xuICAgICAgLy8gT3BlbiAvIGNsb3NlIGVhY2ggZXhwYW5kZXIgZGVwZW5kaW5nIG9uIGN1cnJlbnQgc3RhdGUuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy5vcGVuRXhwYW5kZXIoZXhwYW5kZXIpIDogdGhpcy5jbG9zZUV4cGFuZGVyKGV4cGFuZGVyKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgc3RhdGUgZmxhZy5cbiAgICAgIHRoaXMuc3RhdGVPcGVuID0gIXRoaXMuc3RhdGVPcGVuO1xuXG4gICAgICAvLyBUb2dnbGUgYnV0dG9uIHRleHQuXG4gICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuIDogdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsQ2xvc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgRGV0ZXJtaW5lcyB3aGV0aGVyIGFsbCBleHBhbmRlcnMgaGF2ZSBiZWVuIG9wZW5lZCBvciBjbG9zZWQgYW5kIHVwZGF0ZXNcbiAgICAgKiAgdGhlIHN0YXRlIGZsYWcgYW5kIHRvZ2dsZSBsaW5rIHRleHQgYWNjb3JkaW5nbHkuXG4gICAgICpcbiAgICAgKiAgRnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gTXV0YXRpb25PYnNlcnZlciBkZXRlY3RzIGEgY2hhbmdlIGluIGV4cGFuZGVyXG4gICAgICogIFwib3BlblwiIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICB1cGRhdGVUb2dnbGVTdGF0ZSgpIHtcbiAgICAgIGxldCBhbGxPcGVuID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICAhZXhwYW5kZXIuaGFzQXR0cmlidXRlKCdvcGVuJykgPyBhbGxPcGVuID0gZmFsc2UgOiBhbGxPcGVuID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICAhYWxsT3BlbiA/IHRoaXMuc3RhdGVPcGVuID0gZmFsc2UgOiB0aGlzLnN0YXRlT3BlbiA9IHRydWU7XG4gICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuIDogdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsQ2xvc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgb3BlbkV4cGFuZGVyKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgIGV4cGFuZGVyLnNldEF0dHJpYnV0ZSgnb3BlbicsICdvcGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGFuIGV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZXhwYW5kZXIgRXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKi9cbiAgICBjbG9zZUV4cGFuZGVyKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIGV4cGFuZGVyLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtdGFibGUtZXhwYW5kZXInKV0uZm9yRWFjaCh0YWJsZUNhcmQgPT4gbmV3IFRhYmxlQ2FyZCh0YWJsZUNhcmQpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgKiBUYWJzXHJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXRhYnMnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXHJcbiAgKi9cclxuICBjbGFzcyBUYWJzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhYmNvbXBvbmVudCwgaSkge1xyXG4gICAgICB0aGlzLnRhYmNvbXBvbmVudCA9IHRhYmNvbXBvbmVudFxyXG4gICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYlwiXScpXHJcbiAgICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInRhYmxpc3RcIl0nKVxyXG4gICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMgPT4gdGhpcy5jaGFuZ2VUYWJzKGMpKVxyXG4gICAgICB9KVxyXG4gICAgICBsZXQgdGFiRm9jdXMgPSAwXHJcbiAgICAgIHRhYkxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XHJcbiAgICAgICAgLy8gTW92ZSByaWdodFxyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIC0xKVxyXG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMrK1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgZW5kLCBnbyB0byB0aGUgc3RhcnRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzID49IHRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTW92ZSBsZWZ0XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMtLVxyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgc3RhcnQsIG1vdmUgdG8gdGhlIGVuZFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSB0YWJzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMClcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLmZvY3VzKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRhYnMoZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2cocGFyZW50KTtcclxuICAgICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhncmFuZHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVswXTtcclxuICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWQpXHJcbiAgICAgIGNvbnN0IGlzX21vYmlsZSA9IGdyYW5kcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstdGFic19fbW9iaWxlJyk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coaXNfbW9iaWxlKVxyXG5cclxuICAgICAgLy8gQ29tcGFyZSBzZWxlY3RlZCBhbmQgdGFyZ2V0LCBhbmQgaWYgb24gbW9iaWxlXHJcbiAgICAgIC8vIENsb3NlIHRoZSB0YWIgaWYgYWxyZWFkeSBvcGVuXHJcbiAgICAgIGlmKHRhcmdldCA9PSBzZWxlY3RlZCAmJiBpc19tb2JpbGUpIHtcclxuICAgICAgICAvLyBVbnNlbGVjdCBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgY3VycmVudCBzZWxlY3RlZCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNldCB0aGlzIHRhYiBhcyBzZWxlY3RlZFxyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQodGFyZ2V0KVxyXG5cclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWIgcGFuZWxzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0aGUgc2VsZWN0ZWQgcGFuZWxcclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RlZChncmFuZHBhcmVudC5wYXJlbnROb2RlLCB0YXJnZXQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJylcclxuICAgICAgICAuZm9yRWFjaCh0ID0+IHQuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBmYWxzZSkpO1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVxyXG4gICAgICAgIC5mb3JFYWNoKGMgPT4gYy5jbGFzc0xpc3QucmVtb3ZlKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIHRydWUpXHJcbiAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVUYWJzKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJwYW5lbFwiXScpXHJcbiAgICAgICAgLmZvckVhY2gocCA9PiBwLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCB0cnVlKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2VsZWN0ZWQoZWxlLCB0YXJnZXQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApKVxyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YClcclxuICAgICAgICAucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnMnKV0uZm9yRWFjaCgodGFicywgaSkgPT4gbmV3IFRhYnModGFicywgaSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRIZWFkaW5ncyhoZWFkaW5ncykge1xuICAgICAgbGV0IGZvdW5kSGVhZGluZ3MgPSBbXVxuICAgICAgaWYgKGhlYWRpbmdzKSB7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgQ1NTIHNlbGVjdG9ycyBmb3Igb25seSBmaXJzdCBsZXZlbCBoZWFkaW5ncyBpbnNpZGUgcmljaC10ZXh0XG4gICAgICAgIC8vIGFyZWFzIGFuZCBvdXRzaWRlIG9mIGNvbXBvbmVudHMuXG4gICAgICAgIGNvbnN0IGhlYWRpbmdUeXBlcyA9IGhlYWRpbmdzLnNwbGl0KCcsJyk7XG4gICAgICAgIGxldCBzZWxlY3RvcnMgPSBoZWFkaW5nVHlwZXMubWFwKHR5cGUgPT4ge1xuICAgICAgICAgIHJldHVybiAnLnBhZ2VfX2NvbnRlbnQgPiAnICsgdHlwZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5qb2luKCcsICcpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fY29udGVudCcpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstYW5jaG9yLWxpbmtzJyldLmZvckVhY2goYW5jaG9yTGlua3MgPT4gbmV3IEFuY2hvckxpbmtzKGFuY2hvckxpbmtzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBSZXNwb25zaWJsZSBmb3IgZ2VuZXJhdGluZyB0YWJsZSBvZiBjb250ZW50cyBsaW5rcy5cbiAgKi9cbiAgY2xhc3MgVGFibGVDb250ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNvbnRlbnRzKSB7XG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMgPSB0YWJsZUNvbnRlbnRzO1xuXG4gICAgICB0aGlzLmNvbnRhaW5lclNlbGVjdG9yID0gJy5wYWdlX19tYWluJztcbiAgICAgIHRoaXMuaGVhZGluZ1NlbGVjdG9yID0gJ2gyLnRvY19oMic7XG4gICAgICB0aGlzLnN1YkhlYWRpbmdTZWxlY3RvciA9ICdoMy50b2NfaDMnO1xuICAgICAgdGhpcy5oZWFkaW5nUHJlZml4ID0gJ2hlZS10b2MtaGVhZGluZyc7XG5cbiAgICAgIC8vIEFuY2hvciBsaW5rcyBtYWNybyBzZXRzIHRoaXMgZGF0YSBhdHRyaWJ1dGUgd2hlbiBUT0MgaXMgZmxhZ2dlZCBhcyB0cnVlLlxuICAgICAgaWYgKCF0aGlzLnRhYmxlQ29udGVudHMuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSBhdHRlbXB0IHRvIGJ1aWxkIFRPQyBsaW5rcyBpZiBIMiBhbmNob3JzIGZvdW5kIG9uIHBhZ2UuXG4gICAgICBsZXQgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGFpbmVyU2VsZWN0b3IgKyAnICcgKyB0aGlzLmhlYWRpbmdTZWxlY3Rvcik7XG4gICAgICBpZiAoaGVhZGluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudGFibGVDb250ZW50cy5oaWRkZW4gPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmICFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gyJykpIHtcbiAgICAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSAnSDMnICYmIHNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDMnKSkge1xuXG4gICAgICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDMgZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1YkhlYWRpbmdJZCA9IGhlYWRpbmdJZCArICctJyArIGNvdW50O1xuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgc3ViSGVhZGluZ0lkKVxuXG4gICAgICAgICAgICBsaW5rLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoc2libGluZyksXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSGVhZGluZ0lkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZWl0aGVyIHRoZSBzaG9ydCBvciBsb25nIHRpdGxlIG9mIHRoZSBoZWFkaW5nIGJhc2VkIG9uIGRhdGEgYXR0ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgaGVhZGluZ1xuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpIHtcbiAgICAgIGxldCB0aXRsZTtcblxuICAgICAgaWYgKGhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLXNob3J0LXRpdGxlJykpIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmRhdGFzZXQuc2hvcnRUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5pbm5lclRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIFRPQyBtYXJrdXAgYW5kIGFwcGVuZHMgdG8gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldFRvY0xpc3RNYXJrdXAobGlua3MpIHtcbiAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGFzLWNoaWxkcmVuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1hbmNob3JsaW5rc19fd3JhcHBlcicpXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaGV2cm9uU1ZHKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENpcmNsZVNWRygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcblxuICAgICAgICBsZXQgcGFyZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcGFyZW50TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBsaW5rLmFuY2hvcik7XG4gICAgICAgIHBhcmVudExpbmsuaW5uZXJUZXh0ID0gbGluay50aXRsZTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcmVudExpbmspO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICBsaW5rLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBjaGlsZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGl0ZW0uYW5jaG9yKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgICAgICBjaGlsZEl0ZW0uYXBwZW5kKGNoaWxkTGluayk7XG4gICAgICAgICAgICBjaGlsZExpc3QuYXBwZW5kKGNoaWxkSXRlbSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY2hpbGRMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMuYXBwZW5kKGxpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBiYWNrIHRvIHRvcCBsaW5rIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZUJhY2tUb1RvcExpbmsoKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWJhY2stdG8tdG9wJyk7XG5cbiAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyNtYWluY29udGVudCcpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQmFjayB0byB0b3AnKTtcbiAgICAgIGFuY2hvci5pbm5lclRleHQgPSAnQmFjayB0byB0b3AnO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kKGFuY2hvcik7XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBiYWNrIHRvIHRvcCBsaW5rcyBhYm92ZSBUT0MgaGVhZGluZ3Mgd2l0aGluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEF2b2lkcyBkdXBsaWNhdGUgYmFjayB0byB0b3AgbGlua3Mgd2hlbiBzdGlja3kgaXMgcHJlc2VudC5cbiAgICAgICAgaWYgKCFoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnKSkge1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUJhY2tUb1RvcExpbmsoKTtcbiAgICAgICAgICBoZWFkaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGhlYWRpbmcpO1xuICAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNoZXZyb24gU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2hldnJvblNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNOC4wMDAxOSA2Ljk5OTk0QzguMDAwOTUgNy4xMzE1NSA3Ljk3NTcyIDcuMjYyMDEgNy45MjU5NiA3LjM4Mzg1QzcuODc2MTkgNy41MDU2OSA3LjgwMjg3IDcuNjE2NSA3LjcxMDE5IDcuNzA5OTRMMi43MTAxOSAxMi43MDk5QzIuNjE2OTUgMTIuODAzMiAyLjUwNjI2IDEyLjg3NzEgMi4zODQ0MyAxMi45Mjc2QzIuMjYyNjEgMTIuOTc4MSAyLjEzMjA0IDEzLjAwNCAyLjAwMDE5IDEzLjAwNEMxLjg2ODMzIDEzLjAwNCAxLjczNzc2IDEyLjk3ODEgMS42MTU5NCAxMi45Mjc2QzEuNDk0MTEgMTIuODc3MSAxLjM4MzQyIDEyLjgwMzIgMS4yOTAxOCAxMi43MDk5QzEuMTk2OTUgMTIuNjE2NyAxLjEyMjk5IDEyLjUwNiAxLjA3MjUzIDEyLjM4NDJDMS4wMjIwNiAxMi4yNjI0IDAuOTk2MDk0IDEyLjEzMTggMC45OTYwOTQgMTEuOTk5OUMwLjk5NjA5NCAxMS44NjgxIDEuMDIyMDYgMTEuNzM3NSAxLjA3MjUzIDExLjYxNTdDMS4xMjI5OSAxMS40OTM5IDEuMTk2OTUgMTEuMzgzMiAxLjI5MDE4IDExLjI4OTlMNS41OTAxOSA2Ljk5OTk0TDEuMjkwMTggMi43MDk5NEMxLjEwMTg4IDIuNTIxNjQgMC45OTYwOTQgMi4yNjYyNCAwLjk5NjA5NCAxLjk5OTk0QzAuOTk2MDk0IDEuNzMzNjQgMS4xMDE4OCAxLjQ3ODI1IDEuMjkwMTggMS4yODk5NEMxLjQ3ODQ5IDEuMTAxNjQgMS43MzM4OCAwLjk5NTg1IDIuMDAwMTkgMC45OTU4NUMyLjI2NjQ5IDAuOTk1ODUgMi41MjE4OCAxLjEwMTY0IDIuNzEwMTkgMS4yODk5NEw3LjcxMDE5IDYuMjg5OTRDNy44MDI4NyA2LjM4MzM4IDcuODc2MTkgNi40OTQyIDcuOTI1OTYgNi42MTYwM0M3Ljk3NTcyIDYuNzM3ODcgOC4wMDA5NSA2Ljg2ODMzIDguMDAwMTkgNi45OTk5NFpcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaXJjbGUgU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2lyY2xlU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiM1wiIGhlaWdodD1cIjNcIiB2aWV3Qm94PVwiMCAwIDMgM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rcycpXS5mb3JFYWNoKHRhYmxlQ29udGVudHMgPT4gbmV3IFRhYmxlQ29udGVudHModGFibGVDb250ZW50cykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIEZpbHRlclxuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlcicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgICovXG4gIGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgdGhpcy5jaGVja2JveGVzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgdGhpcy5kcm9wZG93bnMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstc2VsZWN0JyldO1xuICAgICAgdGhpcy5ncm91cHMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cCcpXTtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fc3VibWl0Jyk7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyldO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kcm9wZG93bnMuZm9yRWFjaChkcm9wZG93biA9PiB7XG4gICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWVsZHNldF9fbGVnZW5kJyk7XG4gICAgICAgIGlmIChsZWdlbmQpIHtcbiAgICAgICAgICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGVHcm91cEZpZWxkc2V0KGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLmNsZWFyRmlsdGVyKGV2dCkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItLWpzJyk7XG5cbiAgICAgIHRoaXMuaW5pdEZpbHRlcnMoKTtcbiAgICAgIHRoaXMuaW5pdENsZWFyVG9nZ2xlcygpO1xuICAgICAgdGhpcy5pbml0Q291bnRlcnMoKTtcblxuICAgICAgLy8gSGlkZSBzdWJtaXQgYnV0dG9uXG4gICAgICBpZiAodGhpcy5zdWJtaXQpIHtcbiAgICAgICAgdGhpcy5zdWJtaXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmlsdGVycygpIHtcbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuXG4gICAgICAgIGlmICghdGhpcy5pc0dyb3VwRmlsdGVyQWN0aXZlKGdyb3VwKSkge1xuICAgICAgICAgIC8vIENvbGxhcHNlIGdyb3VwIGlmIGZpbHRlcnMgbm90IGFjdGl2ZS5cbiAgICAgICAgICBncm91cC5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc2FibGUgc3ViLWdyb3VwIHNlbGVjdCBpZiBubyBvcHRpb24gaW4gcGFyZW50IHNlbGVjdGVkLlxuICAgICAgICBpZiAoZ3JvdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtc3ViZ3JvdXAnKSkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudFNlbGVjdCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1mb3JtLWdyb3VwLnBhcmVudC1ncm91cCBzZWxlY3QnKTtcbiAgICAgICAgICBjb25zdCBzdWJTZWxlY3QgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZm9ybS1ncm91cC5zdWItZ3JvdXAgc2VsZWN0Jyk7XG5cbiAgICAgICAgICBpZiAoc3ViU2VsZWN0ICE9PSBudWxsICYmIHBhcmVudFNlbGVjdCAhPT0gbnVsbCAmJiBwYXJlbnRTZWxlY3QudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBzdWJTZWxlY3Quc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVuYWJsZSBzY3JvbGxhYmxlIGNoZWNrYm94IGdyb3VwcyBpZiBtb3JlIHRoYW4gZm91ciBvcHRpb25zLlxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXMnKTtcbiAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgICBpZiAoY2IuY2hpbGRFbGVtZW50Q291bnQgPiA0KSB7XG4gICAgICAgICAgICBjYi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRDbGVhclRvZ2dsZXMoKSB7XG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXJfX2dyb3VwX19jbGVhcicpO1xuICAgICAgICBpZiAodGhpcy5pc0dyb3VwRmlsdGVyQWN0aXZlKGdyb3VwKSkge1xuICAgICAgICAgIHRvZ2dsZUxpbmsuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0Q291bnRlcnMoKSB7XG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVDb3VudChncm91cCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVBY3RpdmVDb3VudChncm91cCkge1xuICAgICAgY29uc3QgY291bnRFbGVtID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWhpbnQnKTtcblxuICAgICAgaWYgKGNvdW50RWxlbSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0Jyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2hlY2tib3hlc1tpXS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgY291bnRFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb3VudEVsZW0uaW5uZXJUZXh0ID0gYCR7Y291bnR9IHNlbGVjdGVkYFxuICAgICAgY291bnRFbGVtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBpc0dyb3VwRmlsdGVyQWN0aXZlKGdyb3VwKSB7XG4gICAgICAvLyBDaGVjayBpZiBjaGVja2JveGVzIGFyZSBhY3RpdmUuXG4gICAgICBjb25zdCBjaGVja2JveGVzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHNlbGVjdHMgYXJlIGFjdGl2ZS5cbiAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnRzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLXNlbGVjdCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZWN0RWxlbWVudHNbaV0udmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRvZ2dsZUdyb3VwRmllbGRzZXQoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICBzZXRVcGRhdGVkRmxhZyhpc1VwZGF0ZWQpIHtcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUuIHRvIGVuc3VyZSB2aWV3cG9ydCByZXNldHNcbiAgICAgIC8vIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgbGV0IGZsYWdFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS11cGRhdGUtZmxhZz1cImZpbHRlclwiXScpO1xuICAgICAgaWYgKGZsYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZsYWdFbGVtZW50LnZhbHVlID0gaXNVcGRhdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZXZ0KSB7XG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLHRvIGVuc3VyZSB2aWV3cG9ydCBzY3JvbGxzXG4gICAgICAvLyBkb3duIHRvIHJlc3VsdHMgbGlzdGluZ3MgYWZ0ZXIgZm9ybSBzdWJtaXQuXG4gICAgICB0aGlzLnNldFVwZGF0ZWRGbGFnKHRydWUpO1xuXG4gICAgICBjb25zdCBwYXJlbnRHcm91cCA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKTtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ291bnQocGFyZW50R3JvdXApO1xuXG4gICAgICAvLyBDaGVjayB3aGV0aGVyIHNlbGVjdCBkcm9wZG93biBoYXMgY2hpbGQgZmlsdGVyIGFuZCByZXNldCB0aGF0IHRvby5cbiAgICAgIGlmIChwYXJlbnRHcm91cC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1zdWJncm91cCcpICYmIGV2dC50YXJnZXQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5wYXJlbnQtZ3JvdXAnKTtcbiAgICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgICBjb25zdCBjaGlsZFNlbGVjdCA9IHdyYXBwZXIubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5zdWItZ3JvdXAgc2VsZWN0Jyk7XG4gICAgICAgICAgY2hpbGRTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJGaWx0ZXIoZXZ0KSB7XG4gICAgICB0aGlzLmNsZWFyQ2hlY2tib3hlcyhldnQpO1xuICAgICAgdGhpcy5jbGVhclNlbGVjdEVsZW1lbnRzKGV2dCk7XG5cbiAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhldnQpO1xuICAgIH1cblxuICAgIGNsZWFyQ2hlY2tib3hlcyhldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0b2dnbGVMaW5rID0gZXZ0LnRhcmdldDtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0Jyk7XG5cbiAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgIGNiLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3RFbGVtZW50cyhldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0b2dnbGVMaW5rID0gZXZ0LnRhcmdldDtcbiAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnRzID0gdG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1zZWxlY3QnKTtcblxuICAgICAgc2VsZWN0RWxlbWVudHMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyJyldLmZvckVhY2goZmlsdGVyID0+IG5ldyBGaWx0ZXIoZmlsdGVyKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEZpbHRlclRhZ1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyLXRhZycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgRmlsdGVyVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcih0YWcpIHtcbiAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgdGhpcy5pY29uID0gdGFnLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXItdGFnX19pY29uJyk7XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gdGhpcy5yZW1vdmVGaWx0ZXIoZXZ0KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRmlsdGVyKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGdyb3VwVGFncyA9IHRoaXMudGFnLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWZpbHRlci10YWcnKTtcblxuICAgICAgLy8gUmVtb3ZlIGVudGlyZSBmaWx0ZXIgdGFnIGdyb3VwIGlmIG5vIG90aGVyIHRhZ3MgcHJlc2VudC5cbiAgICAgIGlmIChncm91cFRhZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMudGFnLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMudGFnLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBmb3JtLm5oc3VrLWZpbHRlciBpbnB1dFt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZm9ybS5uaHN1ay1maWx0ZXIgc2VsZWN0IG9wdGlvblt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50R3JvdXBTZWxlY3QgPSBvcHRpb24ucGFyZW50RWxlbWVudDtcbiAgICAgICAgcGFyZW50R3JvdXBTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG5cbiAgICAgICAgLy8gUmVzZXQgc3ViLWdyb3VwIHNlbGVjdCBpZiB3ZSBhcmUgc2V0dGluZyB0aGUgcGFyZW50LFxuICAgICAgICBjb25zdCBmb3JtR3JvdXBFbGVtID0gb3B0aW9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChmb3JtR3JvdXBFbGVtLmNsYXNzTGlzdC5jb250YWlucygncGFyZW50LWdyb3VwJykpIHtcbiAgICAgICAgICBjb25zdCBzdWJHcm91cFNlbGVjdCA9IGZvcm1Hcm91cEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1zZWxlY3QnKTtcbiAgICAgICAgICBzdWJHcm91cFNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudEdyb3VwU2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMudGFnLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci10YWctLWpzJyk7XG5cbiAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgdGhpcy5pY29uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXItdGFnJyldLmZvckVhY2godGFnID0+IG5ldyBGaWx0ZXJUYWcodGFnKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBMaXN0aW5nXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstbGlzdGluZycgYW5kICcuaGVlLWxpc3RpbmdzJyBhcmUgcGFzc2VkXG4gICAqIGludG8gdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHRvZG8gUmVtb3ZlIGxlZ2FjeSByZWZlcmVuY2VzIHRvIC5uaHN1ay1saXN0aW5nIGFuZCBsb29wcyBvbmNlIGFsbCBuZXdcbiAgICogY29sbGVjdGlvbiB0ZW1wbGF0ZXMgaGF2ZSBiZWVuIGltcGxlbWVudGVkLlxuICAgKi9cbiAgY2xhc3MgTGlzdGluZyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zb3J0LCAubmhzdWstbGlzdGluZ19fc29ydCcpXS5mb3JFYWNoKGZvcm1FbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEaXNhYmxlcyBicm93c2VyIHJlc3RvcmluZyB2aWV3cG9ydCB0byBwb3NpdGlvbiBiZWZvcmUgcGFnZSByZWxvYWQuXG4gICAgICBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9SZXN1bHRzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXS5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3N1Ym1pdCwgLm5oc3VrLWxpc3RpbmdfX3NvcnRfX3N1Ym1pdCcpXS5mb3JFYWNoKHN1Ym1pdCA9PiB7XG4gICAgICAgICAgaWYgKHN1Ym1pdCkge1xuICAgICAgICAgICAgc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHNldFVwZGF0ZWRGbGFnKGlzVXBkYXRlZCkge1xuICAgICAgbGV0IGZsYWdFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS11cGRhdGUtZmxhZz1cImxpc3RpbmdcIl0nKTtcbiAgICAgIGlmIChmbGFnRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBmbGFnRWxlbWVudC52YWx1ZSA9IGlzVXBkYXRlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSB7XG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLHRvIGVuc3VyZSB2aWV3cG9ydCBzY3JvbGxzXG4gICAgICAvLyBkb3duIHRvIHJlc3VsdHMgbGlzdGluZ3MgYWZ0ZXIgZm9ybSBzdWJtaXQuXG4gICAgICB0aGlzLnNldFVwZGF0ZWRGbGFnKHRydWUpO1xuXG4gICAgICBmb3JtRWxlbWVudC5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBzY3JvbGxUb1Jlc3VsdHMoKSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbik7XG5cbiAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcygncmVzdWx0c191cGRhdGVkJykpIHtcbiAgICAgICAgY29uc3QgbGlzdGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGxpc3RpbmdDb250YWluZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBsaXN0aW5nQ29udGFpbmVyLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nLCAubmhzdWstbGlzdGluZycpXS5mb3JFYWNoKGxpc3RpbmcgPT4gbmV3IExpc3RpbmcobGlzdGluZykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBDb29raWVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIGJhbm5lclxuICAgICAgdGhpcy51c2VDb29raWVzID0gJydcbiAgICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrLWNvb2tpZS1iYW5uZXInKVxuICAgICAgdGhpcy5zaG93Q29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Q29va2llcycpXG4gICAgICB0aGlzLnJlbW92ZUNvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQ29va2llcycpXG4gICAgICB0aGlzLmhvc3QgPSB0aGlzLmdldEhvc3QoKVxuXG4gICAgICB0aGlzLmNvb2tpZVN0YXR1cygpXG4gICAgICB0aGlzLnNldENvb2tpZXMoKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAgIC8vIHBvbGljeSBwYWdlXG4gICAgICB0aGlzLlN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1a19fY29va2llU3RhdHVzJylcbiAgICAgIHRoaXMuSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNJbicpXG4gICAgICB0aGlzLk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc091dCcpXG5cbiAgICAgIHRoaXMudG9nZ2xlU3RhdHVzKClcbiAgICB9XG5cbiAgICBjb29raWVTdGF0dXMoKXtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpXG4gICAgICBjb29raWVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gYy5tYXRjaChuZXcgUmVnRXhwKCcoXnwgKWNvb2tpZV9jb25zZW50KFteO10rKScpKVxuICAgICAgICBpZihtYXRjaCkge1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGMuc3BsaXQoXCI9XCIpWzFdXG4gICAgICAgICAgdGhpcy51c2VDb29raWVzID0gc3RhdHVzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0SG9zdCgpe1xuICAgICAgY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0LnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpWzBdXG4gICAgICByZXR1cm4gaG9zdFxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYodGhpcy5zaG93Q29va2llcykge1xuICAgICAgICB0aGlzLnNob3dDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc2hvd0Nvb2tpZSlcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucmVtb3ZlQ29va2llcykge1xuICAgICAgICB0aGlzLnJlbW92ZUNvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZW1vdmVDb29raWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYmFubmVyU2hvdygpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmFubmVySGlkZSgpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHNldENvb2tpZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5iYW5uZXJTaG93KClcbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NBY2NlcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19hY2NlcHRfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzQWNjZXB0KSB7XG4gICAgICAgICAgICBhbmFseXRpY3NBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NEZWNsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfZGVjbGluZV9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NEZWNsaW5lKSB7XG4gICAgICAgICAgICBhbmFseXRpY3NEZWNsaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD10cnVlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIG5vQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PWZhbHNlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIHRvZ2dsZVN0YXR1cygpIHtcbiAgICAgIGlmKHRoaXMuU3RhdHVzKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzT3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNJbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSBcImZhbHNlXCIgfHwgdGhpcy51c2VDb29raWVzID09PSAnJyApIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuSW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLkluKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUJsb2NrKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKVxuICAgIH1cblxuICAgIGRpc3BsYXlOb25lKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIilcbiAgICB9XG5cbiAgICAvLyByZWR1bmRhbnQgYnV0IHVzZWZ1bFxuICAgIHNob3dDb29raWUoKSB7XG4gICAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va2llcycpXG4gICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSAnPiAnICsgZG9jdW1lbnQuY29va2llXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llX2NvbnNlbnQ9ZmFsc2U7IG1heC1hZ2U9MFwiXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICB9XG5cbiAgbmV3IENvb2tpZXMoZG9jdW1lbnQpXG59IiwiLyoqXG4qIFN1Yk5hdlxuKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXN1Ym5hdicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3Mgc3ViTmF2IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgIHRoaXMucGFyZW50TGlzdCA9IHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGVcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluaykge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50KSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdGF0ZSgpe1xuICAgICAgY29uc3QgYWN0aXZlRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGFjdGl2ZUVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmKGVsZW0gIT0gdGhpcy5jb250YWluZXIpe1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICAgIGVsZW0udG9nZ2xlQXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoYWN0aXZlRWxlbXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudShldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVTdGF0ZSgpXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuY29udGFpbmVyLCBcImlzLWFjdGl2ZVwiKVxuICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIFwiYXJpYS1leHBhbmRlZFwiKVxuICAgIH1cblxuICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVyblxuICAgICAgY29uc3QgaGFzQ2xhc3MgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICBpZiAoaGFzQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgYXR0ciBhcmUgbWlzc2luZ1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFhdHRyKSByZXR1cm5cbiAgICAgIC8vIFRvZ2dsZSBhdHRyaWJ1dGUgdmFsdWUuIFRyZWF0IG5vIGV4aXN0aW5nIGF0dHIgc2FtZSBhcyB3aGVuIHNldCB0byBmYWxzZVxuICAgICAgY29uc3QgdmFsdWUgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJykgPyAnZmFsc2UnIDogJ3RydWUnXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1zdWJuYXYnKV0uZm9yRWFjaChzdWJuYXYgPT4gbmV3IHN1Yk5hdihzdWJuYXYpKVxuXG4gIC8qIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KSAqL1xuXG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtbWVudVwiKTtcblxuICBjbG9zZU1lbnUgJiYgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB1c2VySW5wdXQoZXZlbnQpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHVzZXJJbnB1dCkgXG4gIFxuICBmdW5jdGlvbiB1c2VySW5wdXQoZXZlbnQpIHtcbiAgICAvLyBjbG9zZSBtZW51IGlmIGNsaWNraW5nIG91dHNpZGVcbiAgICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICBpZihvcGVuTWVudSl7XG4gICAgICBjb25zdCBpc05vdE1lbnUgPSBldmVudC50YXJnZXQgIT09IG9wZW5NZW51XG4gICAgICBjb25zdCBpc05vdE1lbnVCdXR0b24gPSBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIilcbiAgICAgIGNvbnN0IGlzTWVudUNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICAgIGlmKGlzTm90TWVudSAmJiBpc05vdE1lbnVCdXR0b24gJiYgIWlzTWVudUNoaWxkKXtcbiAgICAgICAgb3Blbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNob3dcIilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc3ViIG5hdiBpZiBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgZG9jdW1lbnQgZXhjZXB0IHRoZSBvcGVuIG9yIGEgbmV3IHN1Ym5hdlxuICAgIGNvbnN0IG9wZW5TdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICBpZihvcGVuU3ViKXtcbiAgICAgIGNvbnN0IGlzTm90U3ViID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuU3ViXG4gICAgICBjb25zdCBpc1N1YkNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgaWYoaXNOb3RTdWIgJiYgIWlzU3ViQ2hpbGQpe1xuICAgICAgICBvcGVuU3ViLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24tbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3VibmF2LW9wZW5cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE5IU1VLLUhFRSBDb21wb25lbnRzXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9uaHN1ay1oZWUtY29va2llcy9jb29raWVzJztcbmltcG9ydCBTdWJOYXYgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWhlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdic7XG5cbi8vIEhFRSBDb21wb25lbnRzXG5pbXBvcnQgQW5jaG9yTGlua3MgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcyc7XG5pbXBvcnQgQW5jaG9yTGlua3NTdGlja3kgZnJvbSAnLi9ibG9ja3MvY29udGVudC9mb290ZXIvaGVlLWFuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3knO1xuaW1wb3J0IFRhYmxlQ29udGVudHMgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy90b2MnO1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbWVkaWEvbWVkaWEnO1xuaW1wb3J0IE5hdk1hcCBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5hdm1hcC9uYXZtYXAnO1xuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXInO1xuaW1wb3J0IFN1bW1hcnlDYXJkIGZyb20gXCIuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLWNhcmQtLXN1bW1hcnkvc3VtbWFyeVwiO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJzL3RhYnMnO1xuaW1wb3J0IFRhYmxlQ2FyZCBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyJztcblxuLy8gVW5zb3J0ZWQgY29tcG9uZW50c1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXInO1xuaW1wb3J0IEZpbHRlclRhZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcnO1xuXG4vLyBJbml0aWFsaXplIGNvbXBvbmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIFRhYnMoKTtcbiAgQW5jaG9yTGlua3MoKTtcbiAgQW5jaG9yTGlua3NTdGlja3koKTtcbiAgQ29va2llcygpO1xuICBGaWx0ZXIoKTtcbiAgRmlsdGVyVGFnKCk7XG4gIExpc3RpbmcoKTtcbiAgTWVkaWEoKTtcbiAgTmF2TWFwKCk7XG4gIFN1Yk5hdigpO1xuICBTdW1tYXJ5Q2FyZCgpO1xuICBOZXdzbGV0dGVyKCk7XG4gIFRhYmxlQ29udGVudHMoKTtcbiAgVGFibGVDYXJkKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJBbmNob3JMaW5rc1N0aWNreSIsImNvbnRhaW5lciIsIl9jbGFzc0NhbGxDaGVjayIsInRvZ2dsZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJzdGlja3lBbmNob3JMaW5rcyIsInNpZGViYXJBbmNob3JMaW5rcyIsImRvY3VtZW50IiwiZm9vdGVyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJ0b2dnbGVTdGlja3lUb29sYmFyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVTdGlja3lBbmNob3JMaW5rcyIsImV2ZW50Iiwia2V5Q29kZSIsInRhcmdldCIsInRhZ05hbWUiLCJ3aW5kb3ciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJmb2N1cyIsInRvY0Jsb2NrVmlzaWJsZSIsImlzRWxlbWVudEluVmlld3BvcnQiLCJmb290ZXJWaXNpYmxlIiwiYWRkIiwicmVtb3ZlIiwiZWxlbWVudCIsImJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxlbWVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsImVsZW1lbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImFuY2hvckxpbmtzIiwiU3VtbWFyeUNhcmQiLCJzdW1tYXJ5Q2FyZCIsInRvZ2dsZUxpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZVN1bW1hcnkiLCJUcmFuc2NyaXB0IiwidG9nZ2xlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiZXZ0IiwidG9nZ2xldHJhbnNjcmlwdCIsImlzQ29sbGFwc2VkIiwiY29udGFpbnMiLCJ0cmFuc2NyaXB0IiwiTmF2TWFwIiwibWFwIiwic3ZnIiwicmVnaW9ucyIsImxpc3QiLCJhZGRMaW5rc1RvTWFwIiwiY2xlYW5TdHlsZSIsIm1hcEV2ZW50TGlzdGVuZXJzIiwibGlua0V2ZW50TGlzdGVuZXJzIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlZ2lvbiIsInRoaXNDb3VudGVycGFydCIsIm1hcENvdW50ZXJwYXJ0IiwiaWQiLCJ0aGlzSHJlZiIsImhyZWYiLCJ0aGlzVGl0bGUiLCJjaGlsZHJlbiIsIndyYXBMaW5rIiwiY29uY2F0IiwiX3RoaXMyIiwibWFwSW4iLCJtYXBPdXQiLCJtYXBDbGljayIsIl90aGlzMyIsIml0ZW0iLCJsaW5rRXZlbnQiLCJtb3ZlVG9Ub3AiLCJvYmoiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJ0aGlzTGluayIsInRoaXNNYXBDb3VudGVycGFydCIsImNsb3Nlc3QiLCJjbGljayIsInRoaXNJZCIsImZpbmQiLCJkaXJlY3Rpb24iLCJ0eXBlIiwibGlua0NvdW50ZXJwYXJ0IiwiZ2V0U1ZHRG9jdW1lbnQiLCJOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInJlcXVpcmVkSW5wdXRzIiwiZXJyb3JzIiwiaW5pdCIsInJlY2FwdGNoYUNhbGxiYWNrIiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInRhcmdldFN1bW1hcnlFcnJvciIsImVycm9yRW1wdHkiLCJlcnJvckVtYWlsIiwiZXJyb3JDb25zZW50IiwidXBkYXRlU3VtbWFyeSIsImVycm9yU3VtbWFyeSIsImxlbmd0aCIsImRpc3BsYXkiLCJpc0VtcHR5Iiwic2hvd0Vycm9yIiwiaGlkZUVycm9yIiwicmUiLCJ0ZXN0IiwiY2hlY2tlZCIsImZpbHRlciIsInB1c2giLCJzdHIiLCJ0cmltIiwiZXJyb3IiLCJlcnJvckNsYXNzZXMiLCJlcnJvcmNsYXNzIiwiZXJyb3JzdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5SXRlbXMiLCJzdW1tYXJ5aXRlbSIsInJlbW92ZUF0dHJpYnV0ZSIsIlRhYmxlQ2FyZCIsInRhYmxlQ2FyZCIsImV4cGFuZGVycyIsInN0YXRlT3BlbiIsImlubmVyVGV4dCIsImRhdGFzZXQiLCJsYWJlbE9wZW4iLCJpbml0RXhwYW5kZXJPYnNlcnZlciIsInRvZ2dsZUV4cGFuZGVycyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uc0xpc3QiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJ1cGRhdGVUb2dnbGVTdGF0ZSIsImV4cGFuZGVyIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJvcGVuRXhwYW5kZXIiLCJjbG9zZUV4cGFuZGVyIiwibGFiZWxDbG9zZSIsImFsbE9wZW4iLCJoYXNBdHRyaWJ1dGUiLCJzdW1tYXJ5IiwidGV4dCIsIlRhYnMiLCJ0YWJjb21wb25lbnQiLCJpIiwidGFicyIsInRhYkxpc3QiLCJ0YWIiLCJjaGFuZ2VUYWJzIiwidGFiRm9jdXMiLCJlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImdyYW5kcGFyZW50Iiwic2VsZWN0ZWQiLCJpc19tb2JpbGUiLCJyZW1vdmVTZWxlY3RlZCIsImhpZGVUYWJzIiwic2V0U2VsZWN0ZWQiLCJzaG93U2VsZWN0ZWQiLCJlbGUiLCJ0IiwicCIsIkFuY2hvckxpbmtzIiwiaGlkZGVuIiwiZm91bmRIZWFkaW5ncyIsImZpbmRIZWFkaW5ncyIsImhlYWRpbmdzIiwiYWRkQW5jaG9yc1RvUGFnZSIsImhlYWRpbmdUeXBlcyIsInNwbGl0Iiwic2VsZWN0b3JzIiwiam9pbiIsImNvbnRlbnRDb250YWluZXIiLCJoZWFkaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uIiwic2VsZWN0b3IiLCJzb21lIiwiZWwiLCJ1bCIsImNyZWF0ZUVsZW1lbnQiLCJmb3VuZEhlYWRpbmciLCJhbmNob3JsaW5rc2lnbm9yZSIsImxpIiwiYSIsImhpZGRlbkVsZW1lbnRzIiwiVGFibGVDb250ZW50cyIsInRhYmxlQ29udGVudHMiLCJjb250YWluZXJTZWxlY3RvciIsImhlYWRpbmdTZWxlY3RvciIsInN1YkhlYWRpbmdTZWxlY3RvciIsImhlYWRpbmdQcmVmaXgiLCJsaW5rcyIsImNyZWF0ZVRvY0xpbmtzIiwic2V0VG9jTGlzdE1hcmt1cCIsInNsaWNlIiwiY2FsbCIsInNldEJhY2tUb1RvcExpbmtzIiwic3ViSGVhZGluZ3MiLCJpbmRleCIsImhlYWRpbmdJZCIsImxpbmsiLCJ0aXRsZSIsImdldEhlYWRpbmdUaXRsZSIsImFuY2hvciIsInNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjb3VudCIsInN1YkhlYWRpbmdJZCIsInNob3J0VGl0bGUiLCJsaXN0SXRlbSIsInNwYW4iLCJnZXRDaGV2cm9uU1ZHIiwiZ2V0Q2lyY2xlU1ZHIiwiYXBwZW5kIiwicGFyZW50TGluayIsImNoaWxkTGlzdCIsImNoaWxkSXRlbSIsImNoaWxkTGluayIsImNyZWF0ZUJhY2tUb1RvcExpbmsiLCJpbnNlcnRCZWZvcmUiLCJGaWx0ZXIiLCJjaGVja2JveGVzIiwiZHJvcGRvd25zIiwiZ3JvdXBzIiwic3VibWl0IiwiY2xlYXJUb2dnbGUiLCJzZXRVcCIsImNoZWNrYm94IiwidXBkYXRlUmVzdWx0cyIsImRyb3Bkb3duIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cEZpZWxkc2V0IiwiY2xlYXJGaWx0ZXIiLCJpbml0RmlsdGVycyIsImluaXRDbGVhclRvZ2dsZXMiLCJpbml0Q291bnRlcnMiLCJpc0dyb3VwRmlsdGVyQWN0aXZlIiwicGFyZW50U2VsZWN0Iiwic3ViU2VsZWN0IiwiY2IiLCJjaGlsZEVsZW1lbnRDb3VudCIsIl90aGlzNCIsInVwZGF0ZUFjdGl2ZUNvdW50IiwiY291bnRFbGVtIiwic2VsZWN0RWxlbWVudHMiLCJzZXRVcGRhdGVkRmxhZyIsImlzVXBkYXRlZCIsImZsYWdFbGVtZW50IiwicGFyZW50R3JvdXAiLCJub2RlTmFtZSIsIndyYXBwZXIiLCJjaGlsZFNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJjbGVhckNoZWNrYm94ZXMiLCJjbGVhclNlbGVjdEVsZW1lbnRzIiwic2VsZWN0IiwiRmlsdGVyVGFnIiwidGFnIiwiaWNvbiIsInJlbW92ZUZpbHRlciIsImdyb3VwVGFncyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIm9wdGlvbiIsInBhcmVudEdyb3VwU2VsZWN0IiwiZm9ybUdyb3VwRWxlbSIsInN1Ykdyb3VwU2VsZWN0IiwiTGlzdGluZyIsImZvcm1FbGVtZW50IiwidG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzIiwiaGlzdG9yeSIsInNjcm9sbFJlc3RvcmF0aW9uIiwic2Nyb2xsVG9SZXN1bHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsInNlYXJjaFBhcmFtcyIsImhhcyIsImxpc3RpbmdDb250YWluZXIiLCJzY3JvbGxJbnRvVmlldyIsImxpc3RpbmciLCJDb29raWVzIiwidXNlQ29va2llcyIsImJhbm5lciIsInNob3dDb29raWVzIiwicmVtb3ZlQ29va2llcyIsImhvc3QiLCJnZXRIb3N0IiwiY29va2llU3RhdHVzIiwic2V0Q29va2llcyIsIlN0YXR1cyIsIkluIiwiT3V0IiwidG9nZ2xlU3RhdHVzIiwiY29va2llcyIsImNvb2tpZSIsIm1hdGNoIiwiUmVnRXhwIiwic3RhdHVzIiwidG9TdHJpbmciLCJzaG93Q29va2llIiwicmVtb3ZlQ29va2llIiwiYmFubmVyU2hvdyIsImJhbm5lckhpZGUiLCJhbmFseXRpY3NBY2NlcHQiLCJ1c2VDb29raWUiLCJhbmFseXRpY3NEZWNsaW5lIiwibm9Db29raWUiLCJyZWxvYWQiLCJkaXNwbGF5QmxvY2siLCJkaXNwbGF5Tm9uZSIsIm91dHB1dCIsInRleHRDb250ZW50Iiwic3ViTmF2IiwicGFyZW50TGlzdCIsInRvZ2dsZU1lbnUiLCJoYW5kbGVTdGF0ZSIsImFjdGl2ZUVsZW1zIiwiZWxlbSIsInRvZ2dsZUF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhdHRyIiwic3VibmF2IiwiY2xvc2VNZW51IiwidXNlcklucHV0Iiwib3Blbk1lbnUiLCJpc05vdE1lbnUiLCJpc05vdE1lbnVCdXR0b24iLCJpc01lbnVDaGlsZCIsIm9wZW5TdWIiLCJpc05vdFN1YiIsImlzU3ViQ2hpbGQiLCJTdWJOYXYiLCJNZWRpYSJdLCJzb3VyY2VSb290IjoiIn0=