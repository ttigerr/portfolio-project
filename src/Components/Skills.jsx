import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-black'>
      {/* Container */}
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col py-14'>
              <p className='text-4xl m-2.5 font-bold text-center mb-9 sm:text-7xl'>Skills</p>
              <p className='text-2xl'>Here's a list of technologies I've worked with:</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gradient-to-r from-indigo-600 to-blue-500 duration-500'>
                  <p className='my-4 bg-transparent'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-gradient-to-r from-indigo-600 to-blue-500'>
                  <p className='my-4 bg-transparent'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-gradient-to-r from-indigo-600 to-blue-500'>
                  <p className='my-4 bg-transparent'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-gradient-to-r from-indigo-600 to-blue-500'>
                  <p className='my-4 bg-transparent'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-gradient-to-r from-indigo-600 to-blue-500'>
                  <p className='my-4 bg-transparent'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-gradient-to-r from-indigo-600 to-blue-500'>
                  <p className='my-4 bg-transparent'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-gradient-to-r from-indigo-600 to-blue-500'>
                  <p className='my-4 bg-transparent'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-gradient-to-r from-indigo-600 to-blue-500'>
                  <p className='my-4 bg-transparent'>AWS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-gradient-to-r from-indigo-600 to-blue-500'>
                  <p className='my-4 bg-transparent'>C#</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-gradient-to-r from-indigo-600 to-blue-500'>
                  <p className='my-4 bg-transparent'>OBJECTIVE C</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-gradient-to-r from-indigo-600 to-blue-500'>
                  <p className='my-4 bg-transparent'>ANDRIOD JAVA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-gradient-to-r from-indigo-600 to-blue-500'>
                  <p className='my-4 bg-transparent'>ORACLE SQL</p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;