'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Now = function (_React$Component) {
    _inherits(Now, _React$Component);

    function Now() {
        _classCallCheck(this, Now);

        var _this = _possibleConstructorReturn(this, (Now.__proto__ || Object.getPrototypeOf(Now)).call(this));

        _this.state = {
            news: '' //取接口里的数据
        };
        return _this;
    }

    _createClass(Now, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            fetch('/api/2/article/v25/stream/', { method: 'GET' }).then(function (res) {
                return res.json();
            }).then(function (json) {
                _this2.setState({ news: json.data });
                console.log(json);
                console.log(json.data);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var news = this.state.news;

            var newsList = news.length ? news.map(function (newsItem, index) {
                return _react2.default.createElement(
                    'div',
                    { key: index, 'class': 'now_fetch' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: 'details/' + newsItem.docid, target: '_blank' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement('img', { alt: '', src: newsItem.weixin_cover_image }),
                            _react2.default.createElement(
                                'p',
                                null,
                                newsItem.abstract
                            ),
                            _react2.default.createElement(
                                'a',
                                null,
                                newsItem.article_url
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                newsItem.title
                            )
                        )
                    )
                );
            }) : '没有加载任何数据';
            return _react2.default.createElement(
                'div',
                null,
                newsList
            );
        }
    }]);

    return Now;
}(_react2.default.Component);

exports.default = Now;