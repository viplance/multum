import React, { ReactElement, ReactNode } from 'react';
import SendForm from './SendFormStyled';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
/* Assets */
import send from '../../assets/send.svg';

interface StatelessComponent<P = {}> {
  (props: { contactId?: string; addMessage: Function } & { children?: ReactNode }, context?: any): ReactElement<any> | null;
}
type SFC<P = {}> = StatelessComponent<P>;

const SendFormComponent: SFC = ({ contactId, addMessage }) => {
  const sendMessage = () => {
    const textarea = document.getElementById('messageText') as HTMLTextAreaElement;
    const text: string = textarea.value;
    addMessage({ text, contactId });
    textarea.value = '';
  };

  return (
    <ThemeProvider theme={theme}>
      <SendForm>
        <textarea placeholder="Write your message here" id="messageText"></textarea>
        <img src={send} alt="send" title="Send message" onClick={sendMessage} />
      </SendForm>
    </ThemeProvider>
  );
};

export default SendFormComponent;
