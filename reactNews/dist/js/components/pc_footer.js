'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PCFooter = function (_React$Component) {
    _inherits(PCFooter, _React$Component);

    function PCFooter() {
        _classCallCheck(this, PCFooter);

        var _this = _possibleConstructorReturn(this, (PCFooter.__proto__ || Object.getPrototypeOf(PCFooter)).call(this));

        _this.state = {
            current: 'headline'

        };

        return _this;
    }

    _createClass(PCFooter, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(_antd.Col, { span: 2 }),
                    _react2.default.createElement(
                        _antd.Col,
                        { span: 20, className: 'footer' },
                        '\xA9\xA02018React \u65B0\u95FB\u7F51\u9875\u5B9E\u6218@Chenxq'
                    ),
                    _react2.default.createElement(_antd.Col, { span: 2 })
                )
            );
        }
    }]);

    return PCFooter;
}(_react2.default.Component);

exports.default = PCFooter;