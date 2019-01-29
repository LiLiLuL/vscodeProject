'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _pc_news_block = require('./pc_news_block');

var _pc_news_block2 = _interopRequireDefault(_pc_news_block);

var _pc_news_images_block = require('./pc_news_images_block');

var _pc_news_images_block2 = _interopRequireDefault(_pc_news_images_block);

var _common_comments = require('./common_comments');

var _common_comments2 = _interopRequireDefault(_common_comments);

var _pc_productor = require('./pc_productor');

var _pc_productor2 = _interopRequireDefault(_pc_productor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;

var PCNewscontainer = function (_React$Component) {
    _inherits(PCNewscontainer, _React$Component);

    function PCNewscontainer() {
        _classCallCheck(this, PCNewscontainer);

        return _possibleConstructorReturn(this, (PCNewscontainer.__proto__ || Object.getPrototypeOf(PCNewscontainer)).apply(this, arguments));
    }

    _createClass(PCNewscontainer, [{
        key: 'render',
        value: function render() {
            var setting = {
                dots: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 1,
                infinite: true
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(_antd.Col, { span: 2 }),
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 20, className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'leftContainer' },
                            _react2.default.createElement(
                                'div',
                                { 'class': 'carousel' },
                                _react2.default.createElement(
                                    _antd.Carousel,
                                    setting,
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement('img', { src: './src/images/new1.jpg' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement('img', { src: './src/images/new2.jpg' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement('img', { src: './src/images/new3.jpg' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement('img', { src: './src/images/new4.jpg' })
                                    )
                                )
                            ),
                            _react2.default.createElement(_pc_news_images_block2.default, { count: 6, type: 'guoji', width: '500px', cartTitle: '\u56FD\u9645\u5934\u6761', imageWidth: '112px' })
                        ),
                        _react2.default.createElement(
                            _antd.Tabs,
                            { className: 'tabsnews' },
                            _react2.default.createElement(
                                TabPane,
                                { tab: '\u65B0\u95FB', key: '1' },
                                _react2.default.createElement(_pc_news_block2.default, { count: 22, type: 'top', width: '100%', bordered: 'false' })
                            ),
                            _react2.default.createElement(
                                TabPane,
                                { tab: '\u56FD\u9645', key: '2' },
                                _react2.default.createElement(_pc_news_block2.default, { count: 22, type: 'guoji', width: '100%', bordered: 'false' })
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Tabs,
                            { className: 'tabsproduct' },
                            _react2.default.createElement(
                                TabPane,
                                { tab: '\u5FEB\u901F\u94FE\u63A5', key: 1 },
                                _react2.default.createElement(_pc_productor2.default, null)
                            )
                        ),
                        _react2.default.createElement('div', { 'class': 'clear' }),
                        _react2.default.createElement(_pc_news_images_block2.default, { count: 8, type: 'guonei', width: '100%', cartTitle: '\u56FD\u5185\u65B0\u95FB', imageWidth: '132px' }),
                        _react2.default.createElement(_pc_news_images_block2.default, { count: 16, type: 'yule', width: '100%', cartTitle: '\u5A31\u4E50\u65B0\u95FB', imageWidth: '132px' }),
                        _react2.default.createElement(_common_comments2.default, null)
                    ),
                    _react2.default.createElement(_antd.Col, { span: 2 })
                )
            );
        }
    }]);

    return PCNewscontainer;
}(_react2.default.Component);

exports.default = PCNewscontainer;