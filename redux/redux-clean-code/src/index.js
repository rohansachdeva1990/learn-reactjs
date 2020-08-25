import configureStore from './store/configureStore';
import * as actions from './store/bugs/actions';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log('Action dispatched! => ', store.getState());
});

// Adding a bug
store.dispatch(actions.bugAdded('Bug 1'));

//Resolving a bug
store.dispatch(actions.bugResolved(1));

//Removing a bug
store.dispatch(actions.bugRemoved(1));

// Unsubscribing a bug
unsubscribe();
