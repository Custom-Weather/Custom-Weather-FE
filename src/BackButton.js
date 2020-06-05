import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.
import arrowImg from './images/back-arrow.png'
import './BackButton.css';

class BackButton extends Component {

  home() {
    this.props.history.push('/');
  };

  render() {
    return (
      <button onClick={this.home.bind(this)} className="btn-back">
        <img id='arrow-img' alt='arrow-image' src={arrowImg}></img>
      </button>
    )}
}

export default withRouter(BackButton);
