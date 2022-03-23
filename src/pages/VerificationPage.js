import React from 'react'
import {Col, Form, Button, Row} from 'react-bootstrap'

function VerificationPage() {
  return (

    <>
     <h3 className="text-center mt-5">Verify your Account</h3>

    
            <Row style={{margin:'2rem auto'}}>  <Col md={4}></Col>
            <Col md={4}> 
            <form>

<p className="text-center mt-5"> Kindly input the OTP sent to your mail.</p>
                <Form.Label id="email" label="email" style={{width:'100%'}}>
                    <Form.Control 
                        size="sm" 
                        type="number" 
                        placeholder="Enter Code Here" 
                        style={{width:'100%'}}
                        
                        />
                </Form.Label> <br/>

                

                

                <br/>


                <p style={{fontSize:'12px'}}>Didn't Receive an OTP? <span style={{fontSize:'16px', fontWeight:'bold', textDecoration:'underline', color:'blue', cursor:'pointer'}}>RESEND OTP</span></p>

                
                <Button 
                    type="submit" 
                    className="mb-2" 
                    style={{width:'100%'}}
                    >
                    Verify
                </Button>  
            </form>
            

            </Col>
            <Col md={4}></Col>
            
            </Row>

            
    </>
    
  )
}

export default VerificationPage