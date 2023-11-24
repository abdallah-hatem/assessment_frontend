import { Component, ReactNode } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuth(WrappedComponent: any) {
  class Auth extends Component<any, any> {
    render(): ReactNode {
      return this.props.isAuthenticated ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Navigate to="/" />
      );
    }
  }

  function mapStateToProps(state: any) {
    return {
      isAuthenticated: state.user.loggedIn,
    };
  }
  return connect(mapStateToProps)(Auth);
}
