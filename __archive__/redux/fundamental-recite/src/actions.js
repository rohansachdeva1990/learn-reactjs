import * as actionTypes from './actionTypes';

export const bugAdded = description => ({
  type: actionTypes.BUG_ADDED,
  payload: {
    description,
  },
});

// export function bugAdded(description) {
//   return {
//     type: actionTypes.BUG_ADDED,
//     payload: {
//       description,
//     },
//   };
// }
