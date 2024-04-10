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
              var _this4 = this;
              var allOpen = 0;
              this.expanders.forEach(function (expander) {
                if (!expander.hasAttribute('open')) {
                  _this4.closeExpander(expander);
                } else {
                  _this4.setOpenAttributes(expander);
                  allOpen++;
                }
              });
              !(allOpen === this.expanders.length) ? this.stateOpen = false : this.stateOpen = true;
              !this.stateOpen ? this.toggleLink.innerText = this.toggleLink.dataset.labelOpen : this.toggleLink.innerText = this.toggleLink.dataset.labelClose;
            }

            /**
             * Opens an expander element.
             * @param {HTMLElement} expander Expander element.
             */
          }, {
            key: "openExpander",
            value: function openExpander(expander) {
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
          }, {
            key: "setOpenAttributes",
            value: function setOpenAttributes(expander) {
              var summary = expander.querySelector('.nhsuk-details__summary');
              var text = expander.querySelector('.nhsuk-details__text');
              summary.setAttribute('aria-expanded', 'true');
              text.setAttribute('aria-hidden', 'false');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNmO0FBQ0c7QUFDWTtBQUNDO0FBQ25CO0FBQ3lCOztBQUVoRjtBQUNzRTtBQUNTOztBQUUvRTtBQUNBeEIsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2xEaUssK0VBQUksQ0FBQyxDQUFDO0VBQ05xQiwrRkFBVyxDQUFDLENBQUM7RUFDYnJNLDRHQUFpQixDQUFDLENBQUM7RUFDbkIrVCx5RkFBTyxDQUFDLENBQUM7RUFDVDlELDRGQUFNLENBQUMsQ0FBQztFQUNSb0Msa0dBQVMsQ0FBQyxDQUFDO0VBQ1hXLDZGQUFPLENBQUMsQ0FBQztFQUNUcUUsZ0ZBQUssQ0FBQyxDQUFDO0VBQ1BsVCxrRkFBTSxDQUFDLENBQUM7RUFDUmlULGtHQUFNLENBQUMsQ0FBQztFQUNSaFUseUZBQVcsQ0FBQyxDQUFDO0VBQ2IwRCwwRkFBVSxDQUFDLENBQUM7RUFDWmdILHVGQUFhLENBQUMsQ0FBQztFQUNmekUsbUdBQVMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L2Zvb3Rlci9oZWUtYW5jaG9ybGlua3Mtc3RpY2t5L2FuY2hvcmxpbmtzLXN0aWNreS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLWNhcmQtLXN1bW1hcnkvc3VtbWFyeS5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW1lZGlhL21lZGlhLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmF2bWFwL25hdm1hcC5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlci5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLXRhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFicy90YWJzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvYW5jaG9ybGlua3MuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2hlZS1hbmNob3JsaW5rcy90b2MuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZy5qcyIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9uaHN1ay1oZWUtY29va2llcy9jb29raWVzLmpzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL25oc3VrLWhlZS1oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYuanMiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hlZS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGVlLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9oZWUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2hlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgQW5jaG9yIGxpbmsgc3RpY2t5IHRvb2xiYXIgYXQgYm90dG9tIG9mIHZpZXdwb3J0LlxuICAgKi9cbiAgY2xhc3MgQW5jaG9yTGlua3NTdGlja3kge1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgdGhpcy50b2dnbGVCdG4gPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdidXR0b24uaGVlLWFuY2hvcmxpbmtzX19zdGlja3lfX2J0bicpO1xuICAgICAgdGhpcy5zdGlja3lBbmNob3JMaW5rcyA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtYW5jaG9ybGlua3MnKTtcbiAgICAgIHRoaXMuc2lkZWJhckFuY2hvckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX3JpZ2h0YmFyIC5oZWUtYW5jaG9ybGlua3MnKTtcbiAgICAgIHRoaXMuZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrLWZvb3RlcicpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnRvZ2dsZVN0aWNreVRvb2xiYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyBmb3IgVE9DIGJ1dHRvbiB0b2dnbGUsIFRPQyBsaW5rIG5hdmlnYXRpb24gYW5kXG4gICAgICogdGhlIHdpbmRvdyB2aWV3cG9ydCBzY3JvbGwgdG9nZ2xlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpKVxuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnICYmIGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyAvIGhpZGVzIHRoZSBzdGlja3kgVE9DIGFuY2hvciBsaW5rcyB3aGVuIFwiVGFibGUgb2YgQ29udGVudHNcIiBidXR0b25cbiAgICAgKiB0cmlnZ2VyZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgdG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc3RpY2t5Jyk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLnF1ZXJ5U2VsZWN0b3IoJ2E6Zmlyc3Qtb2YtdHlwZScpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgVE9DIGJvdHRvbSBcInRvb2xiYXJcIiB3aGVuIHRoZSBzaWRlYmFyIFRPQyBoZWFkaW5nIGlzXG4gICAgICogb3V0c2lkZSB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgdG9nZ2xlU3RpY2t5VG9vbGJhcigpIHtcbiAgICAgIGNvbnN0IHRvY0Jsb2NrVmlzaWJsZSA9IHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCh0aGlzLnNpZGViYXJBbmNob3JMaW5rcy5xdWVyeVNlbGVjdG9yKCdoMicpKTtcbiAgICAgIGNvbnN0IGZvb3RlclZpc2libGUgPSB0aGlzLmZvb3RlciAmJiB0aGlzLmlzRWxlbWVudEluVmlld3BvcnQodGhpcy5mb290ZXIpO1xuXG4gICAgICBpZiAoIXRvY0Jsb2NrVmlzaWJsZSAmJiAhZm9vdGVyVmlzaWJsZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYW4gZWxlbWVudCBpcyBpbnNpZGUgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0VsZW1lbnRJblZpZXdwb3J0KGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGJvdW5kaW5nID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IGVsZW1lbnRXaWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIHJldHVybiBib3VuZGluZy50b3AgPj0gLWVsZW1lbnRIZWlnaHRcbiAgICAgICAgJiYgYm91bmRpbmcubGVmdCA+PSAtZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICsgZWxlbWVudFdpZHRoXG4gICAgICAgICYmIGJvdW5kaW5nLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgZWxlbWVudEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWFuY2hvcmxpbmtzX19zdGlja3knKV0uZm9yRWFjaChhbmNob3JMaW5rcyA9PiBuZXcgQW5jaG9yTGlua3NTdGlja3koYW5jaG9yTGlua3MpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cbiAgY2xhc3MgU3VtbWFyeUNhcmQge1xuXG4gICAgY29uc3RydWN0b3Ioc3VtbWFyeUNhcmQpIHtcbiAgICAgIHRoaXMuc3VtbWFyeUNhcmQgPSBzdW1tYXJ5Q2FyZDtcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMuc3VtbWFyeUNhcmQucXVlcnlTZWxlY3RvcignLmhlZS1jYXJkLS1zdW1tYXJ5X190b2dnbGUnKTtcblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIGxpbmsuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBjbGljayBldmVudC5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZVN1bW1hcnkoKTtcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdW1tYXJ5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGFsbCBleHBhbmRlciBjb250ZW50IHZpc2liaWxpdHkgd2l0aGluIHRhYmxlIGNhcmQuXG4gICAgICovXG4gICAgdG9nZ2xlU3VtbWFyeSgpIHtcbiAgICAgIHRoaXMuc3VtbWFyeUNhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnZGVmYXVsdCcpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtY2FyZC0tc3VtbWFyeScpXS5mb3JFYWNoKHN1bW1hcnlDYXJkID0+IG5ldyBTdW1tYXJ5Q2FyZChzdW1tYXJ5Q2FyZCkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNZWRpYSB0cmFuc2NyaXB0XG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5oZWUtbWVkaWEtdHJhbnNjcmlwdCcgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgVHJhbnNjcmlwdCB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgICAgdGhpcy50b2dnbGVzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpXG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFpbmVyKVxuICAgICAgY29uc29sZS5sb2codGhpcy50b2dnbGVzKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy50b2dnbGVzKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlcy5mb3JFYWNoKHRvZ2dsZSA9PiB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGV0cmFuc2NyaXB0KGV2dCkpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZXRyYW5zY3JpcHQoKSB7XG4gICAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCgpKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWUtbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0NvbGxhcHNlZCgpIHtcbiAgICAgIGlmKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImhlZS1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKSl7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtbWVkaWFfX3RyYW5zY3JpcHQnKV0uZm9yRWFjaCh0cmFuc2NyaXB0ID0+IG5ldyBUcmFuc2NyaXB0KHRyYW5zY3JpcHQpKVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWFwXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1yZWdpb24nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5hdk1hcCB7XG4gICAgY29uc3RydWN0b3IobWFwLCBzdmcpIHtcbiAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICB0aGlzLnJlZ2lvbnMgPSBbLi4uc3ZnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXJlZ2lvbicpXTtcbiAgICAgIHRoaXMubGlzdCA9IFsuLi5tYXAucXVlcnlTZWxlY3RvckFsbCgnI3JlZ2lvbkxpc3QgbGkgYScpXTtcblxuICAgICAgdGhpcy5hZGRMaW5rc1RvTWFwKCk7XG4gICAgICB0aGlzLmNsZWFuU3R5bGUoKTtcbiAgICAgIHRoaXMubWFwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMubGlua0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY2xlYW5TdHlsZSgpe1xuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAgICAgLnN0MHtmaWxsOiMwMDVFQjg7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5zdDF7ZmlsbDojQUVCN0JEO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuaG92ZXIgKiB7c3Ryb2tlOiNmZmViM2I7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgICAgLmZvY3VzIC5zdDAge2ZpbGw6I2ZmZWIzYjtzdHJva2U6IzIxMmIzMjt9XG4gICAgICAgIC5mb2N1cyAqIHtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgYCkpXG4gICAgfVxuXG4gICAgYWRkTGlua3NUb01hcCgpe1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChyZWdpb24uaWQpXG4gICAgICAgIGNvbnN0IHRoaXNIcmVmID0gKHRoaXNDb3VudGVycGFydC5ocmVmKT8gdGhpc0NvdW50ZXJwYXJ0LmhyZWYgOiBcIi9cIlxuICAgICAgICBjb25zdCB0aGlzVGl0bGUgPSAodGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCk/IHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwgOiBcIlwiXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcmVnaW9uLmlubmVySFRNTDtcbiAgICAgICAgY29uc3Qgd3JhcExpbmsgPSBgPGEgeGxpbms6aHJlZj1cIiR7dGhpc0hyZWZ9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgPHRpdGxlPiR7dGhpc1RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgJHtjaGlsZHJlbn1cbiAgICAgICAgPC9hPmBcbiAgICAgICAgcmVnaW9uLmlubmVySFRNTCA9IHdyYXBMaW5rXG4gICAgICB9KVxuICAgIH1cblxuICAgIG1hcEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHRoaXMubWFwSW4oZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHRoaXMubWFwT3V0KGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0aGlzLm1hcENsaWNrKGV2ZW50KSkpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJmb2N1c1wiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJmb2N1c1wiKSkpXG4gICAgfVxuXG4gICAgbW92ZVRvVG9wKG9iaikge1xuICAgICAgb2JqLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqKTtcbiAgICB9XG5cbiAgICBtYXBJbih0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRoaXMubW92ZVRvVG9wKHRhcmdldClcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBPdXQodGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwQ2xpY2soZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHRoaXNNYXBDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJnXCIpLmlkKVxuICAgICAgaWYodGhpc01hcENvdW50ZXJwYXJ0KSB0aGlzTWFwQ291bnRlcnBhcnQuY2xpY2soKVxuICAgIH1cblxuICAgIG1hcENvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saXN0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG5cbiAgICBsaW5rRXZlbnQodGFyZ2V0LCBkaXJlY3Rpb24sIHR5cGUpIHtcbiAgICAgIGNvbnN0IHRoaXNJZCA9IHRhcmdldC5pZFxuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saW5rQ291bnRlcnBhcnQodGhpc0lkKVxuICAgICAgaWYoZGlyZWN0aW9uID09PSBcImluXCIpIHtcbiAgICAgICAgdGhpcy5tYXBJbih0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcE91dCh0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGlua0NvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5yZWdpb25zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLW1hcCcpXS5mb3JFYWNoKG1hcCA9PiB7XG4gICAgLy8gbmVlZCB0byB3YWl0IGZvciBTVkcgdG8gbG9hZFxuICAgIGNvbnN0IG9iaiA9IG1hcC5xdWVyeVNlbGVjdG9yKCdvYmplY3QnKVxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IHN2ZyA9IG9iai5nZXRTVkdEb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpXG4gICAgICBpZihzdmcpe1xuICAgICAgICBuZXcgTmF2TWFwKG1hcCwgc3ZnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBOZXdzbGV0dGVyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmV3c2xldHRlciB7XG4gICAgY29uc3RydWN0b3IobmV3c2xldHRlcikge1xuICAgICAgdGhpcy5uZXdzbGV0dGVyID0gbmV3c2xldHRlcjtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMgPSBuZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcmVxdWlyZWRdXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgd2luZG93LnJlY2FwdGNoYUNhbGxiYWNrID0gdGhpcy5yZWNhcHRjaGFDYWxsYmFja1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgdGhpcy5hZGRFdmVudHMoKSAgICAgIDtcbiAgICB9XG4gICAgXG4gICAgYWRkRXZlbnRzKCkge1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGMgPT4gdGhpcy52YWxpZGF0ZShjLnRhcmdldCkpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0YXJnZXQpIHtcbiAgICAgIHZhciB0YXJnZXRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JzLVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIHZhciB0YXJnZXRTdW1tYXJ5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnktXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgaWYgKHRhcmdldC5uYW1lID09IFwiZmlyc3RuYW1lXCIgfHwgdGFyZ2V0Lm5hbWUgPT0gXCJsYXN0bmFtZVwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJlbWFpbFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJjb25zZW50XCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU3VtbWFyeSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN1bW1hcnkoKSB7XG4gICAgICB2YXIgZXJyb3JTdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5XCIpO1xuICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApXG4gICAgICB7ICAgICAgICBcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgaWYgKCFyZS50ZXN0KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIHNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCh0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgaXNFbXB0eShzdHIpIHtcbiAgICAgIHJldHVybiAhc3RyLnRyaW0oKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1tZXNzYWdlJyk7XG4gICAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JDbGFzc2VzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgZXJyb3JDbGFzc2VzLmZvckVhY2goZXJyb3JjbGFzcyA9PiB7XG4gICAgICAgIGVycm9yY2xhc3MuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnkgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLXN1bW1hcnknKTtcbiAgICAgIGVycm9yU3VtbWFyeS5mb3JFYWNoKGVycm9yc3VtbWFyeSA9PiB7XG4gICAgICAgIGVycm9yc3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeUl0ZW1zID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1zdW1tYXJ5LWl0ZW0nKTtcbiAgICAgIGVycm9yU3VtbWFyeUl0ZW1zLmZvckVhY2goc3VtbWFyeWl0ZW0gPT4ge1xuICAgICAgICBzdW1tYXJ5aXRlbS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJztcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVjYXB0Y2hhQ2FsbGJhY2soKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI25ld3NsZXR0ZXItZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScpXS5mb3JFYWNoKChuZXdzbGV0dGVyKSA9PiBuZXcgTmV3c2xldHRlcihuZXdzbGV0dGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogUmVzcG9uc2libGUgZm9yIHByb3ZpZGluZyB0aGUgXCJleHBhbmQgYWxsXCIgdG9nZ2xlIGZ1bmN0aW9uYWxpdHkgZm9yIHRhYmxlXG4gICAqIGNhcmRzLlxuICAgKi9cbiAgY2xhc3MgVGFibGVDYXJkIHtcblxuICAgIGNvbnN0cnVjdG9yKHRhYmxlQ2FyZCkge1xuICAgICAgdGhpcy50YWJsZUNhcmQgPSB0YWJsZUNhcmQ7XG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLnRhYmxlQ2FyZC5xdWVyeVNlbGVjdG9yKCcuaGVlLXRhYmxlLWV4cGFuZGVyX190b2dnbGUgYScpO1xuICAgICAgdGhpcy5leHBhbmRlcnMgPSB0aGlzLnRhYmxlQ2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXhwYW5kZXInKTtcbiAgICAgIHRoaXMuc3RhdGVPcGVuID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLnRvZ2dsZUxpbmsgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbjtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLmluaXRFeHBhbmRlck9ic2VydmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgbGluayBhbmQgc3VtbWFyeSBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGNsaWNrIGV2ZW50LlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZXJzKCk7XG4gICAgICB9KVxuXG4gICAgICAvLyBIYW5kbGVzIHRvZ2dsZSBsaW5rIGVudGVyIGFuZCBzcGFjZWJhciBrZXkgcHJlc3MuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlRXhwYW5kZXJzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2UgdXNlIG9ic2VydmVycyB0byByZWFjdCB0byBjbGljayBldmVudHMgb24gaW5kaXZpZHVhbCBleHBhbmRlcnMsIGFzIHRoaXNcbiAgICAgKiBldmVudCBmdW5jdGlvbmFsaXR5IGlzIGhhbmRsZWQgYnkgdGhlIG5oc3VrLWRldGFpbHMgY29tcG9uZW50J3MgamF2YXNjcmlwdC5cbiAgICAgKi9cbiAgICBpbml0RXhwYW5kZXJPYnNlcnZlcigpIHtcbiAgICAgIC8vIENvbmZpZ3VyZSBvYnNlcnZlciB0byByZWFjdCB0byBjaGFuZ2VzIGluIGFuIGV4cGFuZGVyJ3MgXCJvcGVuXCIgYXR0cmlidXRlLlxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zTGlzdCkgPT4ge1xuICAgICAgICBtdXRhdGlvbnNMaXN0LmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnb3BlbicpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9nZ2xlU3RhdGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZXhwYW5kZXIsIHthdHRyaWJ1dGVzOiB0cnVlfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYWxsIGV4cGFuZGVyIGNvbnRlbnQgdmlzaWJpbGl0eSB3aXRoaW4gdGFibGUgY2FyZC5cbiAgICAgKi9cbiAgICB0b2dnbGVFeHBhbmRlcnMoKSB7XG4gICAgICAvLyBPcGVuIC8gY2xvc2UgZWFjaCBleHBhbmRlciBkZXBlbmRpbmcgb24gY3VycmVudCBzdGF0ZS5cbiAgICAgIHRoaXMuZXhwYW5kZXJzLmZvckVhY2goIChleHBhbmRlcikgPT4ge1xuICAgICAgICAhdGhpcy5zdGF0ZU9wZW4gPyB0aGlzLm9wZW5FeHBhbmRlcihleHBhbmRlcikgOiB0aGlzLmNsb3NlRXhwYW5kZXIoZXhwYW5kZXIpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRvZ2dsZSBzdGF0ZSBmbGFnLlxuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSAhdGhpcy5zdGF0ZU9wZW47XG5cbiAgICAgIC8vIFRvZ2dsZSBidXR0b24gdGV4dC5cbiAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW4gOiB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxDbG9zZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqICBEZXRlcm1pbmVzIHdoZXRoZXIgYWxsIGV4cGFuZGVycyBoYXZlIGJlZW4gb3BlbmVkIG9yIGNsb3NlZCBhbmQgdXBkYXRlc1xuICAgICAqICB0aGUgc3RhdGUgZmxhZyBhbmQgdG9nZ2xlIGxpbmsgdGV4dCBhY2NvcmRpbmdseS5cbiAgICAgKlxuICAgICAqICBGdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiBNdXRhdGlvbk9ic2VydmVyIGRldGVjdHMgYSBjaGFuZ2UgaW4gZXhwYW5kZXJcbiAgICAgKiAgXCJvcGVuXCIgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHVwZGF0ZVRvZ2dsZVN0YXRlKCkge1xuICAgICAgbGV0IGFsbE9wZW4gPSAwO1xuICAgICAgXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgaWYgKCFleHBhbmRlci5oYXNBdHRyaWJ1dGUoJ29wZW4nKSl7XG4gICAgICAgICAgdGhpcy5jbG9zZUV4cGFuZGVyKGV4cGFuZGVyKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdGhpcy5zZXRPcGVuQXR0cmlidXRlcyhleHBhbmRlcik7XG4gICAgICAgICAgYWxsT3BlbisrO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgIShhbGxPcGVuID09PSB0aGlzLmV4cGFuZGVycy5sZW5ndGgpID8gdGhpcy5zdGF0ZU9wZW4gPSBmYWxzZSA6IHRoaXMuc3RhdGVPcGVuID0gdHJ1ZTtcbiAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbE9wZW4gOiB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxDbG9zZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW5zIGFuIGV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZXhwYW5kZXIgRXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKi9cbiAgICBvcGVuRXhwYW5kZXIoZXhwYW5kZXIpIHtcbiAgICAgIGV4cGFuZGVyLnNldEF0dHJpYnV0ZSgnb3BlbicsICdvcGVuJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIGFuIGV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZXhwYW5kZXIgRXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKi9cbiAgICBjbG9zZUV4cGFuZGVyKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgIGV4cGFuZGVyLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICAgIH1cblxuICAgIHNldE9wZW5BdHRyaWJ1dGVzKGV4cGFuZGVyKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3N1bW1hcnknKTtcbiAgICAgIGNvbnN0IHRleHQgPSBleHBhbmRlci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZGV0YWlsc19fdGV4dCcpO1xuXG4gICAgICBzdW1tYXJ5LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLXRhYmxlLWV4cGFuZGVyJyldLmZvckVhY2godGFibGVDYXJkID0+IG5ldyBUYWJsZUNhcmQodGFibGVDYXJkKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIC8qKlxyXG4gICogVGFic1xyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10YWJzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xyXG4gICovXHJcbiAgY2xhc3MgVGFicyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWJjb21wb25lbnQsIGkpIHtcclxuICAgICAgdGhpcy50YWJjb21wb25lbnQgPSB0YWJjb21wb25lbnRcclxuICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKVxyXG4gICAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJ0YWJsaXN0XCJdJylcclxuICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjID0+IHRoaXMuY2hhbmdlVGFicyhjKSlcclxuICAgICAgfSlcclxuICAgICAgbGV0IHRhYkZvY3VzID0gMFxyXG4gICAgICB0YWJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xyXG4gICAgICAgIC8vIE1vdmUgcmlnaHRcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSlcclxuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzKytcclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGVuZCwgZ28gdG8gdGhlIHN0YXJ0XHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA+PSB0YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1vdmUgbGVmdFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzLS1cclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHN0YXJ0LCBtb3ZlIHRvIHRoZSBlbmRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gdGFicy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApXHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWJzKGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2coZ3JhbmRwYXJlbnQpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylbMF07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxyXG4gICAgICBjb25zdCBpc19tb2JpbGUgPSBncmFuZHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXRhYnNfX21vYmlsZScpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGlzX21vYmlsZSlcclxuXHJcbiAgICAgIC8vIENvbXBhcmUgc2VsZWN0ZWQgYW5kIHRhcmdldCwgYW5kIGlmIG9uIG1vYmlsZVxyXG4gICAgICAvLyBDbG9zZSB0aGUgdGFiIGlmIGFscmVhZHkgb3BlblxyXG4gICAgICBpZih0YXJnZXQgPT0gc2VsZWN0ZWQgJiYgaXNfbW9iaWxlKSB7XHJcbiAgICAgICAgLy8gVW5zZWxlY3QgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgc2VsZWN0ZWQgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhpcyB0YWIgYXMgc2VsZWN0ZWRcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKHRhcmdldClcclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFiIHBhbmVsc1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNob3cgdGhlIHNlbGVjdGVkIHBhbmVsXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0ZWQoZ3JhbmRwYXJlbnQucGFyZW50Tm9kZSwgdGFyZ2V0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpXHJcbiAgICAgICAgLmZvckVhY2godCA9PiB0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgZmFsc2UpKTtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylcclxuICAgICAgICAuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB0cnVlKVxyXG4gICAgICBlbGUuY2xhc3NMaXN0LmFkZChcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBoaWRlVGFicyhlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFicGFuZWxcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHAgPT4gcC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NlbGVjdGVkKGVsZSwgdGFyZ2V0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZS5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKSlcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApXHJcbiAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzJyldLmZvckVhY2goKHRhYnMsIGkpID0+IG5ldyBUYWJzKHRhYnMsIGkpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogQW5jaG9yTGlua3NcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWFuY2hvci1saW5rcycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgQW5jaG9yTGlua3Mge1xuICAgIGNvbnN0cnVjdG9yKGFuY2hvckxpbmtzKSB7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzID0gYW5jaG9yTGlua3M7XG5cbiAgICAgIGlmICh0aGlzLmFuY2hvckxpbmtzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMuZm91bmRIZWFkaW5ncyA9IHRoaXMuZmluZEhlYWRpbmdzKGFuY2hvckxpbmtzLmRhdGFzZXQuaGVhZGluZ3MpO1xuXG4gICAgICBpZiAodGhpcy5mb3VuZEhlYWRpbmdzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFkZEFuY2hvcnNUb1BhZ2UoKTtcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSGVhZGluZ3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBmb3VuZEhlYWRpbmdzID0gW11cbiAgICAgIGlmIChoZWFkaW5ncykge1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIENTUyBzZWxlY3RvcnMgZm9yIG9ubHkgZmlyc3QgbGV2ZWwgaGVhZGluZ3MgaW5zaWRlIHJpY2gtdGV4dFxuICAgICAgICAvLyBhcmVhcyBhbmQgb3V0c2lkZSBvZiBjb21wb25lbnRzLlxuICAgICAgICBjb25zdCBoZWFkaW5nVHlwZXMgPSBoZWFkaW5ncy5zcGxpdCgnLCcpO1xuICAgICAgICBsZXQgc2VsZWN0b3JzID0gaGVhZGluZ1R5cGVzLm1hcCh0eXBlID0+IHtcbiAgICAgICAgICByZXR1cm4gJy5wYWdlX19jb250ZW50ID4gJyArIHR5cGU7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMuam9pbignLCAnKTtcblxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2VfX2NvbnRlbnQnKTtcbiAgICAgICAgY29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycykuZm9yRWFjaCgoaGVhZGluZywgaSkgPT4ge1xuICAgICAgICAgIGlmICghaGVhZGluZy5pZCkge1xuICAgICAgICAgICAgaGVhZGluZy5pZCA9IGhlYWRpbmcuaW5uZXJUZXh0LnJlcGxhY2UoLyAuKi8sJycpLnJlcGxhY2UoL1tcXG5cXHJdL2csJycpLnJlcGxhY2UoL1xccy9nLCcnKS50b0xvd2VyQ2FzZSgpK2k7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvdW5kSGVhZGluZ3MucHVzaChoZWFkaW5nKTtcbiAgICAgICAgfSlcbiAgICAgIH0gICAgICBcbiAgICAgIHJldHVybiBmb3VuZEhlYWRpbmdzO1xuICAgIH1cblxuICAgIGFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihoZWFkaW5nLCBzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKV0uc29tZShlbCA9PlxuICAgICAgICBlbCAhPT0gaGVhZGluZyAmJiBlbC5jb250YWlucyhoZWFkaW5nKVxuICAgICAgKVxuICAgIH1cblxuICAgIGFkZEFuY2hvcnNUb1BhZ2UoKSB7XG4gICAgICBsZXQgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzLmZvckVhY2goZm91bmRIZWFkaW5nID0+IHtcbiAgICAgICAgaWYgKCFmb3VuZEhlYWRpbmcuZGF0YXNldC5hbmNob3JsaW5rc2lnbm9yZVxuICAgICAgICAgICYmICFmb3VuZEhlYWRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay11LXZpc3VhbGx5LWhpZGRlbicpXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLWNhcmRfX2hlYWRpbmcnKVxuICAgICAgICAgICYmICF0aGlzLmFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbihmb3VuZEhlYWRpbmcsICcubmhzdWstZ3JpZC1jb2x1bW4tb25lLXRoaXJkJykpXG4gICAgICAgIHtcbiAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGEuaHJlZiA9ICcjJytmb3VuZEhlYWRpbmcuaWQ7XG4gICAgICAgICAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSBmb3VuZEhlYWRpbmcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5oc3VrLXUtdmlzdWFsbHktaGlkZGVuXCIpO1xuICAgICAgICAgIHdoaWxlIChoaWRkZW5FbGVtZW50cy5sZW5ndGggPiAwKSBoaWRkZW5FbGVtZW50c1swXS5yZW1vdmUoKTtcbiAgICAgICAgICBhLmlubmVyVGV4dCA9IGZvdW5kSGVhZGluZy5pbm5lclRleHQ7IC8vIHN0cmlwIHRhZ3NcbiAgICAgICAgICBhLmlubmVySFRNTCA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzxiclxccypbXFwvXT8+L2dpLCBcIiBcIik7IC8vIHN0cmlwIDxicj5cbiAgICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmNob3JMaW5rcy5hcHBlbmRDaGlsZCh1bCk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWFuY2hvci1saW5rcycpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rcyhhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogUmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcgdGFibGUgb2YgY29udGVudHMgbGlua3MuXG4gICovXG4gIGNsYXNzIFRhYmxlQ29udGVudHMge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzID0gdGFibGVDb250ZW50cztcblxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XG4gICAgICB0aGlzLmhlYWRpbmdTZWxlY3RvciA9ICdoMi50b2NfaDInO1xuICAgICAgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IgPSAnaDMudG9jX2gzJztcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xuXG4gICAgICAvLyBBbmNob3IgbGlua3MgbWFjcm8gc2V0cyB0aGlzIGRhdGEgYXR0cmlidXRlIHdoZW4gVE9DIGlzIGZsYWdnZWQgYXMgdHJ1ZS5cbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBidWlsZCBUT0MgbGlua3MgaWYgSDIgYW5jaG9ycyBmb3VuZCBvbiBwYWdlLlxuICAgICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5oZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnRhYmxlQ29udGVudHMuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBCdWlsZCBsaW5rIHN0cnVjdHVyZSBmcm9tIERPTSBhbmQgYXBwZW5kIGdlbmVyYXRlZCBtYXJrdXAgdG8gVE9DXG4gICAgICAvLyBjb21wb25lbnQuXG4gICAgICBjb25zdCBsaW5rcyA9IHRoaXMuY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpO1xuICAgICAgdGhpcy5zZXRUb2NMaXN0TWFya3VwKGxpbmtzKTtcblxuICAgICAgLy8gQnVpbGQgYmFjayB0byB0b3AgbGlua3MgYW5kIGFwcGVuZCB0byBlYWNoIFRPQyBoZWFkaW5nIHdpdGhpbiBwYWdlXG4gICAgICAvLyBjb250ZW50LiBXZSBza2lwIHRoZSBmaXJzdCBoZWFkaW5nIG9uIHRoZSBwYWdlLlxuICAgICAgaGVhZGluZ3MgPSBbXS5zbGljZS5jYWxsKGhlYWRpbmdzLCAxKTtcbiAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpO1xuICAgICAgY29uc3Qgc3ViSGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGFpbmVyU2VsZWN0b3IgKyAnICcgKyB0aGlzLnN1YkhlYWRpbmdTZWxlY3Rvcik7XG4gICAgICBpZiAoc3ViSGVhZGluZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNldEJhY2tUb1RvcExpbmtzKHN1YkhlYWRpbmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYXJyYXkgb2YgaGVhZGluZyBsaW5rIGF0dHJpYnV0ZXMgYW5kIHRoZWlyIGNoaWxkcmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlTGlzdH0gICAgICBoZWFkaW5nc1xuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdFtdfVxuICAgICAqL1xuICAgIGNyZWF0ZVRvY0xpbmtzKGhlYWRpbmdzKSB7XG4gICAgICBsZXQgbGlua3MgPSBbXTtcblxuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGluZ0lkID0gdGhpcy5oZWFkaW5nUHJlZml4ICsgJy0nICsgaW5kZXg7XG5cbiAgICAgICAgLy8gU2V0IHVuaXF1ZSBpZCBmb3IgY3VycmVudCBoZWFkaW5nIEgyIGVsZW1lbnQuXG4gICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGhlYWRpbmdJZClcblxuICAgICAgICBsZXQgbGluayA9IHtcbiAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoaGVhZGluZyksXG4gICAgICAgICAgYW5jaG9yOiBoZWFkaW5nSWQsXG4gICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNpYmxpbmcgPSBoZWFkaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICAvLyBUcmF2ZXJzZSBET00gZm9yIEgzIGVsZW1lbnRzIGFmdGVyIGN1cnJlbnQgSDIgaGVhZGluZyBhbmQgYXBwZW5kIHRvXG4gICAgICAgIC8vIGNoaWxkcmVuIGxpbmtzIGFycmF5LlxuICAgICAgICB3aGlsZSAoc2libGluZyAmJiAhc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ3RvY19oMicpKSB7XG4gICAgICAgICAgaWYgKHNpYmxpbmcudGFnTmFtZSA9PT0gJ0gzJyAmJiBzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gzJykpIHtcblxuICAgICAgICAgICAgLy8gU2V0IHVuaXF1ZSBpZCBmb3IgY3VycmVudCBoZWFkaW5nIEgzIGVsZW1lbnQuXG4gICAgICAgICAgICBjb25zdCBzdWJIZWFkaW5nSWQgPSBoZWFkaW5nSWQgKyAnLScgKyBjb3VudDtcbiAgICAgICAgICAgIHNpYmxpbmcuc2V0QXR0cmlidXRlKCdpZCcsIHN1YkhlYWRpbmdJZClcblxuICAgICAgICAgICAgbGluay5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0SGVhZGluZ1RpdGxlKHNpYmxpbmcpLFxuICAgICAgICAgICAgICBhbmNob3I6IHN1YkhlYWRpbmdJZCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBsaW5rcy5wdXNoKGxpbmspO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBsaW5rcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGVpdGhlciB0aGUgc2hvcnQgb3IgbG9uZyB0aXRsZSBvZiB0aGUgaGVhZGluZyBiYXNlZCBvbiBkYXRhIGF0dHIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gIGhlYWRpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSB7XG4gICAgICBsZXQgdGl0bGU7XG5cbiAgICAgIGlmIChoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG9ydC10aXRsZScpKSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5kYXRhc2V0LnNob3J0VGl0bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZSA9IGhlYWRpbmcuaW5uZXJUZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBUT0MgbWFya3VwIGFuZCBhcHBlbmRzIHRvIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXRUb2NMaXN0TWFya3VwKGxpbmtzKSB7XG4gICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2hhcy1jaGlsZHJlbicpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWUtYW5jaG9ybGlua3NfX3dyYXBwZXInKVxuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoZXZyb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2hldnJvblNWRygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaXJjbGVTVkcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc3Bhbik7XG5cbiAgICAgICAgbGV0IHBhcmVudExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHBhcmVudExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgbGluay5hbmNob3IpO1xuICAgICAgICBwYXJlbnRMaW5rLmlubmVyVGV4dCA9IGxpbmsudGl0bGU7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChwYXJlbnRMaW5rKTtcblxuICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY29udGFpbmVyKTtcblxuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGNoaWxkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgbGluay5jaGlsZHJlbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hpbGRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICAgICAgbGV0IGNoaWxkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBpdGVtLmFuY2hvcik7XG4gICAgICAgICAgICBjaGlsZExpbmsuaW5uZXJUZXh0ID0gaXRlbS50aXRsZTtcblxuICAgICAgICAgICAgY2hpbGRJdGVtLmFwcGVuZChjaGlsZExpbmspO1xuICAgICAgICAgICAgY2hpbGRMaXN0LmFwcGVuZChjaGlsZEl0ZW0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNoaWxkTGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LmFwcGVuZChsaXN0SXRlbSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzLmFwcGVuZChsaXN0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgYmFjayB0byB0b3AgbGluayBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICAgKi9cbiAgICBjcmVhdGVCYWNrVG9Ub3BMaW5rKCkge1xuICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1iYWNrLXRvLXRvcCcpO1xuXG4gICAgICBsZXQgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjbWFpbmNvbnRlbnQnKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0JhY2sgdG8gdG9wJyk7XG4gICAgICBhbmNob3IuaW5uZXJUZXh0ID0gJ0JhY2sgdG8gdG9wJztcblxuICAgICAgY29udGFpbmVyLmFwcGVuZChhbmNob3IpO1xuXG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdHMgYmFjayB0byB0b3AgbGlua3MgYWJvdmUgVE9DIGhlYWRpbmdzIHdpdGhpbiBjb250ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOb2RlTGlzdH0gICAgICBoZWFkaW5nc1xuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldEJhY2tUb1RvcExpbmtzKGhlYWRpbmdzKSB7XG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBBdm9pZHMgZHVwbGljYXRlIGJhY2sgdG8gdG9wIGxpbmtzIHdoZW4gc3RpY2t5IGlzIHByZXNlbnQuXG4gICAgICAgIGlmICghaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtaGFzLXRvcC1saW5rJykpIHtcbiAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5jcmVhdGVCYWNrVG9Ub3BMaW5rKCk7XG4gICAgICAgICAgaGVhZGluZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rLCBoZWFkaW5nKTtcbiAgICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaGV2cm9uIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENoZXZyb25TVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDggMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8cGF0aCBkPVwiTTguMDAwMTkgNi45OTk5NEM4LjAwMDk1IDcuMTMxNTUgNy45NzU3MiA3LjI2MjAxIDcuOTI1OTYgNy4zODM4NUM3Ljg3NjE5IDcuNTA1NjkgNy44MDI4NyA3LjYxNjUgNy43MTAxOSA3LjcwOTk0TDIuNzEwMTkgMTIuNzA5OUMyLjYxNjk1IDEyLjgwMzIgMi41MDYyNiAxMi44NzcxIDIuMzg0NDMgMTIuOTI3NkMyLjI2MjYxIDEyLjk3ODEgMi4xMzIwNCAxMy4wMDQgMi4wMDAxOSAxMy4wMDRDMS44NjgzMyAxMy4wMDQgMS43Mzc3NiAxMi45NzgxIDEuNjE1OTQgMTIuOTI3NkMxLjQ5NDExIDEyLjg3NzEgMS4zODM0MiAxMi44MDMyIDEuMjkwMTggMTIuNzA5OUMxLjE5Njk1IDEyLjYxNjcgMS4xMjI5OSAxMi41MDYgMS4wNzI1MyAxMi4zODQyQzEuMDIyMDYgMTIuMjYyNCAwLjk5NjA5NCAxMi4xMzE4IDAuOTk2MDk0IDExLjk5OTlDMC45OTYwOTQgMTEuODY4MSAxLjAyMjA2IDExLjczNzUgMS4wNzI1MyAxMS42MTU3QzEuMTIyOTkgMTEuNDkzOSAxLjE5Njk1IDExLjM4MzIgMS4yOTAxOCAxMS4yODk5TDUuNTkwMTkgNi45OTk5NEwxLjI5MDE4IDIuNzA5OTRDMS4xMDE4OCAyLjUyMTY0IDAuOTk2MDk0IDIuMjY2MjQgMC45OTYwOTQgMS45OTk5NEMwLjk5NjA5NCAxLjczMzY0IDEuMTAxODggMS40NzgyNSAxLjI5MDE4IDEuMjg5OTRDMS40Nzg0OSAxLjEwMTY0IDEuNzMzODggMC45OTU4NSAyLjAwMDE5IDAuOTk1ODVDMi4yNjY0OSAwLjk5NTg1IDIuNTIxODggMS4xMDE2NCAyLjcxMDE5IDEuMjg5OTRMNy43MTAxOSA2LjI4OTk0QzcuODAyODcgNi4zODMzOCA3Ljg3NjE5IDYuNDk0MiA3LjkyNTk2IDYuNjE2MDNDNy45NzU3MiA2LjczNzg3IDguMDAwOTUgNi44NjgzMyA4LjAwMDE5IDYuOTk5OTRaXCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2lyY2xlIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENpcmNsZVNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIzXCIgdmlld0JveD1cIjAgMCAzIDNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3MnKV0uZm9yRWFjaCh0YWJsZUNvbnRlbnRzID0+IG5ldyBUYWJsZUNvbnRlbnRzKHRhYmxlQ29udGVudHMpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBGaWx0ZXJcbiAgICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1maWx0ZXInIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICAqL1xuICBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICAgIHRoaXMuY2hlY2tib3hlcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcbiAgICAgIHRoaXMuZHJvcGRvd25zID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXNlbGVjdCcpXTtcbiAgICAgIHRoaXMuZ3JvdXBzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAnKV07XG4gICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXJfX3N1Ym1pdCcpO1xuICAgICAgdGhpcy5jbGVhclRvZ2dsZSA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXJfX2dyb3VwX19jbGVhcicpXTtcblxuICAgICAgdGhpcy5zZXRVcCgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGV2dCkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZHJvcGRvd25zLmZvckVhY2goZHJvcGRvd24gPT4ge1xuICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGV2dCkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgICBjb25zdCBsZWdlbmQgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmllbGRzZXRfX2xlZ2VuZCcpO1xuICAgICAgICBpZiAobGVnZW5kKSB7XG4gICAgICAgICAgbGVnZW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xlR3JvdXBGaWVsZHNldChldnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy5jbGVhckZpbHRlcihldnQpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFVwKCkge1xuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLS1qcycpO1xuXG4gICAgICB0aGlzLmluaXRGaWx0ZXJzKCk7XG4gICAgICB0aGlzLmluaXRDbGVhclRvZ2dsZXMoKTtcbiAgICAgIHRoaXMuaW5pdENvdW50ZXJzKCk7XG5cbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgaWYgKHRoaXMuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEZpbHRlcnMoKSB7XG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcblxuICAgICAgICBpZiAoIXRoaXMuaXNHcm91cEZpbHRlckFjdGl2ZShncm91cCkpIHtcbiAgICAgICAgICAvLyBDb2xsYXBzZSBncm91cCBpZiBmaWx0ZXJzIG5vdCBhY3RpdmUuXG4gICAgICAgICAgZ3JvdXAuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyX19ncm91cC0tY2xvc2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNhYmxlIHN1Yi1ncm91cCBzZWxlY3QgaWYgbm8gb3B0aW9uIGluIHBhcmVudCBzZWxlY3RlZC5cbiAgICAgICAgaWYgKGdyb3VwLmNsYXNzTGlzdC5jb250YWlucygnaGFzLXN1Ymdyb3VwJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnRTZWxlY3QgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZm9ybS1ncm91cC5wYXJlbnQtZ3JvdXAgc2VsZWN0Jyk7XG4gICAgICAgICAgY29uc3Qgc3ViU2VsZWN0ID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWZvcm0tZ3JvdXAuc3ViLWdyb3VwIHNlbGVjdCcpO1xuXG4gICAgICAgICAgaWYgKHN1YlNlbGVjdCAhPT0gbnVsbCAmJiBwYXJlbnRTZWxlY3QgIT09IG51bGwgJiYgcGFyZW50U2VsZWN0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgc3ViU2VsZWN0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbmFibGUgc2Nyb2xsYWJsZSBjaGVja2JveCBncm91cHMgaWYgbW9yZSB0aGFuIGZvdXIgb3B0aW9ucy5cbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzJyk7XG4gICAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgICAgaWYgKGNiLmNoaWxkRWxlbWVudENvdW50ID4gNCkge1xuICAgICAgICAgICAgY2IuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsYWJsZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0Q2xlYXJUb2dnbGVzKCkge1xuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBncm91cC5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyX19ncm91cF9fY2xlYXInKTtcbiAgICAgICAgaWYgKHRoaXMuaXNHcm91cEZpbHRlckFjdGl2ZShncm91cCkpIHtcbiAgICAgICAgICB0b2dnbGVMaW5rLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdENvdW50ZXJzKCkge1xuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZlQ291bnQoZ3JvdXApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQWN0aXZlQ291bnQoZ3JvdXApIHtcbiAgICAgIGNvbnN0IGNvdW50RWxlbSA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1oaW50Jyk7XG5cbiAgICAgIGlmIChjb3VudEVsZW0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgIGNvdW50RWxlbS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY291bnRFbGVtLmlubmVyVGV4dCA9IGAke2NvdW50fSBzZWxlY3RlZGBcbiAgICAgIGNvdW50RWxlbS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgaXNHcm91cEZpbHRlckFjdGl2ZShncm91cCkge1xuICAgICAgLy8gQ2hlY2sgaWYgY2hlY2tib3hlcyBhcmUgYWN0aXZlLlxuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChjaGVja2JveGVzW2ldLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiBzZWxlY3RzIGFyZSBhY3RpdmUuXG4gICAgICBjb25zdCBzZWxlY3RFbGVtZW50cyA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1zZWxlY3QnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNlbGVjdEVsZW1lbnRzW2ldLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0b2dnbGVHcm91cEZpZWxkc2V0KGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldnQudGFyZ2V0LmNsb3Nlc3QoJy5uaHN1ay1maWx0ZXJfX2dyb3VwJykuY2xhc3NMaXN0LnRvZ2dsZSgnbmhzdWstZmlsdGVyX19ncm91cC0tY2xvc2VkJyk7XG4gICAgfVxuXG4gICAgc2V0VXBkYXRlZEZsYWcoaXNVcGRhdGVkKSB7XG4gICAgICAvLyBTZXQgc29ydCBjb250YWluZXIgaGlkZGVuIHNjcm9sbCBmbGFnIHZhbHVlLiB0byBlbnN1cmUgdmlld3BvcnQgcmVzZXRzXG4gICAgICAvLyBhZnRlciBmb3JtIHN1Ym1pdC5cbiAgICAgIGxldCBmbGFnRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtdXBkYXRlLWZsYWc9XCJmaWx0ZXJcIl0nKTtcbiAgICAgIGlmIChmbGFnRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBmbGFnRWxlbWVudC52YWx1ZSA9IGlzVXBkYXRlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGV2dCkge1xuICAgICAgLy8gU2V0IHNvcnQgY29udGFpbmVyIGhpZGRlbiBzY3JvbGwgZmxhZyB2YWx1ZSx0byBlbnN1cmUgdmlld3BvcnQgc2Nyb2xsc1xuICAgICAgLy8gZG93biB0byByZXN1bHRzIGxpc3RpbmdzIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgdGhpcy5zZXRVcGRhdGVkRmxhZyh0cnVlKTtcblxuICAgICAgY29uc3QgcGFyZW50R3JvdXAgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5uaHN1ay1maWx0ZXJfX2dyb3VwJyk7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUNvdW50KHBhcmVudEdyb3VwKTtcblxuICAgICAgLy8gQ2hlY2sgd2hldGhlciBzZWxlY3QgZHJvcGRvd24gaGFzIGNoaWxkIGZpbHRlciBhbmQgcmVzZXQgdGhhdCB0b28uXG4gICAgICBpZiAocGFyZW50R3JvdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdoYXMtc3ViZ3JvdXAnKSAmJiBldnQudGFyZ2V0Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcucGFyZW50LWdyb3VwJyk7XG4gICAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgICAgY29uc3QgY2hpbGRTZWxlY3QgPSB3cmFwcGVyLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuc3ViLWdyb3VwIHNlbGVjdCcpO1xuICAgICAgICAgIGNoaWxkU2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIGNsZWFyRmlsdGVyKGV2dCkge1xuICAgICAgdGhpcy5jbGVhckNoZWNrYm94ZXMoZXZ0KTtcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3RFbGVtZW50cyhldnQpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KTtcbiAgICB9XG5cbiAgICBjbGVhckNoZWNrYm94ZXMoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGV2dC50YXJnZXQ7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gdG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpO1xuXG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyU2VsZWN0RWxlbWVudHMoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGV2dC50YXJnZXQ7XG4gICAgICBjb25zdCBzZWxlY3RFbGVtZW50cyA9IHRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstc2VsZWN0Jyk7XG5cbiAgICAgIHNlbGVjdEVsZW1lbnRzLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcicpXS5mb3JFYWNoKGZpbHRlciA9PiBuZXcgRmlsdGVyKGZpbHRlcikpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBGaWx0ZXJUYWdcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlci10YWcnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlclRhZyB7XG4gICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgIHRoaXMuaWNvbiA9IHRhZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyLXRhZ19faWNvbicpO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHRoaXMucmVtb3ZlRmlsdGVyKGV2dCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUZpbHRlcihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBncm91cFRhZ3MgPSB0aGlzLnRhZy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1maWx0ZXItdGFnJyk7XG5cbiAgICAgIC8vIFJlbW92ZSBlbnRpcmUgZmlsdGVyIHRhZyBncm91cCBpZiBubyBvdGhlciB0YWdzIHByZXNlbnQuXG4gICAgICBpZiAoZ3JvdXBUYWdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLnRhZy5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfWVsc2Uge1xuICAgICAgICB0aGlzLnRhZy5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZm9ybS5uaHN1ay1maWx0ZXIgaW5wdXRbdmFsdWU9JyR7dGhpcy50YWcuZGF0YXNldC5maWx0ZXJ9J11gKS5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja2JveC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGZvcm0ubmhzdWstZmlsdGVyIHNlbGVjdCBvcHRpb25bdmFsdWU9JyR7dGhpcy50YWcuZGF0YXNldC5maWx0ZXJ9J11gKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudEdyb3VwU2VsZWN0ID0gb3B0aW9uLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHBhcmVudEdyb3VwU2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xuXG4gICAgICAgIC8vIFJlc2V0IHN1Yi1ncm91cCBzZWxlY3QgaWYgd2UgYXJlIHNldHRpbmcgdGhlIHBhcmVudCxcbiAgICAgICAgY29uc3QgZm9ybUdyb3VwRWxlbSA9IG9wdGlvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBpZiAoZm9ybUdyb3VwRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhcmVudC1ncm91cCcpKSB7XG4gICAgICAgICAgY29uc3Qgc3ViR3JvdXBTZWxlY3QgPSBmb3JtR3JvdXBFbGVtLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstc2VsZWN0Jyk7XG4gICAgICAgICAgc3ViR3JvdXBTZWxlY3Quc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRHcm91cFNlbGVjdC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLnRhZy5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItdGFnLS1qcycpO1xuXG4gICAgICBpZiAodGhpcy5pY29uKSB7XG4gICAgICAgIHRoaXMuaWNvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyLXRhZycpXS5mb3JFYWNoKHRhZyA9PiBuZXcgRmlsdGVyVGFnKHRhZykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogTGlzdGluZ1xuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWxpc3RpbmcnIGFuZCAnLmhlZS1saXN0aW5ncycgYXJlIHBhc3NlZFxuICAgKiBpbnRvIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEB0b2RvIFJlbW92ZSBsZWdhY3kgcmVmZXJlbmNlcyB0byAubmhzdWstbGlzdGluZyBhbmQgbG9vcHMgb25jZSBhbGwgbmV3XG4gICAqIGNvbGxlY3Rpb24gdGVtcGxhdGVzIGhhdmUgYmVlbiBpbXBsZW1lbnRlZC5cbiAgICovXG4gIGNsYXNzIExpc3Rpbmcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmdfX2ZpbHRlcl9fc29ydCwgLm5oc3VrLWxpc3RpbmdfX3NvcnQnKV0uZm9yRWFjaChmb3JtRWxlbWVudCA9PiB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpO1xuICAgICAgICB0aGlzLnRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyhmb3JtRWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gRGlzYWJsZXMgYnJvd3NlciByZXN0b3Jpbmcgdmlld3BvcnQgdG8gcG9zaXRpb24gYmVmb3JlIHBhZ2UgcmVsb2FkLlxuICAgICAgaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xuXG4gICAgICB0aGlzLnNjcm9sbFRvUmVzdWx0cygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWxlY3QnKV0uZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zdWJtaXQsIC5uaHN1ay1saXN0aW5nX19zb3J0X19zdWJtaXQnKV0uZm9yRWFjaChzdWJtaXQgPT4ge1xuICAgICAgICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgICAgIHN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRVcGRhdGVkRmxhZyhpc1VwZGF0ZWQpIHtcbiAgICAgIGxldCBmbGFnRWxlbWVudCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtdXBkYXRlLWZsYWc9XCJsaXN0aW5nXCJdJyk7XG4gICAgICBpZiAoZmxhZ0VsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgZmxhZ0VsZW1lbnQudmFsdWUgPSBpc1VwZGF0ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUmVzdWx0cyhmb3JtRWxlbWVudCkge1xuICAgICAgLy8gU2V0IHNvcnQgY29udGFpbmVyIGhpZGRlbiBzY3JvbGwgZmxhZyB2YWx1ZSx0byBlbnN1cmUgdmlld3BvcnQgc2Nyb2xsc1xuICAgICAgLy8gZG93biB0byByZXN1bHRzIGxpc3RpbmdzIGFmdGVyIGZvcm0gc3VibWl0LlxuICAgICAgdGhpcy5zZXRVcGRhdGVkRmxhZyh0cnVlKTtcblxuICAgICAgZm9ybUVsZW1lbnQuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9SZXN1bHRzKCkge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24pO1xuXG4gICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXMoJ3Jlc3VsdHNfdXBkYXRlZCcpKSB7XG4gICAgICAgIGNvbnN0IGxpc3RpbmdDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChsaXN0aW5nQ29udGFpbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgbGlzdGluZ0NvbnRhaW5lci5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZywgLm5oc3VrLWxpc3RpbmcnKV0uZm9yRWFjaChsaXN0aW5nID0+IG5ldyBMaXN0aW5nKGxpc3RpbmcpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3MgQ29va2llcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvLyBiYW5uZXJcbiAgICAgIHRoaXMudXNlQ29va2llcyA9ICcnXG4gICAgICB0aGlzLmJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1jb29raWUtYmFubmVyJylcbiAgICAgIHRoaXMuc2hvd0Nvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0Nvb2tpZXMnKVxuICAgICAgdGhpcy5yZW1vdmVDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZUNvb2tpZXMnKVxuICAgICAgdGhpcy5ob3N0ID0gdGhpcy5nZXRIb3N0KClcblxuICAgICAgdGhpcy5jb29raWVTdGF0dXMoKVxuICAgICAgdGhpcy5zZXRDb29raWVzKClcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgICAvLyBwb2xpY3kgcGFnZVxuICAgICAgdGhpcy5TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWtfX2Nvb2tpZVN0YXR1cycpXG4gICAgICB0aGlzLkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzSW4nKVxuICAgICAgdGhpcy5PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNPdXQnKVxuXG4gICAgICB0aGlzLnRvZ2dsZVN0YXR1cygpXG4gICAgfVxuXG4gICAgY29va2llU3RhdHVzKCl7XG4gICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKVxuICAgICAgY29va2llcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGMubWF0Y2gobmV3IFJlZ0V4cCgnKF58ICljb29raWVfY29uc2VudChbXjtdKyknKSlcbiAgICAgICAgaWYobWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBjLnNwbGl0KFwiPVwiKVsxXVxuICAgICAgICAgIHRoaXMudXNlQ29va2llcyA9IHN0YXR1c1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGdldEhvc3QoKXtcbiAgICAgIGNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdC50b1N0cmluZygpLnNwbGl0KFwiOlwiKVswXVxuICAgICAgcmV0dXJuIGhvc3RcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmKHRoaXMuc2hvd0Nvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5zaG93Q29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnNob3dDb29raWUpXG4gICAgICB9XG4gICAgICBpZih0aGlzLnJlbW92ZUNvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMucmVtb3ZlQ29va2llKVxuICAgICAgfVxuICAgIH1cblxuICAgIGJhbm5lclNob3coKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJhbm5lckhpZGUoKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb29raWVzKCkge1xuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSAnJykge1xuICAgICAgICAgIHRoaXMuYmFubmVyU2hvdygpXG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzQWNjZXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfYWNjZXB0X2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0FjY2VwdCkge1xuICAgICAgICAgICAgYW5hbHl0aWNzQWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzRGVjbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2RlY2xpbmVfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzRGVjbGluZSkge1xuICAgICAgICAgICAgYW5hbHl0aWNzRGVjbGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9dHJ1ZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICBub0Nvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD1mYWxzZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgICBpZih0aGlzLlN0YXR1cyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc091dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzSW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gXCJmYWxzZVwiIHx8IHRoaXMudXNlQ29va2llcyA9PT0gJycgKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLkluKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5JbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlCbG9jayhpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIilcbiAgICB9XG5cbiAgICBkaXNwbGF5Tm9uZShpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpXG4gICAgfVxuXG4gICAgLy8gcmVkdW5kYW50IGJ1dCB1c2VmdWxcbiAgICBzaG93Q29va2llKCkge1xuICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2tpZXMnKVxuICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gJz4gJyArIGRvY3VtZW50LmNvb2tpZVxuICAgIH1cbiAgICBcbiAgICByZW1vdmVDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZV9jb25zZW50PWZhbHNlOyBtYXgtYWdlPTBcIlxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgfVxuXG4gIG5ldyBDb29raWVzKGRvY3VtZW50KVxufSIsIi8qKlxuKiBTdWJOYXZcbiogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1zdWJuYXYnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4qL1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIHN1Yk5hdiB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignYScpXG4gICAgICB0aGlzLnBhcmVudExpc3QgPSB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZUxpbmspIHtcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHRoaXMudG9nZ2xlTWVudShldmVudCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudShldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3RhdGUoKXtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBhY3RpdmVFbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBpZihlbGVtICE9IHRoaXMuY29udGFpbmVyKXtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgICBlbGVtLnRvZ2dsZUF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGFjdGl2ZUVsZW1zLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3RhdGUoKVxuICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLmNvbnRhaW5lciwgXCJpcy1hY3RpdmVcIilcbiAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKHRoaXMuY29udGFpbmVyLCBcImFyaWEtZXhwYW5kZWRcIilcbiAgICB9XG5cbiAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICAgIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm5cbiAgICAgIGNvbnN0IGhhc0NsYXNzID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICAgICAgaWYgKGhhc0NsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyKSB7XG4gICAgICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGF0dHIgYXJlIG1pc3NpbmdcbiAgICAgIGlmICghZWxlbWVudCB8fCAhYXR0cikgcmV0dXJuXG4gICAgICAvLyBUb2dnbGUgYXR0cmlidXRlIHZhbHVlLiBUcmVhdCBubyBleGlzdGluZyBhdHRyIHNhbWUgYXMgd2hlbiBzZXQgdG8gZmFsc2VcbiAgICAgIGNvbnN0IHZhbHVlID0gKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZScpID8gJ2ZhbHNlJyA6ICd0cnVlJ1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstc3VibmF2JyldLmZvckVhY2goc3VibmF2ID0+IG5ldyBzdWJOYXYoc3VibmF2KSlcblxuICAvKiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSkgKi9cblxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLW1lbnVcIik7XG5cbiAgY2xvc2VNZW51ICYmIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdXNlcklucHV0KGV2ZW50KVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB1c2VySW5wdXQpIFxuICBcbiAgZnVuY3Rpb24gdXNlcklucHV0KGV2ZW50KSB7XG4gICAgLy8gY2xvc2UgbWVudSBpZiBjbGlja2luZyBvdXRzaWRlXG4gICAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgaWYob3Blbk1lbnUpe1xuICAgICAgY29uc3QgaXNOb3RNZW51ID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuTWVudVxuICAgICAgY29uc3QgaXNOb3RNZW51QnV0dG9uID0gZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpXG4gICAgICBjb25zdCBpc01lbnVDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgICBpZihpc05vdE1lbnUgJiYgaXNOb3RNZW51QnV0dG9uICYmICFpc01lbnVDaGlsZCl7XG4gICAgICAgIG9wZW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zaG93XCIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNsb3NlIHN1YiBuYXYgaWYgY2xpY2tpbmcgYW55d2hlcmUgb24gdGhlIGRvY3VtZW50IGV4Y2VwdCB0aGUgb3BlbiBvciBhIG5ldyBzdWJuYXZcbiAgICBjb25zdCBvcGVuU3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgaWYob3BlblN1Yil7XG4gICAgICBjb25zdCBpc05vdFN1YiA9IGV2ZW50LnRhcmdldCAhPT0gb3BlblN1YlxuICAgICAgY29uc3QgaXNTdWJDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGlmKGlzTm90U3ViICYmICFpc1N1YkNoaWxkKXtcbiAgICAgICAgb3BlblN1Yi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLWxpc3RcIikuY2xhc3NMaXN0LnJlbW92ZShcInN1Ym5hdi1vcGVuXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBOSFNVSy1IRUUgQ29tcG9uZW50c1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvbmhzdWstaGVlLWNvb2tpZXMvY29va2llcyc7XG5pbXBvcnQgU3ViTmF2IGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL25oc3VrLWhlZS1oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYnO1xuXG4vLyBIRUUgQ29tcG9uZW50c1xuaW1wb3J0IEFuY2hvckxpbmtzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvYW5jaG9ybGlua3MnO1xuaW1wb3J0IEFuY2hvckxpbmtzU3RpY2t5IGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2hlZS1hbmNob3JsaW5rcy1zdGlja3kvYW5jaG9ybGlua3Mtc3RpY2t5JztcbmltcG9ydCBUYWJsZUNvbnRlbnRzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvc2lkZWJhci9oZWUtYW5jaG9ybGlua3MvdG9jJztcbmltcG9ydCBMaXN0aW5nIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L21haW4vaGVlLW1lZGlhL21lZGlhJztcbmltcG9ydCBOYXZNYXAgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1uYXZtYXAvbmF2bWFwJztcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtbmV3c2xldHRlci9uZXdzbGV0dGVyJztcbmltcG9ydCBTdW1tYXJ5Q2FyZCBmcm9tIFwiLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS1jYXJkLS1zdW1tYXJ5L3N1bW1hcnlcIjtcbmltcG9ydCBUYWJzIGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvbWFpbi9oZWUtdGFicy90YWJzJztcbmltcG9ydCBUYWJsZUNhcmQgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL2hlZS10YWJsZS1leHBhbmRlci90YWJsZS1leHBhbmRlcic7XG5cbi8vIFVuc29ydGVkIGNvbXBvbmVudHNcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyJztcbmltcG9ydCBGaWx0ZXJUYWcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnJztcblxuLy8gSW5pdGlhbGl6ZSBjb21wb25lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBUYWJzKCk7XG4gIEFuY2hvckxpbmtzKCk7XG4gIEFuY2hvckxpbmtzU3RpY2t5KCk7XG4gIENvb2tpZXMoKTtcbiAgRmlsdGVyKCk7XG4gIEZpbHRlclRhZygpO1xuICBMaXN0aW5nKCk7XG4gIE1lZGlhKCk7XG4gIE5hdk1hcCgpO1xuICBTdWJOYXYoKTtcbiAgU3VtbWFyeUNhcmQoKTtcbiAgTmV3c2xldHRlcigpO1xuICBUYWJsZUNvbnRlbnRzKCk7XG4gIFRhYmxlQ2FyZCgpO1xufSk7XG4iXSwibmFtZXMiOlsiQW5jaG9yTGlua3NTdGlja3kiLCJjb250YWluZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0b2dnbGVCdG4iLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5QW5jaG9yTGlua3MiLCJzaWRlYmFyQW5jaG9yTGlua3MiLCJkb2N1bWVudCIsImZvb3RlciIsImFkZEV2ZW50TGlzdGVuZXJzIiwidG9nZ2xlU3RpY2t5VG9vbGJhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MiLCJldmVudCIsImtleUNvZGUiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwid2luZG93IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZm9jdXMiLCJ0b2NCbG9ja1Zpc2libGUiLCJpc0VsZW1lbnRJblZpZXdwb3J0IiwiZm9vdGVyVmlzaWJsZSIsImFkZCIsInJlbW92ZSIsImVsZW1lbnQiLCJib3VuZGluZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsZW1lbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsInRvcCIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJhbmNob3JMaW5rcyIsIlN1bW1hcnlDYXJkIiwic3VtbWFyeUNhcmQiLCJ0b2dnbGVMaW5rIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVTdW1tYXJ5IiwiVHJhbnNjcmlwdCIsInRvZ2dsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImV2dCIsInRvZ2dsZXRyYW5zY3JpcHQiLCJpc0NvbGxhcHNlZCIsImNvbnRhaW5zIiwidHJhbnNjcmlwdCIsIk5hdk1hcCIsIm1hcCIsInN2ZyIsInJlZ2lvbnMiLCJsaXN0IiwiYWRkTGlua3NUb01hcCIsImNsZWFuU3R5bGUiLCJtYXBFdmVudExpc3RlbmVycyIsImxpbmtFdmVudExpc3RlbmVycyIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJyZWdpb24iLCJ0aGlzQ291bnRlcnBhcnQiLCJtYXBDb3VudGVycGFydCIsImlkIiwidGhpc0hyZWYiLCJocmVmIiwidGhpc1RpdGxlIiwiY2hpbGRyZW4iLCJ3cmFwTGluayIsImNvbmNhdCIsIl90aGlzMiIsIm1hcEluIiwibWFwT3V0IiwibWFwQ2xpY2siLCJfdGhpczMiLCJpdGVtIiwibGlua0V2ZW50IiwibW92ZVRvVG9wIiwib2JqIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwidGhpc0xpbmsiLCJ0aGlzTWFwQ291bnRlcnBhcnQiLCJjbG9zZXN0IiwiY2xpY2siLCJ0aGlzSWQiLCJmaW5kIiwiZGlyZWN0aW9uIiwidHlwZSIsImxpbmtDb3VudGVycGFydCIsImdldFNWR0RvY3VtZW50IiwiTmV3c2xldHRlciIsIm5ld3NsZXR0ZXIiLCJyZXF1aXJlZElucHV0cyIsImVycm9ycyIsImluaXQiLCJyZWNhcHRjaGFDYWxsYmFjayIsInJlc2V0Rm9ybSIsImFkZEV2ZW50cyIsImlucHV0IiwiYyIsInZhbGlkYXRlIiwidGFyZ2V0RXJyb3IiLCJnZXRFbGVtZW50QnlJZCIsIm5hbWUiLCJ0YXJnZXRTdW1tYXJ5RXJyb3IiLCJlcnJvckVtcHR5IiwiZXJyb3JFbWFpbCIsImVycm9yQ29uc2VudCIsInVwZGF0ZVN1bW1hcnkiLCJlcnJvclN1bW1hcnkiLCJsZW5ndGgiLCJkaXNwbGF5IiwiaXNFbXB0eSIsInNob3dFcnJvciIsImhpZGVFcnJvciIsInJlIiwidGVzdCIsImNoZWNrZWQiLCJmaWx0ZXIiLCJwdXNoIiwic3RyIiwidHJpbSIsImVycm9yIiwiZXJyb3JDbGFzc2VzIiwiZXJyb3JjbGFzcyIsImVycm9yc3VtbWFyeSIsImVycm9yU3VtbWFyeUl0ZW1zIiwic3VtbWFyeWl0ZW0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJUYWJsZUNhcmQiLCJ0YWJsZUNhcmQiLCJleHBhbmRlcnMiLCJzdGF0ZU9wZW4iLCJpbm5lclRleHQiLCJkYXRhc2V0IiwibGFiZWxPcGVuIiwiaW5pdEV4cGFuZGVyT2JzZXJ2ZXIiLCJ0b2dnbGVFeHBhbmRlcnMiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnNMaXN0IiwibXV0YXRpb24iLCJhdHRyaWJ1dGVOYW1lIiwidXBkYXRlVG9nZ2xlU3RhdGUiLCJleHBhbmRlciIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwib3BlbkV4cGFuZGVyIiwiY2xvc2VFeHBhbmRlciIsImxhYmVsQ2xvc2UiLCJfdGhpczQiLCJhbGxPcGVuIiwiaGFzQXR0cmlidXRlIiwic2V0T3BlbkF0dHJpYnV0ZXMiLCJzdW1tYXJ5IiwidGV4dCIsIlRhYnMiLCJ0YWJjb21wb25lbnQiLCJpIiwidGFicyIsInRhYkxpc3QiLCJ0YWIiLCJjaGFuZ2VUYWJzIiwidGFiRm9jdXMiLCJlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImdyYW5kcGFyZW50Iiwic2VsZWN0ZWQiLCJpc19tb2JpbGUiLCJyZW1vdmVTZWxlY3RlZCIsImhpZGVUYWJzIiwic2V0U2VsZWN0ZWQiLCJzaG93U2VsZWN0ZWQiLCJlbGUiLCJ0IiwicCIsIkFuY2hvckxpbmtzIiwiaGlkZGVuIiwiZm91bmRIZWFkaW5ncyIsImZpbmRIZWFkaW5ncyIsImhlYWRpbmdzIiwiYWRkQW5jaG9yc1RvUGFnZSIsImhlYWRpbmdUeXBlcyIsInNwbGl0Iiwic2VsZWN0b3JzIiwiam9pbiIsImNvbnRlbnRDb250YWluZXIiLCJoZWFkaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uIiwic2VsZWN0b3IiLCJzb21lIiwiZWwiLCJ1bCIsImNyZWF0ZUVsZW1lbnQiLCJmb3VuZEhlYWRpbmciLCJhbmNob3JsaW5rc2lnbm9yZSIsImxpIiwiYSIsImhpZGRlbkVsZW1lbnRzIiwiVGFibGVDb250ZW50cyIsInRhYmxlQ29udGVudHMiLCJjb250YWluZXJTZWxlY3RvciIsImhlYWRpbmdTZWxlY3RvciIsInN1YkhlYWRpbmdTZWxlY3RvciIsImhlYWRpbmdQcmVmaXgiLCJsaW5rcyIsImNyZWF0ZVRvY0xpbmtzIiwic2V0VG9jTGlzdE1hcmt1cCIsInNsaWNlIiwiY2FsbCIsInNldEJhY2tUb1RvcExpbmtzIiwic3ViSGVhZGluZ3MiLCJpbmRleCIsImhlYWRpbmdJZCIsImxpbmsiLCJ0aXRsZSIsImdldEhlYWRpbmdUaXRsZSIsImFuY2hvciIsInNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjb3VudCIsInN1YkhlYWRpbmdJZCIsInNob3J0VGl0bGUiLCJsaXN0SXRlbSIsInNwYW4iLCJnZXRDaGV2cm9uU1ZHIiwiZ2V0Q2lyY2xlU1ZHIiwiYXBwZW5kIiwicGFyZW50TGluayIsImNoaWxkTGlzdCIsImNoaWxkSXRlbSIsImNoaWxkTGluayIsImNyZWF0ZUJhY2tUb1RvcExpbmsiLCJpbnNlcnRCZWZvcmUiLCJGaWx0ZXIiLCJjaGVja2JveGVzIiwiZHJvcGRvd25zIiwiZ3JvdXBzIiwic3VibWl0IiwiY2xlYXJUb2dnbGUiLCJzZXRVcCIsImNoZWNrYm94IiwidXBkYXRlUmVzdWx0cyIsImRyb3Bkb3duIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cEZpZWxkc2V0IiwiY2xlYXJGaWx0ZXIiLCJpbml0RmlsdGVycyIsImluaXRDbGVhclRvZ2dsZXMiLCJpbml0Q291bnRlcnMiLCJpc0dyb3VwRmlsdGVyQWN0aXZlIiwicGFyZW50U2VsZWN0Iiwic3ViU2VsZWN0IiwiY2IiLCJjaGlsZEVsZW1lbnRDb3VudCIsInVwZGF0ZUFjdGl2ZUNvdW50IiwiY291bnRFbGVtIiwic2VsZWN0RWxlbWVudHMiLCJzZXRVcGRhdGVkRmxhZyIsImlzVXBkYXRlZCIsImZsYWdFbGVtZW50IiwicGFyZW50R3JvdXAiLCJub2RlTmFtZSIsIndyYXBwZXIiLCJjaGlsZFNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJjbGVhckNoZWNrYm94ZXMiLCJjbGVhclNlbGVjdEVsZW1lbnRzIiwic2VsZWN0IiwiRmlsdGVyVGFnIiwidGFnIiwiaWNvbiIsInJlbW92ZUZpbHRlciIsImdyb3VwVGFncyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIm9wdGlvbiIsInBhcmVudEdyb3VwU2VsZWN0IiwiZm9ybUdyb3VwRWxlbSIsInN1Ykdyb3VwU2VsZWN0IiwiTGlzdGluZyIsImZvcm1FbGVtZW50IiwidG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzIiwiaGlzdG9yeSIsInNjcm9sbFJlc3RvcmF0aW9uIiwic2Nyb2xsVG9SZXN1bHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ1cmwiLCJVUkwiLCJsb2NhdGlvbiIsInNlYXJjaFBhcmFtcyIsImhhcyIsImxpc3RpbmdDb250YWluZXIiLCJzY3JvbGxJbnRvVmlldyIsImxpc3RpbmciLCJDb29raWVzIiwidXNlQ29va2llcyIsImJhbm5lciIsInNob3dDb29raWVzIiwicmVtb3ZlQ29va2llcyIsImhvc3QiLCJnZXRIb3N0IiwiY29va2llU3RhdHVzIiwic2V0Q29va2llcyIsIlN0YXR1cyIsIkluIiwiT3V0IiwidG9nZ2xlU3RhdHVzIiwiY29va2llcyIsImNvb2tpZSIsIm1hdGNoIiwiUmVnRXhwIiwic3RhdHVzIiwidG9TdHJpbmciLCJzaG93Q29va2llIiwicmVtb3ZlQ29va2llIiwiYmFubmVyU2hvdyIsImJhbm5lckhpZGUiLCJhbmFseXRpY3NBY2NlcHQiLCJ1c2VDb29raWUiLCJhbmFseXRpY3NEZWNsaW5lIiwibm9Db29raWUiLCJyZWxvYWQiLCJkaXNwbGF5QmxvY2siLCJkaXNwbGF5Tm9uZSIsIm91dHB1dCIsInRleHRDb250ZW50Iiwic3ViTmF2IiwicGFyZW50TGlzdCIsInRvZ2dsZU1lbnUiLCJoYW5kbGVTdGF0ZSIsImFjdGl2ZUVsZW1zIiwiZWxlbSIsInRvZ2dsZUF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhdHRyIiwic3VibmF2IiwiY2xvc2VNZW51IiwidXNlcklucHV0Iiwib3Blbk1lbnUiLCJpc05vdE1lbnUiLCJpc05vdE1lbnVCdXR0b24iLCJpc01lbnVDaGlsZCIsIm9wZW5TdWIiLCJpc05vdFN1YiIsImlzU3ViQ2hpbGQiLCJTdWJOYXYiLCJNZWRpYSJdLCJzb3VyY2VSb290IjoiIn0=