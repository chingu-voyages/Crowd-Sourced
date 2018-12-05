import React, { Component } from 'react';
import './Styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ListingsPage from './Components/ListingsPage';
import LoginPage from './Components/LoginPage';


class App extends Component {
  componentDidMount() {
    fetch('/test')
      .then((res) => { return res.json()} )
      .then((data)=>{
        console.log(data);
      });
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar/>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/listings' component={ListingsPage} />
          <Route path='/login' component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
