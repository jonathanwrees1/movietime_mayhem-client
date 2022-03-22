import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Card,
  CardGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import './registration-view.scss';

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
    <div
      className='registration-view d-flex align-items-center'
      style={{ minHeight: '100vh' }}
    >
      <Container>
        <h1 id='welcome-heading'>Welcome To Movie Time Mayhem</h1>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Please Register</Card.Title>
                  <Form>
                    <Form.Group className='mb-3'>
                      <Form.Label>Username:</Form.Label>
                      <Form.Control
                        type='text'
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        placeholder='Enter a Username'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>Password:</Form.Label>
                      <Form.Control
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength='8'
                        placeholder='Your passsword must be at least 8 characters'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type='password'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Enter your e-mail'
                      />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>Birthday:</Form.Label>
                      <Form.Control
                        type='text'
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        placeholder='MM/DD/YYYY'
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

                    <Button
                      variant='secondary'
                      type='submit'
                      onClick={handleSubmit}
                    >
                      Deregister
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

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};
