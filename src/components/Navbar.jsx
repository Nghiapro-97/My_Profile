import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-scroll";

export const Navbars = () => (
    <div className="container-fluid">
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#home">
    <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}><h4>Home</h4></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto py-2 fs-3">
                    <Nav.Link>
                        <Link activeClass="active" to="profile" spy={true} smooth={true} offset={-70} duration={400}><h5>Profile</h5></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" to="experiences" spy={true} smooth={true} offset={-70} duration={400}><h5>Experiences</h5></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" to="abilities" spy={true} smooth={true} offset={-70} duration={400}><h5>Abilities</h5></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={400}><h5>Projects</h5></Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}><h5>Contact</h5></Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);