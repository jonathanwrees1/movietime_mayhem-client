import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import './movie-view.scss';

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <Card id='movie-view'>
              <Card.Body id='card-body-mv'>
                <Container id='movie-poster-mv'>
                  <Card.Img
                    id='movie-image-mv'
                    src={movie.ImageUrl}
                    alt='image'
                    crossOrigin='anonymous'
                  />
                </Container>

                <Card.Title id='movie-title-mv'>Title: </Card.Title>

                <Card.Text className='value'>{movie.Title}</Card.Text>

                <Card.Title id='movie-description-mv'>Description: </Card.Title>
                <Card.Text className='value'>{movie.Description} </Card.Text>

                <Card.Title id='movie-genre-mv'>Genre: </Card.Title>
                <Card.Text id='movie-genre-text-mv' className='value'>
                  {movie.Genre.Name}
                </Card.Text>

                <Link to={`/genres/${movie.Genre.Name}`}>
                  <Button id='genre-info-mv' variant='link'>
                    More on Genre: {movie.Genre.Name}
                  </Button>
                </Link>

                <Card.Title id='movie-director-mv'>Director: </Card.Title>
                <Card.Text id='movie-director-text-mv' className='value'>
                  {movie.Director.Name}
                </Card.Text>

                <Link to={`/director/${movie.Director.Name}`}>
                  <Button id='director-info-mv' variant='link'>
                    More on Director: {movie.Director.Name}
                  </Button>
                </Link>

                <Card.Title id='released-mv'>Release Date: </Card.Title>
                <Card.Text className='value'>{movie.Released}</Card.Text>
                <Button
                  onClick={() => {
                    onBackClick();
                  }}
                >
                  Back
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImageUrl: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
    Released: PropTypes.string.isRequired,
  }).isRequired,

  onBackClick: PropTypes.func.isRequired,
};
