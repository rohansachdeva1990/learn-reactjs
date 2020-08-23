import React from 'react';

const Validation = ({ inputLength }) => {
  let validationOutput =
    inputLength < 5 ? 'Text too short' : 'Text long enough';
  return (
    <div>
      <p>{validationOutput}</p>
    </div>
  );
};

export default Validation;
