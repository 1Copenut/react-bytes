import React, { Component } from 'react';
import './errorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(`[ERROR]: ${error}`);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="cd-message--four-oh-four">
          <h1>Oh no!</h1>
          <p>Something went dreadfully wrong!</p>
          <p>Please check your dev tools console for important information.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
