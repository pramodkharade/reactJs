import React from 'react';
import Person from './Person/Person';
const persons = (props) => props.persons.map((person, index) => {
  return <Person
    name={person.name}
    changed={(event) => {
      props.changed(event, person.id)
    }}
    age={person.age}
    key={person.id}
    click={() => props.clicked(index)}
    />
});

export default persons;
