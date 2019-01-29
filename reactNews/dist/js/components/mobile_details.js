'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _pc_news_images_block = require('./pc_news_images_block');

var _pc_news_images_block2 = _interopRequireDefault(_pc_news_images_block);

var _common_comments = require('./common_comments');

var _common_comments2 = _interopRequireDefault(_common_comments);

var _mobile_header = require('./mobile_header');

var _mobile_header2 = _interopRequireDefault(_mobile_header);

var _mobile_footer = require('./mobile_footer');

var _mobile_footer2 = _interopRequireDefault(_mobile_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formData = _antd.Form.Item;

var PCNewsdetails = function (_React$Component) {
    _inherits(PCNewsdetails, _React$Component);

    function PCNewsdetails() {
        _classCallCheck(this, PCNewsdetails);

        var _this = _possibleConstructorReturn(this, (PCNewsdetails.__proto__ || Object.getPrototypeOf(PCNewsdetails)).call(this));

        _this.state = {
            newsItem: ''
        };
        return _this;
    }

    _createClass(PCNewsdetails, [{
        key: 'createMarkup',
        value: function createMarkup() {
            return {
                _html: this.state.newsItem.pagecontent
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var myFetchOption = {
                merhod: 'GET'
            };
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(function (response) {
                return response.json();
            }).then(function (json) {
                _this2.setState({ newsItem: json });
                document.title = _this2.state.newsItem.title + " - React News | React 驱动的新闻平台";
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(PCHeader, null),
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 24, className: 'container' },
                        _react2.default.createElement('div', { 'class': 'articleContainer', dangerouslySetInnerHTML: this.createMarkup().bind(this) }),
                        _react2.default.createElement(_common_comments2.default, { uniquekey: this.props.params.uniquekey })
                    )
                ),
                _react2.default.createElement(PCFooter, null),
                _react2.default.createElement(_antd.BackTop, null)
            );
        }
    }]);

    return PCNewsdetails;
}(_react2.default.Component);

exports.default = PCNewsdetails;