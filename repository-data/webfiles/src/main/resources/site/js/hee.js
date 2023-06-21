/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/components/hee/hee-media/media.js":
/*!******************************************************!*\
  !*** ./app/assets/components/hee/hee-media/media.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  /**
  * Media transcript
  * Elements with the selector '.nhsuk-transcript' are passed into this class
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
          this.container.classList.remove("nhsuk-media__transcript-expanded");
        } else {
          this.container.classList.add("nhsuk-media__transcript-expanded");
        }
      }
    }, {
      key: "isCollapsed",
      value: function isCollapsed() {
        if (this.container.classList.contains("nhsuk-media__transcript-expanded")) {
          return true;
        } else {
          return false;
        }
      }
    }]);

    return Transcript;
  }();

  _toConsumableArray(document.getElementsByClassName('nhsuk-media__transcript')).forEach(function (transcript) {
    return new Transcript(transcript);
  });
});

/***/ }),

/***/ "./app/assets/components/hee/hee-navmap/navmap.js":
/*!********************************************************!*\
  !*** ./app/assets/components/hee/hee-navmap/navmap.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

/***/ "./app/assets/components/hee/hee-newsletter/newsletter.js":
/*!****************************************************************!*\
  !*** ./app/assets/components/hee/hee-newsletter/newsletter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

/***/ "./app/assets/components/hee/hee-tabs/tabs.js":
/*!****************************************************!*\
  !*** ./app/assets/components/hee/hee-tabs/tabs.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
              tabFocus++; // If we're at the end, go to the start

              if (tabFocus >= tabs.length) {
                tabFocus = 0;
              } // Move left

            } else if (e.keyCode === 37) {
              tabFocus--; // If we're at the start, move to the end

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
        var target = e.target; // console.log(target);

        var parent = target.parentNode; // console.log(parent);

        var grandparent = parent.parentNode; // console.log(grandparent);

        var selected = parent.getElementsByClassName('nhsuk-tabs__list-item--selected')[0]; // console.log(selected)

        var is_mobile = grandparent.classList.contains('nhsuk-tabs__mobile'); //console.log(is_mobile)
        // Compare selected and target, and if on mobile
        // Close the tab if already open

        if (target == selected && is_mobile) {
          // Unselect all tabs
          this.removeSelected(parent); // Hide all tabs

          this.hideTabs(grandparent);
        } else {
          // Remove all current selected tabs
          this.removeSelected(parent); // Set this tab as selected

          this.setSelected(target); // Hide all tab panels

          this.hideTabs(grandparent); // Show the selected panel

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

/***/ "./app/assets/hee/blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky.js":
/*!***************************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/footer/anchorlinks-sticky/anchorlinks-sticky.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

  _toConsumableArray(document.getElementsByClassName('hee-anchorlinks__sticky')).forEach(function (anchorLinksSticky) {
    return new AnchorLinksSticky(anchorLinksSticky);
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
        }); // Handles toggle link enter and spacebar key press.

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

/***/ "./app/assets/hee/blocks/content/main/table-expander/table-expander.js":
/*!*****************************************************************************!*\
  !*** ./app/assets/hee/blocks/content/main/table-expander/table-expander.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
        }); // Handles toggle link enter and spacebar key press.

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
        }); // Toggle state flag.

        this.stateOpen = !this.stateOpen; // Toggle button text.

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

            while (hiddenElements.length > 0) {
              hiddenElements[0].remove();
            }

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
      this.headingPrefix = 'hee-toc-heading'; // Anchor links macro sets this data attribute when TOC is flagged as true.

      if (!this.tableContents.hasAttribute('data-toc-js')) {
        return;
      } // Only attempt to build TOC links if H2 anchors found on page.


      var headings = document.querySelectorAll(this.containerSelector + ' ' + this.headingSelector);

      if (headings.length === 0) {
        return;
      } // Build link structure from DOM and append generated markup to TOC
      // component.


      var links = this.createTocLinks(headings);
      this.setTocListMarkup(links); // Build back to top links and append to each TOC heading within page
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
          var headingId = _this.headingPrefix + '-' + index; // Set unique id for current heading H2 element.

          heading.setAttribute('id', headingId);
          var link = {
            title: _this.getHeadingTitle(heading),
            anchor: headingId,
            children: []
          };
          var sibling = heading.nextElementSibling;
          var count = 0; // Traverse DOM for H3 elements after current H2 heading and append to
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

        this.container.classList.add('nhsuk-filter--js'); // Close groups
        // this.groups.forEach(group => group.classList.add('nhsuk-filter__group--closed'));

        this.clearToggle.forEach(function (toggle) {
          _this2.toggleClearLinkVisibility(toggle);
        }); // Hide submit button

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
      key: "updateResults",
      value: function updateResults(evt) {
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
        evt.target.remove();
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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

      _toConsumableArray(container.querySelectorAll('.hee-listing__filter__sort, .nhsuk-listing__sort')).forEach(function (formElement) {
        _this.addEventListeners(formElement);

        _this.toggleJavascriptElements(formElement);
      });
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
      key: "updateResults",
      value: function updateResults(formElement) {
        formElement.submit();
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
      this.addEventListeners(); // policy page

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
      } // redundant but useful

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
        if (!element || !attr) return; // Toggle attribute value. Treat no existing attr same as when set to false

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
    } // close sub nav if clicking anywhere on the document except the open or a new subnav


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
/* harmony import */ var _components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hee/hee-media/media */ "./app/assets/components/hee/hee-media/media.js");
/* harmony import */ var _components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hee/hee-navmap/navmap */ "./app/assets/components/hee/hee-navmap/navmap.js");
/* harmony import */ var _components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hee/hee-newsletter/newsletter */ "./app/assets/components/hee/hee-newsletter/newsletter.js");
/* harmony import */ var _blocks_content_main_card_summary_summary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/content/main/card--summary/summary */ "./app/assets/hee/blocks/content/main/card--summary/summary.js");
/* harmony import */ var _components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/hee/hee-tabs/tabs */ "./app/assets/components/hee/hee-tabs/tabs.js");
/* harmony import */ var _blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/content/main/table-expander/table-expander */ "./app/assets/hee/blocks/content/main/table-expander/table-expander.js");
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
// NHSUK-HEE Components

 // HEE Components







 //import DetailsCard from '../components/hee/hee-detailscard/detailscard';



 //import Timeline from '../components/hee/hee-timeline/timeline';
// Unsorted components


 //import './polyfills';
// Initialize components

