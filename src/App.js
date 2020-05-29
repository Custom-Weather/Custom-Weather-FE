import React, { Component } from 'react';
import Navbar from './Navbar';
import LocationForm from './LocationForm';
import Weather from './Weather';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather:
        {
          'current': 60,
          'sunrise': 1586487424,
          'sunset': 1586487424,
          'high': 60,
          'low': 43,
          "hourly":
          [{"dt": 1588935600,
           "temp": 16.75,
           "weather": [
                         {
                           "main": "Rain",
                           "description": "moderate rain",
                           "icon": "10n"
                         }
                       ]
          },
          {"dt": 1588939200,
           "temp": 16.75,
           "weather": [
                         {
                           "main": "Rain",
                           "description": "moderate rain",
                           "icon": "10n"
                         }
                       ]
          }
        ]
        }
    }
  }

  render() {
    return (
      <main className='App'>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LocationForm} />
        <Route path="/dashboard" render={props =>
          <div>
          <Weather weather={this.state.weather}/>
        </div> } />
        </Switch>
      </BrowserRouter>
      </main>
    )
  }
}

export default App;
