import React from 'react'

export default function Skills() {

    const handleSkills = () =>{
        const skillsTab = document.getElementById('skills-tab');
      const experienceTab = document.getElementById('experience-tab');
      const educationTab = document.getElementById('education-tab');
      const skillsContent = document.getElementById('skills');
      const educationContent = document.getElementById('education');
      const experienceContent = document.getElementById('experience');
  
  
        skillsTab.classList.add('border-b-purple-600');
        skillsContent.classList.remove('hidden');
  
        experienceTab.classList.remove('border-b-purple-600');
        experienceContent.classList.add('hidden');
        educationTab.classList.remove('border-b-purple-600');
        educationContent.classList.add('hidden');
      }
      const handleExperience = () =>{
  
        const skillsTab = document.getElementById('skills-tab');
        const experienceTab = document.getElementById('experience-tab');
        const educationTab = document.getElementById('education-tab');
        const skillsContent = document.getElementById('skills');
        const educationContent = document.getElementById('education');
        const experienceContent = document.getElementById('experience');
  
  
        skillsTab.classList.remove('border-b-purple-600');
        skillsContent.classList.add('hidden');
  
        experienceTab.classList.add('border-b-purple-600');
        experienceContent.classList.remove('hidden');
        experienceContent.classList.add('block');
  
        educationTab.classList.remove('border-b-purple-600');
        educationContent.classList.add('hidden');
      }
      const handleEducation = () =>{
  
        const skillsTab = document.getElementById('skills-tab');
        const experienceTab = document.getElementById('experience-tab');
        const educationTab = document.getElementById('education-tab');
        const skillsContent = document.getElementById('skills');
        const experienceContent = document.getElementById('experience');
        const educationContent = document.getElementById('education');
  
  
  
  
        skillsTab.classList.remove('border-b-purple-600');
        skillsContent.classList.add('hidden');
  
        experienceTab.classList.remove('border-b-purple-600');
        experienceContent.classList.add('hidden');
  
        educationTab.classList.add('border-b-purple-600');
        educationContent.classList.remove('hidden');
      }

  return (
    <>
        <div name='skills-section' className='skills-section py-20 border-b-2'>
            <h2 className='font-medium text-3xl text-center mb-10'>My Skills</h2>


            <div className="my-4 mx-2 md:mx-10">
                <div className="tab-titles flex md:justify-start justify-center gap-4">
                  <p className="w-1/3 flex justify-center tab-links border-4 border-transparent rounded-md border-b-purple-600 active-link  md:mr-12 text-lg cursor-pointer text-red-500 font-bold  "
                    onClick={handleSkills} id="skills-tab">Skills</p>
                  <p className="w-1/3 flex justify-center tab-links  md:mr-12 text-lg cursor-pointer border-4 border-transparent rounded-md text-red-500 font-bold" onClick={handleEducation} id="education-tab">Education</p>
                  <p className="w-1/3 flex justify-center tab-links  md:mr-12 text-lg cursor-pointer border-4 border-transparent rounded-md text-red-500 font-bold"
                    onClick={handleExperience} id="experience-tab">Experience</p>
                </div>
                <div className="tab-contents my-4 min-h-[300px]">
                  <div className=" skills-content " id="skills">
                    <ul id="skills-list">
                      <li className="text-red-600 my-2">
                        <span>HTML</span>
                        <div className="flex items-center w-full h-4 rounded-md  bg-slate-600">
                          <div className="h-full w-[87%] rounded-md bg-purple-600"></div>
                          <span className="text-white">87%</span>
                        </div>
                      </li>
                      <li className="text-red-600 my-2">
                        <span>CSS</span>
                        <div className="flex items-center w-full h-4 rounded-md  bg-slate-600">
                          <div className="h-full w-[61%] rounded-md bg-purple-600"></div>
                          <span className="text-white">61%</span>
                        </div>
                      </li>
                      <li className="text-red-600 my-2">
                        <span>JavaScript</span>
                        <div className="flex items-center w-full h-4 rounded-md  bg-slate-600">
                          <div className="h-full w-[75%] rounded-md bg-purple-600"></div>
                          <span className="text-white">75%</span>
                        </div>
                      </li>
                      <li className="text-red-600 my-2">
                        <span>C</span>
                        <div className="flex items-center w-full h-4 rounded-md  bg-slate-600">
                          <div className="h-full w-[89%] rounded-md bg-purple-600"></div>
                          <span className="text-white">89%</span>
                        </div>
                      </li>
                      <li className="text-red-600 my-2">
                        <span>Java(Core)</span>
                        <div className="flex items-center w-full h-4 rounded-md  bg-slate-600">
                          <div className="h-full w-[89%] rounded-md bg-purple-600"></div>
                          <span className="text-white">87%</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden education-content" id="education">
                    <table className='border-2 border-red-200 w-full'>
                      <thead>
                        <tr className='text-center border'>
                          <th className='border-2 text-purple-500 border-purple-600'>Sr.No</th>
                          <th className='border-2 text-purple-500 border-purple-600'>Qualification</th>
                          <th className='border-2 text-purple-500 border-purple-600'>Result</th>
                          <th className='border-2 text-purple-500 border-purple-600'>Year</th>
                          <th className='border-2 text-purple-500 border-purple-600'>Board</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='text-center'>
                          {/* <td className='border-2 border-blue-300'></td>
                          <td className='border-2 border-blue-300'>10th</td>
                          <td className='border-2 border-blue-300'>85.60%</td>
                          <td className='border-2 border-blue-300'>2017</td>
                          <td className='border-2 border-blue-300'>C.B.S.E</td> */}
                        </tr>
                        <tr className='text-center'>
                          {/* <td className='border-2 border-blue-300'>2.</td>
                          <td className='border-2 border-blue-300'>12th</td>
                          <td className='border-2 border-blue-300'>84.00%</td>
                          <td className='border-2 border-blue-300'>2019</td>
                          <td className='border-2 border-blue-300'>C.B.S.E</td> */}
                        </tr>
                      </tbody>
                    </table>


                    
                  </div>
                  <div className="hidden experience-content" id="experience">
                    Experience
                  </div>
                </div>
              </div>
              <button
                className="px-3 mx-2 sm:px-4 py-3 border border-transparent bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                  <a href={require('../TestFileDownload.docx')} download>
                    Download CV
                  </a>
                </button>
        </div>
    </>
  )
}
