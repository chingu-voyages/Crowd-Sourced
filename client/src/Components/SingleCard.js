import React, { Component } from 'react';
import '../Styles/SingleCard.css';

export default class SingleCard extends Component {
  render(){
    return(
      <div
        className='single-card'>
        {this.props.children}
      </div>
    )
  }
}
