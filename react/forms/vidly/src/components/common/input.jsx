import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className='form-control' />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default Input;

/* Without rest parameter refactoring
const Input = ({ name, label, value, error, onChange, type }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        type={type}
        name={name}
        className='form-control'
      />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

*/
