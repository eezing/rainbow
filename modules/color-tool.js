import Color from 'color-js';

export function getShades(colors, shadeCount, trimCount = 0) {
  const middle = (shadeCount + 1) / 2;
  const increment = 1 / (shadeCount - middle);

  return colors.map(item => {
    const out = [];

    for (let i = shadeCount; i > 0; i--) {
      const itemOut = { hex: item.hex };

      if (i < middle) {
        itemOut.hex = blacken(
          Color(itemOut.hex),
          (middle - i) * increment
        ).toString();
      } else if (i > middle) {
        itemOut.hex = whiten(
          Color(itemOut.hex),
          (i - middle) * increment
        ).toString();
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
