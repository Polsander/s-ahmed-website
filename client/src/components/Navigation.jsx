import React, { useState, useEffect } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { authenticate } from '../assets/helpers/authenticate';


const Navigation = () => {

    const [logout, setLogout] = useState(null);

    // Check if User is authenticated
    useEffect(() => {
        const authenticateUser = async () => {
            const response = await authenticate();
            if (response.isAuthenticated) {
                console.log('how many?')
                setLogout(
                    <Nav className='fs-3 ms-auto'>
                        <Nav.Link className='px-3' onClick={logoutHandler}>Logout</Nav.Link>
                    </Nav>
                );
            }
        }
        authenticateUser();
    },[]);
    //handlers
    const logoutHandler = () => {
        localStorage.removeItem("accessToken");
        setLogout(null);
    }

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
                    {logout}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation