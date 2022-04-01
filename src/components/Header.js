import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar expand="lg">
                <Navbar.Brand>{/* This should be kept empty but kept for the spacing */}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">One Pager</Nav.Link>
                    <Nav.Link href="/separate">Separated</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}