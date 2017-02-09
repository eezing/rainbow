
import Color from 'color-js';
import cloneDeep from 'lodash.clonedeep';

export function getShades(colors, idPrefix, count, limit, trim = 0) {

    const middle = (count + 1) / 2;
    const increment = limit / (count - middle);

    return colors.map((item) => {

        const out = [];

        for (let i = count; i > 0; i--) {

            const itemOut = cloneDeep(item);
            const colorSrc = Color(itemOut.hex);

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

export function getHighlight(hexColor) {

    let color = Color(hexColor);

    if (color.getLuminance() <= 0.6) {
        return color.lightenByAmount(0.3).toString();
    } else {
        return color.darkenByAmount(0.3).toString();
    }
}

export function whiten(color, amt) {
    return color.blend(Color('#fff'), amt);
}

export function blacken(color, amt) {
    return color.blend(Color('#000'), amt);
}
