import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {
  render() {
    return this.props.persons.map((person, index) => {
      return <Person
        name={person.name}
        changed={(event) => {
          this.props.changed(event, person.id)
        }}
        age={person.age}
        key={person.id}
        click={() => this.props.clicked(index)}
        />
    });
  }
}

export default Persons;
