import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header/Header';
import Navbar from './components/layout/navbar/Navbar';
import About from './components/pages/About';
import Login from './components/pages/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className= "container">
            <Header/>
            <Navbar/>
            <Route exact path="/" component={Login}/>
            <Route path="/about" render={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;