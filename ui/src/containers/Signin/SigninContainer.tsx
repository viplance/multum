import React, { FC, ReactElement } from 'react';
/* Assets */
import './SigninContainer.css';

const SigninContainer: FC = (): ReactElement => {
  return (
    <div className="Signin">
      <form action="index.html" method="post">
        <h1>Sign in</h1>
        <div className="form-content">
          <input id="user-name" name="user-name" placeholder="user name" type="text" />
          <input id="password" name="password" placeholder="password" type="password" />
          <br />
          <div className="button">Log in</div>
          <br />
          <div className="signup-message">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SigninContainer;
