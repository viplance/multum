import { ActionTypes } from '../../actions';
import React, { useEffect } from 'react';
import { AccountInfoComponent, ContactListComponent, MessageListComponent } from '../../components';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { Message } from '../../interfaces';
import { transformDate } from '../../utils';
/* Assets */
import './MessagesContainer.css';

const MessagesContainer = (props: any) => {
  useEffect(() => {
    /* Application onLoad event */
  });

  const { contactId } = useParams();
  const { contacts, messages, sendMessage } = props;

  return (
    <div className="Messages">
      <nav>
        <ContactListComponent contactId={contactId} contacts={contacts}></ContactListComponent>
      </nav>
      <section>
        <MessageListComponent contactId={contactId} messages={messages} sendMessage={sendMessage}></MessageListComponent>
      </section>
      <aside>
        <AccountInfoComponent></AccountInfoComponent>
      </aside>
    </div>
  );
};

function mapDispatchToProps(dispatch: Function): object {
  return {
    // dispatching plain actions
    sendMessage: (data: any) => {
      const payload: Message = {
        text: data.text,
        from: 'me',
        to: data.contactId,
        date: transformDate()
      };
      dispatch({ type: ActionTypes.AddMessage, payload })
    },
  };
}

function mapStateToProps(state: any): object {
  return { contacts: state.contacts, messages: state.messages };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
