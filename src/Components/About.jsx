import React from "react";
import graduation from "../Assets/graduation.JPG";

const About = () => { 
  return (
    <div name="about" id="about" className="h-screen bg-[#FAFAFA]">
        <div className="m-screen flex flex-col justify-center h-full">
            <div className="py-14 flex flex-col justify-center items-center ">
                <div>
                    <div className="pb-20">
                        <strong className="text-4xl md:text-7xl">
                            About
                        </strong>
                    </div>
                </div>
                {/* Container */}
                <div className="grid items-center md:grid-cols-2 gap-10 md:gap-20 md:py-3">
                        {/* Left container*/}
                        <img src={graduation} alt="graduation" className=" mx-auto md:w-full"/>
                        {/* Right container */}
                        <div className="text-left md:text-md">
                            <strong className="text-2xl md:text-4xl ">
                                Professional Summary <br/>
                            </strong>
                            <br/>
                            {/* <p>
                                My name is Tiger. I'm a Front-end developer in both Website and Mobile Application. based in Sydney.
                                I graduated from the Academy of Interactive Technology with a Bachelor of Information Technology specializing in Mobile Application Development in October 2022.
                            </p>
                            
                            <p>
                             My training and practical experience have equipped me with a strong foundation of knowledge and skills. I am proficient in programming languages such as JavaScript, 
                            Objective C, Java, C++, C#, HTML5, and CSS3, as well as with frameworks including React JS, React Native, Node JS, ASP.Net, Bootstrap and Tailwind CSS. Furthermore, I am adept in Database technologies MongoDB, Firebase and MySQL.
                            </p> */}
                            <p>
                                Dedicated Frontend Developer with comprehensive knowledge of using a range of technologies and programming languages, 
                                along with the frameworks for both Website and Mobile Applications as well as adept in designing responsive and user-friendly interfaces, 
                                with meticulous attention to detail, debugging and testing. Proficient in translating UX/Ul Design into readable and reusable code and 
                                maintaining professionalism through effective team collaboration with verbal and written skills.
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
