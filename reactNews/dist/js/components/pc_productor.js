'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PCProduct = function (_React$Component) {
  _inherits(PCProduct, _React$Component);

  function PCProduct() {
    _classCallCheck(this, PCProduct);

    return _possibleConstructorReturn(this, (PCProduct.__proto__ || Object.getPrototypeOf(PCProduct)).apply(this, arguments));
  }

  _createClass(PCProduct, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'area-sub', style: { overflow: 'visible' } },
        _react2.default.createElement(
          'div',
          { id: 'layout-product', className: 'm-box ui-style-gradient mb12' },
          _react2.default.createElement(
            'div',
            { id: 'js_changeView', className: 'box-bd clearfix', 'data-module-name': 'n_product' },
            _react2.default.createElement(
              'div',
              { className: 'productlinks clearfix', style: { overflow: 'visible' } },
              _react2.default.createElement(
                'div',
                { className: 'productlinks-item item-mail' },
                _react2.default.createElement(
                  'strong',
                  { className: true },
                  _react2.default.createElement(
                    'a',
                    { className: 'productlinks-i-mail', href: 'http://email.163.com/' },
                    '\u90AE\u7BB1'
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'productlinks-mail-warp js_N_navSelect' },
                  _react2.default.createElement(
                    'a',
                    { href: 'http://email.163.com/#from=ntes_product' },
                    '\u514D\u8D39\u90AE'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'productlinks-mail-fold' },
                    _react2.default.createElement(
                      'a',
                      { href: 'http://mail.163.com/#from=ntes_product', className: 'productlinks-fold-163' },
                      '163\u90AE\u7BB1'
                    ),
                    _react2.default.createElement(
                      'a',
                      { href: 'http://mail.126.com/#from=ntes_product', className: 'productlinks-fold-126' },
                      '126\u90AE\u7BB1'
                    ),
                    _react2.default.createElement(
                      'a',
                      { href: 'http://www.yeah.net/#from=ntes_product', className: 'productlinks-fold-yeah' },
                      'yeah\u90AE\u7BB1'
                    ),
                    _react2.default.createElement(
                      'a',
                      { href: 'http://mail.163.com/index.htm#tab=tab2&from=ntes_product', className: 'productlinks-fold-mob' },
                      '\u514D\u8D39\u6CE8\u518C\u624B\u673A\u5E10\u53F7'
                    )
                  )
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://vipmail.163.com/#from=www' },
                  'VIP\u90AE\u7BB1'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://qiye.163.com/' },
                  '\u4F01\u4E1A\u90AE\u7BB1'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://mail.163.com/client/dl.html?from=mail46' },
                  '\u90AE\u7BB1\u5927\u5E08'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://yixin.im', className: 'last' },
                  '\u6613\u4FE1'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'productlinks-item item-game' },
                _react2.default.createElement(
                  'strong',
                  { className: true },
                  _react2.default.createElement(
                    'a',
                    { href: 'http://nie.163.com/', className: 'productlinks-i-game' },
                    '\u6E38\u620F'
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'http://xyq.163.com/' },
                  '\u68A6\u5E7B\u897F\u6E38'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://my.163.com/' },
                  '\u68A6\u5E7B\u897F\u6E38\u624B\u6E38'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://xy2.163.com/' },
                  '\u65B0\u5927\u8BDD2'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://x3.163.com/' },
                  '\u65B0\u5927\u8BDD3'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://dhxy.163.com/' },
                  '\u5927\u8BDD\u897F\u6E38\u624B\u6E38'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://qnm.163.com/', className: 'pr0' },
                  '\u5029\u5973\u5E7D\u9B42\u624B\u6E38'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://xqn.163.com/fab/', className: 'pr0' },
                  '\u65B0\u5029\u5973\u5E7D\u9B42'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.warcraftchina.com/', className: 'pr0' },
                  '\u9B54\u517D\u4E16\u754C'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://wh2.163.com/', className: 'pr0' },
                  '\u6B66\u9B422'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://ow.blizzard.cn/', className: 'pr0' },
                  '\u5B88\u671B\u5148\u950B'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://tx3.163.com/', className: 'pr0' },
                  '\u5929\u4E0B3'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://dt2.163.com/', className: 'pr0' },
                  '\u5927\u5510\u65E0\u53CC\u96F6'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://tianyu.163.com/' },
                  '\u5929\u8C15'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://bw.163.com/' },
                  '\u897F\u695A\u9738\u738B'
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'http://zmq.163.com/' },
                  '\u9547\u9B54\u66F2'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://9.163.com/' },
                  '\u7089\u77F3\u4F20\u8BF4'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://stzb.163.com/', className: 'last' },
                  '\u7387\u571F\u4E4B\u6EE8'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'productlinks-item item-sns' },
                _react2.default.createElement(
                  'strong',
                  { className: true },
                  _react2.default.createElement(
                    'a',
                    { href: 'http://sitemap.163.com/', className: 'productlinks-i-sns' },
                    '\u793E\u533A'
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'http://rd.da.netease.com/redirect?t=VGa7BN&p=ve4u5l&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505', className: 'pr0' },
                  '\u8003\u62C9\u6D77\u8D2D'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.lofter.com/?act=qb163rk_20141031_12', style: { fontFamily: 'Arial', paddingRight: 0 } },
                  'LOFTER'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://blog.163.com/?fromService', className: 'pr0' },
                  '\u535A\u5BA2'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://cc.163.com/', className: 'pr0' },
                  'CC\u8BED\u97F3'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.bobo.com/', className: 'pr0' },
                  'BoBo\u76F4\u64AD'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://y.163.com/download/index?from=wscp', className: 'pr0' },
                  '\u7F8E\u804A'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://tie.163.com/', className: 'pr0' },
                  '\u8DDF\u8D34'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://rd.da.netease.com/redirect?t=f9vnCt&p=fvxKel&proId=1140&target=http%3A%2F%2Fwww.xiupin.com%2F', className: 'pr0' },
                  '\u79C0\u54C1'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://photo.163.com/', className: 'pr0' },
                  '\u76F8\u518C'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://love.163.com/?from=wscp', className: 'pr0' },
                  '\u82B1\u7530'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://yuehui.163.com/?from=wscp', className: 'pr0' },
                  '\u7EA6\u4F1A'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://manhua.163.com/', className: 'pr0' },
                  '\u6F2B\u753B'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://x.163.com?source=163webproduct', className: 'last' },
                  '\u9752\u679C'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'productlinks-item item-recommend' },
                _react2.default.createElement(
                  'strong',
                  { className: true },
                  _react2.default.createElement(
                    'a',
                    { href: 'http://sitemap.163.com/', className: 'productlinks-i-recommend' },
                    '\u63A8\u8350'
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'http://888.163.com/?from=tgnh2' },
                  '1\u5143\u8D2D'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'https://i.epay.126.net/a/8a/static/188activity.html?utm_source=163&utm_medium=recommend_pc&utm_campaign=1888cashfest&mmd=163&mpl=recommend_pc&mkw=1888cashfest' },
                  '\u7406\u8D22'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'https://pop.lmlc.com/web/activity/practice/index.html?from=tgn163productlist2' },
                  '\u8D5A\u94B1'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://fa.163.com/?from=tgn163cp' },
                  '\u8D35\u91D1\u5C5E'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://caipiao.163.com/#from=www', className: 'pr0' },
                  '\u5F69\u7968'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://baoxian.163.com/car/?from=wycp', className: 'pr0' },
                  '\u8F66\u9669'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://qian.163.com/', className: 'pr0' },
                  '\u6709\u94B1'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://cidian.youdao.com/' },
                  '\u6709\u9053\u8BCD\u5178'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://fanyi.youdao.com/?vendor=163homepage' },
                  '\u7FFB\u8BD1'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://note.youdao.com/?vendor=163index', className: 'pr0' },
                  '\u4E91\u7B14\u8BB0'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://yxp.163.com/', className: 'pr0' },
                  '\u5370\u50CF\u6D3E'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://open.163.com/', className: 'pr0' },
                  '\u516C\u5F00\u8BFE'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://you.163.com?from=web_in_wyshouye', className: 'last' },
                  '\u4E25\u9009'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://study.163.com/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business', className: 'pr2' },
                  '\u4E91\u8BFE\u5802'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://yuedu.163.com', className: 'pr2' },
                  '\u4E91\u9605\u8BFB'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://music.163.com/#f=index_productlist', className: 'pr2' },
                  '\u4E91\u97F3\u4E50'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://trip.163.com/', className: 'pr0' },
                  '\u706B\u8F66\u7968'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://mall.163.com/?from=mmwww', className: 'pr0' },
                  '\u5546\u57CE'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://gzy.mail.163.com/?from=163product', className: 'pr0' },
                  '\u516C\u6B63\u90AE'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://1.163.com/?from=portal163cp' },
                  '1\u5143\u593A\u5B9D'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://i.money.163.com/?imb1', className: 'pr0' },
                  '\u8D22\u7ECF\u5BA2\u6237\u7AEF'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.163.com/newsapp/', className: 'pr0' },
                  '\u65B0\u95FB\u5BA2\u6237\u7AEF'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.icourse163.org/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business', className: 'last' },
                  '\u5927\u5B66MOOC'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'productlinks-item item-sns' },
                _react2.default.createElement(
                  'strong',
                  { className: true },
                  _react2.default.createElement(
                    'a',
                    { href: 'http://sitemap.163.com/', className: 'productlinks-i-sns' },
                    '\u793E\u533A'
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'http://rd.da.netease.com/redirect?t=VGa7BN&p=ve4u5l&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505', className: 'pr0' },
                  '\u8003\u62C9\u6D77\u8D2D'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.lofter.com/?act=qb163rk_20141031_12', style: { fontFamily: 'Arial', paddingRight: 0 } },
                  'LOFTER'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://blog.163.com/?fromService', className: 'pr0' },
                  '\u535A\u5BA2'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://cc.163.com/', className: 'pr0' },
                  'CC\u8BED\u97F3'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.bobo.com/', className: 'pr0' },
                  'BoBo\u76F4\u64AD'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://y.163.com/download/index?from=wscp', className: 'pr0' },
                  '\u7F8E\u804A'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://tie.163.com/', className: 'pr0' },
                  '\u8DDF\u8D34'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://rd.da.netease.com/redirect?t=f9vnCt&p=fvxKel&proId=1140&target=http%3A%2F%2Fwww.xiupin.com%2F', className: 'pr0' },
                  '\u79C0\u54C1'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://photo.163.com/', className: 'pr0' },
                  '\u76F8\u518C'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://love.163.com/?from=wscp', className: 'pr0' },
                  '\u82B1\u7530'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://yuehui.163.com/?from=wscp', className: 'pr0' },
                  '\u7EA6\u4F1A'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://manhua.163.com/', className: 'pr0' },
                  '\u6F2B\u753B'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://x.163.com?source=163webproduct', className: 'last' },
                  '\u9752\u679C'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'productlinks-item item-recommend' },
                _react2.default.createElement(
                  'strong',
                  { className: true },
                  _react2.default.createElement(
                    'a',
                    { href: 'http://sitemap.163.com/', className: 'productlinks-i-recommend' },
                    '\u63A8\u8350'
                  )
                ),
                _react2.default.createElement(
                  'a',
                  { href: 'http://888.163.com/?from=tgnh2' },
                  '1\u5143\u8D2D'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'https://i.epay.126.net/a/8a/static/188activity.html?utm_source=163&utm_medium=recommend_pc&utm_campaign=1888cashfest&mmd=163&mpl=recommend_pc&mkw=1888cashfest' },
                  '\u7406\u8D22'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'https://pop.lmlc.com/web/activity/practice/index.html?from=tgn163productlist2' },
                  '\u8D5A\u94B1'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://fa.163.com/?from=tgn163cp' },
                  '\u8D35\u91D1\u5C5E'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://caipiao.163.com/#from=www', className: 'pr0' },
                  '\u5F69\u7968'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://baoxian.163.com/car/?from=wycp', className: 'pr0' },
                  '\u8F66\u9669'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://qian.163.com/', className: 'pr0' },
                  '\u6709\u94B1'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://cidian.youdao.com/' },
                  '\u6709\u9053\u8BCD\u5178'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://fanyi.youdao.com/?vendor=163homepage' },
                  '\u7FFB\u8BD1'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://note.youdao.com/?vendor=163index', className: 'pr0' },
                  '\u4E91\u7B14\u8BB0'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://yxp.163.com/', className: 'pr0' },
                  '\u5370\u50CF\u6D3E'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://open.163.com/', className: 'pr0' },
                  '\u516C\u5F00\u8BFE'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://you.163.com?from=web_in_wyshouye', className: 'last' },
                  '\u4E25\u9009'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://study.163.com/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business', className: 'pr2' },
                  '\u4E91\u8BFE\u5802'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://yuedu.163.com', className: 'pr2' },
                  '\u4E91\u9605\u8BFB'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://music.163.com/#f=index_productlist', className: 'pr2' },
                  '\u4E91\u97F3\u4E50'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://trip.163.com/', className: 'pr0' },
                  '\u706B\u8F66\u7968'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://mall.163.com/?from=mmwww', className: 'pr0' },
                  '\u5546\u57CE'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://gzy.mail.163.com/?from=163product', className: 'pr0' },
                  '\u516C\u6B63\u90AE'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://1.163.com/?from=portal163cp' },
                  '1\u5143\u593A\u5B9D'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://i.money.163.com/?imb1', className: 'pr0' },
                  '\u8D22\u7ECF\u5BA2\u6237\u7AEF'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.163.com/newsapp/', className: 'pr0' },
                  '\u65B0\u95FB\u5BA2\u6237\u7AEF'
                ),
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.icourse163.org/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business', className: 'last' },
                  '\u5927\u5B66MOOC'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return PCProduct;
}(_react2.default.Component);

exports.default = PCProduct;