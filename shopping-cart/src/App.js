import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';

import './App.css';

class App extends Component{
  render(){
    return(
      <Provider store = {store}>
      <div className = "container">
        <div className = "col-md-9">

        </div>
        <div className = "col-md-3">

        </div>

      </div>
      </Provider>
    );
  }

}

export default App;
