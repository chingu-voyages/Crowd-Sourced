import React, { Component } from 'react';
import { SiteLinkCard } from '../Components/Card';
import '../Styles/ListingPage.css';

export default class ListingsPage extends Component {
  render(){
    return(
      <div className='page page-listings'>
        <div className='cards-wrapper'>
          <SiteLinkCard
            link='/'
            size='lg'>
            <div className='card-img helper-image'></div>
            <span className='title'>View Resources</span>
            <div className='line'></div>
            <p>See what other people are sharing and request their assistance.</p>
          </SiteLinkCard>
          <SiteLinkCard
            link='/'
            size='lg'>
            <div className='card-img help-image'></div>
            <span className='title'>View Campaigns</span>
            <div className='line'></div>
            <p>See what other people are looking for and offer them assistance.</p>
          </SiteLinkCard>
        </div>
      </div>
    )
  }
}
