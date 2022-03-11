import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';


export class MainView extends React.Component {
    
    constructor(){
        super();
        this.state = {
          movies: [
            { _id: 1, Title: 'Rogue One: A Star Wars Story', Description: 'Jyn Erso and a rogue band of resistance fighters unite for a mission against The Empire to steal the Death Star plans and bring hope to the galaxy.', 
            ImagePath:'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_FMjpg_UX1000_.jpg', 
            Genre:'Sci-Fi', Director: 'Gareth Edwards', Released: '12-16-2016'},

            { _id: 2, Title: 'The Fox and The Hound', Description: 'When a little fox named Todd is adopted into a farm family, he quickly becomes friends with a puppy named Copper. Life is full of adventures until Copper is expected to take on his role as a fox-hunting dog.', 
            ImagePath: 'https://lumiere-a.akamaihd.net/v1/images/p_thefoxandthehound_19897_37a624d3.jpeg', 
            Genre:'Animated', Director: 'Ted Berman', Released: '07-10-1981'},
            
            { _id: 3, Title: 'Blue Streak', Description: 'Miles Logan is a jewel thief who stole a huge diamond. However, after two years in jail, he comes to find out that he stashed the diamond in a police building that was under construction at the time of the robbery. In order to get it back, he will have to convince everyone that he is a real LAPD detective.', 
            ImagePath:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a072a71ef6ac731665f8fc99a4b8581aa5cfa928a3866e3e29f065079948cd4d._RI_V_TTW_.jpg', 
            Genre:'Comedy', Director: 'Les Mayfield', Released: '09-17-1999'},
          ],
          selectedMovie: null
        };
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
          selectedMovie: newSelectedMovie
        });
      }

    render() {
        const { movies, selectedMovie } = this.state;
      
        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
      
        return (
            <div className="main-view">
              {selectedMovie
                ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                : movies.map(movie => (
                  <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
                ))
              }
          </div>
        );
      }
      
}
export default MainView;