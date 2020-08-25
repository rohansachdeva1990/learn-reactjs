import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';

// One way to enable redux
// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// This knows how to talk to reux dev tools with tracing enabled
const store = createStore(reducer, devToolsEnhancer({ trace: true }));

export default store;
