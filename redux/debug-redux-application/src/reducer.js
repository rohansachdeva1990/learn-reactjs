import * as type from './actionTypes';

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case type.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case type.BUG_REMOVED:
      return state.filter(bug => bug.id !== action.payload.id);

    case type.BUG_RESOLVED:
      return state.map(bug =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );

    default:
      return state;
  }
}
