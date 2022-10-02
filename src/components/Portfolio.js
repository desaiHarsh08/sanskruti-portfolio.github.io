import React from 'react'
import project1 from '../img/project-1.png'
import project2 from '../img/project-2.jpg'
import project3 from '../img/project-3.jpg'

export default function Portfolio() {
  return (
    <>
        <div name='portfolio' className='portfolio py-20 border-b-2'>
            <h2 className='font-medium text-3xl text-center'>Portfolio</h2>
            <div className='py-10 flex flex-col gap-8 md:gap-0 md:flex-row justify-evenly items-center '>
              <div className='card-1 flex flex-col justify-center items-center w-[89%] md:w-[30%] md:h-[60%] border border-purple-900 '>
                <div>
                  <img src={project1} className='h-24 my-2 border border-black' alt='project-1' />
                </div>
                <div>
                  <h3 className='text-xl text-center font-medium my-2'>Lorem ipsum dolor.</h3>
                  <p className='text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus vero ea deleniti corrupti qui,
                  </p>
                  <div className='btns flex justify-center my-2'>
                    <button className='mr-2 px-4 py-2 border border-transparent rounded-md text-white bg-slate-800 hover:bg-slate-900'>
                      <a href='/'>
                        <i class="fa-brands fa-github mr-1"></i>
                        Source code
                      </a>
                    </button>
                    <button className='px-4 py-2 border border-transparent rounded-md text-white bg-red-500 hover:bg-red-700'>
                      <a href='/'>
                        Live demo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className='card-2 flex flex-col justify-center items-center w-[89%] md:w-[30%] md:h-[60%] border border-purple-900 '>
                <div>
                  <img src={project2} className='h-24 my-2 border border-black' alt='project-1' />
                </div>
                <div>
                  <h3 className='text-xl text-center font-medium my-2'>Lorem ipsum dolor.</h3>
                  <p className='text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus vero ea deleniti corrupti qui,
                  </p>
                  <div className='btns flex justify-center my-2'>
                    <button className='mr-2 px-4 py-2 border border-transparent rounded-md text-white bg-slate-800 hover:bg-slate-900'>
                      <a href='/'>
                        <i class="fa-brands fa-github mr-1"></i>
                        Source code
                      </a>
                    </button>
                    <button className='px-4 py-2 border border-transparent rounded-md text-white bg-red-500 hover:bg-red-700'>
                      <a href='/'>
                        Live demo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className='card-3 flex flex-col justify-center items-center w-[89%] md:w-[30%] md:h-[60%] border border-purple-900 '>
                <div>
                  <img src={project3} className='h-24 my-2 border border-black' alt='project-1' />
                </div>
                <div>
                  <h3 className='text-xl text-center font-medium my-2'>Lorem ipsum dolor.</h3>
                  <p className='text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus vero ea deleniti corrupti qui,
                  </p>
                  <div className='btns flex justify-center my-2'>
                    <button className='mr-2 px-4 py-2 border border-transparent rounded-md text-white bg-slate-800 hover:bg-slate-900'>
                      <a href='/'>
                        <i class="fa-brands fa-github mr-1"></i>
                        Source code
                      </a>
                    </button>
                    <button className='px-4 py-2 border border-transparent rounded-md text-white bg-red-500 hover:bg-red-700'>
                      <a href='/'>
                        Live demo
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
