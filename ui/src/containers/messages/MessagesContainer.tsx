import React from 'react';
import { ContactListComponent } from '../../components';
import { useParams } from 'react-router';
/* Assets */
import './MessagesContainer.css';

function MessagesContainer() {
  const { contactId } = useParams();
  return (
    <div className="Messages">
      <nav>
        <ContactListComponent></ContactListComponent>
      </nav>
      <section>Messages {contactId}</section>
      <aside>Account info</aside>
    </div>
  );
}

export default MessagesContainer;
