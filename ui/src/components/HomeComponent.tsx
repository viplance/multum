import React from 'react';
/* Assets */
import logo from '../assets/logo.svg';
import './HomeComponent.css';

function HomeComponent() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Multum - multi messenger
        </p>
      </header>
    </div>
  )
}

export default HomeComponent;
