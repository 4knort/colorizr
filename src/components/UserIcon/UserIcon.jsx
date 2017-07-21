import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as userActions from '../../actions/userActions';
import logout from '../../mutations/logout';

import './user-profile.css';

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
    const panelClass = this.state.panelOpened ? 'user-panel opened' : 'user-panel';
    return (
      <div className="user-prof">
        <span onClick={this.onUserClick} className="hz">User</span>
        <div className={panelClass}>
          <Link className="link" to="/user-profile">Profile</Link>
          <a className="link"  href="#" onClick={this.onLogoutClick}>Logout</a>  
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(logout),
  connect(null, userActions)
)(UserIcon);
