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

export function LoginView(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
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
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        placeholder='Enter your Username'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPassword'>
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type='text'
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
