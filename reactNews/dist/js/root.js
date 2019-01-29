'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _antd = require('antd');

require('antd/dist/antd.css');

var _pc_index = require('./components/pc_index');

var _pc_index2 = _interopRequireDefault(_pc_index);

var _mobile_index = require('./components/mobile_index');

var _mobile_index2 = _interopRequireDefault(_mobile_index);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _pc_details = require('./components/pc_details');

var _pc_details2 = _interopRequireDefault(_pc_details);

var _pc_usercenter = require('./components/pc_usercenter');

var _pc_usercenter2 = _interopRequireDefault(_pc_usercenter);

var _mobile_details = require('./components/mobile_details');

var _mobile_details2 = _interopRequireDefault(_mobile_details);

var _mobile_usercenter = require('./components/mobile_usercenter');

var _mobile_usercenter2 = _interopRequireDefault(_mobile_usercenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactResponsive2.default,
          { query: '(min-device-width:600px)' },
          _react2.default.createElement(
            _reactRouterDom.BrowserRouter,
            { history: _reactRouterDom.hashHistory },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _reactRouterDom.Route,
                { path: '/', component: _pc_index2.default },
                ' '
              ),
              _react2.default.createElement(
                _reactRouterDom.Route,
                { path: '/details/:uniquekey', component: _pc_details2.default },
                ' '
              ),
              _react2.default.createElement(
                _reactRouterDom.Route,
                { path: '/usercenter', component: _pc_usercenter2.default },
                ' '
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactResponsive2.default,
          { query: '(max-device-width:600px)' },
          _react2.default.createElement(
            _reactRouterDom.BrowserRouter,
            { history: _reactRouterDom.hashHistory },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _reactRouterDom.Route,
                { path: '/', component: _mobile_index2.default },
                ' '
              ),
              _react2.default.createElement(
                _reactRouterDom.Route,
                { path: '/details/:uniquekey', component: _mobile_details2.default },
                ' '
              ),
              _react2.default.createElement(
                _reactRouterDom.Route,
                { path: '/usercenter', component: _mobile_usercenter2.default },
                ' '
              )
            )
          )
        )
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Root, null), document.getElementById('mainContainer'));