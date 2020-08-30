import React from 'react';
import './App.css';
import Bugs from './components/Bugs';
import configureStore from './store/configureStore';
// import StoreContext from './contexts/storeContext';
import { Provider } from 'react-redux';
import BugsList from './components/BugsList';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      {/* <Bugs /> */}
      <BugsList />
    </Provider>
  );
}

export default App;
