import React from 'react'
import {Row, Col} from 'react-bootstrap'

const Delivery = () => {
  return (
    <Row className='deliver'>
        <Col md={4} className="left">
          <p className="text-center">
          <img src="./Images/right.png" alt="" style={{margin:'0 auto'}}/>
          </p>
            
            <h2 className=''>Select a vendor</h2>
            <p className='text-center'>Patronise top endorsed merchant<br></br>
            for various service on the go
            </p>
            <h4 className='text-center'><a href='#' className="text-center">Sign in to your account</a></h4>
        </Col>
        <Col md={4} className="middle mt-5">
          <p className='text-center'>
          <img src="/Images/middle.png" alt="" />
          </p>
          
          <h2 className=''>Pick up an order</h2>
          <p className='text-center'>
            Find order closest to your area<br></br>
            and get a commision for every order
          </p>
          <h4 className='text-center'><a href='#'>Create an account</a></h4>
        </Col>
        <Col md={4} className="right mt-5">
          <p className="text-center">
          <img src="./Images/left.jpeg" alt="" />
          </p>
          
          <h2 className="text-center">Get the app</h2>
          <p className="text-center">Experience the best delivery<br></br>
          services on your mobile
          </p>
          <h4 className="text-center"><a href='#'>Get the app</a></h4>
        </Col>
    </Row>
  )
}

export default Delivery