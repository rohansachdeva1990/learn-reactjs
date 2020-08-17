import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // This is a lifecycle method
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState({
          monsters: users,
        })
      );
  }

  // This wont work, because in javascript "this"  is referring to windows, it
  // does not knows the lexical scope. For below to work, we need to bind
  // (call this function with the correct 'this' of the Componenet)
  // Bind actually returns a copy of the function, it allows us to preset some arguments
  // For eg. in constructor we can do this.handleChange = this.handleChange.bind(this)
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });
  // }

  // This will work, because when arrow based functions are called, we know the scope of this pointer
  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='Search Monster'
          // We pass handle change because, it updates the state, which is needed in CardList
          // Handle change expects a callback, here we are passing a method reference kind of
          // function.
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
