
import { LOAD } from './action-types';
import { getShades } from './color-tool';

export function loadPalette(colorSet) {

    const palette = getShades(colorSet.colors, colorSet.id, colorSet.shadeCount, colorSet.shadeLimit, colorSet.trimCount);

    return { type: LOAD, palette };
}
