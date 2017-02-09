'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('/Users/ericzingeler/Desktop/rainbow/node_modules/babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actionTypes = require('./action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var palettes = function palettes() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {

        case _actionTypes.LOAD:
            return [].concat((0, _toConsumableArray3.default)(state), [action.palette]);

        default:
            return state;
    }
};

exports.default = palettes;