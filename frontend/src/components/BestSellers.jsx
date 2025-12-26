import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const BestSellers = () => {

const {products}=useContext(ShopContext);
const[bestSeller,setBestSeller]=useState([]);

useEffect(()=>{
    const bestProduct=products.filter((item)=>(item.bestseller));
    setBestSeller(bestProduct.slice(0,5));
},[products]);



  return (
    <div className='my-15'>
        <div className='text-center text-3xl'>
            <Title text1={'BEST'} text2={'SELLERS _____'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit natus pariatur volup.
            </p>
        </div>

        <div className='gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 my-5 '>
            {
                bestSeller.map((item,index)=>(
                    
                 <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>   
                ))
            }
        </div>
        

    </div>
  )
}

export default BestSellers