import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.

class LocationForm extends Component {

  submitForm (e) {
    e.preventDefault()
    console.log(this.props)
    this.props.updateWeather(this.location.value)
    this.props.history.push('/dashboard'); // <--- The page you want to redirect your user to.
  }

  handleChange(event) {
   this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
      <h1>Custom Weather</h1>
        <form onSubmit={this.submitForm.bind(this)}>
          <label>
            Location:
            <input type="text" placeholder='Type in city and state' ref={node => { this.location = node; }}//onChange={this.handleChange} value={this.state.value}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        location = {console.log(this.props)}
      </div>
    );
  }
}

export default withRouter(LocationForm); // <--- make sure to wrap your component with `withRouter()`
