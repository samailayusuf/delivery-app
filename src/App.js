
import NavBar from "./components/NavBar";
import { Routes, Route, } from 'react-router-dom'
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import './components/css/signin.css'
import './components/css/nav.css'
import './components/css/home.css'
import './components/css/signup.css'
import './components/css/delivery.css'
import VerificationPage from './pages/VerificationPage'
import Dashboard from './pages/Dashboard'
import VendorsNearMe from './pages/VendorsNearMe'
import PendingOrders from './pages/PendingOrders'
import PendingOrderDetail from './pages/PendingOrderDetail'
import Description from './pages/Description'
import OrderDetails from './pages/OrderDetails'
import PopularItems from './pages/PopularItems'
import Footer from './pages/Footer'


import React from 'react'
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <div>
      <NavBar />
      
      <UserProvider>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/signin"element={<Signin />} />
     <Route path="/signup"element={<Signup />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/vendors" element={<VendorsNearMe/>} />
     <Route path="pending-orders" element={<PendingOrders />} />
     <Route path="/item-description/:item" element={<Description />} />
     <Route path="/order-details/:item" element ={<OrderDetails />} />
     <Route path="/popular-items" element={<PopularItems />} />
     <Route path="/pending-order-detail/:id" element={<PendingOrderDetail />} />
   </Routes>
   </UserProvider>
   <Footer/>
    </div>
  )
}

export default App



 
