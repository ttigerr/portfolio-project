import React from 'react';
import { Link } from "react-scroll"; 
import tiger from "../Assets/tiger.PNG";

const Home = () => {
  return (
    <div name="home"className="h-screen w-full ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-3 md:flex-row">
            <div className="flex flex-col justify-center sm:text-left items-center">
                <h2 className="text-4xl m-2.5 sm:text-7xl font-bold text-white">
                    I'm a Front-End Web & App Developer
                </h2>
                <p className="text-gray-400 py-4 ">
                    I have 4 years of experience in graphics design and web development.
                    Currently, I love to work on web application using technologies like
                    React, Tailwind, Next.js and Mongodb.
                </p>
                <Link to="about" smooth duration={500} 
                        className="text-white w-fit px-7 py-4 my-2 flex text-center rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 cursor-pointer hover:scale-110 duration-500">
                        About Me  
                </Link>
            </div>
            {/* Add some Profile picture */}
            <div className="">
                <img src={tiger} alt="profile picture" className=" mx-auto md:w-full"/>
            </div>
        </div>
  </div>
  );
};
export default Home;