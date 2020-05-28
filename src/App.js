import React, { Component } from 'react';
import Navbar from './Navbar';
import LocationForm from './LocationForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      widgets: []
    }
  }

  render() {
    return (
      <main className='App'>
      <h1>Custom Weather</h1>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LocationForm} />
        <Route path="/dashboard" render={props =>
          <div>
          <Navbar />
          <LocationForm />
        </div> } />
        </Switch>
      </BrowserRouter>
      </main>
    )
  }
}

export default App;
