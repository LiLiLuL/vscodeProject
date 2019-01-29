'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Game);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Game.__proto__ || Object.getPrototypeOf(Game)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Game, [{
    key: 'render',
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'this is the Game Page'
        ),
        _react2.default.createElement(
          _antd.Form,
          { onSubmit: this.handleSubmit, className: 'login-form' },
          _react2.default.createElement(
            FormItem,
            null,
            getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }]
            })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'user', style: { color: 'rgba(0,0,0,.25)' } }), placeholder: 'Username' }))
          ),
          _react2.default.createElement(
            FormItem,
            null,
            getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }]
            })(_react2.default.createElement(_antd.Input, { prefix: _react2.default.createElement(_antd.Icon, { type: 'lock', style: { color: 'rgba(0,0,0,.25)' } }), type: 'password', placeholder: 'Password' }))
          ),
          _react2.default.createElement(
            FormItem,
            null,
            getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(_react2.default.createElement(
              _antd.Checkbox,
              null,
              'Remember me'
            )),
            _react2.default.createElement(
              'a',
              { className: 'login-form-forgot', href: '' },
              'Forgot password'
            ),
            _react2.default.createElement(
              _antd.Button,
              { type: 'primary', htmlType: 'submit', className: 'login-form-button' },
              'Log in'
            ),
            'Or ',
            _react2.default.createElement(
              'a',
              { href: '' },
              'register now!'
            )
          )
        )
      );
    }
  }]);

  return Game;
}(_react2.default.Component);

var GameForm = _antd.Form.create()(Game);
exports.default = GameForm;