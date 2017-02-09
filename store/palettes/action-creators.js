
import { LOAD } from './action-types';
import { getShades } from './color-tool';

export const loadPalette = rawPalette => ({
    type: LOAD,
    palette: {
        id: rawPalette.id,
        source: rawPalette.source,
        colors: getShades(rawPalette)
    }
});
