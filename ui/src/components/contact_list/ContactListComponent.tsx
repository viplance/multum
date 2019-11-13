import React from 'react';
import { Contact } from '../../interfaces';
import ContactList from './ContactListStyled';
import { Link } from 'react-router-dom';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';

const ContactListComponent = (props: any) => {
  const contacts = () => props.contacts.map((contact: Contact) => {
    return (<Link key={contact.id} to={`/messages/${contact.id}`}>
      <li className={props.contactId === contact.id ? 'active': ''}>{contact.name}</li>
    </Link>)
  });

  return (
    <ThemeProvider theme={theme}>
      <ContactList>
        {contacts()}
      </ContactList>
    </ThemeProvider>
  );
}

export default ContactListComponent;
