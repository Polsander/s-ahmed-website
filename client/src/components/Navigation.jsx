import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className='fs-2' href="#home">Samar Ahmed</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto pe-3 fs-3">
                        <Nav.Link className='px-3' href="#home">About</Nav.Link>
                        <Nav.Link className='px-3' href="#link">Projects</Nav.Link>
                        <Nav.Link className='px-3' href="#link">Resume</Nav.Link>
                        <Nav.Link className='px-3' href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation