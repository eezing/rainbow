
export function colorsToUrl(colors) {

    if (!colors.length) {
        return '/';
    }

    return `/?colors=${colors.map(color => color.hex.slice(1)).join('_')}`;
}
