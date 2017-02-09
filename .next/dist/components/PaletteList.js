'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('/Users/ericzingeler/Desktop/rainbow/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _ColorTable = require('./ColorTable');

var _ColorTable2 = _interopRequireDefault(_ColorTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaletteList = function PaletteList(_ref) {
    var palettes = _ref.palettes,
        selected = _ref.selected,
        selectColor = _ref.selectColor;

    return _react2.default.createElement('div', { style: { paddingTop: '72px' } }, _react2.default.createElement('div', { style: { paddingTop: selected.length ? '34px' : '0' } }, palettes.map(function (item, index) {
        return _react2.default.createElement('div', { key: index, style: { marginBottom: '12px' } }, _react2.default.createElement(_ColorTable2.default, { palette: item, onColorSelect: selectColor }));
    })));
};

PaletteList.propTypes = {
    palettes: _react2.default.PropTypes.array.isRequired,
    selected: _react2.default.PropTypes.array.isRequired,
    selectColor: _react2.default.PropTypes.func.isRequired
};
exports.default = PaletteList;