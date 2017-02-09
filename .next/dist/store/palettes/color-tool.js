'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getShades = getShades;
exports.getHighlight = getHighlight;
exports.whiten = whiten;
exports.blacken = blacken;

var _colorJs = require('color-js');

var _colorJs2 = _interopRequireDefault(_colorJs);

var _lodash = require('lodash.clonedeep');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getShades(colors, idPrefix, count, limit) {
    var trim = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    var middle = (count + 1) / 2;
    var increment = limit / (count - middle);

    return colors.map(function (item) {

        var out = [];

        for (var i = count; i > 0; i--) {

            var itemOut = (0, _lodash2.default)(item);
            var colorSrc = (0, _colorJs2.default)(itemOut.hex);

            itemOut.id = idPrefix + '-' + item.id + '-' + count + '-' + i;
            itemOut.meta = { groupShades: count, shade: i };

            if (i < middle) {
                itemOut.hex = blacken(colorSrc, (middle - i) * increment).toString();
            } else if (i > middle) {
                itemOut.hex = whiten(colorSrc, (i - middle) * increment).toString();
            }

            itemOut.hexHighlight = getHighlight(itemOut.hex);

            out.push(itemOut);
        }

        return trim ? out.slice(trim, -trim) : out;
    });
}

function getHighlight(hexColor) {

    var color = (0, _colorJs2.default)(hexColor);

    if (color.getLuminance() <= 0.6) {
        return color.lightenByAmount(0.3).toString();
    } else {
        return color.darkenByAmount(0.3).toString();
    }
}

function whiten(color, amt) {
    return color.blend((0, _colorJs2.default)('#fff'), amt);
}

function blacken(color, amt) {
    return color.blend((0, _colorJs2.default)('#000'), amt);
}