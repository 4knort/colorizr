import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import * as userActions from '../../actions/userActions';
import logout from '../../mutations/logout';
import './authbuttons.css';

const AuthButtons = ({ mutate, user, logoutUser }) => {
  const onLogoutClick = (e) => {
    e.preventDefault();
    
    mutate().then(res => {
      logoutUser();
    });
  };

  const buttons = user
  ? (
      <a href="#" onClick={onLogoutClick}>Logout</a>
    ) 
  : (
      <div >
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  return (
    <div className="auth-buttons">
      { buttons }
    </div>
  );
};

export default compose(
  graphql(logout),
  connect(state => ({
  user: state.userReducer.user,
  }), userActions)
)(AuthButtons);
