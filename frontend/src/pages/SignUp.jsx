import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { assets } from '../assets/frontend_assets/assets';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';


const SignUp = () => {

      const[show,setShow]=useState(false);
      const {token,setToken,navigate,backendUrl}=useContext(ShopContext)
      const [name,setName]=useState('');
      const [password,setPassword]=useState('');
      const [email,setEmail]=useState('');
      

      

      
    
      const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
           const response =await axios.post(backendUrl +'/api/user/register',{name,email,password})
          if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
          }else{
            toast.error(response.data.message)
          }
        } catch (error) {
          console.log(error)
           toast.error(error.message)
        }
       
      setName("");
      setPassword("")
       
       
      
         
      }
    
      
      
     

  return (
    <>
    <form onSubmit={handleSubmit} className='bg-gray-900 h-screen  flex items-center justify-center border-t-2 border-gray-950 '>
        <div className='bg-gray-950 md:text-2xl text-white p-5 rounded-3xl w-full m-4 md:w-auto'>


         <label >NAME:</label>
          <div >
            <input className='outline-none p-3 w-full border-gray-700 border rounded-3xl mt-3 md:w-2xl'
             type="text"
             name='name'
             value={name}
             onChange={(e)=>setName(e.target.value)}
              placeholder='Enter your name ...' />
          </div>





          <label >Email:</label>
          <div >
            <input className='outline-none p-3 w-full border-gray-700 border rounded-3xl mt-3 md:w-2xl'
             type="text"
             name='email'
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
              placeholder='Enter your email ...' />
          </div>

        <label >Password:</label>
          <div className='relative' >
            <input className='outline-none p-3 w-full border-gray-700 border rounded-3xl mt-3 md:w-2xl  '
             type={show? "text":"password"}
             name='password'
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
              placeholder='Enter your password ...' />
            <div className=' absolute right-3 -my-8 md:-my-10 '>
              <span onClick={()=>setShow((prev)=>!prev)}>
                {
                  show ?
                  (
                    <FaEye />
                  )
                  :
                  (
                    
                    <  IoEyeOff />
                  )
                }
              </span>
            </div>
          </div>





          <div className='my-5 flex items-center justify-center '>
            <button className='bg-green-500  rounded-full p-2'>SUBMIT</button>
          </div>


        <p>Already have an account? <Link className='underline hover:text-red-300' to={'/login'}>Login</Link></p>

        </div>


      </form>
    
    </>
  )
}

export default SignUp