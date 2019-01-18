import React, { Component } from 'react';
import './Styles/App.css';
import PropTypes from "prop-types";
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Routes from './Routes/Routes';

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
            <Routes />
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
