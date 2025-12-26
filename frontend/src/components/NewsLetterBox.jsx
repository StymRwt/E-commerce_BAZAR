import React from 'react'

const NewsLetterBox = () => {

    const onSubmithandler=(e)=>{
        e.preventDefault();
    }

  return (
    <div className='text-center mt-20'>
        <p className='text-2xl font-medium text-gray-700'>Subscribe now & get 20% off</p>
        <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae alias ab non.</p>

        <form 
        onClick={onSubmithandler}
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" />
            <button className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>

        </form>
    </div>
  )
}

export default NewsLetterBox