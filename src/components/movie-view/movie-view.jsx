import React from 'react';

export class MovieView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props;
        return( <div className="movie-view">
                <div className="movie-poster">
                <img src={movie.ImagePath} height={400} width={300} alt= "image" crossOrigin="anonymous" />
                </div><br/>

                <div className="movie-title">
                    <span className="label">Title: </span>
                    <span className="value">{movie.Title}</span>
                    </div><br/>

                    <div className="movie-description">
                        <span className="label">Description: </span>
                        <span className="value">{movie.Description} </span>
                    </div><br/>

                    <div className= "movie-genre">
                        <span className="label">Genre: </span>
                        <span className="value">{movie.Genre}</span>
                    </div><br/>

                    <div className= "movie-director">
                        <span className="label">Director: </span>
                        <span className="value">{movie.Director}</span>
                    </div><br/>

                    <div className= "movie-released">
                        <span className="label">Realease Date: </span>
                        <span className="value">{movie.Released}</span>
                    </div><br/>

                    <button onClick={() => { onBackClick(null); }}>Back</button>

                    </div>
        );

    }
}