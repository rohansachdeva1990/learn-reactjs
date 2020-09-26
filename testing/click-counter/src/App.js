import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(false);

  const handleIncrement = () => {
    if (error) {
      setError(false);
    }
    setCount(count + 1);
  };

  const handleDecrement = () =>
    count > 0 ? setCount(count - 1) : setError(true);

  return (
    <div data-test='component-app'>
      <h1 data-test='counter-display'>
        The counter is currently&nbsp;
        <span data-test='count'>{count}</span>
      </h1>
      <div
        data-test='error-message'
        className={`error ${error ? '' : 'hidden'}`}>
        The counter cannot go below 0!
      </div>
      <button data-test='increment-button' onClick={handleIncrement}>
        Increment
      </button>
      <button data-test='decrement-button' onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
