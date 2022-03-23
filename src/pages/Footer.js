import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <Row className="mt-5" style={{backgroundColor:'#262FF8', color:'white'}}>
        <Col md={4}>
            <h2 className="text-center">About</h2>
            <ul className="text-center">
                <li><a href='#' style={{color:'white',textDecoration: 'none'}}>About</a></li>
            </ul>
        </Col>
        <Col md={4} >
            <h2 className="text-center">Services</h2>
            <ul className="text-center">
                <li><a href='#' style={{color:'white',textDecoration: 'none'}}>Features</a></li>
                <li><a href='#' style={{color:'white',textDecoration: 'none'}}>Our vendor</a></li>
            </ul>
        </Col>
        <Col md={4} >
            <h2 className="text-center">Contact Us</h2>
            <ul className="text-center" style={{color:'white'}}>
                <li><a href='#' style={{color:'white', textDecoration: 'none'}}>Contact us</a></li>
                <li><a href='#' style={{color:'white',textDecoration: 'none'}}>Team Members</a></li>
                <li><a href='#' style={{color:'white', textDecoration: 'none'}}>Info@deliverynow.mail</a></li>
            </ul>

        </Col>
    </Row>
  )
}

export default Footer