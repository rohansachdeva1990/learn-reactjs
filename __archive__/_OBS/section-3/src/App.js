import React, { Component } from 'react';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Calvin', age: '29' },
      { name: 'Cheech', age: '23' },
      { name: 'Malcum', age: '50' },
    ],
    otherState: 'Some other state',
    username: 'Superbad',
  };

  // This is a property that holds a function and can be executed.
  switchNameHandler = newName => {
    //console.log('was clicked');
    // DON'T DO THIS!!!!!!! this.state.persons[0].name = 'Balvin';
    this.setState({
      persons: [
        { name: 'Calvin', age: '29' },
        { name: newName, age: '23' },
        { name: 'MalcumX', age: '45' },
      ],
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: '29' },
        { name: 'Cheech', age: '23' },
        { name: 'MalcumX', age: '45' },
      ],
    });
  };

  userNameChangedHandler = event => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className='App'>
        <h1>Hi! I am React App</h1>
        <button style={style} onClick={() => this.switchNameHandler('Klien')}>
          Switch Name
        </button>

        {this.state.persons.map((person, index) => (
          <Person
            key={`${person.name}-${index}`}
            name={person.name}
            age={person.age}
            click={this.switchNameHandler.bind(this, 'Harris!')}
            change={this.nameChangedHandler}
          />
        ))}

        <UserInput
          changed={this.userNameChangedHandler}
          currentName={this.state.username}
        />

        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
