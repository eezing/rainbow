'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('/Users/ericzingeler/Desktop/rainbow/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _ColorRow = require('./ColorRow');

var _ColorRow2 = _interopRequireDefault(_ColorRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorTable = function ColorTable(_ref) {
    var palette = _ref.palette,
        onColorSelect = _ref.onColorSelect,
        width = _ref.width;

    return _react2.default.createElement('div', null, palette.map(function (colors, index) {
        return _react2.default.createElement(_ColorRow2.default, {
            key: index,
            colors: colors,
            onColorSelect: onColorSelect,
            width: width
        });
    }));
};

ColorTable.propTypes = {
    palette: _react2.default.PropTypes.array.isRequired,
    onColorSelect: _react2.default.PropTypes.func,
    width: _react2.default.PropTypes.number
};

exports.default = ColorTable;