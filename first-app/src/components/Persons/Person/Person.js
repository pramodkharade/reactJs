import React, { Component, PureComponent } from 'react';

import './Person.css';
class Person extends PureComponent {
  render() {
    return (
      <div className="Person" >
          <p
      onClick={this.props.click}> I'm a {this.props.name} and  I am  {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input type="text" onChange={ this.props.changed} value={this.props.name}/>
      </div>
      );
  }
}


export default Person;