import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from "../Assets/logo.png";


const Header = () => {

  // function for the mobile menu
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="">
      <nav className='w-full fixed h-[70px] sm:h-[100px] flex justify-between px-3 sm:px-10 items-center bg-white'>
        <Link to='home' smooth={true} duration={700}>
          <img src={logo} alt="logo picture" className="h-[30px] sm:h-[50px]" />
        </Link>
        <div>
          <ul className='hidden md:flex gap-x-20'>
              <li>
                <Link to='home' smooth={true} duration={700}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='about' smooth={true} duration={700}>
                  About
                </Link>
              </li>
              <li>
                <Link to='work' smooth={true} duration={700}>
                  Works
                </Link>
              </li>
              <li>
                <Link to='contact' smooth={true} duration={700}>
                  Contact
                </Link>
              </li>
          </ul>
        </div>
        {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-3xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={700}>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={700}>
            About
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={700}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={700}>
            Work
          </Link>
        </li>
        <li className='py-6 text-3xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={700}>
            Contact
          </Link>
        </li>
      </ul>
      </nav>
    </header>
    // <header className='max-w-screen-lg mx-auto fixed w-full h-[100px] flex justify-between items-center px-14 text-black'>
    //   <div>
    //     <img src={logo} alt="logo picture" className="h-[100px] md:w-full md:py-4"/>
    //   </div>
    //   <nav>
    //     <ul className='hidden md:flex gap-x-10'>
    //         <li>
    //           <Link to='home' smooth={true} duration={500}>
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to='about' smooth={true} duration={500}>
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to='work' smooth={true} duration={500}>
    //             Works
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to='contact' smooth={true} duration={500}>
    //             Contact
    //           </Link>
    //         </li>
    //     </ul>
    //   </nav>
    //   {/* Hamburger */}
    //   <div onClick={handleClick} className='md:hidden z-10'>
    //     {!nav ? <FaBars /> : <FaTimes />}
    //   </div>
    //   {/* Mobile menu */}
    //   <ul
    //     className={
    //       !nav
    //         ? 'hidden'
    //         : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'
    //     }
    //   >
    //     <li className='py-6 text-4xl'>
    //       <Link onClick={handleClick} to='home' smooth={true} duration={500}>
    //         HOME
    //       </Link>
    //     </li>
    //     <li className='py-6 text-4xl'>
    //       {' '}
    //       <Link onClick={handleClick} to='about' smooth={true} duration={500}>
    //         ABOUT
    //       </Link>
    //     </li>
    //     <li className='py-6 text-4xl'>
    //       {' '}
    //       <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
    //         SKILLS
    //       </Link>
    //     </li>
    //     <li className='py-6 text-4xl'>
    //       {' '}
    //       <Link onClick={handleClick} to='work' smooth={true} duration={500}>
    //         WORK
    //       </Link>
    //     </li>
    //     <li className='py-6 text-4xl'>
    //       {' '}
    //       <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
    //         CONTACT
    //       </Link>
    //     </li>
    //   </ul>
    // </header>
  );
};
export default Header;
