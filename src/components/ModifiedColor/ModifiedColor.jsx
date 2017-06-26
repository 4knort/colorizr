import React, { Component, PropTypes } from 'react';

import './modified-color.scss';

export default class ModifiedColor extends Component {
  componentDidMount() {
    this.props.getRandomModifyColor();
  }
  static propTypes = {
    color: PropTypes.string.isRequired,
    onClickAddColor: PropTypes.func.isRequired,
    isAdded: PropTypes.bool.isRequired,
    getRandomModifyColor: PropTypes.func.isRequired,
  }

  clickHandler = () => {
    this.props.onClickAddColor(this.props.isAdded, this.props.color);
  }
  render() {
    const buttonFunctionality = this.props.isAdded ? 'Remove' : 'Add';

    return (
      <div className="modified-color">
        <button className="modified-color__add" onClick={ this.clickHandler }>{buttonFunctionality}</button>
        <div className="modified-color__item" style={{ backgroundColor: this.props.color }} />
        <p className="modified-color__value">{this.props.color}</p>
      </div>
    );
  }
}
