import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Card,
  CardGroup,
} from 'react-bootstrap';

import './login-view.scss';
import axios from 'axios';

export function LoginView(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios
      .post('https://movie-time-mayhem.herokuapp.com/Login', {
        UserName: username,
        Password: password,
      })
      .then((response) => {
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((e) => {
        console.log('no such user');
      });
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
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        placeholder='Enter your Username'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPassword'>
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type='text'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Enter your Password'
                      />
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
  onLoggedIn: PropTypes.func.isRequired,
};
