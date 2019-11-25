import React, { ChangeEvent, FC, FormEvent, ReactElement, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
/* Assets */
import './SigninContainer.css';
/* Utils */
import { Routes, singin } from '../../utils';

const SigninContainer: FC<RouteComponentProps> = ({ history }): ReactElement => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target: any = event.nativeEvent.target;
    const elements: HTMLFormControlsCollection = target.elements;
    // console.log(elements.length);
    singin({ username, password });
    setUsername('');
    setPassword('');
    history.push(Routes.Default);
  };

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUsername(value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  return (
    <div className="Signin">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <div className="form-content">
          <input value={username} required placeholder="user name" onChange={handleUsernameChange} type="text" />
          <input value={password} required placeholder="password" onChange={handlePasswordChange} type="password" />
          <br />
          <input type="submit" className="button" value="Log in" />
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
