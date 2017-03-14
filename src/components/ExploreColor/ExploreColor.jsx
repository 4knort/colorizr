import React, { Component, PropTypes } from 'react';

export default class ExploreColor extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    onClickAddColor: PropTypes.func.isRequired,
    isClicked: PropTypes.bool.isRequired,
  }

  state = {
    isClicked: this.props.isClicked,
  }

  itemClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <div className="colors__item" onClick={() => {
        this.itemClick();
        this.props.onClickAddColor(this.state.isClicked);
      }}>
        <div className="colors__item-example" style={{ backgroundColor: this.props.color }} />
        <p className="colors__item-value">{this.props.color}</p>
      </div>
    );
  }
}
