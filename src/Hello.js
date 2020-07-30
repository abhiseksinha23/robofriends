import React, {Component} from 'react';
import './Hello.css'

class Hello extends Component{
  render(){
    return(
      <div className="change">
      <h1>Hello There!!</h1>
      <strong><p> THIS IS THE VERY FIRST REACT COMPONENT</p>
      <p>{this.props.greeting}</p></strong>
      </div>
    );
  }
}

export default Hello
