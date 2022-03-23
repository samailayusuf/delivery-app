import React, {useState, useContext, useEffect} from 'react'
import './SignUp.css'
import UserContext from '../context/UserContext'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';


const Signup = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const {user, setUser} = useContext(UserContext)

  useEffect(()=>{
    if (user.firstName){
      navigate('/dashboard')
    }
  })

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const newUser = {username, firstName, lastName, email}
    //const url = 'https://kcko7eyme8.execute-api.us-east-1.amazonaws.com/dev/deliverynow/orders'
    const url = 'https://kcko7eyme8.execute-api.us-east-1.amazonaws.com/dev/deliverynow/account/signup'
    
    axios.post(url, newUser, {header:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' }})// {newUser})
    .then(response => {
        setLoading(false)
        console.log(response.data)
        setMessage(response.data)
      })
    .catch(err => console.log(err))

    setUser(newUser)
    setTimeout(()=>{
      navigate(`/dashboard`)
    }, 2000)
    
  }

  return (
    <div className='siginUP'>
      <div className="form-container">
        <form className="reg">
          <h2>Register</h2>
          {/* <p>Already have an account? <span><a href='#'>Login</a></span></p> */}
          {loading && <p>Loading...</p>}
          {message && <p>{message}</p>}
          <label htmlFor="name">Username</label>
          <input type="text" id='Username' value={username} onChange={e=> setUsername(e.target.value)}/>
          <label htmlFor="name">First Name</label>
          <input type="text" id='name' value={firstName} onChange={e=> setFirstName(e.target.value)}/>
          <label htmlFor="name">Last Name</label>
          <input type="text" id='lastName' value={lastName} onChange={e=> setLastName(e.target.value)}/>
          <label htmlFor="email">Email Address</label>
          <input type="text" id='email'  value={email} onChange={e=> setEmail(e.target.value)}/>
          {/* <label htmlFor="password">Password</label> */}
          {/* <input type="text" id='password' /> */}
          <button className='btn' onClick={onSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}
export default Signup
