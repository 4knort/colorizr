import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import AuthForm from './AuthForm';
import signup from '../../mutations/Signup';

class SignupForm extends Component {
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
      this.props.addUser(res.data.signup);
    })
    .catch(res => {
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
  graphql(signup),
  connect(state => ({
  user: state.userReducer.user,
  }), userActions)
)(SignupForm);
