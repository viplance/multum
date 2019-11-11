import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
/* Components */
import {
  FooterComponent,
  HeaderComponent
} from './components';
/* Containers */
import {
  HomeContainer,
  MessagesContainer
} from './containers';

function App() {
  return (
    <Router>
      <HeaderComponent></HeaderComponent>
      <Route exact path='/' component={HomeContainer}></Route>
      <Route exact path='/messages' component={MessagesContainer}></Route>
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
