import React, { Component } from 'react';
import { SiteLinkCard } from '../Components/Card';
import '../Styles/NewPage.css';

export default class NewPage extends Component {
  render(){
    return(
      <div className='page page-new'>
        <div className='cards-wrapper'>
          <SiteLinkCard
            link='/new-offers'
            size='lg'>
            <div className='card-img helper-image'></div>
            <span className='title'>List a Resource</span>
            <div className='line'></div>
            <p>Create a new listing for a resource you want to share.</p>
          </SiteLinkCard>
          <SiteLinkCard
            link='/new-seekers'
            size='lg'>
            <div className='card-img help-image'></div>
            <span className='title'>Make a Campaign</span>
            <div className='line'></div>
            <p>Create a new campaign to get help with something.</p>
          </SiteLinkCard>
        </div>
      </div>
    )
  }
}
