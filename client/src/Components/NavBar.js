import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    const hasBottomLine = {};
    // there was an issue when hovering really fast over several links it would not switch the state fast enough so I created a const that is all false making it not worry about previous hover states (there might be a better way, instead we can keep the name of which is being hovered so only one and only one is being hovered)
    this.CONST_HASBOTTOMLINE = {};
    for(let link in this.props.links){
      hasBottomLine[link] = false;
      this.CONST_HASBOTTOMLINE[link] = false;
    }
    hasBottomLine[this.props.currentPage.pathname] = true;
    this.state = {
      isMenuActive: false,
      hasBottomLine: hasBottomLine,
      defaultBottomLine: this.props.currentPage.pathname,
    }
    this.toggleMenu = this.toggleMenu.bind(this);
    this.switchBottomLine = this.switchBottomLine.bind(this);
    this.defaultBottomLine = this.defaultBottomLine.bind(this);
    this.createLinks = this.createLinks.bind(this);
  }

  componentDidUpdate(prevProps){
    if (this.props.currentPage !== prevProps.currentPage) {
      // switch the link that has a bottom line when switching currentpage
      const hasBottomLine = {...this.CONST_HASBOTTOMLINE};
      hasBottomLine[this.props.currentPage.pathname] = true;
      this.setState({
        defaultBottomLine: this.props.currentPage.pathname,
        hasBottomLine: hasBottomLine
      });
    }
  }

  toggleMenu(e, menuState) {
    menuState = typeof menuState === 'boolean' ? menuState: !this.state.isMenuActive;
    this.setState({isMenuActive: menuState});
  }

  // this function switchines the bottom line to the one that is being hovered
  switchBottomLine(link){
    const hasBottomLine = {...this.CONST_HASBOTTOMLINE};
    hasBottomLine[link] = true;
    this.setState({hasBottomLine: hasBottomLine});
  }

  // this function switches the bottom line to the default link
  defaultBottomLine(prevLink){
    const hasBottomLine = {...this.CONST_HASBOTTOMLINE};
    hasBottomLine[this.state.defaultBottomLine] = true;
    this.setState({hasBottomLine: hasBottomLine});
  }

  createLinks(links, hasBottomLine){
    const links_list = [];
    for(let link in links){
      links_list.push(
        <li
          key={link}
          onMouseEnter={()=> this.switchBottomLine(link)}
          onMouseLeave={()=> this.defaultBottomLine(link)}
          className={`link ${hasBottomLine[link] ? 'current' : ''}`}
          onClick={(e)=> this.toggleMenu(e, false)}>
          <Link to={link}>{links[link]}</Link>
        </li>
      )
    }
    return links_list;
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
          <ul className={`links ${this.state.linksHover ? 'hover' : ''}`}>
            {this.createLinks(this.props.links, this.state.hasBottomLine)}
          </ul>
        </div>
      </nav>
    )
  }
}
