import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as userActions from '../../actions/userActions';
import logout from '../../mutations/logout';

import './user-profile.scss';

class UserIcon extends Component {
  state = {
    panelOpened: false
  }
  onLogoutClick = (e) => {
    e.preventDefault();

    this.props.mutate().then(res => {
      this.props.logoutUser();
    });
  };

  onUserClick = () => {
    this.setState({panelOpened: !this.state.panelOpened})
  }

  render() {
    const userNameLength = this.props.user.email.indexOf('@');
    const userName = this.props.user.email.slice(0, userNameLength);

    const panelClass = this.state.panelOpened ? 'user-profile__panel opened' : 'user-profile__panel';
    const iconClass = this.state.panelOpened ? 'user-profile__icon user-profile__icon--active' : 'user-profile__icon';
    return (
      <div className="user-profile">
        <span onClick={this.onUserClick} className={iconClass}>{userName}</span>
        <div className={panelClass}>
          <Link className="user-profile__link" to="/favourites">Favourites</Link> 
          <a className="user-profile__link"  href="#" onClick={this.onLogoutClick}>Logout</a>   
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(logout),
  connect(state => ({
    user: state.userReducer.user,
  }), userActions)
)(UserIcon);
