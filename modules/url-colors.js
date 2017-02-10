import { getHighlight } from './color-tool';

export function toQueryString(colors) {

    if (!colors.length) {
        return '';
    }

    return `?colors=${colors.map(color => color.hex.slice(1)).join('_')}`;
}

export function toColors(queryString) {

    if (!queryString) {
        return [];
    }

    return queryString.split('_').map(color => ({ hex: `#${color}`, hexHighlight: getHighlight(color) }));
}
