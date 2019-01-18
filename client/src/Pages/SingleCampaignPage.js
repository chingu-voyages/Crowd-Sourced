import React, { Component } from 'react';
import '../Styles/SingleCampaignPage.css';
import gql from "graphql-tag";
import SingleCardQuery from '../Components/SingleCardQuery';
import ErrorQuery from '../Components/ErrorQuery';
import heartImage from '../Images/heart.svg';


function SuccessComp(props){
  return(
    <div>
      <div className='image-wrapper'>
        <img src={heartImage} alt='heart'/>
      </div>
      <h2>{props.data.campaign.name}</h2>
      <div className='line'></div>
      <p>
        Zip code: {props.sdata.campaign.location}
      </p>
      <p>
        {props.data.campaign.description}
      </p>
      <p>
        {props.data.campaign.itemsNeeded.map(item => <li>{item}</li>)}
      </p>
    </div>
  )
}

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
          <SingleCardQuery
            query={gql`
              {
                campaign(id: "${this.state.key}") {
                  name
                  description
                  location
                  itemsNeeded
                }
              }
            `}
            errorComponent={ErrorQuery}
            successComponent={SuccessComp}
            />
        )}
      </div>
    )
  }
}
