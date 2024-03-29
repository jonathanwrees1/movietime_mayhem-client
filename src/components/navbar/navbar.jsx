import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import './navbar.scss';

export function Menubar({ user }) {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  };

  const isAuth = () => {
    if (typeof window == 'undefined') {
      return false;
    }
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return false;
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand='md'
      sticky='top'
      id='navbar'
      bg='dark'
      variant='dark'
    >
      <Container fluid>
        <Navbar.Brand href='/'>
          <img
            src='https://cdn.pixabay.com/photo/2013/07/13/13/36/film-161204_1280.png'
            width='50'
            height='40'
            className='d-inline-block align-top mr-5'
            alt='my logo'
          />
          Welcome To Movie Time Mayhem!
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            {isAuth() && <Nav.Link href={`/users/${user}`}>{user}</Nav.Link>}

            {isAuth() && (
              <Button
                variant='link'
                onClick={() => {
                  onLoggedOut();
                }}
              >
                Logout
              </Button>
            )}
            {!isAuth() && <Nav.Link href='/'>Sign-in</Nav.Link>}

            {!isAuth() && <Nav.Link href='/register'>Sign-up</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
