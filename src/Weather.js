import React, {Component} from 'react';
import SunriseSunset from './SunriseSunset'
import HourlyForecast from './HourlyForecast'
import LocationTempRange from './LocationTempRange'
import Navbar from './Navbar'
import SpotifyPlayer from './SpotifyPlayer'
import Toggle from './ToggleRenderProps'

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  hourlyForecast = this.props.weather.hourly.map(weather => {
    return (
      <HourlyForecast
      hour={weather.dt}
      icon={weather.weather[0].icon}
      temp={weather.temp}
      desc={weather.weather[0].description}/>
    )
  })

  showComponents = (status) => {
    console.log(status)
  }

  showSunriseSunset = (
    <SunriseSunset
    sunrise={this.props.weather.sunrise}
    sunset={this.props.weather.sunset}/>)


  render () {
      console.log(this.props.weather)
    return (
      <div className='weather-comps'>
        <div className='navbar'>< Navbar showComponents={this.showComponents}>
          <SunriseSunset
          sunrise={this.props.weather.sunrise}
          sunset={this.props.weather.sunset}/>
        </Navbar></div>

      <Toggle render ={({display, toggle}) => (
        <div>
        {display && <SunriseSunset
        sunrise={this.props.weather.sunrise}
        sunset={this.props.weather.sunset}/>}
        <button onClick={toggle}>Show/Hide</button>
        </div>
      )}
      />

      <Toggle render ={({display, toggle}) => (
        <div>
        {display && <SpotifyPlayer desc={this.props.weather.desc}/>}
        <button onClick={toggle}>Show/Hide</button>
        </div>
      )}
      />

      <Toggle render ={({display, toggle}) => (
        <div>
        {display && <LocationTempRange
        current={this.props.weather.current}
        high={this.props.weather.high}
        low={this.props.weather.low}/>}
        <button onClick={toggle}>Show/Hide</button>
        </div>
      )}
      />

      <Toggle render ={({display, toggle}) => (
        <div>
        {display && <div className="hourly-forecast">
          <h4>  Hourly Forecast </h4>
          {this.hourlyForecast}
        </div>}
        <button onClick={toggle}>Show/Hide</button>
        </div>
      )}
      />

      {this.showComponents()}
      {this.showComponents && <SunriseSunset
      sunrise={this.props.weather.sunrise}
      sunset={this.props.weather.sunset}/>}



      
      </div>
    )
  }
  }

export default Weather;
