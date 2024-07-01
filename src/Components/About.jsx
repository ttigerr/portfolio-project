import React from "react";

const About = () => { 
  return (
    <div name="about" id="about" className="h-screen bg-[#FAFAFA]">
        <div className="m-screen flex flex-col justify-center h-full">
            {/* Top container */}
            <div className="flex flex-row mb-20">
                <div className="basis-6/12">
                    <strong className="text-xl md:text-3xl">
                        ABOUT ME.
                    </strong>
                </div>
                <div className="basis-6/12">
                    <strong className="text-xl md:text-3xl">
                    "I graduated from the Academy of Interactive Technology with a Bachelor of Information Technology specializing in Mobile Application Development " 
                    </strong>
                </div>
            </div>
            {/* Bottom container */}
            <div className="flex flex-row gap-5">
                <div className="basis-6/12">
                    <strong className="text-2xl md:text-7xl ">
                        RELEVANT <br/> EXPERIENCE 
                    </strong>
                </div>
                <div className="basis-6/12">

                    {/* Working experience containers */}  
                    <div className="flex flex-col">
                        <div>
                            <strong className="text-xl md:text-3xl">
                                SHORTSTOP
                            </strong>
                            <br/>
                            <br/>
                            <div className="flex flex-row justify-between">
                                <strong className="text-xl md:text-xl">
                                    DIGITAL CONTENT MANAGER
                                </strong>
                                <strong className="text-xl md:text-xl">
                                    SEP 2023 - PRESENT
                                </strong>
                            </div>
                            <br/>
                            <p>
                                My name is Tiger. I'm a Front-end developer in both Website and Mobile Application. based in Sydney.
                                I graduated from the Academy of Interactive Technology with a Bachelor of Information Technology.
                            </p>
                        </div>
                        <div className="my-10 border-[0.5px] border-gray-400"></div>
                        <div>
                            <strong className="text-xl md:text-3xl">
                                INTELLIGENT PROFIT SOLUTIONS
                            </strong>
                            <br/>
                            <br/>
                            <div className="flex flex-row justify-between">
                                <strong className="text-xl md:text-xl">
                                    UX / UI DESIGNER
                                </strong>
                                <strong className="text-xl md:text-xl">
                                    APR 2022 - DEC 2022
                                </strong>
                            </div>
                            <br/>
                            <p>
                                My name is Tiger. I'm a Front-end developer in both Website and Mobile Application. based in Sydney.
                                I graduated from the Academy of Interactive Technology with a Bachelor of Information Technology
                            </p>
                        </div>
                    </div>               
                </div>
            </div>
        </div>
    </div>
  );
};
export default About;
