import { INSERT, REMOVE } from './action-types';

const color = (state, action) => {
  switch (action.type) {
    case INSERT:
      return Object.assign({}, state, {
        active: state.hex === action.color.hex ? true : false
      });

    default:
      return state;
  }
};

const colors = (state = [], action) => {
  switch (action.type) {
    case INSERT:
      if (state.find(item => item.hex === action.color.hex)) {
        return state.map(item => color(item, action));
      }

      return [...state, action.color].map(item => color(item, action));

    case REMOVE:
      var nextActiveIndex;

      return state
        .filter((item, index, array) => {
          if (item.hex !== action.color.hex) {
            return true;
          }

          nextActiveIndex = index === array.length - 1 ? index - 1 : index;
        })
        .map(
          (item, index) =>
            index === nextActiveIndex
              ? Object.assign({}, item, { active: true })
              : item
        );

    default:
      return state;
  }
};

export default colors;
