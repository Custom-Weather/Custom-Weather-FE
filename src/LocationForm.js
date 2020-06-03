import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.

class LocationForm extends Component {

  geocode(latlong) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlong.lat}, ${latlong.lng}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`, {
         method: 'POST',
       })
       .then((response) => response.json())
       .then((data) => {
         var cityState = data.results[0].address_components[3].long_name + ', ' + data.results[0].address_components[5].short_name
         this.props.updateWeather(latlong, cityState)
       })
  }

  submitForm (e) {
    e.preventDefault()
    if (this.location.value == "") {
      fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_GOOGLE_API_KEY}`, {
             method: 'POST',
           })
           .then((response) => response.json())
           .then((data) => {
             this.geocode(data.location)
             this.props.history.push('/dashboard');
           })
    } else {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.location.value}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`, {
             method: 'POST',
           })
           .then((response) => response.json())
           .then((data) => {
             this.props.updateWeather(data.results[0].geometry.location, this.location.value)
             this.location.value = "";
             this.props.history.push('/dashboard');
           })
    }
  }

  render() {
    return (
      <div>
      <h1>Custom Weather</h1>
        <form onSubmit={this.submitForm.bind(this)}>
          <label>
            Location:
            <input type="text" placeholder='Type in city and state' data-testid='location-input' ref={node => { this.location = node; }}
            />
          </label>
          <button data-testid='input-submit' type="submit">Submit</button>
          <button data-testid='current-submit' type="submit">Use Current Location</button>
        </form>
      </div>
    );
  }
}

export default (LocationForm); // <--- make sure to wrap your component with `withRouter()`
