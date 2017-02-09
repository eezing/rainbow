'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducer = require('./palettes/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = require('./selected/reducer');

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({ palettes: _reducer2.default, selected: _reducer4.default });