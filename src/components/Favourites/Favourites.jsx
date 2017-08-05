import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import FavouritesTable from './FavouritesTable';
import deleteFavourite from '../../mutations/deleteFavourite';
import deleteFavouriteFromUser from '../../mutations/DeleteFavouriteFromUser';
import currentUser from '../../queries/CurrentUser';
import * as userActions from '../../actions/userActions';
import * as colorActions from '../../actions/colorActions';

class Favourites extends Component {
  state = {
    user: this.props.user,
  }

  deleteFavouriteColor = (favourite) => {
    this.props.deleteFavouriteReq({
      variables: { favouriteId: favourite.id },
    });
    this.props.deleteFavouriteFromUserReq({
      variables: { userId: this.props.user.id, favouriteId: favourite.id },
      refetchQueries: [{ query: currentUser }],
    })
    .then(res => {
      this.props.deleteFavourites(res.data.deleteFavouriteFromUser.favourites);
    });
      this.props.deleteFavourite(favourite.color);

  }

  render() {
    if (this.props.user) {
      return (
        <div className="export-page">
          <div className="container">
            <FavouritesTable deleteFavourite={this.deleteFavouriteColor} favourites={this.props.user.favourites} />
          </div>
        </div>
      ); 
    } else {
      return null
    }
  }
};

export default compose(
  graphql(deleteFavourite, {
    name : 'deleteFavouriteReq',
  }),
  graphql(deleteFavouriteFromUser, {
    name : 'deleteFavouriteFromUserReq',
  }),
  connect(state => ({
    user: state.userReducer.user,
  }), {...colorActions, ...userActions})
)(Favourites);