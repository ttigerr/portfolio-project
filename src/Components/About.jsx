import React from "react";
import graduation from "../Assets/graduation.JPG";

const About = () => { 
  return (
    <div name="about" id="about" className="w-full h-screen text-gray-300">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center w-full h-full">
            <div className="py-14 flex flex-col justify-center items-center ">
                <div>
                    <div className="sm:text-right pb-12 pl-4">
                        <p className="text-3xl m-2.5 sm:text-7xl font-bold from-zinc-700 to-slate-500 ">
                            ABOUT
                        </p>
                    </div>
                </div>
                <div className="mx-3">
                    <div className=" grid sm:grid-cols-2 gap-20 px-4">
                        <div className="sm:text-left text-1xl sm:text-3xl font-bold">
                            <p>
                                Hi. I'm Visanoukan Chalernphon, nice to meet you. Please take a
                                look around.
                            </p>
                        </div>
                        <div className="sm:text-left">
                            <p>
    
                                A software developer with experience in building Responsive and
                                Scalable Web apps. I am well-knowledged in UI/UX principles and
                                practices. In addition to software development, I am also a
                                t is a long established fact that a reader will be distracted by the 
                                readable content of a page when looking at its layout. The point of using 
                                Lorem Ipsum is that it has a more-or-less normal distribution of letters, as 
                                opposed to using 'Content here, content here', making it look like readable English. 
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.

                            </p>
                        </div>
                        <div className="sm:text-left text-3xl font-bold">
                            <img src={graduation} alt="graduation picture" className=" mx-auto md:w-full"/>
                        </div>
                        <div className="sm:text-left">
                            <h1 className="sm:text-2xl font-bold mx">EDUCATION</h1>
                            <p>Bachelor of Information Teachnology, Mobile Application Development</p>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  );
};
export default About;
