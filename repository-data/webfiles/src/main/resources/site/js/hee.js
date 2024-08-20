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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUL0QsNEZBQU0sQ0FBQyxDQUFDO0VBQ1JxQyxrR0FBUyxDQUFDLENBQUM7RUFDWFcsNkZBQU8sQ0FBQyxDQUFDO0VBQ1RxRSxnRkFBSyxDQUFDLENBQUM7RUFDUGpULGtGQUFNLENBQUMsQ0FBQztFQUNSZ1Qsa0dBQU0sQ0FBQyxDQUFDO0VBQ1IvVCx5RkFBVyxDQUFDLENBQUM7RUFDYjBELDBGQUFVLENBQUMsQ0FBQztFQUNaOEcsdUZBQWEsQ0FBQyxDQUFDO0VBQ2Z2RSxtR0FBUyxDQUFDLENBQUM7QUFDYixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2hlZS1hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtY2FyZC0tc3VtbWFyeS9zdW1tYXJ5LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbWVkaWEvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uYXZtYXAvbmF2bWFwLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmV3c2xldHRlci9uZXdzbGV0dGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFibGUtZXhwYW5kZXIvdGFibGUtZXhwYW5kZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvaGVlLWFuY2hvcmxpbmtzL3RvYy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL25oc3VrLWhlZS1jb29raWVzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWhlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdi5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvaGVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAgKiBSZXNwb25zaWJsZSBmb3IgQW5jaG9yIGxpbmsgc3RpY2t5IHRvb2xiYXIgYXQgYm90dG9tIG9mIHZpZXdwb3J0LlxyXG4gICAqL1xyXG4gIGNsYXNzIEFuY2hvckxpbmtzU3RpY2t5IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcclxuXHJcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICB0aGlzLnRvZ2dsZUJ0biA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5oZWUtYW5jaG9ybGlua3NfX3N0aWNreV9fYnRuJyk7XHJcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGVlLWFuY2hvcmxpbmtzJyk7XHJcbiAgICAgIHRoaXMuc2lkZWJhckFuY2hvckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3JpZ2h0YmFyIC5oZWUtYW5jaG9ybGlua3MnKTtcclxuICAgICAgdGhpcy5mb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZm9vdGVyJyk7XHJcblxyXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBldmVudCBsaXN0ZW5lcnMgZm9yIFRPQyBidXR0b24gdG9nZ2xlLCBUT0MgbGluayBuYXZpZ2F0aW9uIGFuZFxyXG4gICAgICogdGhlIHdpbmRvdyB2aWV3cG9ydCBzY3JvbGwgdG9nZ2xlLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHZvaWRcclxuICAgICAqL1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKSlcclxuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnICYmIGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgc3RpY2t5IFRPQyBhbmNob3IgbGlua3Mgd2hlbiBcIlRhYmxlIG9mIENvbnRlbnRzXCIgYnV0dG9uXHJcbiAgICAgKiB0cmlnZ2VyZWQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICB0b2dnbGVTdGlja3lBbmNob3JMaW5rcygpIHtcclxuICAgICAgdGhpcy50b2dnbGVCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc3RpY2t5Jyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdhOmZpcnN0LW9mLXR5cGUnKS5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgVE9DIGJvdHRvbSBcInRvb2xiYXJcIiB3aGVuIHRoZSBzaWRlYmFyIFRPQyBoZWFkaW5nIGlzXHJcbiAgICAgKiBvdXRzaWRlIHRoZSB2aWV3cG9ydC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZVN0aWNreVRvb2xiYXIoKSB7XHJcbiAgICAgIGNvbnN0IHRvY0Jsb2NrVmlzaWJsZSA9IHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzLnNpZGViYXJBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdoMicpKTtcclxuICAgICAgY29uc3QgZm9vdGVyVmlzaWJsZSA9IHRoaXMuZm9vdGVyICYmIHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzLmZvb3Rlcik7XHJcblxyXG4gICAgICBpZiAoIXRvY0Jsb2NrVmlzaWJsZSAmJiAhZm9vdGVyVmlzaWJsZSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudFxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cclxuICAgICAqL1xyXG4gICAgaXNFbGVtZW50SW5WaWV3cG9ydChlbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGJvdW5kaW5nID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICBjb25zdCBlbGVtZW50V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgcmV0dXJuIGJvdW5kaW5nLnRvcCA+PSAtZWxlbWVudEhlaWdodFxyXG4gICAgICAgICYmIGJvdW5kaW5nLmxlZnQgPj0gLWVsZW1lbnRXaWR0aFxyXG4gICAgICAgICYmIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICsgZWxlbWVudFdpZHRoXHJcbiAgICAgICAgJiYgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyBlbGVtZW50SGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rc19fc3RpY2t5JyldLmZvckVhY2goYW5jaG9yTGlua3MgPT4gbmV3IEFuY2hvckxpbmtzU3RpY2t5KGFuY2hvckxpbmtzKSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcblxyXG4gIGNsYXNzIFN1bW1hcnlDYXJkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdW1tYXJ5Q2FyZCkge1xyXG4gICAgICB0aGlzLnN1bW1hcnlDYXJkID0gc3VtbWFyeUNhcmQ7XHJcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMuc3VtbWFyeUNhcmQucXVlcnlTZWxlY3RvcignLmhlZS1jYXJkLS1zdW1tYXJ5X190b2dnbGUnKTtcclxuXHJcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIGxpbmsuXHJcbiAgICAgKi9cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBjbGljayBldmVudC5cclxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVN1bW1hcnkoKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cclxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN1bW1hcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgYWxsIGV4cGFuZGVyIGNvbnRlbnQgdmlzaWJpbGl0eSB3aXRoaW4gdGFibGUgY2FyZC5cclxuICAgICAqL1xyXG4gICAgdG9nZ2xlU3VtbWFyeSgpIHtcclxuICAgICAgdGhpcy5zdW1tYXJ5Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdkZWZhdWx0Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWNhcmQtLXN1bW1hcnknKV0uZm9yRWFjaChzdW1tYXJ5Q2FyZCA9PiBuZXcgU3VtbWFyeUNhcmQoc3VtbWFyeUNhcmQpKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgKiBNZWRpYSB0cmFuc2NyaXB0XHJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLmhlZS1tZWRpYS10cmFuc2NyaXB0JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xyXG4gICovXHJcbiAgY2xhc3MgVHJhbnNjcmlwdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcclxuICAgICAgdGhpcy50b2dnbGVzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpXHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcclxuICAgICAgY29uc29sZS5sb2codGhpcy50b2dnbGVzKVxyXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgaWYgKHRoaXMudG9nZ2xlcykge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlcy5mb3JFYWNoKHRvZ2dsZSA9PiB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGV0cmFuc2NyaXB0KGV2dCkpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xldHJhbnNjcmlwdCgpIHtcclxuICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQoKSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0NvbGxhcHNlZCgpIHtcclxuICAgICAgaWYodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1tZWRpYV9fdHJhbnNjcmlwdCcpXS5mb3JFYWNoKHRyYW5zY3JpcHQgPT4gbmV3IFRyYW5zY3JpcHQodHJhbnNjcmlwdCkpXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgKiBNYXBcclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstcmVnaW9uJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xyXG4gICovXHJcbiAgY2xhc3MgTmF2TWFwIHtcclxuICAgIGNvbnN0cnVjdG9yKG1hcCwgc3ZnKSB7XHJcbiAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICB0aGlzLnN2ZyA9IHN2ZztcclxuICAgICAgdGhpcy5yZWdpb25zID0gWy4uLnN2Zy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1yZWdpb24nKV07XHJcbiAgICAgIHRoaXMubGlzdCA9IFsuLi5tYXAucXVlcnlTZWxlY3RvckFsbCgnI3JlZ2lvbkxpc3QgbGkgYScpXTtcclxuXHJcbiAgICAgIHRoaXMuYWRkTGlua3NUb01hcCgpO1xyXG4gICAgICB0aGlzLmNsZWFuU3R5bGUoKTtcclxuICAgICAgdGhpcy5tYXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLmxpbmtFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFuU3R5bGUoKXtcclxuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFxyXG4gICAgICAgIC5zdDB7ZmlsbDojMDA1RUI4O3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxyXG4gICAgICAgIC5zdDF7ZmlsbDojQUVCN0JEO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxyXG4gICAgICAgIC5ob3ZlciAqIHtzdHJva2U6I2ZmZWIzYjtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxyXG4gICAgICAgIC5mb2N1cyAuc3QwIHtmaWxsOiNmZmViM2I7c3Ryb2tlOiMyMTJiMzI7fVxyXG4gICAgICAgIC5mb2N1cyAqIHtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxyXG4gICAgICBgKSlcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaW5rc1RvTWFwKCl7XHJcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XHJcbiAgICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChyZWdpb24uaWQpXHJcbiAgICAgICAgY29uc3QgdGhpc0hyZWYgPSAodGhpc0NvdW50ZXJwYXJ0LmhyZWYpPyB0aGlzQ291bnRlcnBhcnQuaHJlZiA6IFwiL1wiXHJcbiAgICAgICAgY29uc3QgdGhpc1RpdGxlID0gKHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwpPyB0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MIDogXCJcIlxyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcmVnaW9uLmlubmVySFRNTDtcclxuICAgICAgICBjb25zdCB3cmFwTGluayA9IGA8YSB4bGluazpocmVmPVwiJHt0aGlzSHJlZn1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cclxuICAgICAgICAgIDx0aXRsZT4ke3RoaXNUaXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgJHtjaGlsZHJlbn1cclxuICAgICAgICA8L2E+YFxyXG4gICAgICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3cmFwTGlua1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1hcEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5tYXBJbihlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcclxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLm1hcE91dChlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcclxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0aGlzLm1hcENsaWNrKGV2ZW50KSkpXHJcbiAgICB9XHJcblxyXG4gICAgbGlua0V2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiaG92ZXJcIikpKVxyXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJob3ZlclwiKSkpXHJcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJmb2N1c1wiKSkpXHJcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImZvY3VzXCIpKSlcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVG9Ub3Aob2JqKSB7XHJcbiAgICAgIG9iai5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwSW4odGFyZ2V0LCBzdHlsZSwgbWFwKSB7XHJcbiAgICAgIHRoaXMubW92ZVRvVG9wKHRhcmdldClcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGUpXHJcbiAgICAgIGlmKG1hcCkge1xyXG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXHJcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFwT3V0KHRhcmdldCwgc3R5bGUsIG1hcCkge1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZSlcclxuICAgICAgaWYobWFwKSB7XHJcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcclxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYXBDbGljayhldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIGNvbnN0IHRoaXNNYXBDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJnXCIpLmlkKVxyXG4gICAgICBpZih0aGlzTWFwQ291bnRlcnBhcnQpIHRoaXNNYXBDb3VudGVycGFydC5jbGljaygpXHJcbiAgICB9XHJcblxyXG4gICAgbWFwQ291bnRlcnBhcnQodGhpc0lkKSB7XHJcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxyXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcclxuICAgIH1cclxuXHJcbiAgICBsaW5rRXZlbnQodGFyZ2V0LCBkaXJlY3Rpb24sIHR5cGUpIHtcclxuICAgICAgY29uc3QgdGhpc0lkID0gdGFyZ2V0LmlkXHJcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlua0NvdW50ZXJwYXJ0KHRoaXNJZClcclxuICAgICAgaWYoZGlyZWN0aW9uID09PSBcImluXCIpIHtcclxuICAgICAgICB0aGlzLm1hcEluKHRoaXNDb3VudGVycGFydCwgdHlwZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm1hcE91dCh0aGlzQ291bnRlcnBhcnQsIHR5cGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rQ291bnRlcnBhcnQodGhpc0lkKSB7XHJcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMucmVnaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxyXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstbWFwJyldLmZvckVhY2gobWFwID0+IHtcclxuICAgIC8vIG5lZWQgdG8gd2FpdCBmb3IgU1ZHIHRvIGxvYWRcclxuICAgIGNvbnN0IG9iaiA9IG1hcC5xdWVyeVNlbGVjdG9yKCdvYmplY3QnKVxyXG4gICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xyXG4gICAgICBjb25zdCBzdmcgPSBvYmouZ2V0U1ZHRG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxyXG4gICAgICBpZihzdmcpe1xyXG4gICAgICAgIG5ldyBOYXZNYXAobWFwLCBzdmcpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAqIE5ld3NsZXR0ZXJcclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICduaHN1ay1uZXdzbGV0dGVyLWZvcm0nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXHJcbiAgKi9cclxuICBjbGFzcyBOZXdzbGV0dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5ld3NsZXR0ZXIpIHtcclxuICAgICAgdGhpcy5uZXdzbGV0dGVyID0gbmV3c2xldHRlcjtcclxuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cyA9IG5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbChcIltyZXF1aXJlZF1cIik7XHJcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XHJcbiAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICB3aW5kb3cucmVjYXB0Y2hhQ2FsbGJhY2sgPSB0aGlzLnJlY2FwdGNoYUNhbGxiYWNrXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcclxuICAgICAgdGhpcy5hZGRFdmVudHMoKSAgICAgIDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkRXZlbnRzKCkge1xyXG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBjID0+IHRoaXMudmFsaWRhdGUoYy50YXJnZXQpKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSh0YXJnZXQpIHtcclxuICAgICAgdmFyIHRhcmdldEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcnMtXCIrdGFyZ2V0Lm5hbWUpO1xyXG4gICAgICB2YXIgdGFyZ2V0U3VtbWFyeUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5LVwiK3RhcmdldC5uYW1lKTtcclxuICAgICAgaWYgKHRhcmdldC5uYW1lID09IFwiZmlyc3RuYW1lXCIgfHwgdGFyZ2V0Lm5hbWUgPT0gXCJsYXN0bmFtZVwiKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJlbWFpbFwiKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvckVtYWlsKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJjb25zZW50XCIpIHtcclxuICAgICAgICB0aGlzLmVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlU3VtbWFyeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN1bW1hcnkoKSB7XHJcbiAgICAgIHZhciBlcnJvclN1bW1hcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnlcIik7XHJcbiAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKVxyXG4gICAgICB7ICAgICAgICBcclxuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xyXG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XHJcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgICBpZiAoIXJlLnRlc3QodGFyZ2V0LnZhbHVlKSkgeyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xyXG4gICAgICBpZiAoIXRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xyXG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xyXG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xyXG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xyXG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcclxuICAgICAgdGhpcy5lcnJvcnMucHVzaCh0YXJnZXQubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFbXB0eShzdHIpIHtcclxuICAgICAgcmV0dXJuICFzdHIudHJpbSgpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEZvcm0oKSB7XHJcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3ItbWVzc2FnZScpO1xyXG4gICAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XHJcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgZXJyb3JDbGFzc2VzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xyXG4gICAgICBlcnJvckNsYXNzZXMuZm9yRWFjaChlcnJvcmNsYXNzID0+IHtcclxuICAgICAgICBlcnJvcmNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeSA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3Itc3VtbWFyeScpO1xyXG4gICAgICBlcnJvclN1bW1hcnkuZm9yRWFjaChlcnJvcnN1bW1hcnkgPT4ge1xyXG4gICAgICAgIGVycm9yc3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnlJdGVtcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3Itc3VtbWFyeS1pdGVtJyk7XHJcbiAgICAgIGVycm9yU3VtbWFyeUl0ZW1zLmZvckVhY2goc3VtbWFyeWl0ZW0gPT4ge1xyXG4gICAgICAgIHN1bW1hcnlpdGVtLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI25ld3NsZXR0ZXItZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgIH1cclxuICB9XHJcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScpXS5mb3JFYWNoKChuZXdzbGV0dGVyKSA9PiBuZXcgTmV3c2xldHRlcihuZXdzbGV0dGVyKSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgICogUmVzcG9uc2libGUgZm9yIHByb3ZpZGluZyB0aGUgXCJleHBhbmQgYWxsXCIgdG9nZ2xlIGZ1bmN0aW9uYWxpdHkgZm9yIHRhYmxlXHJcbiAgICogY2FyZHMuXHJcbiAgICovXHJcbiAgY2xhc3MgVGFibGVDYXJkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNhcmQpIHtcclxuICAgICAgdGhpcy50YWJsZUNhcmQgPSB0YWJsZUNhcmQ7XHJcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtdGFibGUtZXhwYW5kZXJfX3RvZ2dsZSBhJyk7XHJcbiAgICAgIHRoaXMuZXhwYW5kZXJzID0gdGhpcy50YWJsZUNhcmQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWV4cGFuZGVyJyk7XHJcbiAgICAgIHRoaXMuc3RhdGVPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbjtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5pbml0RXhwYW5kZXJPYnNlcnZlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rIGFuZCBzdW1tYXJ5IGVsZW1lbnRzLlxyXG4gICAgICovXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXHJcbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cclxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVycygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdlIHVzZSBvYnNlcnZlcnMgdG8gcmVhY3QgdG8gY2xpY2sgZXZlbnRzIG9uIGluZGl2aWR1YWwgZXhwYW5kZXJzLCBhcyB0aGlzXHJcbiAgICAgKiBldmVudCBmdW5jdGlvbmFsaXR5IGlzIGhhbmRsZWQgYnkgdGhlIG5oc3VrLWRldGFpbHMgY29tcG9uZW50J3MgamF2YXNjcmlwdC5cclxuICAgICAqL1xyXG4gICAgaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKSB7XHJcbiAgICAgIC8vIENvbmZpZ3VyZSBvYnNlcnZlciB0byByZWFjdCB0byBjaGFuZ2VzIGluIGFuIGV4cGFuZGVyJ3MgXCJvcGVuXCIgYXR0cmlidXRlLlxyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0KSA9PiB7XHJcbiAgICAgICAgbXV0YXRpb25zTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xyXG4gICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnb3BlbicpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShleHBhbmRlciwge2F0dHJpYnV0ZXM6IHRydWV9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUb2dnbGUgYWxsIGV4cGFuZGVyIGNvbnRlbnQgdmlzaWJpbGl0eSB3aXRoaW4gdGFibGUgY2FyZC5cclxuICAgICAqL1xyXG4gICAgdG9nZ2xlRXhwYW5kZXJzKCkge1xyXG4gICAgICAvLyBPcGVuIC8gY2xvc2UgZWFjaCBleHBhbmRlciBkZXBlbmRpbmcgb24gY3VycmVudCBzdGF0ZS5cclxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XHJcbiAgICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy5vcGVuRXhwYW5kZXIoZXhwYW5kZXIpIDogdGhpcy5jbG9zZUV4cGFuZGVyKGV4cGFuZGVyKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBUb2dnbGUgc3RhdGUgZmxhZy5cclxuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSAhdGhpcy5zdGF0ZU9wZW47XHJcblxyXG4gICAgICAvLyBUb2dnbGUgYnV0dG9uIHRleHQuXHJcbiAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW4gOiB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxDbG9zZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIERldGVybWluZXMgd2hldGhlciBhbGwgZXhwYW5kZXJzIGhhdmUgYmVlbiBvcGVuZWQgb3IgY2xvc2VkIGFuZCB1cGRhdGVzXHJcbiAgICAgKiAgdGhlIHN0YXRlIGZsYWcgYW5kIHRvZ2dsZSBsaW5rIHRleHQgYWNjb3JkaW5nbHkuXHJcbiAgICAgKlxyXG4gICAgICogIEZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIE11dGF0aW9uT2JzZXJ2ZXIgZGV0ZWN0cyBhIGNoYW5nZSBpbiBleHBhbmRlclxyXG4gICAgICogIFwib3BlblwiIGF0dHJpYnV0ZS5cclxuICAgICAqL1xyXG4gICAgdXBkYXRlVG9nZ2xlU3RhdGUoKSB7XHJcbiAgICAgIGxldCBhbGxPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcclxuICAgICAgICAhZXhwYW5kZXIuaGFzQXR0cmlidXRlKCdvcGVuJykgPyBhbGxPcGVuID0gZmFsc2UgOiBhbGxPcGVuID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAhYWxsT3BlbiA/IHRoaXMuc3RhdGVPcGVuID0gZmFsc2UgOiB0aGlzLnN0YXRlT3BlbiA9IHRydWU7XHJcbiAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW4gOiB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxDbG9zZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT3BlbnMgYW4gZXhwYW5kZXIgZWxlbWVudC5cclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuICAgIG9wZW5FeHBhbmRlcihleHBhbmRlcikge1xyXG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcclxuICAgICAgY29uc3QgdGV4dCA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX190ZXh0Jyk7XHJcblxyXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgICBleHBhbmRlci5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnb3BlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xvc2VzIGFuIGV4cGFuZGVyIGVsZW1lbnQuXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBjbG9zZUV4cGFuZGVyKGV4cGFuZGVyKSB7XHJcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fc3VtbWFyeScpO1xyXG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcclxuXHJcbiAgICAgIHN1bW1hcnkuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgIGV4cGFuZGVyLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS10YWJsZS1leHBhbmRlcicpXS5mb3JFYWNoKHRhYmxlQ2FyZCA9PiBuZXcgVGFibGVDYXJkKHRhYmxlQ2FyZCkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIC8qKlxyXG4gICogVGFic1xyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10YWJzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xyXG4gICovXHJcbiAgY2xhc3MgVGFicyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWJjb21wb25lbnQsIGkpIHtcclxuICAgICAgdGhpcy50YWJjb21wb25lbnQgPSB0YWJjb21wb25lbnRcclxuICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKVxyXG4gICAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJ0YWJsaXN0XCJdJylcclxuICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjID0+IHRoaXMuY2hhbmdlVGFicyhjKSlcclxuICAgICAgfSlcclxuICAgICAgbGV0IHRhYkZvY3VzID0gMFxyXG4gICAgICB0YWJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xyXG4gICAgICAgIC8vIE1vdmUgcmlnaHRcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSlcclxuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzKytcclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGVuZCwgZ28gdG8gdGhlIHN0YXJ0XHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA+PSB0YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1vdmUgbGVmdFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzLS1cclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHN0YXJ0LCBtb3ZlIHRvIHRoZSBlbmRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gdGFicy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApXHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWJzKGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2coZ3JhbmRwYXJlbnQpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylbMF07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxyXG4gICAgICBjb25zdCBpc19tb2JpbGUgPSBncmFuZHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXRhYnNfX21vYmlsZScpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGlzX21vYmlsZSlcclxuXHJcbiAgICAgIC8vIENvbXBhcmUgc2VsZWN0ZWQgYW5kIHRhcmdldCwgYW5kIGlmIG9uIG1vYmlsZVxyXG4gICAgICAvLyBDbG9zZSB0aGUgdGFiIGlmIGFscmVhZHkgb3BlblxyXG4gICAgICBpZih0YXJnZXQgPT0gc2VsZWN0ZWQgJiYgaXNfbW9iaWxlKSB7XHJcbiAgICAgICAgLy8gVW5zZWxlY3QgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgc2VsZWN0ZWQgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhpcyB0YWIgYXMgc2VsZWN0ZWRcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKHRhcmdldClcclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFiIHBhbmVsc1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNob3cgdGhlIHNlbGVjdGVkIHBhbmVsXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0ZWQoZ3JhbmRwYXJlbnQucGFyZW50Tm9kZSwgdGFyZ2V0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpXHJcbiAgICAgICAgLmZvckVhY2godCA9PiB0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgZmFsc2UpKTtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylcclxuICAgICAgICAuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB0cnVlKVxyXG4gICAgICBlbGUuY2xhc3NMaXN0LmFkZChcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBoaWRlVGFicyhlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFicGFuZWxcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHAgPT4gcC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NlbGVjdGVkKGVsZSwgdGFyZ2V0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZS5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKSlcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApXHJcbiAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzJyldLmZvckVhY2goKHRhYnMsIGkpID0+IG5ldyBUYWJzKHRhYnMsIGkpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAqIEFuY2hvckxpbmtzXHJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWFuY2hvci1saW5rcycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcclxuICAqL1xyXG4gIGNsYXNzIEFuY2hvckxpbmtzIHtcclxuICAgIGNvbnN0cnVjdG9yKGFuY2hvckxpbmtzKSB7XHJcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcclxuXHJcbiAgICAgIGlmICh0aGlzLmFuY2hvckxpbmtzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MgPSB0aGlzLmZpbmRIZWFkaW5ncyhhbmNob3JMaW5rcy5kYXRhc2V0LmhlYWRpbmdzKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5hZGRBbmNob3JzVG9QYWdlKCk7XHJcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRIZWFkaW5ncyhoZWFkaW5ncykge1xyXG4gICAgICBsZXQgZm91bmRIZWFkaW5ncyA9IFtdXHJcbiAgICAgIGlmIChoZWFkaW5ncykge1xyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBDU1Mgc2VsZWN0b3JzIGZvciBvbmx5IGZpcnN0IGxldmVsIGhlYWRpbmdzIGluc2lkZSByaWNoLXRleHRcclxuICAgICAgICAvLyBhcmVhcyBhbmQgb3V0c2lkZSBvZiBjb21wb25lbnRzLlxyXG4gICAgICAgIGNvbnN0IGhlYWRpbmdUeXBlcyA9IGhlYWRpbmdzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgbGV0IHNlbGVjdG9ycyA9IGhlYWRpbmdUeXBlcy5tYXAodHlwZSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gJy5wYWdlX19jb250ZW50ID4gJyArIHR5cGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZWN0b3JzID0gc2VsZWN0b3JzLmpvaW4oJywgJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fY29udGVudCcpO1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMpLmZvckVhY2goKGhlYWRpbmcsIGkpID0+IHtcclxuICAgICAgICAgIGlmICghaGVhZGluZy5pZCkge1xyXG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvdW5kSGVhZGluZ3MucHVzaChoZWFkaW5nKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9ICAgICAgXHJcbiAgICAgIHJldHVybiBmb3VuZEhlYWRpbmdzO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihoZWFkaW5nLCBzZWxlY3Rvcikge1xyXG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XHJcbiAgICAgICAgZWwgIT09IGhlYWRpbmcgJiYgZWwuY29udGFpbnMoaGVhZGluZylcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEFuY2hvcnNUb1BhZ2UoKSB7XHJcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgIHRoaXMuZm91bmRIZWFkaW5ncy5mb3JFYWNoKGZvdW5kSGVhZGluZyA9PiB7XHJcbiAgICAgICAgaWYgKCFmb3VuZEhlYWRpbmcuZGF0YXNldC5hbmNob3JsaW5rc2lnbm9yZVxyXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcclxuICAgICAgICAgICYmICFmb3VuZEhlYWRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay1jYXJkX19oZWFkaW5nJylcclxuICAgICAgICAgICYmICF0aGlzLmFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihmb3VuZEhlYWRpbmcsICcubmhzdWstZ3JpZC1jb2x1bW4tb25lLXRoaXJkJykpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcclxuICAgICAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gZm91bmRIZWFkaW5nLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuaHN1ay11LXZpc3VhbGx5LWhpZGRlblwiKTtcclxuICAgICAgICAgIHdoaWxlIChoaWRkZW5FbGVtZW50cy5sZW5ndGggPiAwKSBoaWRkZW5FbGVtZW50c1swXS5yZW1vdmUoKTtcclxuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xyXG4gICAgICAgICAgYS5pbm5lckhUTUwgPSBhLmlubmVySFRNTC5yZXBsYWNlKC88YnJcXHMqW1xcL10/Pi9naSwgXCIgXCIpOyAvLyBzdHJpcCA8YnI+XHJcbiAgICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1hbmNob3ItbGlua3MnKV0uZm9yRWFjaChhbmNob3JMaW5rcyA9PiBuZXcgQW5jaG9yTGlua3MoYW5jaG9yTGlua3MpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAqIFJlc3BvbnNpYmxlIGZvciBnZW5lcmF0aW5nIHRhYmxlIG9mIGNvbnRlbnRzIGxpbmtzLlxyXG4gICovXHJcbiAgY2xhc3MgVGFibGVDb250ZW50cyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xyXG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMgPSB0YWJsZUNvbnRlbnRzO1xyXG5cclxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XHJcbiAgICAgIHRoaXMuaGVhZGluZ1NlbGVjdG9yID0gJ2gyLnRvY19oMic7XHJcbiAgICAgIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yID0gJ2gzLnRvY19oMyc7XHJcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xyXG5cclxuICAgICAgLy8gQW5jaG9yIGxpbmtzIG1hY3JvIHNldHMgdGhpcyBkYXRhIGF0dHJpYnV0ZSB3aGVuIFRPQyBpcyBmbGFnZ2VkIGFzIHRydWUuXHJcbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT25seSBhdHRlbXB0IHRvIGJ1aWxkIFRPQyBsaW5rcyBpZiBIMiBhbmNob3JzIGZvdW5kIG9uIHBhZ2UuXHJcbiAgICAgIGxldCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuaGVhZGluZ1NlbGVjdG9yKTtcclxuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMudGFibGVDb250ZW50cy5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQnVpbGQgbGluayBzdHJ1Y3R1cmUgZnJvbSBET00gYW5kIGFwcGVuZCBnZW5lcmF0ZWQgbWFya3VwIHRvIFRPQ1xyXG4gICAgICAvLyBjb21wb25lbnQuXHJcbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XHJcbiAgICAgIHRoaXMuc2V0VG9jTGlzdE1hcmt1cChsaW5rcyk7XHJcblxyXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcclxuICAgICAgLy8gY29udGVudC4gV2Ugc2tpcCB0aGUgZmlyc3QgaGVhZGluZyBvbiB0aGUgcGFnZS5cclxuICAgICAgaGVhZGluZ3MgPSBbXS5zbGljZS5jYWxsKGhlYWRpbmdzLCAxKTtcclxuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XHJcbiAgICAgIGNvbnN0IHN1YkhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IpO1xyXG4gICAgICBpZiAoc3ViSGVhZGluZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBCdWlsZHMgYXJyYXkgb2YgaGVhZGluZyBsaW5rIGF0dHJpYnV0ZXMgYW5kIHRoZWlyIGNoaWxkcmVuLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9ICAgICAgaGVhZGluZ3NcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVRvY0xpbmtzKGhlYWRpbmdzKSB7XHJcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xyXG5cclxuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcclxuXHJcbiAgICAgICAgLy8gU2V0IHVuaXF1ZSBpZCBmb3IgY3VycmVudCBoZWFkaW5nIEgyIGVsZW1lbnQuXHJcbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxyXG5cclxuICAgICAgICBsZXQgbGluayA9IHtcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcclxuICAgICAgICAgIGFuY2hvcjogaGVhZGluZ0lkLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHNpYmxpbmcgPSBoZWFkaW5nLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG5cclxuICAgICAgICAvLyBUcmF2ZXJzZSBET00gZm9yIEgzIGVsZW1lbnRzIGFmdGVyIGN1cnJlbnQgSDIgaGVhZGluZyBhbmQgYXBwZW5kIHRvXHJcbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXHJcbiAgICAgICAgd2hpbGUgKHNpYmxpbmcgJiYgIXNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDInKSkge1xyXG4gICAgICAgICAgaWYgKHNpYmxpbmcudGFnTmFtZSA9PT0gJ0gzJyAmJiBzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gzJykpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB1bmlxdWUgaWQgZm9yIGN1cnJlbnQgaGVhZGluZyBIMyBlbGVtZW50LlxyXG4gICAgICAgICAgICBjb25zdCBzdWJIZWFkaW5nSWQgPSBoZWFkaW5nSWQgKyAnLScgKyBjb3VudDtcclxuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgc3ViSGVhZGluZ0lkKVxyXG5cclxuICAgICAgICAgICAgbGluay5jaGlsZHJlbi5wdXNoKHtcclxuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoc2libGluZyksXHJcbiAgICAgICAgICAgICAgYW5jaG9yOiBzdWJIZWFkaW5nSWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGxpbmtzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBlaXRoZXIgdGhlIHNob3J0IG9yIGxvbmcgdGl0bGUgb2YgdGhlIGhlYWRpbmcgYmFzZWQgb24gZGF0YSBhdHRyLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgaGVhZGluZ1xyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIE9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZXRIZWFkaW5nVGl0bGUoaGVhZGluZykge1xyXG4gICAgICBsZXQgdGl0bGU7XHJcblxyXG4gICAgICBpZiAoaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvcnQtdGl0bGUnKSkge1xyXG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5kYXRhc2V0LnNob3J0VGl0bGU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmlubmVyVGV4dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBUT0MgbWFya3VwIGFuZCBhcHBlbmRzIHRvIGNvbXBvbmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB2b2lkXHJcbiAgICAgKi9cclxuICAgIHNldFRvY0xpc3RNYXJrdXAobGlua3MpIHtcclxuICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGFzLWNoaWxkcmVuJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWFuY2hvcmxpbmtzX193cmFwcGVyJylcclxuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENoZXZyb25TVkcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENpcmNsZVNWRygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcmVudExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgcGFyZW50TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBsaW5rLmFuY2hvcik7XHJcbiAgICAgICAgcGFyZW50TGluay5pbm5lclRleHQgPSBsaW5rLnRpdGxlO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcmVudExpbmspO1xyXG5cclxuICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgICBsaW5rLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2hpbGRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgICAgICBjaGlsZExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgaXRlbS5hbmNob3IpO1xyXG4gICAgICAgICAgICBjaGlsZExpbmsuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcclxuXHJcbiAgICAgICAgICAgIGNoaWxkSXRlbS5hcHBlbmQoY2hpbGRMaW5rKTtcclxuICAgICAgICAgICAgY2hpbGRMaXN0LmFwcGVuZChjaGlsZEl0ZW0pO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNoaWxkTGlzdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaXN0LmFwcGVuZChsaXN0SXRlbSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzLmFwcGVuZChsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1aWxkcyBiYWNrIHRvIHRvcCBsaW5rIGNvbXBvbmVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcclxuICAgICAqL1xyXG4gICAgY3JlYXRlQmFja1RvVG9wTGluaygpIHtcclxuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWJhY2stdG8tdG9wJyk7XHJcblxyXG4gICAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyNtYWluY29udGVudCcpO1xyXG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCd0aXRsZScsICdCYWNrIHRvIHRvcCcpO1xyXG4gICAgICBhbmNob3IuaW5uZXJUZXh0ID0gJ0JhY2sgdG8gdG9wJztcclxuXHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoYW5jaG9yKTtcclxuXHJcbiAgICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmplY3RzIGJhY2sgdG8gdG9wIGxpbmtzIGFib3ZlIFRPQyBoZWFkaW5ncyB3aXRoaW4gY29udGVudC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgdm9pZFxyXG4gICAgICovXHJcbiAgICBzZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncykge1xyXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vIEF2b2lkcyBkdXBsaWNhdGUgYmFjayB0byB0b3AgbGlua3Mgd2hlbiBzdGlja3kgaXMgcHJlc2VudC5cclxuICAgICAgICBpZiAoIWhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycpKSB7XHJcbiAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5jcmVhdGVCYWNrVG9Ub3BMaW5rKCk7XHJcbiAgICAgICAgICBoZWFkaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGhlYWRpbmcpO1xyXG4gICAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaGFzLXRvcC1saW5rJywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2hldnJvbiBTVkcuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIGdldENoZXZyb25TVkcoKSB7XHJcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG4gICAgICAgICAgICAgICAnPHBhdGggZD1cIk04LjAwMDE5IDYuOTk5OTRDOC4wMDA5NSA3LjEzMTU1IDcuOTc1NzIgNy4yNjIwMSA3LjkyNTk2IDcuMzgzODVDNy44NzYxOSA3LjUwNTY5IDcuODAyODcgNy42MTY1IDcuNzEwMTkgNy43MDk5NEwyLjcxMDE5IDEyLjcwOTlDMi42MTY5NSAxMi44MDMyIDIuNTA2MjYgMTIuODc3MSAyLjM4NDQzIDEyLjkyNzZDMi4yNjI2MSAxMi45NzgxIDIuMTMyMDQgMTMuMDA0IDIuMDAwMTkgMTMuMDA0QzEuODY4MzMgMTMuMDA0IDEuNzM3NzYgMTIuOTc4MSAxLjYxNTk0IDEyLjkyNzZDMS40OTQxMSAxMi44NzcxIDEuMzgzNDIgMTIuODAzMiAxLjI5MDE4IDEyLjcwOTlDMS4xOTY5NSAxMi42MTY3IDEuMTIyOTkgMTIuNTA2IDEuMDcyNTMgMTIuMzg0MkMxLjAyMjA2IDEyLjI2MjQgMC45OTYwOTQgMTIuMTMxOCAwLjk5NjA5NCAxMS45OTk5QzAuOTk2MDk0IDExLjg2ODEgMS4wMjIwNiAxMS43Mzc1IDEuMDcyNTMgMTEuNjE1N0MxLjEyMjk5IDExLjQ5MzkgMS4xOTY5NSAxMS4zODMyIDEuMjkwMTggMTEuMjg5OUw1LjU5MDE5IDYuOTk5OTRMMS4yOTAxOCAyLjcwOTk0QzEuMTAxODggMi41MjE2NCAwLjk5NjA5NCAyLjI2NjI0IDAuOTk2MDk0IDEuOTk5OTRDMC45OTYwOTQgMS43MzM2NCAxLjEwMTg4IDEuNDc4MjUgMS4yOTAxOCAxLjI4OTk0QzEuNDc4NDkgMS4xMDE2NCAxLjczMzg4IDAuOTk1ODUgMi4wMDAxOSAwLjk5NTg1QzIuMjY2NDkgMC45OTU4NSAyLjUyMTg4IDEuMTAxNjQgMi43MTAxOSAxLjI4OTk0TDcuNzEwMTkgNi4yODk5NEM3LjgwMjg3IDYuMzgzMzggNy44NzYxOSA2LjQ5NDIgNy45MjU5NiA2LjYxNjAzQzcuOTc1NzIgNi43Mzc4NyA4LjAwMDk1IDYuODY4MzMgOC4wMDAxOSA2Ljk5OTk0WlwiIGZpbGw9XCJibGFja1wiLz4nICtcclxuICAgICAgICAgICAgICc8L3N2Zz4nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaXJjbGUgU1ZHLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRDaXJjbGVTVkcoKSB7XHJcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIzXCIgdmlld0JveD1cIjAgMCAzIDNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuICAgICAgICAgICAgICAgJzxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIi8+JyArXHJcbiAgICAgICAgICAgICAnPC9zdmc+JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3MnKV0uZm9yRWFjaCh0YWJsZUNvbnRlbnRzID0+IG5ldyBUYWJsZUNvbnRlbnRzKHRhYmxlQ29udGVudHMpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAgKiBGaWx0ZXJcclxuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlcicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcclxuICAgKi9cclxuICBjbGFzcyBGaWx0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgICAgdGhpcy5jaGVja2JveGVzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xyXG4gICAgICB0aGlzLmRyb3Bkb3ducyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1zZWxlY3QnKV07XHJcbiAgICAgIHRoaXMuZ3JvdXBzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAnKV07XHJcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fc3VibWl0Jyk7XHJcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cF9fY2xlYXInKV07XHJcblxyXG4gICAgICB0aGlzLnNldFVwKCk7XHJcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5kcm9wZG93bnMuZm9yRWFjaChkcm9wZG93biA9PiB7XHJcbiAgICAgICAgZHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhldnQpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcclxuICAgICAgICBjb25zdCBsZWdlbmQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmllbGRzZXRfX2xlZ2VuZCcpO1xyXG4gICAgICAgIGlmIChsZWdlbmQpIHtcclxuICAgICAgICAgIGxlZ2VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZUdyb3VwRmllbGRzZXQoZXZ0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLmNsZWFyRmlsdGVyKGV2dCkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVcCgpIHtcclxuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLS1qcycpO1xyXG5cclxuICAgICAgdGhpcy5pbml0RmlsdGVycygpO1xyXG4gICAgICB0aGlzLmluaXRDbGVhclRvZ2dsZXMoKTtcclxuICAgICAgdGhpcy5pbml0Q291bnRlcnMoKTtcclxuXHJcbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxyXG4gICAgICBpZiAodGhpcy5zdWJtaXQpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEZpbHRlcnMoKSB7XHJcbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNHcm91cEZpbHRlckFjdGl2ZShncm91cCkpIHtcclxuICAgICAgICAgIC8vIENvbGxhcHNlIGdyb3VwIGlmIGZpbHRlcnMgbm90IGFjdGl2ZS5cclxuICAgICAgICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRGlzYWJsZSBzdWItZ3JvdXAgc2VsZWN0IGlmIG5vIG9wdGlvbiBpbiBwYXJlbnQgc2VsZWN0ZWQuXHJcbiAgICAgICAgaWYgKGdyb3VwLmNsYXNzTGlzdC5jb250YWlucygnaGFzLXN1Ymdyb3VwJykpIHtcclxuICAgICAgICAgIGNvbnN0IHBhcmVudFNlbGVjdCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1mb3JtLWdyb3VwLnBhcmVudC1ncm91cCBzZWxlY3QnKTtcclxuICAgICAgICAgIGNvbnN0IHN1YlNlbGVjdCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1mb3JtLWdyb3VwLnN1Yi1ncm91cCBzZWxlY3QnKTtcclxuXHJcbiAgICAgICAgICBpZiAoc3ViU2VsZWN0ICE9PSBudWxsICYmIHBhcmVudFNlbGVjdCAhPT0gbnVsbCAmJiBwYXJlbnRTZWxlY3QudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHN1YlNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFbmFibGUgc2Nyb2xsYWJsZSBjaGVja2JveCBncm91cHMgaWYgbW9yZSB0aGFuIGZvdXIgb3B0aW9ucy5cclxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXMnKTtcclxuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xyXG4gICAgICAgICAgaWYgKGNiLmNoaWxkRWxlbWVudENvdW50ID4gNCkge1xyXG4gICAgICAgICAgICBjYi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDbGVhclRvZ2dsZXMoKSB7XHJcbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyX19ncm91cF9fY2xlYXInKTtcclxuICAgICAgICBpZiAodGhpcy5pc0dyb3VwRmlsdGVyQWN0aXZlKGdyb3VwKSkge1xyXG4gICAgICAgICAgdG9nZ2xlTGluay5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q291bnRlcnMoKSB7XHJcbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ291bnQoZ3JvdXApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBY3RpdmVDb3VudChncm91cCkge1xyXG4gICAgICBjb25zdCBjb3VudEVsZW0gPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstaGludCcpO1xyXG5cclxuICAgICAgaWYgKGNvdW50RWxlbSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgY291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgIGNvdW50RWxlbS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb3VudEVsZW0uaW5uZXJUZXh0ID0gYCR7Y291bnR9IHNlbGVjdGVkYFxyXG4gICAgICBjb3VudEVsZW0uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzR3JvdXBGaWx0ZXJBY3RpdmUoZ3JvdXApIHtcclxuICAgICAgLy8gQ2hlY2sgaWYgY2hlY2tib3hlcyBhcmUgYWN0aXZlLlxyXG4gICAgICBjb25zdCBjaGVja2JveGVzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0Jyk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChjaGVja2JveGVzW2ldLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgc2VsZWN0cyBhcmUgYWN0aXZlLlxyXG4gICAgICBjb25zdCBzZWxlY3RFbGVtZW50cyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1zZWxlY3QnKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzZWxlY3RFbGVtZW50c1tpXS52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUdyb3VwRmllbGRzZXQoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldnQudGFyZ2V0LmNsb3Nlc3QoJy5uaHN1ay1maWx0ZXJfX2dyb3VwJykuY2xhc3NMaXN0LnRvZ2dsZSgnbmhzdWstZmlsdGVyX19ncm91cC0tY2xvc2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXBkYXRlZEZsYWcoaXNVcGRhdGVkKSB7XHJcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUuIHRvIGVuc3VyZSB2aWV3cG9ydCByZXNldHNcclxuICAgICAgLy8gYWZ0ZXIgZm9ybSBzdWJtaXQuXHJcbiAgICAgIGxldCBmbGFnRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtdXBkYXRlLWZsYWc9XCJmaWx0ZXJcIl0nKTtcclxuICAgICAgaWYgKGZsYWdFbGVtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgZmxhZ0VsZW1lbnQudmFsdWUgPSBpc1VwZGF0ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVSZXN1bHRzKGV2dCkge1xyXG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLHRvIGVuc3VyZSB2aWV3cG9ydCBzY3JvbGxzXHJcbiAgICAgIC8vIGRvd24gdG8gcmVzdWx0cyBsaXN0aW5ncyBhZnRlciBmb3JtIHN1Ym1pdC5cclxuICAgICAgdGhpcy5zZXRVcGRhdGVkRmxhZyh0cnVlKTtcclxuXHJcbiAgICAgIGNvbnN0IHBhcmVudEdyb3VwID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcubmhzdWstZmlsdGVyX19ncm91cCcpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUNvdW50KHBhcmVudEdyb3VwKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIHdoZXRoZXIgc2VsZWN0IGRyb3Bkb3duIGhhcyBjaGlsZCBmaWx0ZXIgYW5kIHJlc2V0IHRoYXQgdG9vLlxyXG4gICAgICBpZiAocGFyZW50R3JvdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtc3ViZ3JvdXAnKSAmJiBldnQudGFyZ2V0Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5wYXJlbnQtZ3JvdXAnKTtcclxuICAgICAgICBpZiAod3JhcHBlcikge1xyXG4gICAgICAgICAgY29uc3QgY2hpbGRTZWxlY3QgPSB3cmFwcGVyLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuc3ViLWdyb3VwIHNlbGVjdCcpO1xyXG4gICAgICAgICAgY2hpbGRTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvbnRhaW5lci5zdWJtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZpbHRlcihldnQpIHtcclxuICAgICAgdGhpcy5jbGVhckNoZWNrYm94ZXMoZXZ0KTtcclxuICAgICAgdGhpcy5jbGVhclNlbGVjdEVsZW1lbnRzKGV2dCk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNoZWNrYm94ZXMoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGV2dC50YXJnZXQ7XHJcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0Jyk7XHJcblxyXG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xyXG4gICAgICAgIGNiLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclNlbGVjdEVsZW1lbnRzKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBldnQudGFyZ2V0O1xyXG4gICAgICBjb25zdCBzZWxlY3RFbGVtZW50cyA9IHRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstc2VsZWN0Jyk7XHJcblxyXG4gICAgICBzZWxlY3RFbGVtZW50cy5mb3JFYWNoKHNlbGVjdCA9PiB7XHJcbiAgICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXInKV0uZm9yRWFjaChmaWx0ZXIgPT4gbmV3IEZpbHRlcihmaWx0ZXIpKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgKiBGaWx0ZXJUYWdcclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyLXRhZycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcclxuICAqL1xyXG4gIGNsYXNzIEZpbHRlclRhZyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWcpIHtcclxuICAgICAgdGhpcy50YWcgPSB0YWc7XHJcbiAgICAgIHRoaXMuaWNvbiA9IHRhZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyLXRhZ19faWNvbicpO1xyXG5cclxuICAgICAgdGhpcy5zZXRVcCgpO1xyXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIHRoaXMudGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gdGhpcy5yZW1vdmVGaWx0ZXIoZXZ0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRmlsdGVyKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGdyb3VwVGFncyA9IHRoaXMudGFnLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWZpbHRlci10YWcnKTtcclxuXHJcbiAgICAgIC8vIFJlbW92ZSBlbnRpcmUgZmlsdGVyIHRhZyBncm91cCBpZiBubyBvdGhlciB0YWdzIHByZXNlbnQuXHJcbiAgICAgIGlmIChncm91cFRhZ3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy50YWcucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFnLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBmb3JtLm5oc3VrLWZpbHRlciBpbnB1dFt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2goY2hlY2tib3ggPT4ge1xyXG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICBjaGVja2JveC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGZvcm0ubmhzdWstZmlsdGVyIHNlbGVjdCBvcHRpb25bdmFsdWU9JyR7dGhpcy50YWcuZGF0YXNldC5maWx0ZXJ9J11gKS5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50R3JvdXBTZWxlY3QgPSBvcHRpb24ucGFyZW50RWxlbWVudDtcclxuICAgICAgICBwYXJlbnRHcm91cFNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgc3ViLWdyb3VwIHNlbGVjdCBpZiB3ZSBhcmUgc2V0dGluZyB0aGUgcGFyZW50LFxyXG4gICAgICAgIGNvbnN0IGZvcm1Hcm91cEVsZW0gPSBvcHRpb24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAoZm9ybUdyb3VwRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhcmVudC1ncm91cCcpKSB7XHJcbiAgICAgICAgICBjb25zdCBzdWJHcm91cFNlbGVjdCA9IGZvcm1Hcm91cEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1zZWxlY3QnKTtcclxuICAgICAgICAgIHN1Ykdyb3VwU2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyZW50R3JvdXBTZWxlY3QuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXAoKSB7XHJcbiAgICAgIHRoaXMudGFnLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci10YWctLWpzJyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5pY29uKSB7XHJcbiAgICAgICAgdGhpcy5pY29uLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyLXRhZycpXS5mb3JFYWNoKHRhZyA9PiBuZXcgRmlsdGVyVGFnKHRhZykpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAgKiBMaXN0aW5nXHJcbiAgICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1saXN0aW5nJyBhbmQgJy5oZWUtbGlzdGluZ3MnIGFyZSBwYXNzZWRcclxuICAgKiBpbnRvIHRoaXMgY2xhc3MuXHJcbiAgICpcclxuICAgKiBAdG9kbyBSZW1vdmUgbGVnYWN5IHJlZmVyZW5jZXMgdG8gLm5oc3VrLWxpc3RpbmcgYW5kIGxvb3BzIG9uY2UgYWxsIG5ld1xyXG4gICAqIGNvbGxlY3Rpb24gdGVtcGxhdGVzIGhhdmUgYmVlbiBpbXBsZW1lbnRlZC5cclxuICAgKi9cclxuICBjbGFzcyBMaXN0aW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xyXG5cclxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgICBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zb3J0LCAubmhzdWstbGlzdGluZ19fc29ydCcpXS5mb3JFYWNoKGZvcm1FbGVtZW50ID0+IHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyhmb3JtRWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gRGlzYWJsZXMgYnJvd3NlciByZXN0b3Jpbmcgdmlld3BvcnQgdG8gcG9zaXRpb24gYmVmb3JlIHBhZ2UgcmVsb2FkLlxyXG4gICAgICBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XHJcblxyXG4gICAgICB0aGlzLnNjcm9sbFRvUmVzdWx0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XHJcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xyXG4gICAgICAgIFsuLi5mb3JtRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2VsZWN0JyldLmZvckVhY2goc2VsZWN0ID0+IHtcclxuICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSlcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyhmb3JtRWxlbWVudCkge1xyXG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcclxuICAgICAgICBbLi4uZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3N1Ym1pdCwgLm5oc3VrLWxpc3RpbmdfX3NvcnRfX3N1Ym1pdCcpXS5mb3JFYWNoKHN1Ym1pdCA9PiB7XHJcbiAgICAgICAgICBpZiAoc3VibWl0KSB7XHJcbiAgICAgICAgICAgIHN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRVcGRhdGVkRmxhZyhpc1VwZGF0ZWQpIHtcclxuICAgICAgbGV0IGZsYWdFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS11cGRhdGUtZmxhZz1cImxpc3RpbmdcIl0nKTtcclxuICAgICAgaWYgKGZsYWdFbGVtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgZmxhZ0VsZW1lbnQudmFsdWUgPSBpc1VwZGF0ZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSB7XHJcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUsdG8gZW5zdXJlIHZpZXdwb3J0IHNjcm9sbHNcclxuICAgICAgLy8gZG93biB0byByZXN1bHRzIGxpc3RpbmdzIGFmdGVyIGZvcm0gc3VibWl0LlxyXG4gICAgICB0aGlzLnNldFVwZGF0ZWRGbGFnKHRydWUpO1xyXG5cclxuICAgICAgZm9ybUVsZW1lbnQuc3VibWl0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG9SZXN1bHRzKCkge1xyXG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbik7XHJcblxyXG4gICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3Jlc3VsdHNfdXBkYXRlZCcpKSB7XHJcbiAgICAgICAgY29uc3QgbGlzdGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XHJcblxyXG4gICAgICAgIGlmIChsaXN0aW5nQ29udGFpbmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBsaXN0aW5nQ29udGFpbmVyLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nLCAubmhzdWstbGlzdGluZycpXS5mb3JFYWNoKGxpc3RpbmcgPT4gbmV3IExpc3RpbmcobGlzdGluZykpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjbGFzcyBDb29raWVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAvLyBiYW5uZXJcclxuICAgICAgdGhpcy51c2VDb29raWVzID0gJydcclxuICAgICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWstY29va2llLWJhbm5lcicpXHJcbiAgICAgIHRoaXMuc2hvd0Nvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0Nvb2tpZXMnKVxyXG4gICAgICB0aGlzLnJlbW92ZUNvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQ29va2llcycpXHJcbiAgICAgIHRoaXMuaG9zdCA9IHRoaXMuZ2V0SG9zdCgpXHJcblxyXG4gICAgICB0aGlzLmNvb2tpZVN0YXR1cygpXHJcbiAgICAgIHRoaXMuc2V0Q29va2llcygpXHJcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxyXG5cclxuICAgICAgLy8gcG9saWN5IHBhZ2VcclxuICAgICAgdGhpcy5TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWtfX2Nvb2tpZVN0YXR1cycpXHJcbiAgICAgIHRoaXMuSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNJbicpXHJcbiAgICAgIHRoaXMuT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzT3V0JylcclxuXHJcbiAgICAgIHRoaXMudG9nZ2xlU3RhdHVzKClcclxuICAgIH1cclxuXHJcbiAgICBjb29raWVTdGF0dXMoKXtcclxuICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIilcclxuICAgICAgY29va2llcy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gYy5tYXRjaChuZXcgUmVnRXhwKCcoXnwgKWNvb2tpZV9jb25zZW50KFteO10rKScpKVxyXG4gICAgICAgIGlmKG1hdGNoKSB7XHJcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBjLnNwbGl0KFwiPVwiKVsxXVxyXG4gICAgICAgICAgdGhpcy51c2VDb29raWVzID0gc3RhdHVzXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldEhvc3QoKXtcclxuICAgICAgY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0LnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpWzBdXHJcbiAgICAgIHJldHVybiBob3N0XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGlmKHRoaXMuc2hvd0Nvb2tpZXMpIHtcclxuICAgICAgICB0aGlzLnNob3dDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc2hvd0Nvb2tpZSlcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLnJlbW92ZUNvb2tpZXMpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUNvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZW1vdmVDb29raWUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYW5uZXJTaG93KCkge1xyXG4gICAgICBpZih0aGlzLmJhbm5lcikge1xyXG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBiYW5uZXJIaWRlKCkge1xyXG4gICAgICBpZih0aGlzLmJhbm5lcikge1xyXG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29va2llcygpIHtcclxuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSAnJykge1xyXG4gICAgICAgICAgdGhpcy5iYW5uZXJTaG93KClcclxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0FjY2VwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2FjY2VwdF9hbmFseXRpY3MnKVxyXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0FjY2VwdCkge1xyXG4gICAgICAgICAgICBhbmFseXRpY3NBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xyXG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcclxuICAgICAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NEZWNsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfZGVjbGluZV9hbmFseXRpY3MnKVxyXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0RlY2xpbmUpIHtcclxuICAgICAgICAgICAgYW5hbHl0aWNzRGVjbGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XHJcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxyXG4gICAgICAgICAgICAgIHRoaXMubm9Db29raWUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VDb29raWUoKSB7XHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD10cnVlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXHJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICB9XHJcblxyXG4gICAgbm9Db29raWUoKSB7XHJcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD1mYWxzZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN0YXR1cygpIHtcclxuICAgICAgaWYodGhpcy5TdGF0dXMpe1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc091dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcclxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxyXG4gICAgICAgICAgdGhpcy51c2VDb29raWUoKVxyXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNJbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcclxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxyXG4gICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXHJcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09IFwiZmFsc2VcIiB8fCB0aGlzLnVzZUNvb2tpZXMgPT09ICcnICkge1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5PdXQpXHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuSW4pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5PdXQpXHJcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLkluKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlCbG9jayhpdGVtKSB7XHJcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlOb25lKGl0ZW0pIHtcclxuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlZHVuZGFudCBidXQgdXNlZnVsXHJcbiAgICBzaG93Q29va2llKCkge1xyXG4gICAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va2llcycpXHJcbiAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9ICc+ICcgKyBkb2N1bWVudC5jb29raWVcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVtb3ZlQ29va2llKCkge1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZV9jb25zZW50PWZhbHNlOyBtYXgtYWdlPTBcIlxyXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIG5ldyBDb29raWVzKGRvY3VtZW50KVxyXG59IiwiLyoqXHJcbiogU3ViTmF2XHJcbiogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1zdWJuYXYnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY2xhc3Mgc3ViTmF2IHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxyXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdhJylcclxuICAgICAgdGhpcy5wYXJlbnRMaXN0ID0gdGhpcy5jb250YWluZXIucGFyZW50Tm9kZVxyXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluaykge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXHJcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHRoaXMudG9nZ2xlTWVudShldmVudCkpXHJcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudShldmVudClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3RhdGUoKXtcclxuICAgICAgY29uc3QgYWN0aXZlRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcclxuICAgICAgYWN0aXZlRWxlbXMuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICBpZihlbGVtICE9IHRoaXMuY29udGFpbmVyKXtcclxuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxyXG4gICAgICAgICAgZWxlbS50b2dnbGVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgaWYoYWN0aXZlRWxlbXMubGVuZ3RoID09PSAwKXtcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU1lbnUoZXZlbnQpIHtcclxuICAgICAgdGhpcy5oYW5kbGVTdGF0ZSgpXHJcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5jb250YWluZXIsIFwiaXMtYWN0aXZlXCIpXHJcbiAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKHRoaXMuY29udGFpbmVyLCBcImFyaWEtZXhwYW5kZWRcIilcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcclxuICAgICAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVyblxyXG4gICAgICBjb25zdCBoYXNDbGFzcyA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcclxuICAgICAgaWYgKGhhc0NsYXNzKSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHIpIHtcclxuICAgICAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBhdHRyIGFyZSBtaXNzaW5nXHJcbiAgICAgIGlmICghZWxlbWVudCB8fCAhYXR0cikgcmV0dXJuXHJcbiAgICAgIC8vIFRvZ2dsZSBhdHRyaWJ1dGUgdmFsdWUuIFRyZWF0IG5vIGV4aXN0aW5nIGF0dHIgc2FtZSBhcyB3aGVuIHNldCB0byBmYWxzZVxyXG4gICAgICBjb25zdCB2YWx1ZSA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnKSA/ICdmYWxzZScgOiAndHJ1ZSdcclxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXN1Ym5hdicpXS5mb3JFYWNoKHN1Ym5hdiA9PiBuZXcgc3ViTmF2KHN1Ym5hdikpXHJcblxyXG4gIC8qIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtbWVudVwiKS5mb2N1cygpXHJcbiAgfSkgKi9cclxuXHJcbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1tZW51XCIpO1xyXG5cclxuICBjbG9zZU1lbnUgJiYgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpLmZvY3VzKClcclxuICB9KVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICB1c2VySW5wdXQoZXZlbnQpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdXNlcklucHV0KSBcclxuICBcclxuICBmdW5jdGlvbiB1c2VySW5wdXQoZXZlbnQpIHtcclxuICAgIC8vIGNsb3NlIG1lbnUgaWYgY2xpY2tpbmcgb3V0c2lkZVxyXG4gICAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXHJcbiAgICBpZihvcGVuTWVudSl7XHJcbiAgICAgIGNvbnN0IGlzTm90TWVudSA9IGV2ZW50LnRhcmdldCAhPT0gb3Blbk1lbnVcclxuICAgICAgY29uc3QgaXNOb3RNZW51QnV0dG9uID0gZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpXHJcbiAgICAgIGNvbnN0IGlzTWVudUNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcclxuICAgICAgaWYoaXNOb3RNZW51ICYmIGlzTm90TWVudUJ1dHRvbiAmJiAhaXNNZW51Q2hpbGQpe1xyXG4gICAgICAgIG9wZW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zaG93XCIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNsb3NlIHN1YiBuYXYgaWYgY2xpY2tpbmcgYW55d2hlcmUgb24gdGhlIGRvY3VtZW50IGV4Y2VwdCB0aGUgb3BlbiBvciBhIG5ldyBzdWJuYXZcclxuICAgIGNvbnN0IG9wZW5TdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcclxuICAgIGlmKG9wZW5TdWIpe1xyXG4gICAgICBjb25zdCBpc05vdFN1YiA9IGV2ZW50LnRhcmdldCAhPT0gb3BlblN1YlxyXG4gICAgICBjb25zdCBpc1N1YkNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxyXG4gICAgICBpZihpc05vdFN1YiAmJiAhaXNTdWJDaGlsZCl7XHJcbiAgICAgICAgb3BlblN1Yi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24tbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3VibmF2LW9wZW5cIilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTkhTVUstSEVFIENvbXBvbmVudHNcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWNvb2tpZXMvY29va2llcyc7XHJcbmltcG9ydCBTdWJOYXYgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWhlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdic7XHJcblxyXG4vLyBIRUUgQ29tcG9uZW50c1xyXG5pbXBvcnQgQW5jaG9yTGlua3MgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcyc7XHJcbmltcG9ydCBBbmNob3JMaW5rc1N0aWNreSBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9oZWUtYW5jaG9ybGlua3Mtc3RpY2t5L2FuY2hvcmxpbmtzLXN0aWNreSc7XHJcbmltcG9ydCBUYWJsZUNvbnRlbnRzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvdG9jJztcclxuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcnO1xyXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1tZWRpYS9tZWRpYSc7XHJcbmltcG9ydCBOYXZNYXAgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uYXZtYXAvbmF2bWFwJztcclxuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXInO1xyXG5pbXBvcnQgU3VtbWFyeUNhcmQgZnJvbSBcIi4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtY2FyZC0tc3VtbWFyeS9zdW1tYXJ5XCI7XHJcbmltcG9ydCBUYWJzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFicy90YWJzJztcclxuaW1wb3J0IFRhYmxlQ2FyZCBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyJztcclxuXHJcbi8vIFVuc29ydGVkIGNvbXBvbmVudHNcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXInO1xyXG5pbXBvcnQgRmlsdGVyVGFnIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZyc7XHJcblxyXG4vLyBJbml0aWFsaXplIGNvbXBvbmVudHNcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBUYWJzKCk7XHJcbiAgQW5jaG9yTGlua3MoKTtcclxuICBBbmNob3JMaW5rc1N0aWNreSgpO1xyXG4gIENvb2tpZXMoKTtcclxuICBGaWx0ZXIoKTtcclxuICBGaWx0ZXJUYWcoKTtcclxuICBMaXN0aW5nKCk7XHJcbiAgTWVkaWEoKTtcclxuICBOYXZNYXAoKTtcclxuICBTdWJOYXYoKTtcclxuICBTdW1tYXJ5Q2FyZCgpO1xyXG4gIE5ld3NsZXR0ZXIoKTtcclxuICBUYWJsZUNvbnRlbnRzKCk7XHJcbiAgVGFibGVDYXJkKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQW5jaG9yTGlua3NTdGlja3kiLCJjb250YWluZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0b2dnbGVCdG4iLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5QW5jaG9yTGlua3MiLCJzaWRlYmFyQW5jaG9yTGlua3MiLCJkb2N1bWVudCIsImZvb3RlciIsImFkZEV2ZW50TGlzdGVuZXJzIiwidG9nZ2xlU3RpY2t5VG9vbGJhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MiLCJldmVudCIsImtleUNvZGUiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwid2luZG93IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJ0b2NCbG9ja1Zpc2libGUiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiZm9vdGVyVmlzaWJsZSIsImFkZCIsInJlbW92ZSIsImVsZW1lbnQiLCJib3VuZGluZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsZW1lbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsInRvcCIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJhbmNob3JMaW5rcyIsIlN1bW1hcnlDYXJkIiwic3VtbWFyeUNhcmQiLCJ0b2dnbGVMaW5rIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVTdW1tYXJ5IiwiVHJhbnNjcmlwdCIsInRvZ2dsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImV2dCIsInRvZ2dsZXRyYW5zY3JpcHQiLCJpc0NvbGxhcHNlZCIsImNvbnRhaW5zIiwidHJhbnNjcmlwdCIsIk5hdk1hcCIsIm1hcCIsInN2ZyIsInJlZ2lvbnMiLCJsaXN0IiwiYWRkTGlua3NUb01hcCIsImNsZWFuU3R5bGUiLCJtYXBFdmVudExpc3RlbmVycyIsImxpbmtFdmVudExpc3RlbmVycyIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJyZWdpb24iLCJ0aGlzQ291bnRlcnBhcnQiLCJtYXBDb3VudGVycGFydCIsImlkIiwidGhpc0hyZWYiLCJocmVmIiwidGhpc1RpdGxlIiwiY2hpbGRyZW4iLCJ3cmFwTGluayIsImNvbmNhdCIsIl90aGlzMiIsIm1hcEluIiwibWFwT3V0IiwibWFwQ2xpY2siLCJfdGhpczMiLCJpdGVtIiwibGlua0V2ZW50IiwibW92ZVRvVG9wIiwib2JqIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwidGhpc0xpbmsiLCJ0aGlzTWFwQ291bnRlcnBhcnQiLCJjbG9zZXN0IiwiY2xpY2siLCJ0aGlzSWQiLCJmaW5kIiwiZGlyZWN0aW9uIiwidHlwZSIsImxpbmtDb3VudGVycGFydCIsImdldFNWR0RvY3VtZW50IiwiTmV3c2xldHRlciIsIm5ld3NsZXR0ZXIiLCJyZXF1aXJlZElucHV0cyIsImVycm9ycyIsImluaXQiLCJyZWNhcHRjaGFDYWxsYmFjayIsInJlc2V0Rm9ybSIsImFkZEV2ZW50cyIsImlucHV0IiwiYyIsInZhbGlkYXRlIiwidGFyZ2V0RXJyb3IiLCJnZXRFbGVtZW50QnlJZCIsIm5hbWUiLCJ0YXJnZXRTdW1tYXJ5RXJyb3IiLCJlcnJvckVtcHR5IiwiZXJyb3JFbWFpbCIsImVycm9yQ29uc2VudCIsInVwZGF0ZVN1bW1hcnkiLCJlcnJvclN1bW1hcnkiLCJsZW5ndGgiLCJkaXNwbGF5IiwiaXNFbXB0eSIsInNob3dFcnJvciIsImhpZGVFcnJvciIsInJlIiwidGVzdCIsImNoZWNrZWQiLCJmaWx0ZXIiLCJwdXNoIiwic3RyIiwidHJpbSIsImVycm9yIiwiZXJyb3JDbGFzc2VzIiwiZXJyb3JjbGFzcyIsImVycm9yc3VtbWFyeSIsImVycm9yU3VtbWFyeUl0ZW1zIiwic3VtbWFyeWl0ZW0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJUYWJsZUNhcmQiLCJ0YWJsZUNhcmQiLCJleHBhbmRlcnMiLCJzdGF0ZU9wZW4iLCJpbm5lclRleHQiLCJkYXRhc2V0IiwibGFiZWxPcGVuIiwiaW5pdEV4cGFuZGVyT2JzZXJ2ZXIiLCJ0b2dnbGVFeHBhbmRlcnMiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnNMaXN0IiwibXV0YXRpb24iLCJhdHRyaWJ1dGVOYW1lIiwidXBkYXRlVG9nZ2xlU3RhdGUiLCJleHBhbmRlciIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwib3BlbkV4cGFuZGVyIiwiY2xvc2VFeHBhbmRlciIsImxhYmVsQ2xvc2UiLCJhbGxPcGVuIiwiaGFzQXR0cmlidXRlIiwic3VtbWFyeSIsInRleHQiLCJUYWJzIiwidGFiY29tcG9uZW50IiwiaSIsInRhYnMiLCJ0YWJMaXN0IiwidGFiIiwiY2hhbmdlVGFicyIsInRhYkZvY3VzIiwiZSIsInBhcmVudCIsInBhcmVudE5vZGUiLCJncmFuZHBhcmVudCIsInNlbGVjdGVkIiwiaXNfbW9iaWxlIiwicmVtb3ZlU2VsZWN0ZWQiLCJoaWRlVGFicyIsInNldFNlbGVjdGVkIiwic2hvd1NlbGVjdGVkIiwiZWxlIiwidCIsInAiLCJBbmNob3JMaW5rcyIsImhpZGRlbiIsImZvdW5kSGVhZGluZ3MiLCJmaW5kSGVhZGluZ3MiLCJoZWFkaW5ncyIsImFkZEFuY2hvcnNUb1BhZ2UiLCJoZWFkaW5nVHlwZXMiLCJzcGxpdCIsInNlbGVjdG9ycyIsImpvaW4iLCJjb250ZW50Q29udGFpbmVyIiwiaGVhZGluZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbiIsInNlbGVjdG9yIiwic29tZSIsImVsIiwidWwiLCJjcmVhdGVFbGVtZW50IiwiZm91bmRIZWFkaW5nIiwiYW5jaG9ybGlua3NpZ25vcmUiLCJsaSIsImEiLCJoaWRkZW5FbGVtZW50cyIsIlRhYmxlQ29udGVudHMiLCJ0YWJsZUNvbnRlbnRzIiwiY29udGFpbmVyU2VsZWN0b3IiLCJoZWFkaW5nU2VsZWN0b3IiLCJzdWJIZWFkaW5nU2VsZWN0b3IiLCJoZWFkaW5nUHJlZml4IiwibGlua3MiLCJjcmVhdGVUb2NMaW5rcyIsInNldFRvY0xpc3RNYXJrdXAiLCJzbGljZSIsImNhbGwiLCJzZXRCYWNrVG9Ub3BMaW5rcyIsInN1YkhlYWRpbmdzIiwiaW5kZXgiLCJoZWFkaW5nSWQiLCJsaW5rIiwidGl0bGUiLCJnZXRIZWFkaW5nVGl0bGUiLCJhbmNob3IiLCJzaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY291bnQiLCJzdWJIZWFkaW5nSWQiLCJzaG9ydFRpdGxlIiwibGlzdEl0ZW0iLCJzcGFuIiwiZ2V0Q2hldnJvblNWRyIsImdldENpcmNsZVNWRyIsImFwcGVuZCIsInBhcmVudExpbmsiLCJjaGlsZExpc3QiLCJjaGlsZEl0ZW0iLCJjaGlsZExpbmsiLCJjcmVhdGVCYWNrVG9Ub3BMaW5rIiwiaW5zZXJ0QmVmb3JlIiwiRmlsdGVyIiwiY2hlY2tib3hlcyIsImRyb3Bkb3ducyIsImdyb3VwcyIsInN1Ym1pdCIsImNsZWFyVG9nZ2xlIiwic2V0VXAiLCJjaGVja2JveCIsInVwZGF0ZVJlc3VsdHMiLCJkcm9wZG93biIsImdyb3VwIiwibGVnZW5kIiwidG9nZ2xlR3JvdXBGaWVsZHNldCIsImNsZWFyRmlsdGVyIiwiaW5pdEZpbHRlcnMiLCJpbml0Q2xlYXJUb2dnbGVzIiwiaW5pdENvdW50ZXJzIiwiaXNHcm91cEZpbHRlckFjdGl2ZSIsInBhcmVudFNlbGVjdCIsInN1YlNlbGVjdCIsImNiIiwiY2hpbGRFbGVtZW50Q291bnQiLCJfdGhpczQiLCJ1cGRhdGVBY3RpdmVDb3VudCIsImNvdW50RWxlbSIsInNlbGVjdEVsZW1lbnRzIiwic2V0VXBkYXRlZEZsYWciLCJpc1VwZGF0ZWQiLCJmbGFnRWxlbWVudCIsInBhcmVudEdyb3VwIiwibm9kZU5hbWUiLCJ3cmFwcGVyIiwiY2hpbGRTZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiY2xlYXJDaGVja2JveGVzIiwiY2xlYXJTZWxlY3RFbGVtZW50cyIsInNlbGVjdCIsIkZpbHRlclRhZyIsInRhZyIsImljb24iLCJyZW1vdmVGaWx0ZXIiLCJncm91cFRhZ3MiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJvcHRpb24iLCJwYXJlbnRHcm91cFNlbGVjdCIsImZvcm1Hcm91cEVsZW0iLCJzdWJHcm91cFNlbGVjdCIsIkxpc3RpbmciLCJmb3JtRWxlbWVudCIsInRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyIsImhpc3RvcnkiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInNjcm9sbFRvUmVzdWx0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidXJsIiwiVVJMIiwibG9jYXRpb24iLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJsaXN0aW5nQ29udGFpbmVyIiwic2Nyb2xsSW50b1ZpZXciLCJsaXN0aW5nIiwiQ29va2llcyIsInVzZUNvb2tpZXMiLCJiYW5uZXIiLCJzaG93Q29va2llcyIsInJlbW92ZUNvb2tpZXMiLCJob3N0IiwiZ2V0SG9zdCIsImNvb2tpZVN0YXR1cyIsInNldENvb2tpZXMiLCJTdGF0dXMiLCJJbiIsIk91dCIsInRvZ2dsZVN0YXR1cyIsImNvb2tpZXMiLCJjb29raWUiLCJtYXRjaCIsIlJlZ0V4cCIsInN0YXR1cyIsInRvU3RyaW5nIiwic2hvd0Nvb2tpZSIsInJlbW92ZUNvb2tpZSIsImJhbm5lclNob3ciLCJiYW5uZXJIaWRlIiwiYW5hbHl0aWNzQWNjZXB0IiwidXNlQ29va2llIiwiYW5hbHl0aWNzRGVjbGluZSIsIm5vQ29va2llIiwicmVsb2FkIiwiZGlzcGxheUJsb2NrIiwiZGlzcGxheU5vbmUiLCJvdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN1Yk5hdiIsInBhcmVudExpc3QiLCJ0b2dnbGVNZW51IiwiaGFuZGxlU3RhdGUiLCJhY3RpdmVFbGVtcyIsImVsZW0iLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImNsYXNzTmFtZSIsImhhc0NsYXNzIiwiYXR0ciIsInN1Ym5hdiIsImNsb3NlTWVudSIsInVzZXJJbnB1dCIsIm9wZW5NZW51IiwiaXNOb3RNZW51IiwiaXNOb3RNZW51QnV0dG9uIiwiaXNNZW51Q2hpbGQiLCJvcGVuU3ViIiwiaXNOb3RTdWIiLCJpc1N1YkNoaWxkIiwiU3ViTmF2IiwiTWVkaWEiXSwic291cmNlUm9vdCI6IiJ9