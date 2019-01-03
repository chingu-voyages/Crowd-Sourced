import React, { Component } from 'react';
import Button, { SiteButton } from '../Components/Buttons';
import '../Styles/NoMatch.css';

export default class NoMatch extends Component {
  render(){
    return(
      <div className='page page-nomatch'>
        <div className='image-container' />
        <div className='info-wrapper'>
          <div className='text-wrapper'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <div className='line' />
            <p>Opps, looks like the page is not available. Please check the URL for spelling or check out our home page.</p>
          </div>
          <SiteButton
            link='/'
            text='Home'/>
          <Button
            onClick={()=> window.history.back()}
            text='Go Back'/>
        </div>
      </div>
    )
  }
}
