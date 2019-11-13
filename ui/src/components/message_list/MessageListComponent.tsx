import React from 'react';
import { Message } from '../../interfaces';
import MessageList from './MessageListStyled';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import { SendFormComponent } from '../../components';

const MessagesListComponent = (props: any) => {
  const messages = () =>
    props.messages
      .filter((message: Message) => props.contactId === message.from || props.contactId === message.to)
      .map((message: Message) => {
        return (
          <div key={message.id} className={props.contactId === message.from ? 'message from' : 'message to'}>
            <div className="info">
              <span className="name">{message.from}</span>
              <span className="date">{message.date}</span>
            </div>
            {message.text}
          </div>
        );
      });

  return (
    <ThemeProvider theme={theme}>
      <MessageList>
        {messages()}
        <SendFormComponent contactId={props.contactId}></SendFormComponent>
      </MessageList>
    </ThemeProvider>
  );
};

export default MessagesListComponent;
