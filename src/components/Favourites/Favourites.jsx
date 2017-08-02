import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import FavouritesTable from './FavouritesTable';
import deleteFavourite from '../../mutations/deleteFavourite';
import deleteFavouriteFromUser from '../../mutations/DeleteFavouriteFromUser';
import currentUser from '../../queries/CurrentUser';
import * as userActions from '../../actions/userActions';

class Favourites extends Component {
  state = {
    user: this.props.user,
  }

  deleteFavouriteColor = (favouriteId) => {
    this.props.deleteFavouriteReq({
      variables: { favouriteId },
    });
    this.props.deleteFavouriteFromUserReq({
      variables: { userId: this.props.user.id, favouriteId },
      refetchQueries: [{ query: currentUser }],
    })
    .then(res => {
      this.props.deleteFavourites(res.data.deleteFavouriteFromUser.favourites);
    });

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
  }), userActions)
)(Favourites);