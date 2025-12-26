import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Order from './pages/Order'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <>

    <div>
      <ToastContainer/>
      <Navbar/>
    <SearchBar/>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/orders' element={<Order/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
    </Routes>

    <Footer/>

    </div>
    </>
  )
}

export default App