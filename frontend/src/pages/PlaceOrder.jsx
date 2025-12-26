import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const {navigate,backendUrl,token,cartItem,setCartItem,getCartItem,delivery_fee,products}=useContext(ShopContext);
  const [method,setMethod]=useState('cod');
  const [formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    state:'',
    street:'',
    city:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler =(event)=>{
    const name=event.target.name
    const value=event.target.value

    setFormData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler =async(e ,{method})=>{
    e.preventDefault()

    try {
      let orderItems=[]
      for(const items in cartItem){
          for(const item in cartItem[items]){
            if(cartItem[items][item] >0){
              const itemInfo= structuredClone(products.find(product=>product._id===items))
              if(itemInfo){
                itemInfo.size=item
                itemInfo.quantity=cartItem[items][item]
                orderItems.push(itemInfo)
              }
            }
          }
      }
     let orderData={
      address:formData,
      items:orderItems,
      amount: getCartAmount()+delivery_fee
     }

     switch(method){
      case 'cod':
        const response=await axios.post(backendUrl +'/api/order/place',orderData,{headers:{token}})
        
       if (response.data.success) {
         setCartItem({})
        navigate('/orders')
       }else{
        toast.error(response.data.message)
        
       }


      break;

      default:
        break;

     }

    } catch (error) {
      
    }
  }

  

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ml-10'>
      <div className='flex flex-col gap-4 sm:max-w-[480px]'>
        
        <div className='text-xm sm:text-2xl my-3'>
            <Title text1={'DELIVERY'} text2={'INFORMATION _____'}/>
        </div>
        <div className='flex gap-3 '>
            <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name'/>
            <input required  onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name'/>
        </div>
        <input required  onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address'/>
        <input required  onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street'/>
        <div className='flex gap-3 '>
            <input  onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
            <input required  onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-3 '>
            <input required  onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode'/>
            <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
        </div>
       
            <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Phone'/>
          
      </div>

      <div className=' mx-auto'>
          <div className='mt-8 min-w-80'>
            <CartTotal/>
          </div>

          <div className='mt-12'>
            <Title text1={'PAYMENT'} text2={'METHOD ____'}/>

            <div className='flex gap-3 flex-col lg-flex-row'>
                <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border px-3 p-2 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'stripe' ? 'bg-green-400' : ''}`}></p>
                    <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                </div>

                <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border px-3 p-2 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'razorpay' ? 'bg-green-400' : ''}`}></p>
                    <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                </div>

                <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border px-3 p-2 cursor-pointer'>
                    <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'cod' ? 'bg-green-400' : ''}`}></p>
                    <p className='text-gray-500 text-sm font-medium'>CASH ON DELIVERY</p>
                </div>
            </div>

            <div className='w-full text-end mt-8'>
                  <button type='submit'  className='bg-black text-white px-16 py-3 text-sm rounded-2xl'>PLACE ORDER</button>
            </div>


          </div>
      </div>



    </form>
  )
}

export default PlaceOrder