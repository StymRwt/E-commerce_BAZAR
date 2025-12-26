import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'



const Home = () => {
  return (
    <>
     
    <Hero/>
<LatestCollection/>
<BestSellers/>
<OurPolicy/>
<NewsLetterBox/>
     
    </>
  )
}

export default Home