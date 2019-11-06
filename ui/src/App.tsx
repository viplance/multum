import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
/* Components */
import { HeaderComponent } from './components';
import { HomeComponent } from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <Route exact path='/' component={HomeComponent}></Route>
      </div>
    </Router>
  );
}

export default App;
