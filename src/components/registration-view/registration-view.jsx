import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function RegistrationView(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    /* Send a request to the server for authentication */
    /* then call props.onRegistration(username) */
    props.onRegistration(username);
  };

  return (
    <form>
      <div>Please Register</div>
      <br />
      <label>
        UserName:
        <input
          type='text'
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <label>
        Email:
        <input
          type='password'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Birthday:
        <input
          type='text'
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </label>

      <button type='submit' onClick={handleSubmit}>
        Submit
      </button>

      <button type='submit' onClick={handleSubmit}>
        Deregister
      </button>
    </form>
  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};
