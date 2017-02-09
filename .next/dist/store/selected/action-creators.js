'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.remove = exports.insert = undefined;

var _actionTypes = require('./action-types');

var insert = exports.insert = function insert(color) {
    return {
        type: _actionTypes.INSERT,
        color: color
    };
};

var remove = exports.remove = function remove(color) {
    return {
        type: _actionTypes.REMOVE,
        color: color
    };
};