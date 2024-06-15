import React from 'react';
import tiger from "../Assets/profile.jpg";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen">
        {/* <section className="m-screen flex flex-col items-center h-full justify-between gap-x-20 md:flex-row"> */}
        <section className="m-screen flex flex-col justify-center h-full">
           {/* Top Container */}
           <div>
                <img src={tiger} alt="profile" className="rounded-full h-48 my-10"/>
                <strong className="text-4xl md:text-7xl">
                    HI! I'M TIGER -
                </strong>
                <br/>
                <strong className="text-4xl md:text-7xl text-gray-500">
                    FRONT END DEVELOPER
                </strong>
                
            </div>
            {/* Bottom Container */}
            <div className="flex items-center my-10">
                <ul>
                    <li className="p-5 px-10 bg-black text-white rounded-full border-[1px] border-black">
                        <Link to='contact' smooth={true} duration={700}>
                            CONNECT
                        </Link>
                    </li>
                </ul>
                <div>
                    <p className="ml-60 text-3xl">
                        Productive Front End Developer with a comprehensive understanding of using a wide range of technologies and programming languages along with frameworks and 
                        libraries. Proficiency in responsive design and a solid foundation of the software development processes, with a focus on delivering high-quality solutions. 
                        
                    </p>
                </div>
                {/* <div className="mb-10 border-[1px] border-gray-400"></div> */}
                {/* <div className="flex flex-row justify-center gap-x-20">
                    <Link to="about" smooth duration={500} 
                            className="text-white w-fit text-md px-4 py-3 md:text-1xl md:px-7 md:py-4 md:my-3 flex text-center rounded-md bg-black cursor-pointer hover:scale-110 duration-500">
                            About Me  
                    </Link>
                    <Link to="about" smooth duration={500} 
                            className="text-black w-fit text-md px-4 py-3 md:px-7 md:text-1xl md:py-4 md:my-3 flex text-center rounded-md bg-white border-solid border-2 cursor-pointer hover:scale-110 duration-500">
                            Keep In Touch  
                    </Link>
                </div> */}
            </div> 
        </section>
  </div>
  );
};
export default Home;