import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';
import img from './moon.png';


const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand><Link to='/'> <img  src={img} style={{width:'70px'}}/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                     <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <NavDropdown to='Products'title='Categories'>
                            <NavDropdown.Item><Link to='Products/Phone'>Phone</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='Products/Computer'>Computer</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='Products/Watch'>Watch</Link></NavDropdown.Item>
                        </NavDropdown>
                     <Nav.Link><Link to='/Contact'>Contact</Link></Nav.Link>
                     <Nav.Link><Link to='cart'> <CartWidget/> </Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
