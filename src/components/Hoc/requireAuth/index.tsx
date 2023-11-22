import { Component, ReactNode } from "react";
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function RequireAuth(WrappedComponent: any) {
  // const userLoggedIn = useSelector((state: any) => state.user.loggedIn);
  class Auth extends Component {
    render(): ReactNode {
        return <WrappedComponent/>
    }
  }
  return Auth;
}
