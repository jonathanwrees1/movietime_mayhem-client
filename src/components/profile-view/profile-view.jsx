import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import './profile-view.scss';

export class ProfileView extends React.Component {
  render() {
    const { user, onBackClick, movies } = this.props;

    return (
      <Container id='profile-view-pv' className='d-flex align-items-center'>
        <Card id='profile-view'>
          <Card.Body id='card-body-pv'>
            <Card.Title id='username-pv'>Username: </Card.Title>
            <Card.Text className='value'>{user}</Card.Text>

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
