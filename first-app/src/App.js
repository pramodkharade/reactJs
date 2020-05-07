import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Persons: [
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
      Persons: [
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
      Persons: [
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
    const inlinestyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h2>Hi, I am react App!</h2>
        <button
      style={inlinestyle}
      onClick={this.togglePersonHandler}>Switch Name</button>
        {this.state.showPersons === true ?
        <div>
          <Person
        name={ this.state.Persons[0].name}
        age={ this.state.Persons[0].age}>
          </Person>
          <Person
        name={ this.state.Persons[1].name}
        age={ this.state.Persons[1].age}
        click={this.switchNameHandler.bind(this, "Pramod K !")}
        changed={this.nameChangedHandler}
        > 
              My Hobbies: Playing with New Technologies
          </Person>
          <Person
        name={ this.state.Persons[2].name}
        age={ this.state.Persons[2].age}
        >
          </Person>
          </div> : null
      }
      </div>
      );
  }
}

export default App;
