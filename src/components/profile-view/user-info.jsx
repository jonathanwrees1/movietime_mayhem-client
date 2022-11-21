import React from 'react';

export function UserInfo(props) {
  return (
    <>
      <p>User: {props.username}</p>
      <p>Email: {props.email}</p>
      <p>Birthday:{props.birthday}</p>
      <ul>
        Favorite Movies:
        <li>{props.favmovies[0]}</li>
        <li>{props.favmovies[1]}</li>
      </ul>
    </>
  );
}
