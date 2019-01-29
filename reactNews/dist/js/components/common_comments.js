'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antd = require('antd');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var SubMenu = _antd.Menu.SubMenu;
var TabPane = _antd.Tabs.TabPane;
var MenuItemGroup = _antd.Menu.ItemGroup;

var Commoncomments = function (_React$Component) {
    _inherits(Commoncomments, _React$Component);

    function Commoncomments() {
        _classCallCheck(this, Commoncomments);

        var _this = _possibleConstructorReturn(this, (Commoncomments.__proto__ || Object.getPrototypeOf(Commoncomments)).call(this));

        _this.state = {
            comments: ''
        };
        return _this;
    }

    _createClass(Commoncomments, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var myFetchOption = {
                method: 'GET'
            };
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOption).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this2.setState({ comments: data });
                //收藏成功以后做全局的提醒
                //    alert("您已经成功收藏该文章");
                //    notification['success']({message:'ReactNews提醒',description:'收藏此文章成功'})
            });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            var _this3 = this;

            e.preventDefault();
            var myFetchOption = {
                method: 'GET'
            };
            var formData = this.props.form.getFieldsValue();

            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&comment=" + formData.remark, myFetchOption).then(function (response) {
                return response.json();
            }).then(function (json) {
                _this3.componentDidMount();
            });
        }
    }, {
        key: 'addUserCollection',
        value: function addUserCollection() {
            var myFetchOption = {
                method: 'GET'
            };
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOption).then(function (response) {
                return response.json();
            }).then(function (json) {
                //收藏成功以后进行一下全局的提醒
                _antd.notification['success']({ message: 'ReactNews提醒', description: '收藏此文章成功' });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$form = this.props.form,
                getFieldDecorator = _props$form.getFieldDecorator,
                getFieldError = _props$form.getFieldError,
                getFieldsError = _props$form.getFieldsError,
                isFieldTouched = _props$form.isFieldTouched,
                getFieldsValue = _props$form.getFieldsValue;
            var comments = this.state.comments;

            var commentsList = comments.length ? comments.map(function (comments, index) {
                _react2.default.createElement(_antd.Card, { key: index, title: comments.UserName, extra: _react2.default.createElement(
                        'a',
                        { href: 'a' },
                        '\u53D1\u5E03\u4E8E',
                        comments.dateTime
                    ) });
            }) : '暂无用户评论';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 24 },
                        commentsList,
                        _react2.default.createElement(
                            _antd.Form,
                            { onSubmit: this.handleSubmit.bind(this) },
                            _react2.default.createElement(
                                FormItem,
                                null,
                                _react2.default.createElement(_antd.Input, _extends({ type: 'textarea', placeholder: ' free' }, getFieldDecorator('remark')))
                            ),
                            _react2.default.createElement(
                                _antd.Button,
                                { type: 'primary', htmlType: 'submit' },
                                ' \u63D0\u4EA4\u8BC4\u8BBA'
                            ),
                            _react2.default.createElement(
                                _antd.Button,
                                { type: 'primary', htmlType: 'button', onClick: this.addUserCollection.bind(this) },
                                ' \u6536\u85CF\u6587\u7AE0'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Commoncomments;
}(_react2.default.Component);

var Comments = _antd.Form.create()(Commoncomments);

exports.default = Comments;