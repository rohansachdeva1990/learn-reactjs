import React from 'react';

import './UserOutput.css';

const UserOutput = props => (
  <div className='UserOutput'>
    <p>Username: {props.username}</p>
    <p>This will be overritten</p>
  </div>
);

export default UserOutput;
