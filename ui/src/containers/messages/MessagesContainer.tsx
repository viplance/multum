import React, { useEffect } from 'react';
import { ContactListComponent, MessageListComponent } from '../../components';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
/* Assets */
import './MessagesContainer.css';

const MessagesContainer = (props: any) => {
  useEffect(() => {
    /* Application onLoad event */
  });

  const { contactId } = useParams();
  const { contacts, messages } = props;

  return (
    <div className="Messages">
      <nav>
        <ContactListComponent contacts={contacts} contactId={contactId}></ContactListComponent>
      </nav>
      <section>
        <MessageListComponent messages={messages} contactId={contactId}></MessageListComponent>
      </section>
      <aside>Account info</aside>
    </div>
  );
};

function mapStateToProps(state: any) {
  return { contacts: state.contacts, messages: state.messages };
}

export default connect(mapStateToProps)(MessagesContainer);
