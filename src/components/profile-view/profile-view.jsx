import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { UserInfo } from './user-info';
import { FavoriteMovies } from './favorite-movies';
import { UpdateUser } from './update-user';
import './profile-view.scss';
import axios from 'axios';

export function ProfileView(props) {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getUserInfo = () => {
      let token = localStorage.getItem('token');
      let profile = localStorage.getItem('user');

      axios
        .get(`https://movie-time-mayhem.herokuapp.com/users/${profile}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUserInfo(response.data);
        });
    };

    getUserInfo();
  }, []);

  if (!userInfo) {
    return (
      <img src='https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' />
    );
  }

  return (
    <Container>
      <div id='profile-view-pv'>
        <h1 id='profile-header-pv'> {userInfo.UserName}'s Profile </h1>

        <UserInfo
          username={userInfo.UserName}
          email={userInfo.Email}
          birthday={userInfo.Birthday}
          favmovies={userInfo.FavoriteMovies}
        />

        <UpdateUser
          username={userInfo.UserName}
          email={userInfo.Email}
          password={userInfo.Password}
          birthday={userInfo.Birthday}
          favmovies={userInfo.FavoriteMovies}
        />

        <FavoriteMovies favmovies={userInfo.FavoriteMovies} />
      </div>
    </Container>
  );
}

/*

<FavoriteMovies favoriteMovieList={favoriteMovieList} />
      <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
{user.map((potato) => (
          <UserInfo username={potato.UserName} email={potato.Email} />
        ))}



ProfileView.propTypes = {
  user: PropTypes.shape({
    UserName: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
  }).isRequired,

  onBackClick: PropTypes.func.isRequired,
};*/
