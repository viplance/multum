import React from 'react';
import AccountInfo from './AccountInfoStyled';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
/* Assets */
import user from '../../assets/user.svg';

function AccountInfoComponent() {
  return (
    <ThemeProvider theme={theme}>
      <AccountInfo>
        <section>
          <h2>Account info</h2>
          <img src={user} alt="user" />
          Some account info.
        </section>
      </AccountInfo>
    </ThemeProvider>
  );
}

export default AccountInfoComponent;
