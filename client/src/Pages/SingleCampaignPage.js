import React, { Component } from 'react';
import SingleCard from '../Components/SingleCard';
import '../Styles/SingleCampaignPage.css';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Loading from '../Components/Loading';


export default class SingleCampaignPage extends Component{
  constructor(props){
    super(props);
    this.state = {key: null}
  }

  componentDidMount(){
    this.setState({key: this.props.location.pathname.split('/')[2]})
  }

  render(){
    return(
      <div className='page single-campaign'>
        {!this.state.key ? '' : (
          <Query
            query={gql`
              {
                campaign(id: "${this.state.key}") {
                  name
                  description
                }
              }
            `}>
            {({loading, error, data}) =>{
              if(loading) return <Loading/>;
              if(error) return <p>Error</p>;
              return (
                <SingleCard>
                  <div clasName='image-wrapper'>
                    <image src='' alt='shield'/>
                  </div>
                  <h2>{data.campaign.name}</h2>
                  <p>
                    {data.campaign.description}
                  </p>
                </SingleCard>
              )
            }}
          </Query>
        )}
      </div>
    )
  }
}
