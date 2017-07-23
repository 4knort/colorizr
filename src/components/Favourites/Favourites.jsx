import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavouritesTable from './FavouritesTable';

class Favourites extends Component {
  state = {
    user: this.props.user,
  }

  render() {
    if (this.props.user) {
      const colors = this.state.user.favourites.map(item => (item.content));
      return (
        <div className="export-page">
          <div className="container">
            <FavouritesTable colors={colors} />
          </div>
        </div>
      ); 
    } else {
      return null
    }
  }
};

export default connect(state => ({
  user: state.userReducer.user,
}))(Favourites);
