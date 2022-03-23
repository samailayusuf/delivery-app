import React, {useEffect, useState, useContext} from 'react'
import {Row, Col, Badge} from 'react-bootstrap'
import './PendingOrders.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import UserContext from '../context/UserContext'


function PendingOrders() {
    const [myItems, setMyItems] = useState([])
    const navigate = useNavigate()
    
    const {items, setItemsGlobal} = useContext(UserContext)

    const deleteItem = (id) => {
        const newItems = myItems.filter(item => item.id !== id)
        setMyItems([...newItems])
        setItemsGlobal([...newItems])
    }

    useEffect(()=>{
      const url = 'https://kcko7eyme8.execute-api.us-east-1.amazonaws.com/dev/deliverynow/orders'

     axios.get(url, {header:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' }})// {newUser})
    .then(res => {
        const data = res.data
        
        const returnedArray = data[Object.keys(data)[Object.keys(data).length - 1]].data;
        console.log(returnedArray)
        setMyItems(returnedArray)
        setItemsGlobal(returnedArray)
      })
    .catch(err => console.log(err))

    }, [])

  return (
    <>
    <p className="text-center">
    <input type="text" className="center" placeholder="Search for pending orders" 
    style={{borderRadius:'20px', border:'none', outline: 'none', width:'80%', 
    boxShadow:' 1px 2px 11px 0px rgba(0,0,0,0.75)',
    padding:'5px 20px'}} />
    </p>

    <div className="text-center mt-5"><h3 >{ items.length <= 0 && <b>Loading ...</b> } Pending Orders <Badge style={{fontSize:'14px', borderRadius:"50%"}}>{items.length}</Badge></h3></div>
    <p style={{color:'#B5B8CC'}} className="text-center">Last request 1 hour ago</p>
    <Row className="mx-5 center" >
        {
            myItems.map(element => (
                <Col md={4} key={element.id}>
                    <div className="box center" key={element.id}>
                        <div className="flex">
                            <img src="/Images/avatar2.png" className="mt-3"/>
                            <div className="flex flex-column">
                                <p style={{margin:'10px 0px 0px 0px', color:'white'}}>{element.order.order_name}</p>
                                <p style={{margin:'10px 0px 0px 0px', color:'white'}}>15 minutes ago</p>
                            </div>
                        </div>
                        <div className="flex flex-row space-between">
                            <h4 style={{marginLeft:'10px'}}>&#8358;{element.order.order_price}</h4> 
                            <div>
                                <img src="/Images/decline.png" style={{width:'30px', cursor:'pointer'}}
                                onClick={()=>deleteItem(element.id)}/>
                                <img src="/Images/pick.png" style={{width:'30px'}}
                                onClick={()=>navigate(`/pending-order-detail/${element.id}`)}/>
                            </div>
                        </div>
                    </div>
               </Col>
            ))
        }
        
        

       

    </Row>
    
    </>
    
  )
}

export default PendingOrders