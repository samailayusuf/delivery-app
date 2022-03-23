import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function VendorsNearMe() {
  const navigate = useNavigate()
  return (
    <div>
        
        <h3 className="mt-5" style={{textAlign: 'center'}}>Vendors <span style={{color:'blue'}}>Near Me</span></h3>
        <p className="m-5 text-center">Select your favourite vendors by category</p>
       
        <h4 className="m-5 text-center">Food Category</h4>
        <Container>
        <Row style={{margin:'0px auto'}}>
        <Col md={4} style={{position:'relative', width:'100%', maxWidth:'300px'}} 
        onClick={()=>navigate('/popular-items')}> 
            <img src='/Images/food1.png' style={{display:'block', height:'auto', width:'100%', cursor:'pointer'}}/>
            <h3 style={{
                 position: 'absolute', 
                 bottom: 0, 
                 background: 'rgba(0, 0, 0, 0.5)',/* Black see-through */
                 color: '#f1f1f1', 
                 width: '91%',
                 transition: '.5s ease',
                 opacity:1,
                 color: "white",
                 fontSize: "20px",
                 padding: "20px",
                 textAlign: "center"
            }}>Iya Basira Buka</h3>
        </Col>

        <Col md={4} style={{position:'relative', width:'100%', maxWidth:'300px', cursor:'pointer'}} 
        onClick={()=>navigate('/popular-items')}> 
            <img src='/Images/food2.png' style={{display:'block', height:'auto', width:'100%'}}/>
            <h3 style={{
                 position: 'absolute', 
                 bottom: 0, 
                 background: 'rgba(0, 0, 0, 0.5)',/* Black see-through */
                 color: '#f1f1f1', 
                 width: '91%',
                 transition: '.5s ease',
                 opacity:1,
                 color: "white",
                 fontSize: "20px",
                 padding: "20px",
                 textAlign: "center"
            }}>KolsKickshaw</h3>
        </Col>
        
        
        <Col md={4} style={{position:'relative', width:'100%', maxWidth:'300px', }} > 
            <img src='/Images/food1.png' style={{display:'block', height:'auto', width:'100%',opacity:'0.2', border:'1px solid #000'}}/>
            <h3 style={{
                 position: 'absolute', 
                 bottom: 0, 
                 background: 'rgba(0, 0, 0, 0.5)',/* Black see-through */
                 color: '#f1f1f1', 
                 width: '91%',
                 transition: '.5s ease',
                 opacity:1,
                 color: "white",
                 fontSize: "20px",
                 padding: "20px",
                 textAlign: "center"
            }}>Coming Soon...</h3>
        </Col>

        
        </Row>
        </Container>
    </div>
  )
}

export default VendorsNearMe