import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
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
    const inlinestyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid white',
      padding: '8px',
      ":hover": {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
          return <Person
            name={person.name}
            changed={(event) => {
              this.nameChangedHandler(event, person.id)
            }}
            age={person.age}
            key={person.id}
            click={() => this.deletePersonHandler(index)}
            />
        })}
          </div>
      );
      inlinestyle.backgroundColor = 'red';
      inlinestyle[':hover'].backgroundColor = 'lightred';
      inlinestyle[':hover'].color = 'black';

    }
    let clasess = [];
    if (this.state.persons.length <= 2) {
      clasess.push('red');
    }
    if (this.state.persons.length <= 1) {
      clasess.push('bold');
    }
    return (
      <StyleRoot>
<div className="App">
        <h2>Hi, I am react App!</h2>
        <p className={clasess.join(' ')}>This is really working</p>
        <button
      style={inlinestyle}
      onClick={ this.togglePersonHandler}>Switch Name</button>
        {person}
      </div>
      </StyleRoot>
      );
  }
}

export default Radium(App);
