'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobile_header = require('./mobile_header');

var _mobile_header2 = _interopRequireDefault(_mobile_header);

var _mobile_footer = require('./mobile_footer');

var _mobile_footer2 = _interopRequireDefault(_mobile_footer);

var _antd = require('antd');

var _mobile_first = require('./mobile_first');

var _mobile_first2 = _interopRequireDefault(_mobile_first);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;

var Mobileindex = function (_React$Component) {
    _inherits(Mobileindex, _React$Component);

    function Mobileindex() {
        _classCallCheck(this, Mobileindex);

        return _possibleConstructorReturn(this, (Mobileindex.__proto__ || Object.getPrototypeOf(Mobileindex)).apply(this, arguments));
    }

    _createClass(Mobileindex, [{
        key: 'render',
        value: function render() {
            var setting = {
                dots: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 1
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_mobile_header2.default, null),
                _react2.default.createElement(
                    _antd.Tabs,
                    null,
                    _react2.default.createElement(
                        TabPane,
                        { tab: '\u5934\u6761', key: '1' },
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
                        _react2.default.createElement(_mobile_first2.default, { count: 20, type: 'top' })
                    ),
                    _react2.default.createElement(
                        TabPane,
                        { tab: '\u5A31\u4E50', key: '2' },
                        _react2.default.createElement(_mobile_first2.default, { count: 20, type: 'yule' })
                    ),
                    _react2.default.createElement(
                        TabPane,
                        { tab: '\u5B9E\u65F6', key: '3' },
                        _react2.default.createElement(_mobile_first2.default, { count: 20, type: 'guonei' })
                    ),
                    _react2.default.createElement(TabPane, { tab: '\u6E38\u620F', key: '4' }),
                    _react2.default.createElement(
                        TabPane,
                        { tab: '\u793E\u4F1A', key: '5' },
                        _react2.default.createElement(_mobile_first2.default, { count: 20, type: 'shehui' })
                    ),
                    _react2.default.createElement(
                        TabPane,
                        { tab: '\u56FD\u9645', key: '6' },
                        _react2.default.createElement(_mobile_first2.default, { count: 20, type: 'guoji' })
                    ),
                    _react2.default.createElement(TabPane, { tab: '\u4F53\u80B2', key: '7' }),
                    _react2.default.createElement(TabPane, { tab: '\u65F6\u5C1A', key: '8' })
                ),
                _react2.default.createElement(_mobile_footer2.default, null)
            );
        }
    }]);

    return Mobileindex;
}(_react2.default.Component);

exports.default = Mobileindex;