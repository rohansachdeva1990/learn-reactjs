import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 'qw3e2 ', name: 'Calvin', age: '29' },
        { id: '23der', name: 'Cheech', age: '23' },
        { id: '32fr3 ', name: 'Malcum', age: '50' },
      ],
      otherState: 'Some other state',
      showPersons: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHanlder = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] rendering....');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHanlder}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }
    return (
      <div className='App'>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
