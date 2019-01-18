import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import SingleCard from '../Components/SingleCard';
import { Button } from '../Components/Buttons';
import TextInput from '../Components/TextInput';
import '../Styles/NewOffersPage.css';

const ADD_ITEM = gql`
	mutation ItemMutation(
		$name: String!
		$description: String!
		$category: String!
		$location: String!
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

export default class NewOffersPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameInput: {
				val: '',
				hasError: false
			},
			descriptionInput: {
				val: '',
				hasError: false
			},
			categoryInput: {
				val: '',
				hasError: false
			},
			emailInput: {
				val: '',
				hasError: false
			},
			locationInput: {
				val: '',
				hasError: false
			}
		};
		// functions to check input's value (for now it just checs there is something)
		this.checkInput = {
			nameInput: (val) => val.length < 1,
			emailInput: (val) =>
				!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
					val
				),
			descriptionInput: (val) => val.length < 1,
			categoryInput: (val) => val.length < 1,
			locationInput: (val) => val.length < 1 && val.length <= 5
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	onInputChange(e, inputKey) {
		const newInput = {
			val: e.target.value,
			hasError: this.checkInput[inputKey](e.target.value)
		};
		this.setState({
			[inputKey]: newInput
		});
	}

	// submitForm checks each input if it is valid before submitting. if there is at least one invalid input then it won't submit
	submitForm() {
		let valuesChange = {};
		let errorCount = 0;
		for (let key in this.checkInput) {
			let val = this.state[key].val;
			let hasError = this.checkInput[key](val);
			if (hasError) {
				errorCount++;
				valuesChange[key] = {
					val: val,
					hasError: hasError
				};
			}
		}
		if (errorCount > 0) {
			this.setState(valuesChange);
			return false;
		}
		console.log('submit here');
	}

	render() {
		const name = this.state.nameInput.val;
		const description = this.state.descriptionInput.val;
		const location = this.state.locationInput.val;
		const email = this.state.emailInput.val;
		const category = this.state.categoryInput.val;
		return (
			<div className="page page-newofffers">
				<SingleCard>
					<span className="title">New Offer</span>
					<div className="line" />
					<form>
						<label>Name</label>
						<TextInput
							value={this.state['nameInput'].val}
							onChange={(e) => this.onInputChange(e, 'nameInput')}
							hasError={this.state['nameInput'].hasError}
							placeholder="Item name"
							required
						/>
						<label>Category</label>
						<TextInput
							value={this.state['categoryInput'].val}
							onChange={(e) => this.onInputChange(e, 'categoryInput')}
							hasError={this.state['categoryInput'].hasError}
							placeholder="Item category"
							required
						/>
						<label>Description</label>
						<TextInput
							value={this.state['descriptionInput'].val}
							onChange={(e) => this.onInputChange(e, 'descriptionInput')}
							hasError={this.state['descriptionInput'].hasError}
							placeholder="Item description"
							required
						/>
						<label>E-Mail</label>
						<TextInput
							value={this.state['emailInput'].val}
							onChange={(e) => this.onInputChange(e, 'emailInput')}
							type="email"
							hasError={this.state['emailInput'].hasError}
							placeholder="Your E-Mail"
							required
						/>
						<label>Location</label>
						<TextInput
							value={this.state['locationInput'].val}
							onChange={(e) => this.onInputChange(e, 'locationInput')}
							hasError={this.state['locationInput'].hasError}
							placeholder="Enter 5 digit zip code"
							required
						/>
						<Mutation
							mutation={ADD_ITEM}
							variables={{
								name,
								description,
								category,
								email,
								location
							}}
						>
							{(addItem) => (
								<div className="button-wrapper">
									<Button onClick={addItem} text="Submit" />
								</div>
							)}
						</Mutation>
					</form>
				</SingleCard>
			</div>
		);
	}
}
