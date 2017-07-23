import React, { Component, PropTypes } from 'react';
import { Image } from 'components';

export default class ColorItem extends Component {
  static propTypes = {
    onClickAddColor: PropTypes.func.isRequired,
    onClickFavourite: PropTypes.func,
    onClickDeleteColor: PropTypes.func,
    color: PropTypes.string.isRequired,
    isClicked: PropTypes.bool,
    isFavourite: PropTypes.bool,
    isChosenPanel: PropTypes.bool,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isClicked: nextProps.isClicked, isFavourite: nextProps.isFavourite });
  }

  state = {
    isClicked: this.props.isClicked,
    isFavourite: this.props.isFavourite,
  }

  itemClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  }

  addColorClickHandler = () => {
    this.itemClick();
    this.props.onClickAddColor(this.state.isClicked, this.props.color);
  }

  deleteColorClickHandler = () => {
    this.props.onClickDeleteColor(this.props.color);
  }

  clickFavourite = () => {
    this.props.onClickFavourite(this.props.color, this.state.isFavourite);
  }
  render() {
    const emptyColor = '#f5f5f5';
    const classPanel = this.props.isChosenPanel ? 'panel__color-item panel__color-item--choose' : 'panel__color-item';
    const classIcon = this.state.isClicked ? 'panel__color-icon panel__color-icon--active' : 'panel__color-icon panel__color-icon--hover';
    const icon = this.props.color === emptyColor ? '' : <span className={classIcon}>+</span>;
    const iconFavouriteStyle = this.state.isFavourite
      ? <Image image="LikeIconActive" />
      : <Image image="LikeIcon" />;

    const iconFavourite = (this.props.color !== emptyColor && this.props.user) ? iconFavouriteStyle : '';

    const item = this.props.isChosenPanel
    ? (
       <div style={{ display: 'inline-block'}}>
          <div className={classPanel} style={{ backgroundColor: this.props.color }} onClick={this.deleteColorClickHandler}>
            {icon}   
          </div>
          <div style={{ display: 'block', padding: '10px', position: 'relative' }}>
            <span className="panel__color-favourite" onClick={this.clickFavourite} >{iconFavourite}</span>
            <span className="panel__color-favourite-tooltip">Add to favourite</span>
          </div>
       </div>
      )
    : (
        <div className={classPanel} style={{ backgroundColor: this.props.color, cursor: 'pointer' }} onClick={this.addColorClickHandler}>
          {icon}
        </div>
      );

    return item;
  }
}
