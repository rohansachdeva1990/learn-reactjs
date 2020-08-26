import configureStore from './store/configureStore';
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
} from './store/bugs';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const store = configureStore();

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
