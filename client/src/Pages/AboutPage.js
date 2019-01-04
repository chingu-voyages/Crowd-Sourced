import React, { Component } from 'react';
import '../Styles/AboutPage.css';

export default class AboutPage extends Component {
  render() {
    return (
      <div className='page page-about'>
        <h1 className='title'>About Crowd Sourced</h1>
        <div className='about-main'>
          Crowd Sourced is a project created late 2018. In short, think Craigslist + GoFundMe.
          Will update this more.
        </div>
      </div>
    )
  }
}
