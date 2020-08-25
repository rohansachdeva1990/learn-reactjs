import configureStore from './store/configureStore';
import * as actions from './store/bugs/bugs';

const store = configureStore();

const unsubscribe = store.subscribe(() => {
  console.log('Action dispatched! => ', store.getState());
});

// Adding a bug
store.dispatch(actions.bugAdded({ description: 'Bug 1' }));

//Resolving a bug
store.dispatch(actions.bugResolved({ id: 1 }));

//Removing a bug
store.dispatch(actions.bugRemoved({ id: 1 }));

// Unsubscribing a bug
unsubscribe();
