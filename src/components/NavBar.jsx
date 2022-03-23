import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {Row, Col, Navbar, Nav, Container} from 'react-bootstrap'

const NavBar = () => {
    return (
       


        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#262FF8'}} variant="success">
            <Container>
            <Navbar.Brand href="#home" style={{color:'white', fontWeight:'bold'}}>Deliver Now</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:'white'}}/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                <Link to="/signup" style={{color:'white', fontWeight:'bold'}}> Sign up</Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}

export default NavBar
