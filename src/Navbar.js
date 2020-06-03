import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = { isComponentActive: false}
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    console.log(this.state.isComponentActive)
    this.setState({
      isComponentActive: !this.state.isComponentActive
    })

    this.props.showComponents(this.state.isComponentActive)
  }

  render () {
    return (
      <div className='side-bar'>
        {this.props.children}
        <h2>Widgets</h2>
        <button onClick={this.onClick} className={this.state.isComponentActive ? 'SunriseSunset-active' : 'SunriseSunset-inactive'}>SunriseSunset</button>
      </div>
    )
  }
}

export default Navbar;
