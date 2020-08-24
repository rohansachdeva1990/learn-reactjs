import store from './store';

// It si very similar to google event bus
// Logs everytime the state of the events get changed
// This is normally done in UI layer, So whenever the state of the store is changed, we refresh the UI
// For vanilla JS or jQuery, this is the part where we update the DOM elements
// For React, this should re-render the UI
// These subscriptions can create memory leaks
const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

// Sending an event
store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'Bug1',
  },
});

unsubscribe();

// We don't notified for below
store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1,
  },
});

console.log(store.getState());
