import React from 'react'
import {Col, Row} from 'react-bootstrap'
import Delivery from '../components/Delivery'

const Home = () => {
  return (
    <div className='heroSectio'>
        <Row className="heroSection">
        <Col md={6} className='description'>
            <h2 className='have'>Have an order from your<br></br>
            favorite vendors delivered<br></br>
            right to your doorstep
            </h2>
            <h2 className='link'> <a href='#'>Get Started</a> </h2>
        </Col>
        <Col md={6} className='hero'>
            <img src="./Images/hero-image.jpg" alt="" />
        </Col>
        </Row>
        <Row className="delivery">

            <Delivery />
        </Row>
    </div>
  )
}

export default Home