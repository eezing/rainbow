
import Color from 'color-js';
import cloneDeep from 'lodash.clonedeep';

export function getShades({ id, shadeCount, trimCount = 0, colors }) {

    const middle = (shadeCount + 1) / 2;
    const increment = 1 / (shadeCount - middle);

    return colors.map((item) => {

        const out = [];

        for (let i = shadeCount; i > 0; i--) {

            const itemOut = cloneDeep(item);
            const colorSrc = Color(itemOut.hex);

            itemOut.id = `${id}-${item.id}-${shadeCount}-${i}`;

            itemOut.meta = {
                paletteId: id,
                colorId: item.id,
                paletteShadeCount: shadeCount,
                paletteShadeIndex: i
            };

            if (i < middle) {
                itemOut.hex = blacken(colorSrc, (middle - i) * increment).toString();
            } else if (i > middle) {
                itemOut.hex = whiten(colorSrc, (i - middle) * increment).toString();
            }

            itemOut.hexHighlight = getHighlight(itemOut.hex);

            out.push(itemOut);
        }

        return trimCount ? out.slice(trimCount, -trimCount) : out;
    });
}

export function getHighlight(hexColor) {

    let color = Color(hexColor);

    if (color.getLuminance() < 0.5) {
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
