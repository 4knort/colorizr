import React, { Component } from 'react';

import './form.scss';

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    this.props.onSubmit({ email, password });
  }

  render() {
    return (
      <div className="container">
        <div>
          <div className="errors">{this.props.errors}</div>
          <form onSubmit={this.onSubmit} action="">
            <div className="input-field">
              <input
                placeholder="email"
                type="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="input-field">
              <input
                placeholder="password"
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
            <button className="submit-btn">submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;
