import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import './director-view.scss';

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick, movies } = this.props;

    return (
      <Container id='director-view-dv' className='d-flex align-items-center'>
        <Card id='director-view'>
          <Card.Body id='card-body-dv'>
            <Card.Title id='director-dv'>Director: </Card.Title>
            <Card.Text className='value'>{director.Name}</Card.Text>

            <Card.Title id='bio-dv'>Bio: </Card.Title>
            <Card.Text className='value'>{director.Bio}</Card.Text>

            <Card.Title id='birth-year-dv'>Birth Year: </Card.Title>
            <Card.Text className='value'>{director.BirthYear}</Card.Text>

            <Card.Title id='death-year-dv'>Death Year: </Card.Title>
            <Card.Text className='value'>{director.DeathYear}</Card.Text>

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

DirectorView.propTypes = {
  director: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Bio: PropTypes.string.isRequired,
    BirthYear: PropTypes.string.isRequired,

    DeathYear: PropTypes.string.isRequired,
  }).isRequired,

  onBackClick: PropTypes.func.isRequired,
};
