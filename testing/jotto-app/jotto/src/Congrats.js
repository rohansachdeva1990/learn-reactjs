import React from 'react';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test='component-congrats'>
        <div data-test='congrats-message'>
          <span>Congratulations! You guessed the word!</span>
        </div>
      </div>
    );
  } else {
    return <div data-test='component-congrats' />;
  }
};

export default Congrats;
