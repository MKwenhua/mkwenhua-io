module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "express"
var external__express_ = __webpack_require__(6);
var external__express__default = /*#__PURE__*/__webpack_require__.n(external__express_);

// CONCATENATED MODULE: ./src/server/system_health/index.js
var env = process.env;
var contentTypes = __webpack_require__(7);
var sysInfo = __webpack_require__(8);

var ProccessInfo = function ProccessInfo(req, res) {
  var url = req.url;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.end(JSON.stringify(sysInfo[url.slice(6)]()));
};

var ProcessHealth = function ProcessHealth(req, res) {
  res.writeHead(200);
  res.end();
};


// CONCATENATED MODULE: ./src/server/static/orangutan.js
var OrangutanPageContent = "\n    <!DOCTYPE html>\n    <head>\n      <title>Hilarious Orangutan</title>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\">\n      <link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\">\n      <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n    </head>\n    <body>\n      <h1>Static Page!</h1>\n      <img src=\"https://res.cloudinary.com/dho6ptry6/image/upload/v1515176267/hilarious_orangutan_i03xpn.jpg\">\n    </body>\n  </html>\n";

/* harmony default export */ var orangutan = (OrangutanPageContent);
// CONCATENATED MODULE: ./src/server/static/index.js


var static_OrangutanPage = function OrangutanPage(req, res) {
  res.send(orangutan);
  res.end();
};


// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./src/shared/styles/Global.css
var Global = __webpack_require__(11);
var Global_default = /*#__PURE__*/__webpack_require__.n(Global);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(2);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "react-router-dom"
var external__react_router_dom_ = __webpack_require__(1);
var external__react_router_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_router_dom_);

// EXTERNAL MODULE: ./src/shared/styles/Landing.css
var Landing = __webpack_require__(12);
var Landing_default = /*#__PURE__*/__webpack_require__.n(Landing);

// CONCATENATED MODULE: ./src/shared/pages/MKwenhuaHome.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MKwenhuaHome_MKwenhuaHome = function (_React$PureComponent) {
  _inherits(MKwenhuaHome, _React$PureComponent);

  function MKwenhuaHome() {
    _classCallCheck(this, MKwenhuaHome);

    return _possibleConstructorReturn(this, (MKwenhuaHome.__proto__ || Object.getPrototypeOf(MKwenhuaHome)).apply(this, arguments));
  }

  _createClass(MKwenhuaHome, [{
    key: 'render',
    value: function render() {
      console.log('Landing', Landing_default.a);
      var _props = this.props,
          main = _props.main,
          dispatch = _props.dispatch,
          location = _props.location;

      return external__react__default.a.createElement(
        'section',
        { className: location.pathname === '/' ? 'slide-page-main' : 'slide-page-main out' },
        external__react__default.a.createElement(
          'h4',
          { className: Landing_default.a.selfIntro },
          'Welcome and stuff'
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'row' },
          external__react__default.a.createElement(
            'div',
            { className: 'col-md-4' },
            external__react__default.a.createElement(
              external__react_router_dom_["Link"],
              { to: '/projects', className: Landing_default.a.landingDirectionLink },
              external__react__default.a.createElement('i', { className: 'fa fa-file-code-o', 'aria-hidden': 'true' }),
              'Projects'
            )
          ),
          external__react__default.a.createElement(
            'div',
            { className: 'col-md-4' },
            external__react__default.a.createElement(
              external__react_router_dom_["Link"],
              { to: '/git', className: Landing_default.a.landingDirectionLink },
              external__react__default.a.createElement('i', { className: 'fa fa-github', 'aria-hidden': 'true' }),
              'GitHub'
            )
          ),
          external__react__default.a.createElement(
            'div',
            { className: 'col-md-4' },
            external__react__default.a.createElement(
              external__react_router_dom_["Link"],
              { to: '/buzzwords', className: Landing_default.a.landingDirectionLink },
              external__react__default.a.createElement('i', { className: 'fa fa-indent', 'aria-hidden': 'true' }),
              'Technical Skills'
            )
          )
        )
      );
    }
  }]);

  return MKwenhuaHome;
}(external__react__default.a.PureComponent);

