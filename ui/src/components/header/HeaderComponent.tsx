import React, { FC, ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from './HeaderStyled';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
/* Utils */
import { isLogged, logout, Routes } from '../../utils';

const HeaderComponent: FC<RouteComponentProps> = ({ history }): ReactElement => {
  const signOut = () => {
    logout();
    history.push(Routes.Signin);
  };

  if (isLogged()) {
    return (
      <ThemeProvider theme={theme}>
        <Header>
          <ul>
            <li>
              <Link to={Routes.Home}>Home</Link>
            </li>
            <li>
              <Link to={Routes.Messages}>Messages</Link>
            </li>
            <li onClick={signOut}>Logout</li>
          </ul>
        </Header>
      </ThemeProvider>
    );
  } else {
    return <></>;
  }
};

export default withRouter(HeaderComponent);
