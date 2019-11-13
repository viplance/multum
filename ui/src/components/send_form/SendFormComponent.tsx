import React from 'react';
import SendForm from './SendFormStyled';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
/* Assets */
import send from '../../assets/send.svg';


const SendFormComponent = (props: any) => {
  const sendMessage = () => {
    const text = (document.getElementById('messageText') as HTMLTextAreaElement).value;
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
