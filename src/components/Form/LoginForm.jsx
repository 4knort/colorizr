import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import AuthForm from './AuthForm';
import login from '../../mutations/Login';
import * as userActions from '../../actions/userActions';

class LoginForm extends Component {
  state = {
    errors: null,
  }

  componentWillUpdate(nextProps) {
    if (!this.props.user && nextProps.user) {
      hashHistory.push('/');
    }
  }

  onSubmit = ({ email, password }) => {
    this.props.mutate({
      variables: { email, password },
    })
    .then(res => {
      this.props.addUser(res.data.login);
    })
    .catch(res => {
      const errors = res.graphQLErrors.map(err => err.message);

      this.setState({ errors });
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default compose(
  graphql(login),
  connect(state => ({
  user: state.userReducer.user,
  }), userActions)
)(LoginForm);
