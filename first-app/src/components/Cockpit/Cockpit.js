import React, { useEffect, useRef } from 'react';

import Classes from './Cockpit.css';
const toggleRef = useRef(null);
const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleRef.current.click();
  }, [props.persons]);
  let assignedclasess = [];

  let btnClass = '';
  console.log('Props Value', props.showPersons);
  if (props.showPersons) {
    console.log('Calling IN');
    btnClass = 'redButton';
  } else {
    btnClass = 'greenButton';
  }
  if (props.personslenght <= 2) {
    assignedclasess.push('red');
  }
  if (props.personslenght <= 1) {
    assignedclasess.push('bold');
  }
  return (
    <div className={Classes.Cockpit}>
            <h2>Hi, I am react App!</h2>
        <p className={assignedclasess.join(' ')}>This is really working</p>
        <button
    className={btnClass}
    onClick={ props.clicked} ref={toggleRef}>Switch Name</button>
        </div>
    );
};

export default React.memo(Cockpit);