import React, { FC, ReactElement } from 'react';
import './NoPageFoundComponent.css';

const NoPageFoundComponent: FC = (): ReactElement => {
  return (
    <div className="NotFound">
      <h1>No page found.</h1>
    </div>
  );
};

export default NoPageFoundComponent;
