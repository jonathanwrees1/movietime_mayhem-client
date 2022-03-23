import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import { Container, Nav, Navbar } from 'react-bootstrap';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class MovietimeMayhemApplication extends React.Component {
  render() {
    return (
      <Container fluid className='p-0'>
        <Navbar
          collapseOnSelect
          expand='md'
          sticky='top'
          id='navbar'
          bg='dark'
          variant='dark'
        >
          <Container fluid>
            <Navbar.Brand href='#home'>
              <img
                src='https://cdn.pixabay.com/photo/2013/07/13/13/36/film-161204_1280.png'
                width='50'
                height='40'
                className='d-inline-block align-top'
                alt='React Bootstrap logo2'
                crossOrigin='anonymous'
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#home'>HOME</Nav.Link>
                <Nav.Link href='#contactUs'>CONTACT US</Nav.Link>
                <Nav.Link href='#moreInfo'>MORE INFO</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <MainView />
      </Container>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MovietimeMayhemApplication), container);
