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


var PCNewsblock = function (_React$Component) {
    _inherits(PCNewsblock, _React$Component);

    function PCNewsblock() {
        _classCallCheck(this, PCNewsblock);

        //取接口里的数据
        var _this = _possibleConstructorReturn(this, (PCNewsblock.__proto__ || Object.getPrototypeOf(PCNewsblock)).call(this));

        _this.state = {
            news: ''
        };
        return _this;
    }

    _createClass(PCNewsblock, [{
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
            console.log("render");
            console.log(this.state.news);
            var news = this.state.news;

            console.log("renderNews");
            console.log(news.length);
            var newsList = news.length ? news.map(function (newsItem, index) {
                return _react2.default.createElement(
                    'li',
                    { key: index },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/details/' + newsItem.uniquekey, target: '_blank' },
                        newsItem.title
                    )
                );
            }) : '没有加载任何数据';

            console.log(newsList);
            //上面的docid是接口里返回的新闻的唯一ID，title是取到新闻的标题
            return _react2.default.createElement(
                'div',
                { 'class': 'topNewsList' },
                _react2.default.createElement(
                    _antd.Card,
                    null,
                    _react2.default.createElement(
                        'ul',
                        null,
                        newsList
                    )
                )
            );
        }
    }]);

    return PCNewsblock;
}(_react2.default.Component);

exports.default = PCNewsblock;