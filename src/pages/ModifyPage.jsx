import React, { PropTypes } from 'react';
import { ModifyPicker } from 'containers';
import { Panel, ColorItem, ModifyInputs, ModifiedColor } from 'components';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import * as colorActions from '../actions/colorActions';
import addColorToFavourite from '../mutations/addColorToFavourite';
import currentUser from '../queries/CurrentUser';
import * as userActions from '../actions/userActions';
import deleteFavourite from '../mutations/deleteFavourite';
import deleteFavouriteFromUser from '../mutations/DeleteFavouriteFromUser';
import { getFavouriteId } from '../helpers/functions';

import './css/pages.scss';

const ModifyPage = (props) => {
  const emptyColor = '#f5f5f5';
  
  const onClickAddColor = (isAdded, color) => {
    if (!isAdded) {
      props.addColor(color);
      props.modifyColorAdd();
    } else {
      props.deleteColor(color);
    }
  };

  const onClickDeleteColor = (color) => {
    if (color !== emptyColor) {
      props.deleteColor(color);
    }
  };

  const onChangeColor = (modifier, percent) => {
    props.changeColor(modifier, percent);
  };

  const getRandomModify = () => {
    props.getRandomModifyColor();
  };

   const onClickFavourite = (color, isFavourite) => {
    const userId = props.user.id;
    let favouriteId = null;

      if (isFavourite) {
        props.deleteFavourite(color);
        favouriteId = getFavouriteId(color, props.user.favourites)

        props.deleteFavouriteReq({
          variables: { favouriteId },
        });
        props.deleteFavouriteFromUserReq({
          variables: { userId, favouriteId },
          refetchQueries: [{ query: currentUser }],
        })
        .then(res => {
          props.deleteFavourites(res.data.deleteFavouriteFromUser.favourites);
        });

      } else {
      props.addFavourite(color);
      props.addColorToFavouriteReq({
        variables: { content: color, userId },
        refetchQueries: [{ query: currentUser }]
      })
      .then(res => {
        props.addUser(res.data.addFavouriteToUser);
    });
    }
  };

  const chosenColors = props.colors.chosenColorsGroup.map((item, index) => (
    <ColorItem
      key={`chosen-${index}`}
      isChosenPanel
      color={item.color}
      isFavourite={item.isFavourite}
      onClickDeleteColor={onClickDeleteColor}
      onClickFavourite={onClickFavourite}
      user={props.user}
    />
  ));

  return (
    <div className="modify-page">
      <div className="container clearfix">
        <Panel isChosenPanel colorsBlockClass={'panel__colors panel__colors--choose'} title={'Select up to 10 colors'}>
          {chosenColors}
        </Panel>
        <ModifyPicker />
        <div className="modifiers-wrap">
          <ModifiedColor
            isAdded={props.modifyColorIsAdded}
            color={props.modifyColor}
            onClickAddColor={onClickAddColor}
            getRandomModifyColor={getRandomModify}
          />
          <ModifyInputs
            changeColor={onChangeColor}
          />
        </div>
      </div>
    </div>
  );
};

ModifyPage.propTypes = {
  colors: PropTypes.objectOf(React.PropTypes.array).isRequired,
};

export default compose(
  connect(state => ({
    colors: state.colorReducer.colors,
    modifyColor: state.colorReducer.modifyColor,
    modifyColorIsAdded: state.colorReducer.modifyColorIsAdded,
    user: state.userReducer.user,
  }), { ...colorActions, ...userActions }),
  graphql(addColorToFavourite, {
    name: 'addColorToFavouriteReq',
  }),
  graphql(deleteFavourite, {
    name : 'deleteFavouriteReq',
  }),
  graphql(deleteFavouriteFromUser, {
    name : 'deleteFavouriteFromUserReq',
  }),
)(ModifyPage);
