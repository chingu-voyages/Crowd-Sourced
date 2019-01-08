import React, { Component } from 'react';
import SingleCard from '../Components/SingleCard';
import { Button } from '../Components/Buttons';
import TextInput from '../Components/TextInput';
import '../Styles/NewOffersPage.css';

export default class NewOffersPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameInput: {
				val: '',
				hasError: false
			},
			emailInput: {
				val: '',
				hasError: false
			},
			descriptionInput: {
				val: '',
				hasError: false
			}
		};
		// functions to check input's value (for now it just checs there is something)
		this.checkInput = {
			nameInput: (val) => val.length < 1,
			emailInput: (val) => val.length < 1,
			descriptionInput: (val) => val.length < 1
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
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

	validateEmail(email) {
		const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		console.log(regexp.test(email));
	}

	submitForm() {
		this.validateEmail(this.state.emailInput.val);
		console.log('submit');
	}

	render() {
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
							placeholder="Your Name"
						/>
						<label>E-Mail</label>
						<TextInput
							value={this.state['emailInput'].val}
							onChange={(e) => this.onInputChange(e, 'emailInput')}
							type="email"
							hasError={this.state['emailInput'].hasError}
							placeholder="Your E-Mail"
						/>
						<label>Description</label>
						<TextInput
							value={this.state['descriptionInput'].val}
							onChange={(e) => this.onInputChange(e, 'descriptionInput')}
							hasError={this.state['descriptionInput'].hasError}
							placeholder="A brief description"
						/>
						<div className="button-wrapper">
							<Button onClick={this.submitForm} text="Submit" />
						</div>
					</form>
				</SingleCard>
			</div>
		);
	}
}
