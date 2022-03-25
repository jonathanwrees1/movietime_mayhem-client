/*import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import './director-view.scss';

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick, movies } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <Card id='director-view'>
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
                <Card.Text className='value'>{movie.Genre.Name}</Card.Text>

                <Card.Title id='movie-director-mv'>Director: </Card.Title>
                <Card.Text className='value'>{movie.Director.Name}</Card.Text>

                <Card.Title id='released-mv'>Release Date: </Card.Title>
                <Card.Text className='value'>{movie.Released}</Card.Text>
                <Button
                  onClick={() => {
                    onBackClick(null);
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
  Movie: PropTypes.shape({
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
*/
