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

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    _createClass(Login, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        }
    }]);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            userName: '',
            password: ''

        };
        _this.userChange = _this.userChange.bind(_this);
        _this.passwordChange = _this.passwordChange.bind(_this);
        _this.submit = _this.submit.bind(_this);
        _this.getConnect = _this.getConnect.bind(_this);
        return _this;
    }

    _createClass(Login, [{
        key: 'userChange',
        value: function userChange(e) {
            this.setState({ userName: e.target.value });
        }
    }, {
        key: 'passwordChange',
        value: function passwordChange(e) {
            this.setState({ password: e.target.value });
        }
    }, {
        key: 'submit',
        value: function submit() {
            window.alert("用户名" + this.state.userName);
            window.alert("密码" + this.state.password);
            this.getConnect();
        }
    }, {
        key: 'getConnect',
        value: function getConnect() {
            //api请求函数
            var text = { userName: this.state.userName, password: this.state.password //获取数据
            };var send = JSON.stringify(text); //重要！将对象转换成json字符串
            fetch('http://127.0.0.1:3000/password', { //Fetch方法
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: send
            }).then(function (res) {
                return res.json();
            }).then(function (data) {
                console.log(data);
                if (data.success) {
                    window.alert('验证成功，欢迎登陆');
                } else {
                    window.alert('用户名或密码错误');
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var getFieldDecorator = this.props.form.getFieldDecorator;

            var that = this;
            var _that$props = that.props,
                onCancel = _that$props.onCancel,
                visible = _that$props.visible,
                onSubmit = _that$props.onSubmit;

            var state = this.state;
            return _react2.default.createElement(
                _antd.Form,
                { horizontal: true, onSubmit: function onSubmit(e) {
                        _this2.handleSubmit(e);
                    } },
                _react2.default.createElement(
                    FormItem,
                    null,
                    getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'please input your username' }]
                    })(_react2.default.createElement(_antd.Input, { name: 'userName', onChange: this.userChange, placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u8D26\u53F7' }))
                ),
                _react2.default.createElement(
                    FormItem,
                    null,
                    getFieldDecorator('password', {
                        rules: [{ required: true, message: 'please input your password' }]
                    })(_react2.default.createElement(_antd.Input, { name: 'password', type: 'password', onChange: this.userChange, placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u8D26\u53F7' }))
                ),
                _react2.default.createElement(
                    _antd.Button,
                    { type: 'primary', htmlType: 'submit', onClick: this.submit },
                    '\u767B\u5F55'
                ),
                _react2.default.createElement(
                    _antd.Button,
                    { type: 'default' },
                    '\u91CD\u7F6E'
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

var LoginForm = _antd.Form.create()(Login);
exports.default = LoginForm;