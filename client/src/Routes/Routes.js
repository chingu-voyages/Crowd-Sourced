import React from 'react';
import { Route, Switch } from 'react-router-dom';
// pages
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import ListingsPage from '../Pages/ListingsPage';
import ListingsOffersPage from '../Pages/ListingsOffersPage';
import ListingsSeekersPage from '../Pages/ListingsSeekersPage';
import SingleOfferPage from '../Pages/SingleOfferPage';
import SingleCampaignPage from '../Pages/SingleCampaignPage';
import NewPage from '../Pages/NewPage';
import NewOffersPage from '../Pages/NewOffersPage';
import NewCampaignPage from '../Pages/NewCampaignPage';
import LoginPage from '../Pages/LoginPage';
import NoMatch from '../Pages/NoMatch';

export default function Routes(){
  return(
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/listings' component={ListingsPage} />
      <Route exact path='/offers' component={ListingsOffersPage} />
      <Route exact path='/offers/:id' component={SingleOfferPage} />
      <Route exact path='/seekers' component={ListingsSeekersPage} />
      <Route exact path='/seekers/:id' component={SingleCampaignPage} />
      <Route exact path='/new' component={NewPage} />
      <Route exact path='/new-offers' component={NewOffersPage} />
      <Route exact path='/new-seekers' component={NewCampaignPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route component={NoMatch} />
    </Switch>
  )
}
