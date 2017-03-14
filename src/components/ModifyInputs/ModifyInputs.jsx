import React, { Component, PropTypes } from 'react'

export default class ModifyInputs extends Component {
  static propTypes = {
    changeColor: PropTypes.func.isRequired,
  }

  state = {
    darkenInput: 10,
    lightenInput: 10,
  }

  keyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 97, 98, 99, 100, 101, 102, 103, 104, 105, 8, 46];

  onChange = (e, input) => {
    if (input === 'darken') {
      this.setState({
        darkenInput: e.target.value,
      });
    } else {
      this.setState({
        lightenInput: e.target.value,
      });
    }
  }

  handleKeyDown = (e) => {
    const { which } = e;
    if (!this.keyCodes.some((keyCode) => keyCode === which)) {
      e.preventDefault();
    }
  }

  onBlur = () => {
    if (this.state.darkenInput > 100) {
      this.setState({
        darkenInput: 100,
      });
    }
    if (this.state.lightenInput > 100) {
      this.setState({
        lightenInput: 100,
      });
    }
  }

  render() {
    return (
      <div className="modify-inputs">
        <div className="modify-inputs__modifiers">
          <span className="modify-inputs__percent">%</span>
          <input
            type="text"
            value={this.state.darkenInput}
            onChange={(e) => { this.onChange(e, 'darken'); }}
            onKeyDown={this.handleKeyDown}
            onBlur={this.onBlur}
            className="modify-inputs__input"
          />
          <button className="modify-inputs__button" onClick={() => {this.props.changeColor('darken', this.state.darkenInput)}}>Darken</button>
        </div>
        <div className="modify-inputs__modifiers">
          <span className="modify-inputs__percent">%</span>
          <input
            type="text"
            value={this.state.lightenInput}
            onChange={(e) => { this.onChange(e, 'lighten'); }}
            onKeyDown={this.handleKeyDown}
            onBlur={this.onBlur}
            className="modify-inputs__input"
          />
          <button className="modify-inputs__button" onClick={() => {this.props.changeColor('lighten', this.state.darkenInput)}}>Lighten</button>
        </div>
      </div>
    );
  }
}
