import React, { Component } from 'react';

import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
  nameChangedHandler = (event, id) => {
    //console.log("was click Event");
    // Don't Do this: this.state.Persons[0].name = "Pramod Kharade";
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }; // approach 2
    // const person = Object.assign({},this.state.persons[personIndex]); // approach 2
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  render() {
    let person = null;
    if (this.state.showPersons) {
      person = <Persons
      persons={this.state.persons}
      clicked={this.deletePersonHandler}
      changed={this.nameChangedHandler}/>;

    }

    return (

      <div className="App">
        <Cockpit
      showPersons ={this.state.showPersons}
      persons ={this.state.persons}
      clicked={this.togglePersonHandler}/>
        {person}
      </div>

      );
  }
}

export default App;
