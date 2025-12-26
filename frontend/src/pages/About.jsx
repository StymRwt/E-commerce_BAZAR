import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className='mx-5'>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US ____'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img  className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6  md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis esse numquam sit ducimus, accusamus
             dignissimos, dicta quos soluta impedit, veritatis tempore. Tempora, debitis nisi. Officiis reprehenderit
             mollitia libero quaerat! Eum molestiae veniam reprehenderit culpa. Neque velit eveniet officiis magnam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe tempore nihil eos sed. Voluptates
             quae, saepe debitis ducimus placeat labore et obcaecati nam quia! Et atque voluptatibus assumenda illo
              rem dolorum quae, minima nobis, facere adipisci recusandae
             molestias. Nihil iusto ipsam odit natus magnam perspiciatis pariatur, repudiandae dicta laudantium.
            </p>
            <b className='text-gray-800'>OUR MISSION</b>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur sunt accusamus distinctio corrupti, optio est aperiam numquam veritatis consectetur incidunt ullam cumque fugiat quas voluptatibus iure? Eligendi
             libero dolorum quos! Repellendus possimus blanditiis animi explicabo. Quas exercitationem dolor sint!
            </p>
          </div>
      </div>


      <div className='text-4xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US ___'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>QUALITY ASSURANCE :</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi recusandae, iure facere unde suscipit, quos quo, sunt praesentium 
            consectetur aliquam totam exercitationem mollitia corporis accusamus temporibus. Reiciendis, impedit nulla?
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>CONVENIENCE:</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi recusandae, iure facere unde suscipit, quos quo, sunt praesentium 
            consectetur aliquam totam exercitationem mollitia corporis accusamus temporibus. Reiciendis, impedit nulla?
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customor Service :</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi recusandae, iure facere unde suscipit, quos quo, sunt praesentium 
            consectetur aliquam totam exercitationem mollitia corporis accusamus temporibus. Reiciendis, impedit nulla?
          </p>
        </div>
      </div>


      <NewsLetterBox/>
      
    </div>
  )
}

export default About