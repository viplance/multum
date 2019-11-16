import React, { ReactElement, ReactNode } from 'react';
import { Contact } from '../../interfaces';
import ContactList from './ContactListStyled';
import { Link } from 'react-router-dom';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';

interface StatelessComponent<P = {}> {
  (props: { contactId?: string; contacts: Contact[] } & { children?: ReactNode }, context?: any): ReactElement<any> | null;
}
type SFC<P = {}> = StatelessComponent<P>;

const ContactListComponent: SFC = ({ contactId, contacts }) => {
  const contactList = () =>
    contacts.map((contact: Contact) => {
      return (
        <Link key={contact.id} to={`/messages/${contact.id}`}>
          <li className={contactId === contact.id ? 'active' : ''}>{contact.name}</li>
        </Link>
      );
    });

  return (
    <ThemeProvider theme={theme}>
      <ContactList>{contactList()}</ContactList>
    </ThemeProvider>
  );
};

export default ContactListComponent;
