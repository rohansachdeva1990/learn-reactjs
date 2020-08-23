import React from 'react';

import './Person.css';

const Person = props => (
  //   <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
  <div className='Person'>
    <p onClick={props.click}>
      I'm {props.name} and I am {props.age} years old!
    </p>
    <p>{props.children}</p>
    <input type='text' onChange={props.change} />
  </div>
);

export default Person;
