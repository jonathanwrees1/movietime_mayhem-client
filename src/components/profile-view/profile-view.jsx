import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

import './profile-view.scss';
import axios from 'axios';

export class ProfileView extends React.Component {
  constructor() {
    super();

    this.state = {
      UserName: null,
      Password: null,
      Email: null,
      Birthday: null,
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user'),
      });
      this.getUserInfo(accessToken);
    }
  }

  getUserInfo = (token) => {
    const UserName = localStorage.getItem('user');
    axios
      .get(`https://movie-time-mayhem.herokuapp.com/users/${UserName}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          UserName: response.data.UserName,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { movies, user, onBackClick } = this.props;

    return (
      <Container id='profile-view-pv' className='d-flex align-items-center'>
        <Card id='profile-view'>
          <Card.Body id='card-body-pv'>
            <Card.Title id='username-pv'>User: </Card.Title>
            <Card.Text className='value'>{user.UserName}</Card.Text>

            <Card.Title id='bio-dv'>Password: </Card.Title>
            <Card.Text className='value'>{user.Password}</Card.Text>

            <Card.Title id='birth-year-dv'>E-mail: </Card.Title>
            <Card.Text className='value'>{user.Email}</Card.Text>

            <Card.Title id='death-year-dv'>Birthday: </Card.Title>
            <Card.Text className='value'>{user.Birthday}</Card.Text>

            <Button
              onClick={() => {
                onBackClick(null);
              }}
            >
              Back
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

/*ProfileView.propTypes = {
  user: PropTypes.shape({
    UserName: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
  }).isRequired,

  onBackClick: PropTypes.func.isRequired,
};*/
