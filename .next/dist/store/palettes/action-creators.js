'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPalette = loadPalette;

var _actionTypes = require('./action-types');

var _colorTool = require('./color-tool');

function loadPalette(colorSet) {

    var palette = (0, _colorTool.getShades)(colorSet.colors, colorSet.id, colorSet.shadeCount, colorSet.shadeLimit, colorSet.trimCount);

    return { type: _actionTypes.LOAD, palette: palette };
}