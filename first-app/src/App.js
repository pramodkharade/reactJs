import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Pramod',
        age: 30
      },
      {
        id: 2,
        name: 'Shital',
        age: 29
      },
      {
        id: 3,
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
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.splice(); mutate // approach 1
    const persons = [...this.state.persons]; // approach 2
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
    console.log('Delete handler Calling');
  };
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
          {this.state.persons.map((person, index) => {
          return <Person name={person.name} age={person.age} key={person.id} click={() => this.deletePersonHandler(index)}/>
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
