import React from "react";
import graduation from "../Assets/graduation.JPG";

const About = () => { 
  return (
    <div name="about" id="about" className="w-full h-screen">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center w-full h-full">
            <div className="py-14 flex flex-col justify-center items-center ">
                <div>
                    <div className="sm:text-right pb-12 pl-4">
                        <p className="text-3xl m-2.5 sm:text-7xl font-bold ">
                            ABOUT
                        </p>
                    </div>
                </div>
                {/* Container */}
                <div className=" grid sm:grid-cols-2 gap-20 px-4">
                        {/* Container 1 */}
                        <div className="sm:text-left text-3xl font-bold">
                            <img src={graduation} alt="graduation picture" className=" mx-auto md:w-full"/>
                        </div>
                        {/* Container 2 */}
                        <div className="sm:text-left text-center text-gray-400">
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
        </div>
    </div>
  );
};
export default About;
