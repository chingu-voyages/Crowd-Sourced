import React, { Component } from 'react';
import '../Styles/AboutPage.css';

export default class AboutPage extends Component {
  render() {
    return (
      <div className='page page-about'>
        <h1 className='title'>About Crowdsourced</h1>
        <div class='about-main'>
          Crowdsourced is a project created late 2018. In short, think Craigslist + GoFundMe.
          Will update this more.
        </div>
      </div>
    )
  }
}
