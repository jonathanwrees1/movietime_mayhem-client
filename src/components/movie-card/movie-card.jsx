import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Card, Button, CardGroup } from 'react-bootstrap';
import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Card id='movie-card'>
        <Card.Header id='card-header'>
          <Card.Title id='movie-title'>{movie.Title}</Card.Title>
        </Card.Header>
        <Card.Img id='movie-image' variant='top' src={movie.ImageUrl} />

        <Card.Body>
          <Card.Text id='movie-description'> {movie.Description}</Card.Text>
        </Card.Body>
        <Card.Footer id='card-footer'>
          <Button onClick={() => onMovieClick(movie)} variant='primary link'>
            Open
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
  }).isRequired,

  onMovieClick: PropTypes.func.isRequired,
};
