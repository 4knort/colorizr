import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { hashHistory } from 'react-router';
import AuthForm from './AuthForm';
import signup from '../../mutations/Signup';
import currentUser from '../../queries/CurrentUser';

class SignupForm extends Component {
  state = {
    errors: null,
  }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit = ({ email, password }) => {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: currentUser }],
    }).catch(res => {
      const errors = res.graphQLErrors.map(err => err.message);

      this.setState({ errors });
    });
  }

  render() {
    return (
      <div>
        <h3>Signup</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default compose(
  graphql(currentUser),
  graphql(signup)
)(SignupForm);
