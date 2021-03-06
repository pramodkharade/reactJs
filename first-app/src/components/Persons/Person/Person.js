import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
class Person extends PureComponent {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
  render() {
    return (
      //<div className="Person" >
      <Auxiliary>
          <p
      onClick={this.props.click}> I'm a {this.props.name} and  I am  {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input type="text" onChange={ this.props.changed}
      // ref ={(inputEl)=> this.inputElement = inputEl}
      ref= {this.inputElementRef}
      value={this.props.name}/>
     </Auxiliary> // </div>
      );
  }
}
// eslint-disable-next-line react/no-typos
Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;