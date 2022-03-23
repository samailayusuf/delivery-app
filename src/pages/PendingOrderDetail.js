import React , {useContext, useState} from 'react'
import './OrderDetails.css'
import {useParams} from 'react-router-dom'
import UserContext from '../context/UserContext'

const PendingOrderDetail = () => {

    const {items, setItemsGlobal} = useContext(UserContext)

    const id = useParams('id');
    //console.log(id.id)

    const itemFromGlobalState = items.filter(item => item.id === id.id)
    console.log(itemFromGlobalState[0])

    const [item, setItem] = useState({})
    if(! item){
        setItem(itemFromGlobalState[0])
    }
    console.log(item)
    console.log("item global"+ {...itemFromGlobalState[0]})

  return (
    <div className='place-order'>
        <div className="order">
            <h2>Order details</h2>
            <h1>Kolskickshaw</h1>
            <p>Victoria Iceland, Lagos</p>
            <img src="./Images/order.jpeg" alt="" />
        </div>
        <div className="order-description">
            <h2 className='describe'>Description</h2>
            <div className="order-details">
                <p>
                    {item.order}
                </p>
                <div className="order-commission">
                <div className="oc">
                <h2>Commision fee</h2>
                </div>
                <div className="comm-sign">
                <h3>
                    <i className="fa-solid fa-naira-sign"></i>
                    <span className='comm'>{item.price}</span>
                </h3>
                </div>
                </div>
            </div>
        </div>
        <div className="customer-details">
            <h3>Customer Details</h3>
            <p>chinedu@gmail.com</p>
            <input type="text" />
        </div>
    </div>
  )
}
export default PendingOrderDetail
