import React, {Component} from 'react';
import SunriseSunset from './SunriseSunset'
import HourlyForecast from './HourlyForecast'
import LocationTempRange from './LocationTempRange'
import SpotifyPlayer from './SpotifyPlayer'
import EventInfo from './EventInfo'
import BookInfo from './BookInfo'
import MovieInfo from './MovieInfo'
import Toggle from './ToggleRenderProps'
import './Weather.css';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  hourlyForecast = this.props.weather.hourly.map(weather => {
    return (
      <div className='single-forecast'>
      <HourlyForecast
      hour={weather.dt}
      icon={weather.weather[0].icon}
      temp={weather.temp}
      desc={weather.weather[0].description}/>
      </div>
    )
  })

  events = (Object.keys(this.props.weather.notifications).length === 5)
  books = (Object.keys(this.props.weather.notifications).length === 2)

  render () {

    return (
      <div className='weather-comps'>
        <h1 className='current-location'>{this.props.location}</h1>

        <Toggle render ={({display, toggle}) => (
          <div>
          {display && <SpotifyPlayer desc={this.props.weather.desc}/>}
          <button onClick={toggle} className="nav-bar" id='button2'>Weather Music</button>
          </div>
        )}
        />


        <Toggle render ={({display, toggle}) => (
          <div className='LocationTempRange'>
          {display && <LocationTempRange
          current={this.props.weather.current}
          high={this.props.weather.high}
          low={this.props.weather.low}/>}
          <button onClick={toggle} className="nav-bar" id='button3'>Current, High, Low</button>
          </div>
        )}
        />

        <Toggle render ={({display, toggle}) => (
          <div>
          {display && <SunriseSunset
          sunrise={this.props.weather.sunrise}
          sunset={this.props.weather.sunset}/>}
          <button onClick={toggle} className="nav-bar" id='button1'>Sunrise & Sunset</button>
          </div>
        )}
        />

        <Toggle render ={({display, toggle}) => (
          <div>
          {display && <div className="hourly-forecast">
            <h4>  Hourly Forecast </h4>
            {this.hourlyForecast}
          </div>}
          <button onClick={toggle} className="nav-bar" id='button4'>Hourly Forecasts</button>
          </div>
        )}
        />

        {this.events && <Toggle render ={({display, toggle}) => (
          <div>
          {display && <EventInfo notifications={this.props.weather.notifications}/>}
          <button onClick={toggle} className="nav-bar" id='button5'>Notifications</button>
          </div>
        )}
        />}

        {this.books && <Toggle render ={({display, toggle}) => (
          <div>
          {display && <div>
            <BookInfo notifications={this.props.weather.notifications}/>
            <MovieInfo notifications={this.props.weather.notifications}/>
          </div>}
          <button onClick={toggle} className="nav-bar" id='button5'>Notifications</button>
          </div>
        )}
        />}

      </div>
    )
  }
}

export default Weather;
