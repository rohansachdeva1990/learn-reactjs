import React, { Component } from 'react';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'qw3e2 ', name: 'Calvin', age: '29' },
      { id: '23der', name: 'Cheech', age: '23' },
      { id: '32fr3 ', name: 'Malcum', age: '50' },
    ],
    otherState: 'Some other state',
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex],
    };
    // Alternative appraoch using, wat to create a copy of an object
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    // Again favor immutability
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHanlder = index => {
    // Below is mutable
    // const persons = this.state.persons;
    // Immutable
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHanlder(index)}
              changed={event => this.nameChangedHandler(event, person.id)}
            />
          ))}
        </div>
      );

      // Dynamic
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      };
    }

    // const  classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
        <div className='App'>
          <h1>Hi! I am React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Show Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

// This is a higher order component
export default Radium(App);