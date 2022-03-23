import React ,{useState} from 'react'
import './Description.css'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const Description = () => {

    const data = useParams();
    const dataArray = data.item.split("-")
    console.log(dataArray)

    const navigate = useNavigate()

    const [contact, setContact] = useState("")
    const [commission, setCommission] = useState(0)
    const [orderName, setOrderName] = useState(dataArray[0])
    const [orderPrice, setOrderPrice] = useState(dataArray[1])

    console.log(contact,commission,orderName, orderPrice)

    const onSubmit = (e) => {
        e.preventDefault()
        window.alert(`Order for ${orderName} has been successfully placed`)

        const newOrder = {
            order_name: orderName,
            username: "test",
            order_price: orderPrice,
            order_description: "For: "+contact+" with N"+commission+" commission"
          }

        const url = 'https://kcko7eyme8.execute-api.us-east-1.amazonaws.com/dev/deliverynow/orders'
        axios.post(url, newOrder, {header:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' }})// {newUser})
        .then(response => {
            console.log(response.data)
        })
        .catch(err => console.log(err))

        navigate(`/order-details/${orderName}-${orderPrice}-${newOrder.order_description}-${commission}`)


    }

    

  return (
    <div className='item-description'>
        <div className="photo">
            <div className="image">
                <img src="./Images/pizza image.png" alt="" />
            </div>
        </div>
        <div className="details">
            <h2 className='pep'>{dataArray[0]}</h2>
            <div className="de">
            <div className="pizzaDetails">
                <div className="prizeDetails">
                    <h2>
                    <i class="fa-solid fa-naira-sign"></i>
                    <span className='three'>{dataArray[1]}</span>
                    </h2>
                </div>
                <div className="pizzaSigns">
                    <span>
                        <button>
                        <i class="fa-solid fa-plus"></i>
                        </button>
                        <button>
                        <i class="fa-solid fa-1"></i>
                        </button>
                        <button>
                        <i class="fa-solid fa-minus"></i>
                        </button>
                    </span>
                </div>
            </div>
                <div className="inputDetails">
                    <label htmlFor="">Input prefer contact detail</label><br></br>
                    <input type="text"  value={contact} onChange={(e) => setContact(e.target.value)} /><br></br>
                    <label htmlFor="">Please input the commission fee</label><br></br>
                    <input type="number" id='number' value={commission}  onChange={(e) => setCommission(e.target.value)}/>
                </div>
            </div>
                <button className='order-now'
                    onClick={onSubmit}
                >Place order</button>
        </div>
    </div>
  )
}
export default Description
