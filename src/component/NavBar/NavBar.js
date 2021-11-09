import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown, Container} from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';

//ICONOS



const NavBar = () => {

    return (
        <div>
               <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <h1>Luna</h1>
                            </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link >Home</Nav.Link>
                            <NavDropdown title="Product" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Case</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Speakers</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Novelties</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link >About</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        <CartWidget/>
                    </Container>
                    </Navbar>

        </div>
    )
}

export default NavBar;
