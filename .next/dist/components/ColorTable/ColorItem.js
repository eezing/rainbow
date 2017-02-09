'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('/Users/ericzingeler/Desktop/rainbow/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/ericzingeler/Desktop/rainbow/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/ericzingeler/Desktop/rainbow/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/ericzingeler/Desktop/rainbow/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/ericzingeler/Desktop/rainbow/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('/Users/ericzingeler/Desktop/rainbow/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('/Users/ericzingeler/Desktop/rainbow/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _touchDevice = require('../../modules/touch-device');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorItem = function (_React$Component) {
    (0, _inherits3.default)(ColorItem, _React$Component);

    function ColorItem(props) {
        (0, _classCallCheck3.default)(this, ColorItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ColorItem.__proto__ || (0, _getPrototypeOf2.default)(ColorItem)).call(this, props));

        _this.state = {
            clicked: false
        };

        _this.onClick = function () {

            if (!_this.isTouchDevice) {
                toClipboard(_this.hexInput);
            }

            if (_this.props.onColorSelect) {

                _this.props.onColorSelect(_this.props.color);

                _this.setState({
                    clicked: true
                });

                setTimeout(function () {
                    return _this.setState({ clicked: false });
                }, 200);
            }
        };

        _this.isTouchDevice = (0, _touchDevice.isTouchDevice)();
        return _this;
    }

    (0, _createClass3.default)(ColorItem, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {

            if (nextState.clicked !== this.state.clicked) {
                return true;
            }

            if (nextProps.width !== this.props.width) {
                return true;
            }

            if (nextProps.color.active !== this.props.color.active) {
                return true;
            }

            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                color = _props.color,
                width = _props.width,
                onColorSelect = _props.onColorSelect;

            var showActive = color.active || this.state.clicked;

            return _react2.default.createElement('div', {
                className: 'outer',
                style: { backgroundColor: color.hex, width: width + '%' },
                onClick: this.onClick, 'data-jsx': 2267093925
            }, _react2.default.createElement('div', {
                className: showActive ? 'inner active' : 'inner',
                style: { outlineColor: color.hexHighlight },
                'data-jsx': 2267093925
            }), _react2.default.createElement('input', { type: 'hidden', ref: function ref(input) {
                    return _this2.hexInput = input;
                }, defaultValue: color.hex, 'data-jsx': 2267093925
            }), _react2.default.createElement(_style2.default, {
                styleId: 2267093925,
                css: '.outer[data-jsx="2267093925"] {height: 30px;float: left;cursor: pointer;touchAction: manipulation;WebkitTapHighlightColor: rgba(0,0,0,0);}.inner[data-jsx="2267093925"] {height: 100%;width: 100%;margin: 0 auto;outline-width: 2px;outline-offset: -5px;}@media (hover: hover) {.inner[data-jsx="2267093925"]:hover {outline-style: solid;}.inner[data-jsx="2267093925"]:active {outline-style: solid;outline-offset: -6.5px;}}.inner.active[data-jsx="2267093925"] {outline-style: solid;outline-offset: -6.5px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29sb3JUYWJsZS9Db2xvckl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUU0QixBQUNBLCtCQUNTLGFBQ0QsWUFDSSxnQkFDVSwwQkFDYSx1Q0FDMUMsQ0FDTywrQkFDUyxhQUNELFlBQ0csZUFDSSxtQkFDRSxxQkFDeEIsQ0FDc0IsdUJBQ0wscUNBQ1cscUJBQ3hCLENBQ2Msc0NBQ1UscUJBQ0UsdUJBQzFCLENBQ0osQ0FDYyxzQ0FDVSxxQkFDRSx1QkFDMUIiLCJmaWxlIjoiY29tcG9uZW50cy9Db2xvclRhYmxlL0NvbG9ySXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZXJpY3ppbmdlbGVyL0Rlc2t0b3AvcmFpbmJvdyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzVG91Y2hEZXZpY2UgfSBmcm9tICcuLi8uLi9tb2R1bGVzL3RvdWNoLWRldmljZSc7XG5cbmNvbnN0IENvbG9ySXRlbSA9IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5pc1RvdWNoRGV2aWNlID0gaXNUb3VjaERldmljZSgpO1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuXG4gICAgICAgIGlmIChuZXh0U3RhdGUuY2xpY2tlZCAhPT0gdGhpcy5zdGF0ZS5jbGlja2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0UHJvcHMud2lkdGggIT09IHRoaXMucHJvcHMud2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHRQcm9wcy5jb2xvci5hY3RpdmUgIT09IHRoaXMucHJvcHMuY29sb3IuYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY2xpY2tlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgb25DbGljayA9ICgpID0+IHtcblxuICAgICAgICBpZiAoIXRoaXMuaXNUb3VjaERldmljZSkge1xuICAgICAgICAgICAgdG9DbGlwYm9hcmQodGhpcy5oZXhJbnB1dClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29sb3JTZWxlY3QpIHtcblxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbG9yU2VsZWN0KHRoaXMucHJvcHMuY29sb3IpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjbGlja2VkOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHsgY2xpY2tlZDogZmFsc2V9KSwgMjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7IGNvbG9yLCB3aWR0aCwgb25Db2xvclNlbGVjdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc2hvd0FjdGl2ZSA9IGNvbG9yLmFjdGl2ZSB8fCB0aGlzLnN0YXRlLmNsaWNrZWQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRlclwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvci5oZXgsIHdpZHRoOiB3aWR0aCArICclJyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja30+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3Nob3dBY3RpdmUgPyAnaW5uZXIgYWN0aXZlJyA6ICdpbm5lcid9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmVDb2xvcjogY29sb3IuaGV4SGlnaGxpZ2h0IH19XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgcmVmPXsoaW5wdXQpID0+IHRoaXMuaGV4SW5wdXQgPSBpbnB1dH0gZGVmYXVsdFZhbHVlPXtjb2xvci5oZXh9IC8+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5vdXRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoQWN0aW9uOiBtYW5pcHVsYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5uZXI6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmlubmVyOmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC02LjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaW5uZXIuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC02LjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbkNvbG9ySXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgY29sb3I6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB3aWR0aDogUmVhY3QuUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG9uQ29sb3JTZWxlY3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jXG59O1xuXG5mdW5jdGlvbiB0b0NsaXBib2FyZChpbnB1dCkge1xuICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBpbnB1dC50eXBlID0gJ2hpZGRlbic7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9ySXRlbTtcbiJdfQ== */\n/*@ sourceURL=components/ColorTable/ColorItem.js */'
            }));
        }
    }]);

    return ColorItem;
}(_react2.default.Component);

ColorItem.propTypes = {
    color: _react2.default.PropTypes.object.isRequired,
    width: _react2.default.PropTypes.number.isRequired,
    onColorSelect: _react2.default.PropTypes.func
};

function toClipboard(input) {
    input.type = 'text';
    input.select();
    document.execCommand('copy');
    input.type = 'hidden';
}

exports.default = ColorItem;