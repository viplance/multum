import React from 'react';
import { ContactListComponent } from '../../components';
/* Assets */
import './MessagesContainer.css';

function MessagesContainer() {
  return (
    <div className="Messages">
      <nav>
        <ContactListComponent></ContactListComponent>
      </nav>
      <section>Messages</section>
      <aside>Account info</aside>
    </div>
  )
}

export default MessagesContainer;
