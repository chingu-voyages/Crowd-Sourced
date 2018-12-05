import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMenuActive: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({isMenuActive: !this.state.isMenuActive});
  }
  render(){
    return(
      <nav className={`nav-bar ${this.state.isMenuActive ? 'active' :  ''}`}>
        <div className='menu-icon-wrapper'>
          <div
            className='menu-icon'
            onClick={this.toggleMenu}>
            <div className='line top'></div>
            <div className='line bottom'></div>
          </div>
        </div>
        <div className='links-wrapper'>
          <ul className='links'>
            <li
            className='link'
            onClick={this.toggleMenu}>
              <Link to='/'>Home</Link>
            </li>
            <li
              className='link'
              onClick={this.toggleMenu}>
              <Link to='/about'>About</Link>
            </li>
            <li
              className='link'
              onClick={this.toggleMenu}>
              <Link to='/listings'>Listings</Link>
            </li>
            <li
              className='link'
              onClick={this.toggleMenu}>
              <Link to='/login'>Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
