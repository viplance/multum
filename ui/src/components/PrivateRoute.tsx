import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { getLocal, Routes } from '../utils';

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  const currentUser = (getLocal() as any).currentUser;

  return (
    <Route
      {...rest}
      render={props => {
        if (!currentUser) {
          // not logged in so redirect to login page with the return url
          return <Redirect to={{ pathname: Routes.Signin, state: { from: props.location } }} />;
        }

        // authorised so return component
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
