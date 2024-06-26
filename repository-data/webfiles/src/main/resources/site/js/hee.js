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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUL0QsNEZBQU0sQ0FBQyxDQUFDO0VBQ1JxQyxrR0FBUyxDQUFDLENBQUM7RUFDWFcsNkZBQU8sQ0FBQyxDQUFDO0VBQ1RxRSxnRkFBSyxDQUFDLENBQUM7RUFDUGpULGtGQUFNLENBQUMsQ0FBQztFQUNSZ1Qsa0dBQU0sQ0FBQyxDQUFDO0VBQ1IvVCx5RkFBVyxDQUFDLENBQUM7RUFDYjBELDBGQUFVLENBQUMsQ0FBQztFQUNaOEcsdUZBQWEsQ0FBQyxDQUFDO0VBQ2Z2RSxtR0FBUyxDQUFDLENBQUM7QUFDYixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2hlZS1hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtY2FyZC0tc3VtbWFyeS9zdW1tYXJ5LmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbWVkaWEvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uYXZtYXAvbmF2bWFwLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmV3c2xldHRlci9uZXdzbGV0dGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFibGUtZXhwYW5kZXIvdGFibGUtZXhwYW5kZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvaGVlLWFuY2hvcmxpbmtzL3RvYy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL25oc3VrLWhlZS1jb29raWVzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWhlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdi5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvaGVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIGZvciBBbmNob3IgbGluayBzdGlja3kgdG9vbGJhciBhdCBib3R0b20gb2Ygdmlld3BvcnQuXG4gICAqL1xuICBjbGFzcyBBbmNob3JMaW5rc1N0aWNreSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcblxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICB0aGlzLnRvZ2dsZUJ0biA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5oZWUtYW5jaG9ybGlua3NfX3N0aWNreV9fYnRuJyk7XG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmhlZS1hbmNob3JsaW5rcycpO1xuICAgICAgdGhpcy5zaWRlYmFyQW5jaG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fcmlnaHRiYXIgLmhlZS1hbmNob3JsaW5rcycpO1xuICAgICAgdGhpcy5mb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZm9vdGVyJyk7XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIGZvciBUT0MgYnV0dG9uIHRvZ2dsZSwgVE9DIGxpbmsgbmF2aWdhdGlvbiBhbmRcbiAgICAgKiB0aGUgd2luZG93IHZpZXdwb3J0IHNjcm9sbCB0b2dnbGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCkpXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnQScgJiYgZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN0aWNreUFuY2hvckxpbmtzKClcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVTdGlja3lUb29sYmFyKCk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIC8gaGlkZXMgdGhlIHN0aWNreSBUT0MgYW5jaG9yIGxpbmtzIHdoZW4gXCJUYWJsZSBvZiBDb250ZW50c1wiIGJ1dHRvblxuICAgICAqIHRyaWdnZXJlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lBbmNob3JMaW5rcygpIHtcbiAgICAgIHRoaXMudG9nZ2xlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKCdpcy1zdGlja3knKTtcblxuICAgICAgaWYgKHRoaXMuY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAnZmFsc2UnKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MucXVlcnlTZWxlY3RvcignYTpmaXJzdC1vZi10eXBlJykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyAvIGhpZGVzIHRoZSBUT0MgYm90dG9tIFwidG9vbGJhclwiIHdoZW4gdGhlIHNpZGViYXIgVE9DIGhlYWRpbmcgaXNcbiAgICAgKiBvdXRzaWRlIHRoZSB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICB0b2dnbGVTdGlja3lUb29sYmFyKCkge1xuICAgICAgY29uc3QgdG9jQmxvY2tWaXNpYmxlID0gdGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0KHRoaXMuc2lkZWJhckFuY2hvckxpbmtzLnF1ZXJ5U2VsZWN0b3IoJ2gyJykpO1xuICAgICAgY29uc3QgZm9vdGVyVmlzaWJsZSA9IHRoaXMuZm9vdGVyICYmIHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzLmZvb3Rlcik7XG5cbiAgICAgIGlmICghdG9jQmxvY2tWaXNpYmxlICYmICFmb290ZXJWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgd2hldGhlciBhbiBlbGVtZW50IGlzIGluc2lkZSB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGlzRWxlbWVudEluVmlld3BvcnQoZWxlbWVudCkge1xuICAgICAgY29uc3QgYm91bmRpbmcgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3QgZWxlbWVudFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgcmV0dXJuIGJvdW5kaW5nLnRvcCA+PSAtZWxlbWVudEhlaWdodFxuICAgICAgICAmJiBib3VuZGluZy5sZWZ0ID49IC1lbGVtZW50V2lkdGhcbiAgICAgICAgJiYgYm91bmRpbmcucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgKyBlbGVtZW50V2lkdGhcbiAgICAgICAgJiYgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyBlbGVtZW50SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3NfX3N0aWNreScpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rc1N0aWNreShhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICBjbGFzcyBTdW1tYXJ5Q2FyZCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzdW1tYXJ5Q2FyZCkge1xuICAgICAgdGhpcy5zdW1tYXJ5Q2FyZCA9IHN1bW1hcnlDYXJkO1xuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy5zdW1tYXJ5Q2FyZC5xdWVyeVNlbGVjdG9yKCcuaGVlLWNhcmQtLXN1bW1hcnlfX3RvZ2dsZScpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgbGluay5cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGNsaWNrIGV2ZW50LlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlU3VtbWFyeSgpO1xuICAgICAgfSlcblxuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgbGluayBlbnRlciBhbmQgc3BhY2ViYXIga2V5IHByZXNzLlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN1bW1hcnkoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYWxsIGV4cGFuZGVyIGNvbnRlbnQgdmlzaWJpbGl0eSB3aXRoaW4gdGFibGUgY2FyZC5cbiAgICAgKi9cbiAgICB0b2dnbGVTdW1tYXJ5KCkge1xuICAgICAgdGhpcy5zdW1tYXJ5Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdkZWZhdWx0Jyk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1jYXJkLS1zdW1tYXJ5JyldLmZvckVhY2goc3VtbWFyeUNhcmQgPT4gbmV3IFN1bW1hcnlDYXJkKHN1bW1hcnlDYXJkKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1lZGlhIHRyYW5zY3JpcHRcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLmhlZS1tZWRpYS10cmFuc2NyaXB0JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBUcmFuc2NyaXB0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250YWluZXIpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZ2dsZXMpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZXMpIHtcbiAgICAgICAgdGhpcy50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZXRyYW5zY3JpcHQoZXZ0KSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xldHJhbnNjcmlwdCgpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKCkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhlZS1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlZS1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlzQ29sbGFwc2VkKCkge1xuICAgICAgaWYodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGVlLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1tZWRpYV9fdHJhbnNjcmlwdCcpXS5mb3JFYWNoKHRyYW5zY3JpcHQgPT4gbmV3IFRyYW5zY3JpcHQodHJhbnNjcmlwdCkpXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNYXBcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXJlZ2lvbicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmF2TWFwIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIHN2Zykge1xuICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgICAgIHRoaXMucmVnaW9ucyA9IFsuLi5zdmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstcmVnaW9uJyldO1xuICAgICAgdGhpcy5saXN0ID0gWy4uLm1hcC5xdWVyeVNlbGVjdG9yQWxsKCcjcmVnaW9uTGlzdCBsaSBhJyldO1xuXG4gICAgICB0aGlzLmFkZExpbmtzVG9NYXAoKTtcbiAgICAgIHRoaXMuY2xlYW5TdHlsZSgpO1xuICAgICAgdGhpcy5tYXBFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5saW5rRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBjbGVhblN0eWxlKCl7XG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmlubmVySFRNTCA9IFwiXCJcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFxuICAgICAgICAuc3Qwe2ZpbGw6IzAwNUVCODtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLnN0MXtmaWxsOiNBRUI3QkQ7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5ob3ZlciAqIHtzdHJva2U6I2ZmZWIzYjtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgICAuZm9jdXMgLnN0MCB7ZmlsbDojZmZlYjNiO3N0cm9rZTojMjEyYjMyO31cbiAgICAgICAgLmZvY3VzICoge3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICBgKSlcbiAgICB9XG5cbiAgICBhZGRMaW5rc1RvTWFwKCl7XG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChyZWdpb24gPT4ge1xuICAgICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHJlZ2lvbi5pZClcbiAgICAgICAgY29uc3QgdGhpc0hyZWYgPSAodGhpc0NvdW50ZXJwYXJ0LmhyZWYpPyB0aGlzQ291bnRlcnBhcnQuaHJlZiA6IFwiL1wiXG4gICAgICAgIGNvbnN0IHRoaXNUaXRsZSA9ICh0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MKT8gdGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCA6IFwiXCJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSByZWdpb24uaW5uZXJIVE1MO1xuICAgICAgICBjb25zdCB3cmFwTGluayA9IGA8YSB4bGluazpocmVmPVwiJHt0aGlzSHJlZn1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgICAgICA8dGl0bGU+JHt0aGlzVGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAke2NoaWxkcmVufVxuICAgICAgICA8L2E+YFxuICAgICAgICByZWdpb24uaW5uZXJIVE1MID0gd3JhcExpbmtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbWFwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4gdGhpcy5tYXBJbihlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4gdGhpcy5tYXBPdXQoZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHRoaXMubWFwQ2xpY2soZXZlbnQpKSlcbiAgICB9XG5cbiAgICBsaW5rRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiaG92ZXJcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiaG92ZXJcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImZvY3VzXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImZvY3VzXCIpKSlcbiAgICB9XG5cbiAgICBtb3ZlVG9Ub3Aob2JqKSB7XG4gICAgICBvYmoucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChvYmopO1xuICAgIH1cblxuICAgIG1hcEluKHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGhpcy5tb3ZlVG9Ub3AodGFyZ2V0KVxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5hZGQoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcE91dCh0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBDbGljayhldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgdGhpc01hcENvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChldmVudC50YXJnZXQuY2xvc2VzdChcImdcIikuaWQpXG4gICAgICBpZih0aGlzTWFwQ291bnRlcnBhcnQpIHRoaXNNYXBDb3VudGVycGFydC5jbGljaygpXG4gICAgfVxuXG4gICAgbWFwQ291bnRlcnBhcnQodGhpc0lkKSB7XG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLmxpc3QuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXNJZClcbiAgICAgIHJldHVybiAodGhpc0NvdW50ZXJwYXJ0KVxuICAgIH1cblxuICAgIGxpbmtFdmVudCh0YXJnZXQsIGRpcmVjdGlvbiwgdHlwZSkge1xuICAgICAgY29uc3QgdGhpc0lkID0gdGFyZ2V0LmlkXG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLmxpbmtDb3VudGVycGFydCh0aGlzSWQpXG4gICAgICBpZihkaXJlY3Rpb24gPT09IFwiaW5cIikge1xuICAgICAgICB0aGlzLm1hcEluKHRoaXNDb3VudGVycGFydCwgdHlwZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFwT3V0KHRoaXNDb3VudGVycGFydCwgdHlwZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rQ291bnRlcnBhcnQodGhpc0lkKSB7XG4gICAgICBjb25zdCB0aGlzQ291bnRlcnBhcnQgPSB0aGlzLnJlZ2lvbnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRoaXNJZClcbiAgICAgIHJldHVybiAodGhpc0NvdW50ZXJwYXJ0KVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstbWFwJyldLmZvckVhY2gobWFwID0+IHtcbiAgICAvLyBuZWVkIHRvIHdhaXQgZm9yIFNWRyB0byBsb2FkXG4gICAgY29uc3Qgb2JqID0gbWFwLnF1ZXJ5U2VsZWN0b3IoJ29iamVjdCcpXG4gICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgY29uc3Qgc3ZnID0gb2JqLmdldFNWR0RvY3VtZW50KCkucXVlcnlTZWxlY3Rvcignc3ZnJylcbiAgICAgIGlmKHN2Zyl7XG4gICAgICAgIG5ldyBOYXZNYXAobWFwLCBzdmcpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE5ld3NsZXR0ZXJcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnbmhzdWstbmV3c2xldHRlci1mb3JtJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOZXdzbGV0dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihuZXdzbGV0dGVyKSB7XG4gICAgICB0aGlzLm5ld3NsZXR0ZXIgPSBuZXdzbGV0dGVyO1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cyA9IG5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbChcIltyZXF1aXJlZF1cIik7XG4gICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB3aW5kb3cucmVjYXB0Y2hhQ2FsbGJhY2sgPSB0aGlzLnJlY2FwdGNoYUNhbGxiYWNrXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50cygpICAgICAgO1xuICAgIH1cbiAgICBcbiAgICBhZGRFdmVudHMoKSB7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgYyA9PiB0aGlzLnZhbGlkYXRlKGMudGFyZ2V0KSk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHZhbGlkYXRlKHRhcmdldCkge1xuICAgICAgdmFyIHRhcmdldEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvcnMtXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgdmFyIHRhcmdldFN1bW1hcnlFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeS1cIit0YXJnZXQubmFtZSk7XG4gICAgICBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJmaXJzdG5hbWVcIiB8fCB0YXJnZXQubmFtZSA9PSBcImxhc3RuYW1lXCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0YXJnZXQubmFtZSA9PSBcImVtYWlsXCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckVtYWlsKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0YXJnZXQubmFtZSA9PSBcImNvbnNlbnRcIikge1xuICAgICAgICB0aGlzLmVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVTdW1tYXJ5KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3VtbWFyeSgpIHtcbiAgICAgIHZhciBlcnJvclN1bW1hcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnlcIik7XG4gICAgICBpZiAodGhpcy5lcnJvcnMubGVuZ3RoID4gMClcbiAgICAgIHsgICAgICAgIFxuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICh0aGlzLmlzRW1wdHkodGFyZ2V0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtYWlsKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICBpZiAoIXJlLnRlc3QodGFyZ2V0LnZhbHVlKSkgeyAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAoIXRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlRXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgc2hvd0Vycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5lcnJvcnMgPSB0aGlzLmVycm9ycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0YXJnZXQubmFtZSk7XG4gICAgICB0aGlzLmVycm9ycy5wdXNoKHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBpc0VtcHR5KHN0cikge1xuICAgICAgcmV0dXJuICFzdHIudHJpbSgpLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLW1lc3NhZ2UnKTtcbiAgICAgIGVycm9ycy5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvckNsYXNzZXMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICBlcnJvckNsYXNzZXMuZm9yRWFjaChlcnJvcmNsYXNzID0+IHtcbiAgICAgICAgZXJyb3JjbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeSA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3Itc3VtbWFyeScpO1xuICAgICAgZXJyb3JTdW1tYXJ5LmZvckVhY2goZXJyb3JzdW1tYXJ5ID0+IHtcbiAgICAgICAgZXJyb3JzdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5SXRlbXMgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yLXN1bW1hcnktaXRlbScpO1xuICAgICAgZXJyb3JTdW1tYXJ5SXRlbXMuZm9yRWFjaChzdW1tYXJ5aXRlbSA9PiB7XG4gICAgICAgIHN1bW1hcnlpdGVtLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZWNhcHRjaGFDYWxsYmFjaygpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0jbmV3c2xldHRlci1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJykucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstbmV3c2xldHRlci1mb3JtJyldLmZvckVhY2goKG5ld3NsZXR0ZXIpID0+IG5ldyBOZXdzbGV0dGVyKG5ld3NsZXR0ZXIpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIHRoZSBcImV4cGFuZCBhbGxcIiB0b2dnbGUgZnVuY3Rpb25hbGl0eSBmb3IgdGFibGVcbiAgICogY2FyZHMuXG4gICAqL1xuICBjbGFzcyBUYWJsZUNhcmQge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDYXJkKSB7XG4gICAgICB0aGlzLnRhYmxlQ2FyZCA9IHRhYmxlQ2FyZDtcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtdGFibGUtZXhwYW5kZXJfX3RvZ2dsZSBhJyk7XG4gICAgICB0aGlzLmV4cGFuZGVycyA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1leHBhbmRlcicpO1xuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluayAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rIGFuZCBzdW1tYXJ5IGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSB1c2Ugb2JzZXJ2ZXJzIHRvIHJlYWN0IHRvIGNsaWNrIGV2ZW50cyBvbiBpbmRpdmlkdWFsIGV4cGFuZGVycywgYXMgdGhpc1xuICAgICAqIGV2ZW50IGZ1bmN0aW9uYWxpdHkgaXMgaGFuZGxlZCBieSB0aGUgbmhzdWstZGV0YWlscyBjb21wb25lbnQncyBqYXZhc2NyaXB0LlxuICAgICAqL1xuICAgIGluaXRFeHBhbmRlck9ic2VydmVyKCkge1xuICAgICAgLy8gQ29uZmlndXJlIG9ic2VydmVyIHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gYW4gZXhwYW5kZXIncyBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0KSA9PiB7XG4gICAgICAgIG11dGF0aW9uc0xpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShleHBhbmRlciwge2F0dHJpYnV0ZXM6IHRydWV9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZUV4cGFuZGVycygpIHtcbiAgICAgIC8vIE9wZW4gLyBjbG9zZSBlYWNoIGV4cGFuZGVyIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlLlxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMub3BlbkV4cGFuZGVyKGV4cGFuZGVyKSA6IHRoaXMuY2xvc2VFeHBhbmRlcihleHBhbmRlcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gVG9nZ2xlIHN0YXRlIGZsYWcuXG4gICAgICB0aGlzLnN0YXRlT3BlbiA9ICF0aGlzLnN0YXRlT3BlbjtcblxuICAgICAgLy8gVG9nZ2xlIGJ1dHRvbiB0ZXh0LlxuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIERldGVybWluZXMgd2hldGhlciBhbGwgZXhwYW5kZXJzIGhhdmUgYmVlbiBvcGVuZWQgb3IgY2xvc2VkIGFuZCB1cGRhdGVzXG4gICAgICogIHRoZSBzdGF0ZSBmbGFnIGFuZCB0b2dnbGUgbGluayB0ZXh0IGFjY29yZGluZ2x5LlxuICAgICAqXG4gICAgICogIEZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIE11dGF0aW9uT2JzZXJ2ZXIgZGV0ZWN0cyBhIGNoYW5nZSBpbiBleHBhbmRlclxuICAgICAqICBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgdXBkYXRlVG9nZ2xlU3RhdGUoKSB7XG4gICAgICBsZXQgYWxsT3BlbiA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIWV4cGFuZGVyLmhhc0F0dHJpYnV0ZSgnb3BlbicpID8gYWxsT3BlbiA9IGZhbHNlIDogYWxsT3BlbiA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgIWFsbE9wZW4gPyB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlIDogdGhpcy5zdGF0ZU9wZW4gPSB0cnVlO1xuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYW4gZXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxuICAgICAqL1xuICAgIG9wZW5FeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICBleHBhbmRlci5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnb3BlbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgY2xvc2VFeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBleHBhbmRlci5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLXRhYmxlLWV4cGFuZGVyJyldLmZvckVhY2godGFibGVDYXJkID0+IG5ldyBUYWJsZUNhcmQodGFibGVDYXJkKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIC8qKlxyXG4gICogVGFic1xyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10YWJzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xyXG4gICovXHJcbiAgY2xhc3MgVGFicyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWJjb21wb25lbnQsIGkpIHtcclxuICAgICAgdGhpcy50YWJjb21wb25lbnQgPSB0YWJjb21wb25lbnRcclxuICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKVxyXG4gICAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJ0YWJsaXN0XCJdJylcclxuICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjID0+IHRoaXMuY2hhbmdlVGFicyhjKSlcclxuICAgICAgfSlcclxuICAgICAgbGV0IHRhYkZvY3VzID0gMFxyXG4gICAgICB0YWJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xyXG4gICAgICAgIC8vIE1vdmUgcmlnaHRcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSlcclxuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzKytcclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGVuZCwgZ28gdG8gdGhlIHN0YXJ0XHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA+PSB0YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1vdmUgbGVmdFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzLS1cclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHN0YXJ0LCBtb3ZlIHRvIHRoZSBlbmRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gdGFicy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApXHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWJzKGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2coZ3JhbmRwYXJlbnQpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylbMF07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxyXG4gICAgICBjb25zdCBpc19tb2JpbGUgPSBncmFuZHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXRhYnNfX21vYmlsZScpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGlzX21vYmlsZSlcclxuXHJcbiAgICAgIC8vIENvbXBhcmUgc2VsZWN0ZWQgYW5kIHRhcmdldCwgYW5kIGlmIG9uIG1vYmlsZVxyXG4gICAgICAvLyBDbG9zZSB0aGUgdGFiIGlmIGFscmVhZHkgb3BlblxyXG4gICAgICBpZih0YXJnZXQgPT0gc2VsZWN0ZWQgJiYgaXNfbW9iaWxlKSB7XHJcbiAgICAgICAgLy8gVW5zZWxlY3QgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgc2VsZWN0ZWQgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhpcyB0YWIgYXMgc2VsZWN0ZWRcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKHRhcmdldClcclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFiIHBhbmVsc1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNob3cgdGhlIHNlbGVjdGVkIHBhbmVsXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0ZWQoZ3JhbmRwYXJlbnQucGFyZW50Tm9kZSwgdGFyZ2V0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpXHJcbiAgICAgICAgLmZvckVhY2godCA9PiB0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgZmFsc2UpKTtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylcclxuICAgICAgICAuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB0cnVlKVxyXG4gICAgICBlbGUuY2xhc3NMaXN0LmFkZChcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBoaWRlVGFicyhlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFicGFuZWxcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHAgPT4gcC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NlbGVjdGVkKGVsZSwgdGFyZ2V0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZS5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKSlcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApXHJcbiAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzJyldLmZvckVhY2goKHRhYnMsIGkpID0+IG5ldyBUYWJzKHRhYnMsIGkpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogQW5jaG9yTGlua3NcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWFuY2hvci1saW5rcycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgQW5jaG9yTGlua3Mge1xuICAgIGNvbnN0cnVjdG9yKGFuY2hvckxpbmtzKSB7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzID0gYW5jaG9yTGlua3M7XG5cbiAgICAgIGlmICh0aGlzLmFuY2hvckxpbmtzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuZm91bmRIZWFkaW5ncyA9IHRoaXMuZmluZEhlYWRpbmdzKGFuY2hvckxpbmtzLmRhdGFzZXQuaGVhZGluZ3MpO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEhlYWRpbmdzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFkZEFuY2hvcnNUb1BhZ2UoKTtcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSGVhZGluZ3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBmb3VuZEhlYWRpbmdzID0gW11cbiAgICAgIGlmIChoZWFkaW5ncykge1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIENTUyBzZWxlY3RvcnMgZm9yIG9ubHkgZmlyc3QgbGV2ZWwgaGVhZGluZ3MgaW5zaWRlIHJpY2gtdGV4dFxuICAgICAgICAvLyBhcmVhcyBhbmQgb3V0c2lkZSBvZiBjb21wb25lbnRzLlxuICAgICAgICBjb25zdCBoZWFkaW5nVHlwZXMgPSBoZWFkaW5ncy5zcGxpdCgnLCcpO1xuICAgICAgICBsZXQgc2VsZWN0b3JzID0gaGVhZGluZ1R5cGVzLm1hcCh0eXBlID0+IHtcbiAgICAgICAgICByZXR1cm4gJy5wYWdlX19jb250ZW50ID4gJyArIHR5cGU7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMuam9pbignLCAnKTtcblxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX2NvbnRlbnQnKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycykuZm9yRWFjaCgoaGVhZGluZywgaSkgPT4ge1xuICAgICAgICAgIGlmICghaGVhZGluZy5pZCkge1xuICAgICAgICAgICAgaGVhZGluZy5pZCA9IGhlYWRpbmcuaW5uZXJUZXh0LnJlcGxhY2UoLyAuKi8sJycpLnJlcGxhY2UoL1tcXG5cXHJdL2csJycpLnJlcGxhY2UoL1xccy9nLCcnKS50b0xvd2VyQ2FzZSgpK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvdW5kSGVhZGluZ3MucHVzaChoZWFkaW5nKTtcbiAgICAgICAgfSlcbiAgICAgIH0gICAgICBcbiAgICAgIHJldHVybiBmb3VuZEhlYWRpbmdzO1xuICAgIH1cblxuICAgIGFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihoZWFkaW5nLCBzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0uc29tZShlbCA9PlxuICAgICAgICBlbCAhPT0gaGVhZGluZyAmJiBlbC5jb250YWlucyhoZWFkaW5nKVxuICAgICAgKVxuICAgIH1cblxuICAgIGFkZEFuY2hvcnNUb1BhZ2UoKSB7XG4gICAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzLmZvckVhY2goZm91bmRIZWFkaW5nID0+IHtcbiAgICAgICAgaWYgKCFmb3VuZEhlYWRpbmcuZGF0YXNldC5hbmNob3JsaW5rc2lnbm9yZVxuICAgICAgICAgICYmICFmb3VuZEhlYWRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay11LXZpc3VhbGx5LWhpZGRlbicpXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLWNhcmRfX2hlYWRpbmcnKVxuICAgICAgICAgICYmICF0aGlzLmFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihmb3VuZEhlYWRpbmcsICcubmhzdWstZ3JpZC1jb2x1bW4tb25lLXRoaXJkJykpXG4gICAgICAgIHtcbiAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGEuaHJlZiA9ICcjJytmb3VuZEhlYWRpbmcuaWQ7XG4gICAgICAgICAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSBmb3VuZEhlYWRpbmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5oc3VrLXUtdmlzdWFsbHktaGlkZGVuXCIpO1xuICAgICAgICAgIHdoaWxlIChoaWRkZW5FbGVtZW50cy5sZW5ndGggPiAwKSBoaWRkZW5FbGVtZW50c1swXS5yZW1vdmUoKTtcbiAgICAgICAgICBhLmlubmVyVGV4dCA9IGZvdW5kSGVhZGluZy5pbm5lclRleHQ7IC8vIHN0cmlwIHRhZ3NcbiAgICAgICAgICBhLmlubmVySFRNTCA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzxiclxccypbXFwvXT8+L2dpLCBcIiBcIik7IC8vIHN0cmlwIDxicj5cbiAgICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmNob3JMaW5rcy5hcHBlbmRDaGlsZCh1bCk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWFuY2hvci1saW5rcycpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rcyhhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogUmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcgdGFibGUgb2YgY29udGVudHMgbGlua3MuXG4gICovXG4gIGNsYXNzIFRhYmxlQ29udGVudHMge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzID0gdGFibGVDb250ZW50cztcblxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XG4gICAgICB0aGlzLmhlYWRpbmdTZWxlY3RvciA9ICdoMi50b2NfaDInO1xuICAgICAgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IgPSAnaDMudG9jX2gzJztcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xuXG4gICAgICAvLyBBbmNob3IgbGlua3MgbWFjcm8gc2V0cyB0aGlzIGRhdGEgYXR0cmlidXRlIHdoZW4gVE9DIGlzIGZsYWdnZWQgYXMgdHJ1ZS5cbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBidWlsZCBUT0MgbGlua3MgaWYgSDIgYW5jaG9ycyBmb3VuZCBvbiBwYWdlLlxuICAgICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5oZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnRhYmxlQ29udGVudHMuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBCdWlsZCBsaW5rIHN0cnVjdHVyZSBmcm9tIERPTSBhbmQgYXBwZW5kIGdlbmVyYXRlZCBtYXJrdXAgdG8gVE9DXG4gICAgICAvLyBjb21wb25lbnQuXG4gICAgICBjb25zdCBsaW5rcyA9IHRoaXMuY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpO1xuICAgICAgdGhpcy5zZXRUb2NMaXN0TWFya3VwKGxpbmtzKTtcblxuICAgICAgLy8gQnVpbGQgYmFjayB0byB0b3AgbGlua3MgYW5kIGFwcGVuZCB0byBlYWNoIFRPQyBoZWFkaW5nIHdpdGhpbiBwYWdlXG4gICAgICAvLyBjb250ZW50LiBXZSBza2lwIHRoZSBmaXJzdCBoZWFkaW5nIG9uIHRoZSBwYWdlLlxuICAgICAgaGVhZGluZ3MgPSBbXS5zbGljZS5jYWxsKGhlYWRpbmdzLCAxKTtcbiAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpO1xuICAgICAgY29uc3Qgc3ViSGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGFpbmVyU2VsZWN0b3IgKyAnICcgKyB0aGlzLnN1YkhlYWRpbmdTZWxlY3Rvcik7XG4gICAgICBpZiAoc3ViSGVhZGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNldEJhY2tUb1RvcExpbmtzKHN1YkhlYWRpbmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYXJyYXkgb2YgaGVhZGluZyBsaW5rIGF0dHJpYnV0ZXMgYW5kIHRoZWlyIGNoaWxkcmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlTGlzdH0gICAgICBoZWFkaW5nc1xuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdFtdfVxuICAgICAqL1xuICAgIGNyZWF0ZVRvY0xpbmtzKGhlYWRpbmdzKSB7XG4gICAgICBsZXQgbGlua3MgPSBbXTtcblxuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGluZ0lkID0gdGhpcy5oZWFkaW5nUHJlZml4ICsgJy0nICsgaW5kZXg7XG5cbiAgICAgICAgLy8gU2V0IHVuaXF1ZSBpZCBmb3IgY3VycmVudCBoZWFkaW5nIEgyIGVsZW1lbnQuXG4gICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGhlYWRpbmdJZClcblxuICAgICAgICBsZXQgbGluayA9IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoaGVhZGluZyksXG4gICAgICAgICAgYW5jaG9yOiBoZWFkaW5nSWQsXG4gICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNpYmxpbmcgPSBoZWFkaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICAvLyBUcmF2ZXJzZSBET00gZm9yIEgzIGVsZW1lbnRzIGFmdGVyIGN1cnJlbnQgSDIgaGVhZGluZyBhbmQgYXBwZW5kIHRvXG4gICAgICAgIC8vIGNoaWxkcmVuIGxpbmtzIGFycmF5LlxuICAgICAgICB3aGlsZSAoc2libGluZyAmJiAhc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ3RvY19oMicpKSB7XG4gICAgICAgICAgaWYgKHNpYmxpbmcudGFnTmFtZSA9PT0gJ0gzJyAmJiBzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gzJykpIHtcblxuICAgICAgICAgICAgLy8gU2V0IHVuaXF1ZSBpZCBmb3IgY3VycmVudCBoZWFkaW5nIEgzIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBzdWJIZWFkaW5nSWQgPSBoZWFkaW5nSWQgKyAnLScgKyBjb3VudDtcbiAgICAgICAgICAgIHNpYmxpbmcuc2V0QXR0cmlidXRlKCdpZCcsIHN1YkhlYWRpbmdJZClcblxuICAgICAgICAgICAgbGluay5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0SGVhZGluZ1RpdGxlKHNpYmxpbmcpLFxuICAgICAgICAgICAgICBhbmNob3I6IHN1YkhlYWRpbmdJZCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBsaW5rcy5wdXNoKGxpbmspO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBsaW5rcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGVpdGhlciB0aGUgc2hvcnQgb3IgbG9uZyB0aXRsZSBvZiB0aGUgaGVhZGluZyBiYXNlZCBvbiBkYXRhIGF0dHIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gIGhlYWRpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSB7XG4gICAgICBsZXQgdGl0bGU7XG5cbiAgICAgIGlmIChoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG9ydC10aXRsZScpKSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5kYXRhc2V0LnNob3J0VGl0bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZSA9IGhlYWRpbmcuaW5uZXJUZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBUT0MgbWFya3VwIGFuZCBhcHBlbmRzIHRvIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXRUb2NMaXN0TWFya3VwKGxpbmtzKSB7XG4gICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2hhcy1jaGlsZHJlbicpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWUtYW5jaG9ybGlua3NfX3dyYXBwZXInKVxuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZXZyb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2hldnJvblNWRygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaXJjbGVTVkcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc3Bhbik7XG5cbiAgICAgICAgbGV0IHBhcmVudExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHBhcmVudExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgbGluay5hbmNob3IpO1xuICAgICAgICBwYXJlbnRMaW5rLmlubmVyVGV4dCA9IGxpbmsudGl0bGU7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChwYXJlbnRMaW5rKTtcblxuICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY29udGFpbmVyKTtcblxuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgbGluay5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hpbGRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICAgICAgbGV0IGNoaWxkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBpdGVtLmFuY2hvcik7XG4gICAgICAgICAgICBjaGlsZExpbmsuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcblxuICAgICAgICAgICAgY2hpbGRJdGVtLmFwcGVuZChjaGlsZExpbmspO1xuICAgICAgICAgICAgY2hpbGRMaXN0LmFwcGVuZChjaGlsZEl0ZW0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNoaWxkTGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LmFwcGVuZChsaXN0SXRlbSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzLmFwcGVuZChsaXN0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYmFjayB0byB0b3AgbGluayBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICAgKi9cbiAgICBjcmVhdGVCYWNrVG9Ub3BMaW5rKCkge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1iYWNrLXRvLXRvcCcpO1xuXG4gICAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjbWFpbmNvbnRlbnQnKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0JhY2sgdG8gdG9wJyk7XG4gICAgICBhbmNob3IuaW5uZXJUZXh0ID0gJ0JhY2sgdG8gdG9wJztcblxuICAgICAgY29udGFpbmVyLmFwcGVuZChhbmNob3IpO1xuXG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYmFjayB0byB0b3AgbGlua3MgYWJvdmUgVE9DIGhlYWRpbmdzIHdpdGhpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlTGlzdH0gICAgICBoZWFkaW5nc1xuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldEJhY2tUb1RvcExpbmtzKGhlYWRpbmdzKSB7XG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBBdm9pZHMgZHVwbGljYXRlIGJhY2sgdG8gdG9wIGxpbmtzIHdoZW4gc3RpY2t5IGlzIHByZXNlbnQuXG4gICAgICAgIGlmICghaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtaGFzLXRvcC1saW5rJykpIHtcbiAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5jcmVhdGVCYWNrVG9Ub3BMaW5rKCk7XG4gICAgICAgICAgaGVhZGluZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rLCBoZWFkaW5nKTtcbiAgICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaGV2cm9uIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENoZXZyb25TVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDggMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8cGF0aCBkPVwiTTguMDAwMTkgNi45OTk5NEM4LjAwMDk1IDcuMTMxNTUgNy45NzU3MiA3LjI2MjAxIDcuOTI1OTYgNy4zODM4NUM3Ljg3NjE5IDcuNTA1NjkgNy44MDI4NyA3LjYxNjUgNy43MTAxOSA3LjcwOTk0TDIuNzEwMTkgMTIuNzA5OUMyLjYxNjk1IDEyLjgwMzIgMi41MDYyNiAxMi44NzcxIDIuMzg0NDMgMTIuOTI3NkMyLjI2MjYxIDEyLjk3ODEgMi4xMzIwNCAxMy4wMDQgMi4wMDAxOSAxMy4wMDRDMS44NjgzMyAxMy4wMDQgMS43Mzc3NiAxMi45NzgxIDEuNjE1OTQgMTIuOTI3NkMxLjQ5NDExIDEyLjg3NzEgMS4zODM0MiAxMi44MDMyIDEuMjkwMTggMTIuNzA5OUMxLjE5Njk1IDEyLjYxNjcgMS4xMjI5OSAxMi41MDYgMS4wNzI1MyAxMi4zODQyQzEuMDIyMDYgMTIuMjYyNCAwLjk5NjA5NCAxMi4xMzE4IDAuOTk2MDk0IDExLjk5OTlDMC45OTYwOTQgMTEuODY4MSAxLjAyMjA2IDExLjczNzUgMS4wNzI1MyAxMS42MTU3QzEuMTIyOTkgMTEuNDkzOSAxLjE5Njk1IDExLjM4MzIgMS4yOTAxOCAxMS4yODk5TDUuNTkwMTkgNi45OTk5NEwxLjI5MDE4IDIuNzA5OTRDMS4xMDE4OCAyLjUyMTY0IDAuOTk2MDk0IDIuMjY2MjQgMC45OTYwOTQgMS45OTk5NEMwLjk5NjA5NCAxLjczMzY0IDEuMTAxODggMS40NzgyNSAxLjI5MDE4IDEuMjg5OTRDMS40Nzg0OSAxLjEwMTY0IDEuNzMzODggMC45OTU4NSAyLjAwMDE5IDAuOTk1ODVDMi4yNjY0OSAwLjk5NTg1IDIuNTIxODggMS4xMDE2NCAyLjcxMDE5IDEuMjg5OTRMNy43MTAxOSA2LjI4OTk0QzcuODAyODcgNi4zODMzOCA3Ljg3NjE5IDYuNDk0MiA3LjkyNTk2IDYuNjE2MDNDNy45NzU3MiA2LjczNzg3IDguMDAwOTUgNi44NjgzMyA4LjAwMDE5IDYuOTk5OTRaXCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2lyY2xlIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENpcmNsZVNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIzXCIgdmlld0JveD1cIjAgMCAzIDNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3MnKV0uZm9yRWFjaCh0YWJsZUNvbnRlbnRzID0+IG5ldyBUYWJsZUNvbnRlbnRzKHRhYmxlQ29udGVudHMpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBGaWx0ZXJcbiAgICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1maWx0ZXInIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICAqL1xuICBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIHRoaXMuY2hlY2tib3hlcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcbiAgICAgIHRoaXMuZHJvcGRvd25zID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXNlbGVjdCcpXTtcbiAgICAgIHRoaXMuZ3JvdXBzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAnKV07XG4gICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXJfX3N1Ym1pdCcpO1xuICAgICAgdGhpcy5jbGVhclRvZ2dsZSA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXJfX2dyb3VwX19jbGVhcicpXTtcblxuICAgICAgdGhpcy5zZXRVcCgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGV2dCkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZHJvcGRvd25zLmZvckVhY2goZHJvcGRvd24gPT4ge1xuICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGV2dCkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBsZWdlbmQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmllbGRzZXRfX2xlZ2VuZCcpO1xuICAgICAgICBpZiAobGVnZW5kKSB7XG4gICAgICAgICAgbGVnZW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xlR3JvdXBGaWVsZHNldChldnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy5jbGVhckZpbHRlcihldnQpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFVwKCkge1xuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLS1qcycpO1xuXG4gICAgICB0aGlzLmluaXRGaWx0ZXJzKCk7XG4gICAgICB0aGlzLmluaXRDbGVhclRvZ2dsZXMoKTtcbiAgICAgIHRoaXMuaW5pdENvdW50ZXJzKCk7XG5cbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgaWYgKHRoaXMuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEZpbHRlcnMoKSB7XG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcblxuICAgICAgICBpZiAoIXRoaXMuaXNHcm91cEZpbHRlckFjdGl2ZShncm91cCkpIHtcbiAgICAgICAgICAvLyBDb2xsYXBzZSBncm91cCBpZiBmaWx0ZXJzIG5vdCBhY3RpdmUuXG4gICAgICAgICAgZ3JvdXAuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyX19ncm91cC0tY2xvc2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNhYmxlIHN1Yi1ncm91cCBzZWxlY3QgaWYgbm8gb3B0aW9uIGluIHBhcmVudCBzZWxlY3RlZC5cbiAgICAgICAgaWYgKGdyb3VwLmNsYXNzTGlzdC5jb250YWlucygnaGFzLXN1Ymdyb3VwJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnRTZWxlY3QgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZm9ybS1ncm91cC5wYXJlbnQtZ3JvdXAgc2VsZWN0Jyk7XG4gICAgICAgICAgY29uc3Qgc3ViU2VsZWN0ID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWZvcm0tZ3JvdXAuc3ViLWdyb3VwIHNlbGVjdCcpO1xuXG4gICAgICAgICAgaWYgKHN1YlNlbGVjdCAhPT0gbnVsbCAmJiBwYXJlbnRTZWxlY3QgIT09IG51bGwgJiYgcGFyZW50U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgc3ViU2VsZWN0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbmFibGUgc2Nyb2xsYWJsZSBjaGVja2JveCBncm91cHMgaWYgbW9yZSB0aGFuIGZvdXIgb3B0aW9ucy5cbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzJyk7XG4gICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgICAgaWYgKGNiLmNoaWxkRWxlbWVudENvdW50ID4gNCkge1xuICAgICAgICAgICAgY2IuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYWJsZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0Q2xlYXJUb2dnbGVzKCkge1xuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyX19ncm91cF9fY2xlYXInKTtcbiAgICAgICAgaWYgKHRoaXMuaXNHcm91cEZpbHRlckFjdGl2ZShncm91cCkpIHtcbiAgICAgICAgICB0b2dnbGVMaW5rLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdENvdW50ZXJzKCkge1xuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ291bnQoZ3JvdXApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZlQ291bnQoZ3JvdXApIHtcbiAgICAgIGNvbnN0IGNvdW50RWxlbSA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1oaW50Jyk7XG5cbiAgICAgIGlmIChjb3VudEVsZW0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgIGNvdW50RWxlbS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY291bnRFbGVtLmlubmVyVGV4dCA9IGAke2NvdW50fSBzZWxlY3RlZGBcbiAgICAgIGNvdW50RWxlbS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgaXNHcm91cEZpbHRlckFjdGl2ZShncm91cCkge1xuICAgICAgLy8gQ2hlY2sgaWYgY2hlY2tib3hlcyBhcmUgYWN0aXZlLlxuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGVja2JveGVzW2ldLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiBzZWxlY3RzIGFyZSBhY3RpdmUuXG4gICAgICBjb25zdCBzZWxlY3RFbGVtZW50cyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1zZWxlY3QnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGVjdEVsZW1lbnRzW2ldLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0b2dnbGVHcm91cEZpZWxkc2V0KGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldnQudGFyZ2V0LmNsb3Nlc3QoJy5uaHN1ay1maWx0ZXJfX2dyb3VwJykuY2xhc3NMaXN0LnRvZ2dsZSgnbmhzdWstZmlsdGVyX19ncm91cC0tY2xvc2VkJyk7XG4gICAgfVxuXG4gICAgc2V0VXBkYXRlZEZsYWcoaXNVcGRhdGVkKSB7XG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLiB0byBlbnN1cmUgdmlld3BvcnQgcmVzZXRzXG4gICAgICAvLyBhZnRlciBmb3JtIHN1Ym1pdC5cbiAgICAgIGxldCBmbGFnRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtdXBkYXRlLWZsYWc9XCJmaWx0ZXJcIl0nKTtcbiAgICAgIGlmIChmbGFnRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBmbGFnRWxlbWVudC52YWx1ZSA9IGlzVXBkYXRlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGV2dCkge1xuICAgICAgLy8gU2V0IHNvcnQgY29udGFpbmVyIGhpZGRlbiBzY3JvbGwgZmxhZyB2YWx1ZSx0byBlbnN1cmUgdmlld3BvcnQgc2Nyb2xsc1xuICAgICAgLy8gZG93biB0byByZXN1bHRzIGxpc3RpbmdzIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgdGhpcy5zZXRVcGRhdGVkRmxhZyh0cnVlKTtcblxuICAgICAgY29uc3QgcGFyZW50R3JvdXAgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5uaHN1ay1maWx0ZXJfX2dyb3VwJyk7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUNvdW50KHBhcmVudEdyb3VwKTtcblxuICAgICAgLy8gQ2hlY2sgd2hldGhlciBzZWxlY3QgZHJvcGRvd24gaGFzIGNoaWxkIGZpbHRlciBhbmQgcmVzZXQgdGhhdCB0b28uXG4gICAgICBpZiAocGFyZW50R3JvdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtc3ViZ3JvdXAnKSAmJiBldnQudGFyZ2V0Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcucGFyZW50LWdyb3VwJyk7XG4gICAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgICAgY29uc3QgY2hpbGRTZWxlY3QgPSB3cmFwcGVyLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuc3ViLWdyb3VwIHNlbGVjdCcpO1xuICAgICAgICAgIGNoaWxkU2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIGNsZWFyRmlsdGVyKGV2dCkge1xuICAgICAgdGhpcy5jbGVhckNoZWNrYm94ZXMoZXZ0KTtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3RFbGVtZW50cyhldnQpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KTtcbiAgICB9XG5cbiAgICBjbGVhckNoZWNrYm94ZXMoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGV2dC50YXJnZXQ7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gdG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpO1xuXG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyU2VsZWN0RWxlbWVudHMoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGV2dC50YXJnZXQ7XG4gICAgICBjb25zdCBzZWxlY3RFbGVtZW50cyA9IHRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstc2VsZWN0Jyk7XG5cbiAgICAgIHNlbGVjdEVsZW1lbnRzLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcicpXS5mb3JFYWNoKGZpbHRlciA9PiBuZXcgRmlsdGVyKGZpbHRlcikpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBGaWx0ZXJUYWdcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlci10YWcnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlclRhZyB7XG4gICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgIHRoaXMuaWNvbiA9IHRhZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyLXRhZ19faWNvbicpO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHRoaXMucmVtb3ZlRmlsdGVyKGV2dCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUZpbHRlcihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBncm91cFRhZ3MgPSB0aGlzLnRhZy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1maWx0ZXItdGFnJyk7XG5cbiAgICAgIC8vIFJlbW92ZSBlbnRpcmUgZmlsdGVyIHRhZyBncm91cCBpZiBubyBvdGhlciB0YWdzIHByZXNlbnQuXG4gICAgICBpZiAoZ3JvdXBUYWdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLnRhZy5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnRhZy5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZm9ybS5uaHN1ay1maWx0ZXIgaW5wdXRbdmFsdWU9JyR7dGhpcy50YWcuZGF0YXNldC5maWx0ZXJ9J11gKS5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja2JveC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGZvcm0ubmhzdWstZmlsdGVyIHNlbGVjdCBvcHRpb25bdmFsdWU9JyR7dGhpcy50YWcuZGF0YXNldC5maWx0ZXJ9J11gKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudEdyb3VwU2VsZWN0ID0gb3B0aW9uLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHBhcmVudEdyb3VwU2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuXG4gICAgICAgIC8vIFJlc2V0IHN1Yi1ncm91cCBzZWxlY3QgaWYgd2UgYXJlIHNldHRpbmcgdGhlIHBhcmVudCxcbiAgICAgICAgY29uc3QgZm9ybUdyb3VwRWxlbSA9IG9wdGlvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAoZm9ybUdyb3VwRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhcmVudC1ncm91cCcpKSB7XG4gICAgICAgICAgY29uc3Qgc3ViR3JvdXBTZWxlY3QgPSBmb3JtR3JvdXBFbGVtLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstc2VsZWN0Jyk7XG4gICAgICAgICAgc3ViR3JvdXBTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRHcm91cFNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLnRhZy5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItdGFnLS1qcycpO1xuXG4gICAgICBpZiAodGhpcy5pY29uKSB7XG4gICAgICAgIHRoaXMuaWNvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyLXRhZycpXS5mb3JFYWNoKHRhZyA9PiBuZXcgRmlsdGVyVGFnKHRhZykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogTGlzdGluZ1xuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWxpc3RpbmcnIGFuZCAnLmhlZS1saXN0aW5ncycgYXJlIHBhc3NlZFxuICAgKiBpbnRvIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEB0b2RvIFJlbW92ZSBsZWdhY3kgcmVmZXJlbmNlcyB0byAubmhzdWstbGlzdGluZyBhbmQgbG9vcHMgb25jZSBhbGwgbmV3XG4gICAqIGNvbGxlY3Rpb24gdGVtcGxhdGVzIGhhdmUgYmVlbiBpbXBsZW1lbnRlZC5cbiAgICovXG4gIGNsYXNzIExpc3Rpbmcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmdfX2ZpbHRlcl9fc29ydCwgLm5oc3VrLWxpc3RpbmdfX3NvcnQnKV0uZm9yRWFjaChmb3JtRWxlbWVudCA9PiB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpO1xuICAgICAgICB0aGlzLnRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyhmb3JtRWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gRGlzYWJsZXMgYnJvd3NlciByZXN0b3Jpbmcgdmlld3BvcnQgdG8gcG9zaXRpb24gYmVmb3JlIHBhZ2UgcmVsb2FkLlxuICAgICAgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuXG4gICAgICB0aGlzLnNjcm9sbFRvUmVzdWx0cygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWxlY3QnKV0uZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zdWJtaXQsIC5uaHN1ay1saXN0aW5nX19zb3J0X19zdWJtaXQnKV0uZm9yRWFjaChzdWJtaXQgPT4ge1xuICAgICAgICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgICAgIHN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRVcGRhdGVkRmxhZyhpc1VwZGF0ZWQpIHtcbiAgICAgIGxldCBmbGFnRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtdXBkYXRlLWZsYWc9XCJsaXN0aW5nXCJdJyk7XG4gICAgICBpZiAoZmxhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZmxhZ0VsZW1lbnQudmFsdWUgPSBpc1VwZGF0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUmVzdWx0cyhmb3JtRWxlbWVudCkge1xuICAgICAgLy8gU2V0IHNvcnQgY29udGFpbmVyIGhpZGRlbiBzY3JvbGwgZmxhZyB2YWx1ZSx0byBlbnN1cmUgdmlld3BvcnQgc2Nyb2xsc1xuICAgICAgLy8gZG93biB0byByZXN1bHRzIGxpc3RpbmdzIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgdGhpcy5zZXRVcGRhdGVkRmxhZyh0cnVlKTtcblxuICAgICAgZm9ybUVsZW1lbnQuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9SZXN1bHRzKCkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24pO1xuXG4gICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3Jlc3VsdHNfdXBkYXRlZCcpKSB7XG4gICAgICAgIGNvbnN0IGxpc3RpbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChsaXN0aW5nQ29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgbGlzdGluZ0NvbnRhaW5lci5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZywgLm5oc3VrLWxpc3RpbmcnKV0uZm9yRWFjaChsaXN0aW5nID0+IG5ldyBMaXN0aW5nKGxpc3RpbmcpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3MgQ29va2llcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvLyBiYW5uZXJcbiAgICAgIHRoaXMudXNlQ29va2llcyA9ICcnXG4gICAgICB0aGlzLmJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1jb29raWUtYmFubmVyJylcbiAgICAgIHRoaXMuc2hvd0Nvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0Nvb2tpZXMnKVxuICAgICAgdGhpcy5yZW1vdmVDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZUNvb2tpZXMnKVxuICAgICAgdGhpcy5ob3N0ID0gdGhpcy5nZXRIb3N0KClcblxuICAgICAgdGhpcy5jb29raWVTdGF0dXMoKVxuICAgICAgdGhpcy5zZXRDb29raWVzKClcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgICAvLyBwb2xpY3kgcGFnZVxuICAgICAgdGhpcy5TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWtfX2Nvb2tpZVN0YXR1cycpXG4gICAgICB0aGlzLkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzSW4nKVxuICAgICAgdGhpcy5PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNPdXQnKVxuXG4gICAgICB0aGlzLnRvZ2dsZVN0YXR1cygpXG4gICAgfVxuXG4gICAgY29va2llU3RhdHVzKCl7XG4gICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKVxuICAgICAgY29va2llcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGMubWF0Y2gobmV3IFJlZ0V4cCgnKF58ICljb29raWVfY29uc2VudChbXjtdKyknKSlcbiAgICAgICAgaWYobWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBjLnNwbGl0KFwiPVwiKVsxXVxuICAgICAgICAgIHRoaXMudXNlQ29va2llcyA9IHN0YXR1c1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGdldEhvc3QoKXtcbiAgICAgIGNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdC50b1N0cmluZygpLnNwbGl0KFwiOlwiKVswXVxuICAgICAgcmV0dXJuIGhvc3RcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmKHRoaXMuc2hvd0Nvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5zaG93Q29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnNob3dDb29raWUpXG4gICAgICB9XG4gICAgICBpZih0aGlzLnJlbW92ZUNvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMucmVtb3ZlQ29va2llKVxuICAgICAgfVxuICAgIH1cblxuICAgIGJhbm5lclNob3coKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJhbm5lckhpZGUoKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb29raWVzKCkge1xuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSAnJykge1xuICAgICAgICAgIHRoaXMuYmFubmVyU2hvdygpXG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzQWNjZXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfYWNjZXB0X2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0FjY2VwdCkge1xuICAgICAgICAgICAgYW5hbHl0aWNzQWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzRGVjbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2RlY2xpbmVfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzRGVjbGluZSkge1xuICAgICAgICAgICAgYW5hbHl0aWNzRGVjbGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9dHJ1ZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICBub0Nvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD1mYWxzZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgICBpZih0aGlzLlN0YXR1cyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc091dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzSW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gXCJmYWxzZVwiIHx8IHRoaXMudXNlQ29va2llcyA9PT0gJycgKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLkluKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5JbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlCbG9jayhpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIilcbiAgICB9XG5cbiAgICBkaXNwbGF5Tm9uZShpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpXG4gICAgfVxuXG4gICAgLy8gcmVkdW5kYW50IGJ1dCB1c2VmdWxcbiAgICBzaG93Q29va2llKCkge1xuICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2tpZXMnKVxuICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gJz4gJyArIGRvY3VtZW50LmNvb2tpZVxuICAgIH1cbiAgICBcbiAgICByZW1vdmVDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZV9jb25zZW50PWZhbHNlOyBtYXgtYWdlPTBcIlxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgfVxuXG4gIG5ldyBDb29raWVzKGRvY3VtZW50KVxufSIsIi8qKlxuKiBTdWJOYXZcbiogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1zdWJuYXYnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4qL1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIHN1Yk5hdiB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignYScpXG4gICAgICB0aGlzLnBhcmVudExpc3QgPSB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZUxpbmspIHtcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHRoaXMudG9nZ2xlTWVudShldmVudCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudShldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3RhdGUoKXtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBhY3RpdmVFbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBpZihlbGVtICE9IHRoaXMuY29udGFpbmVyKXtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgICBlbGVtLnRvZ2dsZUF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGFjdGl2ZUVsZW1zLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3RhdGUoKVxuICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLmNvbnRhaW5lciwgXCJpcy1hY3RpdmVcIilcbiAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKHRoaXMuY29udGFpbmVyLCBcImFyaWEtZXhwYW5kZWRcIilcbiAgICB9XG5cbiAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICAgIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm5cbiAgICAgIGNvbnN0IGhhc0NsYXNzID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICAgICAgaWYgKGhhc0NsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyKSB7XG4gICAgICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGF0dHIgYXJlIG1pc3NpbmdcbiAgICAgIGlmICghZWxlbWVudCB8fCAhYXR0cikgcmV0dXJuXG4gICAgICAvLyBUb2dnbGUgYXR0cmlidXRlIHZhbHVlLiBUcmVhdCBubyBleGlzdGluZyBhdHRyIHNhbWUgYXMgd2hlbiBzZXQgdG8gZmFsc2VcbiAgICAgIGNvbnN0IHZhbHVlID0gKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZScpID8gJ2ZhbHNlJyA6ICd0cnVlJ1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstc3VibmF2JyldLmZvckVhY2goc3VibmF2ID0+IG5ldyBzdWJOYXYoc3VibmF2KSlcblxuICAvKiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSkgKi9cblxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLW1lbnVcIik7XG5cbiAgY2xvc2VNZW51ICYmIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdXNlcklucHV0KGV2ZW50KVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB1c2VySW5wdXQpIFxuICBcbiAgZnVuY3Rpb24gdXNlcklucHV0KGV2ZW50KSB7XG4gICAgLy8gY2xvc2UgbWVudSBpZiBjbGlja2luZyBvdXRzaWRlXG4gICAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgaWYob3Blbk1lbnUpe1xuICAgICAgY29uc3QgaXNOb3RNZW51ID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuTWVudVxuICAgICAgY29uc3QgaXNOb3RNZW51QnV0dG9uID0gZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpXG4gICAgICBjb25zdCBpc01lbnVDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgICBpZihpc05vdE1lbnUgJiYgaXNOb3RNZW51QnV0dG9uICYmICFpc01lbnVDaGlsZCl7XG4gICAgICAgIG9wZW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zaG93XCIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNsb3NlIHN1YiBuYXYgaWYgY2xpY2tpbmcgYW55d2hlcmUgb24gdGhlIGRvY3VtZW50IGV4Y2VwdCB0aGUgb3BlbiBvciBhIG5ldyBzdWJuYXZcbiAgICBjb25zdCBvcGVuU3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgaWYob3BlblN1Yil7XG4gICAgICBjb25zdCBpc05vdFN1YiA9IGV2ZW50LnRhcmdldCAhPT0gb3BlblN1YlxuICAgICAgY29uc3QgaXNTdWJDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGlmKGlzTm90U3ViICYmICFpc1N1YkNoaWxkKXtcbiAgICAgICAgb3BlblN1Yi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLWxpc3RcIikuY2xhc3NMaXN0LnJlbW92ZShcInN1Ym5hdi1vcGVuXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBOSFNVSy1IRUUgQ29tcG9uZW50c1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWNvb2tpZXMvY29va2llcyc7XG5pbXBvcnQgU3ViTmF2IGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL25oc3VrLWhlZS1oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYnO1xuXG4vLyBIRUUgQ29tcG9uZW50c1xuaW1wb3J0IEFuY2hvckxpbmtzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvYW5jaG9ybGlua3MnO1xuaW1wb3J0IEFuY2hvckxpbmtzU3RpY2t5IGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2hlZS1hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5JztcbmltcG9ydCBUYWJsZUNvbnRlbnRzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvdG9jJztcbmltcG9ydCBMaXN0aW5nIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW1lZGlhL21lZGlhJztcbmltcG9ydCBOYXZNYXAgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uYXZtYXAvbmF2bWFwJztcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmV3c2xldHRlci9uZXdzbGV0dGVyJztcbmltcG9ydCBTdW1tYXJ5Q2FyZCBmcm9tIFwiLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1jYXJkLS1zdW1tYXJ5L3N1bW1hcnlcIjtcbmltcG9ydCBUYWJzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFicy90YWJzJztcbmltcG9ydCBUYWJsZUNhcmQgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJsZS1leHBhbmRlci90YWJsZS1leHBhbmRlcic7XG5cbi8vIFVuc29ydGVkIGNvbXBvbmVudHNcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyJztcbmltcG9ydCBGaWx0ZXJUYWcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnJztcblxuLy8gSW5pdGlhbGl6ZSBjb21wb25lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBUYWJzKCk7XG4gIEFuY2hvckxpbmtzKCk7XG4gIEFuY2hvckxpbmtzU3RpY2t5KCk7XG4gIENvb2tpZXMoKTtcbiAgRmlsdGVyKCk7XG4gIEZpbHRlclRhZygpO1xuICBMaXN0aW5nKCk7XG4gIE1lZGlhKCk7XG4gIE5hdk1hcCgpO1xuICBTdWJOYXYoKTtcbiAgU3VtbWFyeUNhcmQoKTtcbiAgTmV3c2xldHRlcigpO1xuICBUYWJsZUNvbnRlbnRzKCk7XG4gIFRhYmxlQ2FyZCgpO1xufSk7XG4iXSwibmFtZXMiOlsiQW5jaG9yTGlua3NTdGlja3kiLCJjb250YWluZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0b2dnbGVCdG4iLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5QW5jaG9yTGlua3MiLCJzaWRlYmFyQW5jaG9yTGlua3MiLCJkb2N1bWVudCIsImZvb3RlciIsImFkZEV2ZW50TGlzdGVuZXJzIiwidG9nZ2xlU3RpY2t5VG9vbGJhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MiLCJldmVudCIsImtleUNvZGUiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwid2luZG93IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJ0b2NCbG9ja1Zpc2libGUiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiZm9vdGVyVmlzaWJsZSIsImFkZCIsInJlbW92ZSIsImVsZW1lbnQiLCJib3VuZGluZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsZW1lbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsInRvcCIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJhbmNob3JMaW5rcyIsIlN1bW1hcnlDYXJkIiwic3VtbWFyeUNhcmQiLCJ0b2dnbGVMaW5rIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVTdW1tYXJ5IiwiVHJhbnNjcmlwdCIsInRvZ2dsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImV2dCIsInRvZ2dsZXRyYW5zY3JpcHQiLCJpc0NvbGxhcHNlZCIsImNvbnRhaW5zIiwidHJhbnNjcmlwdCIsIk5hdk1hcCIsIm1hcCIsInN2ZyIsInJlZ2lvbnMiLCJsaXN0IiwiYWRkTGlua3NUb01hcCIsImNsZWFuU3R5bGUiLCJtYXBFdmVudExpc3RlbmVycyIsImxpbmtFdmVudExpc3RlbmVycyIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJyZWdpb24iLCJ0aGlzQ291bnRlcnBhcnQiLCJtYXBDb3VudGVycGFydCIsImlkIiwidGhpc0hyZWYiLCJocmVmIiwidGhpc1RpdGxlIiwiY2hpbGRyZW4iLCJ3cmFwTGluayIsImNvbmNhdCIsIl90aGlzMiIsIm1hcEluIiwibWFwT3V0IiwibWFwQ2xpY2siLCJfdGhpczMiLCJpdGVtIiwibGlua0V2ZW50IiwibW92ZVRvVG9wIiwib2JqIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwidGhpc0xpbmsiLCJ0aGlzTWFwQ291bnRlcnBhcnQiLCJjbG9zZXN0IiwiY2xpY2siLCJ0aGlzSWQiLCJmaW5kIiwiZGlyZWN0aW9uIiwidHlwZSIsImxpbmtDb3VudGVycGFydCIsImdldFNWR0RvY3VtZW50IiwiTmV3c2xldHRlciIsIm5ld3NsZXR0ZXIiLCJyZXF1aXJlZElucHV0cyIsImVycm9ycyIsImluaXQiLCJyZWNhcHRjaGFDYWxsYmFjayIsInJlc2V0Rm9ybSIsImFkZEV2ZW50cyIsImlucHV0IiwiYyIsInZhbGlkYXRlIiwidGFyZ2V0RXJyb3IiLCJnZXRFbGVtZW50QnlJZCIsIm5hbWUiLCJ0YXJnZXRTdW1tYXJ5RXJyb3IiLCJlcnJvckVtcHR5IiwiZXJyb3JFbWFpbCIsImVycm9yQ29uc2VudCIsInVwZGF0ZVN1bW1hcnkiLCJlcnJvclN1bW1hcnkiLCJsZW5ndGgiLCJkaXNwbGF5IiwiaXNFbXB0eSIsInNob3dFcnJvciIsImhpZGVFcnJvciIsInJlIiwidGVzdCIsImNoZWNrZWQiLCJmaWx0ZXIiLCJwdXNoIiwic3RyIiwidHJpbSIsImVycm9yIiwiZXJyb3JDbGFzc2VzIiwiZXJyb3JjbGFzcyIsImVycm9yc3VtbWFyeSIsImVycm9yU3VtbWFyeUl0ZW1zIiwic3VtbWFyeWl0ZW0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJUYWJsZUNhcmQiLCJ0YWJsZUNhcmQiLCJleHBhbmRlcnMiLCJzdGF0ZU9wZW4iLCJpbm5lclRleHQiLCJkYXRhc2V0IiwibGFiZWxPcGVuIiwiaW5pdEV4cGFuZGVyT2JzZXJ2ZXIiLCJ0b2dnbGVFeHBhbmRlcnMiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnNMaXN0IiwibXV0YXRpb24iLCJhdHRyaWJ1dGVOYW1lIiwidXBkYXRlVG9nZ2xlU3RhdGUiLCJleHBhbmRlciIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwib3BlbkV4cGFuZGVyIiwiY2xvc2VFeHBhbmRlciIsImxhYmVsQ2xvc2UiLCJhbGxPcGVuIiwiaGFzQXR0cmlidXRlIiwic3VtbWFyeSIsInRleHQiLCJUYWJzIiwidGFiY29tcG9uZW50IiwiaSIsInRhYnMiLCJ0YWJMaXN0IiwidGFiIiwiY2hhbmdlVGFicyIsInRhYkZvY3VzIiwiZSIsInBhcmVudCIsInBhcmVudE5vZGUiLCJncmFuZHBhcmVudCIsInNlbGVjdGVkIiwiaXNfbW9iaWxlIiwicmVtb3ZlU2VsZWN0ZWQiLCJoaWRlVGFicyIsInNldFNlbGVjdGVkIiwic2hvd1NlbGVjdGVkIiwiZWxlIiwidCIsInAiLCJBbmNob3JMaW5rcyIsImhpZGRlbiIsImZvdW5kSGVhZGluZ3MiLCJmaW5kSGVhZGluZ3MiLCJoZWFkaW5ncyIsImFkZEFuY2hvcnNUb1BhZ2UiLCJoZWFkaW5nVHlwZXMiLCJzcGxpdCIsInNlbGVjdG9ycyIsImpvaW4iLCJjb250ZW50Q29udGFpbmVyIiwiaGVhZGluZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbiIsInNlbGVjdG9yIiwic29tZSIsImVsIiwidWwiLCJjcmVhdGVFbGVtZW50IiwiZm91bmRIZWFkaW5nIiwiYW5jaG9ybGlua3NpZ25vcmUiLCJsaSIsImEiLCJoaWRkZW5FbGVtZW50cyIsIlRhYmxlQ29udGVudHMiLCJ0YWJsZUNvbnRlbnRzIiwiY29udGFpbmVyU2VsZWN0b3IiLCJoZWFkaW5nU2VsZWN0b3IiLCJzdWJIZWFkaW5nU2VsZWN0b3IiLCJoZWFkaW5nUHJlZml4IiwibGlua3MiLCJjcmVhdGVUb2NMaW5rcyIsInNldFRvY0xpc3RNYXJrdXAiLCJzbGljZSIsImNhbGwiLCJzZXRCYWNrVG9Ub3BMaW5rcyIsInN1YkhlYWRpbmdzIiwiaW5kZXgiLCJoZWFkaW5nSWQiLCJsaW5rIiwidGl0bGUiLCJnZXRIZWFkaW5nVGl0bGUiLCJhbmNob3IiLCJzaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiY291bnQiLCJzdWJIZWFkaW5nSWQiLCJzaG9ydFRpdGxlIiwibGlzdEl0ZW0iLCJzcGFuIiwiZ2V0Q2hldnJvblNWRyIsImdldENpcmNsZVNWRyIsImFwcGVuZCIsInBhcmVudExpbmsiLCJjaGlsZExpc3QiLCJjaGlsZEl0ZW0iLCJjaGlsZExpbmsiLCJjcmVhdGVCYWNrVG9Ub3BMaW5rIiwiaW5zZXJ0QmVmb3JlIiwiRmlsdGVyIiwiY2hlY2tib3hlcyIsImRyb3Bkb3ducyIsImdyb3VwcyIsInN1Ym1pdCIsImNsZWFyVG9nZ2xlIiwic2V0VXAiLCJjaGVja2JveCIsInVwZGF0ZVJlc3VsdHMiLCJkcm9wZG93biIsImdyb3VwIiwibGVnZW5kIiwidG9nZ2xlR3JvdXBGaWVsZHNldCIsImNsZWFyRmlsdGVyIiwiaW5pdEZpbHRlcnMiLCJpbml0Q2xlYXJUb2dnbGVzIiwiaW5pdENvdW50ZXJzIiwiaXNHcm91cEZpbHRlckFjdGl2ZSIsInBhcmVudFNlbGVjdCIsInN1YlNlbGVjdCIsImNiIiwiY2hpbGRFbGVtZW50Q291bnQiLCJfdGhpczQiLCJ1cGRhdGVBY3RpdmVDb3VudCIsImNvdW50RWxlbSIsInNlbGVjdEVsZW1lbnRzIiwic2V0VXBkYXRlZEZsYWciLCJpc1VwZGF0ZWQiLCJmbGFnRWxlbWVudCIsInBhcmVudEdyb3VwIiwibm9kZU5hbWUiLCJ3cmFwcGVyIiwiY2hpbGRTZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiY2xlYXJDaGVja2JveGVzIiwiY2xlYXJTZWxlY3RFbGVtZW50cyIsInNlbGVjdCIsIkZpbHRlclRhZyIsInRhZyIsImljb24iLCJyZW1vdmVGaWx0ZXIiLCJncm91cFRhZ3MiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJvcHRpb24iLCJwYXJlbnRHcm91cFNlbGVjdCIsImZvcm1Hcm91cEVsZW0iLCJzdWJHcm91cFNlbGVjdCIsIkxpc3RpbmciLCJmb3JtRWxlbWVudCIsInRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyIsImhpc3RvcnkiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInNjcm9sbFRvUmVzdWx0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidXJsIiwiVVJMIiwibG9jYXRpb24iLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJsaXN0aW5nQ29udGFpbmVyIiwic2Nyb2xsSW50b1ZpZXciLCJsaXN0aW5nIiwiQ29va2llcyIsInVzZUNvb2tpZXMiLCJiYW5uZXIiLCJzaG93Q29va2llcyIsInJlbW92ZUNvb2tpZXMiLCJob3N0IiwiZ2V0SG9zdCIsImNvb2tpZVN0YXR1cyIsInNldENvb2tpZXMiLCJTdGF0dXMiLCJJbiIsIk91dCIsInRvZ2dsZVN0YXR1cyIsImNvb2tpZXMiLCJjb29raWUiLCJtYXRjaCIsIlJlZ0V4cCIsInN0YXR1cyIsInRvU3RyaW5nIiwic2hvd0Nvb2tpZSIsInJlbW92ZUNvb2tpZSIsImJhbm5lclNob3ciLCJiYW5uZXJIaWRlIiwiYW5hbHl0aWNzQWNjZXB0IiwidXNlQ29va2llIiwiYW5hbHl0aWNzRGVjbGluZSIsIm5vQ29va2llIiwicmVsb2FkIiwiZGlzcGxheUJsb2NrIiwiZGlzcGxheU5vbmUiLCJvdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN1Yk5hdiIsInBhcmVudExpc3QiLCJ0b2dnbGVNZW51IiwiaGFuZGxlU3RhdGUiLCJhY3RpdmVFbGVtcyIsImVsZW0iLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImNsYXNzTmFtZSIsImhhc0NsYXNzIiwiYXR0ciIsInN1Ym5hdiIsImNsb3NlTWVudSIsInVzZXJJbnB1dCIsIm9wZW5NZW51IiwiaXNOb3RNZW51IiwiaXNOb3RNZW51QnV0dG9uIiwiaXNNZW51Q2hpbGQiLCJvcGVuU3ViIiwiaXNOb3RTdWIiLCJpc1N1YkNoaWxkIiwiU3ViTmF2IiwiTWVkaWEiXSwic291cmNlUm9vdCI6IiJ9