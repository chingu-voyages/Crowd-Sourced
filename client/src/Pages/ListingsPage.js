import React from 'react';
import { SiteLinkCard } from '../Components/Card';
import '../Styles/ListingPage.css';

const ListingsPage = () => {
	return (
		<div className="page page-listings">
			<div className="cards-wrapper">
				<SiteLinkCard link="/offers" size="lg">
					<div className="card-img helper-image" />
					<span className="title">View Resources</span>
					<div className="line" />
					<p>See what other people are sharing and request their assistance.</p>
				</SiteLinkCard>
				<SiteLinkCard link="/seekers" size="lg">
					<div className="card-img help-image" />
					<span className="title">View Campaigns</span>
					<div className="line" />
					<p>See what other people are looking for and offer them assistance.</p>
				</SiteLinkCard>
			</div>
		</div>
	);
};

export default ListingsPage;
