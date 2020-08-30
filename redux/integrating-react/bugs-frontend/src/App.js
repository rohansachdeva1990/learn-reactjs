import React from 'react';
import './App.css';
import Bugs from './components/Bugs';
import configureStore from './store/configureStore';
import StoreContext from './contexts/storeContext';

const store = configureStore();

function App() {
  return (
    <div className='App'>
      <StoreContext.Provider value={store}>
        <Bugs />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
