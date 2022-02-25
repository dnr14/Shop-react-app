import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(err, errInfo) {
    console.error("Uncaught error:", err, errInfo);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <div>에러가 발생했어요</div>;
    }

    const { children } = this.props;

    return children;
  }
}

export default ErrorBoundary;
