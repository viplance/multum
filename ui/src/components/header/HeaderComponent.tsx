import React from 'react';
import Header from './HeaderStyled';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

function HeaderComponent() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/messages">Messages</Link>
          </li>
        </ul>
      </Header>
    </ThemeProvider>
  );
}

export default HeaderComponent;
