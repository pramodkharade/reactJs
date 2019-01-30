import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hi, I am react App!</h2>
        <Person name="Pramod" age="30"></Person>
        <Person name="Shital" age="29"></Person>
        <Person name="Kishor" age="30"></Person>
      </div>
    );
  }
}

export default App;