/* harmony default export */ var pages_MKwenhuaHome = (MKwenhuaHome_MKwenhuaHome);
// CONCATENATED MODULE: ./src/shared/pages/BuzzwordPage.js
var BuzzwordPage__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function BuzzwordPage__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BuzzwordPage__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BuzzwordPage__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BuzzwordPage_BuzzwordPage = function (_React$PureComponent) {
  BuzzwordPage__inherits(BuzzwordPage, _React$PureComponent);

  function BuzzwordPage() {
    BuzzwordPage__classCallCheck(this, BuzzwordPage);

    return BuzzwordPage__possibleConstructorReturn(this, (BuzzwordPage.__proto__ || Object.getPrototypeOf(BuzzwordPage)).apply(this, arguments));
  }

  BuzzwordPage__createClass(BuzzwordPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          main = _props.main,
          dispatch = _props.dispatch;

      return external__react__default.a.createElement(
        'section',
        { className: 'container' },
        external__react__default.a.createElement(
          'h4',
          { className: 'self-intro' },
          'Buzzwords!'
        ),
        external__react__default.a.createElement(
          external__react_router_dom_["Link"],
          { to: '/' },
          'Go Back'
        )
      );
    }
  }]);

  return BuzzwordPage;
}(external__react__default.a.PureComponent);

/* harmony default export */ var pages_BuzzwordPage = (BuzzwordPage_BuzzwordPage);
// EXTERNAL MODULE: ./src/shared/styles/ProjectsPage.css
var styles_ProjectsPage = __webpack_require__(13);
var ProjectsPage_default = /*#__PURE__*/__webpack_require__.n(styles_ProjectsPage);

// CONCATENATED MODULE: ./src/shared/pages/ProjectsPage.js
var ProjectsPage__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function ProjectsPage__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProjectsPage__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function ProjectsPage__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ProjectsPage_ProjectsPage = function (_React$PureComponent) {
  ProjectsPage__inherits(ProjectsPage, _React$PureComponent);

  function ProjectsPage() {
    ProjectsPage__classCallCheck(this, ProjectsPage);

    return ProjectsPage__possibleConstructorReturn(this, (ProjectsPage.__proto__ || Object.getPrototypeOf(ProjectsPage)).apply(this, arguments));
  }

  ProjectsPage__createClass(ProjectsPage, [{
    key: 'render',
    value: function render() {
      console.log('ProjectsPage this.props', this.props);
      var _props = this.props,
          main = _props.main,
          dispatch = _props.dispatch;

      return external__react__default.a.createElement(
        'section',
        { className: 'container' },
        external__react__default.a.createElement(
          'h4',
          { className: 'self-intro' },
          'Projects!'
        ),
        external__react__default.a.createElement(
          external__react_router_dom_["Link"],
          { to: '/' },
          'Go Back'
        )
      );
    }
  }]);

  return ProjectsPage;
}(external__react__default.a.PureComponent);

/* harmony default export */ var pages_ProjectsPage = (ProjectsPage_ProjectsPage);
// CONCATENATED MODULE: ./src/shared/pages/GitPage.js
var GitPage__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function GitPage__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GitPage__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function GitPage__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var GitPage_GitPage = function (_React$PureComponent) {
  GitPage__inherits(GitPage, _React$PureComponent);

  function GitPage() {
    GitPage__classCallCheck(this, GitPage);

    return GitPage__possibleConstructorReturn(this, (GitPage.__proto__ || Object.getPrototypeOf(GitPage)).apply(this, arguments));
  }

  GitPage__createClass(GitPage, [{
    key: 'render',
    value: function render() {
      console.log('GitPage this.props', this.props);
      var _props = this.props,
          main = _props.main,
          dispatch = _props.dispatch;

      return external__react__default.a.createElement(
        'section',
        { className: 'slide-page' },
        external__react__default.a.createElement(
          'h4',
          { className: 'self-intro' },
          'GIT!'
        ),
        external__react__default.a.createElement(
          external__react_router_dom_["Link"],
          { to: '/' },
          'Go Back'
        )
      );
    }
  }]);

  return GitPage;
}(external__react__default.a.PureComponent);

/* harmony default export */ var pages_GitPage = (GitPage_GitPage);
// EXTERNAL MODULE: ./src/shared/styles/TopNav.css
var styles_TopNav = __webpack_require__(14);
var TopNav_default = /*#__PURE__*/__webpack_require__.n(styles_TopNav);

// CONCATENATED MODULE: ./src/shared/components/TopNav.js
var TopNav__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function TopNav__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TopNav__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function TopNav__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TopNav_TopNav = function (_React$PureComponent) {
  TopNav__inherits(TopNav, _React$PureComponent);

  function TopNav() {
    TopNav__classCallCheck(this, TopNav);

    return TopNav__possibleConstructorReturn(this, (TopNav.__proto__ || Object.getPrototypeOf(TopNav)).apply(this, arguments));
  }

  TopNav__createClass(TopNav, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'nav',
        { className: TopNav_default.a.topNav },
        external__react__default.a.createElement(
          'div',
          { className: TopNav_default.a.rightButton },
          external__react__default.a.createElement('img', {
            className: TopNav_default.a.buttonFace,
            height: '60',
            src: 'https://res.cloudinary.com/dho6ptry6/image/upload/v1515200566/orangutan_face_afvtwf.png' })
        )
      );
    }
  }]);

  return TopNav;
}(external__react__default.a.PureComponent);

