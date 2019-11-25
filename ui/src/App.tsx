import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* Components */
import { FooterComponent, HeaderComponent, NoPageFoundComponent, PrivateRoute } from './components';
/* Containers */
import { HomeContainer, MessagesContainer, SigninContainer } from './containers';
/* Utils */
import { Routes } from './utils';

function App() {
  useEffect(() => {
    /* Application onLoad event */
  });

  return (
    <Router>
      <HeaderComponent></HeaderComponent>
      <Switch>
        <PrivateRoute exact path={Routes.Home} component={HomeContainer} />
        <PrivateRoute exact path={Routes.Messages} component={MessagesContainer} />
        <PrivateRoute path={Routes.Messages + '/:contactId'} component={MessagesContainer} />
        <Route exact path={Routes.Signin} component={SigninContainer} />
        <Route component={NoPageFoundComponent} />
      </Switch>
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
