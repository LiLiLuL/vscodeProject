'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mobilelist = function (_React$Component) {
  _inherits(Mobilelist, _React$Component);

  function Mobilelist() {
    _classCallCheck(this, Mobilelist);

    var _this = _possibleConstructorReturn(this, (Mobilelist.__proto__ || Object.getPrototypeOf(Mobilelist)).call(this));

    _this.state = {
      news: ''
    };
    return _this;
  }

  _createClass(Mobilelist, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var myFetchOptions = {
        method: 'GET'
      };
      fetch("https://www.apiopen.top/journalismApi?action=getNews&type=" + this.props.type + "&count" + this.props.count, myFetchOptions).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this2.setState({ news: json });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var news = this.state.news;

      var newsList = news.length ? news.map(function (newsItem, index) {
        return _react2.default.createElement(
          'section',
          { key: index, className: 'm_article list-item special_section clearfix' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: 'details/' + newsItem.uniquekey },
            _react2.default.createElement(
              'div',
              { className: 'm_article_img' },
              _react2.default.createElement('img', { src: newsItem.thumbnail_pic_s, alt: newsItem.title })
            ),
            _react2.default.createElement(
              'div',
              { className: 'm_article_info' },
              _react2.default.createElement(
                'div',
                { className: 'm_article_title' },
                _react2.default.createElement(
                  'span',
                  null,
                  newsItem.title
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'm_article_desc clearfix' },
                _react2.default.createElement(
                  'div',
                  { className: 'm_article_desc_l' },
                  _react2.default.createElement(
                    'span',
                    { className: 'm_article_channel' },
                    newsItem.realtype
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'm_article_time' },
                    newsItem.date
                  )
                )
              )
            )
          )
        );
      }) : '没有加载到任何新闻';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _antd.Row,
          null,
          _react2.default.createElement(
            _antd.Col,
            { span: 24 },
            newsList
          )
        )
      );
    }
  }]);

  return Mobilelist;
}(_react2.default.Component);

exports.default = Mobilelist;