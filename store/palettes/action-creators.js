
import { LOAD } from './action-types';
import { getShades } from '../../modules/color-tool';

export const loadPalette = rawPalette => ({
    type: LOAD,
    palette: {
        id: rawPalette.id,
        source: rawPalette.source,
        colors: getShades(rawPalette.colors, rawPalette.shadeCount, rawPalette.trimCount)
    }
});
