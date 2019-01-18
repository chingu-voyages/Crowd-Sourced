import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Button.css';

// a button that does something when clicked
export const Button = (props) => {
	return (
		<div onClick={props.onClick} className="button">
			{props.text}
		</div>
	);
};

// a button that is used on a form
export const FormButton = (props) => {
	return (
		<button type='submit' onClick={props.onClick} className="button">
			{props.text}
		</button>
	);
};

// a button that is a link
export const LinkButton = (props) => {
	return (
		<a className="button" href={props.link}>
			{props.text}
		</a>
	);
};

// a internal link should use Link from react router instead of onClick function
export const SiteButton = (props) => {
	return (
		<Link className="button" to={props.link}>
			{props.text}
		</Link>
	);
};
