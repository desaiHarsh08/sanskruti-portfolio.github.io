import React from 'react'

export default function Contact() {
  return (
    <>
        <div name='contact' className='contact pt-20'>
            <h2 className='font-medium text-3xl text-center'>Contact me</h2>


            <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1> */}
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
      <form action='https://script.google.com/macros/s/AKfycbyvlddrE6PRsBXDJE3OgC82OOJTHFTyra6Fg3e__wKNg6WTxV71b-yH8Viztu-8vylmYw/exec' method='POST' className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
              </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
          </div>
      
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
            </div>
           </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Submit</button>
          </div>
        </form>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <span className="text-pink-500">sanskrutisakharkar678@gmail.com</span>
          <p className="leading-normal my-5">49 Smith St.
            <br />Saint Cloud, MN 56301
          </p>
          {/* <span className="inline-flex">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span> */}
          <div className='flex justify-center'>
          <ul className="social-media text-center flex justify-center md:justify-start items-center space-x-4 mt-7 sm:mt-0">
              <li className="py-5 sm:py-0 h-[50px]"><a href="/" target={"_blank"} rel="noreferrer"><i className="fa-brands fa-facebook text-xl pr-3 py-1 text-blue-600 hover:text-blue-500 "></i></a>
              </li>
              <li className="py-5 sm:py-0 h-[50px]"><a href="https://wa.me/919067060512" target="_blank" rel="noreferrer"><i
                    className="fa-brands fa-whatsapp text-xl px-2 py-1 text-green-600 hover:text-green-500"></i></a>
              </li>
              <li className="py-5 sm:py-0 h-[50px] "><a target="_blank" rel="noreferrer" href="https://www.instagram.com/_sakharkar__sanskruti_/"><i
                    className="fa-brands fa-instagram text-xl px-2 py-1 text-red-600 hover:text-red-300"></i></a></li>
              <li className="py-5 sm:py-0 h-[50px] hover:text-slate-500"><a href="/" target="_blank" rel="noreferrer"><i
                    className="fa-brands fa-github text-xl px-2 py-1 "></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        </div>
    </>
  )
}
