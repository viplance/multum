import React, { FC, ReactElement } from 'react';
/* Assets */
import logo from '../../assets/logo.svg';
import './HomeContainer.css';

const HomeContainer: FC = (): ReactElement => {
  return (
    <div className="Home">
      <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Multum - multi messenger
      </p>
      </div>
    </div>
  )
}

export default HomeContainer;
