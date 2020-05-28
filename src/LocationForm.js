import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.
import { BrowserRouter, Switch, Route } from "react-router-dom";

class LocationForm extends Component {

  submitForm (e) {
    e.preventDefault()
    console.log(this.location.value)
    this.props.history.push('/dashboard'); // <--- The page you want to redirect your user to.
  }

  handleChange(event) {
   this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm.bind(this)}>
          <label>
            Location:
            <input type="text" placeholder='Type in city and state' ref={node => { this.location = node; }}//onChange={this.handleChange} value={this.state.value}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {console.log(this.props)}
      </div>
    );
  }
}

export default withRouter(LocationForm); // <--- make sure to wrap your component with `withRouter()`
