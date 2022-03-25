import React, { useState } from 'react'; //importing react and the useState method
import PropTypes from 'prop-types'; //validating correct types of data are put in

import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Card,
  CardGroup,
} from 'react-bootstrap'; //bootstrap styling imports

import './login-view.scss'; //custom scss styiling imported
import axios from 'axios'; //importing axios which links to external api

export function LoginView(props) {
  //Required info
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  //Declare hook for each input (throw errors)
  const [usernameErr, setUserNameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  //validate user inputs
  const validate = () => {
    let isReq = true;
    if (!username) {
      setUserNameErr('Username Required');
      isReq = false;
    } else if (username.length < 2) {
      setUserNameErr('Username must be 2 characters long or more');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password Required');
      isReq = false;
    } else if (password.length < 6) {
      setPasswordErr('Password must be 6 characters long');
      isReq = false;
    }
    return isReq;
  };

  //what happens when the submit button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send a request to the server for authentication */
      axios
        .post('https://movie-time-mayhem.herokuapp.com/Login', {
          //client info is sent to server
          UserName: username,
          Password: password,
        })
        .then((response) => {
          //server responds with an acceptance an JWT issued
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch((e) => {
          //error if info not found in user database
          console.log(e, 'no such user');
        });
    }
  };

  return (
    <div
      className='login-view d-flex align-items-center'
      style={{ minHeight: '100vh' }}
    >
      <Container>
        <h1 id='welcome-back'>Welcome Back</h1>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Login info</Card.Title>
                  <Form>
                    <Form.Group className='mb-3' controlId='formUserName'>
                      <Form.Label>Username:</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Enter username'
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      {/* code added here to display validation error */}
                      {usernameErr && <p>{usernameErr}</p>}
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPassword'>
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {/* code added here to display validation error */}
                      {passwordErr && <p>{passwordErr}</p>}
                    </Form.Group>

                    <Button
                      className='mr-2'
                      variant='primary'
                      type='submit'
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
LoginView.propTypes = {
  login: PropTypes.shape({
    UserName: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }),
};
