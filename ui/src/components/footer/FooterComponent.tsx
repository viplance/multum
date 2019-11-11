import React from 'react';
import Footer from './FooterStyled';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

function FooterComponent() {
  return (
    <ThemeProvider theme={theme}>
      <Footer>
        @ Multum - multi messenger
      </Footer>
    </ThemeProvider>
  )
}

export default FooterComponent;
