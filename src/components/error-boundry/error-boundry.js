import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
  state = {
    error: null,
    errorInfo: '',
  };

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) return <ErrorIndicator />;
    return this.props.children;
  }
}
