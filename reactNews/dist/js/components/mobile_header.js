'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var SubMenu = _antd.Menu.SubMenu;
var MenuItemGroup = _antd.Menu.ItemGroup;

var TabPane = _antd.Tabs.TabPane;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(function (field) {
        return fieldsError[field];
    });
}

var Mobileheader = function (_React$Component) {
    _inherits(Mobileheader, _React$Component);

    function Mobileheader() {
        _classCallCheck(this, Mobileheader);

        var _this = _possibleConstructorReturn(this, (Mobileheader.__proto__ || Object.getPrototypeOf(Mobileheader)).call(this));

        _this.state = {
            current: 'headline', //导航栏选中
            modalVisible: false, //模块是否隐藏
            action: 'login', //所做的动作
            hasLogined: false, //是否已登录
            useNickName: '', //登录名，一般设置为空
            userid: 0
        };

        return _this;
    }

    _createClass(Mobileheader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //在最初的时候使注册的按钮不可用
            this.props.form.validateFields();
        }
    }, {
        key: 'setModalVisible',
        value: function setModalVisible(value) {
            this.setState({ modalVisible: value });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            if (e.key == "login") {
                this.setState({ current: 'login' });
                this.setModalVisible(true);
            } else {
                this.setState({ current: e.key });
            }
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            console.log('test');
            console.log(this);
            var formData = this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
            var myFetchOptions = {
                method: "GET"
            };
            console.log(formData);
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action + "&username=" + formData.userName + "&password=" + formData.password + "&userName=" + formData.userName + "&confirmPassword=" + formData.r_confirmPassword, myFetchOptions);
            then(function (response) {
                return response.json();
            }).then(function (json) {
                _this2.setState({
                    useNickName: json.NickUserName, userid: json.UserId
                });
            });
            _antd.message.success("请求成功");
            this.setModalVisible(false);
        }
    }, {
        key: 'callback',
        value: function callback(key) {
            if (key == 1) {
                this.setState({ action: 'login' });
            } else if (key == 2) {
                this.setState({ action: 'register' });
            }
        }
    }, {
        key: 'login',
        value: function login() {
            this.setModalVisible(true);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

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
            var userShow = this.state.hasLogined ? _react2.default.createElement(
                'link',
                null,
                ' ',
                _react2.default.createElement(_antd.Icon, { type: 'index' })
            ) : _react2.default.createElement(_antd.Icon, { type: 'setting', onClick: this.login.bind(this) });
            return _react2.default.createElement(
                'div',
                { id: 'mobile-header' },
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement('img', { src: './src/images/logo.png', alt: 'logo' }),
                    _react2.default.createElement(
                        'span',
                        null,
                        'ReactNews'
                    ),
                    userShow,
                    _react2.default.createElement(
                        _antd.Modal,
                        { title: '\u7528\u6237\u4E2D\u5FC3', wrapClassName: 'vertical-center-modal', visible: this.state.modalVisible,
                            onCancel: function onCancel() {
                                return _this3.setModalVisible(false);
                            },
                            onOk: function onOk() {
                                return _this3.setModalVisible(false);
                            },
                            okText: '\u5173\u95ED'
                        },
                        _react2.default.createElement(
                            _antd.Tabs,
                            { type: 'card' },
                            _react2.default.createElement(
                                TabPane,
                                { tab: '\u6CE8\u518C', key: '2' },
                                _react2.default.createElement(
                                    _antd.Form,
                                    { layout: 'vertical', onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement(
                                        FormItem,
                                        { label: 'account',
                                            validateStatus: userNameError ? 'error' : '',
                                            help: userNameError || ''
                                        },
                                        getFieldDecorator('userName', {
                                            rules: [{ required: true, message: '请输入账号名称' }]
                                        })(_react2.default.createElement(_antd.Input, { placeholder: 'userName' }))
                                    ),
                                    _react2.default.createElement(
                                        FormItem,
                                        { label: 'password',
                                            validateStatus: passwordError ? 'error' : '',
                                            help: passwordError || ''
                                        },
                                        getFieldDecorator('password', {
                                            rules: [{ required: true, message: '请输入您的密码' }]
                                        })(_react2.default.createElement(_antd.Input, { type: 'password', placeholder: 'password' }))
                                    ),
                                    _react2.default.createElement(
                                        FormItem,
                                        { label: 'password_agin',
                                            validateStatus: passwordError ? 'error' : '',
                                            help: passwordError || ''

                                        },
                                        getFieldDecorator('confirmPassword', {
                                            rules: [{ required: true, message: '请输入您的密码' }]
                                        })(_react2.default.createElement(_antd.Input, { type: 'password', placeholder: 'confirmPassword' }))
                                    ),
                                    _react2.default.createElement(
                                        _antd.Button,
                                        { type: 'primary', htmlType: 'submit', disabled: hasErrors(getFieldsError()) },
                                        ' \u6CE8\u518C '
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Mobileheader;
}(_react2.default.Component);

var ModalHeader = _antd.Form.create()(Mobileheader);
exports.default = ModalHeader;