import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <>
    <div className='flex flex-col sm:flex-row border-2 border-gray-850' >

        <div className=' w-full text-center my-auto'>
            <p className='text-xl m-2'>______ OUR BESTSELLERS</p>
                    
            <p className='text-4xl md:text-6xl m-5 font-semibold'>Latest Arrivals</p>
                
              <p className='text-xl m-2'> SHOP NOW ______</p> 
            
        </div>


        <div  className='w-full '>
            
            <img className='object-cover' src={assets.hero_img} alt="" />
        </div>     
    </div>
    
    </>
  )
}

export default Hero