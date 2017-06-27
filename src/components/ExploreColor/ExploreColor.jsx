import React, { Component, PropTypes } from 'react';

export default class ExploreColor extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    onClickAddColor: PropTypes.func.isRequired,
    isClicked: PropTypes.bool.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isClicked: nextProps.isClicked });
  }
  
  state = {
    isClicked: this.props.isClicked,
  }

  itemClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  }

  addColorClickHandler = () => {
    this.itemClick();
    this.props.onClickAddColor(this.state.isClicked, this.props.color);
  }

  render() {
    const activeClass = this.state.isClicked ? 'colors__item colors__item--active' : 'colors__item'
    return (
      <div className={activeClass} onClick={this.addColorClickHandler}>
        <div className="colors__item-example" style={{ backgroundColor: this.props.color }} />
        <p className="colors__item-value">{this.props.color}</p>
      </div>
    );
  }
}
