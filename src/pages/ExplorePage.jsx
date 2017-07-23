import React, { PropTypes } from 'react';
import { Panel, ColorItem, Colors } from 'components';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import * as colorActions from '../actions/colorActions';
import addColorToFavourite from '../mutations/addColorToFavourite';
import currentUser from '../queries/CurrentUser';
import * as userActions from '../actions/userActions';

import './css/pages.scss';

const ExplorePage = (props) => {
  const emptyColor = '#f5f5f5';
  
  const onClickDeleteColor = (color) => {
    if (color !== emptyColor) {
      props.deleteColor(color);
    }
  };
   const onClickFavourite = (color, isFavourite) => {
    const userId = props.user.id;

    if (isFavourite) {
      props.deleteFavourite(color);      
    } else {
      props.addFavourite(color);
      props.mutate({
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
    <div className="explore-page">
      <div className="container">
        <Panel isChosenPanel colorsBlockClass={'panel__colors panel__colors--choose'} title={'Select up to 10 colors'}>
          {chosenColors}
        </Panel>
        <div className="colors-wrap">
          <Colors colors={props.colors.flatColors} title={'Flat'} />
          <Colors colors={props.colors.materialColors} title={'Material'} />
        </div>
      </div>
    </div>
  );
};

ExplorePage.propTypes = {
  colors: PropTypes.objectOf(React.PropTypes.array).isRequired,
};

export default compose(
  connect(state => ({
    colors: state.colorReducer.colors,
    user: state.userReducer.user,
  }), { ...colorActions, ...userActions }),
  graphql(addColorToFavourite),
)(ExplorePage);
