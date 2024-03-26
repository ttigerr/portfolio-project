import React from "react";
import graduation from "../Assets/graduation.JPG";

const About = () => { 
  return (
    <div name="about" id="about" className="h-screen bg-[#FAFAFA] p-3">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full">
            <div className="py-14 flex flex-col justify-center items-center ">
                <div>
                    <div className="pb-12 pl-4">
                        <strong className="text-4xl md:text-7xl">
                            About
                        </strong>
                    </div>
                </div>
                {/* Container */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-20 md:py-3">
                        {/* Left container*/}
                        <img src={graduation} alt="graduation" className=" mx-auto md:w-full"/>
                        {/* Right container */}
                        <div className="text-left md:text-md text-gray-500">
                            <p>
                                My name is Tiger. I'm a Front-end developer in both Website and Mobile Application. based in Sydney.
                                I graduated from the Academy of Interactive Technology with a Bachelor of Information Technology specializing in Mobile Application Development in October 2022.
                            </p>
                            
                            <p>
                             My training and practical experience have equipped me with a strong foundation of knowledge and skills. I am proficient in programming languages such as JavaScript, 
                            Objective C, Java, C++, C#, HTML5, and CSS3, as well as with frameworks including React JS, React Native, Node JS, ASP.Net, Bootstrap and Tailwind CSS. Furthermore, I am adept in Database technologies MongoDB, Firebase and MySQL.
                            </p>
                        </div>    
                </div>  
            </div>
            {/* Professional experience's content */}
            {/* <Box >
                <strong className="text-2xl md:text-5xl">Professinal Experience</strong>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-20 py-6'>
                    <div className='hover:scale-110 hover:bg-white duration-500'>
                        <div className='flex flex-column md:flex-row my-4 bg-white rounded-md bg-white border-solid border-2'>
                            <div className="text-left">
                                <strong>Shortstop Coffee & Donuts</strong>
                                <strong>Digital Content Manager</strong>
                            </div>
                            <div>
                                <p>2023 - Present</p>
                            </div>
                        </div>
                    </div>
                    <div className='hover:scale-110 hover:bg-white duration-500'>
                        <div className='my-4 bg-white rounded-md bg-white border-solid border-2'>

                        </div>
                    </div>
                </div>
            </Box> */}
        </div>
    </div>
  );
};
export default About;
