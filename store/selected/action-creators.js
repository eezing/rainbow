import { INSERT, REMOVE } from './action-types';

export const insert = color => ({
  type: INSERT,
  color
});

export const remove = color => ({
  type: REMOVE,
  color
});
