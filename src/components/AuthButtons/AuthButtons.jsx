import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'react-apollo';
import { UserIcon } from 'components';
import './authbuttons.scss';

const AuthButtons = ({ user }) => {

  const buttons = user
  ? (
    <div>
      <UserIcon />     
    </div>
    ) 
  : (
      <div >
        <Link activeClassName="auth-btn--active" className="auth-btn" to="/signup">Signup</Link>
        <Link activeClassName="auth-btn--active" className="auth-btn" to="/login">Login</Link>
      </div>
    );
  return (
    <div className="auth-buttons">
      { buttons }
    </div>
  );
};

export default compose(
  connect(state => ({
  user: state.userReducer.user,
  }))
)(AuthButtons);
