import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Person : [
      {name:'Pramod',age:30},
      {name:'Shital',age:29},
      {name:'Kishor',age:30}
    ]
  }
  render() {
    return (
      <div className="App">
        <h2>Hi, I am react App!</h2>
        <button>Switch Name</button>
        <Person name={ this.state.Person[0].name} age={ this.state.Person[0].age}></Person>
        <Person name={ this.state.Person[1].name} age={ this.state.Person[1].age}> My Hobbies: Playing with New Technologies</Person>
        <Person name={ this.state.Person[2].name} age={ this.state.Person[2].age}></Person>
      </div>
    );
  }
}

export default App;
