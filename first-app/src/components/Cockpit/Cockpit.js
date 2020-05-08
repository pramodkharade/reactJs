import React from 'react';
import Classes from './Cockpit.css';
const cockpit = (props) => {
  let assignedclasess = [];

  let btnClass = '';
  console.log('Props Value', props.showPersons);
  if (props.showPersons) {
    console.log('Calling IN');
    btnClass = 'redButton';
  } else {
    btnClass = 'greenButton';
  }
  if (props.persons.length <= 2) {
    assignedclasess.push('red');
  }
  if (props.persons.length <= 1) {
    assignedclasess.push('bold');
  }
  return (
    <div className={Classes.Cockpit}>
            <h2>Hi, I am react App!</h2>
        <p className={assignedclasess.join(' ')}>This is really working</p>
        <button
    className={btnClass}
    onClick={ props.clicked}>Switch Name</button>
        </div>
    );
};

export default cockpit;