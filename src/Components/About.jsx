import React from "react";

const About = () => { 
  return (
    <div name="about" id="about" className="h-screen bg-[#FAFAFA]">
        <div className="m-screen flex flex-col justify-center items-center h-full">
            {/* First Container "About" title */}
            <div className="pb-20">
                <strong className="text-4xl md:text-7xl">
                    About
                </strong>
            </div>
            {/* Second container for the content */}
            <div className="flex flex-row justify-center items-center gap-5">
                <div className="basis-6/12">
                    <strong className="text-2xl md:text-4xl ">
                        Hey there! <br/>
                    </strong>
                    <br/>
                    <p>
                        My name is Tiger. I'm a Front-end developer in both Website and Mobile Application. based in Sydney.
                        I graduated from the Academy of Interactive Technology with a Bachelor of Information Technology specializing in Mobile Application Development in October 2022.
                    </p>
                </div>
                <div className="basis-6/12">
                    <strong className="text-2xl md:text-4xl ">
                        Working Experince
                    </strong>
                    {/* Working experience containers */}  
                    <div className="flex flex-col">
                        <div className="bg-white my-10">
                            <p>SHORTSTOP</p>
                            <br/>
                            <p>Digital Content Manager</p>
                        </div>
                        <div className="bg-white">
                            <p>INTELLIGENCE PROFIT SOLUTIONS</p>
                            <br/>
                            <p>Digital Content Manager</p>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    </div>
  );
};
export default About;
