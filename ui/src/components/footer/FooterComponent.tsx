import React, { SFC, ReactElement } from 'react';
import Footer from './FooterStyled';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

const FooterComponent: SFC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Footer>
        @ Multum - multi messenger
      </Footer>
    </ThemeProvider>
  )
}

export default FooterComponent;
