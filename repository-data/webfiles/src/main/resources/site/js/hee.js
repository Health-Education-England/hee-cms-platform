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

        for (var i = 0; i <= checkboxes.length; i++) {
          if (checkboxes[i].hasAttribute('checked')) {
            toggleLink.classList.add('visible');
          }

          break;
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
/* harmony import */ var _blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filter/filter */ "./app/assets/hee/blocks/furniture/collections/hee-filter/filter.js");
/* harmony import */ var _blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/furniture/collections/hee-filtertag/filtertag */ "./app/assets/hee/blocks/furniture/collections/hee-filtertag/filtertag.js");
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
  (0,_blocks_furniture_collections_hee_filter_filter__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_blocks_furniture_collections_hee_filtertag_filtertag__WEBPACK_IMPORTED_MODULE_10__["default"])();
  (0,_blocks_furniture_collections_hee_listing_listing__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_hee_hee_media_media__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_components_hee_hee_navmap_navmap__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_scaffolding_header_navigation_subnav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_hee_hee_newsletter_newsletter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_components_hee_hee_anchorlinks_toc__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxPQUFPLENBQUNsUCxTQUFSLENBQWtCTyxNQUFsQixDQUF5QixXQUF6QjtBQUNBekIsUUFBQUEsUUFBUSxDQUFDMEYsYUFBVCxDQUF1QixnQ0FBdkIsRUFBeUR4RSxTQUF6RCxDQUFtRU8sTUFBbkUsQ0FBMEUsYUFBMUU7QUFDRDtBQUNGO0FBQ0Y7QUFDRixDQXhHRDs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztDQUVBO0FBRUE7O0FBQ0E7Q0FHQTtBQUVBOztBQUNBekIsUUFBUSxDQUFDNkUsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbERrRixFQUFBQSx5RUFBSTtBQUNKekssRUFBQUEsdUZBQVc7QUFDWDBOLEVBQUFBLCtFQUFPO0FBQ1AzQixFQUFBQSwyRkFBTTtBQUNOZSxFQUFBQSxrR0FBUztBQUNUTSxFQUFBQSw2RkFBTztBQUNQOEQsRUFBQUEsMkVBQUs7QUFDTHRMLEVBQUFBLDZFQUFNO0FBQ05xTCxFQUFBQSx3RkFBTTtBQUNOL0ksRUFBQUEscUZBQVU7QUFDVjVGLEVBQUFBLCtFQUFhO0FBQ2QsQ0FaRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2NvbXBvbmVudHMvaGVlL2hlZS1hbmNob3JsaW5rcy9hbmNob3JsaW5rcy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLWFuY2hvcmxpbmtzL3RvYy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW1lZGlhL21lZGlhLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9jb21wb25lbnRzL2hlZS9oZWUtbmF2bWFwL25hdm1hcC5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLW5ld3NsZXR0ZXIvbmV3c2xldHRlci5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvY29tcG9uZW50cy9oZWUvaGVlLXRhYnMvdGFicy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvLi9hcHAvYXNzZXRzL2hlZS9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1maWx0ZXJ0YWcvZmlsdGVydGFnLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL2Z1cm5pdHVyZS9jb2xsZWN0aW9ucy9oZWUtbGlzdGluZy9saXN0aW5nLmpzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzLy4vYXBwL2Fzc2V0cy9oZWUvYmxvY2tzL3NjYWZmb2xkaW5nL2Nvb2tpZXMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2Jsb2Nrcy9zY2FmZm9sZGluZy9oZWFkZXIvbmF2aWdhdGlvbi9zdWJuYXYuanMiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0hFRS1wcm90b3R5cGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSEVFLXByb3RvdHlwZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9IRUUtcHJvdG90eXBlcy8uL2FwcC9hc3NldHMvaGVlL2hlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEFuY2hvckxpbmtzXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1hbmNob3ItbGlua3MnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIEFuY2hvckxpbmtzIHtcbiAgICBjb25zdHJ1Y3RvcihhbmNob3JMaW5rcykge1xuICAgICAgdGhpcy5hbmNob3JMaW5rcyA9IGFuY2hvckxpbmtzO1xuXG4gICAgICBpZiAodGhpcy5hbmNob3JMaW5rcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtdG9jLWpzJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IHRydWU7XG4gICAgICB0aGlzLmZvdW5kSGVhZGluZ3MgPSB0aGlzLmZpbmRIZWFkaW5ncyhhbmNob3JMaW5rcy5kYXRhc2V0LmhlYWRpbmdzKTtcblxuICAgICAgaWYgKHRoaXMuZm91bmRIZWFkaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hZGRBbmNob3JzVG9QYWdlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFuY2hvckxpbmtzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRIZWFkaW5ncyhoZWFkaW5ncykge1xuICAgICAgbGV0IGZvdW5kSGVhZGluZ3MgPSBbXVxuICAgICAgaWYgKGhlYWRpbmdzKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaGVhZGluZ3MpLmZvckVhY2goKGhlYWRpbmcsIGkpID0+IHtcbiAgICAgICAgICBpZiAoIWhlYWRpbmcuaWQpIHtcbiAgICAgICAgICAgIGhlYWRpbmcuaWQgPSBoZWFkaW5nLmlubmVyVGV4dC5yZXBsYWNlKC8gLiovLCcnKS5yZXBsYWNlKC9bXFxuXFxyXS9nLCcnKS5yZXBsYWNlKC9cXHMvZywnJykudG9Mb3dlckNhc2UoKStpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3VuZEhlYWRpbmdzLnB1c2goaGVhZGluZyk7XG4gICAgICAgIH0pXG4gICAgICB9ICAgICAgXG4gICAgICByZXR1cm4gZm91bmRIZWFkaW5ncztcbiAgICB9XG5cbiAgICBhcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4oaGVhZGluZywgc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildLnNvbWUoZWwgPT5cbiAgICAgICAgZWwgIT09IGhlYWRpbmcgJiYgZWwuY29udGFpbnMoaGVhZGluZylcbiAgICAgIClcbiAgICB9XG5cbiAgICBhZGRBbmNob3JzVG9QYWdlKCkge1xuICAgICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgIHRoaXMuZm91bmRIZWFkaW5ncy5mb3JFYWNoKGZvdW5kSGVhZGluZyA9PiB7XG4gICAgICAgIGlmICghZm91bmRIZWFkaW5nLmRhdGFzZXQuYW5jaG9ybGlua3NpZ25vcmVcbiAgICAgICAgICAmJiAhZm91bmRIZWFkaW5nLmNsYXNzTGlzdC5jb250YWlucygnbmhzdWstdS12aXN1YWxseS1oaWRkZW4nKVxuICAgICAgICAgICYmICFmb3VuZEhlYWRpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCduaHN1ay1jYXJkX19oZWFkaW5nJylcbiAgICAgICAgICAmJiAhdGhpcy5hcHBlYXJzT25SaWdodFBhZ2VDb2x1bW4oZm91bmRIZWFkaW5nLCAnLm5oc3VrLWdyaWQtY29sdW1uLW9uZS10aGlyZCcpKVxuICAgICAgICB7XG4gICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBhLmhyZWYgPSAnIycrZm91bmRIZWFkaW5nLmlkO1xuICAgICAgICAgIGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gZm91bmRIZWFkaW5nLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuaHN1ay11LXZpc3VhbGx5LWhpZGRlblwiKTtcbiAgICAgICAgICB3aGlsZSAoaGlkZGVuRWxlbWVudHMubGVuZ3RoID4gMCkgaGlkZGVuRWxlbWVudHNbMF0ucmVtb3ZlKCk7XG4gICAgICAgICAgYS5pbm5lclRleHQgPSBmb3VuZEhlYWRpbmcuaW5uZXJUZXh0OyAvLyBzdHJpcCB0YWdzXG4gICAgICAgICAgYS5pbm5lckhUTUwgPSBhLmlubmVySFRNTC5yZXBsYWNlKC88YnJcXHMqW1xcL10/Pi9naSwgXCIgXCIpOyAvLyBzdHJpcCA8YnI+XG4gICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYW5jaG9yTGlua3MuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgdGhpcy5hbmNob3JMaW5rcy5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstYW5jaG9yLWxpbmtzJyldLmZvckVhY2goYW5jaG9yTGlua3MgPT4gbmV3IEFuY2hvckxpbmtzKGFuY2hvckxpbmtzKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBSZXNwb25zaWJsZSBmb3IgZ2VuZXJhdGluZyB0YWJsZSBvZiBjb250ZW50cyBsaW5rcy5cbiAgKi9cbiAgY2xhc3MgVGFibGVDb250ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWJsZUNvbnRlbnRzKSB7XG4gICAgICB0aGlzLnRhYmxlQ29udGVudHMgPSB0YWJsZUNvbnRlbnRzO1xuXG4gICAgICB0aGlzLmNvbnRhaW5lclNlbGVjdG9yID0gJy5wYWdlX19tYWluJztcbiAgICAgIHRoaXMuaGVhZGluZ1NlbGVjdG9yID0gJ2gyLnRvY19oMic7XG4gICAgICB0aGlzLnN1YkhlYWRpbmdTZWxlY3RvciA9ICdoMy50b2NfaDMnO1xuICAgICAgdGhpcy5oZWFkaW5nUHJlZml4ID0gJ2hlZS10b2MtaGVhZGluZyc7XG5cbiAgICAgIC8vIEFuY2hvciBsaW5rcyBtYWNybyBzZXRzIHRoaXMgZGF0YSBhdHRyaWJ1dGUgd2hlbiBUT0MgaXMgZmxhZ2dlZCBhcyB0cnVlLlxuICAgICAgaWYgKCF0aGlzLnRhYmxlQ29udGVudHMuaGFzQXR0cmlidXRlKCdkYXRhLXRvYy1qcycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gT25seSBhdHRlbXB0IHRvIGJ1aWxkIFRPQyBsaW5rcyBpZiBIMiBhbmNob3JzIGZvdW5kIG9uIHBhZ2UuXG4gICAgICBsZXQgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuY29udGFpbmVyU2VsZWN0b3IgKyAnICcgKyB0aGlzLmhlYWRpbmdTZWxlY3Rvcik7XG4gICAgICBpZiAoaGVhZGluZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQnVpbGQgbGluayBzdHJ1Y3R1cmUgZnJvbSBET00gYW5kIGFwcGVuZCBnZW5lcmF0ZWQgbWFya3VwIHRvIFRPQ1xuICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgY29uc3QgbGlua3MgPSB0aGlzLmNyZWF0ZVRvY0xpbmtzKGhlYWRpbmdzKTtcbiAgICAgIHRoaXMuc2V0VG9jTGlzdE1hcmt1cChsaW5rcyk7XG5cbiAgICAgIC8vIEJ1aWxkIGJhY2sgdG8gdG9wIGxpbmtzIGFuZCBhcHBlbmQgdG8gZWFjaCBUT0MgaGVhZGluZyB3aXRoaW4gcGFnZVxuICAgICAgLy8gY29udGVudC4gV2Ugc2tpcCB0aGUgZmlyc3QgaGVhZGluZyBvbiB0aGUgcGFnZS5cbiAgICAgIGhlYWRpbmdzID0gW10uc2xpY2UuY2FsbChoZWFkaW5ncywgMSk7XG4gICAgICB0aGlzLnNldEJhY2tUb1RvcExpbmtzKGhlYWRpbmdzKTtcbiAgICAgIGNvbnN0IHN1YkhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLmNvbnRhaW5lclNlbGVjdG9yICsgJyAnICsgdGhpcy5zdWJIZWFkaW5nU2VsZWN0b3IpO1xuICAgICAgaWYgKHN1YkhlYWRpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXRCYWNrVG9Ub3BMaW5rcyhzdWJIZWFkaW5ncyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGFycmF5IG9mIGhlYWRpbmcgbGluayBhdHRyaWJ1dGVzIGFuZCB0aGVpciBjaGlsZHJlbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9ICAgICAgaGVhZGluZ3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXX1cbiAgICAgKi9cbiAgICBjcmVhdGVUb2NMaW5rcyhoZWFkaW5ncykge1xuICAgICAgbGV0IGxpbmtzID0gW107XG5cbiAgICAgIGhlYWRpbmdzLmZvckVhY2goKGhlYWRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRpbmdJZCA9IHRoaXMuaGVhZGluZ1ByZWZpeCArICctJyArIGluZGV4O1xuXG4gICAgICAgIC8vIFNldCB1bmlxdWUgaWQgZm9yIGN1cnJlbnQgaGVhZGluZyBIMiBlbGVtZW50LlxuICAgICAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBoZWFkaW5nSWQpXG5cbiAgICAgICAgbGV0IGxpbmsgPSB7XG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0SGVhZGluZ1RpdGxlKGhlYWRpbmcpLFxuICAgICAgICAgIGFuY2hvcjogaGVhZGluZ0lkLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBzaWJsaW5nID0gaGVhZGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgLy8gVHJhdmVyc2UgRE9NIGZvciBIMyBlbGVtZW50cyBhZnRlciBjdXJyZW50IEgyIGhlYWRpbmcgYW5kIGFwcGVuZCB0b1xuICAgICAgICAvLyBjaGlsZHJlbiBsaW5rcyBhcnJheS5cbiAgICAgICAgd2hpbGUgKHNpYmxpbmcgJiYgIXNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2NfaDInKSkge1xuICAgICAgICAgIGlmIChzaWJsaW5nLnRhZ05hbWUgPT09ICdIMycgJiYgc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ3RvY19oMycpKSB7XG5cbiAgICAgICAgICAgIC8vIFNldCB1bmlxdWUgaWQgZm9yIGN1cnJlbnQgaGVhZGluZyBIMyBlbGVtZW50LlxuICAgICAgICAgICAgY29uc3Qgc3ViSGVhZGluZ0lkID0gaGVhZGluZ0lkICsgJy0nICsgY291bnQ7XG4gICAgICAgICAgICBzaWJsaW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBzdWJIZWFkaW5nSWQpXG5cbiAgICAgICAgICAgIGxpbmsuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldEhlYWRpbmdUaXRsZShzaWJsaW5nKSxcbiAgICAgICAgICAgICAgYW5jaG9yOiBzdWJIZWFkaW5nSWQsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgc2libGluZyA9IHNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlua3MucHVzaChsaW5rKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbGlua3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBlaXRoZXIgdGhlIHNob3J0IG9yIGxvbmcgdGl0bGUgb2YgdGhlIGhlYWRpbmcgYmFzZWQgb24gZGF0YSBhdHRyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICBoZWFkaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYmplY3RcbiAgICAgKi9cbiAgICBnZXRIZWFkaW5nVGl0bGUoaGVhZGluZykge1xuICAgICAgbGV0IHRpdGxlO1xuXG4gICAgICBpZiAoaGVhZGluZy5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvcnQtdGl0bGUnKSkge1xuICAgICAgICB0aXRsZSA9IGhlYWRpbmcuZGF0YXNldC5zaG9ydFRpdGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGUgPSBoZWFkaW5nLmlubmVyVGV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgVE9DIG1hcmt1cCBhbmQgYXBwZW5kcyB0byBjb21wb25lbnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0VG9jTGlzdE1hcmt1cChsaW5rcykge1xuICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGlmIChsaW5rLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdoYXMtY2hpbGRyZW4nKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVlLWFuY2hvcmxpbmtzX193cmFwcGVyJylcbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGV2cm9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAobGluay5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENoZXZyb25TVkcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2lyY2xlU1ZHKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHNwYW4pO1xuXG4gICAgICAgIGxldCBwYXJlbnRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBwYXJlbnRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyArIGxpbmsuYW5jaG9yKTtcbiAgICAgICAgcGFyZW50TGluay5pbm5lclRleHQgPSBsaW5rLnRpdGxlO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocGFyZW50TGluayk7XG5cbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKGxpbmsuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBjaGlsZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgIGxpbmsuY2hpbGRyZW4uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNoaWxkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgICAgIGxldCBjaGlsZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBjaGlsZExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnICsgaXRlbS5hbmNob3IpO1xuICAgICAgICAgICAgY2hpbGRMaW5rLmlubmVyVGV4dCA9IGl0ZW0udGl0bGU7XG5cbiAgICAgICAgICAgIGNoaWxkSXRlbS5hcHBlbmQoY2hpbGRMaW5rKTtcbiAgICAgICAgICAgIGNoaWxkTGlzdC5hcHBlbmQoY2hpbGRJdGVtKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZChjaGlsZExpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5hcHBlbmQobGlzdEl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGFibGVDb250ZW50cy5hcHBlbmQobGlzdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGRzIGJhY2sgdG8gdG9wIGxpbmsgY29tcG9uZW50LlxuICAgICAqXG4gICAgICogQHJldHVybnMgT2JqZWN0XG4gICAgICovXG4gICAgY3JlYXRlQmFja1RvVG9wTGluaygpIHtcbiAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWUtYmFjay10by10b3AnKTtcblxuICAgICAgbGV0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI3B1YmxpY2F0aW9uLXRpdGxlJyk7XG4gICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCd0aXRsZScsICdCYWNrIHRvIHRvcCcpO1xuICAgICAgYW5jaG9yLmlubmVyVGV4dCA9ICdCYWNrIHRvIHRvcCc7XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoYW5jaG9yKTtcblxuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGJhY2sgdG8gdG9wIGxpbmtzIGFib3ZlIFRPQyBoZWFkaW5ncyB3aXRoaW4gY29udGVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Tm9kZUxpc3R9ICAgICAgaGVhZGluZ3NcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXRCYWNrVG9Ub3BMaW5rcyhoZWFkaW5ncykge1xuICAgICAgaGVhZGluZ3MuZm9yRWFjaCgoaGVhZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbGluayA9IHRoaXMuY3JlYXRlQmFja1RvVG9wTGluaygpO1xuICAgICAgICBoZWFkaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmssIGhlYWRpbmcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBtYXJrdXAgZm9yIGxpc3QgaXRlbSBjaGV2cm9uIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENoZXZyb25TVkcoKSB7XG4gICAgICByZXR1cm4gJzxzdmcgd2lkdGg9XCI4XCIgaGVpZ2h0PVwiMTRcIiB2aWV3Qm94PVwiMCAwIDggMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8cGF0aCBkPVwiTTguMDAwMTkgNi45OTk5NEM4LjAwMDk1IDcuMTMxNTUgNy45NzU3MiA3LjI2MjAxIDcuOTI1OTYgNy4zODM4NUM3Ljg3NjE5IDcuNTA1NjkgNy44MDI4NyA3LjYxNjUgNy43MTAxOSA3LjcwOTk0TDIuNzEwMTkgMTIuNzA5OUMyLjYxNjk1IDEyLjgwMzIgMi41MDYyNiAxMi44NzcxIDIuMzg0NDMgMTIuOTI3NkMyLjI2MjYxIDEyLjk3ODEgMi4xMzIwNCAxMy4wMDQgMi4wMDAxOSAxMy4wMDRDMS44NjgzMyAxMy4wMDQgMS43Mzc3NiAxMi45NzgxIDEuNjE1OTQgMTIuOTI3NkMxLjQ5NDExIDEyLjg3NzEgMS4zODM0MiAxMi44MDMyIDEuMjkwMTggMTIuNzA5OUMxLjE5Njk1IDEyLjYxNjcgMS4xMjI5OSAxMi41MDYgMS4wNzI1MyAxMi4zODQyQzEuMDIyMDYgMTIuMjYyNCAwLjk5NjA5NCAxMi4xMzE4IDAuOTk2MDk0IDExLjk5OTlDMC45OTYwOTQgMTEuODY4MSAxLjAyMjA2IDExLjczNzUgMS4wNzI1MyAxMS42MTU3QzEuMTIyOTkgMTEuNDkzOSAxLjE5Njk1IDExLjM4MzIgMS4yOTAxOCAxMS4yODk5TDUuNTkwMTkgNi45OTk5NEwxLjI5MDE4IDIuNzA5OTRDMS4xMDE4OCAyLjUyMTY0IDAuOTk2MDk0IDIuMjY2MjQgMC45OTYwOTQgMS45OTk5NEMwLjk5NjA5NCAxLjczMzY0IDEuMTAxODggMS40NzgyNSAxLjI5MDE4IDEuMjg5OTRDMS40Nzg0OSAxLjEwMTY0IDEuNzMzODggMC45OTU4NSAyLjAwMDE5IDAuOTk1ODVDMi4yNjY0OSAwLjk5NTg1IDIuNTIxODggMS4xMDE2NCAyLjcxMDE5IDEuMjg5OTRMNy43MTAxOSA2LjI4OTk0QzcuODAyODcgNi4zODMzOCA3Ljg3NjE5IDYuNDk0MiA3LjkyNTk2IDYuNjE2MDNDNy45NzU3MiA2LjczNzg3IDguMDAwOTUgNi44NjgzMyA4LjAwMDE5IDYuOTk5OTRaXCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgbWFya3VwIGZvciBsaXN0IGl0ZW0gY2lyY2xlIFNWRy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGdldENpcmNsZVNWRygpIHtcbiAgICAgIHJldHVybiAnPHN2ZyB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIzXCIgdmlld0JveD1cIjAgMCAzIDNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcbiAgICAgICAgICAgICAgICc8Y2lyY2xlIGN4PVwiMS41XCIgY3k9XCIxLjVcIiByPVwiMS41XCIgZmlsbD1cImJsYWNrXCIvPicgK1xuICAgICAgICAgICAgICc8L3N2Zz4nO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWUtYW5jaG9ybGlua3MnKV0uZm9yRWFjaCh0YWJsZUNvbnRlbnRzID0+IG5ldyBUYWJsZUNvbnRlbnRzKHRhYmxlQ29udGVudHMpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIE1lZGlhIHRyYW5zY3JpcHRcbiAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLXRyYW5zY3JpcHQnIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIFRyYW5zY3JpcHQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKVxuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lcilcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudG9nZ2xlcylcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgaWYgKHRoaXMudG9nZ2xlcykge1xuICAgICAgICB0aGlzLnRvZ2dsZXMuZm9yRWFjaCh0b2dnbGUgPT4gdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZ0ID0+IHRoaXMudG9nZ2xldHJhbnNjcmlwdChldnQpKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGV0cmFuc2NyaXB0KCkge1xuICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQoKSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuaHN1ay1tZWRpYV9fdHJhbnNjcmlwdC1leHBhbmRlZFwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlzQ29sbGFwc2VkKCkge1xuICAgICAgaWYodGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmhzdWstbWVkaWFfX3RyYW5zY3JpcHQtZXhwYW5kZWRcIikpe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstbWVkaWFfX3RyYW5zY3JpcHQnKV0uZm9yRWFjaCh0cmFuc2NyaXB0ID0+IG5ldyBUcmFuc2NyaXB0KHRyYW5zY3JpcHQpKVxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICogTWFwXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay1yZWdpb24nIGFyZSBwYXNzZWQgaW50byB0aGlzIGNsYXNzXG4gICovXG4gIGNsYXNzIE5hdk1hcCB7XG4gICAgY29uc3RydWN0b3IobWFwLCBzdmcpIHtcbiAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgdGhpcy5zdmcgPSBzdmc7XG4gICAgICB0aGlzLnJlZ2lvbnMgPSBbLi4uc3ZnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXJlZ2lvbicpXTtcbiAgICAgIHRoaXMubGlzdCA9IFsuLi5tYXAucXVlcnlTZWxlY3RvckFsbCgnI3JlZ2lvbkxpc3QgbGkgYScpXTtcblxuICAgICAgdGhpcy5hZGRMaW5rc1RvTWFwKCk7XG4gICAgICB0aGlzLmNsZWFuU3R5bGUoKTtcbiAgICAgIHRoaXMubWFwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMubGlua0V2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY2xlYW5TdHlsZSgpe1xuICAgICAgdGhpcy5zdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdzdHlsZScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBcbiAgICAgICAgLnN0MHtmaWxsOiMwMDVFQjg7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9XG4gICAgICAgIC5zdDF7ZmlsbDojQUVCN0JEO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fVxuICAgICAgICAuaG92ZXIgKiB7c3Ryb2tlOiNmZmViM2I7c3Ryb2tlLXdpZHRoOiA2O3N0cm9rZS1taXRlcmxpbWl0OiAxO31cbiAgICAgICAgLmZvY3VzIC5zdDAge2ZpbGw6I2ZmZWIzYjtzdHJva2U6IzIxMmIzMjt9XG4gICAgICAgIC5mb2N1cyAqIHtzdHJva2Utd2lkdGg6IDY7c3Ryb2tlLW1pdGVybGltaXQ6IDE7fVxuICAgICAgYCkpXG4gICAgfVxuXG4gICAgYWRkTGlua3NUb01hcCgpe1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2gocmVnaW9uID0+IHtcbiAgICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5tYXBDb3VudGVycGFydChyZWdpb24uaWQpXG4gICAgICAgIGNvbnN0IHRoaXNIcmVmID0gKHRoaXNDb3VudGVycGFydC5ocmVmKT8gdGhpc0NvdW50ZXJwYXJ0LmhyZWYgOiBcIi9cIlxuICAgICAgICBjb25zdCB0aGlzVGl0bGUgPSAodGhpc0NvdW50ZXJwYXJ0LmlubmVySFRNTCk/IHRoaXNDb3VudGVycGFydC5pbm5lckhUTUwgOiBcIlwiXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gcmVnaW9uLmlubmVySFRNTDtcbiAgICAgICAgY29uc3Qgd3JhcExpbmsgPSBgPGEgeGxpbms6aHJlZj1cIiR7dGhpc0hyZWZ9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgPHRpdGxlPiR7dGhpc1RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgJHtjaGlsZHJlbn1cbiAgICAgICAgPC9hPmBcbiAgICAgICAgcmVnaW9uLmlubmVySFRNTCA9IHdyYXBMaW5rXG4gICAgICB9KVxuICAgIH1cblxuICAgIG1hcEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHRoaXMubWFwSW4oZWxlbWVudCwgXCJob3ZlclwiLCB0cnVlKSkpXG4gICAgICB0aGlzLnJlZ2lvbnMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHRoaXMubWFwT3V0KGVsZW1lbnQsIFwiaG92ZXJcIiwgdHJ1ZSkpKVxuICAgICAgdGhpcy5yZWdpb25zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB0aGlzLm1hcENsaWNrKGV2ZW50KSkpXG4gICAgfVxuXG4gICAgbGlua0V2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgdGhpcy5saXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJpblwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZXZlbnQgPT4gdGhpcy5saW5rRXZlbnQoZXZlbnQudGFyZ2V0LCBcIm91dFwiLCBcImhvdmVyXCIpKSlcbiAgICAgIHRoaXMubGlzdC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBldmVudCA9PiB0aGlzLmxpbmtFdmVudChldmVudC50YXJnZXQsIFwiaW5cIiwgXCJmb2N1c1wiKSkpXG4gICAgICB0aGlzLmxpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHRoaXMubGlua0V2ZW50KGV2ZW50LnRhcmdldCwgXCJvdXRcIiwgXCJmb2N1c1wiKSkpXG4gICAgfVxuXG4gICAgbW92ZVRvVG9wKG9iaikge1xuICAgICAgb2JqLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqKTtcbiAgICB9XG5cbiAgICBtYXBJbih0YXJnZXQsIHN0eWxlLCBtYXApIHtcbiAgICAgIHRoaXMubW92ZVRvVG9wKHRhcmdldClcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKHN0eWxlKVxuICAgICAgaWYobWFwKSB7XG4gICAgICAgIGNvbnN0IHRoaXNMaW5rID0gdGhpcy5tYXBDb3VudGVycGFydCh0YXJnZXQuaWQpXG4gICAgICAgIGlmKHRoaXNMaW5rKSB0aGlzTGluay5jbGFzc0xpc3QuYWRkKFwiaG92ZXJcIilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBPdXQodGFyZ2V0LCBzdHlsZSwgbWFwKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZSlcbiAgICAgIGlmKG1hcCkge1xuICAgICAgICBjb25zdCB0aGlzTGluayA9IHRoaXMubWFwQ291bnRlcnBhcnQodGFyZ2V0LmlkKVxuICAgICAgICBpZih0aGlzTGluaykgdGhpc0xpbmsuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyXCIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwQ2xpY2soZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHRoaXNNYXBDb3VudGVycGFydCA9IHRoaXMubWFwQ291bnRlcnBhcnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJnXCIpLmlkKVxuICAgICAgaWYodGhpc01hcENvdW50ZXJwYXJ0KSB0aGlzTWFwQ291bnRlcnBhcnQuY2xpY2soKVxuICAgIH1cblxuICAgIG1hcENvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saXN0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG5cbiAgICBsaW5rRXZlbnQodGFyZ2V0LCBkaXJlY3Rpb24sIHR5cGUpIHtcbiAgICAgIGNvbnN0IHRoaXNJZCA9IHRhcmdldC5pZFxuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5saW5rQ291bnRlcnBhcnQodGhpc0lkKVxuICAgICAgaWYoZGlyZWN0aW9uID09PSBcImluXCIpIHtcbiAgICAgICAgdGhpcy5tYXBJbih0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1hcE91dCh0aGlzQ291bnRlcnBhcnQsIHR5cGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGlua0NvdW50ZXJwYXJ0KHRoaXNJZCkge1xuICAgICAgY29uc3QgdGhpc0NvdW50ZXJwYXJ0ID0gdGhpcy5yZWdpb25zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0aGlzSWQpXG4gICAgICByZXR1cm4gKHRoaXNDb3VudGVycGFydClcbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLW1hcCcpXS5mb3JFYWNoKG1hcCA9PiB7XG4gICAgLy8gbmVlZCB0byB3YWl0IGZvciBTVkcgdG8gbG9hZFxuICAgIGNvbnN0IG9iaiA9IG1hcC5xdWVyeVNlbGVjdG9yKCdvYmplY3QnKVxuICAgIG9iai5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgIGNvbnN0IHN2ZyA9IG9iai5nZXRTVkdEb2N1bWVudCgpLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpXG4gICAgICBpZihzdmcpe1xuICAgICAgICBuZXcgTmF2TWFwKG1hcCwgc3ZnKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAvKipcbiAgKiBOZXdzbGV0dGVyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgTmV3c2xldHRlciB7XG4gICAgY29uc3RydWN0b3IobmV3c2xldHRlcikge1xuICAgICAgdGhpcy5uZXdzbGV0dGVyID0gbmV3c2xldHRlcjtcbiAgICAgIHRoaXMucmVxdWlyZWRJbnB1dHMgPSBuZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbcmVxdWlyZWRdXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgd2luZG93LnJlY2FwdGNoYUNhbGxiYWNrID0gdGhpcy5yZWNhcHRjaGFDYWxsYmFja1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgdGhpcy5hZGRFdmVudHMoKSAgICAgIDtcbiAgICB9XG4gICAgXG4gICAgYWRkRXZlbnRzKCkge1xuICAgICAgdGhpcy5yZXF1aXJlZElucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGMgPT4gdGhpcy52YWxpZGF0ZShjLnRhcmdldCkpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0YXJnZXQpIHtcbiAgICAgIHZhciB0YXJnZXRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JzLVwiK3RhcmdldC5uYW1lKTtcbiAgICAgIHZhciB0YXJnZXRTdW1tYXJ5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLXN1bW1hcnktXCIrdGFyZ2V0Lm5hbWUpO1xuICAgICAgaWYgKHRhcmdldC5uYW1lID09IFwiZmlyc3RuYW1lXCIgfHwgdGFyZ2V0Lm5hbWUgPT0gXCJsYXN0bmFtZVwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbXB0eSh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJlbWFpbFwiKSB7XG4gICAgICAgIHRoaXMuZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGFyZ2V0Lm5hbWUgPT0gXCJjb25zZW50XCIpIHtcbiAgICAgICAgdGhpcy5lcnJvckNvbnNlbnQodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU3VtbWFyeSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN1bW1hcnkoKSB7XG4gICAgICB2YXIgZXJyb3JTdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1zdW1tYXJ5XCIpO1xuICAgICAgaWYgKHRoaXMuZXJyb3JzLmxlbmd0aCA+IDApXG4gICAgICB7ICAgICAgICBcbiAgICAgICAgZXJyb3JTdW1tYXJ5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVycm9yU3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVycm9yRW1wdHkodGFyZ2V0LCB0YXJnZXRFcnJvciwgdGFyZ2V0U3VtbWFyeUVycm9yKSB7XG4gICAgICBpZiAodGhpcy5pc0VtcHR5KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JFbWFpbCh0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgaWYgKCFyZS50ZXN0KHRhcmdldC52YWx1ZSkpIHsgICAgICAgIFxuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3JDb25zZW50KHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgaWYgKCF0YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLnNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGlkZUVycm9yKHRhcmdldCwgdGFyZ2V0RXJyb3IsIHRhcmdldFN1bW1hcnlFcnJvcikge1xuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIHRhcmdldEVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0YXJnZXRTdW1tYXJ5RXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgIH1cblxuICAgIHNob3dFcnJvcih0YXJnZXQsIHRhcmdldEVycm9yLCB0YXJnZXRTdW1tYXJ5RXJyb3IpIHtcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZvcm0tZ3JvdXAtLWVycm9yJyk7XG4gICAgICB0YXJnZXRFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRhcmdldFN1bW1hcnlFcnJvci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZXJyb3JzID0gdGhpcy5lcnJvcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGFyZ2V0Lm5hbWUpO1xuICAgICAgdGhpcy5lcnJvcnMucHVzaCh0YXJnZXQubmFtZSk7XG4gICAgfVxuXG4gICAgaXNFbXB0eShzdHIpIHtcbiAgICAgIHJldHVybiAhc3RyLnRyaW0oKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1lcnJvci1tZXNzYWdlJyk7XG4gICAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgY29uc3QgZXJyb3JDbGFzc2VzID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1mb3JtLWdyb3VwLS1lcnJvcicpO1xuICAgICAgZXJyb3JDbGFzc2VzLmZvckVhY2goZXJyb3JjbGFzcyA9PiB7XG4gICAgICAgIGVycm9yY2xhc3MuY2xhc3NMaXN0LnJlbW92ZSgnbmhzdWstZm9ybS1ncm91cC0tZXJyb3InKTtcbiAgICAgIH0pXG4gICAgICBjb25zdCBlcnJvclN1bW1hcnkgPSB0aGlzLm5ld3NsZXR0ZXIucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWVycm9yLXN1bW1hcnknKTtcbiAgICAgIGVycm9yU3VtbWFyeS5mb3JFYWNoKGVycm9yc3VtbWFyeSA9PiB7XG4gICAgICAgIGVycm9yc3VtbWFyeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IGVycm9yU3VtbWFyeUl0ZW1zID0gdGhpcy5uZXdzbGV0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1zdW1tYXJ5LWl0ZW0nKTtcbiAgICAgIGVycm9yU3VtbWFyeUl0ZW1zLmZvckVhY2goc3VtbWFyeWl0ZW0gPT4ge1xuICAgICAgICBzdW1tYXJ5aXRlbS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJztcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVjYXB0Y2hhQ2FsbGJhY2soKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtI25ld3NsZXR0ZXItZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLW5ld3NsZXR0ZXItZm9ybScpXS5mb3JFYWNoKChuZXdzbGV0dGVyKSA9PiBuZXcgTmV3c2xldHRlcihuZXdzbGV0dGVyKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIC8qKlxyXG4gICogVGFic1xyXG4gICogRWxlbWVudHMgd2l0aCB0aGUgc2VsZWN0b3IgJy5uaHN1ay10YWJzJyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xyXG4gICovXHJcbiAgY2xhc3MgVGFicyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YWJjb21wb25lbnQsIGkpIHtcclxuICAgICAgdGhpcy50YWJjb21wb25lbnQgPSB0YWJjb21wb25lbnRcclxuICAgICAgdGhpcy5pbml0KClcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJ0YWJcIl0nKVxyXG4gICAgICBjb25zdCB0YWJMaXN0ID0gdGhpcy50YWJjb21wb25lbnQucXVlcnlTZWxlY3RvcignW3JvbGU9XCJ0YWJsaXN0XCJdJylcclxuICAgICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XHJcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjID0+IHRoaXMuY2hhbmdlVGFicyhjKSlcclxuICAgICAgfSlcclxuICAgICAgbGV0IHRhYkZvY3VzID0gMFxyXG4gICAgICB0YWJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xyXG4gICAgICAgIC8vIE1vdmUgcmlnaHRcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSlcclxuICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzKytcclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGVuZCwgZ28gdG8gdGhlIHN0YXJ0XHJcbiAgICAgICAgICAgIGlmICh0YWJGb2N1cyA+PSB0YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1vdmUgbGVmdFxyXG4gICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICAgIHRhYkZvY3VzLS1cclxuICAgICAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIHN0YXJ0LCBtb3ZlIHRvIHRoZSBlbmRcclxuICAgICAgICAgICAgaWYgKHRhYkZvY3VzIDwgMCkge1xyXG4gICAgICAgICAgICAgIHRhYkZvY3VzID0gdGFicy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRhYnNbdGFiRm9jdXNdLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApXHJcbiAgICAgICAgICB0YWJzW3RhYkZvY3VzXS5mb2N1cygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUYWJzKGUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coZSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgIGNvbnN0IHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmVudCk7XHJcbiAgICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGVcclxuICAgICAgLy8gY29uc29sZS5sb2coZ3JhbmRwYXJlbnQpO1xyXG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylbMF07XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkKVxyXG4gICAgICBjb25zdCBpc19tb2JpbGUgPSBncmFuZHBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25oc3VrLXRhYnNfX21vYmlsZScpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGlzX21vYmlsZSlcclxuXHJcbiAgICAgIC8vIENvbXBhcmUgc2VsZWN0ZWQgYW5kIHRhcmdldCwgYW5kIGlmIG9uIG1vYmlsZVxyXG4gICAgICAvLyBDbG9zZSB0aGUgdGFiIGlmIGFscmVhZHkgb3BlblxyXG4gICAgICBpZih0YXJnZXQgPT0gc2VsZWN0ZWQgJiYgaXNfbW9iaWxlKSB7XHJcbiAgICAgICAgLy8gVW5zZWxlY3QgYWxsIHRhYnNcclxuICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkKHBhcmVudClcclxuICAgICAgICAvLyBIaWRlIGFsbCB0YWJzXHJcbiAgICAgICAgdGhpcy5oaWRlVGFicyhncmFuZHBhcmVudClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgc2VsZWN0ZWQgdGFic1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQocGFyZW50KVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhpcyB0YWIgYXMgc2VsZWN0ZWRcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKHRhcmdldClcclxuXHJcbiAgICAgICAgLy8gSGlkZSBhbGwgdGFiIHBhbmVsc1xyXG4gICAgICAgIHRoaXMuaGlkZVRhYnMoZ3JhbmRwYXJlbnQpXHJcblxyXG4gICAgICAgIC8vIFNob3cgdGhlIHNlbGVjdGVkIHBhbmVsXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0ZWQoZ3JhbmRwYXJlbnQucGFyZW50Tm9kZSwgdGFyZ2V0KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTZWxlY3RlZChlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpXHJcbiAgICAgICAgLmZvckVhY2godCA9PiB0LnNldEF0dHJpYnV0ZShcImFyaWEtc2VsZWN0ZWRcIiwgZmFsc2UpKTtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay10YWJzX19saXN0LWl0ZW0tLXNlbGVjdGVkJylcclxuICAgICAgICAuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZShcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlbGVjdGVkKGVsZSkge1xyXG4gICAgICBlbGUuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB0cnVlKVxyXG4gICAgICBlbGUuY2xhc3NMaXN0LmFkZChcIm5oc3VrLXRhYnNfX2xpc3QtaXRlbS0tc2VsZWN0ZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBoaWRlVGFicyhlbGUpIHtcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwidGFicGFuZWxcIl0nKVxyXG4gICAgICAgIC5mb3JFYWNoKHAgPT4gcC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgdHJ1ZSkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NlbGVjdGVkKGVsZSwgdGFyZ2V0KSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVsZS5xdWVyeVNlbGVjdG9yKGAjJHt0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKX1gKSlcclxuICAgICAgZWxlXHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYCMke3RhcmdldC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpfWApXHJcbiAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduaHN1ay10YWJzJyldLmZvckVhY2goKHRhYnMsIGkpID0+IG5ldyBUYWJzKHRhYnMsIGkpKTtcclxufSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLyoqXG4gICAqIEZpbHRlclxuICAgKiBFbGVtZW50cyB3aXRoIHRoZSBzZWxlY3RvciAnLm5oc3VrLWZpbHRlcicgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgICovXG4gIGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgICAgdGhpcy5jaGVja2JveGVzID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuICAgICAgdGhpcy5ncm91cHMgPSBbLi4udGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyX19ncm91cCcpXTtcbiAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLm5oc3VrLWZpbHRlcl9fc3VibWl0Jyk7XG4gICAgICB0aGlzLmNsZWFyVG9nZ2xlID0gWy4uLnRoaXMuY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlcl9fZ3JvdXBfX2NsZWFyJyldO1xuXG4gICAgICB0aGlzLnNldFVwKCk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IGxlZ2VuZCA9IGdyb3VwLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWVsZHNldF9fbGVnZW5kJyk7XG4gICAgICAgIGlmIChsZWdlbmQpIHtcbiAgICAgICAgICBsZWdlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy50b2dnbGVHcm91cChldnQpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xlYXJUb2dnbGUuZm9yRWFjaCh0b2dnbGUgPT4ge1xuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4gdGhpcy5jbGVhckNoZWNrYm94ZXMoZXZ0KSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRVcCgpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlci0tanMnKTtcblxuICAgICAgLy8gQ2xvc2UgZ3JvdXBzXG4gICAgICAvLyB0aGlzLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IGdyb3VwLmNsYXNzTGlzdC5hZGQoJ25oc3VrLWZpbHRlcl9fZ3JvdXAtLWNsb3NlZCcpKTtcblxuICAgICAgdGhpcy5jbGVhclRvZ2dsZS5mb3JFYWNoKHRvZ2dsZSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2xlYXJMaW5rVmlzaWJpbGl0eSh0b2dnbGUpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEhpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgaWYgKHRoaXMuc3VibWl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlR3JvdXAoZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC50YXJnZXQuY2xvc2VzdCgnLm5oc3VrLWZpbHRlcl9fZ3JvdXAnKS5jbGFzc0xpc3QudG9nZ2xlKCduaHN1ay1maWx0ZXJfX2dyb3VwLS1jbG9zZWQnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVSZXN1bHRzKGV2dCkge1xuICAgICAgdGhpcy5jb250YWluZXIuc3VibWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJDaGVja2JveGVzKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZUxpbmsgPSBldnQudGFyZ2V0O1xuICAgICAgY29uc3QgY2hlY2tib3hlcyA9IFsuLi50b2dnbGVMaW5rLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrLWNoZWNrYm94ZXNfX2lucHV0JyldO1xuXG4gICAgICBjaGVja2JveGVzLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYi5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnVwZGF0ZVJlc3VsdHMoZXZ0KTtcbiAgICB9XG5cbiAgICB0b2dnbGVDbGVhckxpbmtWaXNpYmlsaXR5KHRvZ2dsZUxpbmspIHtcbiAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBbLi4udG9nZ2xlTGluay5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1ay1jaGVja2JveGVzX19pbnB1dCcpXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gY2hlY2tib3hlcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXNbaV0uaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcbiAgICAgICAgICB0b2dnbGVMaW5rLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmhzdWstZmlsdGVyJyldLmZvckVhY2goZmlsdGVyID0+IG5ldyBGaWx0ZXIoZmlsdGVyKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAqIEZpbHRlclRhZ1xuICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstZmlsdGVyLXRhZycgYXJlIHBhc3NlZCBpbnRvIHRoaXMgY2xhc3NcbiAgKi9cbiAgY2xhc3MgRmlsdGVyVGFnIHtcbiAgICBjb25zdHJ1Y3Rvcih0YWcpIHtcbiAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgdGhpcy5pY29uID0gdGFnLnF1ZXJ5U2VsZWN0b3IoJy5uaHN1ay1maWx0ZXItdGFnX19pY29uJyk7XG5cbiAgICAgIHRoaXMuc2V0VXAoKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMudGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gdGhpcy5yZW1vdmVGaWx0ZXIoZXZ0KSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlRmlsdGVyKGV2dCkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3ZhbHVlPScke3RoaXMudGFnLmRhdGFzZXQuZmlsdGVyfSddYCkuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tib3guZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgIH0pO1xuXG4gICAgICBldnQudGFyZ2V0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHNldFVwKCkge1xuICAgICAgdGhpcy50YWcuY2xhc3NMaXN0LmFkZCgnbmhzdWstZmlsdGVyLXRhZy0tanMnKTtcblxuICAgICAgaWYgKHRoaXMuaWNvbikge1xuICAgICAgICB0aGlzLmljb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLWZpbHRlci10YWcnKV0uZm9yRWFjaCh0YWcgPT4gbmV3IEZpbHRlclRhZyh0YWcpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIC8qKlxuICAgKiBMaXN0aW5nXG4gICAqIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstbGlzdGluZycgYW5kICcuaGVlLWxpc3RpbmdzJyBhcmUgcGFzc2VkXG4gICAqIGludG8gdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHRvZG8gUmVtb3ZlIGxlZ2FjeSByZWZlcmVuY2VzIHRvIC5uaHN1ay1saXN0aW5nIGFuZCBsb29wcyBvbmNlIGFsbCBuZXdcbiAgICogY29sbGVjdGlvbiB0ZW1wbGF0ZXMgaGF2ZSBiZWVuIGltcGxlbWVudGVkLlxuICAgKi9cbiAgY2xhc3MgTGlzdGluZyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG5cbiAgICAgIFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3NvcnQsIC5uaHN1ay1saXN0aW5nX19zb3J0JyldLmZvckVhY2goZm9ybUVsZW1lbnQgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKGZvcm1FbGVtZW50KTtcbiAgICAgICAgdGhpcy50b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXS5mb3JFYWNoKHNlbGVjdCA9PiB7XG4gICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB0aGlzLnVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVKYXZhc2NyaXB0RWxlbWVudHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGlmIChmb3JtRWxlbWVudCkge1xuICAgICAgICBbLi4uZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlZS1saXN0aW5nX19maWx0ZXJfX3N1Ym1pdCwgLm5oc3VrLWxpc3RpbmdfX3NvcnRfX3N1Ym1pdCcpXS5mb3JFYWNoKHN1Ym1pdCA9PiB7XG4gICAgICAgICAgaWYgKHN1Ym1pdCkge1xuICAgICAgICAgICAgc3VibWl0LmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlc3VsdHMoZm9ybUVsZW1lbnQpIHtcbiAgICAgIGZvcm1FbGVtZW50LnN1Ym1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVlLWxpc3RpbmcsIC5uaHN1ay1saXN0aW5nJyldLmZvckVhY2gobGlzdGluZyA9PiBuZXcgTGlzdGluZyhsaXN0aW5nKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNsYXNzIENvb2tpZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgLy8gYmFubmVyXG4gICAgICB0aGlzLnVzZUNvb2tpZXMgPSAnJ1xuICAgICAgdGhpcy5iYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmhzdWstY29va2llLWJhbm5lcicpXG4gICAgICB0aGlzLnNob3dDb29raWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dDb29raWVzJylcbiAgICAgIHRoaXMucmVtb3ZlQ29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW1vdmVDb29raWVzJylcbiAgICAgIHRoaXMuaG9zdCA9IHRoaXMuZ2V0SG9zdCgpXG5cbiAgICAgIHRoaXMuY29va2llU3RhdHVzKClcbiAgICAgIHRoaXMuc2V0Q29va2llcygpXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgLy8gcG9saWN5IHBhZ2VcbiAgICAgIHRoaXMuU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5oc3VrX19jb29raWVTdGF0dXMnKVxuICAgICAgdGhpcy5JbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uaHN1a19fY29va2llc0luJylcbiAgICAgIHRoaXMuT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5oc3VrX19jb29raWVzT3V0JylcblxuICAgICAgdGhpcy50b2dnbGVTdGF0dXMoKVxuICAgIH1cblxuICAgIGNvb2tpZVN0YXR1cygpe1xuICAgICAgY29uc3QgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIilcbiAgICAgIGNvb2tpZXMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBjLm1hdGNoKG5ldyBSZWdFeHAoJyhefCApY29va2llX2NvbnNlbnQoW147XSspJykpXG4gICAgICAgIGlmKG1hdGNoKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gYy5zcGxpdChcIj1cIilbMV1cbiAgICAgICAgICB0aGlzLnVzZUNvb2tpZXMgPSBzdGF0dXNcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRIb3N0KCl7XG4gICAgICBjb25zdCBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3QudG9TdHJpbmcoKS5zcGxpdChcIjpcIilbMF1cbiAgICAgIHJldHVybiBob3N0XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZih0aGlzLnNob3dDb29raWVzKSB7XG4gICAgICAgIHRoaXMuc2hvd0Nvb2tpZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zaG93Q29va2llKVxuICAgICAgfVxuICAgICAgaWYodGhpcy5yZW1vdmVDb29raWVzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29va2llcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnJlbW92ZUNvb2tpZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBiYW5uZXJTaG93KCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiYW5uZXJIaWRlKCkge1xuICAgICAgaWYodGhpcy5iYW5uZXIpIHtcbiAgICAgICAgdGhpcy5iYW5uZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29va2llcygpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlQ29va2llcyA9PT0gJycpIHtcbiAgICAgICAgICB0aGlzLmJhbm5lclNob3coKVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0FjY2VwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuaHN1ay1jb29raWUtYmFubmVyX19saW5rX2FjY2VwdF9hbmFseXRpY3MnKVxuICAgICAgICAgIGlmIChhbmFseXRpY3NBY2NlcHQpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0FjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHRoaXMuYmFubmVySGlkZSgpXG4gICAgICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGFuYWx5dGljc0RlY2xpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmhzdWstY29va2llLWJhbm5lcl9fbGlua19kZWNsaW5lX2FuYWx5dGljcycpXG4gICAgICAgICAgaWYgKGFuYWx5dGljc0RlY2xpbmUpIHtcbiAgICAgICAgICAgIGFuYWx5dGljc0RlY2xpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYGNvb2tpZV9jb25zZW50PXRydWU7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgbm9Db29raWUoKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgY29va2llX2NvbnNlbnQ9ZmFsc2U7IGRvbWFpbj0ke3RoaXMuaG9zdH07IG1heC1hZ2U9Nzc3NjAwMGBcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gICAgdG9nZ2xlU3RhdHVzKCkge1xuICAgICAgaWYodGhpcy5TdGF0dXMpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ubmhzdWtfX2Nvb2tpZXNPdXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2dCA9PiB7XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmJhbm5lckhpZGUoKVxuICAgICAgICAgIHRoaXMudXNlQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5uaHN1a19fY29va2llc0luJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldnQgPT4ge1xuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5iYW5uZXJIaWRlKClcbiAgICAgICAgICB0aGlzLm5vQ29va2llKClcbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICh0aGlzLnVzZUNvb2tpZXMgPT09IFwiZmFsc2VcIiB8fCB0aGlzLnVzZUNvb2tpZXMgPT09ICcnICkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheU5vbmUodGhpcy5JbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlOb25lKHRoaXMuT3V0KVxuICAgICAgICAgIHRoaXMuZGlzcGxheUJsb2NrKHRoaXMuSW4pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwbGF5QmxvY2soaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpXG4gICAgfVxuXG4gICAgZGlzcGxheU5vbmUoaXRlbSkge1xuICAgICAgaXRlbS5mb3JFYWNoKGUgPT4gZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKVxuICAgIH1cblxuICAgIC8vIHJlZHVuZGFudCBidXQgdXNlZnVsXG4gICAgc2hvd0Nvb2tpZSgpIHtcbiAgICAgIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29raWVzJylcbiAgICAgIG91dHB1dC50ZXh0Q29udGVudCA9ICc+ICcgKyBkb2N1bWVudC5jb29raWVcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQ29va2llKCkge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVfY29uc2VudD1mYWxzZTsgbWF4LWFnZT0wXCJcbiAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfVxuXG4gIH1cblxuICBuZXcgQ29va2llcyhkb2N1bWVudClcbn0iLCIvKipcbiogU3ViTmF2XG4qIEVsZW1lbnRzIHdpdGggdGhlIHNlbGVjdG9yICcubmhzdWstc3VibmF2JyBhcmUgcGFzc2VkIGludG8gdGhpcyBjbGFzc1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjbGFzcyBzdWJOYXYge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJcbiAgICAgIHRoaXMudG9nZ2xlTGluayA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2EnKVxuICAgICAgdGhpcy5wYXJlbnRMaXN0ID0gdGhpcy5jb250YWluZXIucGFyZW50Tm9kZVxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICBpZiAodGhpcy50b2dnbGVMaW5rKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgICAgIHRoaXMudG9nZ2xlTGluay5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBldmVudCA9PiB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpKVxuICAgICAgICB0aGlzLnRvZ2dsZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU1lbnUoZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVN0YXRlKCl7XG4gICAgICBjb25zdCBhY3RpdmVFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgICAgYWN0aXZlRWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgaWYoZWxlbSAhPSB0aGlzLmNvbnRhaW5lcil7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpXG4gICAgICAgICAgZWxlbS50b2dnbGVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnBhcmVudExpc3QsICdzdWJuYXYtb3BlbicpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZihhY3RpdmVFbGVtcy5sZW5ndGggPT09IDApe1xuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzKHRoaXMucGFyZW50TGlzdCwgJ3N1Ym5hdi1vcGVuJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZVN0YXRlKClcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3ModGhpcy5jb250YWluZXIsIFwiaXMtYWN0aXZlXCIpXG4gICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSh0aGlzLmNvbnRhaW5lciwgXCJhcmlhLWV4cGFuZGVkXCIpXG4gICAgfVxuXG4gICAgdG9nZ2xlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWNsYXNzTmFtZSkgcmV0dXJuXG4gICAgICBjb25zdCBoYXNDbGFzcyA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgICAgIGlmIChoYXNDbGFzcykge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVBdHRyaWJ1dGUoZWxlbWVudCwgYXR0cikge1xuICAgICAgLy8gUmV0dXJuIHdpdGhvdXQgZXJyb3IgaWYgZWxlbWVudCBvciBhdHRyIGFyZSBtaXNzaW5nXG4gICAgICBpZiAoIWVsZW1lbnQgfHwgIWF0dHIpIHJldHVyblxuICAgICAgLy8gVG9nZ2xlIGF0dHJpYnV0ZSB2YWx1ZS4gVHJlYXQgbm8gZXhpc3RpbmcgYXR0ciBzYW1lIGFzIHdoZW4gc2V0IHRvIGZhbHNlXG4gICAgICBjb25zdCB2YWx1ZSA9IChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKSA9PT0gJ3RydWUnKSA/ICdmYWxzZScgOiAndHJ1ZSdcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlKVxuICAgIH1cblxuICB9XG5cbiAgWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25oc3VrLXN1Ym5hdicpXS5mb3JFYWNoKHN1Ym5hdiA9PiBuZXcgc3ViTmF2KHN1Ym5hdikpXG5cbiAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtbWVudVwiKS5mb2N1cygpXG4gIH0pICovXG5cbiAgY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1tZW51XCIpO1xuXG4gIGNsb3NlTWVudSAmJiBjbG9zZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZS1tZW51XCIpLmZvY3VzKClcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHVzZXJJbnB1dChldmVudClcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdXNlcklucHV0KSBcbiAgXG4gIGZ1bmN0aW9uIHVzZXJJbnB1dChldmVudCkge1xuICAgIC8vIGNsb3NlIG1lbnUgaWYgY2xpY2tpbmcgb3V0c2lkZVxuICAgIGNvbnN0IG9wZW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgIGlmKG9wZW5NZW51KXtcbiAgICAgIGNvbnN0IGlzTm90TWVudSA9IGV2ZW50LnRhcmdldCAhPT0gb3Blbk1lbnVcbiAgICAgIGNvbnN0IGlzTm90TWVudUJ1dHRvbiA9IGV2ZW50LnRhcmdldCAhPT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGUtbWVudVwiKVxuICAgICAgY29uc3QgaXNNZW51Q2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1oZWFkZXJfX25hdmlnYXRpb24uanMtc2hvd1wiKVxuICAgICAgaWYoaXNOb3RNZW51ICYmIGlzTm90TWVudUJ1dHRvbiAmJiAhaXNNZW51Q2hpbGQpe1xuICAgICAgICBvcGVuTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2hvd1wiKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjbG9zZSBzdWIgbmF2IGlmIGNsaWNraW5nIGFueXdoZXJlIG9uIHRoZSBkb2N1bWVudCBleGNlcHQgdGhlIG9wZW4gb3IgYSBuZXcgc3VibmF2XG4gICAgY29uc3Qgb3BlblN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmhzdWstc3VibmF2LmlzLWFjdGl2ZVwiKVxuICAgIGlmKG9wZW5TdWIpe1xuICAgICAgY29uc3QgaXNOb3RTdWIgPSBldmVudC50YXJnZXQgIT09IG9wZW5TdWJcbiAgICAgIGNvbnN0IGlzU3ViQ2hpbGQgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5uaHN1ay1zdWJuYXYuaXMtYWN0aXZlXCIpXG4gICAgICBpZihpc05vdFN1YiAmJiAhaXNTdWJDaGlsZCl7XG4gICAgICAgIG9wZW5TdWIuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5oc3VrLWhlYWRlcl9fbmF2aWdhdGlvbi1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWJuYXYtb3BlblwiKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gTkhTVUstSEVFIENvbXBvbmVudHNcbmltcG9ydCBDb29raWVzIGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2Nvb2tpZXMvY29va2llcyc7XG5pbXBvcnQgU3ViTmF2IGZyb20gJy4vYmxvY2tzL3NjYWZmb2xkaW5nL2hlYWRlci9uYXZpZ2F0aW9uL3N1Ym5hdic7XG5cbi8vIEhFRSBDb21wb25lbnRzXG5pbXBvcnQgQW5jaG9yTGlua3MgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLWFuY2hvcmxpbmtzL2FuY2hvcmxpbmtzJztcbmltcG9ydCBUYWJsZUNvbnRlbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1hbmNob3JsaW5rcy90b2MnO1xuaW1wb3J0IExpc3RpbmcgZnJvbSAnLi9ibG9ja3MvZnVybml0dXJlL2NvbGxlY3Rpb25zL2hlZS1saXN0aW5nL2xpc3RpbmcnO1xuaW1wb3J0IE1lZGlhIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1tZWRpYS9tZWRpYSc7XG5pbXBvcnQgTmF2TWFwIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1uYXZtYXAvbmF2bWFwJztcbmltcG9ydCBOZXdzbGV0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS1uZXdzbGV0dGVyL25ld3NsZXR0ZXInO1xuLy9pbXBvcnQgRGV0YWlsc0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLWRldGFpbHNjYXJkL2RldGFpbHNjYXJkJztcbmltcG9ydCBUYWJzIGZyb20gJy4uL2NvbXBvbmVudHMvaGVlL2hlZS10YWJzL3RhYnMnO1xuLy9pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9oZWUvaGVlLXRpbWVsaW5lL3RpbWVsaW5lJztcblxuLy8gVW5zb3J0ZWQgY29tcG9uZW50c1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlci9maWx0ZXInO1xuaW1wb3J0IEZpbHRlclRhZyBmcm9tICcuL2Jsb2Nrcy9mdXJuaXR1cmUvY29sbGVjdGlvbnMvaGVlLWZpbHRlcnRhZy9maWx0ZXJ0YWcnO1xuXG4vL2ltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuXG4vLyBJbml0aWFsaXplIGNvbXBvbmVudHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIFRhYnMoKTtcbiAgQW5jaG9yTGlua3MoKTtcbiAgQ29va2llcygpO1xuICBGaWx0ZXIoKTtcbiAgRmlsdGVyVGFnKCk7XG4gIExpc3RpbmcoKTtcbiAgTWVkaWEoKTtcbiAgTmF2TWFwKCk7XG4gIFN1Yk5hdigpO1xuICBOZXdzbGV0dGVyKCk7XG4gIFRhYmxlQ29udGVudHMoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIkFuY2hvckxpbmtzIiwiYW5jaG9yTGlua3MiLCJoYXNBdHRyaWJ1dGUiLCJoaWRkZW4iLCJmb3VuZEhlYWRpbmdzIiwiZmluZEhlYWRpbmdzIiwiZGF0YXNldCIsImhlYWRpbmdzIiwibGVuZ3RoIiwiYWRkQW5jaG9yc1RvUGFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJoZWFkaW5nIiwiaSIsImlkIiwiaW5uZXJUZXh0IiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwicHVzaCIsInNlbGVjdG9yIiwic29tZSIsImVsIiwiY29udGFpbnMiLCJ1bCIsImNyZWF0ZUVsZW1lbnQiLCJmb3VuZEhlYWRpbmciLCJhbmNob3JsaW5rc2lnbm9yZSIsImNsYXNzTGlzdCIsImFwcGVhcnNPblJpZ2h0UGFnZUNvbHVtbiIsImxpIiwiYSIsImhyZWYiLCJoaWRkZW5FbGVtZW50cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJyZW1vdmUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsIlRhYmxlQ29udGVudHMiLCJ0YWJsZUNvbnRlbnRzIiwiY29udGFpbmVyU2VsZWN0b3IiLCJoZWFkaW5nU2VsZWN0b3IiLCJzdWJIZWFkaW5nU2VsZWN0b3IiLCJoZWFkaW5nUHJlZml4IiwibGlua3MiLCJjcmVhdGVUb2NMaW5rcyIsInNldFRvY0xpc3RNYXJrdXAiLCJzbGljZSIsImNhbGwiLCJzZXRCYWNrVG9Ub3BMaW5rcyIsInN1YkhlYWRpbmdzIiwiaW5kZXgiLCJoZWFkaW5nSWQiLCJzZXRBdHRyaWJ1dGUiLCJsaW5rIiwidGl0bGUiLCJnZXRIZWFkaW5nVGl0bGUiLCJhbmNob3IiLCJjaGlsZHJlbiIsInNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjb3VudCIsInRhZ05hbWUiLCJzdWJIZWFkaW5nSWQiLCJzaG9ydFRpdGxlIiwibGlzdCIsImxpc3RJdGVtIiwiYWRkIiwiY29udGFpbmVyIiwic3BhbiIsImdldENoZXZyb25TVkciLCJnZXRDaXJjbGVTVkciLCJhcHBlbmQiLCJwYXJlbnRMaW5rIiwiY2hpbGRMaXN0IiwiaXRlbSIsImNoaWxkSXRlbSIsImNoaWxkTGluayIsImNyZWF0ZUJhY2tUb1RvcExpbmsiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiVHJhbnNjcmlwdCIsInRvZ2dsZXMiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwidG9nZ2xldHJhbnNjcmlwdCIsImlzQ29sbGFwc2VkIiwidHJhbnNjcmlwdCIsIk5hdk1hcCIsIm1hcCIsInN2ZyIsInJlZ2lvbnMiLCJhZGRMaW5rc1RvTWFwIiwiY2xlYW5TdHlsZSIsIm1hcEV2ZW50TGlzdGVuZXJzIiwibGlua0V2ZW50TGlzdGVuZXJzIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZVRleHROb2RlIiwicmVnaW9uIiwidGhpc0NvdW50ZXJwYXJ0IiwibWFwQ291bnRlcnBhcnQiLCJ0aGlzSHJlZiIsInRoaXNUaXRsZSIsIndyYXBMaW5rIiwiZWxlbWVudCIsIm1hcEluIiwibWFwT3V0IiwiZXZlbnQiLCJtYXBDbGljayIsImxpbmtFdmVudCIsInRhcmdldCIsIm9iaiIsInBhcmVudEVsZW1lbnQiLCJzdHlsZSIsIm1vdmVUb1RvcCIsInRoaXNMaW5rIiwicHJldmVudERlZmF1bHQiLCJ0aGlzTWFwQ291bnRlcnBhcnQiLCJjbG9zZXN0IiwiY2xpY2siLCJ0aGlzSWQiLCJmaW5kIiwiZGlyZWN0aW9uIiwidHlwZSIsImxpbmtDb3VudGVycGFydCIsImdldFNWR0RvY3VtZW50IiwiTmV3c2xldHRlciIsIm5ld3NsZXR0ZXIiLCJyZXF1aXJlZElucHV0cyIsImVycm9ycyIsImluaXQiLCJ3aW5kb3ciLCJyZWNhcHRjaGFDYWxsYmFjayIsInJlc2V0Rm9ybSIsImFkZEV2ZW50cyIsImlucHV0IiwiYyIsInZhbGlkYXRlIiwidGFyZ2V0RXJyb3IiLCJnZXRFbGVtZW50QnlJZCIsIm5hbWUiLCJ0YXJnZXRTdW1tYXJ5RXJyb3IiLCJlcnJvckVtcHR5IiwiZXJyb3JFbWFpbCIsImVycm9yQ29uc2VudCIsInVwZGF0ZVN1bW1hcnkiLCJlcnJvclN1bW1hcnkiLCJkaXNwbGF5IiwiaXNFbXB0eSIsInZhbHVlIiwic2hvd0Vycm9yIiwiaGlkZUVycm9yIiwicmUiLCJ0ZXN0IiwiY2hlY2tlZCIsImZpbHRlciIsInN0ciIsInRyaW0iLCJlcnJvciIsImVycm9yQ2xhc3NlcyIsImVycm9yY2xhc3MiLCJlcnJvcnN1bW1hcnkiLCJlcnJvclN1bW1hcnlJdGVtcyIsInN1bW1hcnlpdGVtIiwicmVtb3ZlQXR0cmlidXRlIiwiVGFicyIsInRhYmNvbXBvbmVudCIsInRhYnMiLCJ0YWJMaXN0IiwidGFiIiwiY2hhbmdlVGFicyIsInRhYkZvY3VzIiwiZSIsImtleUNvZGUiLCJmb2N1cyIsInBhcmVudCIsImdyYW5kcGFyZW50Iiwic2VsZWN0ZWQiLCJpc19tb2JpbGUiLCJyZW1vdmVTZWxlY3RlZCIsImhpZGVUYWJzIiwic2V0U2VsZWN0ZWQiLCJzaG93U2VsZWN0ZWQiLCJlbGUiLCJ0IiwicCIsImdldEF0dHJpYnV0ZSIsIkZpbHRlciIsImNoZWNrYm94ZXMiLCJncm91cHMiLCJzdWJtaXQiLCJjbGVhclRvZ2dsZSIsInNldFVwIiwiY2hlY2tib3giLCJ1cGRhdGVSZXN1bHRzIiwiZ3JvdXAiLCJsZWdlbmQiLCJ0b2dnbGVHcm91cCIsImNsZWFyQ2hlY2tib3hlcyIsInRvZ2dsZUNsZWFyTGlua1Zpc2liaWxpdHkiLCJ0b2dnbGVMaW5rIiwiY2IiLCJGaWx0ZXJUYWciLCJ0YWciLCJpY29uIiwicmVtb3ZlRmlsdGVyIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiTGlzdGluZyIsImZvcm1FbGVtZW50IiwidG9nZ2xlSmF2YXNjcmlwdEVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZWxlY3QiLCJsaXN0aW5nIiwiQ29va2llcyIsInVzZUNvb2tpZXMiLCJiYW5uZXIiLCJzaG93Q29va2llcyIsInJlbW92ZUNvb2tpZXMiLCJob3N0IiwiZ2V0SG9zdCIsImNvb2tpZVN0YXR1cyIsInNldENvb2tpZXMiLCJTdGF0dXMiLCJJbiIsIk91dCIsInRvZ2dsZVN0YXR1cyIsImNvb2tpZXMiLCJjb29raWUiLCJzcGxpdCIsIm1hdGNoIiwiUmVnRXhwIiwic3RhdHVzIiwibG9jYXRpb24iLCJ0b1N0cmluZyIsInNob3dDb29raWUiLCJyZW1vdmVDb29raWUiLCJiYW5uZXJTaG93IiwiYW5hbHl0aWNzQWNjZXB0IiwiYmFubmVySGlkZSIsInVzZUNvb2tpZSIsImFuYWx5dGljc0RlY2xpbmUiLCJub0Nvb2tpZSIsInJlbG9hZCIsImRpc3BsYXlCbG9jayIsImRpc3BsYXlOb25lIiwib3V0cHV0IiwidGV4dENvbnRlbnQiLCJzdWJOYXYiLCJwYXJlbnRMaXN0IiwidG9nZ2xlTWVudSIsImFjdGl2ZUVsZW1zIiwiZWxlbSIsInRvZ2dsZUF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwiaGFuZGxlU3RhdGUiLCJjbGFzc05hbWUiLCJoYXNDbGFzcyIsImF0dHIiLCJzdWJuYXYiLCJjbG9zZU1lbnUiLCJ1c2VySW5wdXQiLCJvcGVuTWVudSIsImlzTm90TWVudSIsImlzTm90TWVudUJ1dHRvbiIsImlzTWVudUNoaWxkIiwib3BlblN1YiIsImlzTm90U3ViIiwiaXNTdWJDaGlsZCIsIlN1Yk5hdiIsIk1lZGlhIl0sInNvdXJjZVJvb3QiOiIifQ==