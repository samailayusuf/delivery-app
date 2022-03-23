import React, {useState} from 'react'
import {Badge} from 'react-bootstrap'
import {useNavigate, useParams} from 'react-router-dom'

import './PopularItems.css'
const PopularItems = () => {
const navigate = useNavigate()


    const [popularItems, setPopularItems] = useState([
        {
            id:1, 
            name:'Zinger Shawarma', 
            price: 3000
        },
        {
            id:2, 
            name:'Pepperoni Pizza', 
            price: 4000
        },
        {
            id:3, 
            name:'Chicken Shawarma', 
            price: 1900
        },
        {
            id:4, 
            name:'Lamb Kebab with spices', 
            price: 1650
        }
    ])
    
  return (
    <div className='popularItem'>
        <div className="itemsText">
            <input type="text" name="" id="" />
            <h1>Popular Items<Badge style={{fontSize:12, borderRadius:'50%'}}>{popularItems.length}</Badge></h1>
        </div>
        <div className="photos-grid">
            {
                popularItems.map(popularItem =>(
                    <div className="photo" key={popularItem.id} >
                <div className="images">
                    <img src="./Images/shawarma 2.png" alt="" 
                        onClick={ () => navigate(`/item-description/${popularItem.name}-${popularItem.price}`) }
                    />
                </div>
                <div className="details">
                    <h2>{popularItem.name}</h2>
                    <div className="stars">
                        <span className='stars-icons'>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </span>
                    </div>
                    <h2>
                        <i class="fa-solid fa-naira-sign"></i>
                        <span>{popularItem.price}</span>
                    </h2>
                </div>
            </div>
                ))
            }
            
            
        </div>
    </div>
  )
}
export default PopularItems
