import * as actionType from './actionTypes';

export const bugAdded = description => ({
  type: actionType.BUG_ADDED,
  payload: {
    description,
  },
});

export const bugRemoved = id => ({
  type: actionType.BUG_REMOVED,
  payload: {
    id,
  },
});

export const bugResolved = id => ({
  type: actionType.BUG_RESOLVED,
  payload: {
    id,
  },
});
