import React, { Component } from 'react';
import '../Styles/TextInput.css';

export default class TextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFocus: false,
    }
    this.toggleFocus = this.toggleFocus.bind(this);
  }
  toggleFocus(isFocus){
    let newFocus = typeof isFocus === 'boolean' ? isFocus : !this.state.isFocus;
    this.setState({
      isFocus: newFocus
    });
  }
  render(){
    return(
      <div className={`text-input ${this.state.isFocus ? 'focus' : ''}`}>
        <input
          type={this.props.type || 'text'}
          onFocus={()=>this.toggleFocus(true)}
          onBlur={()=>this.toggleFocus(false)}
          placeholder={this.props.placeholder}></input>
      </div>
    )
  }
}
