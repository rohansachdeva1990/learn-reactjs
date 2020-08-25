import reducer from './reducer';

/**
 * Used IIFE
 */
const customStore = (rcr => {
  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = listener => {
    listeners.push(listener);
    return function unsubscribe() {
      listeners = listeners.filter(fn => fn !== listener);
    };
  };

  const dispatch = action => {
    state = rcr(state, action);
    listeners.forEach(listener => listener());
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
})(reducer);

export default customStore;
