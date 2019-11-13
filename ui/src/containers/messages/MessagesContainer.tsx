import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ContactListComponent } from '../../components';
import { useParams } from 'react-router';
/* Assets */
import './MessagesContainer.css';

const MessagesContainer = (props: any) => {
  const { contactId } = useParams();
  useEffect(() => {
    /* Application onLoad event */
  });

  const { contacts } = props;

  return (
    <div className="Messages">
      <nav>
        <ContactListComponent contacts={contacts}></ContactListComponent>
      </nav>
      <section>Messages {contactId}</section>
      <aside>Account info</aside>
    </div>
  );
}

function mapStateToProps(state: any) {
  return { contacts: state.contacts };
}

export default connect(mapStateToProps)(MessagesContainer);
