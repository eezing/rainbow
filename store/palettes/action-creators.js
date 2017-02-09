
import { LOAD } from './action-types';
import { getShades } from './color-tool';

export const loadPalette = srcPalette => ({
    type: LOAD,
    palette: getShades(srcPalette)
});
