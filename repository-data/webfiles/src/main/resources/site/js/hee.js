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
              var footerVisible = this.footer ? this.isElementInViewport(this.footer) : false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7RUFDVC9ELDRGQUFNLENBQUMsQ0FBQztFQUNScUMsa0dBQVMsQ0FBQyxDQUFDO0VBQ1hXLDZGQUFPLENBQUMsQ0FBQztFQUNUcUUsZ0ZBQUssQ0FBQyxDQUFDO0VBQ1BqVCxrRkFBTSxDQUFDLENBQUM7RUFDUmdULGtHQUFNLENBQUMsQ0FBQztFQUNSL1QseUZBQVcsQ0FBQyxDQUFDO0VBQ2IwRCwwRkFBVSxDQUFDLENBQUM7RUFDWjhHLHVGQUFhLENBQUMsQ0FBQztFQUNmdkUsbUdBQVMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9oZWUtYW5jaG9ybGlua3Mtc3RpY2t5L2FuY2hvcmxpbmtzLXN0aWNreS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLWNhcmQtLXN1bW1hcnkvc3VtbWFyeS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW1lZGlhL21lZGlhLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmF2bWFwL25hdm1hcC5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlci5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFicy90YWJzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvYW5jaG9ybGlua3MuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy90b2MuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9uaHN1ay1oZWUtY29va2llcy9jb29raWVzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL25oc3VrLWhlZS1oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2hlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgQW5jaG9yIGxpbmsgc3RpY2t5IHRvb2xiYXIgYXQgYm90dG9tIG9mIHZpZXdwb3J0LlxuICAgKi9cbiAgY2xhc3MgQW5jaG9yTGlua3NTdGlja3kge1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgdGhpcy50b2dnbGVCdG4gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uaGVlLWFuY2hvcmxpbmtzX19zdGlja3lfX2J0bicpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtYW5jaG9ybGlua3MnKTtcbiAgICAgIHRoaXMuc2lkZWJhckFuY2hvckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3JpZ2h0YmFyIC5oZWUtYW5jaG9ybGlua3MnKTtcbiAgICAgIHRoaXMuZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrLWZvb3RlcicpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnRvZ2dsZVN0aWNreVRvb2xiYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyBmb3IgVE9DIGJ1dHRvbiB0b2dnbGUsIFRPQyBsaW5rIG5hdmlnYXRpb24gYW5kXG4gICAgICogdGhlIHdpbmRvdyB2aWV3cG9ydCBzY3JvbGwgdG9nZ2xlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpKVxuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnICYmIGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyAvIGhpZGVzIHRoZSBzdGlja3kgVE9DIGFuY2hvciBsaW5rcyB3aGVuIFwiVGFibGUgb2YgQ29udGVudHNcIiBidXR0b25cbiAgICAgKiB0cmlnZ2VyZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgdG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc3RpY2t5Jyk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLnF1ZXJ5U2VsZWN0b3IoJ2E6Zmlyc3Qtb2YtdHlwZScpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgVE9DIGJvdHRvbSBcInRvb2xiYXJcIiB3aGVuIHRoZSBzaWRlYmFyIFRPQyBoZWFkaW5nIGlzXG4gICAgICogb3V0c2lkZSB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgdG9nZ2xlU3RpY2t5VG9vbGJhcigpIHtcbiAgICAgIGNvbnN0IHRvY0Jsb2NrVmlzaWJsZSA9IHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzLnNpZGViYXJBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdoMicpKTtcbiAgICAgIGNvbnN0IGZvb3RlclZpc2libGUgPSAgIHRoaXMuZm9vdGVyPyB0aGlzLmlzRWxlbWVudEluVmlld3BvcnQodGhpcy5mb290ZXIpOiBmYWxzZTtcblxuICAgICAgaWYgKCF0b2NCbG9ja1Zpc2libGUgJiYgIWZvb3RlclZpc2libGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAgICovXG4gICAgaXNFbGVtZW50SW5WaWV3cG9ydChlbGVtZW50KSB7XG4gICAgICBjb25zdCBib3VuZGluZyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBlbGVtZW50SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zdCBlbGVtZW50V2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuXG4gICAgICByZXR1cm4gYm91bmRpbmcudG9wID49IC1lbGVtZW50SGVpZ2h0XG4gICAgICAgICYmIGJvdW5kaW5nLmxlZnQgPj0gLWVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSArIGVsZW1lbnRXaWR0aFxuICAgICAgICAmJiBib3VuZGluZy5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIGVsZW1lbnRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rc19fc3RpY2t5JyldLmZvckVhY2goYW5jaG9yTGlua3MgPT4gbmV3IEFuY2hvckxpbmtzU3RpY2t5KGFuY2hvckxpbmtzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXG4gIGNsYXNzIFN1bW1hcnlDYXJkIHtcblxuICAgIGNvbnN0cnVjdG9yKHN1bW1hcnlDYXJkKSB7XG4gICAgICB0aGlzLnN1bW1hcnlDYXJkID0gc3VtbWFyeUNhcmQ7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLnN1bW1hcnlDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtY2FyZC0tc3VtbWFyeV9fdG9nZ2xlJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVTdW1tYXJ5KCk7XG4gICAgICB9KVxuXG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBsaW5rIGVudGVyIGFuZCBzcGFjZWJhciBrZXkgcHJlc3MuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3VtbWFyeSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZVN1bW1hcnkoKSB7XG4gICAgICB0aGlzLnN1bW1hcnlDYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2RlZmF1bHQnKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWNhcmQtLXN1bW1hcnknKV0uZm9yRWFjaChzdW1tYXJ5Q2FyZCA9PiBuZXcgU3VtbWFyeUNhcmQoc3VtbWFyeUNhcmQpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWVkaWEgdHJhbnNjcmlwdFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcuaGVlLW1lZGlhLXRyYW5zY3JpcHQnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIFRyYW5zY3JpcHQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9nZ2xlcylcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlcykge1xuICAgICAgICB0aGlzLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xldHJhbnNjcmlwdChldnQpKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGV0cmFuc2NyaXB0KCkge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQoKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaXNDb2xsYXBzZWQoKSB7XG4gICAgICBpZih0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIikpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLW1lZGlhX190cmFuc2NyaXB0JyldLmZvckVhY2godHJhbnNjcmlwdCA9PiBuZXcgVHJhbnNjcmlwdCh0cmFuc2NyaXB0KSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1hcFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstcmVnaW9uJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOYXZNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgc3ZnKSB7XG4gICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgdGhpcy5yZWdpb25zID0gWy4uLnN2Zy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1yZWdpb24nKV07XG4gICAgICB0aGlzLmxpc3QgPSBbLi4ubWFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyNyZWdpb25MaXN0IGxpIGEnKV07XG5cbiAgICAgIHRoaXMuYWRkTGlua3NUb01hcCgpO1xuICAgICAgdGhpcy5jbGVhblN0eWxlKCk7XG4gICAgICB0aGlzLm1hcEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmxpbmtFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsZWFuU3R5bGUoKXtcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgIC5zdDB7ZmlsbDojMDA1RUI4O3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuc3Qxe2ZpbGw6I0FFQjdCRDtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLmhvdmVyICoge3N0cm9rZTojZmZlYjNiO3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICAgIC5mb2N1cyAuc3QwIHtmaWxsOiNmZmViM2I7c3Ryb2tlOiMyMTJiMzI7fVxuICAgICAgICAuZm9jdXMgKiB7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgIGApKVxuICAgIH1cblxuICAgIGFkZExpbmtzVG9NYXAoKXtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQocmVnaW9uLmlkKVxuICAgICAgICBjb25zdCB0aGlzSHJlZiA9ICh0aGlzQ291bnRlcnBhcnQuaHJlZik/IHRoaXNDb3VudGVycGFydC5ocmVmIDogXCIvXCJcbiAgICAgICAgY29uc3QgdGhpc1RpdGxlID0gKHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwpPyB0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MIDogXCJcIlxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlZ2lvbi5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gYDxhIHhsaW5rOmhyZWY9XCIke3RoaXNIcmVmfVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXNUaXRsZX08L3RpdGxlPlxuICAgICAgICAgICR7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5gXG4gICAgICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3cmFwTGlua1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBtYXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm1hcEluKGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLm1hcE91dChlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdGhpcy5tYXBDbGljayhldmVudCkpKVxuICAgIH1cblxuICAgIGxpbmtFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiZm9jdXNcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiZm9jdXNcIikpKVxuICAgIH1cblxuICAgIG1vdmVUb1RvcChvYmopIHtcbiAgICAgIG9iai5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG9iaik7XG4gICAgfVxuXG4gICAgbWFwSW4odGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0aGlzLm1vdmVUb1RvcCh0YXJnZXQpXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwT3V0KHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcENsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCB0aGlzTWFwQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiZ1wiKS5pZClcbiAgICAgIGlmKHRoaXNNYXBDb3VudGVycGFydCkgdGhpc01hcENvdW50ZXJwYXJ0LmNsaWNrKClcbiAgICB9XG5cbiAgICBtYXBDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50KHRhcmdldCwgZGlyZWN0aW9uLCB0eXBlKSB7XG4gICAgICBjb25zdCB0aGlzSWQgPSB0YXJnZXQuaWRcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlua0NvdW50ZXJwYXJ0KHRoaXNJZClcbiAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJpblwiKSB7XG4gICAgICAgIHRoaXMubWFwSW4odGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXBPdXQodGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMucmVnaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1tYXAnKV0uZm9yRWFjaChtYXAgPT4ge1xuICAgIC8vIG5lZWQgdG8gd2FpdCBmb3IgU1ZHIHRvIGxvYWRcbiAgICBjb25zdCBvYmogPSBtYXAucXVlcnlTZWxlY3Rvcignb2JqZWN0JylcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBzdmcgPSBvYmouZ2V0U1ZHRG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgICAgaWYoc3ZnKXtcbiAgICAgICAgbmV3IE5hdk1hcChtYXAsIHN2ZylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTmV3c2xldHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICduaHN1ay1uZXdzbGV0dGVyLWZvcm0nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5ld3NsZXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5ld3NsZXR0ZXIpIHtcbiAgICAgIHRoaXMubmV3c2xldHRlciA9IG5ld3NsZXR0ZXI7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gbmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlcXVpcmVkXVwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHdpbmRvdy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2tcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCkgICAgICA7XG4gICAgfVxuICAgIFxuICAgIGFkZEV2ZW50cygpIHtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBjID0+IHRoaXMudmFsaWRhdGUoYy50YXJnZXQpKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGFyZ2V0KSB7XG4gICAgICB2YXIgdGFyZ2V0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9ycy1cIit0YXJnZXQubmFtZSk7XG4gICAgICB2YXIgdGFyZ2V0U3VtbWFyeUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5LVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIGlmICh0YXJnZXQubmFtZSA9PSBcImZpcnN0bmFtZVwiIHx8IHRhcmdldC5uYW1lID09IFwibGFzdG5hbWVcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiZW1haWxcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiY29uc2VudFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN1bW1hcnkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdW1tYXJ5KCkge1xuICAgICAgdmFyIGVycm9yU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeVwiKTtcbiAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKVxuICAgICAgeyAgICAgICAgXG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgIGlmICghcmUudGVzdCh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIGlzRW1wdHkoc3RyKSB7XG4gICAgICByZXR1cm4gIXN0ci50cmltKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3ItbWVzc2FnZScpO1xuICAgICAgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yQ2xhc3NlcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIGVycm9yQ2xhc3Nlcy5mb3JFYWNoKGVycm9yY2xhc3MgPT4ge1xuICAgICAgICBlcnJvcmNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5ID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1zdW1tYXJ5Jyk7XG4gICAgICBlcnJvclN1bW1hcnkuZm9yRWFjaChlcnJvcnN1bW1hcnkgPT4ge1xuICAgICAgICBlcnJvcnN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnlJdGVtcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3Itc3VtbWFyeS1pdGVtJyk7XG4gICAgICBlcnJvclN1bW1hcnlJdGVtcy5mb3JFYWNoKHN1bW1hcnlpdGVtID0+IHtcbiAgICAgICAgc3VtbWFyeWl0ZW0uc3R5bGUuZGlzcGxheSAgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNuZXdzbGV0dGVyLWZvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1uZXdzbGV0dGVyLWZvcm0nKV0uZm9yRWFjaCgobmV3c2xldHRlcikgPT4gbmV3IE5ld3NsZXR0ZXIobmV3c2xldHRlcikpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIGZvciBwcm92aWRpbmcgdGhlIFwiZXhwYW5kIGFsbFwiIHRvZ2dsZSBmdW5jdGlvbmFsaXR5IGZvciB0YWJsZVxuICAgKiBjYXJkcy5cbiAgICovXG4gIGNsYXNzIFRhYmxlQ2FyZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNhcmQpIHtcbiAgICAgIHRoaXMudGFibGVDYXJkID0gdGFibGVDYXJkO1xuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy50YWJsZUNhcmQucXVlcnlTZWxlY3RvcignLmhlZS10YWJsZS1leHBhbmRlcl9fdG9nZ2xlIGEnKTtcbiAgICAgIHRoaXMuZXhwYW5kZXJzID0gdGhpcy50YWJsZUNhcmQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWV4cGFuZGVyJyk7XG4gICAgICB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW47XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5pbml0RXhwYW5kZXJPYnNlcnZlcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIGxpbmsgYW5kIHN1bW1hcnkgZWxlbWVudHMuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBjbGljayBldmVudC5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVycygpO1xuICAgICAgfSlcblxuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgbGluayBlbnRlciBhbmQgc3BhY2ViYXIga2V5IHByZXNzLlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVycygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdlIHVzZSBvYnNlcnZlcnMgdG8gcmVhY3QgdG8gY2xpY2sgZXZlbnRzIG9uIGluZGl2aWR1YWwgZXhwYW5kZXJzLCBhcyB0aGlzXG4gICAgICogZXZlbnQgZnVuY3Rpb25hbGl0eSBpcyBoYW5kbGVkIGJ5IHRoZSBuaHN1ay1kZXRhaWxzIGNvbXBvbmVudCdzIGphdmFzY3JpcHQuXG4gICAgICovXG4gICAgaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKSB7XG4gICAgICAvLyBDb25maWd1cmUgb2JzZXJ2ZXIgdG8gcmVhY3QgdG8gY2hhbmdlcyBpbiBhbiBleHBhbmRlcidzIFwib3BlblwiIGF0dHJpYnV0ZS5cbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uc0xpc3QpID0+IHtcbiAgICAgICAgbXV0YXRpb25zTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvZ2dsZVN0YXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGV4cGFuZGVyLCB7YXR0cmlidXRlczogdHJ1ZX0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGFsbCBleHBhbmRlciBjb250ZW50IHZpc2liaWxpdHkgd2l0aGluIHRhYmxlIGNhcmQuXG4gICAgICovXG4gICAgdG9nZ2xlRXhwYW5kZXJzKCkge1xuICAgICAgLy8gT3BlbiAvIGNsb3NlIGVhY2ggZXhwYW5kZXIgZGVwZW5kaW5nIG9uIGN1cnJlbnQgc3RhdGUuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy5vcGVuRXhwYW5kZXIoZXhwYW5kZXIpIDogdGhpcy5jbG9zZUV4cGFuZGVyKGV4cGFuZGVyKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUb2dnbGUgc3RhdGUgZmxhZy5cbiAgICAgIHRoaXMuc3RhdGVPcGVuID0gIXRoaXMuc3RhdGVPcGVuO1xuXG4gICAgICAvLyBUb2dnbGUgYnV0dG9uIHRleHQuXG4gICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuIDogdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsQ2xvc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiAgRGV0ZXJtaW5lcyB3aGV0aGVyIGFsbCBleHBhbmRlcnMgaGF2ZSBiZWVuIG9wZW5lZCBvciBjbG9zZWQgYW5kIHVwZGF0ZXNcbiAgICAgKiAgdGhlIHN0YXRlIGZsYWcgYW5kIHRvZ2dsZSBsaW5rIHRleHQgYWNjb3JkaW5nbHkuXG4gICAgICpcbiAgICAgKiAgRnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gTXV0YXRpb25PYnNlcnZlciBkZXRlY3RzIGEgY2hhbmdlIGluIGV4cGFuZGVyXG4gICAgICogIFwib3BlblwiIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICB1cGRhdGVUb2dnbGVTdGF0ZSgpIHtcbiAgICAgIGxldCBhbGxPcGVuID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICAhZXhwYW5kZXIuaGFzQXR0cmlidXRlKCdvcGVuJykgPyBhbGxPcGVuID0gZmFsc2UgOiBhbGxPcGVuID0gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICAhYWxsT3BlbiA/IHRoaXMuc3RhdGVPcGVuID0gZmFsc2UgOiB0aGlzLnN0YXRlT3BlbiA9IHRydWU7XG4gICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuIDogdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsQ2xvc2VcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVucyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgb3BlbkV4cGFuZGVyKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgIGV4cGFuZGVyLnNldEF0dHJpYnV0ZSgnb3BlbicsICdvcGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGFuIGV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZXhwYW5kZXIgRXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKi9cbiAgICBjbG9zZUV4cGFuZGVyKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIGV4cGFuZGVyLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtdGFibGUtZXhwYW5kZXInKV0uZm9yRWFjaCh0YWJsZUNhcmQgPT4gbmV3IFRhYmxlQ2FyZCh0YWJsZUNhcmQpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgLyoqXHJcbiAgKiBUYWJzXHJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXRhYnMnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXHJcbiAgKi9cclxuICBjbGFzcyBUYWJzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhYmNvbXBvbmVudCwgaSkge1xyXG4gICAgICB0aGlzLnRhYmNvbXBvbmVudCA9IHRhYmNvbXBvbmVudFxyXG4gICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGNvbnN0IHRhYnMgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYlwiXScpXHJcbiAgICAgIGNvbnN0IHRhYkxpc3QgPSB0aGlzLnRhYmNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCdbcm9sZT1cInRhYmxpc3RcIl0nKVxyXG4gICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcclxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGMgPT4gdGhpcy5jaGFuZ2VUYWJzKGMpKVxyXG4gICAgICB9KVxyXG4gICAgICBsZXQgdGFiRm9jdXMgPSAwXHJcbiAgICAgIHRhYkxpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XHJcbiAgICAgICAgLy8gTW92ZSByaWdodFxyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5IHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIC0xKVxyXG4gICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMrK1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgZW5kLCBnbyB0byB0aGUgc3RhcnRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzID49IHRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTW92ZSBsZWZ0XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgICAgdGFiRm9jdXMtLVxyXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgc3RhcnQsIG1vdmUgdG8gdGhlIGVuZFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgdGFiRm9jdXMgPSB0YWJzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMClcclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLmZvY3VzKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVRhYnMoZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcclxuICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgY29uc3QgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2cocGFyZW50KTtcclxuICAgICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhncmFuZHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVswXTtcclxuICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWQpXHJcbiAgICAgIGNvbnN0IGlzX21vYmlsZSA9IGdyYW5kcGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstdGFic19fbW9iaWxlJyk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coaXNfbW9iaWxlKVxyXG5cclxuICAgICAgLy8gQ29tcGFyZSBzZWxlY3RlZCBhbmQgdGFyZ2V0LCBhbmQgaWYgb24gbW9iaWxlXHJcbiAgICAgIC8vIENsb3NlIHRoZSB0YWIgaWYgYWxyZWFkeSBvcGVuXHJcbiAgICAgIGlmKHRhcmdldCA9PSBzZWxlY3RlZCAmJiBpc19tb2JpbGUpIHtcclxuICAgICAgICAvLyBVbnNlbGVjdCBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgY3VycmVudCBzZWxlY3RlZCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNldCB0aGlzIHRhYiBhcyBzZWxlY3RlZFxyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQodGFyZ2V0KVxyXG5cclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWIgcGFuZWxzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2hvdyB0aGUgc2VsZWN0ZWQgcGFuZWxcclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RlZChncmFuZHBhcmVudC5wYXJlbnROb2RlLCB0YXJnZXQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJylcclxuICAgICAgICAuZm9yRWFjaCh0ID0+IHQuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBmYWxzZSkpO1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWQnKVxyXG4gICAgICAgIC5mb3JFYWNoKGMgPT4gYy5jbGFzc0xpc3QucmVtb3ZlKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIHRydWUpXHJcbiAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKFwibmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVUYWJzKGVsZSkge1xyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJwYW5lbFwiXScpXHJcbiAgICAgICAgLmZvckVhY2gocCA9PiBwLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCB0cnVlKSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2VsZWN0ZWQoZWxlLCB0YXJnZXQpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZWxlLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApKVxyXG4gICAgICBlbGVcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YClcclxuICAgICAgICAucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXRhYnMnKV0uZm9yRWFjaCgodGFicywgaSkgPT4gbmV3IFRhYnModGFicywgaSkpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRIZWFkaW5ncyhoZWFkaW5ncykge1xuICAgICAgbGV0IGZvdW5kSGVhZGluZ3MgPSBbXVxuICAgICAgaWYgKGhlYWRpbmdzKSB7XG5cbiAgICAgICAgLy8gR2VuZXJhdGUgQ1NTIHNlbGVjdG9ycyBmb3Igb25seSBmaXJzdCBsZXZlbCBoZWFkaW5ncyBpbnNpZGUgcmljaC10ZXh0XG4gICAgICAgIC8vIGFyZWFzIGFuZCBvdXRzaWRlIG9mIGNvbXBvbmVudHMuXG4gICAgICAgIGNvbnN0IGhlYWRpbmdUeXBlcyA9IGhlYWRpbmdzLnNwbGl0KCcsJyk7XG4gICAgICAgIGxldCBzZWxlY3RvcnMgPSBoZWFkaW5nVHlwZXMubWFwKHR5cGUgPT4ge1xuICAgICAgICAgIHJldHVybiAnLnBhZ2VfX2NvbnRlbnQgPiAnICsgdHlwZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5qb2luKCcsICcpO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fY29udGVudCcpO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3JzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstYW5jaG9yLWxpbmtzJyldLmZvckVhY2goYW5jaG9yTGlua3MgPT4gbmV3IEFuY2hvckxpbmtzKGFuY2hvckxpbmtzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBSZXNwb25zaWJsZSBmb3IgZ2VuZXJhdGluZyB0YWJsZSBvZiBjb250ZW50cyBsaW5rcy5cbiAgKi9cbiAgY2xhc3MgVGFibGVDb250ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNvbnRlbnRzKSB7XG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMgPSB0YWJsZUNvbnRlbnRzO1xuXG4gICAgICB0aGlzLmNvbnRhaW5lclNlbGVjdG9yID0gJy5wYWdlX19tYWluJztcbiAgICAgIHRoaXMuaGVhZGluZ1NlbGVjdG9yID0gJ2gyLnRvY19oMic7XG4gICAgICB0aGlzLnN1YkhlYWRpbmdTZWxlY3RvciA9ICdoMy50b2NfaDMnO1xuICAgICAgdGhpcy5oZWFkaW5nUHJlZml4ID0gJ2hlZS10b2MtaGVhZGluZyc7XG5cbiAgICAgIC8vIEFuY2hvciBsaW5rcyBtYWNybyBzZXRzIHRoaXMgZGF0YSBhdHRyaWJ1dGUgd2hlbiBUT0MgaXMgZmxhZ2dlZCBhcyB0cnVlLlxuICAgICAgaWYgKCF0aGlzLnRhYmxlQ29udGVudHMuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSBhdHRlbXB0IHRvIGJ1aWxkIFRPQyBsaW5rcyBpZiBIMiBhbmNob3JzIGZvdW5kIG9uIHBhZ2UuXG4gICAgICBsZXQgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGFpbmVyU2VsZWN0b3IgKyAnICcgKyB0aGlzLmhlYWRpbmdTZWxlY3Rvcik7XG4gICAgICBpZiAoaGVhZGluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudGFibGVDb250ZW50cy5oaWRkZW4gPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmICFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gyJykpIHtcbiAgICAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSAnSDMnICYmIHNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDMnKSkge1xuXG4gICAgICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDMgZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1YkhlYWRpbmdJZCA9IGhlYWRpbmdJZCArICctJyArIGNvdW50O1xuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgc3ViSGVhZGluZ0lkKVxuXG4gICAgICAgICAgICBsaW5rLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoc2libGluZyksXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSGVhZGluZ0lkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZWl0aGVyIHRoZSBzaG9ydCBvciBsb25nIHRpdGxlIG9mIHRoZSBoZWFkaW5nIGJhc2VkIG9uIGRhdGEgYXR0ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgaGVhZGluZ1xuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpIHtcbiAgICAgIGxldCB0aXRsZTtcblxuICAgICAgaWYgKGhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLXNob3J0LXRpdGxlJykpIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmRhdGFzZXQuc2hvcnRUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5pbm5lclRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIFRPQyBtYXJrdXAgYW5kIGFwcGVuZHMgdG8gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldFRvY0xpc3RNYXJrdXAobGlua3MpIHtcbiAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGFzLWNoaWxkcmVuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1hbmNob3JsaW5rc19fd3JhcHBlcicpXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaGV2cm9uU1ZHKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENpcmNsZVNWRygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcblxuICAgICAgICBsZXQgcGFyZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcGFyZW50TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBsaW5rLmFuY2hvcik7XG4gICAgICAgIHBhcmVudExpbmsuaW5uZXJUZXh0ID0gbGluay50aXRsZTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcmVudExpbmspO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICBsaW5rLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBjaGlsZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGl0ZW0uYW5jaG9yKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgICAgICBjaGlsZEl0ZW0uYXBwZW5kKGNoaWxkTGluayk7XG4gICAgICAgICAgICBjaGlsZExpc3QuYXBwZW5kKGNoaWxkSXRlbSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY2hpbGRMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMuYXBwZW5kKGxpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBiYWNrIHRvIHRvcCBsaW5rIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZUJhY2tUb1RvcExpbmsoKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWJhY2stdG8tdG9wJyk7XG5cbiAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyNtYWluY29udGVudCcpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQmFjayB0byB0b3AnKTtcbiAgICAgIGFuY2hvci5pbm5lclRleHQgPSAnQmFjayB0byB0b3AnO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kKGFuY2hvcik7XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBiYWNrIHRvIHRvcCBsaW5rcyBhYm92ZSBUT0MgaGVhZGluZ3Mgd2l0aGluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEF2b2lkcyBkdXBsaWNhdGUgYmFjayB0byB0b3AgbGlua3Mgd2hlbiBzdGlja3kgaXMgcHJlc2VudC5cbiAgICAgICAgaWYgKCFoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnKSkge1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUJhY2tUb1RvcExpbmsoKTtcbiAgICAgICAgICBoZWFkaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGhlYWRpbmcpO1xuICAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNoZXZyb24gU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2hldnJvblNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNOC4wMDAxOSA2Ljk5OTk0QzguMDAwOTUgNy4xMzE1NSA3Ljk3NTcyIDcuMjYyMDEgNy45MjU5NiA3LjM4Mzg1QzcuODc2MTkgNy41MDU2OSA3LjgwMjg3IDcuNjE2NSA3LjcxMDE5IDcuNzA5OTRMMi43MTAxOSAxMi43MDk5QzIuNjE2OTUgMTIuODAzMiAyLjUwNjI2IDEyLjg3NzEgMi4zODQ0MyAxMi45Mjc2QzIuMjYyNjEgMTIuOTc4MSAyLjEzMjA0IDEzLjAwNCAyLjAwMDE5IDEzLjAwNEMxLjg2ODMzIDEzLjAwNCAxLjczNzc2IDEyLjk3ODEgMS42MTU5NCAxMi45Mjc2QzEuNDk0MTEgMTIuODc3MSAxLjM4MzQyIDEyLjgwMzIgMS4yOTAxOCAxMi43MDk5QzEuMTk2OTUgMTIuNjE2NyAxLjEyMjk5IDEyLjUwNiAxLjA3MjUzIDEyLjM4NDJDMS4wMjIwNiAxMi4yNjI0IDAuOTk2MDk0IDEyLjEzMTggMC45OTYwOTQgMTEuOTk5OUMwLjk5NjA5NCAxMS44NjgxIDEuMDIyMDYgMTEuNzM3NSAxLjA3MjUzIDExLjYxNTdDMS4xMjI5OSAxMS40OTM5IDEuMTk2OTUgMTEuMzgzMiAxLjI5MDE4IDExLjI4OTlMNS41OTAxOSA2Ljk5OTk0TDEuMjkwMTggMi43MDk5NEMxLjEwMTg4IDIuNTIxNjQgMC45OTYwOTQgMi4yNjYyNCAwLjk5NjA5NCAxLjk5OTk0QzAuOTk2MDk0IDEuNzMzNjQgMS4xMDE4OCAxLjQ3ODI1IDEuMjkwMTggMS4yODk5NEMxLjQ3ODQ5IDEuMTAxNjQgMS43MzM4OCAwLjk5NTg1IDIuMDAwMTkgMC45OTU4NUMyLjI2NjQ5IDAuOTk1ODUgMi41MjE4OCAxLjEwMTY0IDIuNzEwMTkgMS4yODk5NEw3LjcxMDE5IDYuMjg5OTRDNy44MDI4NyA2LjM4MzM4IDcuODc2MTkgNi40OTQyIDcuOTI1OTYgNi42MTYwM0M3Ljk3NTcyIDYuNzM3ODcgOC4wMDA5NSA2Ljg2ODMzIDguMDAwMTkgNi45OTk5NFpcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaXJjbGUgU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2lyY2xlU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiM1wiIGhlaWdodD1cIjNcIiB2aWV3Qm94PVwiMCAwIDMgM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rcycpXS5mb3JFYWNoKHRhYmxlQ29udGVudHMgPT4gbmV3IFRhYmxlQ29udGVudHModGFibGVDb250ZW50cykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIEZpbHRlclxuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlcicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgICovXG4gIGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgdGhpcy5jaGVja2JveGVzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgdGhpcy5kcm9wZG93bnMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstc2VsZWN0JyldO1xuICAgICAgdGhpcy5ncm91cHMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cCcpXTtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fc3VibWl0Jyk7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyldO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kcm9wZG93bnMuZm9yRWFjaChkcm9wZG93biA9PiB7XG4gICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWVsZHNldF9fbGVnZW5kJyk7XG4gICAgICAgIGlmIChsZWdlbmQpIHtcbiAgICAgICAgICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGVHcm91cEZpZWxkc2V0KGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLmNsZWFyRmlsdGVyKGV2dCkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItLWpzJyk7XG5cbiAgICAgIHRoaXMuaW5pdEZpbHRlcnMoKTtcbiAgICAgIHRoaXMuaW5pdENsZWFyVG9nZ2xlcygpO1xuICAgICAgdGhpcy5pbml0Q291bnRlcnMoKTtcblxuICAgICAgLy8gSGlkZSBzdWJtaXQgYnV0dG9uXG4gICAgICBpZiAodGhpcy5zdWJtaXQpIHtcbiAgICAgICAgdGhpcy5zdWJtaXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmlsdGVycygpIHtcbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuXG4gICAgICAgIGlmICghdGhpcy5pc0dyb3VwRmlsdGVyQWN0aXZlKGdyb3VwKSkge1xuICAgICAgICAgIC8vIENvbGxhcHNlIGdyb3VwIGlmIGZpbHRlcnMgbm90IGFjdGl2ZS5cbiAgICAgICAgICBncm91cC5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc2FibGUgc3ViLWdyb3VwIHNlbGVjdCBpZiBubyBvcHRpb24gaW4gcGFyZW50IHNlbGVjdGVkLlxuICAgICAgICBpZiAoZ3JvdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtc3ViZ3JvdXAnKSkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudFNlbGVjdCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1mb3JtLWdyb3VwLnBhcmVudC1ncm91cCBzZWxlY3QnKTtcbiAgICAgICAgICBjb25zdCBzdWJTZWxlY3QgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZm9ybS1ncm91cC5zdWItZ3JvdXAgc2VsZWN0Jyk7XG5cbiAgICAgICAgICBpZiAoc3ViU2VsZWN0ICE9PSBudWxsICYmIHBhcmVudFNlbGVjdCAhPT0gbnVsbCAmJiBwYXJlbnRTZWxlY3QudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBzdWJTZWxlY3Quc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVuYWJsZSBzY3JvbGxhYmxlIGNoZWNrYm94IGdyb3VwcyBpZiBtb3JlIHRoYW4gZm91ciBvcHRpb25zLlxuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXMnKTtcbiAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgICBpZiAoY2IuY2hpbGRFbGVtZW50Q291bnQgPiA0KSB7XG4gICAgICAgICAgICBjYi5jbGFzc0xpc3QuYWRkKCdzY3JvbGxhYmxlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRDbGVhclRvZ2dsZXMoKSB7XG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXJfX2dyb3VwX19jbGVhcicpO1xuICAgICAgICBpZiAodGhpcy5pc0dyb3VwRmlsdGVyQWN0aXZlKGdyb3VwKSkge1xuICAgICAgICAgIHRvZ2dsZUxpbmsuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0Q291bnRlcnMoKSB7XG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVDb3VudChncm91cCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVBY3RpdmVDb3VudChncm91cCkge1xuICAgICAgY29uc3QgY291bnRFbGVtID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWhpbnQnKTtcblxuICAgICAgaWYgKGNvdW50RWxlbSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0Jyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2hlY2tib3hlc1tpXS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgY291bnRFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb3VudEVsZW0uaW5uZXJUZXh0ID0gYCR7Y291bnR9IHNlbGVjdGVkYFxuICAgICAgY291bnRFbGVtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBpc0dyb3VwRmlsdGVyQWN0aXZlKGdyb3VwKSB7XG4gICAgICAvLyBDaGVjayBpZiBjaGVja2JveGVzIGFyZSBhY3RpdmUuXG4gICAgICBjb25zdCBjaGVja2JveGVzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHNlbGVjdHMgYXJlIGFjdGl2ZS5cbiAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnRzID0gZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLXNlbGVjdCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc2VsZWN0RWxlbWVudHNbaV0udmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRvZ2dsZUdyb3VwRmllbGRzZXQoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICBzZXRVcGRhdGVkRmxhZyhpc1VwZGF0ZWQpIHtcbiAgICAgIC8vIFNldCBzb3J0IGNvbnRhaW5lciBoaWRkZW4gc2Nyb2xsIGZsYWcgdmFsdWUuIHRvIGVuc3VyZSB2aWV3cG9ydCByZXNldHNcbiAgICAgIC8vIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgbGV0IGZsYWdFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS11cGRhdGUtZmxhZz1cImZpbHRlclwiXScpO1xuICAgICAgaWYgKGZsYWdFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGZsYWdFbGVtZW50LnZhbHVlID0gaXNVcGRhdGVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZXZ0KSB7XG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLHRvIGVuc3VyZSB2aWV3cG9ydCBzY3JvbGxzXG4gICAgICAvLyBkb3duIHRvIHJlc3VsdHMgbGlzdGluZ3MgYWZ0ZXIgZm9ybSBzdWJtaXQuXG4gICAgICB0aGlzLnNldFVwZGF0ZWRGbGFnKHRydWUpO1xuXG4gICAgICBjb25zdCBwYXJlbnRHcm91cCA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKTtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ291bnQocGFyZW50R3JvdXApO1xuXG4gICAgICAvLyBDaGVjayB3aGV0aGVyIHNlbGVjdCBkcm9wZG93biBoYXMgY2hpbGQgZmlsdGVyIGFuZCByZXNldCB0aGF0IHRvby5cbiAgICAgIGlmIChwYXJlbnRHcm91cC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy1zdWJncm91cCcpICYmIGV2dC50YXJnZXQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5wYXJlbnQtZ3JvdXAnKTtcbiAgICAgICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgICAgICBjb25zdCBjaGlsZFNlbGVjdCA9IHdyYXBwZXIubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5zdWItZ3JvdXAgc2VsZWN0Jyk7XG4gICAgICAgICAgY2hpbGRTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJGaWx0ZXIoZXZ0KSB7XG4gICAgICB0aGlzLmNsZWFyQ2hlY2tib3hlcyhldnQpO1xuICAgICAgdGhpcy5jbGVhclNlbGVjdEVsZW1lbnRzKGV2dCk7XG5cbiAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhldnQpO1xuICAgIH1cblxuICAgIGNsZWFyQ2hlY2tib3hlcyhldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0b2dnbGVMaW5rID0gZXZ0LnRhcmdldDtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0Jyk7XG5cbiAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgIGNiLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3RFbGVtZW50cyhldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCB0b2dnbGVMaW5rID0gZXZ0LnRhcmdldDtcbiAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnRzID0gdG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1zZWxlY3QnKTtcblxuICAgICAgc2VsZWN0RWxlbWVudHMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyJyldLmZvckVhY2goZmlsdGVyID0+IG5ldyBGaWx0ZXIoZmlsdGVyKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEZpbHRlclRhZ1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyLXRhZycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgRmlsdGVyVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcih0YWcpIHtcbiAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgdGhpcy5pY29uID0gdGFnLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXItdGFnX19pY29uJyk7XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gdGhpcy5yZW1vdmVGaWx0ZXIoZXZ0KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRmlsdGVyKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGdyb3VwVGFncyA9IHRoaXMudGFnLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWZpbHRlci10YWcnKTtcblxuICAgICAgLy8gUmVtb3ZlIGVudGlyZSBmaWx0ZXIgdGFnIGdyb3VwIGlmIG5vIG90aGVyIHRhZ3MgcHJlc2VudC5cbiAgICAgIGlmIChncm91cFRhZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMudGFnLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9ZWxzZSB7XG4gICAgICAgIHRoaXMudGFnLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBmb3JtLm5oc3VrLWZpbHRlciBpbnB1dFt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZm9ybS5uaHN1ay1maWx0ZXIgc2VsZWN0IG9wdGlvblt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgcGFyZW50R3JvdXBTZWxlY3QgPSBvcHRpb24ucGFyZW50RWxlbWVudDtcbiAgICAgICAgcGFyZW50R3JvdXBTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG5cbiAgICAgICAgLy8gUmVzZXQgc3ViLWdyb3VwIHNlbGVjdCBpZiB3ZSBhcmUgc2V0dGluZyB0aGUgcGFyZW50LFxuICAgICAgICBjb25zdCBmb3JtR3JvdXBFbGVtID0gb3B0aW9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChmb3JtR3JvdXBFbGVtLmNsYXNzTGlzdC5jb250YWlucygncGFyZW50LWdyb3VwJykpIHtcbiAgICAgICAgICBjb25zdCBzdWJHcm91cFNlbGVjdCA9IGZvcm1Hcm91cEVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1zZWxlY3QnKTtcbiAgICAgICAgICBzdWJHcm91cFNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmVudEdyb3VwU2VsZWN0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMudGFnLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci10YWctLWpzJyk7XG5cbiAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgdGhpcy5pY29uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXItdGFnJyldLmZvckVhY2godGFnID0+IG5ldyBGaWx0ZXJUYWcodGFnKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBMaXN0aW5nXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstbGlzdGluZycgYW5kICcuaGVlLWxpc3RpbmdzJyBhcmUgcGFzc2VkXG4gICAqIGludG8gdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHRvZG8gUmVtb3ZlIGxlZ2FjeSByZWZlcmVuY2VzIHRvIC5uaHN1ay1saXN0aW5nIGFuZCBsb29wcyBvbmNlIGFsbCBuZXdcbiAgICogY29sbGVjdGlvbiB0ZW1wbGF0ZXMgaGF2ZSBiZWVuIGltcGxlbWVudGVkLlxuICAgKi9cbiAgY2xhc3MgTGlzdGluZyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zb3J0LCAubmhzdWstbGlzdGluZ19fc29ydCcpXS5mb3JFYWNoKGZvcm1FbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEaXNhYmxlcyBicm93c2VyIHJlc3RvcmluZyB2aWV3cG9ydCB0byBwb3NpdGlvbiBiZWZvcmUgcGFnZSByZWxvYWQuXG4gICAgICBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9SZXN1bHRzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXS5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3N1Ym1pdCwgLm5oc3VrLWxpc3RpbmdfX3NvcnRfX3N1Ym1pdCcpXS5mb3JFYWNoKHN1Ym1pdCA9PiB7XG4gICAgICAgICAgaWYgKHN1Ym1pdCkge1xuICAgICAgICAgICAgc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHNldFVwZGF0ZWRGbGFnKGlzVXBkYXRlZCkge1xuICAgICAgbGV0IGZsYWdFbGVtZW50ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS11cGRhdGUtZmxhZz1cImxpc3RpbmdcIl0nKTtcbiAgICAgIGlmIChmbGFnRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBmbGFnRWxlbWVudC52YWx1ZSA9IGlzVXBkYXRlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSB7XG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLHRvIGVuc3VyZSB2aWV3cG9ydCBzY3JvbGxzXG4gICAgICAvLyBkb3duIHRvIHJlc3VsdHMgbGlzdGluZ3MgYWZ0ZXIgZm9ybSBzdWJtaXQuXG4gICAgICB0aGlzLnNldFVwZGF0ZWRGbGFnKHRydWUpO1xuXG4gICAgICBmb3JtRWxlbWVudC5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBzY3JvbGxUb1Jlc3VsdHMoKSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbik7XG5cbiAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcygncmVzdWx0c191cGRhdGVkJykpIHtcbiAgICAgICAgY29uc3QgbGlzdGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGxpc3RpbmdDb250YWluZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBsaXN0aW5nQ29udGFpbmVyLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nLCAubmhzdWstbGlzdGluZycpXS5mb3JFYWNoKGxpc3RpbmcgPT4gbmV3IExpc3RpbmcobGlzdGluZykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBDb29raWVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIGJhbm5lclxuICAgICAgdGhpcy51c2VDb29raWVzID0gJydcbiAgICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrLWNvb2tpZS1iYW5uZXInKVxuICAgICAgdGhpcy5zaG93Q29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Q29va2llcycpXG4gICAgICB0aGlzLnJlbW92ZUNvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQ29va2llcycpXG4gICAgICB0aGlzLmhvc3QgPSB0aGlzLmdldEhvc3QoKVxuXG4gICAgICB0aGlzLmNvb2tpZVN0YXR1cygpXG4gICAgICB0aGlzLnNldENvb2tpZXMoKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAgIC8vIHBvbGljeSBwYWdlXG4gICAgICB0aGlzLlN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1a19fY29va2llU3RhdHVzJylcbiAgICAgIHRoaXMuSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNJbicpXG4gICAgICB0aGlzLk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc091dCcpXG5cbiAgICAgIHRoaXMudG9nZ2xlU3RhdHVzKClcbiAgICB9XG5cbiAgICBjb29raWVTdGF0dXMoKXtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpXG4gICAgICBjb29raWVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gYy5tYXRjaChuZXcgUmVnRXhwKCcoXnwgKWNvb2tpZV9jb25zZW50KFteO10rKScpKVxuICAgICAgICBpZihtYXRjaCkge1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGMuc3BsaXQoXCI9XCIpWzFdXG4gICAgICAgICAgdGhpcy51c2VDb29raWVzID0gc3RhdHVzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0SG9zdCgpe1xuICAgICAgY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0LnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpWzBdXG4gICAgICByZXR1cm4gaG9zdFxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYodGhpcy5zaG93Q29va2llcykge1xuICAgICAgICB0aGlzLnNob3dDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc2hvd0Nvb2tpZSlcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucmVtb3ZlQ29va2llcykge1xuICAgICAgICB0aGlzLnJlbW92ZUNvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZW1vdmVDb29raWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYmFubmVyU2hvdygpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmFubmVySGlkZSgpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHNldENvb2tpZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5iYW5uZXJTaG93KClcbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NBY2NlcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19hY2NlcHRfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzQWNjZXB0KSB7XG4gICAgICAgICAgICBhbmFseXRpY3NBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NEZWNsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfZGVjbGluZV9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NEZWNsaW5lKSB7XG4gICAgICAgICAgICBhbmFseXRpY3NEZWNsaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD10cnVlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIG5vQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PWZhbHNlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIHRvZ2dsZVN0YXR1cygpIHtcbiAgICAgIGlmKHRoaXMuU3RhdHVzKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzT3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNJbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSBcImZhbHNlXCIgfHwgdGhpcy51c2VDb29raWVzID09PSAnJyApIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuSW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLkluKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUJsb2NrKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKVxuICAgIH1cblxuICAgIGRpc3BsYXlOb25lKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIilcbiAgICB9XG5cbiAgICAvLyByZWR1bmRhbnQgYnV0IHVzZWZ1bFxuICAgIHNob3dDb29raWUoKSB7XG4gICAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va2llcycpXG4gICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSAnPiAnICsgZG9jdW1lbnQuY29va2llXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llX2NvbnNlbnQ9ZmFsc2U7IG1heC1hZ2U9MFwiXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICB9XG5cbiAgbmV3IENvb2tpZXMoZG9jdW1lbnQpXG59IiwiLyoqXG4qIFN1Yk5hdlxuKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXN1Ym5hdicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3Mgc3ViTmF2IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgIHRoaXMucGFyZW50TGlzdCA9IHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGVcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluaykge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50KSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdGF0ZSgpe1xuICAgICAgY29uc3QgYWN0aXZlRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGFjdGl2ZUVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmKGVsZW0gIT0gdGhpcy5jb250YWluZXIpe1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICAgIGVsZW0udG9nZ2xlQXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoYWN0aXZlRWxlbXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudShldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVTdGF0ZSgpXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuY29udGFpbmVyLCBcImlzLWFjdGl2ZVwiKVxuICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIFwiYXJpYS1leHBhbmRlZFwiKVxuICAgIH1cblxuICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVyblxuICAgICAgY29uc3QgaGFzQ2xhc3MgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICBpZiAoaGFzQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgYXR0ciBhcmUgbWlzc2luZ1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFhdHRyKSByZXR1cm5cbiAgICAgIC8vIFRvZ2dsZSBhdHRyaWJ1dGUgdmFsdWUuIFRyZWF0IG5vIGV4aXN0aW5nIGF0dHIgc2FtZSBhcyB3aGVuIHNldCB0byBmYWxzZVxuICAgICAgY29uc3QgdmFsdWUgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJykgPyAnZmFsc2UnIDogJ3RydWUnXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1zdWJuYXYnKV0uZm9yRWFjaChzdWJuYXYgPT4gbmV3IHN1Yk5hdihzdWJuYXYpKVxuXG4gIC8qIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KSAqL1xuXG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtbWVudVwiKTtcblxuICBjbG9zZU1lbnUgJiYgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB1c2VySW5wdXQoZXZlbnQpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHVzZXJJbnB1dCkgXG4gIFxuICBmdW5jdGlvbiB1c2VySW5wdXQoZXZlbnQpIHtcbiAgICAvLyBjbG9zZSBtZW51IGlmIGNsaWNraW5nIG91dHNpZGVcbiAgICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICBpZihvcGVuTWVudSl7XG4gICAgICBjb25zdCBpc05vdE1lbnUgPSBldmVudC50YXJnZXQgIT09IG9wZW5NZW51XG4gICAgICBjb25zdCBpc05vdE1lbnVCdXR0b24gPSBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIilcbiAgICAgIGNvbnN0IGlzTWVudUNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICAgIGlmKGlzTm90TWVudSAmJiBpc05vdE1lbnVCdXR0b24gJiYgIWlzTWVudUNoaWxkKXtcbiAgICAgICAgb3Blbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNob3dcIilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc3ViIG5hdiBpZiBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgZG9jdW1lbnQgZXhjZXB0IHRoZSBvcGVuIG9yIGEgbmV3IHN1Ym5hdlxuICAgIGNvbnN0IG9wZW5TdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICBpZihvcGVuU3ViKXtcbiAgICAgIGNvbnN0IGlzTm90U3ViID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuU3ViXG4gICAgICBjb25zdCBpc1N1YkNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgaWYoaXNOb3RTdWIgJiYgIWlzU3ViQ2hpbGQpe1xuICAgICAgICBvcGVuU3ViLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24tbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3VibmF2LW9wZW5cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE5IU1VLLUhFRSBDb21wb25lbnRzXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9uaHN1ay1oZWUtY29va2llcy9jb29raWVzJztcbmltcG9ydCBTdWJOYXYgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWhlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdic7XG5cbi8vIEhFRSBDb21wb25lbnRzXG5pbXBvcnQgQW5jaG9yTGlua3MgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcyc7XG5pbXBvcnQgQW5jaG9yTGlua3NTdGlja3kgZnJvbSAnLi9ibG9ja3MvY29udGVudC9mb290ZXIvaGVlLWFuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3knO1xuaW1wb3J0IFRhYmxlQ29udGVudHMgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy90b2MnO1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbWVkaWEvbWVkaWEnO1xuaW1wb3J0IE5hdk1hcCBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5hdm1hcC9uYXZtYXAnO1xuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXInO1xuaW1wb3J0IFN1bW1hcnlDYXJkIGZyb20gXCIuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLWNhcmQtLXN1bW1hcnkvc3VtbWFyeVwiO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJzL3RhYnMnO1xuaW1wb3J0IFRhYmxlQ2FyZCBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyJztcblxuLy8gVW5zb3J0ZWQgY29tcG9uZW50c1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXInO1xuaW1wb3J0IEZpbHRlclRhZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcnO1xuXG4vLyBJbml0aWFsaXplIGNvbXBvbmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIFRhYnMoKTtcbiAgQW5jaG9yTGlua3MoKTtcbiAgQW5jaG9yTGlua3NTdGlja3koKTtcbiAgQ29va2llcygpO1xuICBGaWx0ZXIoKTtcbiAgRmlsdGVyVGFnKCk7XG4gIExpc3RpbmcoKTtcbiAgTWVkaWEoKTtcbiAgTmF2TWFwKCk7XG4gIFN1Yk5hdigpO1xuICBTdW1tYXJ5Q2FyZCgpO1xuICBOZXdzbGV0dGVyKCk7XG4gIFRhYmxlQ29udGVudHMoKTtcbiAgVGFibGVDYXJkKCk7XG59KTtcbiJdLCJuYW1lcyI6WyJBbmNob3JMaW5rc1N0aWNreSIsImNvbnRhaW5lciIsIl9jbGFzc0NhbGxDaGVjayIsInRvZ2dsZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJzdGlja3lBbmNob3JMaW5rcyIsInNpZGViYXJBbmNob3JMaW5rcyIsImRvY3VtZW50IiwiZm9vdGVyIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJ0b2dnbGVTdGlja3lUb29sYmFyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVTdGlja3lBbmNob3JMaW5rcyIsImV2ZW50Iiwia2V5Q29kZSIsInRhcmdldCIsInRhZ05hbWUiLCJ3aW5kb3ciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJmb2N1cyIsInRvY0Jsb2NrVmlzaWJsZSIsImlzRWxlbWVudEluVmlld3BvcnQiLCJmb290ZXJWaXNpYmxlIiwiYWRkIiwicmVtb3ZlIiwiZWxlbWVudCIsImJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxlbWVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsImVsZW1lbnRXaWR0aCIsIm9mZnNldFdpZHRoIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImFuY2hvckxpbmtzIiwiU3VtbWFyeUNhcmQiLCJzdW1tYXJ5Q2FyZCIsInRvZ2dsZUxpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZVN1bW1hcnkiLCJUcmFuc2NyaXB0IiwidG9nZ2xlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwiZXZ0IiwidG9nZ2xldHJhbnNjcmlwdCIsImlzQ29sbGFwc2VkIiwiY29udGFpbnMiLCJ0cmFuc2NyaXB0IiwiTmF2TWFwIiwibWFwIiwic3ZnIiwicmVnaW9ucyIsImxpc3QiLCJhZGRMaW5rc1RvTWFwIiwiY2xlYW5TdHlsZSIsIm1hcEV2ZW50TGlzdGVuZXJzIiwibGlua0V2ZW50TGlzdGVuZXJzIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlZ2lvbiIsInRoaXNDb3VudGVycGFydCIsIm1hcENvdW50ZXJwYXJ0IiwiaWQiLCJ0aGlzSHJlZiIsImhyZWYiLCJ0aGlzVGl0bGUiLCJjaGlsZHJlbiIsIndyYXBMaW5rIiwiY29uY2F0IiwiX3RoaXMyIiwibWFwSW4iLCJtYXBPdXQiLCJtYXBDbGljayIsIl90aGlzMyIsIml0ZW0iLCJsaW5rRXZlbnQiLCJtb3ZlVG9Ub3AiLCJvYmoiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJ0aGlzTGluayIsInRoaXNNYXBDb3VudGVycGFydCIsImNsb3Nlc3QiLCJjbGljayIsInRoaXNJZCIsImZpbmQiLCJkaXJlY3Rpb24iLCJ0eXBlIiwibGlua0NvdW50ZXJwYXJ0IiwiZ2V0U1ZHRG9jdW1lbnQiLCJOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInJlcXVpcmVkSW5wdXRzIiwiZXJyb3JzIiwiaW5pdCIsInJlY2FwdGNoYUNhbGxiYWNrIiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInRhcmdldFN1bW1hcnlFcnJvciIsImVycm9yRW1wdHkiLCJlcnJvckVtYWlsIiwiZXJyb3JDb25zZW50IiwidXBkYXRlU3VtbWFyeSIsImVycm9yU3VtbWFyeSIsImxlbmd0aCIsImRpc3BsYXkiLCJpc0VtcHR5Iiwic2hvd0Vycm9yIiwiaGlkZUVycm9yIiwicmUiLCJ0ZXN0IiwiY2hlY2tlZCIsImZpbHRlciIsInB1c2giLCJzdHIiLCJ0cmltIiwiZXJyb3IiLCJlcnJvckNsYXNzZXMiLCJlcnJvcmNsYXNzIiwiZXJyb3JzdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5SXRlbXMiLCJzdW1tYXJ5aXRlbSIsInJlbW92ZUF0dHJpYnV0ZSIsIlRhYmxlQ2FyZCIsInRhYmxlQ2FyZCIsImV4cGFuZGVycyIsInN0YXRlT3BlbiIsImlubmVyVGV4dCIsImRhdGFzZXQiLCJsYWJlbE9wZW4iLCJpbml0RXhwYW5kZXJPYnNlcnZlciIsInRvZ2dsZUV4cGFuZGVycyIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9uc0xpc3QiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJ1cGRhdGVUb2dnbGVTdGF0ZSIsImV4cGFuZGVyIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJvcGVuRXhwYW5kZXIiLCJjbG9zZUV4cGFuZGVyIiwibGFiZWxDbG9zZSIsImFsbE9wZW4iLCJoYXNBdHRyaWJ1dGUiLCJzdW1tYXJ5IiwidGV4dCIsIlRhYnMiLCJ0YWJjb21wb25lbnQiLCJpIiwidGFicyIsInRhYkxpc3QiLCJ0YWIiLCJjaGFuZ2VUYWJzIiwidGFiRm9jdXMiLCJlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImdyYW5kcGFyZW50Iiwic2VsZWN0ZWQiLCJpc19tb2JpbGUiLCJyZW1vdmVTZWxlY3RlZCIsImhpZGVUYWJzIiwic2V0U2VsZWN0ZWQiLCJzaG93U2VsZWN0ZWQiLCJlbGUiLCJ0IiwicCIsIkFuY2hvckxpbmtzIiwiaGlkZGVuIiwiZm91bmRIZWFkaW5ncyIsImZpbmRIZWFkaW5ncyIsImhlYWRpbmdzIiwiYWRkQW5jaG9yc1RvUGFnZSIsImhlYWRpbmdUeXBlcyIsInNwbGl0Iiwic2VsZWN0b3JzIiwiam9pbiIsImNvbnRlbnRDb250YWluZXIiLCJoZWFkaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uIiwic2VsZWN0b3IiLCJzb21lIiwiZWwiLCJ1bCIsImNyZWF0ZUVsZW1lbnQiLCJmb3VuZEhlYWRpbmciLCJhbmNob3JsaW5rc2lnbm9yZSIsImxpIiwiYSIsImhpZGRlbkVsZW1lbnRzIiwiVGFibGVDb250ZW50cyIsInRhYmxlQ29udGVudHMiLCJjb250YWluZXJTZWxlY3RvciIsImhlYWRpbmdTZWxlY3RvciIsInN1YkhlYWRpbmdTZWxlY3RvciIsImhlYWRpbmdQcmVmaXgiLCJsaW5rcyIsImNyZWF0ZVRvY0xpbmtzIiwic2V0VG9jTGlzdE1hcmt1cCIsInNsaWNlIiwiY2FsbCIsInNldEJhY2tUb1RvcExpbmtzIiwic3ViSGVhZGluZ3MiLCJpbmRleCIsImhlYWRpbmdJZCIsImxpbmsiLCJ0aXRsZSIsImdldEhlYWRpbmdUaXRsZSIsImFuY2hvciIsInNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjb3VudCIsInN1YkhlYWRpbmdJZCIsInNob3J0VGl0bGUiLCJsaXN0SXRlbSIsInNwYW4iLCJnZXRDaGV2cm9uU1ZHIiwiZ2V0Q2lyY2xlU1ZHIiwiYXBwZW5kIiwicGFyZW50TGluayIsImNoaWxkTGlzdCIsImNoaWxkSXRlbSIsImNoaWxkTGluayIsImNyZWF0ZUJhY2tUb1RvcExpbmsiLCJpbnNlcnRCZWZvcmUiLCJGaWx0ZXIiLCJjaGVja2JveGVzIiwiZHJvcGRvd25zIiwiZ3JvdXBzIiwic3VibWl0IiwiY2xlYXJUb2dnbGUiLCJzZXRVcCIsImNoZWNrYm94IiwidXBkYXRlUmVzdWx0cyIsImRyb3Bkb3duIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cEZpZWxkc2V0IiwiY2xlYXJGaWx0ZXIiLCJpbml0RmlsdGVycyIsImluaXRDbGVhclRvZ2dsZXMiLCJpbml0Q291bnRlcnMiLCJpc0dyb3VwRmlsdGVyQWN0aXZlIiwicGFyZW50U2VsZWN0Iiwic3ViU2VsZWN0IiwiY2IiLCJjaGlsZEVsZW1lbnRDb3VudCIsIl90aGlzNCIsInVwZGF0ZUFjdGl2ZUNvdW50IiwiY291bnRFbGVtIiwic2VsZWN0RWxlbWVudHMiLCJzZXRVcGRhdGVkRmxhZyIsImlzVXBkYXRlZCIsImZsYWdFbGVtZW50IiwicGFyZW50R3JvdXAiLCJub2RlTmFtZSIsIndyYXBwZXIiLCJjaGlsZFNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJjbGVhckNoZWNrYm94ZXMiLCJjbGVhclNlbGVjdEVsZW1lbnRzIiwic2VsZWN0IiwiRmlsdGVyVGFnIiwidGFnIiwiaWNvbiIsInJlbW92ZUZpbHRlciIsImdyb3VwVGFncyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIm9wdGlvbiIsInBhcmVudEdyb3VwU2VsZWN0IiwiZm9ybUdyb3VwRWxlbSIsInN1Ykdyb3VwU2VsZWN0IiwiTGlzdGluZyIsImZvcm1FbGVtZW50IiwidG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzIiwiaGlzdG9yeSIsInNjcm9sbFJlc3RvcmF0aW9uIiwic2Nyb2xsVG9SZXN1bHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsInNlYXJjaFBhcmFtcyIsImhhcyIsImxpc3RpbmdDb250YWluZXIiLCJzY3JvbGxJbnRvVmlldyIsImxpc3RpbmciLCJDb29raWVzIiwidXNlQ29va2llcyIsImJhbm5lciIsInNob3dDb29raWVzIiwicmVtb3ZlQ29va2llcyIsImhvc3QiLCJnZXRIb3N0IiwiY29va2llU3RhdHVzIiwic2V0Q29va2llcyIsIlN0YXR1cyIsIkluIiwiT3V0IiwidG9nZ2xlU3RhdHVzIiwiY29va2llcyIsImNvb2tpZSIsIm1hdGNoIiwiUmVnRXhwIiwic3RhdHVzIiwidG9TdHJpbmciLCJzaG93Q29va2llIiwicmVtb3ZlQ29va2llIiwiYmFubmVyU2hvdyIsImJhbm5lckhpZGUiLCJhbmFseXRpY3NBY2NlcHQiLCJ1c2VDb29raWUiLCJhbmFseXRpY3NEZWNsaW5lIiwibm9Db29raWUiLCJyZWxvYWQiLCJkaXNwbGF5QmxvY2siLCJkaXNwbGF5Tm9uZSIsIm91dHB1dCIsInRleHRDb250ZW50Iiwic3ViTmF2IiwicGFyZW50TGlzdCIsInRvZ2dsZU1lbnUiLCJoYW5kbGVTdGF0ZSIsImFjdGl2ZUVsZW1zIiwiZWxlbSIsInRvZ2dsZUF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhdHRyIiwic3VibmF2IiwiY2xvc2VNZW51IiwidXNlcklucHV0Iiwib3Blbk1lbnUiLCJpc05vdE1lbnUiLCJpc05vdE1lbnVCdXR0b24iLCJpc01lbnVDaGlsZCIsIm9wZW5TdWIiLCJpc05vdFN1YiIsImlzU3ViQ2hpbGQiLCJTdWJOYXYiLCJNZWRpYSJdLCJzb3VyY2VSb290IjoiIn0=