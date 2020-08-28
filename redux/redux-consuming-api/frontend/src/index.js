import configureStore from './store/configureStore';
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
  loadBugs,
} from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();

store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(loadBugs);
}, 2000);
/*
// Without action creator
store.dispatch({
  type: 'apiCallBegan', // apiRequest
  payload: {
    url: '/bugs',
    onSucess: 'bugReceived',
    onError: 'apiRequestFailed',
  },
});

*/
/*
const unsubscribe = store.subscribe(() => {
  console.log('Action dispatched! => ', store.getState());
});

store.dispatch(userAdded({ name: 'User 1' }));
store.dispatch(userAdded({ name: 'User 2' }));

// Aded a project
store.dispatch(projectAdded({ name: 'The Project X' }));

// Adding a bug
store.dispatch(bugAdded({ description: 'Bug 1' }));
store.dispatch(bugAdded({ description: 'Bug 2' }));
store.dispatch(bugAdded({ description: 'Bug 3' }));

store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));
store.dispatch(bugAssignedToUser({ bugId: 3, userId: 2 }));

//Resolving a bug
store.dispatch(bugResolved({ id: 1 }));

//Removing a bug
store.dispatch(bugRemoved({ id: 1 }));

// Unsubscribing a bug
unsubscribe();

// This does not follow DRY principle
// const unresolvedBugs = store
//   .getState()
//   .entities.bugs.filter(bug => !bug.resolved);
//
const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log(unresolvedBugs);

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());
console.log(x === y);

const bugsAssigneToUser1 = getBugsByUser(1)(store.getState());
console.log(bugsAssigneToUser1);
*/

/*
//Dispatching a function
//One flaw, we don't have access to store every where
store.dispatch(() => {
  store.dispatch({ type: 'bugsReceived', bugs: [1, 2, 3] });
});

store.dispatch((dispatch, getState) => {
  // Call an API (async)
  // When the promise is resolved,
  console.log(getState());
  dispatch({ type: 'bugsReceived', bugs: [1, 2, 3] });
});

// EXERCISE

store.dispatch({
  type: 'error',
  payload: { message: 'An error occurred.' },
});
*/
