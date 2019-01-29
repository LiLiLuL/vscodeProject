'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pc_header = require('./pc_header');

var _pc_header2 = _interopRequireDefault(_pc_header);

var _pc_footer = require('./pc_footer');

var _pc_footer2 = _interopRequireDefault(_pc_footer);

var _antd = require('antd');

var _reactRouterDom = require('react-router-dom');

var _pc_newsContainer = require('./pc_newsContainer');

var _pc_newsContainer2 = _interopRequireDefault(_pc_newsContainer);

var _now = require('./page/now');

var _now2 = _interopRequireDefault(_now);

var _game = require('./page/game');

var _game2 = _interopRequireDefault(_game);

var _fashion = require('./page/fashion');

var _fashion2 = _interopRequireDefault(_fashion);

var _socilty = require('./page/socilty');

var _socilty2 = _interopRequireDefault(_socilty);

var _sport = require('./page/sport');

var _sport2 = _interopRequireDefault(_sport);

var _international = require('./page/international');

var _international2 = _interopRequireDefault(_international);

var _entertrainment = require('./page/entertrainment');

var _entertrainment2 = _interopRequireDefault(_entertrainment);

var _login = require('./loginForm/login');

var _login2 = _interopRequireDefault(_login);

var _register = require('./loginForm/register');

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _antd.Layout.Header,
    Footer = _antd.Layout.Footer,
    Sider = _antd.Layout.Sider,
    Content = _antd.Layout.Content;

var FormItem = _antd.Form.Item;
var SubMenu = _antd.Menu.SubMenu;
var MenuItemGroup = _antd.Menu.ItemGroup;
var TabPane = _antd.Tabs.TabPane;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(function (field) {
        return fieldsError[field];
    });
}

var PCIndex = function (_React$Component) {
    _inherits(PCIndex, _React$Component);

    function PCIndex(props) {
        _classCallCheck(this, PCIndex);

        var _this = _possibleConstructorReturn(this, (PCIndex.__proto__ || Object.getPrototypeOf(PCIndex)).call(this, props));

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

    _createClass(PCIndex, [{
        key: 'componentDidMount',


        // componentWillMount(){
        //     if(localStorage.userid!=''){
        //         this.setState({hasLogined:true});
        //         this.setState({userNickName:localStorage.useNickName,userid:localStorage.userid})
        //     }
        // }
        value: function componentDidMount() {
            //在最初的时候使注册的按钮不可用
            //  this.props.form.validateFields();
        }
    }, {
        key: 'setModalVisible',
        value: function setModalVisible(value) {
            this.setState({ modalVisible: value });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            if (e.key == "register") {
                this.setState({ current: 'register' });
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
            console.log(this);
            this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
            var myFetchOptions = {
                method: "POST"
            };
            var formData = this.props.form.validateFields();
            console.log("formData" + formData);
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action + "&username=" + formData.userName + "&password=" + formData.password + "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions).then(function (response) {
                return response.json();
            }).then(function (json) {
                _this2.setState({ userNickName: json.NickUserName, userid: json.UserId });
            });
            if (this.state.action == "login") {
                this.setState({ hasLogined: true });
            }
            _antd.message.success("请求成功");
            this.setModalVisible(false);
        }
    }, {
        key: 'login',
        value: function login() {
            this.setModalVisible(true);
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
                _antd.Menu.Item,
                { key: 'logout', 'class': 'register' },
                _react2.default.createElement(
                    _antd.Button,
                    { type: 'primary', htmlType: 'button' },
                    this.state.useNickName
                ),
                '\xA0\xA0',
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { target: '_blank', to: '/usercenter' },
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'dashed', htmlType: 'button' },
                        '\u4E2A\u4EBA\u4E2D\u5FC3 '
                    ),
                    '\xA0\xA0',
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'ghost', htmlType: 'button' },
                        '\u9000\u51FA'
                    )
                )
            ) : _react2.default.createElement(
                _antd.Menu.Item,
                { key: 'register', 'class': 'register' },
                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                '\u6CE8\u518C/\u767B\u5F55'
            );
            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    _antd.Layout,
                    null,
                    _react2.default.createElement(
                        Header,
                        { className: 'fixheader' },
                        _react2.default.createElement(
                            _antd.Row,
                            null,
                            _react2.default.createElement(_antd.Col, { span: 2 }),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: 4 },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/', 'class': 'logo' },
                                    _react2.default.createElement('img', { src: './src/images/logo.png', alt: 'logo' }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        'ReactNews'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                _antd.Col,
                                { span: 16 },
                                _react2.default.createElement(
                                    _antd.Menu,
                                    { mode: 'horizontal', onClick: this.handleClick.bind(this), selectedKeys: [this.state.current] },
                                    _react2.default.createElement(
                                        _antd.Menu.Item,
                                        { key: 'headline' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                                '\u5934\u6761'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _antd.Menu.Item,
                                        { key: 'entertrainment' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/entertrainment' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                                '\u5A31\u4E50'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _antd.Menu.Item,
                                        { key: 'real-time' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/now' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                                '\u5B9E\u65F6'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _antd.Menu.Item,
                                        { key: 'game' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/game' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                                '\u6E38\u620F'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _antd.Menu.Item,
                                        { key: 'socilty' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/socilty' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                                '\u793E\u4F1A'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _antd.Menu.Item,
                                        { key: 'international' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/international' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                                '\u56FD\u9645'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _antd.Menu.Item,
                                        { key: 'sport' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/sport' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                                '\u4F53\u80B2'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        _antd.Menu.Item,
                                        { key: 'fashion' },
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/fashion' },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                _react2.default.createElement(_antd.Icon, { type: 'appstore' }),
                                                '\u65F6\u5C1A'
                                            )
                                        )
                                    ),
                                    userShow
                                ),
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
                                        { type: 'card', onChange: this.callback.bind(this) },
                                        _react2.default.createElement(
                                            TabPane,
                                            { tab: '\u767B\u5F55', key: '1' },
                                            _react2.default.createElement(_login2.default, null)
                                        ),
                                        _react2.default.createElement(
                                            TabPane,
                                            { tab: '\u6CE8\u518C', key: '2' },
                                            'wwwwww'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(_antd.Col, { span: 2 })
                        )
                    ),
                    _react2.default.createElement(
                        Content,
                        null,
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _pc_newsContainer2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/now', component: _now2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/game', component: _game2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/fashion', component: _fashion2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/socilty', component: _socilty2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/international', component: _international2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/entertrainment', component: _entertrainment2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/sport', component: _sport2.default })
                    ),
                    _react2.default.createElement(
                        Footer,
                        null,
                        _react2.default.createElement(_pc_footer2.default, null)
                    )
                )
            );
        }
    }]);

    return PCIndex;
}(_react2.default.Component);

var WrappedPCHeader = _antd.Form.create()(PCIndex);

exports.default = WrappedPCHeader;