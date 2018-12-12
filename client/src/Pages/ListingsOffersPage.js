import React, { Component } from 'react';
import { SiteLinkCard } from '../Components/Card';
import '../Styles/ListingsOffersPage.css';

export default class ListingsOffersPage extends Component {
  render(){
    return(
      <div className='page page-offers'>
        <SiteLinkCard link='/'>test</SiteLinkCard>
        <SiteLinkCard link='/'>test</SiteLinkCard>
        <SiteLinkCard link='/'>test</SiteLinkCard>
        <SiteLinkCard link='/'>test</SiteLinkCard>
        <SiteLinkCard link='/'>test</SiteLinkCard>
        <SiteLinkCard link='/'>test</SiteLinkCard>
      </div>
    )
  }
}
