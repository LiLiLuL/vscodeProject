'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import {Router,Route,Link,browserHistory} from 'react-router';


var PCNewsimageblock = function (_React$Component) {
    _inherits(PCNewsimageblock, _React$Component);

    function PCNewsimageblock() {
        _classCallCheck(this, PCNewsimageblock);

        var _this = _possibleConstructorReturn(this, (PCNewsimageblock.__proto__ || Object.getPrototypeOf(PCNewsimageblock)).call(this));

        _this.state = {
            news: '' //取接口里的数据
        };
        return _this;
    }

    _createClass(PCNewsimageblock, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            var myFetchOptions = {
                method: 'GET'
            };
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(function (response) {
                return response.json();
            }).then(function (json) {
                return _this2.setState({ news: json });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var styleImage = {
                display: "block",
                width: this.props.imageWidth,
                height: "90px"
            };
            var styleH3 = {
                width: this.props.imageWidth,
                //当长度超出固定的宽度时显示...
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"

            };
            var news = this.state.news;

            var newsList = news.length ? news.map(function (newsItem, index) {
                return _react2.default.createElement(
                    'div',
                    { key: index, 'class': 'imageBlock' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: 'details/' + newsItem.docid, target: '_blank' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'custom-image' },
                            _react2.default.createElement('img', { alt: ' ', style: styleImage, src: newsItem.thumbnail_pic_s })
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'h3',
                                { style: styleH3 },
                                newsItem.title
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                newsItem.author_name
                            )
                        )
                    )
                );
            }) : '没有加载任何数据';
            //上面的docid是接口里返回的新闻的唯一ID，title是取到新闻的标题
            return _react2.default.createElement(
                'div',
                { 'class': 'topNewsList' },
                _react2.default.createElement(_antd.Card, { title: this.props.cartTitle, bordered: true, style: { width: this.props.width } }),
                newsList
            );
        }
    }]);

    return PCNewsimageblock;
}(_react2.default.Component);

exports.default = PCNewsimageblock;