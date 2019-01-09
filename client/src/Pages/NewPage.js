import React from 'react';
import { SiteLinkCard } from '../Components/Card';
import '../Styles/NewPage.css';

export default function NewPage(){
	return (
		<div className="page page-new">
			<div className="cards-wrapper">
				<SiteLinkCard link="/new-offers" size="lg">
					<div className="card-img helper-image" />
					<span className="title">List a Resource</span>
					<div className="line" />
					<p>Create a new listing for a resource you want to share.</p>
				</SiteLinkCard>
				<SiteLinkCard link="/new-seekers" size="lg">
					<div className="card-img help-image" />
					<span className="title">Make a Campaign</span>
					<div className="line" />
					<p>Create a new campaign to get help with something.</p>
				</SiteLinkCard>
			</div>
		</div>
	);
}
