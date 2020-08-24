import * as type from './actionTypes';

export const bugAdded = description => ({
  type: type.BUG_ADDED,
  payload: {
    description,
  },
});

export const bugRemoved = id => ({
  type: type.BUG_REMOVED,
  payload: {
    id,
  },
});

export const bugResolved = id => ({
  type: type.BUG_RESOLVED,
  payload: {
    id,
  },
});
