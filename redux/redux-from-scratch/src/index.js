import * as actions from './actions';
import customStore from './customStore';

const unsubscribe = customStore.subscribe(() => {
  console.log(customStore.getState());
});

// Add a bug
customStore.dispatch(actions.bugAdded('NPE everywhere'));

// Resolve a bug
customStore.dispatch(actions.bugResolved(1));

// Remove a bug
customStore.dispatch(actions.bugRemoved(1));

unsubscribe();

customStore.dispatch(actions.bugAdded('You cant see me'));
