import React, { useContext, useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoReorderThreeOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets';
import { ShopContext } from '../context/ShopContext';



const Navbar = () => {

  const[visible,setvisible]=useState(false);
  const {showSearch,setShowSearch ,getCartCount,navigate,token,setToken,setCartItem}=useContext(ShopContext);

  const logOut=()=>{
    navigate('/login')
    localStorage.removeItem('token')
    setToken('');
    setCartItem({})
    
  }

  return (
    <>
   <div className='bg-gray-900 text-amber-50 p-5 flex items-center justify-between '>
        
         <div className="flex items-center space-x-3">
          
          <Link to={'/'} ><img src={assets.logo} alt="Logo" className="w-20 "/></Link>
        </div>
          
         <div className="hidden lg:flex space-x-8 ">
          <Link  to={'/'}  className="text-white hover:text-gray-400 hover:text-xl">Home</Link>
          <Link to={'/about'}  className="text-white hover:text-gray-400 hover:text-xl">About</Link>
          <Link to={'/collection'}  className="text-white hover:text-gray-400 hover:text-xl ">Collection</Link>
          <Link to={'/contact'}  className="text-white hover:text-gray-400 hover:text-xl">Contact Us</Link>
        </div>
         

        <div className='flex items-center space-x-5'>
                <div className='  text-white rounded-2xl  items-center  '>
                    
                    <IoSearchSharp onClick={()=>setShowSearch(!showSearch)} className='w-16 h-10 rounded-2xl hover:bg-gray-800 '/>

                </div>

                <div className='flex items-end justify-end '>

                   <Link to={'/cart'}> <BsCart3 className='h-9 w-10 ' /></Link>
                    <p className=' rounded-full h-5 w-5 bg-red-600 absolute flex items-center justify-center font-bold cursor-pointer' >{getCartCount()}</p>

                </div>

                <div className='group relative'>
                    <p onClick={()=> token ? null : navigate('/login')} className='cursor-pointer'>< RiAccountCircleFill className='h-9 w-10 ' /></p>

                    
                    {
                      token &&
                      <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                           <p className='cursor-pointer hover:text-black'>My Profile</p>
                           <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                           <p onClick={logOut} className='cursor-pointer hover:text-black'> Logout</p>
                        </div>
                    </div>
                    }
                    
                </div>


                <div className='lg:hidden'>

                  <button onClick={()=>setvisible(!visible)}><IoReorderThreeOutline className='h-9 w-10 '/></button>
                 

                   

                </div>


        </div>


   </div>
   
  
   {
      visible &&(
        
          <div className='bg-gray-900  '>
           <ul>
            <li onClick={()=>setvisible(false)} className='border-gray-950 border-2 w-full text-2xl text-white p-3 flex items-center justify-center'><Link to={'/'}>Home</Link></li>
            <li onClick={()=>setvisible(false)} className='border-gray-950 border-2 w-full text-2xl text-white p-3 flex items-center justify-center'><Link to={'/about'}>ABOUT</Link></li>
            <li onClick={()=>setvisible(false)} className='border-gray-950 border-2 w-full text-2xl text-white p-3 flex items-center justify-center'><Link to={'/collection'}>COLLECTION</Link></li>
            <li onClick={()=>setvisible(false)} className='border-gray-950 border-2 w-full text-2xl text-white p-3 flex items-center justify-center'><Link to={'/contact'}>CONTACT US</Link></li>
            
            
           </ul>
          </div>
                       
       

     )
    }



    </>
  )
}

export default Navbar