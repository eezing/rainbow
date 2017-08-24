import { LOAD } from './action-types';

const palettes = (state = [], action) => {

    switch(action.type) {

    case LOAD:
        return [
            ...state,
            action.palette
        ];

    default:
        return state;
    }
};

export default palettes;
