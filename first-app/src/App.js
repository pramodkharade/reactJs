import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Pramod',
        age: 30
      },
      {
        name: 'Shital',
        age: 29
      },
      {
        name: 'Kishor',
        age: 30
      }
    ],
    showPersons: false
  }
  togglePersonHandler = () => {
    console.log('Calling toggle person');
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };
  switchNameHandler = (newName) => {
    //console.log("was click Event");
    // Don't Do this: this.state.Persons[0].name = "Pramod Kharade";
    this.setState({
      persons: [
        {
          name: newName,
          age: 30
        },
        {
          name: 'Shital Nalawade',
          age: 29
        },
        {
          name: 'Kishor',
          age: 30
        }
      ]
    });
  }
  nameChangedHandler = (event) => {
    //console.log("was click Event");
    // Don't Do this: this.state.Persons[0].name = "Pramod Kharade";
    this.setState({
      persons: [
        {
          name: "Dyanada Pramod Kharade",
          age: 30
        },
        {
          name: event.target.value,
          age: 29
        },
        {
          name: 'Kishor',
          age: 30
        }
      ]
    });
  }

  render() {
    let person = null;
    const inlinestyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person) => {
          return <Person name={person.name} age={person.age}/>
        })}
        
          </div>
      );
    }
    return (
      <div className="App">
        <h2>Hi, I am react App!</h2>
        <button
      style={inlinestyle}
      onClick={ this.togglePersonHandler}>Switch Name</button>
        {person}
      </div>
      );
  }
}

export default App;
