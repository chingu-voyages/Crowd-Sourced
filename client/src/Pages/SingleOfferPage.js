import React, { Component } from 'react';
import SingleCard from '../Components/SingleCard';
import '../Styles/SingleOfferPage.css';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Loading from '../Components/Loading';


export default class SingleOfferPage extends Component{
  constructor(props){
    super(props);
    this.state = {key: null}
  }

  componentDidMount(){
    this.setState({key: this.props.location.pathname.split('/')[2]})
  }

  render(){
    return(
      <div className='page single-offer'>
        {!this.state.key ? '' : (
          <Query
            query={gql`
              {
                item(id: "${this.state.key}") {
                  name
                  category
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
                  <h2>{data.item.name}</h2>
                  <p>
                    {data.item.category}
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
