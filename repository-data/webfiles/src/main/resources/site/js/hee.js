/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/assets/components/hee/hee-anchorlinks/anchorlinks.js":
/*!******************************************************************!*\
  !*** ./app/assets/components/hee/hee-anchorlinks/anchorlinks.js ***!
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

/***/ "./app/assets/components/hee/hee-anchorlinks/toc.js":
/*!**********************************************************!*\
  !*** ./app/assets/components/hee/hee-anchorlinks/toc.js ***!
  \**********************************************************/
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
        anchor.setAttribute('href', '#publication-title');
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
          var link = _this3.createBackToTopLink();

          heading.parentNode.insertBefore(link, heading);
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
/* harmony import */ var _components_hee_hee_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hee/hee-anchorlinks/anchorlinks */ "./app/assets/components/hee/hee-anchorlinks/anchorlinks.js");
/* harmony import */ var _components_hee_hee_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hee/hee-anchorlinks/toc */ "./app/assets/components/hee/hee-anchorlinks/toc.js");
/* harmony import */ var _blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-listing/listing */ "./app/assets/hee/blocks/furniture/collections/hee-listing/listing.js");
/* harmony import */ var _components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hee/hee-media/media */ "./app/assets/components/hee/hee-media/media.js");
/* harmony import */ var _components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hee/hee-navmap/navmap */ "./app/assets/components/hee/hee-navmap/navmap.js");
/* harmony import */ var _components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hee/hee-newsletter/newsletter */ "./app/assets/components/hee/hee-newsletter/newsletter.js");
/* harmony import */ var _components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hee/hee-tabs/tabs */ "./app/assets/components/hee/hee-tabs/tabs.js");
/* harmony import */ var _blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/content/main/table-expander/table-expander */ "./app/assets/hee/blocks/content/main/table-expander/table-expander.js");
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
// NHSUK-HEE Components

 // HEE Components






 //import DetailsCard from '../components/hee/hee-detailscard/detailscard';


 //import Timeline from '../components/hee/hee-timeline/timeline';
// Unsorted components


 //import './polyfills';
// Initialize components

