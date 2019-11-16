import { ActionTypes } from '../../actions';
import React, { ReactElement, ReactNode, useEffect } from 'react';
import { AccountInfoComponent, ContactListComponent, MessageListComponent } from '../../components';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { Contact, Message } from '../../interfaces';
import { transformDate } from '../../utils';
/* Assets */
import './MessagesContainer.css';

interface StatefullComponent<P = {}> {
  (
    props: { contactId?: string; contacts: Contact[]; messages: Message[]; addMessage: Function } & { children?: ReactNode },
    context?: any
  ): ReactElement<any> | null;
}
type SFC<P = {}> = StatefullComponent<P>;

const MessagesContainer: SFC = ({ contacts, messages, addMessage }) => {
  useEffect(() => {
    /* On mount component */
  });

  const { contactId } = useParams();

  return (
    <div className="Messages">
      <nav>
        <ContactListComponent contactId={contactId} contacts={contacts}></ContactListComponent>
      </nav>
      <section>
        <MessageListComponent contactId={contactId} messages={messages} addMessage={addMessage}></MessageListComponent>
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
    addMessage: (data: any) => {
      const payload: Message = {
        text: data.text,
        from: 'me',
        to: data.contactId,
        date: transformDate()
      };
      dispatch({ type: ActionTypes.AddMessage, payload });
    }
  };
}

function mapStateToProps(state: any): object {
  return { contacts: state.contacts, messages: state.messages };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesContainer);
