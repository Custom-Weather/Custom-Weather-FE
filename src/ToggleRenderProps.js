import React, {Component} from 'react';

export default class Toggle extends Component {
  state = {
    display: false
  };

  toggle = () => {
    this.setState({
      display: !this.state.display
    });
  };

  render() {
    const { render } = this.props;
    return (
      <div>
      {render({
        display: this.state.display,
        toggle: this.toggle
      })}
      </div>
    );
  }
}
