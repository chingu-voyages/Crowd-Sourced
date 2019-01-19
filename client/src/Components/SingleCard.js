import React from 'react';
import '../Styles/SingleCard.css';

const SingleCard = (props) => {
	return <div className={`single-card ${props.className}`}>{props.children}</div>;
};

export default SingleCard;
