import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import axios from 'axios'; //importing axios which links to external api

export function RegistrationView(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  //Declare hook for each input (throw errors)
  const [usernameErr, setUserNameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');

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

    if (!email) {
      setEmailErr('Email Required');
      isReq = false;
    } else if (email.indexOf('@') === -1) {
      setEmailErr('Must be a valid e-mail');
      isReq = false;
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send a request to the server for authentication */
      axios
        .post('https://movie-time-mayhem.herokuapp.com/users', {
          //client info is sent to server
          UserName: username,
          Password: password,
          Email: email,
          Birthday: birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          window.open('/', '_self');
        })
        .catch((response) => {
          console.error(response);
          alert('Error registering user');
        });
    }
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

                    <Form.Group className='mb-3'>
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Enter your e-mail'
                      />
                      {/* code added here to display validation error */}
                      {emailErr && <p>{emailErr}</p>}
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

                    <Button variant='secondary'>Deregister</Button>

                    <Button variant='link'>Already Registered?</Button>
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
  register: PropTypes.shape({
    UserName: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
  }),
};
