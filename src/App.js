import React, { Component } from 'react';
import Navbar from './Navbar';
import LocationForm from './LocationForm';
import Weather from './Weather';
import BackgroundImage from './BackgroundImage'

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
          'desc': 'Thunderstorm',
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

  // updateWeather = (location) => {
  //   // fetch call use location from location form
  //   // this.setState.weather (data from fetch)
  // }
  //updateWeather as props with method passed in

  render() {
    return (
      <main className='App'>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LocationForm} />
        <Route path="/dashboard" render={props =>
          <div className='page'>
            <div className='background-image'>
              <BackgroundImage desc={this.state.weather.desc} />
            </div>
            <div className='weather-components'>
              <Weather weather={this.state.weather}/>
            </div>
          </div>} />
        </Switch>
      </BrowserRouter>
      </main>
    )
  }
}

export default App;
