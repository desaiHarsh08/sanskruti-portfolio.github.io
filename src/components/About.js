import React from 'react'
import aboutImg from '../img/about-image.jpg'

export default function About() {
  return (
    <>
        <div name='about' className='about py-20 border-b-2'>
            <h2 className='font-medium text-3xl text-center mb-10'>About me</h2>

            <div className='flex justify-center items-center gap-8 flex-col md:flex-row mx-2 '>
              <div className='part-1 w-[89%] md:w-[15%] flex justify-center md:justify-end items-center'>
                <img src={aboutImg} className='h-36 md:h-auto' alt='aboutImage' />
              </div>
              <div className='part-2 w-[89%] md:w-[45%] flex justify-center '>
                <p className='text-justify w-full text-xs'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos architecto odit molestiae quod quam labore quaerat corrupti, quidem quo autem. Voluptates consequatur expedita, sit enim aliquid amet? Vero ad voluptatibus explicabo temporibus repellat sint accusantiume. 
                  <br /><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos architecto odit molestiae quod quam labore. 
                  <br /><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos architecto odit molestiae quod quam labore quaerat corrupti, quidem quo autem. Voluptates consequatur. 
                  
                </p>
              </div>
            </div>
        </div>
    
    </>
  )
}
