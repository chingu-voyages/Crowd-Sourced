import React, { Component } from 'react';
import '../Styles/SingleOfferPage.css';
import gql from "graphql-tag";
import SingleCardQuery from '../Components/SingleCardQuery';
import ErrorQuery from '../Components/ErrorQuery';
import shieldImage from '../Images/shield.svg';

function SuccessComp(props){
  return(
    <div>
      <div className='image-wrapper'>
        <img src={shieldImage} alt='shield'/>
      </div>
      <h2>{props.data.item.name}</h2>
      <div className='line'></div>
      <p>
        {props.data.item.category}
      </p>
    </div>
  )
}

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
          <SingleCardQuery
            query={gql`
              {
                item(id: "${this.state.key}"){
                  name
                  description
                  category
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
