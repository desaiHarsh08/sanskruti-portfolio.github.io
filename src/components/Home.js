import React from 'react'
import homeImg from '../img/home-image.jpg'
import { Link } from "react-scroll";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {

    // Create Ref element.
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Sanskruti S. Sakharkar"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1200,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div name='home' className='home border-b-2 flex justify-center items-center ' >
        <div className='flex gap-6 flex-col  md:flex-row justify-center items-center py-20 '>
            <div className='part-1 flex justify-center md:justify-end md:w-[30%] items-center '>
                <img src={homeImg} className='border-2 border-purple-400 rounded-full h-20 sm:h-36 ' alt='myImage' />
            </div>
            <div className='part-2 px-4 w-[100%] text-center md:text-left md:w-[60%]  '>
                <span className='text-lg sm:text-xl font-semibold block '>Hi There 😉</span>
                <div className='flex flex-col md:flex-row space-x-2'>
                    <span className='text-xl sm:text-2xl font-semibold md:my-1 '>I'm</span>
                    <h1 className='text-xl text-red-500 sm:text-2xl font-semibold md:my-1'><span className='text-purple-500' ref={el}></span></h1>
                </div>
                <p className='my-4 text-xs sm:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus vero ea deleniti corrupti qui, officia ut nostrum harum fugit ducimus doloremque.
                </p>
                <div className='social-icons flex items-center justify-center md:justify-start space-x-3 my-4 md:my-8 flex-col md:flex-row '>
                    <span className='underline underline-offset-8 py-2 underline-blue-500 text-red-400'>Let's connect us &rArr;  </span>
                    <ul className='flex space-x-3'>
                        <li className='cursor-pointer transition-all text-blue-400 hover:scale-125 px-1 border border-transparent  hover:rounded-full hover:bg-blue-500 hover:text-white ' >
                            <i class="fa-brands fa-facebook"></i>
                        </li>
                        <li className='cursor-pointer transition-all text-green-500 hover:scale-125 px-1 border border-transparent  hover:rounded-full hover:bg-green-500 hover:text-white '>
                            <a href="https://wa.me/919067060512" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                        <li className='cursor-pointer transition-all text-red-500 hover:scale-125 px-1 border border-transparent  hover:rounded-full hover:bg-red-500 hover:text-white '>
                            <a href="https://www.instagram.com/_sakharkar__sanskruti_/" target="_blank" rel="noreferrer">
                              <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li className='cursor-pointer transition-all hover:scale-125 px-1 border border-transparent  hover:rounded-full hover:bg-black hover:text-white '>
                            <i class="fa-brands fa-github"></i>
                        </li>
                        
                    </ul>
                </div>
                <div className='btns flex justify-center md:justify-start gap-2'>
                        <button className='block px-4 py-2 border border-transparent text-white bg-blue-700 rounded-md hover:bg-blue-800 text-xs font-medium sm:text-base'>
                        <a href={require('../TestFileDownload.docx')} download>
                    
                            <span>Download CV</span>
                            <i class="fa-sharp fa-solid fa-download ml-2"></i>
                            </a>
                        </button>
                        <button className='block px-4 py-2 border border-transparent text-white bg-orange-500 rounded-md hover:bg-orange-600 text-xs font-medium sm:text-base '>
                            <Link to={"contact"} smooth duration={500}>
                              <span>Contact me</span>
                              <i class="fa-solid fa-phone-flip ml-2"></i>  
                            </Link>
                        </button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
