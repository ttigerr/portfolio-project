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
    <header className="l-header">
      {/* <nav className='w-full fixed h-[70px] sm:h-[100px] flex justify-between px-3 sm:px-10 items-center bg-white'></nav> */}
      <nav className="flex items-center h-[5rem]">
        <Link to='home' smooth={true} duration={700}>
          <img src={logo} alt="logo" className="h-[30px] sm:h-[50px]" />
        </Link>
        <div>
          <ul className='hidden md:flex gap-[4rem]'>
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
                <Link to='skills' smooth={true} duration={700}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to='work' smooth={true} duration={700}>
                  Work
                </Link>
              </li>
              <li>
                <Link to='contact' smooth={true} duration={700}>
                  Contact
                </Link>
              </li>
          </ul>
        </div>
        {/* Hamburger icon*/}
      <div onClick={handleClick} className='md:hidden z-50'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu once it got triggered */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'
        }
      >
        <li className='py-4 text-3xl'>
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
  );
};
export default Header;
