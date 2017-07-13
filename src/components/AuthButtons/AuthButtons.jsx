import React from 'react';
import { Link } from 'react-router';

import './authbuttons.css';

const AuthButtons = () => {
  return (
    <div className="auth-buttons">
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default AuthButtons;
