import React, { Component } from 'react';
import { SiteLinkCard } from '../Components/Card';
import '../Styles/ListingsSeekersPage.css';


export default class ListingsSeekersPage extends Component {
  render(){
    return(
      <div className='page page-seekers'>
        <SiteLinkCard link='/'>test seekers</SiteLinkCard>
        <SiteLinkCard link='/'>test seekers</SiteLinkCard>
        <SiteLinkCard link='/'>test seekers</SiteLinkCard>
        <SiteLinkCard link='/'>test seekers</SiteLinkCard>
        <SiteLinkCard link='/'>test seekers</SiteLinkCard>
        <SiteLinkCard link='/'>test seekers</SiteLinkCard>
      </div>
    )
  }
}
