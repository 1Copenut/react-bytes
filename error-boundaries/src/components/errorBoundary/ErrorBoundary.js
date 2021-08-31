import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedSateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // TODO: Add Sentry logging
    console.log(`[ERROR]: ${error}`);
    console.log(`[ERROR INFO]: ${errorInfo}`);
  }

  render() {
    const { children } = this.props;

    if (this.state.hasError) {
      return (
        <>
          <h1>Oh noes!</h1>
          <p>Something went dreadfully wrong. Let's go back to the start!</p>
        </>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