/* harmony default export */ var components_TopNav = (TopNav_TopNav);
// EXTERNAL MODULE: external "react-router"
var external__react_router_ = __webpack_require__(3);
var external__react_router__default = /*#__PURE__*/__webpack_require__.n(external__react_router_);

// CONCATENATED MODULE: ./src/shared/containers/MainContainer.js
var MainContainer__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function MainContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MainContainer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function MainContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var selectState = function selectState(state) {
  return state;
};

var MainContainer_MainContainer = function (_React$PureComponent) {
  MainContainer__inherits(MainContainer, _React$PureComponent);

  function MainContainer(props) {
    MainContainer__classCallCheck(this, MainContainer);

    return MainContainer__possibleConstructorReturn(this, (MainContainer.__proto__ || Object.getPrototypeOf(MainContainer)).call(this, props));
  }

  MainContainer__createClass(MainContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          main = _props.main,
          dispatch = _props.dispatch;

      console.log('MainContainer', this.props);
      return external__react__default.a.createElement(
        'section',
        null,
        external__react__default.a.createElement(components_TopNav, null),
        external__react__default.a.createElement(
          external__react_router_dom_["Switch"],
          null,
          external__react__default.a.createElement(
            external__react_router_dom_["Route"],
            { exact: true, path: '/' },
            external__react__default.a.createElement(pages_MKwenhuaHome, { location: this.props.location })
          ),
          external__react__default.a.createElement(
            external__react_router_dom_["Route"],
            { exact: true, path: '/buzzwords' },
            external__react__default.a.createElement(pages_BuzzwordPage, null)
          ),
          external__react__default.a.createElement(
            external__react_router_dom_["Route"],
            { exact: true, path: '/git' },
            external__react__default.a.createElement(pages_GitPage, null)
          ),
          external__react__default.a.createElement(
            external__react_router_dom_["Route"],
            { exact: true, path: '/projects' },
            external__react__default.a.createElement(pages_ProjectsPage, { main: main, dispatch: dispatch })
          )
        )
      );
    }
  }]);

  return MainContainer;
}(external__react__default.a.PureComponent);

/* harmony default export */ var containers_MainContainer = (Object(external__react_router_["withRouter"])(Object(external__react_redux_["connect"])(selectState)(MainContainer_MainContainer)));
// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(15);
var server__default = /*#__PURE__*/__webpack_require__.n(server_);

// CONCATENATED MODULE: ./src/server/react_pages/render_page.js


var render_page_RenderPage = function RenderPage(content, preloadedState) {
  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <title>MKwenhua</title>\n      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">\n      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.3/css/bootstrap-grid.min.css">\n      <link rel="stylesheet" href="/css/main.css">\n      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">\n      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n      <script src="/bundle.js" defer></script>\n    </head>\n    <body>\n      <div id="root">' + Object(server_["renderToString"])(content) + '</div>\n      <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n    </body>\n  </html>\n';
};

/* harmony default export */ var render_page = (render_page_RenderPage);
// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(4);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-logger"
var external__redux_logger_ = __webpack_require__(16);
var external__redux_logger__default = /*#__PURE__*/__webpack_require__.n(external__redux_logger_);

// CONCATENATED MODULE: ./src/shared/reducers/main.js
/* harmony default export */ var reducers_main = (function (initialState) {
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
      case 'CONNECTED':
        {
          return Object.assign({}, state, {
            connected: true,
            socketId: action.payload
          });
          break;
        }
      case 'CHANGE_VIEW':
        {
          return Object.assign({}, state, action.payload);
        }
      case 'DISCONNECTED':
        {
          return Object.assign({}, state, {
            connected: false
          });
          break;
        }
    }
    return state;
  };
});
// CONCATENATED MODULE: ./src/shared/reducers/index.js



var reducers_serverStoreBuilder = function serverStoreBuilder(state) {
  return Object(external__redux_["combineReducers"])({
    main: reducers_main(state)
  });
};

var reducers_clientStoreBuilder = function clientStoreBuilder(_ref) {
  var main = _ref.main;
  return Object(external__redux_["combineReducers"])({
    main: reducers_main(main)
  });
};


