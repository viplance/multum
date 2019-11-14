import React from 'react';
import SendForm from './SendFormStyled';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
/* Assets */
import send from '../../assets/send.svg';


const SendFormComponent = (props: any) => {
  const sendMessage = () => {
    const textarea = document.getElementById('messageText') as HTMLTextAreaElement;
    const text: string = textarea.value;
    const { contactId } = props;
    props.sendMessage({ text, contactId });
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
