import React from 'react';
import { Link } from "react-scroll"; 
import tiger from "../Assets/tiger.PNG";

const Home = () => {
  return (
    <div name="home"className="h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 md:flex-row">
            <div className="flex flex-col justify-center sm:text-left items-center">
                <h2 className="text-4xl m-2.5 sm:text-7xl font-bold text-[#192a53]">
                    Hi Everyone! I'm Tiger. Welcome to my page
                </h2>
                <p className="text-[#192a53] py-4 ">
                    Detail-oriented Front-end developer with comprehensive knowledge of using a range of technologies and 
                    programming languages, along with the frameworks as well as
                     adept in designing responsive and user-friendly interfaces, with meticulous attention to detail, debugging 
                     and testing.
                </p>
                <Link to="about" smooth duration={500} 
                        className="text-white w-fit px-7 py-4 my-2 flex text-center rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 cursor-pointer hover:scale-110 duration-500">
                        About Me  
                </Link>
            </div>
            {/* Add some Profile picture */}
            <div className="">
                <img src={tiger} alt="profile picture" className="md:w-full md:py-4"/>
            </div>
        </div>
  </div>
  );
};
export default Home;