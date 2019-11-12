import React from 'react';
import ContactList from './ContactListStyled';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

function MessagesListComponent() {
  return (
    <ThemeProvider theme={theme}>
      <ContactList>
        <Link to="/messages/1">
          <li>User1</li>
        </Link>
        <Link to="/messages/2">
          <li className="active">User2</li>
        </Link>
        <Link to="/messages/3">
          <li>User3</li>
        </Link>
      </ContactList>
    </ThemeProvider>
  );
}

export default MessagesListComponent;
