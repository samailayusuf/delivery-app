import React from 'react'
import './OrderDetails.css'
import {useParams} from 'react-router-dom'

const OrderDetails = () => {

    const item = useParams()
    const itemArray = item.item.split("-")
    console.log(itemArray)

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
                <p>{itemArray[0]}
                </p>
                <div className="order-commission">
                <div className="oc">
                <h2>Commision fee</h2>
                </div>
                <div className="comm-sign">
                <h3>
                    <i className="fa-solid fa-naira-sign"></i>
                    <span className='comm'>{itemArray[3]}</span>
                </h3>
                </div>
                </div>
            </div>
        </div>
        <div className="customer-details">
            <h3>Customer Details</h3>
            <p>{itemArray[2]}</p>
            <input type="text" />
        </div>
    </div>
  )
}
export default OrderDetails
