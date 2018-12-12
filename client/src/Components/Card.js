import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Card.css';

// Notes: if you want all cards to have the same height in the same row then the parent element should be display: flex and flex-wrap: wrap 

// props
// onClick= function called when card clicked
// size= what size card sm=4 cards on large devices 2 on medium devices and 1 in small devices, lg=2 cards on large devices, 2 on medium devices, and 1 in small devices (only works when container width is width of screen, also defaults to sm)
// children= anything the card contains
export default class Card extends Component {
  render(){
    return(
      <div
        onClick={this.props.onClick}
        className={`card ${this.props.size || 'sm'}`}>
        {this.props.children}
      </div>
    )
  }
}

// this card instead of onclick is a link to internal site page
export class SiteLinkCard extends Component {
  render(){
    return(
      <Link
        to={this.props.link}
        className={`card ${this.props.size || 'sm'}`}>
        {this.props.children}
      </Link>
    )
  }
}
