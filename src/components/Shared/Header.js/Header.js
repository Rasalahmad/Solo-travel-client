import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Header = () => {
    const {user, logOut} = useAuth();
    
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">SOLO TRAVEL</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className = 'text-white'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/services" className = 'text-white'>Services</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard" className = 'text-white'>Dashboard</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant='light'>LogOut</Button> :
                            <span>
                                <Nav.Link as={Link} to="/login" className = 'text-white'><button className = 'btn btn-secondary'>Login</button></Nav.Link>
                            </span>
                        }

                        <Navbar.Text>
                            <a href="#login" className = 'mx-2'>{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;