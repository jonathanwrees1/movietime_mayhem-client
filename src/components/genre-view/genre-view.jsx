import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import './genre-view.scss';

export class GenreView extends React.Component {
  render() {
    const { genre, onBackClick, movies } = this.props;
    return (
      <Container id='genre-view-gv' className='d-flex align-items-center'>
        <Card id='genre-view'>
          <Card.Body id='card-body-gv'>
            <Card.Title id='genre-gv'>Genre: </Card.Title>
            <Card.Text className='value'>{genre.Name}</Card.Text>

            <Card.Title id='description-gv'>Description: </Card.Title>
            <Card.Text className='value'>{genre.Description}</Card.Text>

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

GenreView.propTypes = {
  genre: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,

  onBackClick: PropTypes.func.isRequired,
};
