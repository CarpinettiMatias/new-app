import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, NavDropdown } from 'react-bootstrap'

import img from './moon-icon.png'


const NavBar = () => {

    return (
        <div>
               <Navbar bg="dark" variant="dark">
                    <Navbar.Brand >
                        <h1><img src={img}/> Luna</h1>
                    </Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link >Home</Nav.Link>
                        <NavDropdown title="Product" id="basic-nav-dropdown">
                            <NavDropdown.Item >Case</NavDropdown.Item>
                            <NavDropdown.Item >Speaker</NavDropdown.Item>
                            <NavDropdown.Item >novelties</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link >Contact</Nav.Link>
                        <Nav.Link >About</Nav.Link>
                    </Nav>
                </Navbar>
        </div>
    )
}

export default NavBar;
