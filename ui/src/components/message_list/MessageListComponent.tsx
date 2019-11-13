import React from 'react';
import { Message } from '../../interfaces';
import MessageList from './MessageListStyled';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';

const MessagesListComponent = (props: any) => {
  const messages = () => props.messages.filter((message: Message) => props.contactId === message.from).map((message: Message) => {
    return (<div key={message.id}>
      <span>{message.from}</span>
      {message.text}
    </div>)
  });

  return (
    <ThemeProvider theme={theme}>
      <MessageList>
        {messages()}
      </MessageList>
    </ThemeProvider>
  );
}

export default MessagesListComponent;
