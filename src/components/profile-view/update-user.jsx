import React from 'react';

export function UpdateUser(props) {
  return (
    <form className='profile-form' onSubmit={(e) => handleSubmit(e)}>
      <h2>Want to change some info?</h2>

      <label>Username:</label>
      <input
        type='text'
        name='UserName'
        defaultValue={props.username}
        //onChange={(e) => handleUpdate(e)}
      />

      <label>Password</label>
      <input
        type='password'
        name='password'
        defaultValue={props.password}
        //onChange={(e) => handleUpdate(e)}
      />

      <label>Email address</label>
      <input
        type='email'
        name='email'
        defaultValue={props.email}
        //onChange={(e) => handleUpdate(e.target.value)}
      />

      <label>Favorite Movies</label>
      <input
        type='text'
        name='FavoriteMovies'
        defaultValue={props.favmovies}
        //onChange={(e) => handleUpdate(e.target.value)}
      />
      <button variant='primary' type='submit'>
        Update
      </button>
    </form>
  );
}
