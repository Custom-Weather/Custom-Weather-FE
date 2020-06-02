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
      weather: {
        'current': 'Just Test Data',
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
      },
      location: ""
        }
    }

  updateWeather = (latlong, location) => {
    console.log(location)
    fetch(`https://cors-anywhere.herokuapp.com/http://weatherbeefy.herokuapp.com/weather/api/v1/${ latlong.lat }&${ latlong.lng }`)
      .then(response => {return response.json()})
      .then((data) => {
        console.log(data)
        this.setState((state) => ({weather: data, location: location}))
      })
  }

  render() {
      if(this.state.weather.current == 'Just Test Data') {return (
        <div className='form-only'>
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={()=> <LocationForm updateWeather={this.updateWeather}/>}  />
        </Switch>
        </BrowserRouter>
        </div>
        );}
        else {return (
          <main className='App'>
          <BrowserRouter>
          <Switch>
          <Route path="/" exact component={()=> <LocationForm updateWeather={this.updateWeather}/>}  />
          <Route path="/dashboard" render={props =>
            <div className='page'>
              <div className='navbar'>< Navbar /></div>
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
    );}
  }

}

export default App;
