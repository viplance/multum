import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* Components */
import {
  FooterComponent,
  HeaderComponent,
  NoPageFoundComponent
} from './components';
/* Containers */
import {
  HomeContainer,
  MessagesContainer
} from './containers';

function App() {
  useEffect(() => {
    /* Application onLoad event */
  });

  return (
    <Router>
      <HeaderComponent></HeaderComponent>
      <Switch>
        <Route exact path='/' component={HomeContainer}></Route>
        <Route exact path='/messages' component={MessagesContainer}></Route>
        <Route path='/messages/:contactId' component={MessagesContainer}></Route>
        <Route component={NoPageFoundComponent} />
      </Switch>
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
