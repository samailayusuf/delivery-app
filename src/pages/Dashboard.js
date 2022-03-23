import React , {useContext} from 'react'
import {Col, Form, Button, Container, Row} from 'react-bootstrap'
import {useNavigate, useParams} from 'react-router-dom'
import UserContext from '../context/UserContext'
import avatar from '../assets/avatar.png'


function Dashboard() {

    const {user, setUser} = useContext(UserContext)

    const navigate = useNavigate()

    console.log(user.firstName)
  return (

    <>
     <h3 className="text-center mt-3">Welcome</h3>

    
            <Row style={{margin:'3rem auto'}}>  <Col md={4}></Col>
            <Col md={4} style={{margin:'1rem auto'}}> 
            <p style={{textAlign:'center'}}>
                <img src={avatar} alt="" className="img-responsive" style={{margin:'0 auto'}}/>
            </p>
            
                <h5 className="mb-3 mt-5"><b>First Name: </b>{user.firstName}</h5>
                <h5 className="mb-3"><b>Last Name: </b>{user.lastName}</h5>
                <h5 className="mb-3"><b>Email Address: </b>{user.email} </h5>

                <div style={{display:'flex', flexDirection:'row'}}>
                <Button 
                    type="submit" 
                    className="m-2" 
                    style={{width:'100%'}}
                    onClick={() => navigate('/vendors')}
                    >
                    Place Order
                </Button>  
                <Button 
                    type="submit" 
                    className="m-2" 
                    style={{width:'100%'}}
                    onClick={() => navigate('/pending-orders')}
                    >
                    Take Order
                </Button>  
                </div>
            
            </Col>
            <Col md={4}></Col>
            
            </Row>

            
    </>
    
  )
}

export default Dashboard