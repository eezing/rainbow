'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('/Users/ericzingeler/Desktop/rainbow/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _PageContainer = require('../components/PageContainer');

var _PageContainer2 = _interopRequireDefault(_PageContainer);

var _Top = require('../containers/Top');

var _Top2 = _interopRequireDefault(_Top);

var _Palettes = require('../containers/Palettes');

var _Palettes2 = _interopRequireDefault(_Palettes);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _data = require('../data');

var _data2 = _interopRequireDefault(_data);

var _actionCreators = require('../store/palettes/action-creators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_data2.default.map(function (item) {
    return _store2.default.dispatch((0, _actionCreators.loadPalette)(item));
});

exports.default = function () {
    return _react2.default.createElement(_reactRedux.Provider, { store: _store2.default }, _react2.default.createElement(_PageContainer2.default, null, _react2.default.createElement(_Top2.default, null), _react2.default.createElement(_Palettes2.default, null)));
};