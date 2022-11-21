import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react';

export function FavoriteMovies(props) {
  return (
    <>
      <ul>
        <li>{props.favmovies[0]}</li>
        <li>{props.favmovies[1]}</li>
      </ul>
    </>
  );
}
