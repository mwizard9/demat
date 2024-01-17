import React from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navbars = () => {
  return (
   <>
     <Navbar sticky="top" expand="lg" bg="light" className="bg-body-tertiary mx-5 navs">
      <Container>
        <Navbar.Brand href="#home">D-Mat Multipurpose</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end'>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}
