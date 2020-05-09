import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   return state;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponetUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {
      message: 'snapshot!'
    };
  }
  componentDidMount() {
    console.log('[Persons.js] componetDidMount');
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);

  }
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
