'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('/Users/ericzingeler/Desktop/rainbow/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteColor = function DeleteColor(_ref) {
    var handleOnClick = _ref.handleOnClick;

    var onClick = function onClick(e) {
        e.preventDefault();
        handleOnClick();
    };

    return _react2.default.createElement('a', { href: '', onClick: onClick, style: { color: '#000' } }, 'delete');
};

DeleteColor.propTypes = {
    handleOnClick: _react2.default.PropTypes.func.isRequired
};

exports.default = DeleteColor;