import React from 'react';
import SendForm from './SendFormStyled';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
/* Assets */
import send from '../../assets/send.svg';

const SendFormComponent = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <SendForm>
        <textarea placeholder="Write your message here"></textarea>
        <img src={send} alt="send" title="Send message" />
      </SendForm>
    </ThemeProvider>
  )
}

export default SendFormComponent;
