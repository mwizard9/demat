import React, { useEffect, useState } from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navbars = () => {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offSet = window.scrollY

    if (offSet > 40) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const containerClass = ['navs']

  if (scrolled) {
    containerClass.push('scrolled')
  }
  return (
   <>
     <Navbar sticky="top" expand="lg" bg="light" className={containerClass?.join(' ')} >
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
