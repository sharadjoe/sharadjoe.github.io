import React, { Component } from 'react';
import SignupPage from './components/pages/SignupPage';
import HomePage from './components/pages/HomePage';
import { Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div class="ui container">
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignupPage} />
      </div>
    );
  }
}

export default App;