document.addEventListener('DOMContentLoaded', function () {
  (0,_components_hee_hee_tabs_tabs__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_components_hee_hee_anchorlinks_anchorlinks__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_scaffolding_cookies_cookies__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_components_hee_hee_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_content_main_table_expander_table_expander__WEBPACK_IMPORTED_MODULE_9__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0NBRUE7QUFFQTs7QUFDQTtDQUdBO0FBRUE7O0FBQ0F6QixRQUFRLENBQUM2RSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRGtGLEVBQUFBLHlFQUFJO0FBQ0p6SyxFQUFBQSx1RkFBVztBQUNYZ1AsRUFBQUEsK0VBQU87QUFDUDFCLEVBQUFBLDRGQUFNO0FBQ05jLEVBQUFBLGtHQUFTO0FBQ1RNLEVBQUFBLDZGQUFPO0FBQ1A4RCxFQUFBQSwyRUFBSztBQUNMNU0sRUFBQUEsNkVBQU07QUFDTjJNLEVBQUFBLHdGQUFNO0FBQ05ySyxFQUFBQSxxRkFBVTtBQUNWNUYsRUFBQUEsK0VBQWE7QUFDYnlKLEVBQUFBLDhGQUFTO0FBQ1YsQ0FiRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLWFuY2hvcmxpbmtzL3RvYy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW1lZGlhL21lZGlhLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9jb21wb25lbnRzL2hlZS9oZWUtbmF2bWFwL25hdm1hcC5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlci5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLXRhYnMvdGFicy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9jb250ZW50L21haW4vdGFibGUtZXhwYW5kZXIvdGFibGUtZXhwYW5kZXIuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtZmlsdGVydGFnL2ZpbHRlcnRhZy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWxpc3RpbmcvbGlzdGluZy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9jb29raWVzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3Mvc2NhZmZvbGRpbmcvaGVhZGVyL25hdmlnYXRpb24vc3VibmF2LmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9oZWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBBbmNob3JMaW5rc1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstYW5jaG9yLWxpbmtzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBBbmNob3JMaW5rcyB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yTGlua3MpIHtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MgPSBhbmNob3JMaW5rcztcblxuICAgICAgaWYgKHRoaXMuYW5jaG9yTGlua3MuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mb3VuZEhlYWRpbmdzID0gdGhpcy5maW5kSGVhZGluZ3MoYW5jaG9yTGlua3MuZGF0YXNldC5oZWFkaW5ncyk7XG5cbiAgICAgIGlmICh0aGlzLmZvdW5kSGVhZGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWRkQW5jaG9yc1RvUGFnZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kSGVhZGluZ3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBmb3VuZEhlYWRpbmdzID0gW11cbiAgICAgIGlmIChoZWFkaW5ncykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhlYWRpbmdzKS5mb3JFYWNoKChoZWFkaW5nLCBpKSA9PiB7XG4gICAgICAgICAgaWYgKCFoZWFkaW5nLmlkKSB7XG4gICAgICAgICAgICBoZWFkaW5nLmlkID0gaGVhZGluZy5pbm5lclRleHQucmVwbGFjZSgvIC4qLywnJykucmVwbGFjZSgvW1xcblxccl0vZywnJykucmVwbGFjZSgvXFxzL2csJycpLnRvTG93ZXJDYXNlKCkraTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm91bmRIZWFkaW5ncy5wdXNoKGhlYWRpbmcpO1xuICAgICAgICB9KVxuICAgICAgfSAgICAgIFxuICAgICAgcmV0dXJuIGZvdW5kSGVhZGluZ3M7XG4gICAgfVxuXG4gICAgYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGhlYWRpbmcsIHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXS5zb21lKGVsID0+XG4gICAgICAgIGVsICE9PSBoZWFkaW5nICYmIGVsLmNvbnRhaW5zKGhlYWRpbmcpXG4gICAgICApXG4gICAgfVxuXG4gICAgYWRkQW5jaG9yc1RvUGFnZSgpIHtcbiAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MuZm9yRWFjaChmb3VuZEhlYWRpbmcgPT4ge1xuICAgICAgICBpZiAoIWZvdW5kSGVhZGluZy5kYXRhc2V0LmFuY2hvcmxpbmtzaWdub3JlXG4gICAgICAgICAgJiYgIWZvdW5kSGVhZGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXUtdmlzdWFsbHktaGlkZGVuJylcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstY2FyZF9faGVhZGluZycpXG4gICAgICAgICAgJiYgIXRoaXMuYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uKGZvdW5kSGVhZGluZywgJy5uaHN1ay1ncmlkLWNvbHVtbi1vbmUtdGhpcmQnKSlcbiAgICAgICAge1xuICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgYS5ocmVmID0gJyMnK2ZvdW5kSGVhZGluZy5pZDtcbiAgICAgICAgICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IGZvdW5kSGVhZGluZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmhzdWstdS12aXN1YWxseS1oaWRkZW5cIik7XG4gICAgICAgICAgd2hpbGUgKGhpZGRlbkVsZW1lbnRzLmxlbmd0aCA+IDApIGhpZGRlbkVsZW1lbnRzWzBdLnJlbW92ZSgpO1xuICAgICAgICAgIGEuaW5uZXJUZXh0ID0gZm91bmRIZWFkaW5nLmlubmVyVGV4dDsgLy8gc3RyaXAgdGFnc1xuICAgICAgICAgIGEuaW5uZXJIVE1MID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPGJyXFxzKltcXC9dPz4vZ2ksIFwiIFwiKTsgLy8gc3RyaXAgPGJyPlxuICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmFwcGVuZENoaWxkKHVsKTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuaGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWFuY2hvci1saW5rcycpXS5mb3JFYWNoKGFuY2hvckxpbmtzID0+IG5ldyBBbmNob3JMaW5rcyhhbmNob3JMaW5rcykpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogUmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcgdGFibGUgb2YgY29udGVudHMgbGlua3MuXG4gICovXG4gIGNsYXNzIFRhYmxlQ29udGVudHMge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDb250ZW50cykge1xuICAgICAgdGhpcy50YWJsZUNvbnRlbnRzID0gdGFibGVDb250ZW50cztcblxuICAgICAgdGhpcy5jb250YWluZXJTZWxlY3RvciA9ICcucGFnZV9fbWFpbic7XG4gICAgICB0aGlzLmhlYWRpbmdTZWxlY3RvciA9ICdoMi50b2NfaDInO1xuICAgICAgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IgPSAnaDMudG9jX2gzJztcbiAgICAgIHRoaXMuaGVhZGluZ1ByZWZpeCA9ICdoZWUtdG9jLWhlYWRpbmcnO1xuXG4gICAgICAvLyBBbmNob3IgbGlua3MgbWFjcm8gc2V0cyB0aGlzIGRhdGEgYXR0cmlidXRlIHdoZW4gVE9DIGlzIGZsYWdnZWQgYXMgdHJ1ZS5cbiAgICAgIGlmICghdGhpcy50YWJsZUNvbnRlbnRzLmhhc0F0dHJpYnV0ZSgnZGF0YS10b2MtanMnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYXR0ZW1wdCB0byBidWlsZCBUT0MgbGlua3MgaWYgSDIgYW5jaG9ycyBmb3VuZCBvbiBwYWdlLlxuICAgICAgbGV0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5oZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKGhlYWRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGxpbmsgc3RydWN0dXJlIGZyb20gRE9NIGFuZCBhcHBlbmQgZ2VuZXJhdGVkIG1hcmt1cCB0byBUT0NcbiAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgIGNvbnN0IGxpbmtzID0gdGhpcy5jcmVhdGVUb2NMaW5rcyhoZWFkaW5ncyk7XG4gICAgICB0aGlzLnNldFRvY0xpc3RNYXJrdXAobGlua3MpO1xuXG4gICAgICAvLyBCdWlsZCBiYWNrIHRvIHRvcCBsaW5rcyBhbmQgYXBwZW5kIHRvIGVhY2ggVE9DIGhlYWRpbmcgd2l0aGluIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIFdlIHNraXAgdGhlIGZpcnN0IGhlYWRpbmcgb24gdGhlIHBhZ2UuXG4gICAgICBoZWFkaW5ncyA9IFtdLnNsaWNlLmNhbGwoaGVhZGluZ3MsIDEpO1xuICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncyk7XG4gICAgICBjb25zdCBzdWJIZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5jb250YWluZXJTZWxlY3RvciArICcgJyArIHRoaXMuc3ViSGVhZGluZ1NlbGVjdG9yKTtcbiAgICAgIGlmIChzdWJIZWFkaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0QmFja1RvVG9wTGlua3Moc3ViSGVhZGluZ3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhcnJheSBvZiBoZWFkaW5nIGxpbmsgYXR0cmlidXRlcyBhbmQgdGhlaXIgY2hpbGRyZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0W119XG4gICAgICovXG4gICAgY3JlYXRlVG9jTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGxldCBsaW5rcyA9IFtdO1xuXG4gICAgICBoZWFkaW5ncy5mb3JFYWNoKChoZWFkaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkaW5nSWQgPSB0aGlzLmhlYWRpbmdQcmVmaXggKyAnLScgKyBpbmRleDtcblxuICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDIgZWxlbWVudC5cbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgaGVhZGluZ0lkKVxuXG4gICAgICAgIGxldCBsaW5rID0ge1xuICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShoZWFkaW5nKSxcbiAgICAgICAgICBhbmNob3I6IGhlYWRpbmdJZCxcbiAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2libGluZyA9IGhlYWRpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIFRyYXZlcnNlIERPTSBmb3IgSDMgZWxlbWVudHMgYWZ0ZXIgY3VycmVudCBIMiBoZWFkaW5nIGFuZCBhcHBlbmQgdG9cbiAgICAgICAgLy8gY2hpbGRyZW4gbGlua3MgYXJyYXkuXG4gICAgICAgIHdoaWxlIChzaWJsaW5nICYmICFzaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygndG9jX2gyJykpIHtcbiAgICAgICAgICBpZiAoc2libGluZy50YWdOYW1lID09PSAnSDMnICYmIHNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDMnKSkge1xuXG4gICAgICAgICAgICAvLyBTZXQgdW5pcXVlIGlkIGZvciBjdXJyZW50IGhlYWRpbmcgSDMgZWxlbWVudC5cbiAgICAgICAgICAgIGNvbnN0IHN1YkhlYWRpbmdJZCA9IGhlYWRpbmdJZCArICctJyArIGNvdW50O1xuICAgICAgICAgICAgc2libGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgc3ViSGVhZGluZ0lkKVxuXG4gICAgICAgICAgICBsaW5rLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRIZWFkaW5nVGl0bGUoc2libGluZyksXG4gICAgICAgICAgICAgIGFuY2hvcjogc3ViSGVhZGluZ0lkLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmtzLnB1c2gobGluayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGxpbmtzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgZWl0aGVyIHRoZSBzaG9ydCBvciBsb25nIHRpdGxlIG9mIHRoZSBoZWFkaW5nIGJhc2VkIG9uIGRhdGEgYXR0ci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSAgaGVhZGluZ1xuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpIHtcbiAgICAgIGxldCB0aXRsZTtcblxuICAgICAgaWYgKGhlYWRpbmcuaGFzQXR0cmlidXRlKCdkYXRhLXNob3J0LXRpdGxlJykpIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmRhdGFzZXQuc2hvcnRUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpdGxlID0gaGVhZGluZy5pbm5lclRleHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIFRPQyBtYXJrdXAgYW5kIGFwcGVuZHMgdG8gY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldFRvY0xpc3RNYXJrdXAobGlua3MpIHtcbiAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaGFzLWNoaWxkcmVuJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hlZS1hbmNob3JsaW5rc19fd3JhcHBlcicpXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hldnJvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gdGhpcy5nZXRDaGV2cm9uU1ZHKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENpcmNsZVNWRygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChzcGFuKTtcblxuICAgICAgICBsZXQgcGFyZW50TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgcGFyZW50TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycgKyBsaW5rLmFuY2hvcik7XG4gICAgICAgIHBhcmVudExpbmsuaW5uZXJUZXh0ID0gbGluay50aXRsZTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHBhcmVudExpbmspO1xuXG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgY2hpbGRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICBsaW5rLmNoaWxkcmVuLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCBjaGlsZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGl0ZW0uYW5jaG9yKTtcbiAgICAgICAgICAgIGNoaWxkTGluay5pbm5lclRleHQgPSBpdGVtLnRpdGxlO1xuXG4gICAgICAgICAgICBjaGlsZEl0ZW0uYXBwZW5kKGNoaWxkTGluayk7XG4gICAgICAgICAgICBjaGlsZExpc3QuYXBwZW5kKGNoaWxkSXRlbSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmQoY2hpbGRMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMuYXBwZW5kKGxpc3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBiYWNrIHRvIHRvcCBsaW5rIGNvbXBvbmVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIE9iamVjdFxuICAgICAqL1xuICAgIGNyZWF0ZUJhY2tUb1RvcExpbmsoKSB7XG4gICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWJhY2stdG8tdG9wJyk7XG5cbiAgICAgIGxldCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgJyNwdWJsaWNhdGlvbi10aXRsZScpO1xuICAgICAgYW5jaG9yLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnQmFjayB0byB0b3AnKTtcbiAgICAgIGFuY2hvci5pbm5lclRleHQgPSAnQmFjayB0byB0b3AnO1xuXG4gICAgICBjb250YWluZXIuYXBwZW5kKGFuY2hvcik7XG5cbiAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBiYWNrIHRvIHRvcCBsaW5rcyBhYm92ZSBUT0MgaGVhZGluZ3Mgd2l0aGluIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05vZGVMaXN0fSAgICAgIGhlYWRpbmdzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0QmFja1RvVG9wTGlua3MoaGVhZGluZ3MpIHtcbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmNyZWF0ZUJhY2tUb1RvcExpbmsoKTtcbiAgICAgICAgaGVhZGluZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rLCBoZWFkaW5nKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2hldnJvbiBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaGV2cm9uU1ZHKCkge1xuICAgICAgcmV0dXJuICc8c3ZnIHdpZHRoPVwiOFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCA4IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPHBhdGggZD1cIk04LjAwMDE5IDYuOTk5OTRDOC4wMDA5NSA3LjEzMTU1IDcuOTc1NzIgNy4yNjIwMSA3LjkyNTk2IDcuMzgzODVDNy44NzYxOSA3LjUwNTY5IDcuODAyODcgNy42MTY1IDcuNzEwMTkgNy43MDk5NEwyLjcxMDE5IDEyLjcwOTlDMi42MTY5NSAxMi44MDMyIDIuNTA2MjYgMTIuODc3MSAyLjM4NDQzIDEyLjkyNzZDMi4yNjI2MSAxMi45NzgxIDIuMTMyMDQgMTMuMDA0IDIuMDAwMTkgMTMuMDA0QzEuODY4MzMgMTMuMDA0IDEuNzM3NzYgMTIuOTc4MSAxLjYxNTk0IDEyLjkyNzZDMS40OTQxMSAxMi44NzcxIDEuMzgzNDIgMTIuODAzMiAxLjI5MDE4IDEyLjcwOTlDMS4xOTY5NSAxMi42MTY3IDEuMTIyOTkgMTIuNTA2IDEuMDcyNTMgMTIuMzg0MkMxLjAyMjA2IDEyLjI2MjQgMC45OTYwOTQgMTIuMTMxOCAwLjk5NjA5NCAxMS45OTk5QzAuOTk2MDk0IDExLjg2ODEgMS4wMjIwNiAxMS43Mzc1IDEuMDcyNTMgMTEuNjE1N0MxLjEyMjk5IDExLjQ5MzkgMS4xOTY5NSAxMS4zODMyIDEuMjkwMTggMTEuMjg5OUw1LjU5MDE5IDYuOTk5OTRMMS4yOTAxOCAyLjcwOTk0QzEuMTAxODggMi41MjE2NCAwLjk5NjA5NCAyLjI2NjI0IDAuOTk2MDk0IDEuOTk5OTRDMC45OTYwOTQgMS43MzM2NCAxLjEwMTg4IDEuNDc4MjUgMS4yOTAxOCAxLjI4OTk0QzEuNDc4NDkgMS4xMDE2NCAxLjczMzg4IDAuOTk1ODUgMi4wMDAxOSAwLjk5NTg1QzIuMjY2NDkgMC45OTU4NSAyLjUyMTg4IDEuMTAxNjQgMi43MTAxOSAxLjI4OTk0TDcuNzEwMTkgNi4yODk5NEM3LjgwMjg3IDYuMzgzMzggNy44NzYxOSA2LjQ5NDIgNy45MjU5NiA2LjYxNjAzQzcuOTc1NzIgNi43Mzc4NyA4LjAwMDk1IDYuODY4MzMgOC4wMDAxOSA2Ljk5OTk0WlwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIG1hcmt1cCBmb3IgbGlzdCBpdGVtIGNpcmNsZSBTVkcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBnZXRDaXJjbGVTVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiM1wiIHZpZXdCb3g9XCIwIDAgMyAzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXG4gICAgICAgICAgICAgICAnPGNpcmNsZSBjeD1cIjEuNVwiIGN5PVwiMS41XCIgcj1cIjEuNVwiIGZpbGw9XCJibGFja1wiLz4nICtcbiAgICAgICAgICAgICAnPC9zdmc+JztcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLWFuY2hvcmxpbmtzJyldLmZvckVhY2godGFibGVDb250ZW50cyA9PiBuZXcgVGFibGVDb250ZW50cyh0YWJsZUNvbnRlbnRzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBNZWRpYSB0cmFuc2NyaXB0XG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10cmFuc2NyaXB0JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBUcmFuc2NyaXB0IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImFcIilcblxuICAgICAgY29uc29sZS5sb2codGhpcy5jb250YWluZXIpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZ2dsZXMpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIGlmICh0aGlzLnRvZ2dsZXMpIHtcbiAgICAgICAgdGhpcy50b2dnbGVzLmZvckVhY2godG9nZ2xlID0+IHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZXRyYW5zY3JpcHQoZXZ0KSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xldHJhbnNjcmlwdCgpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKCkpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpc0NvbGxhcHNlZCgpIHtcbiAgICAgIGlmKHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcIm5oc3VrLW1lZGlhX190cmFuc2NyaXB0LWV4cGFuZGVkXCIpKXtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW1lZGlhX190cmFuc2NyaXB0JyldLmZvckVhY2godHJhbnNjcmlwdCA9PiBuZXcgVHJhbnNjcmlwdCh0cmFuc2NyaXB0KSlcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1hcFxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstcmVnaW9uJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAqL1xuICBjbGFzcyBOYXZNYXAge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgc3ZnKSB7XG4gICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgIHRoaXMuc3ZnID0gc3ZnO1xuICAgICAgdGhpcy5yZWdpb25zID0gWy4uLnN2Zy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1yZWdpb24nKV07XG4gICAgICB0aGlzLmxpc3QgPSBbLi4ubWFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyNyZWdpb25MaXN0IGxpIGEnKV07XG5cbiAgICAgIHRoaXMuYWRkTGlua3NUb01hcCgpO1xuICAgICAgdGhpcy5jbGVhblN0eWxlKCk7XG4gICAgICB0aGlzLm1hcEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmxpbmtFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNsZWFuU3R5bGUoKXtcbiAgICAgIHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJykuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgIC5zdDB7ZmlsbDojMDA1RUI4O3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuc3Qxe2ZpbGw6I0FFQjdCRDtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC41O3N0cm9rZS1taXRlcmxpbWl0OjEwO31cbiAgICAgICAgLmhvdmVyICoge3N0cm9rZTojZmZlYjNiO3N0cm9rZS13aWR0aDogNjtzdHJva2UtbWl0ZXJsaW1pdDogMTt9XG4gICAgICAgIC5mb2N1cyAuc3QwIHtmaWxsOiNmZmViM2I7c3Ryb2tlOiMyMTJiMzI7fVxuICAgICAgICAuZm9jdXMgKiB7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgIGApKVxuICAgIH1cblxuICAgIGFkZExpbmtzVG9NYXAoKXtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKHJlZ2lvbiA9PiB7XG4gICAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQocmVnaW9uLmlkKVxuICAgICAgICBjb25zdCB0aGlzSHJlZiA9ICh0aGlzQ291bnRlcnBhcnQuaHJlZik/IHRoaXNDb3VudGVycGFydC5ocmVmIDogXCIvXCJcbiAgICAgICAgY29uc3QgdGhpc1RpdGxlID0gKHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwpPyB0aGlzQ291bnRlcnBhcnQuaW5uZXJIVE1MIDogXCJcIlxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlZ2lvbi5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IHdyYXBMaW5rID0gYDxhIHhsaW5rOmhyZWY9XCIke3RoaXNIcmVmfVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgICAgIDx0aXRsZT4ke3RoaXNUaXRsZX08L3RpdGxlPlxuICAgICAgICAgICR7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5gXG4gICAgICAgIHJlZ2lvbi5pbm5lckhUTUwgPSB3cmFwTGlua1xuICAgICAgfSlcbiAgICB9XG5cbiAgICBtYXBFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB0aGlzLm1hcEluKGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB0aGlzLm1hcE91dChlbGVtZW50LCBcImhvdmVyXCIsIHRydWUpKSlcbiAgICAgIHRoaXMucmVnaW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4gdGhpcy5tYXBDbGljayhldmVudCkpKVxuICAgIH1cblxuICAgIGxpbmtFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJob3ZlclwiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcImluXCIsIFwiZm9jdXNcIikpKVxuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwib3V0XCIsIFwiZm9jdXNcIikpKVxuICAgIH1cblxuICAgIG1vdmVUb1RvcChvYmopIHtcbiAgICAgIG9iai5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKG9iaik7XG4gICAgfVxuXG4gICAgbWFwSW4odGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0aGlzLm1vdmVUb1RvcCh0YXJnZXQpXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LmFkZChcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwT3V0KHRhcmdldCwgc3R5bGUsIG1hcCkge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpXG4gICAgICBpZihtYXApIHtcbiAgICAgICAgY29uc3QgdGhpc0xpbmsgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KHRhcmdldC5pZClcbiAgICAgICAgaWYodGhpc0xpbmspIHRoaXNMaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcENsaWNrKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCB0aGlzTWFwQ291bnRlcnBhcnQgPSB0aGlzLm1hcENvdW50ZXJwYXJ0KGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiZ1wiKS5pZClcbiAgICAgIGlmKHRoaXNNYXBDb3VudGVycGFydCkgdGhpc01hcENvdW50ZXJwYXJ0LmNsaWNrKClcbiAgICB9XG5cbiAgICBtYXBDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50KHRhcmdldCwgZGlyZWN0aW9uLCB0eXBlKSB7XG4gICAgICBjb25zdCB0aGlzSWQgPSB0YXJnZXQuaWRcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMubGlua0NvdW50ZXJwYXJ0KHRoaXNJZClcbiAgICAgIGlmKGRpcmVjdGlvbiA9PT0gXCJpblwiKSB7XG4gICAgICAgIHRoaXMubWFwSW4odGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXBPdXQodGhpc0NvdW50ZXJwYXJ0LCB0eXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtDb3VudGVycGFydCh0aGlzSWQpIHtcbiAgICAgIGNvbnN0IHRoaXNDb3VudGVycGFydCA9IHRoaXMucmVnaW9ucy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGhpc0lkKVxuICAgICAgcmV0dXJuICh0aGlzQ291bnRlcnBhcnQpXG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1tYXAnKV0uZm9yRWFjaChtYXAgPT4ge1xuICAgIC8vIG5lZWQgdG8gd2FpdCBmb3IgU1ZHIHRvIGxvYWRcbiAgICBjb25zdCBvYmogPSBtYXAucXVlcnlTZWxlY3Rvcignb2JqZWN0JylcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICBjb25zdCBzdmcgPSBvYmouZ2V0U1ZHRG9jdW1lbnQoKS5xdWVyeVNlbGVjdG9yKCdzdmcnKVxuICAgICAgaWYoc3ZnKXtcbiAgICAgICAgbmV3IE5hdk1hcChtYXAsIHN2ZylcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTmV3c2xldHRlclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICduaHN1ay1uZXdzbGV0dGVyLWZvcm0nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5ld3NsZXR0ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5ld3NsZXR0ZXIpIHtcbiAgICAgIHRoaXMubmV3c2xldHRlciA9IG5ld3NsZXR0ZXI7XG4gICAgICB0aGlzLnJlcXVpcmVkSW5wdXRzID0gbmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKFwiW3JlcXVpcmVkXVwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHdpbmRvdy5yZWNhcHRjaGFDYWxsYmFjayA9IHRoaXMucmVjYXB0Y2hhQ2FsbGJhY2tcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRzKCkgICAgICA7XG4gICAgfVxuICAgIFxuICAgIGFkZEV2ZW50cygpIHtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBjID0+IHRoaXMudmFsaWRhdGUoYy50YXJnZXQpKTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGFyZ2V0KSB7XG4gICAgICB2YXIgdGFyZ2V0RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9ycy1cIit0YXJnZXQubmFtZSk7XG4gICAgICB2YXIgdGFyZ2V0U3VtbWFyeUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5LVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIGlmICh0YXJnZXQubmFtZSA9PSBcImZpcnN0bmFtZVwiIHx8IHRhcmdldC5uYW1lID09IFwibGFzdG5hbWVcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiZW1haWxcIikge1xuICAgICAgICB0aGlzLmVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRhcmdldC5uYW1lID09IFwiY29uc2VudFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVN1bW1hcnkoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTdW1tYXJ5KCkge1xuICAgICAgdmFyIGVycm9yU3VtbWFyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3Itc3VtbWFyeVwiKTtcbiAgICAgIGlmICh0aGlzLmVycm9ycy5sZW5ndGggPiAwKVxuICAgICAgeyAgICAgICAgXG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlcnJvclN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvckVtcHR5KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKHRoaXMuaXNFbXB0eSh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1haWwodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgIGlmICghcmUudGVzdCh0YXJnZXQudmFsdWUpKSB7ICAgICAgICBcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yQ29uc2VudCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIGlmICghdGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5zaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGFyZ2V0U3VtbWFyeUVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICB9XG5cbiAgICBzaG93RXJyb3IodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCduaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgdGFyZ2V0RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0aGlzLmVycm9ycyA9IHRoaXMuZXJyb3JzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRhcmdldC5uYW1lKTtcbiAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIGlzRW1wdHkoc3RyKSB7XG4gICAgICByZXR1cm4gIXN0ci50cmltKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZXJyb3ItbWVzc2FnZScpO1xuICAgICAgZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yQ2xhc3NlcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIGVycm9yQ2xhc3Nlcy5mb3JFYWNoKGVycm9yY2xhc3MgPT4ge1xuICAgICAgICBlcnJvcmNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JTdW1tYXJ5ID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1zdW1tYXJ5Jyk7XG4gICAgICBlcnJvclN1bW1hcnkuZm9yRWFjaChlcnJvcnN1bW1hcnkgPT4ge1xuICAgICAgICBlcnJvcnN1bW1hcnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnlJdGVtcyA9IHRoaXMubmV3c2xldHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3Itc3VtbWFyeS1pdGVtJyk7XG4gICAgICBlcnJvclN1bW1hcnlJdGVtcy5mb3JFYWNoKHN1bW1hcnlpdGVtID0+IHtcbiAgICAgICAgc3VtbWFyeWl0ZW0uc3R5bGUuZGlzcGxheSAgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlY2FwdGNoYUNhbGxiYWNrKCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSNuZXdzbGV0dGVyLWZvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1uZXdzbGV0dGVyLWZvcm0nKV0uZm9yRWFjaCgobmV3c2xldHRlcikgPT4gbmV3IE5ld3NsZXR0ZXIobmV3c2xldHRlcikpO1xufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAvKipcclxuICAqIFRhYnNcclxuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstdGFicycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcclxuICAqL1xyXG4gIGNsYXNzIFRhYnMge1xyXG4gICAgY29uc3RydWN0b3IodGFiY29tcG9uZW50LCBpKSB7XHJcbiAgICAgIHRoaXMudGFiY29tcG9uZW50ID0gdGFiY29tcG9uZW50XHJcbiAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFiXCJdJylcclxuICAgICAgY29uc3QgdGFiTGlzdCA9IHRoaXMudGFiY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwidGFibGlzdFwiXScpXHJcbiAgICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYyA9PiB0aGlzLmNoYW5nZVRhYnMoYykpXHJcbiAgICAgIH0pXHJcbiAgICAgIGxldCB0YWJGb2N1cyA9IDBcclxuICAgICAgdGFiTGlzdC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcclxuICAgICAgICAvLyBNb3ZlIHJpZ2h0XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkgfHwgZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgLTEpXHJcbiAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgICAgICB0YWJGb2N1cysrXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBlbmQsIGdvIHRvIHRoZSBzdGFydFxyXG4gICAgICAgICAgICBpZiAodGFiRm9jdXMgPj0gdGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNb3ZlIGxlZnRcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzNykge1xyXG4gICAgICAgICAgICB0YWJGb2N1cy0tXHJcbiAgICAgICAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBzdGFydCwgbW92ZSB0byB0aGUgZW5kXHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA8IDApIHtcclxuICAgICAgICAgICAgICB0YWJGb2N1cyA9IHRhYnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKVxyXG4gICAgICAgICAgdGFic1t0YWJGb2N1c10uZm9jdXMoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVGFicyhlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICBjb25zdCBwYXJlbnQgPSB0YXJnZXQucGFyZW50Tm9kZVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwYXJlbnQpO1xyXG4gICAgICBjb25zdCBncmFuZHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdyYW5kcGFyZW50KTtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpWzBdO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZClcclxuICAgICAgY29uc3QgaXNfbW9iaWxlID0gZ3JhbmRwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay10YWJzX19tb2JpbGUnKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhpc19tb2JpbGUpXHJcblxyXG4gICAgICAvLyBDb21wYXJlIHNlbGVjdGVkIGFuZCB0YXJnZXQsIGFuZCBpZiBvbiBtb2JpbGVcclxuICAgICAgLy8gQ2xvc2UgdGhlIHRhYiBpZiBhbHJlYWR5IG9wZW5cclxuICAgICAgaWYodGFyZ2V0ID09IHNlbGVjdGVkICYmIGlzX21vYmlsZSkge1xyXG4gICAgICAgIC8vIFVuc2VsZWN0IGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChwYXJlbnQpXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFic1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBjdXJyZW50IHNlbGVjdGVkIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuXHJcbiAgICAgICAgLy8gU2V0IHRoaXMgdGFiIGFzIHNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCh0YXJnZXQpXHJcblxyXG4gICAgICAgIC8vIEhpZGUgYWxsIHRhYiBwYW5lbHNcclxuICAgICAgICB0aGlzLmhpZGVUYWJzKGdyYW5kcGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTaG93IHRoZSBzZWxlY3RlZCBwYW5lbFxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdGVkKGdyYW5kcGFyZW50LnBhcmVudE5vZGUsIHRhcmdldClcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2VsZWN0ZWQoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHQgPT4gdC5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGZhbHNlKSk7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstdGFic19fbGlzdC1pdGVtLS1zZWxlY3RlZCcpXHJcbiAgICAgICAgLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlLnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgdHJ1ZSlcclxuICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVRhYnMoZWxlKSB7XHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdbcm9sZT1cInRhYnBhbmVsXCJdJylcclxuICAgICAgICAuZm9yRWFjaChwID0+IHAuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIHRydWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dTZWxlY3RlZChlbGUsIHRhcmdldCkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhlbGUucXVlcnlTZWxlY3RvcihgIyR7dGFyZ2V0LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIil9YCkpXHJcbiAgICAgIGVsZVxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKVxyXG4gICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIilcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstdGFicycpXS5mb3JFYWNoKCh0YWJzLCBpKSA9PiBuZXcgVGFicyh0YWJzLCBpKSk7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBSZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIHRoZSBcImV4cGFuZCBhbGxcIiB0b2dnbGUgZnVuY3Rpb25hbGl0eSBmb3IgdGFibGVcbiAgICogY2FyZHMuXG4gICAqL1xuICBjbGFzcyBUYWJsZUNhcmQge1xuXG4gICAgY29uc3RydWN0b3IodGFibGVDYXJkKSB7XG4gICAgICB0aGlzLnRhYmxlQ2FyZCA9IHRhYmxlQ2FyZDtcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5oZWUtdGFibGUtZXhwYW5kZXJfX3RvZ2dsZSBhJyk7XG4gICAgICB0aGlzLmV4cGFuZGVycyA9IHRoaXMudGFibGVDYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1leHBhbmRlcicpO1xuICAgICAgdGhpcy5zdGF0ZU9wZW4gPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluayAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuaW5uZXJUZXh0ID0gdGhpcy50b2dnbGVMaW5rLmRhdGFzZXQubGFiZWxPcGVuO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdEV4cGFuZGVyT2JzZXJ2ZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBsaW5rIGFuZCBzdW1tYXJ5IGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgLy8gSGFuZGxlcyB0b2dnbGUgY2xpY2sgZXZlbnQuXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgIH0pXG5cbiAgICAgIC8vIEhhbmRsZXMgdG9nZ2xlIGxpbmsgZW50ZXIgYW5kIHNwYWNlYmFyIGtleSBwcmVzcy5cbiAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXZSB1c2Ugb2JzZXJ2ZXJzIHRvIHJlYWN0IHRvIGNsaWNrIGV2ZW50cyBvbiBpbmRpdmlkdWFsIGV4cGFuZGVycywgYXMgdGhpc1xuICAgICAqIGV2ZW50IGZ1bmN0aW9uYWxpdHkgaXMgaGFuZGxlZCBieSB0aGUgbmhzdWstZGV0YWlscyBjb21wb25lbnQncyBqYXZhc2NyaXB0LlxuICAgICAqL1xuICAgIGluaXRFeHBhbmRlck9ic2VydmVyKCkge1xuICAgICAgLy8gQ29uZmlndXJlIG9ic2VydmVyIHRvIHJlYWN0IHRvIGNoYW5nZXMgaW4gYW4gZXhwYW5kZXIncyBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnNMaXN0KSA9PiB7XG4gICAgICAgIG11dGF0aW9uc0xpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUb2dnbGVTdGF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShleHBhbmRlciwge2F0dHJpYnV0ZXM6IHRydWV9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBhbGwgZXhwYW5kZXIgY29udGVudCB2aXNpYmlsaXR5IHdpdGhpbiB0YWJsZSBjYXJkLlxuICAgICAqL1xuICAgIHRvZ2dsZUV4cGFuZGVycygpIHtcbiAgICAgIC8vIE9wZW4gLyBjbG9zZSBlYWNoIGV4cGFuZGVyIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlLlxuICAgICAgdGhpcy5leHBhbmRlcnMuZm9yRWFjaCggKGV4cGFuZGVyKSA9PiB7XG4gICAgICAgICF0aGlzLnN0YXRlT3BlbiA/IHRoaXMub3BlbkV4cGFuZGVyKGV4cGFuZGVyKSA6IHRoaXMuY2xvc2VFeHBhbmRlcihleHBhbmRlcik7XG4gICAgICB9KTtcblxuICAgICAgLy8gVG9nZ2xlIHN0YXRlIGZsYWcuXG4gICAgICB0aGlzLnN0YXRlT3BlbiA9ICF0aGlzLnN0YXRlT3BlbjtcblxuICAgICAgLy8gVG9nZ2xlIGJ1dHRvbiB0ZXh0LlxuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogIERldGVybWluZXMgd2hldGhlciBhbGwgZXhwYW5kZXJzIGhhdmUgYmVlbiBvcGVuZWQgb3IgY2xvc2VkIGFuZCB1cGRhdGVzXG4gICAgICogIHRoZSBzdGF0ZSBmbGFnIGFuZCB0b2dnbGUgbGluayB0ZXh0IGFjY29yZGluZ2x5LlxuICAgICAqXG4gICAgICogIEZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIE11dGF0aW9uT2JzZXJ2ZXIgZGV0ZWN0cyBhIGNoYW5nZSBpbiBleHBhbmRlclxuICAgICAqICBcIm9wZW5cIiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgdXBkYXRlVG9nZ2xlU3RhdGUoKSB7XG4gICAgICBsZXQgYWxsT3BlbiA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmV4cGFuZGVycy5mb3JFYWNoKCAoZXhwYW5kZXIpID0+IHtcbiAgICAgICAgIWV4cGFuZGVyLmhhc0F0dHJpYnV0ZSgnb3BlbicpID8gYWxsT3BlbiA9IGZhbHNlIDogYWxsT3BlbiA9IHRydWU7XG4gICAgICB9KTtcblxuICAgICAgIWFsbE9wZW4gPyB0aGlzLnN0YXRlT3BlbiA9IGZhbHNlIDogdGhpcy5zdGF0ZU9wZW4gPSB0cnVlO1xuICAgICAgIXRoaXMuc3RhdGVPcGVuID8gdGhpcy50b2dnbGVMaW5rLmlubmVyVGV4dCA9IHRoaXMudG9nZ2xlTGluay5kYXRhc2V0LmxhYmVsT3BlbiA6IHRoaXMudG9nZ2xlTGluay5pbm5lclRleHQgPSB0aGlzLnRvZ2dsZUxpbmsuZGF0YXNldC5sYWJlbENsb3NlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3BlbnMgYW4gZXhwYW5kZXIgZWxlbWVudC5cbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBleHBhbmRlciBFeHBhbmRlciBlbGVtZW50LlxuICAgICAqL1xuICAgIG9wZW5FeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICBleHBhbmRlci5zZXRBdHRyaWJ1dGUoJ29wZW4nLCAnb3BlbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlcyBhbiBleHBhbmRlciBlbGVtZW50LlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGV4cGFuZGVyIEV4cGFuZGVyIGVsZW1lbnQuXG4gICAgICovXG4gICAgY2xvc2VFeHBhbmRlcihleHBhbmRlcikge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IGV4cGFuZGVyLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1kZXRhaWxzX19zdW1tYXJ5Jyk7XG4gICAgICBjb25zdCB0ZXh0ID0gZXhwYW5kZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWRldGFpbHNfX3RleHQnKTtcblxuICAgICAgc3VtbWFyeS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBleHBhbmRlci5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVlLXRhYmxlLWV4cGFuZGVyJyldLmZvckVhY2godGFibGVDYXJkID0+IG5ldyBUYWJsZUNhcmQodGFibGVDYXJkKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogRmlsdGVyXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuICAgKi9cbiAgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgICB0aGlzLmNoZWNrYm94ZXMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG4gICAgICB0aGlzLmdyb3VwcyA9IFsuLi50aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXJfX2dyb3VwJyldO1xuICAgICAgdGhpcy5zdWJtaXQgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyX19zdWJtaXQnKTtcbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cF9fY2xlYXInKV07XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHRoaXMudXBkYXRlUmVzdWx0cyhldnQpKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgbGVnZW5kID0gZ3JvdXAucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpZWxkc2V0X19sZWdlbmQnKTtcbiAgICAgICAgaWYgKGxlZ2VuZCkge1xuICAgICAgICAgIGxlZ2VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLnRvZ2dsZUdyb3VwKGV2dCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB0aGlzLmNsZWFyQ2hlY2tib3hlcyhldnQpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFVwKCkge1xuICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLS1qcycpO1xuXG4gICAgICAvLyBDbG9zZSBncm91cHNcbiAgICAgIC8vIHRoaXMuZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4gZ3JvdXAuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyX19ncm91cC0tY2xvc2VkJykpO1xuXG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlLmZvckVhY2godG9nZ2xlID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVDbGVhckxpbmtWaXNpYmlsaXR5KHRvZ2dsZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSGlkZSBzdWJtaXQgYnV0dG9uXG4gICAgICBpZiAodGhpcy5zdWJtaXQpIHtcbiAgICAgICAgdGhpcy5zdWJtaXQuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVHcm91cChldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZ0LnRhcmdldC5jbG9zZXN0KCcubmhzdWstZmlsdGVyX19ncm91cCcpLmNsYXNzTGlzdC50b2dnbGUoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpO1xuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZXZ0KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBjbGVhckNoZWNrYm94ZXMoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgdG9nZ2xlTGluayA9IGV2dC50YXJnZXQ7XG4gICAgICBjb25zdCBjaGVja2JveGVzID0gWy4uLnRvZ2dsZUxpbmsucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWstY2hlY2tib3hlc19faW5wdXQnKV07XG5cbiAgICAgIGNoZWNrYm94ZXMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgIGNiLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudXBkYXRlUmVzdWx0cyhldnQpO1xuICAgIH1cblxuICAgIHRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkodG9nZ2xlTGluaykge1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFsuLi50b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICBpZiAoY2hlY2tib3hlc1tpXS5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgIHRvZ2dsZUxpbmsuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcicpXS5mb3JFYWNoKGZpbHRlciA9PiBuZXcgRmlsdGVyKGZpbHRlcikpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBGaWx0ZXJUYWdcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlci10YWcnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEZpbHRlclRhZyB7XG4gICAgY29uc3RydWN0b3IodGFnKSB7XG4gICAgICB0aGlzLnRhZyA9IHRhZztcbiAgICAgIHRoaXMuaWNvbiA9IHRhZy5xdWVyeVNlbGVjdG9yKCcubmhzdWstZmlsdGVyLXRhZ19faWNvbicpO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLnRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHRoaXMucmVtb3ZlRmlsdGVyKGV2dCkpO1xuICAgIH1cblxuICAgIHJlbW92ZUZpbHRlcihldnQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt2YWx1ZT0nJHt0aGlzLnRhZy5kYXRhc2V0LmZpbHRlcn0nXWApLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrYm94LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICB9KTtcblxuICAgICAgZXZ0LnRhcmdldC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMudGFnLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci10YWctLWpzJyk7XG5cbiAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgdGhpcy5pY29uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1maWx0ZXItdGFnJyldLmZvckVhY2godGFnID0+IG5ldyBGaWx0ZXJUYWcodGFnKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgICogTGlzdGluZ1xuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWxpc3RpbmcnIGFuZCAnLmhlZS1saXN0aW5ncycgYXJlIHBhc3NlZFxuICAgKiBpbnRvIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEB0b2RvIFJlbW92ZSBsZWdhY3kgcmVmZXJlbmNlcyB0byAubmhzdWstbGlzdGluZyBhbmQgbG9vcHMgb25jZSBhbGwgbmV3XG4gICAqIGNvbGxlY3Rpb24gdGVtcGxhdGVzIGhhdmUgYmVlbiBpbXBsZW1lbnRlZC5cbiAgICovXG4gIGNsYXNzIExpc3Rpbmcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuXG4gICAgICBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zb3J0LCAubmhzdWstbGlzdGluZ19fc29ydCcpXS5mb3JFYWNoKGZvcm1FbGVtZW50ID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzZWxlY3QnKV0uZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4gdGhpcy51cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBpZiAoZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgWy4uLmZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWUtbGlzdGluZ19fZmlsdGVyX19zdWJtaXQsIC5uaHN1ay1saXN0aW5nX19zb3J0X19zdWJtaXQnKV0uZm9yRWFjaChzdWJtaXQgPT4ge1xuICAgICAgICAgIGlmIChzdWJtaXQpIHtcbiAgICAgICAgICAgIHN1Ym1pdC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGZvcm1FbGVtZW50KSB7XG4gICAgICBmb3JtRWxlbWVudC5zdWJtaXQoKTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nLCAubmhzdWstbGlzdGluZycpXS5mb3JFYWNoKGxpc3RpbmcgPT4gbmV3IExpc3RpbmcobGlzdGluZykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBDb29raWVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIC8vIGJhbm5lclxuICAgICAgdGhpcy51c2VDb29raWVzID0gJydcbiAgICAgIHRoaXMuYmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrLWNvb2tpZS1iYW5uZXInKVxuICAgICAgdGhpcy5zaG93Q29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Q29va2llcycpXG4gICAgICB0aGlzLnJlbW92ZUNvb2tpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQ29va2llcycpXG4gICAgICB0aGlzLmhvc3QgPSB0aGlzLmdldEhvc3QoKVxuXG4gICAgICB0aGlzLmNvb2tpZVN0YXR1cygpXG4gICAgICB0aGlzLnNldENvb2tpZXMoKVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAgIC8vIHBvbGljeSBwYWdlXG4gICAgICB0aGlzLlN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uaHN1a19fY29va2llU3RhdHVzJylcbiAgICAgIHRoaXMuSW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmhzdWtfX2Nvb2tpZXNJbicpXG4gICAgICB0aGlzLk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc091dCcpXG5cbiAgICAgIHRoaXMudG9nZ2xlU3RhdHVzKClcbiAgICB9XG5cbiAgICBjb29raWVTdGF0dXMoKXtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpXG4gICAgICBjb29raWVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gYy5tYXRjaChuZXcgUmVnRXhwKCcoXnwgKWNvb2tpZV9jb25zZW50KFteO10rKScpKVxuICAgICAgICBpZihtYXRjaCkge1xuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGMuc3BsaXQoXCI9XCIpWzFdXG4gICAgICAgICAgdGhpcy51c2VDb29raWVzID0gc3RhdHVzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0SG9zdCgpe1xuICAgICAgY29uc3QgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0LnRvU3RyaW5nKCkuc3BsaXQoXCI6XCIpWzBdXG4gICAgICByZXR1cm4gaG9zdFxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYodGhpcy5zaG93Q29va2llcykge1xuICAgICAgICB0aGlzLnNob3dDb29raWVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc2hvd0Nvb2tpZSlcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMucmVtb3ZlQ29va2llcykge1xuICAgICAgICB0aGlzLnJlbW92ZUNvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5yZW1vdmVDb29raWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgYmFubmVyU2hvdygpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmFubmVySGlkZSgpIHtcbiAgICAgIGlmKHRoaXMuYmFubmVyKSB7XG4gICAgICAgIHRoaXMuYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgfVxuICAgIH1cblxuICAgIHNldENvb2tpZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09ICcnKSB7XG4gICAgICAgICAgdGhpcy5iYW5uZXJTaG93KClcbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NBY2NlcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19hY2NlcHRfYW5hbHl0aWNzJylcbiAgICAgICAgICBpZiAoYW5hbHl0aWNzQWNjZXB0KSB7XG4gICAgICAgICAgICBhbmFseXRpY3NBY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhbmFseXRpY3NEZWNsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25oc3VrLWNvb2tpZS1iYW5uZXJfX2xpbmtfZGVjbGluZV9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NEZWNsaW5lKSB7XG4gICAgICAgICAgICBhbmFseXRpY3NEZWNsaW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGBjb29raWVfY29uc2VudD10cnVlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIG5vQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PWZhbHNlOyBkb21haW49JHt0aGlzLmhvc3R9OyBtYXgtYWdlPTc3NzYwMDBgXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICAgIHRvZ2dsZVN0YXR1cygpIHtcbiAgICAgIGlmKHRoaXMuU3RhdHVzKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLm5oc3VrX19jb29raWVzT3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNJbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgdGhpcy5ub0Nvb2tpZSgpXG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodGhpcy51c2VDb29raWVzID09PSBcImZhbHNlXCIgfHwgdGhpcy51c2VDb29raWVzID09PSAnJyApIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuSW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5Tm9uZSh0aGlzLk91dClcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCbG9jayh0aGlzLkluKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGxheUJsb2NrKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKVxuICAgIH1cblxuICAgIGRpc3BsYXlOb25lKGl0ZW0pIHtcbiAgICAgIGl0ZW0uZm9yRWFjaChlID0+IGUuc3R5bGUuZGlzcGxheT1cIm5vbmVcIilcbiAgICB9XG5cbiAgICAvLyByZWR1bmRhbnQgYnV0IHVzZWZ1bFxuICAgIHNob3dDb29raWUoKSB7XG4gICAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29va2llcycpXG4gICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSAnPiAnICsgZG9jdW1lbnQuY29va2llXG4gICAgfVxuICAgIFxuICAgIHJlbW92ZUNvb2tpZSgpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwiY29va2llX2NvbnNlbnQ9ZmFsc2U7IG1heC1hZ2U9MFwiXG4gICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgIH1cblxuICB9XG5cbiAgbmV3IENvb2tpZXMoZG9jdW1lbnQpXG59IiwiLyoqXG4qIFN1Yk5hdlxuKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXN1Ym5hdicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY2xhc3Mgc3ViTmF2IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gICAgICB0aGlzLnRvZ2dsZUxpbmsgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdhJylcbiAgICAgIHRoaXMucGFyZW50TGlzdCA9IHRoaXMuY29udGFpbmVyLnBhcmVudE5vZGVcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlTGluaykge1xuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZXZlbnQgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50KSlcbiAgICAgICAgdGhpcy50b2dnbGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVNZW51KGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVTdGF0ZSgpe1xuICAgICAgY29uc3QgYWN0aXZlRWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICAgIGFjdGl2ZUVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGlmKGVsZW0gIT0gdGhpcy5jb250YWluZXIpe1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICAgIGVsZW0udG9nZ2xlQXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5wYXJlbnRMaXN0LCAnc3VibmF2LW9wZW4nKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYoYWN0aXZlRWxlbXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudShldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVTdGF0ZSgpXG4gICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMuY29udGFpbmVyLCBcImlzLWFjdGl2ZVwiKVxuICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUodGhpcy5jb250YWluZXIsIFwiYXJpYS1leHBhbmRlZFwiKVxuICAgIH1cblxuICAgIHRvZ2dsZUNsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFjbGFzc05hbWUpIHJldHVyblxuICAgICAgY29uc3QgaGFzQ2xhc3MgPSBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgICBpZiAoaGFzQ2xhc3MpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQXR0cmlidXRlKGVsZW1lbnQsIGF0dHIpIHtcbiAgICAgIC8vIFJldHVybiB3aXRob3V0IGVycm9yIGlmIGVsZW1lbnQgb3IgYXR0ciBhcmUgbWlzc2luZ1xuICAgICAgaWYgKCFlbGVtZW50IHx8ICFhdHRyKSByZXR1cm5cbiAgICAgIC8vIFRvZ2dsZSBhdHRyaWJ1dGUgdmFsdWUuIFRyZWF0IG5vIGV4aXN0aW5nIGF0dHIgc2FtZSBhcyB3aGVuIHNldCB0byBmYWxzZVxuICAgICAgY29uc3QgdmFsdWUgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cikgPT09ICd0cnVlJykgPyAnZmFsc2UnIDogJ3RydWUnXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSlcbiAgICB9XG5cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay1zdWJuYXYnKV0uZm9yRWFjaChzdWJuYXYgPT4gbmV3IHN1Yk5hdihzdWJuYXYpKVxuXG4gIC8qIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbWVudVwiKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLW1lbnVcIikuZm9jdXMoKVxuICB9KSAqL1xuXG4gIGNvbnN0IGNsb3NlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtbWVudVwiKTtcblxuICBjbG9zZU1lbnUgJiYgY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB1c2VySW5wdXQoZXZlbnQpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHVzZXJJbnB1dCkgXG4gIFxuICBmdW5jdGlvbiB1c2VySW5wdXQoZXZlbnQpIHtcbiAgICAvLyBjbG9zZSBtZW51IGlmIGNsaWNraW5nIG91dHNpZGVcbiAgICBjb25zdCBvcGVuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICBpZihvcGVuTWVudSl7XG4gICAgICBjb25zdCBpc05vdE1lbnUgPSBldmVudC50YXJnZXQgIT09IG9wZW5NZW51XG4gICAgICBjb25zdCBpc05vdE1lbnVCdXR0b24gPSBldmVudC50YXJnZXQgIT09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9nZ2xlLW1lbnVcIilcbiAgICAgIGNvbnN0IGlzTWVudUNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstaGVhZGVyX19uYXZpZ2F0aW9uLmpzLXNob3dcIilcbiAgICAgIGlmKGlzTm90TWVudSAmJiBpc05vdE1lbnVCdXR0b24gJiYgIWlzTWVudUNoaWxkKXtcbiAgICAgICAgb3Blbk1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNob3dcIilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2xvc2Ugc3ViIG5hdiBpZiBjbGlja2luZyBhbnl3aGVyZSBvbiB0aGUgZG9jdW1lbnQgZXhjZXB0IHRoZSBvcGVuIG9yIGEgbmV3IHN1Ym5hdlxuICAgIGNvbnN0IG9wZW5TdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLXN1Ym5hdi5pcy1hY3RpdmVcIilcbiAgICBpZihvcGVuU3ViKXtcbiAgICAgIGNvbnN0IGlzTm90U3ViID0gZXZlbnQudGFyZ2V0ICE9PSBvcGVuU3ViXG4gICAgICBjb25zdCBpc1N1YkNoaWxkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgaWYoaXNOb3RTdWIgJiYgIWlzU3ViQ2hpbGQpe1xuICAgICAgICBvcGVuU3ViLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1hY3RpdmVcIilcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24tbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic3VibmF2LW9wZW5cIilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIE5IU1VLLUhFRSBDb21wb25lbnRzXG5pbXBvcnQgQ29va2llcyBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9jb29raWVzL2Nvb2tpZXMnO1xuaW1wb3J0IFN1Yk5hdiBmcm9tICcuL2Jsb2Nrcy9zY2FmZm9sZGluZy9oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYnO1xuXG4vLyBIRUUgQ29tcG9uZW50c1xuaW1wb3J0IEFuY2hvckxpbmtzIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcyc7XG5pbXBvcnQgVGFibGVDb250ZW50cyBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtYW5jaG9ybGlua3MvdG9jJztcbmltcG9ydCBMaXN0aW5nIGZyb20gJy4vYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nJztcbmltcG9ydCBNZWRpYSBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtbWVkaWEvbWVkaWEnO1xuaW1wb3J0IE5hdk1hcCBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtbmF2bWFwL25hdm1hcCc7XG5pbXBvcnQgTmV3c2xldHRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtbmV3c2xldHRlci9uZXdzbGV0dGVyJztcbi8vaW1wb3J0IERldGFpbHNDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1kZXRhaWxzY2FyZC9kZXRhaWxzY2FyZCc7XG5pbXBvcnQgVGFicyBmcm9tICcuLi9jb21wb25lbnRzL2hlZS9oZWUtdGFicy90YWJzJztcbmltcG9ydCBUYWJsZUNhcmQgZnJvbSAnLi9ibG9ja3MvY29udGVudC9tYWluL3RhYmxlLWV4cGFuZGVyL3RhYmxlLWV4cGFuZGVyJztcbi8vaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS10aW1lbGluZS90aW1lbGluZSc7XG5cbi8vIFVuc29ydGVkIGNvbXBvbmVudHNcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXIvZmlsdGVyJztcbmltcG9ydCBGaWx0ZXJUYWcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnJztcblxuLy9pbXBvcnQgJy4vcG9seWZpbGxzJztcblxuLy8gSW5pdGlhbGl6ZSBjb21wb25lbnRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBUYWJzKCk7XG4gIEFuY2hvckxpbmtzKCk7XG4gIENvb2tpZXMoKTtcbiAgRmlsdGVyKCk7XG4gIEZpbHRlclRhZygpO1xuICBMaXN0aW5nKCk7XG4gIE1lZGlhKCk7XG4gIE5hdk1hcCgpO1xuICBTdWJOYXYoKTtcbiAgTmV3c2xldHRlcigpO1xuICBUYWJsZUNvbnRlbnRzKCk7XG4gIFRhYmxlQ2FyZCgpO1xufSk7XG4iXSwibmFtZXMiOlsiQW5jaG9yTGlua3MiLCJhbmNob3JMaW5rcyIsImhhc0F0dHJpYnV0ZSIsImhpZGRlbiIsImZvdW5kSGVhZGluZ3MiLCJmaW5kSGVhZGluZ3MiLCJkYXRhc2V0IiwiaGVhZGluZ3MiLCJsZW5ndGgiLCJhZGRBbmNob3JzVG9QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImhlYWRpbmciLCJpIiwiaWQiLCJpbm5lclRleHQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwic2VsZWN0b3IiLCJzb21lIiwiZWwiLCJjb250YWlucyIsInVsIiwiY3JlYXRlRWxlbWVudCIsImZvdW5kSGVhZGluZyIsImFuY2hvcmxpbmtzaWdub3JlIiwiY2xhc3NMaXN0IiwiYXBwZWFyc09uUmlnaHRQYWdlQ29sdW1uIiwibGkiLCJhIiwiaHJlZiIsImhpZGRlbkVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlbW92ZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiVGFibGVDb250ZW50cyIsInRhYmxlQ29udGVudHMiLCJjb250YWluZXJTZWxlY3RvciIsImhlYWRpbmdTZWxlY3RvciIsInN1YkhlYWRpbmdTZWxlY3RvciIsImhlYWRpbmdQcmVmaXgiLCJsaW5rcyIsImNyZWF0ZVRvY0xpbmtzIiwic2V0VG9jTGlzdE1hcmt1cCIsInNsaWNlIiwiY2FsbCIsInNldEJhY2tUb1RvcExpbmtzIiwic3ViSGVhZGluZ3MiLCJpbmRleCIsImhlYWRpbmdJZCIsInNldEF0dHJpYnV0ZSIsImxpbmsiLCJ0aXRsZSIsImdldEhlYWRpbmdUaXRsZSIsImFuY2hvciIsImNoaWxkcmVuIiwic2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsImNvdW50IiwidGFnTmFtZSIsInN1YkhlYWRpbmdJZCIsInNob3J0VGl0bGUiLCJsaXN0IiwibGlzdEl0ZW0iLCJhZGQiLCJjb250YWluZXIiLCJzcGFuIiwiZ2V0Q2hldnJvblNWRyIsImdldENpcmNsZVNWRyIsImFwcGVuZCIsInBhcmVudExpbmsiLCJjaGlsZExpc3QiLCJpdGVtIiwiY2hpbGRJdGVtIiwiY2hpbGRMaW5rIiwiY3JlYXRlQmFja1RvVG9wTGluayIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJUcmFuc2NyaXB0IiwidG9nZ2xlcyIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVycyIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJ0b2dnbGV0cmFuc2NyaXB0IiwiaXNDb2xsYXBzZWQiLCJ0cmFuc2NyaXB0IiwiTmF2TWFwIiwibWFwIiwic3ZnIiwicmVnaW9ucyIsImFkZExpbmtzVG9NYXAiLCJjbGVhblN0eWxlIiwibWFwRXZlbnRMaXN0ZW5lcnMiLCJsaW5rRXZlbnRMaXN0ZW5lcnMiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlVGV4dE5vZGUiLCJyZWdpb24iLCJ0aGlzQ291bnRlcnBhcnQiLCJtYXBDb3VudGVycGFydCIsInRoaXNIcmVmIiwidGhpc1RpdGxlIiwid3JhcExpbmsiLCJlbGVtZW50IiwibWFwSW4iLCJtYXBPdXQiLCJldmVudCIsIm1hcENsaWNrIiwibGlua0V2ZW50IiwidGFyZ2V0Iiwib2JqIiwicGFyZW50RWxlbWVudCIsInN0eWxlIiwibW92ZVRvVG9wIiwidGhpc0xpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRoaXNNYXBDb3VudGVycGFydCIsImNsb3Nlc3QiLCJjbGljayIsInRoaXNJZCIsImZpbmQiLCJkaXJlY3Rpb24iLCJ0eXBlIiwibGlua0NvdW50ZXJwYXJ0IiwiZ2V0U1ZHRG9jdW1lbnQiLCJOZXdzbGV0dGVyIiwibmV3c2xldHRlciIsInJlcXVpcmVkSW5wdXRzIiwiZXJyb3JzIiwiaW5pdCIsIndpbmRvdyIsInJlY2FwdGNoYUNhbGxiYWNrIiwicmVzZXRGb3JtIiwiYWRkRXZlbnRzIiwiaW5wdXQiLCJjIiwidmFsaWRhdGUiLCJ0YXJnZXRFcnJvciIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsInRhcmdldFN1bW1hcnlFcnJvciIsImVycm9yRW1wdHkiLCJlcnJvckVtYWlsIiwiZXJyb3JDb25zZW50IiwidXBkYXRlU3VtbWFyeSIsImVycm9yU3VtbWFyeSIsImRpc3BsYXkiLCJpc0VtcHR5IiwidmFsdWUiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJyZSIsInRlc3QiLCJjaGVja2VkIiwiZmlsdGVyIiwic3RyIiwidHJpbSIsImVycm9yIiwiZXJyb3JDbGFzc2VzIiwiZXJyb3JjbGFzcyIsImVycm9yc3VtbWFyeSIsImVycm9yU3VtbWFyeUl0ZW1zIiwic3VtbWFyeWl0ZW0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJUYWJzIiwidGFiY29tcG9uZW50IiwidGFicyIsInRhYkxpc3QiLCJ0YWIiLCJjaGFuZ2VUYWJzIiwidGFiRm9jdXMiLCJlIiwia2V5Q29kZSIsImZvY3VzIiwicGFyZW50IiwiZ3JhbmRwYXJlbnQiLCJzZWxlY3RlZCIsImlzX21vYmlsZSIsInJlbW92ZVNlbGVjdGVkIiwiaGlkZVRhYnMiLCJzZXRTZWxlY3RlZCIsInNob3dTZWxlY3RlZCIsImVsZSIsInQiLCJwIiwiZ2V0QXR0cmlidXRlIiwiVGFibGVDYXJkIiwidGFibGVDYXJkIiwidG9nZ2xlTGluayIsImV4cGFuZGVycyIsInN0YXRlT3BlbiIsImxhYmVsT3BlbiIsImluaXRFeHBhbmRlck9ic2VydmVyIiwidG9nZ2xlRXhwYW5kZXJzIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zTGlzdCIsIm11dGF0aW9uIiwiYXR0cmlidXRlTmFtZSIsInVwZGF0ZVRvZ2dsZVN0YXRlIiwiZXhwYW5kZXIiLCJvYnNlcnZlIiwiYXR0cmlidXRlcyIsIm9wZW5FeHBhbmRlciIsImNsb3NlRXhwYW5kZXIiLCJsYWJlbENsb3NlIiwiYWxsT3BlbiIsInN1bW1hcnkiLCJ0ZXh0IiwiRmlsdGVyIiwiY2hlY2tib3hlcyIsImdyb3VwcyIsInN1Ym1pdCIsImNsZWFyVG9nZ2xlIiwic2V0VXAiLCJjaGVja2JveCIsInVwZGF0ZVJlc3VsdHMiLCJncm91cCIsImxlZ2VuZCIsInRvZ2dsZUdyb3VwIiwiY2xlYXJDaGVja2JveGVzIiwidG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSIsImNiIiwiRmlsdGVyVGFnIiwidGFnIiwiaWNvbiIsInJlbW92ZUZpbHRlciIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIkxpc3RpbmciLCJmb3JtRWxlbWVudCIsInRvZ2dsZUphdmFzY3JpcHRFbGVtZW50cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2VsZWN0IiwibGlzdGluZyIsIkNvb2tpZXMiLCJ1c2VDb29raWVzIiwiYmFubmVyIiwic2hvd0Nvb2tpZXMiLCJyZW1vdmVDb29raWVzIiwiaG9zdCIsImdldEhvc3QiLCJjb29raWVTdGF0dXMiLCJzZXRDb29raWVzIiwiU3RhdHVzIiwiSW4iLCJPdXQiLCJ0b2dnbGVTdGF0dXMiLCJjb29raWVzIiwiY29va2llIiwic3BsaXQiLCJtYXRjaCIsIlJlZ0V4cCIsInN0YXR1cyIsImxvY2F0aW9uIiwidG9TdHJpbmciLCJzaG93Q29va2llIiwicmVtb3ZlQ29va2llIiwiYmFubmVyU2hvdyIsImFuYWx5dGljc0FjY2VwdCIsImJhbm5lckhpZGUiLCJ1c2VDb29raWUiLCJhbmFseXRpY3NEZWNsaW5lIiwibm9Db29raWUiLCJyZWxvYWQiLCJkaXNwbGF5QmxvY2siLCJkaXNwbGF5Tm9uZSIsIm91dHB1dCIsInRleHRDb250ZW50Iiwic3ViTmF2IiwicGFyZW50TGlzdCIsInRvZ2dsZU1lbnUiLCJhY3RpdmVFbGVtcyIsImVsZW0iLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0b2dnbGVDbGFzcyIsImhhbmRsZVN0YXRlIiwiY2xhc3NOYW1lIiwiaGFzQ2xhc3MiLCJhdHRyIiwic3VibmF2IiwiY2xvc2VNZW51IiwidXNlcklucHV0Iiwib3Blbk1lbnUiLCJpc05vdE1lbnUiLCJpc05vdE1lbnVCdXR0b24iLCJpc01lbnVDaGlsZCIsIm9wZW5TdWIiLCJpc05vdFN1YiIsImlzU3ViQ2hpbGQiLCJTdWJOYXYiLCJNZWRpYSJdLCJzb3VyY2VSb290IjoiIn0=