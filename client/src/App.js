import React, { Component } from 'react';
import './Styles/App.css';
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ListingsPage from './Pages/ListingsPage';
import LoginPage from './Pages/LoginPage';

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

  componentDidMount() {
    fetch('/test')
      .then((res) => { return res.json()} )
      .then((data)=>{
        console.log(data);
      });
  }

  updateLocation(location){
    this.setState({location: location});
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <LocationListenerRouter locationcallback={this.updateLocation}/>
          <NavBar
            links={{
              '/': 'Home',
              '/about': 'About',
              '/listings': 'Listings',
              '/login': 'Login'
            }}
            currentPage={this.state.location}/>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/listings' component={ListingsPage} />
          <Route path='/login' component={LoginPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
