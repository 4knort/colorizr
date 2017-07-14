import React, { Component } from 'react';

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
        <div className="row">
          {this.props.errors}
          <form onSubmit={this.onSubmit} action="" className="col s4">
            <div className="input-field">
              <input
                placeholder="name"
                type="text"
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
            <button className="btn">submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthForm;
