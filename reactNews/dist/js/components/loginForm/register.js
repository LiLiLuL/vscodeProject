'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;

var Register = function (_React$Component) {
    _inherits(Register, _React$Component);

    function Register(props) {
        _classCallCheck(this, Register);

        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

        _this.state = {
            user: '',
            password: ''
        };
        return _this;
    }

    _createClass(Register, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$form = this.props.form,
                getFieldDecorator = _props$form.getFieldDecorator,
                getFieldError = _props$form.getFieldError,
                getFieldsError = _props$form.getFieldsError,
                isFieldTouched = _props$form.isFieldTouched;
            var _props = this.props,
                onCancel = _props.onCancel,
                visible = _props.visible,
                onCreat = _props.onCreat;

            var userNameError = isFieldTouched('userName') && getFieldError('userName');
            var passwordError = isFieldTouched('password') && getFieldError('password');
            return _react2.default.createElement(
                _antd.Form,
                { layout: 'vertical', onSubmit: this.handleSubmit.bind(this) },
                _react2.default.createElement(
                    FormItem,
                    { label: 'account',
                        validateStatus: userNameError ? 'error' : '',
                        help: userNameError || ''
                    },
                    getFieldDecorator('r_userName', {
                        rules: [{ required: true, message: '请输入账号名称' }]
                    })(_react2.default.createElement(Input, _extends({ placeholder: 'userName' }, getFieldDecorator('r_userName'))))
                ),
                _react2.default.createElement(
                    FormItem,
                    { label: 'password',
                        validateStatus: passwordError ? 'error' : '',
                        help: passwordError || ''
                    },
                    getFieldDecorator('r_password', {
                        rules: [{ required: true, message: '请输入您的密码' }]
                    })(_react2.default.createElement(Input, { type: 'password', placeholder: 'password' }))
                ),
                _react2.default.createElement(
                    FormItem,
                    { label: 'password_agin',
                        validateStatus: passwordError ? 'error' : '',
                        help: passwordError || ''

                    },
                    getFieldDecorator('r_confirmPassword', {
                        rules: [{ required: true, message: '请输入您的密码' }]
                    })(_react2.default.createElement(Input, { type: 'password', placeholder: 'confirmPassword' }))
                ),
                _react2.default.createElement(
                    _antd.Button,
                    { type: 'primary', htmlType: 'submit' },
                    ' \u6CE8\u518C '
                )
            );
        }
    }]);

    return Register;
}(_react2.default.Component);

var RegisterForm = _antd.Form.create()(Register);
exports.default = RegisterForm;