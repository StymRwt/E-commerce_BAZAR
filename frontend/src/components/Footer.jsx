import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ml-5'>
          <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam nam vitae, laudantium pariatur assumenda iste!
            </p>
          </div>

          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='felx flex-col gap-1 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='felx flex-col gap-1 text-gray-600'>
              <li>+91-453-434-3454</li>
              <li>contact@23gmail.com</li>
            </ul>
          </div>

       

      </div>

       <div className='w-full'>
          <hr />
          <p className='py-5 text-sm text-center '>Copyright 2024@BAZAR.com -All Right Reserved</p>
        </div>

    </>
  )
}

export default Footer