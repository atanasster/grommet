'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Layer = require('../Layer/Layer');

var _Layer2 = _interopRequireDefault(_Layer);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CenterLayer = function (_Component) {
  _inherits(CenterLayer, _Component);

  function CenterLayer() {
    var _temp, _this, _ret;

    _classCallCheck(this, CenterLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.onOpen = function () {
      return _this.setState({ open: true });
    }, _this.onClose = function () {
      return _this.setState({ open: undefined });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CenterLayer.prototype.render = function render() {
    var open = this.state.open;

    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_Button2.default, { label: 'Open', onClick: this.onOpen, primary: true }),
      open ? _react2.default.createElement(
        _Layer2.default,
        {
          position: 'center',
          modal: true,
          onClickOutside: this.onClose,
          onEsc: this.onClose
        },
        _react2.default.createElement(_Button2.default, { label: 'Close', onClick: this.onClose })
      ) : null
    );
  };

  return CenterLayer;
}(_react.Component);

(0, _react3.storiesOf)('Layer', module).add('Center Layer', function () {
  return _react2.default.createElement(CenterLayer, null);
});