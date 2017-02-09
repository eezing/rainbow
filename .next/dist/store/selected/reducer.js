'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('/Users/ericzingeler/Desktop/rainbow/node_modules/babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('/Users/ericzingeler/Desktop/rainbow/node_modules/babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _actionTypes = require('./action-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var color = function color(state, action) {

    switch (action.type) {

        case _actionTypes.INSERT:
            return (0, _assign2.default)({}, state, { active: state.hex === action.color.hex ? true : false });

        default:
            return state;
    }
};

var colors = function colors() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {

        case _actionTypes.INSERT:

            if (state.find(function (item) {
                return item.hex === action.color.hex;
            })) {
                return state.map(function (item) {
                    return color(item, action);
                });
            }

            return [].concat((0, _toConsumableArray3.default)(state), [action.color]).map(function (item) {
                return color(item, action);
            });

        case _actionTypes.REMOVE:

            var nextActiveIndex;

            return state.filter(function (item, index, array) {

                if (item.hex !== action.color.hex) {
                    return true;
                }

                nextActiveIndex = index === array.length - 1 ? index - 1 : index;
            }).map(function (item, index) {
                return index === nextActiveIndex ? (0, _assign2.default)({}, item, { active: true }) : item;
            });

        default:
            return state;
    }
};

exports.default = colors;