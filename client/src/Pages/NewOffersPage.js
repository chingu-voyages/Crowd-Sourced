import React, { Component } from 'react';
import SingleCard from '../Components/SingleCard';
import Button from '../Components/Buttons';
import TextInput from '../Components/TextInput';
import '../Styles/NewOffersPage.css';

export default class NewOffersPage extends Component {
  render(){
    return(
      <div className='page page-newofffers'>
        <SingleCard>
          <span className='title'>New Offer</span>
          <div className='line'></div>
          <form>
            <label>Name</label>
            <TextInput
              placeholder='Your Name'/>
            <label>E-Mail</label>
            <TextInput
              type='email'
              placeholder='Your E-Mail'/>
            <label>Description</label>
            <TextInput
              placeholder='A brief description'/>
            <div className='button-wrapper'>
              <Button
                onClick={()=>console.log('submit')}
                text='Submit'/>
            </div>
          </form>
        </SingleCard>
      </div>
    )
  }
}
