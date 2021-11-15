import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {HashLink} from 'react-router-hash-link';
import useAuth from "../../hooks/useAuth";
import {Link} from "react-router-dom";


const Header = () => {
    const {user, logOut} = useAuth()

    return (
        <Navbar bg="dark" variant="dark" fixed="top" expand="md">
            <Container>
                <Navbar.Brand as={HashLink} to="/">Car Sales BD</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/explore">Explore Cars</Nav.Link>
                        {
                            user?.email && <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                        }
                    </Nav>
                    {
                        (user?.displayName) ?
                            <Navbar.Text>
                                Signed in as: <Link to="">{user.displayName}</Link>
                                <Button variant="light" className="ms-2" onClick={logOut}>Log Out</Button>
                            </Navbar.Text> : <Nav.Link as={HashLink} to="/login">Login</Nav.Link>

                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;