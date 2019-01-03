import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { SiteLinkCard } from '../Components/Card';
import '../Styles/ListingsOffersPage.css';

export default class ListingsOffersPage extends Component {
  render(){
    return(
      <div className='page page-offers'>
        <SiteLinkCard link='/'>test</SiteLinkCard>
        <Query
          query={gql`
            {
              items {
                name
                id
                category
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.items.map(item => (
              <SiteLinkCard link='/' key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
              </SiteLinkCard>
            ));
          }}
        </Query>             
      </div>
    )
  }
}
