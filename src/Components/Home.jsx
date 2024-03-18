import React from 'react';
import { Link } from "react-scroll"; 
import tiger from "../Assets/tiger.jpeg";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 md:px-10 md:space-x-20 md:flex-row">
            <div className="text-left items-center">
                <img src={tiger} alt="profile picture" className="rounded-full h-40 md:h-80 md:py-5"/>
                <h2 className="text-4xl md:text-7xl font-bold pt-3">
                    Hi Everyone! I'm Tiger
                </h2>
            </div>
            <div className="text-left">
                <h2 className="text-4xl md:text-7xl font-bold text-indigo-500">
                    I'm a Front End Developer
                </h2>
                <p className="text-gray-500 text-80px py-4 md:py-10 md:text-1xl">
                    Dedicated Frontend Developer with comprehensive knowledge of using a range of technologies and programming languages, along with the frameworks for both Website and Mobile Applications as well as adept in designing responsive and user-friendly interfaces, with meticulous attention to detail, debugging and testing. Proficient in translating UX/Ul Design into readable and reusable code and maintaining professionalism through effective team collaboration with verbal and written skills. 
                    
                </p>
                <div className="flex flex-row justify-center space-x-10 md:space-x-10">
                    <Link to="about" smooth duration={500} 
                            className="text-white w-fit px-7 py-4 my-2 flex text-center rounded-md bg-black cursor-pointer hover:scale-110 duration-500">
                            About Me  
                    </Link>
                    <Link to="about" smooth duration={500} 
                            className="text-black w-fit px-7 py-4 my-2 flex text-center rounded-md bg-white border-solid border-2 cursor-pointer hover:scale-110 duration-500">
                            Keep In Touch  
                    </Link>
                </div>
            </div>
        </div>
  </div>
  );
};
export default Home;