  
import React, { Component } from 'react';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        </Router>
      </div>
    );
  }
}

export default App;