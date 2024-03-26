import React from 'react';
import { Link } from "react-scroll";
import tiger from "../Assets/tiger.jpeg";

const Home = () => {
  return (
    <div name="home" className="h-screen">
        <section className="m-screen mx-auto flex flex-col items-center justify-center h-full md:space-x-[10rem] md:flex-row">
           {/* Left Container */}
           <div className="text-left">
                <img src={tiger} alt="profile" className="rounded-full md:h-80 md:py-5"/>
                <strong className="text-4xl md:text-7xl">
                    Hi Everyone! I'm Tiger
                </strong>
            </div>
            {/* Right Container */}
            <div className="text-left">
                <strong className="text-4xl md:text-7xl text-indigo-500">
                    I'm a Front End Developer
                </strong>
                <p className="text-gray-500 py-4 md:py-10 text-md md:text-1xl">
                    Dedicated Frontend Developer with comprehensive knowledge of using a range of technologies and programming languages, 
                    along with the frameworks for both Website and Mobile Applications as well as adept in designing responsive and user-friendly interfaces, 
                    with meticulous attention to detail, debugging and testing. Proficient in translating UX/Ul Design into readable and reusable code and 
                    maintaining professionalism through effective team collaboration with verbal and written skills.   
                </p>
                <div className="flex flex-row justify-center">
                    <Link to="about" smooth duration={500} 
                            className="text-white w-fit text-md px-4 py-3 md:text-1xl md:px-7 md:py-4 md:my-3 flex text-center rounded-md bg-black cursor-pointer hover:scale-110 duration-500">
                            About Me  
                    </Link>
                    <Link to="about" smooth duration={500} 
                            className="text-black w-fit text-md px-4 py-3 md:px-7 md:text-1xl md:py-4 md:my-3 flex text-center rounded-md bg-white border-solid border-2 cursor-pointer hover:scale-110 duration-500">
                            Keep In Touch  
                    </Link>
                </div>
            </div> 
        </section>
        
  </div>
  );
};
export default Home;