import React from 'react';
import PropTypes from 'prop-types';

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;
    return (
      <div className='movie-view'>
        <div className='movie-poster'>
          <img
            src={movie.ImageUrl}
            height={400}
            width={300}
            alt='image'
            crossOrigin='anonymous'
          />
        </div>
        <br />

        <div className='movie-title'>
          <span className='label'>Title: </span>
          <span className='value'>{movie.Title}</span>
        </div>
        <br />

        <div className='movie-description'>
          <span className='label'>Description: </span>
          <span className='value'>{movie.Description} </span>
        </div>
        <br />

        <div className='movie-genre'>
          <span className='label'>Genre: </span>
          <span className='value'>{movie.Genre.Name}</span>
        </div>
        <br />

        <div className='movie-director'>
          <span className='label'>Director: </span>
          <span className='value'>{movie.Director.Name}</span>
        </div>
        <br />

        <div className='movie-released'>
          <span className='label'>Release Date: </span>
          <span className='value'>{movie.Released}</span>
        </div>
        <br />

        <button
          onClick={() => {
            onBackClick(null);
          }}
        >
          Back
        </button>
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
