'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _pc_news_images_block = require('../pc_news_images_block');

var _pc_news_images_block2 = _interopRequireDefault(_pc_news_images_block);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;

var Entertrainment = function (_React$Component) {
    _inherits(Entertrainment, _React$Component);

    function Entertrainment() {
        _classCallCheck(this, Entertrainment);

        return _possibleConstructorReturn(this, (Entertrainment.__proto__ || Object.getPrototypeOf(Entertrainment)).apply(this, arguments));
    }

    _createClass(Entertrainment, [{
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
                _antd.Row,
                null,
                _react2.default.createElement(_antd.Col, { span: 2 }),
                _react2.default.createElement(
                    _antd.Col,
                    { span: 20 },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'bottom' },
                            _react2.default.createElement('img', { src: '../src/images/flex.jpg' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'lefttop' },
                            _react2.default.createElement('span', { 'class': 'item-first' }),
                            _react2.default.createElement('span', { 'class': 'item-two' }),
                            _react2.default.createElement('span', { 'class': 'item-three' }),
                            _react2.default.createElement('div', { className: 'clear' })
                        )
                    ),
                    _react2.default.createElement(
                        _antd.Tabs,
                        { defaultActiveKey: '1', tabPosition: 'left', className: 'tabsetting' },
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u7EFC\u827A', key: '1' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'this is the first tab'
                            ),
                            _react2.default.createElement(_pc_news_images_block2.default, { count: 30, type: 'guoji', width: '100%', cartTitle: '\u56FD\u9645\u65B0\u95FB', imageWidth: '132px' })
                        ),
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u5F71\u89C6', key: '2' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'this is the second tab'
                            ),
                            _react2.default.createElement(_pc_news_images_block2.default, { count: 30, type: 'top', width: '100%', cartTitle: '\u56FD\u9645\u65B0\u95FB', imageWidth: '132px' })
                        ),
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u7F51\u5267', key: '3' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'this is the third tab'
                            ),
                            _react2.default.createElement(_pc_news_images_block2.default, { count: 30, type: 'guonei', width: '100%', cartTitle: '\u56FD\u9645\u65B0\u95FB', imageWidth: '132px' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _antd.Divider,
                            { orientation: 'left', className: 'dividersetting' },
                            '\u4EBA\u7269\u4E13\u680F'
                        ),
                        _react2.default.createElement(
                            _antd.Divider,
                            { orientation: 'left', className: 'dividersetting' },
                            '\u4E2A\u6027\u63A8\u8350'
                        ),
                        _react2.default.createElement(
                            'div',
                            { 'class': 'suggestion' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u8D75 \u4E3D \u9896'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u7389 \u65E0 \u5FC3'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u76DB \u660E \u5170'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u6797    \u6D45'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u82B1 \u5343 \u9AA8'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u78A7    \u7476'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u5C39 \u65B0 \u6708'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u7409    \u7483'
                            ),
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u695A    \u4E54'
                            )
                        )
                    )
                ),
                _react2.default.createElement(_antd.Col, { span: 2 })
            );
        }
    }]);

    return Entertrainment;
}(_react2.default.Component);

exports.default = Entertrainment;