import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Button, CardGroup, Row, Col, Container } from 'react-bootstrap';
import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <CardGroup>
              <Card id='movie-card'>
                <Card.Header id='card-header-mc'>
                  <Card.Title id='movie-title-mc'>{movie.Title}</Card.Title>
                </Card.Header>
                <Card.Img
                  id='movie-image-mc'
                  variant='top'
                  src={movie.ImageUrl}
                  alt='image'
                  crossOrigin='anonymous'
                />

                <Card.Body id='card-body-mc'>
                  <Card.Text id='movie-description-mc'>
                    {movie.Description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer id='card-footer-mc'>
                  <Link to={`/movies/${movie._id}`}>
                    <Button variant='primary'>Open</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
  }),
};
