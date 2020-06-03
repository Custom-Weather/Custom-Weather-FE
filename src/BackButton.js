import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.

class BackButton extends Component {

  home() {
    this.props.history.push('/');
  };

  render() {
    return (
      <button onClick={this.home.bind(this)} className="btn-back">
        Go Back
      </button>
    )}
}

export default withRouter(BackButton);
