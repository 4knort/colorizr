import React, { Component, PropTypes } from 'react';


export default class ColorItem extends Component {
  static propTypes = {
    onClickAddColor: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    isClicked: PropTypes.bool,
    isChosenPanel: PropTypes.bool,
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

  render() {
    const classPanel = this.props.isChosenPanel ? 'panel__color-item panel__color-item--choose' : 'panel__color-item';
    const classIcon = this.state.isClicked ? 'panel__color-icon panel__color-icon--active' : 'panel__color-icon panel__color-icon--hover';

    const item = this.props.color === '#f5f5f5'
    ? <div className={classPanel} style={{ backgroundColor: this.props.color }} />
    : (
        <div className={classPanel} style={{ backgroundColor: this.props.color, cursor: 'pointer' }} onClick={() => {
          this.itemClick();
          this.props.onClickAddColor(this.state.isClicked);
        }}>
          <span className={classIcon}>+</span>
        </div>
      );

    return item;
  }
}
