import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-2 mt-30'>
        <div>
            <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-500'>We have hassle free exchange policy</p>
        </div>

        <div>
            <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-500'>We have provide 7 days free return policy</p>
        </div>

        <div>
            <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
            <p className='font-semibold'>Best Customer support</p>
            <p className='text-gray-500'>We provide 24/7 Customer support</p>
        </div>
    
    </div>
  )
}

export default OurPolicy