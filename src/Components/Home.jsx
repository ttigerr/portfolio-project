import React from 'react';
import tiger from "../Assets/profile.jpg";


const Home = () => {
  return (
    <div name="home" className="h-screen">
        {/* <section className="m-screen flex flex-col items-center h-full justify-between gap-x-20 md:flex-row"> */}
        <section className="m-screen flex flex-col items-center h-full md:flex-row">
           {/* Left Container */}
           <div>
                <img src={tiger} alt="profile" className="rounded-full h-48 my-10"/>
                <strong className="text-4xl md:text-7xl">
                    HI! I'M TIGER -
                </strong>
                <br/>
                <strong className="text-4xl md:text-7xl">
                    FRONT END DEVELOPER
                </strong>
                <p className="py-4 md:py-10 text-3xl">
                    Dedicated Frontend Developer with comprehensive knowledge of using a range of technologies and programming languages, 
                    along with the frameworks for both Website and Mobile Applications as well as adept in designing responsive and user-friendly interfaces, 
                    with meticulous attention to detail, debugging and testing. 
                </p>
                <div className="mb-10 border-[1px] border-gray-400"></div>
                <p className="text-xl">MY SOCIAL :</p>
            </div>
            {/* Right Container */}
            <div className="basis-6/12">
                <p className="text-xl">( 001 )</p>
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