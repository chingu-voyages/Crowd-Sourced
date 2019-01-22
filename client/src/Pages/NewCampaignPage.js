import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import SingleCard from '../Components/SingleCard';
import { FormButton } from '../Components/Buttons';
import Loading from '../Components/Loading';
import TextInput from '../Components/TextInput';
import '../Styles/NewCampaignPage.css';
import {hasInput, zipCheck } from '../Components/InputChecks';

function SuccessComp(){
	return(
		<div className='success-message'>
			<p>Thank You for submitting a new Campaign.</p>
		</div>
	)
}

const ADD_ITEM = gql`
	mutation CampaignmMutation(
		$name: String!
    $category: String!
		$description: String!
		$location: Int!
    $itemsNeeded: [String]!
	) {
		addCampaign(name: $name, category: $category, description: $description, location: $location, itemsNeeded: $itemsNeeded) {
			name
			category
      description
			location
      itemsNeeded
		}
	}
`;


export default class NewCampaignPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successSubmit: false,
      name: {
        val: '',
        hasError: false,
        typeof: 'String',
        inputCheck: hasInput
      },
      category: {
        val: '',
        hasError: false,
        typeof: 'String',
        inputCheck: hasInput
      },
      description: {
        val: '',
        hasError: false,
        typeof: 'String',
        inputCheck: hasInput
      },
      location: {
        val: '',
        hasError: false,
        typeof: 'Integer',
        inputCheck: zipCheck
      },
      itemsNeeded: {
        val: '',
        hasError: false,
        typeof: 'List',
        inputCheck: hasInput
      }
    }
    this.checkInput = {
			name: hasInput,
			category: hasInput,
      description: hasInput,
			location: zipCheck,
      itemsNeeded: hasInput
		};
    this.onInputChange = this.onInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onInputChange(e, inputKey) {
		let inputState = {...this.state[inputKey]};
		inputState.val = e.target.value;
		inputState.hasError = !this.checkInput[inputKey](e.target.value);
		this.setState({
			[inputKey]: inputState
		});
	}

  submitForm(add_function) {
		let valuesChange = {};
		let errorCount = 0;
		let valuesSubmit = {};
		for (let key in this.checkInput) {
			let inputState = {...this.state[key]};
			inputState.hasError = !this.checkInput[key](inputState.val);
			if(inputState.hasError){
				errorCount++;
				valuesChange[key] = inputState;
			}
			// some inputs are integers so we convert them here (errorcount and setState in the next lines should fix any values that are not valid)
      if(inputState.typeof === 'Integer'){
        valuesSubmit[key] = parseInt(inputState.val, 10);
      }
      else if(inputState.typeof === 'List') {
        valuesSubmit[key] = (inputState.val).split(',');
      }
			else valuesSubmit[key] = inputState.val;
		}
		if (errorCount > 0) {
			this.setState(valuesChange);
			return false;
		}
		// use mutation function to submit
		add_function({variables: valuesSubmit});
	}

  render() {
    return(
      <div className='page new-campaign'>
        <SingleCard className={this.state.successSubmit ? 'success' : ''}>
					<span className="title">{this.state.successSubmit ? 'Success!' : 'New Offer'}</span>
					<div className="line" />
          <Mutation
            onCompleted={()=> this.setState({successSubmit: true})}
            mutation={ADD_ITEM}>
            {(mutate, { loading, error })=>(
              <div className='form-wrapper'>
                <form
                  onSubmit={e=>{
                    e.preventDefault();
                    this.submitForm(mutate);
                  }}>
                  <label>Name</label>
                    <TextInput
  										value={this.state['name'].val}
  										onChange={(e) => this.onInputChange(e, 'name')}
  										hasError={this.state['name'].hasError}
  										placeholder="Your name"
  										required
  									/>
  									<label>Category</label>
  									<TextInput
  										value={this.state['category'].val}
  										onChange={(e) => this.onInputChange(e, 'category')}
  										hasError={this.state['category'].hasError}
  										placeholder="Item category"
  										required
  									/>
  									<label>Description</label>
  									<TextInput
  										value={this.state['description'].val}
  										onChange={(e) => this.onInputChange(e, 'description')}
  										hasError={this.state['description'].hasError}
  										placeholder="Item description"
  										required
  									/>
  									<label>Location</label>
  									<TextInput
  										value={this.state['location'].val}
  										onChange={(e) => this.onInputChange(e, 'location')}
  										hasError={this.state['location'].hasError}
  										placeholder="Enter 5 digit zip code"
  										required
  									/>
                    <label>Items Needed</label>
  									<TextInput
  										value={this.state['itemsNeeded'].val}
  										onChange={(e) => this.onInputChange(e, 'itemsNeeded')}
  										hasError={this.state['itemsNeeded'].hasError}
  										placeholder="List of items needed"
  										required
  									/>
  									<div className="button-wrapper">
  										<FormButton text="Submit" />
  									</div>
                </form>
                {loading && <div className='loading-cover'><Loading/></div>}
								<SuccessComp />
              </div>
            )}
          </Mutation>
        </SingleCard>
      </div>
    )
  }
}
