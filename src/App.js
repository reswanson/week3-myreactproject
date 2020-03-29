import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import HomePage from './components/HomePage/HomePage';
import LoginForm from './components/LoginPage/LoginForm';

import Header from './header'
import Browse from './components/SneakPeak/Browse';


import './App.css';


class App extends Component {

  constructor() {
    super();
	this.state = {
	  loggedInAs: 'not logged in',
      homeLink: 'my default link'
      
	}
  }

  onChangeUserName(newName) {
	this.setState({
		loggedInAs: newName
	});
  }

  render() {
    return (
      <Router>

        <div className="App">
     

        <header className="App-header">
          <Header username= {this.state.loggedInAs} />
        </header>

         <LoginForm
           changeUser={this.onChangeUserName.bind(this)}
         />
      </div>

      </Router>
    );
  }
}
export default App;
