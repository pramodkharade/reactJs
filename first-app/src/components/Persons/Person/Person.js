import React, { Component, PureComponent } from 'react';

import './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
class Person extends PureComponent {
  render() {
    return (
      //<div className="Person" >
      <Auxiliary>
          <p
      onClick={this.props.click}> I'm a {this.props.name} and  I am  {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input type="text" onChange={ this.props.changed} value={this.props.name}/>
     </Auxiliary> // </div>
      );
  }
}


export default Person;