'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('/Users/ericzingeler/Desktop/rainbow/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _ColorItem = require('./ColorItem');

var _ColorItem2 = _interopRequireDefault(_ColorItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorRow = function ColorRow(_ref) {
    var colors = _ref.colors,
        onColorSelect = _ref.onColorSelect,
        width = _ref.width;

    width = width || 100 / colors.length;

    return _react2.default.createElement('div', { style: { height: '30px' } }, colors.map(function (item) {
        return _react2.default.createElement(_ColorItem2.default, {
            key: item.id,
            color: item,
            width: width,
            onColorSelect: onColorSelect
        });
    }));
};

ColorRow.propTypes = {
    colors: _react2.default.PropTypes.array.isRequired,
    onColorSelect: _react2.default.PropTypes.func,
    width: _react2.default.PropTypes.number
};

exports.default = ColorRow;