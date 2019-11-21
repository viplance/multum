import React, { ReactElement, ReactNode } from 'react';
import { Message } from '../../interfaces';
import MessageList from './MessageListStyled';
import theme from '../../theme';
import { ThemeProvider } from 'styled-components';
import { SendFormComponent } from '../../components';

interface StatelessComponent<P = {}> {
  (
    props: { contactId?: string; messages: Message[]; addMessage: Function } & { children?: ReactNode },
    context?: any
  ): ReactElement<any> | null;
}
type SLC<P = {}> = StatelessComponent<P>;

const MessagesListComponent: SLC = ({ contactId, messages, addMessage }) => {
  const messagesList = () =>
    messages
      .filter((message: Message) => contactId === message.from || contactId === message.to)
      .map((message: Message) => {
        return (
          <div key={message.id || message.temporaryId} className={contactId === message.from ? 'message from' : 'message to'}>
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
        {messagesList()}
        <SendFormComponent contactId={contactId} addMessage={addMessage}></SendFormComponent>
      </MessageList>
    </ThemeProvider>
  );
};

export default MessagesListComponent;
