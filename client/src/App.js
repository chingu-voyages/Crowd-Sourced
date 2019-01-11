import React, { Component } from 'react';
import './Styles/App.css';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom';
import { ApolloProvider, Query } from 'react-apollo';
import gql from "graphql-tag";
import ApolloClient from 'apollo-boost';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ListingsPage from './Pages/ListingsPage';
import ListingsOffersPage from './Pages/ListingsOffersPage';
import ListingsSeekersPage from './Pages/ListingsSeekersPage';
import SingleOfferPage from './Pages/SingleOfferPage';
import SingleCampaignPage from './Pages/SingleCampaignPage';
import NewPage from './Pages/NewPage';
import NewOffersPage from './Pages/NewOffersPage';
import LoginPage from './Pages/LoginPage';
import NoMatch from './Pages/NoMatch';

const client = new ApolloClient({
  uri: '/graphql'
})


// Component that uses withRouter to get current location and send it to the parent class using a callback
// https://reacttraining.com/react-router/web/api/withRouter
const LocationListenerRouter = withRouter(
  class LocationListener extends Component {
    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps){
      if (this.props.location !== prevProps.location) {
        this.props.locationcallback(this.props.location);
      }
    }

    render(){
      return null;
    }
  });

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: window.location
    }
    this.updateLocation = this.updateLocation.bind(this);
  }

  updateLocation(location){
    this.setState({location: location});
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className='App'>
            <LocationListenerRouter locationcallback={this.updateLocation}/>
            <NavBar
              links={{
                '/': 'Home',
                '/about': 'About',
                '/listings': 'Listings',
                '/new': 'New',
                '/login': 'Login'
              }}
              currentPage={this.state.location}/>
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
              <Route exact path='/login' component={LoginPage} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
