import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: 'in' // Initialize the country property with a default value
    };
  }

  handleCountryChange = (selectedCountry) => {
    this.setState({ country: selectedCountry });
  };

  render() {
    return (
      <Router>
        <Navbar onCountryChange={this.handleCountryChange} active="active" />
        <Routes>
          <Route path="/business" exact element={<News key="business" articlesPerPage={9} country={this.state.country} category="business" />}/>
          <Route path="/education" exact element={<News key="education" articlesPerPage={9} country={this.state.country} category="education" />}/>
          <Route path="/entertainment" exact element={<News key="entertainment" articlesPerPage={9} country={this.state.country} category="entertainment" />}/>
          <Route path="/health" exact element={<News key="health" articlesPerPage={9} country={this.state.country} category="health" />}/>
          <Route path="/science" exact element={<News key="science_and_technology" articlesPerPage={9} country={this.state.country} category="science_and_technology" />}/>
          <Route path="/sports" exact element={<News key="sports" articlesPerPage={9} country={this.state.country} category="sport" />}/>
          <Route path="/travel" exact element={<News key="travel" articlesPerPage={9} country={this.state.country} category="travel" />}/>
          <Route path="/" exact element={<News key="world" articlesPerPage={9} country={this.state.country} category="world" />}/>
          {/* Add other Route components for different categories */}
        </Routes>
      </Router>
    );
  }
}