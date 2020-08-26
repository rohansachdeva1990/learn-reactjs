import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugResolved: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },

    bugRemoved: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id);
      bugs.splice(index, 1);
    },

    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex(bug => bug.id === bugId);
      bugs[index].userId = userId;
    },
  },
});

export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
} = slice.actions;
export default slice.reducer;

// Selectors , can be named as select... or ...Selector
// Returns new array multiple times
// export const getUnresolvedBugs = state =>
//   state.entities.bugs.filter(bug => !bug.resolved);

// Memoization
// bugs => get unresolved from the cache
export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved) // If not changed then return from the cache
);

// We finally return a selector,
export const getBugsByUser = userId =>
  createSelector(
    state =>
      state.entities
        .bugs /* Output of this function will be input of the result function, next param */,
    bugs => bugs.filter(bug => bug.userId === userId)
  );

// export const getUnresolvedBugs = createSelector(
//   state => state.entities.bugs,
//   state => state.entities.projects,
//   (bugs, projects) => bugs.filter(bug => !bug.resolved) // If not changed then return from the cache
// );
//console.log(slice);

// Action Creators
//export const bugAdded = createAction('bugAdded');
//export const bugRemoved = createAction('bugRemoved');
//export const bugResolved = createAction('bugResolved');

// Reducer
//let lastId = 0;

// initial state
// Create reducer can have mutating code, so we don't
// need to handle immutability, redux dev tools will do that for us (using immer  )
// export default createReducer([], {
//   // key: value
//   // actions: functions (event => event handler)
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },

//   // below in square is the computed property syntax
//   [bugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex(bug => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },

//   [bugRemoved.type]: (bugs, action) => {
//     const index = bugs.findIndex(bug => bug.id === action.payload.id);
//     bugs.splice(index, 1);
//   },
// });
