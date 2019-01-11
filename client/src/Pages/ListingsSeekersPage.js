import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { SiteLinkCard } from '../Components/Card';
import Loading from '../Components/Loading';
import '../Styles/ListingsSeekersPage.css';
import defaultImage from '../Images/heart.svg';
// TODO: defaultImage should be replaced by image of listing


const ListingsSeekersPage = () => {
	return (
		<div className="page page-seekers">
			<Query
				query={gql`
					{
						campaigns {
							name
							id
							location
						}
					}
				`}
			>
				{({ loading, error, data }) => {
					if (loading) return <Loading/>;
					if (error) return <p>Error :(</p>;
					return data.campaigns.map((campaign) => (
						<SiteLinkCard link={`/seekers/${campaign.id}`} key={campaign.id}>
							<div className='image-wrapper'>
                <img src={defaultImage} alt='heart shape'/>
              </div>
							<h3>{campaign.name}</h3>
							<p>Zip: {campaign.location}</p>
						</SiteLinkCard>
					));
				}}
			</Query>
		</div>
	);
};

export default ListingsSeekersPage;
