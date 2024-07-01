import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-black'>
        <div className="m-screen flex flex-col justify-center h-full">
            {/* Top container */}
            <div className="">
                <strong className="text-xl md:text-3xl">
                    SKILLS.
                </strong>
                <br/>
                <strong className="text-2xl md:text-7xl ">
                    AREA OF <br/> EXPERTISES 
                </strong>
            </div>
            {/* Bottom container */}
            <div className="flex flex-col">
                {/* Underline */}
                <div className="my-10 border-[0.5px] border-gray-400"/>
                {/* First container */}
                <div className="flex flex-row">
                    <p>01.</p>
                    <div className="basis-1/2">
                        <strong className="text-xl md:text-3xl ml-20">
                            TOOLS AND LANGUAGES
                        </strong>
                    </div>
                    <div className="basis-1/2">
                        <p>
                            Visual Studio Code, Xcode, Android Studio, Brackets, Github, HTML, CSS, JavaScript, JSON, Objective C, 
                            Swift, Java, C#, C++, WordPress, Figma, Adobe XD, Photoshop, Illustrator.
                        </p>
                    </div>
                </div>
                <div className="my-10 border-[0.5px] border-gray-400"/>
                {/* Second container */}
                <div className="flex flex-row">
                    <p>02.</p>
                    <div className="basis-1/2">
                        <strong className="text-xl md:text-3xl ml-20">
                            FRAMEWORKS AND SERVICES
                        </strong>
                    </div>
                    <div className="basis-1/2">
                        <p>
                            React.js, React Native, Next.js, Node.js, SwiftUI, ASP. NET, npm, Bootstrap, Tailwindcss.
                        </p>
                    </div>
                </div>
                {/* Third container */}
                <div className="my-10 border-[0.5px] border-gray-400"/>
                <div className="flex flex-row">
                    <p>03.</p>
                    <div className="basis-1/2">
                        <strong className="text-xl md:text-3xl ml-20">
                            DATABSES
                        </strong>
                    </div>
                    <div className="basis-1/2">
                        <p>
                            MongoDB, MySQL, MS SQL, Firebase.
                        </p>
                    </div>    
                </div>
                <div className="mt-10 border-[0.5px] border-gray-400"/>    
            </div> 
        </div>
    </div>
  );
};
export default Skills;