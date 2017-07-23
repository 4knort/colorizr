import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

export default (WrappedComponent) => {
  class requireAuth extends Component {
    componentWillMount() {
      if (!this.props.user) {
        hashHistory.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.user) {
        hashHistory.push('/');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(state => ({
    user: state.userReducer.user,
  }))(requireAuth);
};

