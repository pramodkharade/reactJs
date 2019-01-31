import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Persons : [
      {name:'Pramod',age:30},
      {name:'Shital',age:29},
      {name:'Kishor',age:30}
    ]
  }
  switchNameHandler = (newName)=>{
    //console.log("was click Event");
     // Don't Do this: this.state.Persons[0].name = "Pramod Kharade";
     this.setState({
      Persons : [
        {name:newName,age:30},
        {name:'Shital Nalawade',age:29},
        {name:'Kishor',age:30}
      ]
     });
  }
  render() {
    return (
      <div className="App">
        <h2>Hi, I am react App!</h2>
        <button onClick={ ()=>this.switchNameHandler("Pramod Kharade!!")}>Switch Name</button>
        <Person 
            name={ this.state.Persons[0].name} 
            age={ this.state.Persons[0].age}>
        </Person>
        <Person 
            name={ this.state.Persons[1].name} 
            age={ this.state.Persons[1].age} click={this.switchNameHandler.bind(this,"Pramod K !")}> 
            My Hobbies: Playing with New Technologies
        </Person>
        <Person 
          name={ this.state.Persons[2].name} 
          age={ this.state.Persons[2].age}>
        </Person>
      </div>
    );
  }
}

export default App;