document.addEventListener('DOMContentLoaded', function () {
  (0,_components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_content_footer_anchorlinks_sticky_anchorlinks_sticky__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_12__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_blocks_content_main_card_summary_summary__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_content_sidebar_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_11__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Q0FHQTtBQUVBOztBQUNBRyxRQUFRLENBQUNSLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEaUcsRUFBQUEsMEVBQUk7QUFDSjhFLEVBQUFBLDJGQUFXO0FBQ1hyRCxFQUFBQSx3R0FBaUI7QUFDakJ1SSxFQUFBQSwrRUFBTztBQUNQMUIsRUFBQUEsNEZBQU07QUFDTmMsRUFBQUEsa0dBQVM7QUFDVE0sRUFBQUEsNkZBQU87QUFDUDhELEVBQUFBLDJFQUFLO0FBQ0w5UyxFQUFBQSw2RUFBTTtBQUNONlMsRUFBQUEsd0ZBQU07QUFDTmhRLEVBQUFBLHFGQUFVO0FBQ1YwRixFQUFBQSxxRkFBVztBQUNYa0QsRUFBQUEsbUZBQWE7QUFDYjlDLEVBQUFBLCtGQUFTO0FBQ1YsQ0FmRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1tZWRpYS9tZWRpYS5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW5hdm1hcC9uYXZtYXAuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS10YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9mb290ZXIvYW5jaG9ybGlua3Mtc3RpY2t5L2FuY2hvcmxpbmtzLXN0aWNreS5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vY2FyZC0tc3VtbWFyeS9zdW1tYXJ5LmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2NvbnRlbnQvbWFpbi90YWJsZS1leHBhbmRlci90YWJsZS1leHBhbmRlci5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvYW5jaG9ybGlua3MvYW5jaG9ybGlua3MuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL3RvYy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL2Nvb2tpZXMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2hlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1lZGlhIHRyYW5zY3JpcHRcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXRyYW5zY3JpcHQnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIFRyYW5zY3JpcHQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9nZ2xlcylcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlcykge1xuICAgICAgICB0aGlzLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xldHJhbnNjcmlwdChldnQpKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGV0cmFuc2NyaXB0KCkge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQoKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlzQ29sbGFwc2VkKCkge1xuICAgICAgaWYodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIikpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstbWVkaWFfX3RyYW5zY3JpcHQnKV0uZm9yRWFjaCh0cmFuc2NyaXB0ID0+IG5ldyBUcmFuc2NyaXB0KHRyYW5zY3JpcHQpKVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWFwXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1yZWdpb24nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5hdk1hcCB7XG4gICAgY29uc3RydWN0b3IobWFwLCBzdmcpIHtcbiAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICB0aGlzLnJlZ2lvbnMgPSBbLi4uc3ZnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXJlZ2lvbicpXTtcbiAgICAgIHRoaXMubGlzdCA9IFsuLi5tYXAucXVlcnlTZWxlY3RvckFsbCgnI3JlZ2lvbkxpc3QgbGkgYScpXTtcblxuICAgICAgdGhpcy5hZGRMaW5rc1RvTWFwKCk7XG4gICAgICB0aGlzLmNsZWFuU3R5bGUoKTtcbiAgICAgIHRoaXMubWFwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMubGlua0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY2xlYW5TdHlsZSgpe1xuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAgICAgLnN0MHtmaWxsOiMwMDVFQjg7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5zdDF7ZmlsbDojQUVCN0JEO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuaG92ZXIgKiB7c3Ryb2tlOiNmZmViM2I7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgICAgLmZvY3VzIC5zdDAge2ZpbGw6I2ZmZWIzYjtzdHJva2U6IzIxMmIzMjt9XG4gICAgICAgIC5mb2N1cyAqIHtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgYCkpXG4gICAgfVxuXG4gICAgYWRkTGlua3NUb01hcCgpe1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChyZWdpb24uaWQpXG4gICAgICAgIGNvbnN0IHRoaXNIcmVmID0gKHRoaXNDb3VudGVycGFydC5ocmVmKT8gdGhpc0NvdW50ZXJwYXJ0LmhyZWYgOiBcIi9cIlxuICAgICAgICBjb25zdCB0aGlzVGl0bGUgPSAodGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCk/IHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwgOiBcIlwiXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcmVnaW9uLmlubmVySFRNTDtcbiAgICAgICAgY29uc3Qgd3JhcExpbmsgPSBgPGEgeGxpbms6aHJlZj1cIiR7dGhpc0hyZWZ9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgPHRpdGxlPiR7dGhpc1RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgJHtjaGlsZHJlbn1cbiAgICAgICAgPC9hPmBcbiAgICAgICAgcmVnaW9uLmlubmVySFRNTCA9IHdyYXBMaW5rXG4gICAgICB9KVxuICAgIH1cblxuICAgIG1hcEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHRoaXMubWFwSW4oZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHRoaXMubWFwT3V0KGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0aGlzLm1hcENsaWNrKGV2ZW50KSkpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJmb2N1c1wiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJmb2N1c1wiKSkpXG4gICAgfVxuXG4gICAgbW92ZVRvVG9wKG9iaikge1xuICAgICAgb2JqLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqKTtcbiAgICB9XG5cbiAgICBtYXBJbih0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRoaXMubW92ZVRvVG9wKHRhcmdldClcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBPdXQodGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwQ2xpY2soZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHRoaXNNYXBDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJnXCIpLmlkKVxuICAgICAgaWYodGhpc01hcENvdW50ZXJwYXJ0KSB0aGlzTWFwQ291bnRlcnBhcnQuY2xpY2soKVxuICAgIH1cblxuICAgIG1hcENvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saXN0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG5cbiAgICBsaW5rRXZlbnQodGFyZ2V0LCBkaXJlY3Rpb24sIHR5cGUpIHtcbiAgICAgIGNvbnN0IHRoaXNJZCA9IHRhcmdldC5pZFxuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saW5rQ291bnRlcnBhcnQodGhpc0lkKVxuICAgICAgaWYoZGlyZWN0aW9uID09PSBcImluXCIpIHtcbiAgICAgICAgdGhpcy5tYXBJbih0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcE91dCh0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGlua0NvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5yZWdpb25zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLW1hcCcpXS5mb3JFYWNoKG1hcCA9PiB7XG4gICAgLy8gbmVlZCB0byB3YWl0IGZvciBTVkcgdG8gbG9hZFxuICAgIGNvbnN0IG9iaiA9IG1hcC5xdWVyeVNlbGVjdG9yKCdvYmplY3QnKVxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IHN2ZyA9IG9iai5nZXRTVkdEb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpXG4gICAgICBpZihzdmcpe1xuICAgICAgICBuZXcgTmF2TWFwKG1hcCwgc3ZnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBOZXdzbGV0dGVyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmV3c2xldHRlciB7XG4gICAgY29uc3RydWN0b3IobmV3c2xldHRlcikge1xuICAgICAgdGhpcy5uZXdzbGV0dGVyID0gbmV3c2xldHRlcjtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMgPSBuZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcmVxdWlyZWRdXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgd2luZG93LnJlY2FwdGNoYUNhbGxiYWNrID0gdGhpcy5yZWNhcHRjaGFDYWxsYmFja1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgdGhpcy5hZGRFdmVudHMoKSAgICAgIDtcbiAgICB9XG4gICAgXG4gICAgYWRkRXZlbnRzKCkge1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGMgPT4gdGhpcy52YWxpZGF0ZShjLnRhcmdldCkpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0YXJnZXQpIHtcbiAgICAgIHZhciB0YXJnZXRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JzLVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIHZhciB0YXJnZXRTdW1tYXJ5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnktXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgaWYgKHRhcmdldC5uYW1lID09IFwiZmlyc3RuYW1lXCIgfHwgdGFyZ2V0Lm5hbWUgPT0gXCJsYXN0bmFtZVwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJlbWFpbFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJjb25zZW50XCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU3VtbWFyeSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN1bW1hcnkoKSB7XG4gICAgICB2YXIgZXJyb3JTdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5XCIpO1xuICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApXG4gICAgICB7ICAgICAgICBcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgaWYgKCFyZS50ZXN0KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIHNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCh0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgaXNFbXB0eShzdHIpIHtcbiAgICAgIHJldHVybiAhc3RyLnRyaW0oKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1tZXNzYWdlJyk7XG4gICAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JDbGFzc2VzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgZXJyb3JDbGFzc2VzLmZvckVhY2goZXJyb3JjbGFzcyA9PiB7XG4gICAgICAgIGVycm9yY2xhc3MuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnkgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLXN1bW1hcnknKTtcbiAgICAgIGVycm9yU3VtbWFyeS5mb3JFYWNoKGVycm9yc3VtbWFyeSA9PiB7XG4gICAgICAgIGVycm9yc3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeUl0ZW1zID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1zdW1tYXJ5LWl0ZW0nKTtcbiAgICAgIGVycm9yU3VtbWFyeUl0ZW1zLmZvckVhY2goc3VtbWFyeWl0ZW0gPT4ge1xuICAgICAgICBzdW1tYXJ5aXRlbS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJztcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVjYXB0Y2hhQ2FsbGJhY2soKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI25ld3NsZXR0ZXItZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScpXS5mb3JFYWNoKChuZXdzbGV0dGVyKSA9PiBuZXcgTmV3c2xldHRlcihuZXdzbGV0dGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIC8qKlxyXG4gICogVGFic1xyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10YWJzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xyXG4gICovXHJcbiAgY2xhc3MgVGFicyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWJjb21wb25lbnQsIGkpIHtcclxuICAgICAgdGhpcy50YWJjb21wb25lbnQgPSB0YWJjb21wb25lbnRcclxuICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKVxyXG4gICAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJ0YWJsaXN0XCJdJylcclxuICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjID0+IHRoaXMuY2hhbmdlVGFicyhjKSlcclxuICAgICAgfSlcclxuICAgICAgbGV0IHRhYkZvY3VzID0gMFxyXG4gICAgICB0YWJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xyXG4gICAgICAgIC8vIE1vdmUgcmlnaHRcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSlcclxuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzKytcclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGVuZCwgZ28gdG8gdGhlIHN0YXJ0XHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA+PSB0YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1vdmUgbGVmdFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzLS1cclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHN0YXJ0LCBtb3ZlIHRvIHRoZSBlbmRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gdGFicy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApXHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWJzKGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2coZ3JhbmRwYXJlbnQpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylbMF07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxyXG4gICAgICBjb25zdCBpc19tb2JpbGUgPSBncmFuZHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXRhYnNfX21vYmlsZScpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGlzX21vYmlsZSlcclxuXHJcbiAgICAgIC8vIENvbXBhcmUgc2VsZWN0ZWQgYW5kIHRhcmdldCwgYW5kIGlmIG9uIG1vYmlsZVxyXG4gICAgICAvLyBDbG9zZSB0aGUgdGFiIGlmIGFscmVhZHkgb3BlblxyXG4gICAgICBpZih0YXJnZXQgPT0gc2VsZWN0ZWQgJiYgaXNfbW9iaWxlKSB7XHJcbiAgICAgICAgLy8gVW5zZWxlY3QgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgc2VsZWN0ZWQgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhpcyB0YWIgYXMgc2VsZWN0ZWRcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKHRhcmdldClcclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFiIHBhbmVsc1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNob3cgdGhlIHNlbGVjdGVkIHBhbmVsXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0ZWQoZ3JhbmRwYXJlbnQucGFyZW50Tm9kZSwgdGFyZ2V0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpXHJcbiAgICAgICAgLmZvckVhY2godCA9PiB0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgZmFsc2UpKTtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylcclxuICAgICAgICAuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB0cnVlKVxyXG4gICAgICBlbGUuY2xhc3NMaXN0LmFkZChcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBoaWRlVGFicyhlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFicGFuZWxcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHAgPT4gcC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NlbGVjdGVkKGVsZSwgdGFyZ2V0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZS5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKSlcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApXHJcbiAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzJyldLmZvckVhY2goKHRhYnMsIGkpID0+IG5ldyBUYWJzKHRhYnMsIGkpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIFJlc3BvbnNpYmxlIGZvciBBbmNob3IgbGluayBzdGlja3kgdG9vbGJhciBhdCBib3R0b20gb2Ygdmlld3BvcnQuXG4gICAqL1xuICBjbGFzcyBBbmNob3JMaW5rc1N0aWNreSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcblxuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICB0aGlzLnRvZ2dsZUJ0biA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5oZWUtYW5jaG9ybGlua3NfX3N0aWNreV9fYnRuJyk7XG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmhlZS1hbmNob3JsaW5rcycpO1xuICAgICAgdGhpcy5zaWRlYmFyQW5jaG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZV9fcmlnaHRiYXIgLmhlZS1hbmNob3JsaW5rcycpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLnRvZ2dsZVN0aWNreVRvb2xiYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGV2ZW50IGxpc3RlbmVycyBmb3IgVE9DIGJ1dHRvbiB0b2dnbGUsIFRPQyBsaW5rIG5hdmlnYXRpb24gYW5kXG4gICAgICogdGhlIHdpbmRvdyB2aWV3cG9ydCBzY3JvbGwgdG9nZ2xlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpKVxuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgdGhpcy50b2dnbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnICYmIGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVTdGlja3lBbmNob3JMaW5rcygpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlU3RpY2t5VG9vbGJhcigpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyAvIGhpZGVzIHRoZSBzdGlja3kgVE9DIGFuY2hvciBsaW5rcyB3aGVuIFwiVGFibGUgb2YgQ29udGVudHNcIiBidXR0b25cbiAgICAgKiB0cmlnZ2VyZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgdG9nZ2xlU3RpY2t5QW5jaG9yTGlua3MoKSB7XG4gICAgICB0aGlzLnRvZ2dsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIHRoaXMuc3RpY2t5QW5jaG9yTGlua3MuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtc3RpY2t5Jyk7XG5cbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnN0aWNreUFuY2hvckxpbmtzLnF1ZXJ5U2VsZWN0b3IoJ2E6Zmlyc3Qtb2YtdHlwZScpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgLyBoaWRlcyB0aGUgVE9DIGJvdHRvbSBcInRvb2xiYXJcIiB3aGVuIHRoZSBzaWRlYmFyIFRPQyBoZWFkaW5nIGlzXG4gICAgICogb3V0c2lkZSB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgdG9nZ2xlU3RpY2t5VG9vbGJhcigpIHtcbiAgICAgIGlmICghdGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0KHRoaXMuc2lkZWJhckFuY2hvckxpbmtzLnF1ZXJ5U2VsZWN0b3IoJ2gyJykpKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgd2hldGhlciBhbiBlbGVtZW50IGlzIGluc2lkZSB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybnMgYm9vbGVhblxuICAgICAqL1xuICAgIGlzRWxlbWVudEluVmlld3BvcnQoZWxlbWVudCkge1xuICAgICAgY29uc3QgYm91bmRpbmcgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgY29uc3QgZWxlbWVudFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgcmV0dXJuIGJvdW5kaW5nLnRvcCA+PSAtZWxlbWVudEhlaWdodFxuICAgICAgICAmJiBib3VuZGluZy5sZWZ0ID49IC1lbGVtZW50V2lkdGhcbiAgICAgICAgJiYgYm91bmRpbmcucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkgKyBlbGVtZW50V2lkdGhcbiAgICAgICAgJiYgYm91bmRpbmcuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyBlbGVtZW50SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3NfX3N0aWNreScpXS5mb3JFYWNoKGFuY2hvckxpbmtzU3RpY2t5ID0+IG5ldyBBbmNob3JMaW5rc1N0aWNreShhbmNob3JMaW5rc1N0aWNreSkpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICBjbGFzcyBTdW1tYXJ5Q2FyZCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzdW1tYXJ5Q2FyZCkge1xuICAgICAgdGhpcy5zdW1tYXJ5Q2FyZCA9IHN1bW1hcnlDYXJkO1xuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy5zdW1tYXJ5Q2FyZC5xdWVyeVNlbGVjdG9yKCcuaGVlLWNhcmQtLXN1bW1hcnlfX3RvZ2dsZScpO1xuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgbGluay5cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGNsaWNrIGV2ZW50LlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlU3VtbWFyeSgpO1xuICAgICAgfSlcblxuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgbGluayBlbnRlciBhbmQgc3BhY2ViYXIga2V5IHByZXNzLlxuICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVN1bW1hcnkoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYWxsIGV4cGFuZGVyIGNvbnRlbnQgdmlzaWJpbGl0eSB3aXRoaW4gdGFibGUgY2FyZC5cbiAgICAgKi9cbiAgICB0b2dnbGVTdW1tYXJ5KCkge1xuICAgICAgdGhpcy5zdW1tYXJ5Q2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdkZWZhdWx0Jyk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1jYXJkLS1zdW1tYXJ5JyldLmZvckVhY2goc3VtbWFyeUNhcmQgPT4gbmV3IFN1bW1hcnlDYXJkKHN1bW1hcnlDYXJkKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIHRoZSBcImV4cGFuZCBhbGxcIiB0b2dnbGUgZnVuY3Rpb25hbGl0eSBmb3IgdGFibGVcbiAgICogY2FyZHMuXG4gICAqL1xuICBjbGFzcyBUYWJsZUNhcmQge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDYXJkKSB7XG4gICAgICB0aGlzLnRhYmxlQ2FyZCA9IHRhYmxlQ2FyZDtcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtdGFibGUtZXhwYW5kZXJfX3RvZ2dsZSBhJyk7XG4gICAgICB0aGlzLmV4cGFuZGVycyA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1leHBhbmRlcicpO1xuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluayAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rIGFuZCBzdW1tYXJ5IGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSB1c2Ugb2JzZXJ2ZXJzIHRvIHJlYWN0IHRvIGNsaWNrIGV2ZW50cyBvbiBpbmRpdmlkdWFsIGV4cGFuZGVycywgYXMgdGhpc1xuICAgICAqIGV2ZW50IGZ1bmN0aW9uYWxpdHkgaXMgaGFuZGxlZCBieSB0aGUgbmhzdWstZGV0YWlscyBjb21wb25lbnQncyBqYXZhc2NyaXB0LlxuICAgICAqL1xuICAgIGluaXRFeHBhbmRlck9ic2VydmVyKCkge1xuICAgICAgLy8gQ29uZmlndXJlIG9ic2VydmVyIHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gYW4gZXhwYW5kZXIncyBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0KSA9PiB7XG4gICAgICAgIG11dGF0aW9uc0xpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShleHBhbmRlciwge2F0dHJpYnV0ZXM6IHRydWV9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZUV4cGFuZGVycygpIHtcbiAgICAgIC8vIE9wZW4gLyBjbG9zZSBlYWNoIGV4cGFuZGVyIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlLlxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMub3BlbkV4cGFuZGVyKGV4cGFuZGVyKSA6IHRoaXMuY2xvc2VFeHBhbmRlcihleHBhbmRlcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gVG9nZ2xlIHN0YXRlIGZsYWcuXG4gICAgICB0aGlzLnN0YXRlT3BlbiA9ICF0aGlzLnN0YXRlT3BlbjtcblxuICAgICAgLy8gVG9nZ2xlIGJ1dHRvbiB0ZXh0LlxuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIERldGVybWluZXMgd2hldGhlciBhbGwgZXhwYW5kZXJzIGhhdmUgYmVlbiBvcGVuZWQgb3IgY2xvc2VkIGFuZCB1cGRhdGVzXG4gICAgICogIHRoZSBzdGF0ZSBmbGFnIGFuZCB0b2dnbGUgbGluayB0ZXh0IGFjY29yZGluZ2x5LlxuICAgICAqXG4gICAgICogIEZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIE11dGF0aW9uT2JzZXJ2ZXIgZGV0ZWN0cyBhIGNoYW5nZSBpbiBleHBhbmRlclxuICAgICAqICBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgdXBkYXRlVG9nZ2xlU3RhdGUoKSB7XG4gICAgICBsZXQgYWxsT3BlbiA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIWV4cGFuZGVyLmhhc0F0dHJpYnV0ZSgnb3BlbicpID8gYWxsT3BlbiA9IGZhbHNlIDogYWxsT3BlbiA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgIWFsbE9wZW4gPyB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlIDogdGhpcy5zdGF0ZU9wZW4gPSB0cnVlO1xuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYW4gZXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxuICAgICAqL1xuICAgIG9wZW5FeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICBleHBhbmRlci5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnb3BlbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgY2xvc2VFeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBleHBhbmRlci5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLXRhYmxlLWV4cGFuZGVyJyldLmZvckVhY2godGFibGVDYXJkID0+IG5ldyBUYWJsZUNhcmQodGFibGVDYXJkKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSGVhZGluZ3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBmb3VuZEhlYWRpbmdzID0gW11cbiAgICAgIGlmIChoZWFkaW5ncykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhlYWRpbmdzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWFuY2hvci1saW5rcycpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rcyhhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogUmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcgdGFibGUgb2YgY29udGVudHMgbGlua3MuXG4gICovXG4gIGNsYXNzIFRhYmxlQ29udGVudHMge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzID0gdGFibGVDb250ZW50cztcblxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XG4gICAgICB0aGlzLmhlYWRpbmdTZWxlY3RvciA9ICdoMi50b2NfaDInO1xuICAgICAgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IgPSAnaDMudG9jX2gzJztcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xuXG4gICAgICAvLyBBbmNob3IgbGlua3MgbWFjcm8gc2V0cyB0aGlzIGRhdGEgYXR0cmlidXRlIHdoZW4gVE9DIGlzIGZsYWdnZWQgYXMgdHJ1ZS5cbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBidWlsZCBUT0MgbGlua3MgaWYgSDIgYW5jaG9ycyBmb3VuZCBvbiBwYWdlLlxuICAgICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5oZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmICFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gyJykpIHtcbiAgICAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSAnSDMnICYmIHNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDMnKSkge1xuXG4gICAgICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDMgZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1YkhlYWRpbmdJZCA9IGhlYWRpbmdJZCArICctJyArIGNvdW50O1xuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgc3ViSGVhZGluZ0lkKVxuXG4gICAgICAgICAgICBsaW5rLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoc2libGluZyksXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSGVhZGluZ0lkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZWl0aGVyIHRoZSBzaG9ydCBvciBsb25nIHRpdGxlIG9mIHRoZSBoZWFkaW5nIGJhc2VkIG9uIGRhdGEgYXR0ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgaGVhZGluZ1xuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpIHtcbiAgICAgIGxldCB0aXRsZTtcblxuICAgICAgaWYgKGhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLXNob3J0LXRpdGxlJykpIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmRhdGFzZXQuc2hvcnRUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5pbm5lclRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIFRPQyBtYXJrdXAgYW5kIGFwcGVuZHMgdG8gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldFRvY0xpc3RNYXJrdXAobGlua3MpIHtcbiAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGFzLWNoaWxkcmVuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1hbmNob3JsaW5rc19fd3JhcHBlcicpXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaGV2cm9uU1ZHKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENpcmNsZVNWRygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcblxuICAgICAgICBsZXQgcGFyZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcGFyZW50TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBsaW5rLmFuY2hvcik7XG4gICAgICAgIHBhcmVudExpbmsuaW5uZXJUZXh0ID0gbGluay50aXRsZTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcmVudExpbmspO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICBsaW5rLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBjaGlsZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGl0ZW0uYW5jaG9yKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgICAgICBjaGlsZEl0ZW0uYXBwZW5kKGNoaWxkTGluayk7XG4gICAgICAgICAgICBjaGlsZExpc3QuYXBwZW5kKGNoaWxkSXRlbSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY2hpbGRMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMuYXBwZW5kKGxpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBiYWNrIHRvIHRvcCBsaW5rIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZUJhY2tUb1RvcExpbmsoKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWJhY2stdG8tdG9wJyk7XG5cbiAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyNtYWluY29udGVudCcpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQmFjayB0byB0b3AnKTtcbiAgICAgIGFuY2hvci5pbm5lclRleHQgPSAnQmFjayB0byB0b3AnO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kKGFuY2hvcik7XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBiYWNrIHRvIHRvcCBsaW5rcyBhYm92ZSBUT0MgaGVhZGluZ3Mgd2l0aGluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIEF2b2lkcyBkdXBsaWNhdGUgYmFjayB0byB0b3AgbGlua3Mgd2hlbiBzdGlja3kgaXMgcHJlc2VudC5cbiAgICAgICAgaWYgKCFoZWFkaW5nLmhhc0F0dHJpYnV0ZSgnZGF0YS1oYXMtdG9wLWxpbmsnKSkge1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUJhY2tUb1RvcExpbmsoKTtcbiAgICAgICAgICBoZWFkaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGhlYWRpbmcpO1xuICAgICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdkYXRhLWhhcy10b3AtbGluaycsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNoZXZyb24gU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2hldnJvblNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjhcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxwYXRoIGQ9XCJNOC4wMDAxOSA2Ljk5OTk0QzguMDAwOTUgNy4xMzE1NSA3Ljk3NTcyIDcuMjYyMDEgNy45MjU5NiA3LjM4Mzg1QzcuODc2MTkgNy41MDU2OSA3LjgwMjg3IDcuNjE2NSA3LjcxMDE5IDcuNzA5OTRMMi43MTAxOSAxMi43MDk5QzIuNjE2OTUgMTIuODAzMiAyLjUwNjI2IDEyLjg3NzEgMi4zODQ0MyAxMi45Mjc2QzIuMjYyNjEgMTIuOTc4MSAyLjEzMjA0IDEzLjAwNCAyLjAwMDE5IDEzLjAwNEMxLjg2ODMzIDEzLjAwNCAxLjczNzc2IDEyLjk3ODEgMS42MTU5NCAxMi45Mjc2QzEuNDk0MTEgMTIuODc3MSAxLjM4MzQyIDEyLjgwMzIgMS4yOTAxOCAxMi43MDk5QzEuMTk2OTUgMTIuNjE2NyAxLjEyMjk5IDEyLjUwNiAxLjA3MjUzIDEyLjM4NDJDMS4wMjIwNiAxMi4yNjI0IDAuOTk2MDk0IDEyLjEzMTggMC45OTYwOTQgMTEuOTk5OUMwLjk5NjA5NCAxMS44NjgxIDEuMDIyMDYgMTEuNzM3NSAxLjA3MjUzIDExLjYxNTdDMS4xMjI5OSAxMS40OTM5IDEuMTk2OTUgMTEuMzgzMiAxLjI5MDE4IDExLjI4OTlMNS41OTAxOSA2Ljk5OTk0TDEuMjkwMTggMi43MDk5NEMxLjEwMTg4IDIuNTIxNjQgMC45OTYwOTQgMi4yNjYyNCAwLjk5NjA5NCAxLjk5OTk0QzAuOTk2MDk0IDEuNzMzNjQgMS4xMDE4OCAxLjQ3ODI1IDEuMjkwMTggMS4yODk5NEMxLjQ3ODQ5IDEuMTAxNjQgMS43MzM4OCAwLjk5NTg1IDIuMDAwMTkgMC45OTU4NUMyLjI2NjQ5IDAuOTk1ODUgMi41MjE4OCAxLjEwMTY0IDIuNzEwMTkgMS4yODk5NEw3LjcxMDE5IDYuMjg5OTRDNy44MDI4NyA2LjM4MzM4IDcuODc2MTkgNi40OTQyIDcuOTI1OTYgNi42MTYwM0M3Ljk3NTcyIDYuNzM3ODcgOC4wMDA5NSA2Ljg2ODMzIDguMDAwMTkgNi45OTk5NFpcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaXJjbGUgU1ZHLlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgZ2V0Q2lyY2xlU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiM1wiIGhlaWdodD1cIjNcIiB2aWV3Qm94PVwiMCAwIDMgM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xuICAgICAgICAgICAgICAgJzxjaXJjbGUgY3g9XCIxLjVcIiBjeT1cIjEuNVwiIHI9XCIxLjVcIiBmaWxsPVwiYmxhY2tcIi8+JyArXG4gICAgICAgICAgICAgJzwvc3ZnPic7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlZS1hbmNob3JsaW5rcycpXS5mb3JFYWNoKHRhYmxlQ29udGVudHMgPT4gbmV3IFRhYmxlQ29udGVudHModGFibGVDb250ZW50cykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIEZpbHRlclxuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlcicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgICovXG4gIGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgdGhpcy5jaGVja2JveGVzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgdGhpcy5ncm91cHMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cCcpXTtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fc3VibWl0Jyk7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyldO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWVsZHNldF9fbGVnZW5kJyk7XG4gICAgICAgIGlmIChsZWdlbmQpIHtcbiAgICAgICAgICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGVHcm91cChldnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy5jbGVhckNoZWNrYm94ZXMoZXZ0KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci0tanMnKTtcblxuICAgICAgLy8gQ2xvc2UgZ3JvdXBzXG4gICAgICAvLyB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IGdyb3VwLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpKTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSh0b2dnbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgaWYgKHRoaXMuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlR3JvdXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGV2dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJDaGVja2JveGVzKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBldnQudGFyZ2V0O1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFsuLi50b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuXG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KTtcbiAgICB9XG5cbiAgICB0b2dnbGVDbGVhckxpbmtWaXNpYmlsaXR5KHRvZ2dsZUxpbmspIHtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBbLi4udG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3hlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcbiAgICAgICAgICB0b2dnbGVMaW5rLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXInKV0uZm9yRWFjaChmaWx0ZXIgPT4gbmV3IEZpbHRlcihmaWx0ZXIpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogRmlsdGVyVGFnXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1maWx0ZXItdGFnJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBGaWx0ZXJUYWcge1xuICAgIGNvbnN0cnVjdG9yKHRhZykge1xuICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICB0aGlzLmljb24gPSB0YWcucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlci10YWdfX2ljb24nKTtcblxuICAgICAgdGhpcy5zZXRVcCgpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy50YWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB0aGlzLnJlbW92ZUZpbHRlcihldnQpKTtcbiAgICB9XG5cbiAgICByZW1vdmVGaWx0ZXIoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdmFsdWU9JyR7dGhpcy50YWcuZGF0YXNldC5maWx0ZXJ9J11gKS5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja2JveC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgfSk7XG5cbiAgICAgIGV2dC50YXJnZXQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc2V0VXAoKSB7XG4gICAgICB0aGlzLnRhZy5jbGFzc0xpc3QuYWRkKCduaHN1ay1maWx0ZXItdGFnLS1qcycpO1xuXG4gICAgICBpZiAodGhpcy5pY29uKSB7XG4gICAgICAgIHRoaXMuaWNvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyLXRhZycpXS5mb3JFYWNoKHRhZyA9PiBuZXcgRmlsdGVyVGFnKHRhZykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIExpc3RpbmdcbiAgICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1saXN0aW5nJyBhbmQgJy5oZWUtbGlzdGluZ3MnIGFyZSBwYXNzZWRcbiAgICogaW50byB0aGlzIGNsYXNzLlxuICAgKlxuICAgKiBAdG9kbyBSZW1vdmUgbGVnYWN5IHJlZmVyZW5jZXMgdG8gLm5oc3VrLWxpc3RpbmcgYW5kIGxvb3BzIG9uY2UgYWxsIG5ld1xuICAgKiBjb2xsZWN0aW9uIHRlbXBsYXRlcyBoYXZlIGJlZW4gaW1wbGVtZW50ZWQuXG4gICAqL1xuICBjbGFzcyBMaXN0aW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcblxuICAgICAgWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmdfX2ZpbHRlcl9fc29ydCwgLm5oc3VrLWxpc3RpbmdfX3NvcnQnKV0uZm9yRWFjaChmb3JtRWxlbWVudCA9PiB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpO1xuICAgICAgICB0aGlzLnRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyhmb3JtRWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCkge1xuICAgICAgaWYgKGZvcm1FbGVtZW50KSB7XG4gICAgICAgIFsuLi5mb3JtRWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2VsZWN0JyldLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhmb3JtRWxlbWVudCkpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyhmb3JtRWxlbWVudCkge1xuICAgICAgaWYgKGZvcm1FbGVtZW50KSB7XG4gICAgICAgIFsuLi5mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmdfX2ZpbHRlcl9fc3VibWl0LCAubmhzdWstbGlzdGluZ19fc29ydF9fc3VibWl0JyldLmZvckVhY2goc3VibWl0ID0+IHtcbiAgICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgICBzdWJtaXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUmVzdWx0cyhmb3JtRWxlbWVudCkge1xuICAgICAgZm9ybUVsZW1lbnQuc3VibWl0KCk7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZywgLm5oc3VrLWxpc3RpbmcnKV0uZm9yRWFjaChsaXN0aW5nID0+IG5ldyBMaXN0aW5nKGxpc3RpbmcpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3MgQ29va2llcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAvLyBiYW5uZXJcbiAgICAgIHRoaXMudXNlQ29va2llcyA9ICcnXG4gICAgICB0aGlzLmJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1jb29raWUtYmFubmVyJylcbiAgICAgIHRoaXMuc2hvd0Nvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd0Nvb2tpZXMnKVxuICAgICAgdGhpcy5yZW1vdmVDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbW92ZUNvb2tpZXMnKVxuICAgICAgdGhpcy5ob3N0ID0gdGhpcy5nZXRIb3N0KClcblxuICAgICAgdGhpcy5jb29raWVTdGF0dXMoKVxuICAgICAgdGhpcy5zZXRDb29raWVzKClcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgICAvLyBwb2xpY3kgcGFnZVxuICAgICAgdGhpcy5TdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWtfX2Nvb2tpZVN0YXR1cycpXG4gICAgICB0aGlzLkluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzSW4nKVxuICAgICAgdGhpcy5PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNPdXQnKVxuXG4gICAgICB0aGlzLnRvZ2dsZVN0YXR1cygpXG4gICAgfVxuXG4gICAgY29va2llU3RhdHVzKCl7XG4gICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKVxuICAgICAgY29va2llcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGMubWF0Y2gobmV3IFJlZ0V4cCgnKF58ICljb29raWVfY29uc2VudChbXjtdKyknKSlcbiAgICAgICAgaWYobWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBjLnNwbGl0KFwiPVwiKVsxXVxuICAgICAgICAgIHRoaXMudXNlQ29va2llcyA9IHN0YXR1c1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGdldEhvc3QoKXtcbiAgICAgIGNvbnN0IGhvc3QgPSB3aW5kb3cubG9jYXRpb24uaG9zdC50b1N0cmluZygpLnNwbGl0KFwiOlwiKVswXVxuICAgICAgcmV0dXJuIGhvc3RcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmKHRoaXMuc2hvd0Nvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5zaG93Q29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnNob3dDb29raWUpXG4gICAgICB9XG4gICAgICBpZih0aGlzLnJlbW92ZUNvb2tpZXMpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMucmVtb3ZlQ29va2llKVxuICAgICAgfVxuICAgIH1cblxuICAgIGJhbm5lclNob3coKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJhbm5lckhpZGUoKSB7XG4gICAgICBpZih0aGlzLmJhbm5lcikge1xuICAgICAgICB0aGlzLmJhbm5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDb29raWVzKCkge1xuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSAnJykge1xuICAgICAgICAgIHRoaXMuYmFubmVyU2hvdygpXG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzQWNjZXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfYWNjZXB0X2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0FjY2VwdCkge1xuICAgICAgICAgICAgYW5hbHl0aWNzQWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYW5hbHl0aWNzRGVjbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2RlY2xpbmVfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzRGVjbGluZSkge1xuICAgICAgICAgICAgYW5hbHl0aWNzRGVjbGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9dHJ1ZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICBub0Nvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD1mYWxzZTsgZG9tYWluPSR7dGhpcy5ob3N0fTsgbWF4LWFnZT03Nzc2MDAwYFxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgICB0b2dnbGVTdGF0dXMoKSB7XG4gICAgICBpZih0aGlzLlN0YXR1cyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc091dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy51c2VDb29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzSW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMubm9Db29raWUoKVxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gXCJmYWxzZVwiIHx8IHRoaXMudXNlQ29va2llcyA9PT0gJycgKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLkluKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5PdXQpXG4gICAgICAgICAgdGhpcy5kaXNwbGF5QmxvY2sodGhpcy5JbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BsYXlCbG9jayhpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIilcbiAgICB9XG5cbiAgICBkaXNwbGF5Tm9uZShpdGVtKSB7XG4gICAgICBpdGVtLmZvckVhY2goZSA9PiBlLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpXG4gICAgfVxuXG4gICAgLy8gcmVkdW5kYW50IGJ1dCB1c2VmdWxcbiAgICBzaG93Q29va2llKCkge1xuICAgICAgY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2tpZXMnKVxuICAgICAgb3V0cHV0LnRleHRDb250ZW50ID0gJz4gJyArIGRvY3VtZW50LmNvb2tpZVxuICAgIH1cbiAgICBcbiAgICByZW1vdmVDb29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZV9jb25zZW50PWZhbHNlOyBtYXgtYWdlPTBcIlxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG5cbiAgfVxuXG4gIG5ldyBDb29raWVzKGRvY3VtZW50KVxufSIsIi8qKlxuKiBTdWJOYXZcbiogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1zdWJuYXYnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4qL1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIHN1Yk5hdiB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lclxuICAgICAgdGhpcy50b2dnbGVMaW5rID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignYScpXG4gICAgICB0aGlzLnBhcmVudExpc3QgPSB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZUxpbmspIHtcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGV2ZW50ID0+IHRoaXMudG9nZ2xlTWVudShldmVudCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTWVudShldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlU3RhdGUoKXtcbiAgICAgIGNvbnN0IGFjdGl2ZUVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBhY3RpdmVFbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBpZihlbGVtICE9IHRoaXMuY29udGFpbmVyKXtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgICBlbGVtLnRvZ2dsZUF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGlmKGFjdGl2ZUVsZW1zLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3RhdGUoKVxuICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLmNvbnRhaW5lciwgXCJpcy1hY3RpdmVcIilcbiAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKHRoaXMuY29udGFpbmVyLCBcImFyaWEtZXhwYW5kZWRcIilcbiAgICB9XG5cbiAgICB0b2dnbGVDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgICAgIGlmICghZWxlbWVudCB8fCAhY2xhc3NOYW1lKSByZXR1cm5cbiAgICAgIGNvbnN0IGhhc0NsYXNzID0gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICAgICAgaWYgKGhhc0NsYXNzKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUF0dHJpYnV0ZShlbGVtZW50LCBhdHRyKSB7XG4gICAgICAvLyBSZXR1cm4gd2l0aG91dCBlcnJvciBpZiBlbGVtZW50IG9yIGF0dHIgYXJlIG1pc3NpbmdcbiAgICAgIGlmICghZWxlbWVudCB8fCAhYXR0cikgcmV0dXJuXG4gICAgICAvLyBUb2dnbGUgYXR0cmlidXRlIHZhbHVlLiBUcmVhdCBubyBleGlzdGluZyBhdHRyIHNhbWUgYXMgd2hlbiBzZXQgdG8gZmFsc2VcbiAgICAgIGNvbnN0IHZhbHVlID0gKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpID09PSAndHJ1ZScpID8gJ2ZhbHNlJyA6ICd0cnVlJ1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstc3VibmF2JyldLmZvckVhY2goc3VibmF2ID0+IG5ldyBzdWJOYXYoc3VibmF2KSlcblxuICAvKiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSkgKi9cblxuICBjb25zdCBjbG9zZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLW1lbnVcIik7XG5cbiAgY2xvc2VNZW51ICYmIGNsb3NlTWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdXNlcklucHV0KGV2ZW50KVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB1c2VySW5wdXQpIFxuICBcbiAgZnVuY3Rpb24gdXNlcklucHV0KGV2ZW50KSB7XG4gICAgLy8gY2xvc2UgbWVudSBpZiBjbGlja2luZyBvdXRzaWRlXG4gICAgY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgaWYob3Blbk1lbnUpe1xuICAgICAgY29uc3QgaXNOb3RNZW51ID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuTWVudVxuICAgICAgY29uc3QgaXNOb3RNZW51QnV0dG9uID0gZXZlbnQudGFyZ2V0ICE9PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpXG4gICAgICBjb25zdCBpc01lbnVDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi5qcy1zaG93XCIpXG4gICAgICBpZihpc05vdE1lbnUgJiYgaXNOb3RNZW51QnV0dG9uICYmICFpc01lbnVDaGlsZCl7XG4gICAgICAgIG9wZW5NZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zaG93XCIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNsb3NlIHN1YiBuYXYgaWYgY2xpY2tpbmcgYW55d2hlcmUgb24gdGhlIGRvY3VtZW50IGV4Y2VwdCB0aGUgb3BlbiBvciBhIG5ldyBzdWJuYXZcbiAgICBjb25zdCBvcGVuU3ViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgaWYob3BlblN1Yil7XG4gICAgICBjb25zdCBpc05vdFN1YiA9IGV2ZW50LnRhcmdldCAhPT0gb3BlblN1YlxuICAgICAgY29uc3QgaXNTdWJDaGlsZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGlmKGlzTm90U3ViICYmICFpc1N1YkNoaWxkKXtcbiAgICAgICAgb3BlblN1Yi5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLWxpc3RcIikuY2xhc3NMaXN0LnJlbW92ZShcInN1Ym5hdi1vcGVuXCIpXG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBOSFNVSy1IRUUgQ29tcG9uZW50c1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvY29va2llcy9jb29raWVzJztcbmltcG9ydCBTdWJOYXYgZnJvbSAnLi9ibG9ja3Mvc2NhZmZvbGRpbmcvaGVhZGVyL25hdmlnYXRpb24vc3VibmF2JztcblxuLy8gSEVFIENvbXBvbmVudHNcbmltcG9ydCBBbmNob3JMaW5rcyBmcm9tICcuL2Jsb2Nrcy9jb250ZW50L3NpZGViYXIvYW5jaG9ybGlua3MvYW5jaG9ybGlua3MnO1xuaW1wb3J0IEFuY2hvckxpbmtzU3RpY2t5IGZyb20gJy4vYmxvY2tzL2NvbnRlbnQvZm9vdGVyL2FuY2hvcmxpbmtzLXN0aWNreS9hbmNob3JsaW5rcy1zdGlja3knO1xuaW1wb3J0IFRhYmxlQ29udGVudHMgZnJvbSAnLi9ibG9ja3MvY29udGVudC9zaWRlYmFyL2FuY2hvcmxpbmtzL3RvYyc7XG5pbXBvcnQgTGlzdGluZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZyc7XG5pbXBvcnQgTWVkaWEgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLW1lZGlhL21lZGlhJztcbmltcG9ydCBOYXZNYXAgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLW5hdm1hcC9uYXZtYXAnO1xuaW1wb3J0IE5ld3NsZXR0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlcic7XG4vL2ltcG9ydCBEZXRhaWxzQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtZGV0YWlsc2NhcmQvZGV0YWlsc2NhcmQnO1xuaW1wb3J0IFN1bW1hcnlDYXJkIGZyb20gXCIuL2Jsb2Nrcy9jb250ZW50L21haW4vY2FyZC0tc3VtbWFyeS9zdW1tYXJ5XCI7XG5pbXBvcnQgVGFicyBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtdGFicy90YWJzJztcbmltcG9ydCBUYWJsZUNhcmQgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL3RhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyJztcbi8vaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS10aW1lbGluZS90aW1lbGluZSc7XG5cbi8vIFVuc29ydGVkIGNvbXBvbmVudHNcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyJztcbmltcG9ydCBGaWx0ZXJUYWcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnJztcblxuLy9pbXBvcnQgJy4vcG9seWZpbGxzJztcblxuLy8gSW5pdGlhbGl6ZSBjb21wb25lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBUYWJzKCk7XG4gIEFuY2hvckxpbmtzKCk7XG4gIEFuY2hvckxpbmtzU3RpY2t5KCk7XG4gIENvb2tpZXMoKTtcbiAgRmlsdGVyKCk7XG4gIEZpbHRlclRhZygpO1xuICBMaXN0aW5nKCk7XG4gIE1lZGlhKCk7XG4gIE5hdk1hcCgpO1xuICBTdWJOYXYoKTtcbiAgTmV3c2xldHRlcigpO1xuICBTdW1tYXJ5Q2FyZCgpO1xuICBUYWJsZUNvbnRlbnRzKCk7XG4gIFRhYmxlQ2FyZCgpO1xufSk7XG4iXSwibmFtZXMiOlsiVHJhbnNjcmlwdCIsImNvbnRhaW5lciIsInRvZ2dsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJ0b2dnbGV0cmFuc2NyaXB0IiwiaXNDb2xsYXBzZWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjb250YWlucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRyYW5zY3JpcHQiLCJOYXZNYXAiLCJtYXAiLCJzdmciLCJyZWdpb25zIiwibGlzdCIsImFkZExpbmtzVG9NYXAiLCJjbGVhblN0eWxlIiwibWFwRXZlbnRMaXN0ZW5lcnMiLCJsaW5rRXZlbnRMaXN0ZW5lcnMiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlZ2lvbiIsInRoaXNDb3VudGVycGFydCIsIm1hcENvdW50ZXJwYXJ0IiwiaWQiLCJ0aGlzSHJlZiIsImhyZWYiLCJ0aGlzVGl0bGUiLCJjaGlsZHJlbiIsIndyYXBMaW5rIiwiZWxlbWVudCIsIm1hcEluIiwibWFwT3V0IiwiZXZlbnQiLCJtYXBDbGljayIsIml0ZW0iLCJsaW5rRXZlbnQiLCJ0YXJnZXQiLCJvYmoiLCJwYXJlbnRFbGVtZW50Iiwic3R5bGUiLCJtb3ZlVG9Ub3AiLCJ0aGlzTGluayIsInByZXZlbnREZWZhdWx0IiwidGhpc01hcENvdW50ZXJwYXJ0IiwiY2xvc2VzdCIsImNsaWNrIiwidGhpc0lkIiwiZmluZCIsImRpcmVjdGlvbiIsInR5cGUiLCJsaW5rQ291bnRlcnBhcnQiLCJnZXRTVkdEb2N1bWVudCIsIk5ld3NsZXR0ZXIiLCJuZXdzbGV0dGVyIiwicmVxdWlyZWRJbnB1dHMiLCJlcnJvcnMiLCJpbml0Iiwid2luZG93IiwicmVjYXB0Y2hhQ2FsbGJhY2siLCJyZXNldEZvcm0iLCJhZGRFdmVudHMiLCJpbnB1dCIsImMiLCJ2YWxpZGF0ZSIsInRhcmdldEVycm9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJuYW1lIiwidGFyZ2V0U3VtbWFyeUVycm9yIiwiZXJyb3JFbXB0eSIsImVycm9yRW1haWwiLCJlcnJvckNvbnNlbnQiLCJ1cGRhdGVTdW1tYXJ5IiwiZXJyb3JTdW1tYXJ5IiwibGVuZ3RoIiwiZGlzcGxheSIsImlzRW1wdHkiLCJ2YWx1ZSIsInNob3dFcnJvciIsImhpZGVFcnJvciIsInJlIiwidGVzdCIsImNoZWNrZWQiLCJmaWx0ZXIiLCJwdXNoIiwic3RyIiwidHJpbSIsImVycm9yIiwiZXJyb3JDbGFzc2VzIiwiZXJyb3JjbGFzcyIsImVycm9yc3VtbWFyeSIsImVycm9yU3VtbWFyeUl0ZW1zIiwic3VtbWFyeWl0ZW0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJUYWJzIiwidGFiY29tcG9uZW50IiwiaSIsInRhYnMiLCJ0YWJMaXN0IiwidGFiIiwiY2hhbmdlVGFicyIsInRhYkZvY3VzIiwiZSIsImtleUNvZGUiLCJzZXRBdHRyaWJ1dGUiLCJmb2N1cyIsInBhcmVudCIsInBhcmVudE5vZGUiLCJncmFuZHBhcmVudCIsInNlbGVjdGVkIiwiaXNfbW9iaWxlIiwicmVtb3ZlU2VsZWN0ZWQiLCJoaWRlVGFicyIsInNldFNlbGVjdGVkIiwic2hvd1NlbGVjdGVkIiwiZWxlIiwidCIsInAiLCJnZXRBdHRyaWJ1dGUiLCJBbmNob3JMaW5rc1N0aWNreSIsInRvZ2dsZUJ0biIsInN0aWNreUFuY2hvckxpbmtzIiwic2lkZWJhckFuY2hvckxpbmtzIiwidG9nZ2xlU3RpY2t5VG9vbGJhciIsInRvZ2dsZVN0aWNreUFuY2hvckxpbmtzIiwidGFnTmFtZSIsImlzRWxlbWVudEluVmlld3BvcnQiLCJib3VuZGluZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsZW1lbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJlbGVtZW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsInRvcCIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiYW5jaG9yTGlua3NTdGlja3kiLCJTdW1tYXJ5Q2FyZCIsInN1bW1hcnlDYXJkIiwidG9nZ2xlTGluayIsInRvZ2dsZVN1bW1hcnkiLCJUYWJsZUNhcmQiLCJ0YWJsZUNhcmQiLCJleHBhbmRlcnMiLCJzdGF0ZU9wZW4iLCJpbm5lclRleHQiLCJkYXRhc2V0IiwibGFiZWxPcGVuIiwiaW5pdEV4cGFuZGVyT2JzZXJ2ZXIiLCJ0b2dnbGVFeHBhbmRlcnMiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnNMaXN0IiwibXV0YXRpb24iLCJhdHRyaWJ1dGVOYW1lIiwidXBkYXRlVG9nZ2xlU3RhdGUiLCJleHBhbmRlciIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwib3BlbkV4cGFuZGVyIiwiY2xvc2VFeHBhbmRlciIsImxhYmVsQ2xvc2UiLCJhbGxPcGVuIiwiaGFzQXR0cmlidXRlIiwic3VtbWFyeSIsInRleHQiLCJBbmNob3JMaW5rcyIsImFuY2hvckxpbmtzIiwiaGlkZGVuIiwiZm91bmRIZWFkaW5ncyIsImZpbmRIZWFkaW5ncyIsImhlYWRpbmdzIiwiYWRkQW5jaG9yc1RvUGFnZSIsImhlYWRpbmciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzZWxlY3RvciIsInNvbWUiLCJlbCIsInVsIiwiY3JlYXRlRWxlbWVudCIsImZvdW5kSGVhZGluZyIsImFuY2hvcmxpbmtzaWdub3JlIiwiYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uIiwibGkiLCJhIiwiaGlkZGVuRWxlbWVudHMiLCJUYWJsZUNvbnRlbnRzIiwidGFibGVDb250ZW50cyIsImNvbnRhaW5lclNlbGVjdG9yIiwiaGVhZGluZ1NlbGVjdG9yIiwic3ViSGVhZGluZ1NlbGVjdG9yIiwiaGVhZGluZ1ByZWZpeCIsImxpbmtzIiwiY3JlYXRlVG9jTGlua3MiLCJzZXRUb2NMaXN0TWFya3VwIiwic2xpY2UiLCJjYWxsIiwic2V0QmFja1RvVG9wTGlua3MiLCJzdWJIZWFkaW5ncyIsImluZGV4IiwiaGVhZGluZ0lkIiwibGluayIsInRpdGxlIiwiZ2V0SGVhZGluZ1RpdGxlIiwiYW5jaG9yIiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImNvdW50Iiwic3ViSGVhZGluZ0lkIiwic2hvcnRUaXRsZSIsImxpc3RJdGVtIiwic3BhbiIsImdldENoZXZyb25TVkciLCJnZXRDaXJjbGVTVkciLCJhcHBlbmQiLCJwYXJlbnRMaW5rIiwiY2hpbGRMaXN0IiwiY2hpbGRJdGVtIiwiY2hpbGRMaW5rIiwiY3JlYXRlQmFja1RvVG9wTGluayIsImluc2VydEJlZm9yZSIsIkZpbHRlciIsImNoZWNrYm94ZXMiLCJncm91cHMiLCJzdWJtaXQiLCJjbGVhclRvZ2dsZSIsInNldFVwIiwiY2hlY2tib3giLCJ1cGRhdGVSZXN1bHRzIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cCIsImNsZWFyQ2hlY2tib3hlcyIsInRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkiLCJjYiIsIkZpbHRlclRhZyIsInRhZyIsImljb24iLCJyZW1vdmVGaWx0ZXIiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJMaXN0aW5nIiwiZm9ybUVsZW1lbnQiLCJ0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNlbGVjdCIsImxpc3RpbmciLCJDb29raWVzIiwidXNlQ29va2llcyIsImJhbm5lciIsInNob3dDb29raWVzIiwicmVtb3ZlQ29va2llcyIsImhvc3QiLCJnZXRIb3N0IiwiY29va2llU3RhdHVzIiwic2V0Q29va2llcyIsIlN0YXR1cyIsIkluIiwiT3V0IiwidG9nZ2xlU3RhdHVzIiwiY29va2llcyIsImNvb2tpZSIsInNwbGl0IiwibWF0Y2giLCJSZWdFeHAiLCJzdGF0dXMiLCJsb2NhdGlvbiIsInRvU3RyaW5nIiwic2hvd0Nvb2tpZSIsInJlbW92ZUNvb2tpZSIsImJhbm5lclNob3ciLCJhbmFseXRpY3NBY2NlcHQiLCJiYW5uZXJIaWRlIiwidXNlQ29va2llIiwiYW5hbHl0aWNzRGVjbGluZSIsIm5vQ29va2llIiwicmVsb2FkIiwiZGlzcGxheUJsb2NrIiwiZGlzcGxheU5vbmUiLCJvdXRwdXQiLCJ0ZXh0Q29udGVudCIsInN1Yk5hdiIsInBhcmVudExpc3QiLCJ0b2dnbGVNZW51IiwiYWN0aXZlRWxlbXMiLCJlbGVtIiwidG9nZ2xlQXR0cmlidXRlIiwidG9nZ2xlQ2xhc3MiLCJoYW5kbGVTdGF0ZSIsImNsYXNzTmFtZSIsImhhc0NsYXNzIiwiYXR0ciIsInN1Ym5hdiIsImNsb3NlTWVudSIsInVzZXJJbnB1dCIsIm9wZW5NZW51IiwiaXNOb3RNZW51IiwiaXNOb3RNZW51QnV0dG9uIiwiaXNNZW51Q2hpbGQiLCJvcGVuU3ViIiwiaXNOb3RTdWIiLCJpc1N1YkNoaWxkIiwiU3ViTmF2IiwiTWVkaWEiXSwic291cmNlUm9vdCI6IiJ9