// CONCATENATED MODULE: ./src/shared/store.js




var composedStore = Object(external__redux_["compose"])(Object(external__redux_["applyMiddleware"])(external__redux_logger__default.a));

var store_buildClientStore = function buildClientStore(state) {
  return composedStore(external__redux_["createStore"])(reducers_clientStoreBuilder(state));
};
var store_buildServerStore = function buildServerStore(state) {
  return Object(external__redux_["createStore"])(reducers_serverStoreBuilder(state));
};


// CONCATENATED MODULE: ./src/server/react_pages/defaultState.js
var defaultState = {
  connected: false
};

/* harmony default export */ var react_pages_defaultState = (defaultState);
// CONCATENATED MODULE: ./src/server/react_pages/index.js







var context = { serverSide: true };

var react_pages_IndexRoute = function IndexRoute(req, res) {
  var store = store_buildServerStore(react_pages_defaultState);
  console.log('store', store);
  console.log('defaultState', react_pages_defaultState);

  res.send(render_page(external__react__default.a.createElement(
    external__react_redux_["Provider"],
    { store: store },
    external__react__default.a.createElement(
      external__react_router_["StaticRouter"],
      { location: req.url, context: context },
      external__react__default.a.createElement(containers_MainContainer, null)
    )
  ), Object.assign({}, store.getState(), { container: 'dashboard' })));

  res.end();
};

var react_pages_ProjectRoute = function ProjectRoute(req, res) {
  var store = store_buildServerStore(react_pages_defaultState);
  console.log('store', store);
  console.log('defaultState', react_pages_defaultState);

  res.send(render_page(external__react__default.a.createElement(
    external__react_redux_["Provider"],
    { store: store },
    external__react__default.a.createElement(
      external__react_router_["StaticRouter"],
      { location: req.url, context: context },
      external__react__default.a.createElement(containers_MainContainer, null)
    )
  ), Object.assign({}, store.getState(), { container: 'dashboard' })));
  res.end();
};


// CONCATENATED MODULE: ./src/server/index.js






var ProceessPort = process.env.PORT || 5000;
var ProceessIP = process.env.NODE_IP || 'localhost';

var app = external__express__default()();

app.use(external__express__default.a.static('public'));

app.get('/', react_pages_IndexRoute);

app.get('/projects', react_pages_IndexRoute);

app.get('/git', react_pages_IndexRoute);

app.get('/buzzwords', react_pages_IndexRoute);

app.get('/project/*', react_pages_ProjectRoute);

app.get('/yoyo', static_OrangutanPage);

app.get('/health', ProcessHealth);

app.get(/\/info\/(gen|poll)/, ProccessInfo);

app.listen(ProceessPort, function () {
  console.log('Application worker ' + process.pid + ' at IP: ' + ProceessIP + ' Port: ' + ProceessPort + ' has started');
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  'html': 'text/html',
  'css': 'text/css',
  'tag': 'text/html',
  'ico': 'image/x-icon',
  'png': 'image/png',
  'svg': 'image/svg+xml'
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var os = __webpack_require__(9),
    exec = __webpack_require__(10).execSync,
    env = process.env;

exports.gen = function () {
  return [{
    name: 'Node.js Version',
    value: process.version.replace('v', '')
  }, {
    name: 'NPM Version',
    value: exec('npm --version').toString().replace(os.EOL, '')
  }, {
    name: 'OS Type',
    value: os.type()
  }, {
    name: 'OS Platform',
    value: os.platform()
  }, {
    name: 'OS Architecture',
    value: os.arch()
  }, {
    name: 'OS Release',
    value: os.release()
  }, {
    name: 'CPU Cores',
    value: os.cpus().length
  }, {
    name: 'Gear Memory',
    value: env.OPENSHIFT_GEAR_MEMORY_MB + 'MB'
  }, {
    name: 'NODE_ENV',
    value: env.NODE_ENV
  }];
};

exports.poll = function () {
  return [{
    name: 'Free Memory',
    value: Math.round(os.freemem() / 1048576) + 'MB'
  }, {
    name: 'Uptime',
    value: os.uptime() + 's'
  }];
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"landingDirectionLink":"_1hBc45MafteivDf26JOJld","selfIntro":"_25smTz_Agxujyr_9OvnZVn"};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"topNav":"PGhAnjvazAu4BOghX4Pqb","buttonFace":"_2V8LLFpJMSFpjyHCHFLelo","rightButton":"ZTymVUYSthIp7F3g6YsWH"};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map