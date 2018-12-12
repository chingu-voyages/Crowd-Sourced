import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Button.css';

// a button that does something when clicked
export default class Button extends Component {
  render(){
    return(
      <div
        onClick={this.props.onClick}
        className='button'>
        {this.props.text}
      </div>
    )
  }
}

// a button that is a link
export class LinkButton extends Component {
  render(){
    return(
      <a
        className='button'
        href={this.props.link}>
        {this.props.text}
      </a>
    )
  }
}

// a internal link should use Link from react router instead of onClick function
export class SiteButton extends Component {
  render(){
    return(
      <Link
        className='button'
        to={this.props.link}>
        {this.props.text}
      </Link>
    )
  }
}
