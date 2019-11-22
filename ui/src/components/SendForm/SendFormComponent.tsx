import React, { ChangeEvent, FormEvent, ReactElement, ReactNode, useState } from 'react';
import SendForm from './SendFormStyled';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
/* Assets */
import send from '../../assets/send.svg';

interface StatefullComponent<P = {}> {
  (props: { contactId?: string; addMessage: Function } & { children?: ReactNode }, context?: any): ReactElement<any> | null;
}
type SFC<P = {}> = StatefullComponent<P>;

const SendFormComponent: SFC = ({ contactId, addMessage }) => {
  const [text, setTextareaValue] = useState(''); // default textarea value is ''

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMessage({ text, contactId });
    setTextareaValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setTextareaValue(value);
  };

  if (contactId) {
    return (
      <ThemeProvider theme={theme}>
        <SendForm>
          <form onSubmit={handleSubmit}>
            <textarea placeholder="Write your message here" value={text} onChange={handleChange} />
            <input type="image" src={send} alt="send" title="Send message" />
          </form>
        </SendForm>
      </ThemeProvider>
    );
  } else {
    return <></>;
  }
};

export default SendFormComponent;
