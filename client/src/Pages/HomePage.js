import React, { Component } from 'react';
import '../Styles/Homepage.css';
import frontimage from '../Images/together.jpg';
import { SiteButton } from '../Components/Buttons';

export default class HomePage extends Component {
  render(){
    return(
      <div className='page page-homepage'>
        <div className='title'>
          <h3>Welcome to</h3>
          <h1>Project<br/>Title</h1>
          <SiteButton
            link={'/about'}
            text='Learn More'/>
        </div>
        <div
          style={{backgroundImage: `url(${frontimage})`}}
          className='image-wrapper'>
        </div>
      </div>
    )
  }
}
