import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  state = {
    userInput: '',
  };

  textChangeHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  getUserInput = () => {
    const userInput = this.state.userInput;
    return userInput.split('');
  };

  deleteCharHandler = index => {
    const userInputArr = this.getUserInput();
    userInputArr.splice(index, 1);
    const updateInput = userInputArr.join('');
    this.setState({ userInput: updateInput });
  };

  render() {
    const charList = this.getUserInput().map((ch, index) => {
      return (
        <Char
          key={`ch-${index}`}
          character={ch}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className='App'>
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input
          type='text'
          onChange={this.textChangeHandler}
          value={this.state.userInput}></input>
        <p>{`User input length: ${this.state.userInput.length}`}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
