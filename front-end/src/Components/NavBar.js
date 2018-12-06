import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMenuActive: false,
      linksHover: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({isMenuActive: !this.state.isMenuActive});
  }
  render(){
    const currentlink = this.props.currentPage.pathname;
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
          <ul
            className={`links ${this.state.linksHover ? 'hover' : ''}`}
            onMouseEnter={()=>this.setState({linksHover: true})}
            onMouseLeave={()=>this.setState({linksHover: false})}>
            <li
              className={`link ${currentlink === '/' ? 'current' : ''}`}
              onClick={this.toggleMenu}>
              <Link to='/'>Home</Link>
            </li>
            <li
              className={`link ${currentlink === '/about' ? 'current' : ''}`}
              onClick={this.toggleMenu}>
              <Link to='/about'>About</Link>
            </li>
            <li
              className={`link ${currentlink === '/listings' ? 'current' : ''}`}
              onClick={this.toggleMenu}>
              <Link to='/listings'>Listings</Link>
            </li>
            <li
              className={`link ${currentlink === '/login' ? 'current' : ''}`}
              onClick={this.toggleMenu}>
              <Link to='/login'>Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
