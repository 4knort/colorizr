import React, { PropTypes, Component } from 'react';
import { Panel, ColorItem } from 'components';
import { LuminosityGroup, MixedGroup } from 'containers';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import addColorToFavourite from '../mutations/addColorToFavourite';
import currentUser from '../queries/CurrentUser';
import * as colorActions from '../actions/colorActions';
import * as userActions from '../actions/userActions';
import deleteFavourite from '../mutations/deleteFavourite';
import deleteFavouriteFromUser from '../mutations/DeleteFavouriteFromUser';
import { getFavouriteId } from '../helpers/functions';

import './css/pages.scss';

class IndexPage extends Component {
  componentWillMount() {
    if (this.props.user) {
      this.props.checkForFavourites(this.props.user.favourites);
    }  
  }

  modalClick = (e) => {
    this.setState({modalOpen: !this.state.modalOpen})
  }

  emptyColor = '#f5f5f5';

  onClickAddColor = (isAdded, color) => {
    if (!isAdded) {
      if (this.props.user) {
        this.props.addColorAndFavourite(color, this.props.user.favourites)
      } else {
        this.props.addColor(color);
      }
    } else {
      this.props.deleteColor(color);
    }
  };

  onClickDeleteColor = (color) => {
    if (color !== this.emptyColor) {
      this.props.deleteColor(color);
    }
  };

  onClickFavourite = (color, isFavourite) => {
    const userId = this.props.user.id;
    let favouriteId = null;

    if (isFavourite) {
      this.props.deleteFavourite(color);
      favouriteId = getFavouriteId(color, this.props.user.favourites)

      this.props.deleteFavouriteReq({
        variables: { favouriteId },
      });
      this.props.deleteFavouriteFromUserReq({
        variables: { userId, favouriteId },
        refetchQueries: [{ query: currentUser }],
      })
      .then(res => {
        this.props.deleteFavourites(res.data.deleteFavouriteFromUser.favourites);
      });

    } else {
      this.props.addFavourite(color);
      this.props.addColorToFavouriteReq({
        variables: { content: color, userId },
        refetchQueries: [{ query: currentUser }],
      })
      .then(res => {
        this.props.addUser(res.data.addFavouriteToUser);
      });
    }
  };

  selectAllColors = (colors) => {
    this.props.selectAll(colors, this.props.user.favourites);
  };

  chosenColorsCreate = () => {
    const chosenColors = this.props.colors.chosenColorsGroup.map((item, index) => (
      <ColorItem
        key={`chosen-${index}`}
        isChosenPanel
        color={item.color}
        isFavourite={item.isFavourite}
        onClickDeleteColor={this.onClickDeleteColor}
        onClickFavourite={this.onClickFavourite}
        user={this.props.user}
      />
    ));

    return chosenColors;
  }

  luminosityColorsCreate = () => {
    const luminosityColors = this.props.colors.luminosityGroup.map((item, index) => (
      <ColorItem
        key={`luminosity-${index}`}
        isClicked={item.isClicked}
        color={item.color}
        onClickAddColor={this.onClickAddColor}
      />
    ));

    return luminosityColors;
  }

  mixedColorsCreate = () => {
    const mixedColors = this.props.colors.mixedGroup.map((item, index) => (
      <ColorItem
        key={`mixed-${index}`}
        isClicked={item.isClicked}
        color={item.color}
        onClickAddColor={this.onClickAddColor}
      />
    ));

    return mixedColors;
  }

  render() {
    return (
      <div className="index-page" style={{ backgroundColor: this.props.chosenColor }}>
        <div className="container">
          <LuminosityGroup />
          <Panel isChosenPanel colorsBlockClass={'panel__colors panel__colors--choose'} title={'Select up to 10 colors'}>
            {this.chosenColorsCreate()}
          </Panel>
          <Panel onClick={this.selectAllColors} colors={this.props.colors.luminosityGroup} title={'Darker and Lighter'}>
            {this.luminosityColorsCreate()}
          </Panel>
          <Panel onClick={this.selectAllColors} colors={this.props.colors.mixedGroup} title={'Mixed with'} isColorPicker>
            <MixedGroup />
            {this.mixedColorsCreate()}
          </Panel>
        </div>
      </div>
    )
  }
}

export default compose(
  graphql(addColorToFavourite, {
    name: 'addColorToFavouriteReq',
  }),
  graphql(deleteFavourite, {
    name : 'deleteFavouriteReq',
  }),
  graphql(deleteFavouriteFromUser, {
    name : 'deleteFavouriteFromUserReq',
  }),
  connect(state => ({
    colors: state.colorReducer.colors,
    chosenColor: state.colorReducer.chosenColor,
    user: state.userReducer.user,
    favouriteId: state.colorReducer.favouriteId,
  }), {...colorActions, ...userActions})
)(IndexPage);
