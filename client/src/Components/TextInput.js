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
      <div className={`text-input ${this.state.isFocus ? 'focus' : ''} ${this.props.hasError ? 'error' : ''}`}>
        <input
          type={this.props.type || 'text'}
          onFocus={()=>this.toggleFocus(true)}
          onBlur={()=>this.toggleFocus(false)}
          value={this.props.value}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}></input>
      </div>
    )
  }
}
