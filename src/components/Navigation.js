import { Navbar, Nav, Container} from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import Clock from 'react-live-clock';


function Navigation() {
    return (
        <>
            <Navbar className="sticky-nav" collapseOnSelect fixed="top" expand='sm' bg="dark" variant='dark'>
                <Container>
                    <Navbar.Brand>Rushi Patel</Navbar.Brand>
                    <Clock style={{ color: 'white'}}format={'h:mm:ss A'} ticking={true} timezone='US/Central'/>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='#projects'>Projects</Nav.Link>
                            <Nav.Link href='https://medium.com/@rpatel01'>Blog</Nav.Link>
                            {/* <Nav.Link href='/contact'>Contact</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;