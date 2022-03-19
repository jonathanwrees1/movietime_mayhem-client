import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import './movie-view.scss';
import reactDom from 'react-dom';

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;
    return (
      <div id='movie-view'>
        <div className='d-flex justify-content-center'>
          <img
            id='movie-poster-mv'
            src={movie.ImageUrl}
            alt='image'
            crossOrigin='anonymous'
          />
        </div>
        <br />
        <div id='movie-stats-mv'>
          <div className='movie-title '>
            <span id='movie-title-mv'>Title: </span>

            <span className='value'>{movie.Title}</span>
          </div>
          <br />

          <div className='movie-description'>
            <span id='movie-description-mv'>Description: </span>
            <span className='value'>{movie.Description} </span>
          </div>
          <br />

          <div className=' movie-genre'>
            <span id='movie-genre-mv'>Genre: </span>
            <span className='value'>{movie.Genre.Name}</span>
          </div>
          <br />

          <div className='movie-director'>
            <span id='movie-director-mv'>Director: </span>
            <span className='value'>{movie.Director.Name}</span>
          </div>
          <br />

          <div className='released'>
            <span id='released-mv'>Release Date: </span>
            <span className='value'>{movie.Released}</span>
          </div>
        </div>
        <br />

        <Button
          id='back-button-mv'
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </Button>
      </div>
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
