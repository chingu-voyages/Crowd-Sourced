import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import SingleCard from '../Components/SingleCard';
import { FormButton } from '../Components/Buttons';
import Loading from '../Components/Loading';
import TextInput from '../Components/TextInput';
import '../Styles/NewOffersPage.css';
import {hasInput, emailCheck, zipCheck } from '../Components/InputChecks';

function SuccessComp(){
	return(
		<div className='success-message'>
			<p>Thank You for submitting a listing.</p>
		</div>
	)
}

const ADD_ITEM = gql`
	mutation ItemMutation(
		$name: String!
		$description: String!
		$category: String!
		$location: Int!
		$email: String!
	) {
		addItem(name: $name, description: $description, category: $category, location: $location, email: $email) {
			name
			description
			category
			email
			location
		}
	}
`;

// TODO: type of in state should probably moved out somewhere else.
export default class NewOffersPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			successSubmit: false,
			name: {
				val: '',
				hasError: false,
				typeof: 'String'
			},
			description: {
				val: '',
				hasError: false,
				typeof: 'String'
			},
			category: {
				val: '',
				hasError: false,
				typeof: 'String'
			},
			email: {
				val: '',
				hasError: false,
				typeof: 'String'
			},
			location: {
				val: '',
				hasError: false,
				typeof: 'Integer'
			}
		};
		// functions to check input's value (for now it just checs there is something)
		this.checkInput = {
			name: hasInput,
			email: emailCheck,
			description: hasInput,
			category: hasInput,
			location: zipCheck
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

	// submitForm checks each input if it is valid before submitting. if there is at least one invalid input then it won't submit
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
			valuesSubmit[key] = inputState.typeof === 'Integer' ? parseInt(inputState.val, 10) : inputState.val;
		}
		if (errorCount > 0) {
			this.setState(valuesChange);
			return false;
		}

		// use mutation function to submit
		add_function({variables: valuesSubmit});
	}

	render() {
		return (
			<div className="page page-newofffers">
				<SingleCard className={this.state.successSubmit ? 'success' : ''}>
					<span className="title">{this.state.successSubmit ? 'Success!' : 'New Offer'}</span>
					<div className="line" />
					<Mutation
						onCompleted={()=> this.setState({successSubmit: true})}
						mutation={ADD_ITEM}>
						{(add_item, { loading, error })=>(
							<div className='form-wrapper'>
								<form
									onSubmit={e=>{
										e.preventDefault();
										this.submitForm(add_item)
									}}>
									<label>Name</label>
									<TextInput
										value={this.state['name'].val}
										onChange={(e) => this.onInputChange(e, 'name')}
										hasError={this.state['name'].hasError}
										placeholder="Item name"
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
									<label>E-Mail</label>
									<TextInput
										value={this.state['email'].val}
										onChange={(e) => this.onInputChange(e, 'email')}
										type="email"
										hasError={this.state['email'].hasError}
										placeholder="Your E-Mail"
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
		);
	}
}
