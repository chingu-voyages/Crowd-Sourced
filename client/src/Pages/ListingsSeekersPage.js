import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { SiteLinkCard } from '../Components/Card';
import '../Styles/ListingsSeekersPage.css';


export default class ListingsSeekersPage extends Component {
  render(){
    return(
      <div className='page page-seekers'>
        <SiteLinkCard link='/'>test</SiteLinkCard>
        <Query
          query={gql`
            {
              campaigns {
                name
                id
                location
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.campaigns.map(campaign => (
              <SiteLinkCard link='/' key={campaign.id}>
                <h3>{campaign.name}</h3>
                <p>Zip: {campaign.location}</p>
              </SiteLinkCard>
            ));
          }}
        </Query>             
      </div>
    )
  }
}
