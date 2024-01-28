import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-scroll';


const Header = () => {

  // function for the mobile menu
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  // const onClick = () => {
  //   console.log("This button clicked");
  // };

  return (
    <header className='fixed w-full h-[90px] flex justify-between items-center px-14 bg-[#0a192f] text-gray-300'>
      <div>
        <h1 className="logo text-4xl">TIGER</h1>
      </div>
      <nav>
        <ul className='hidden md:flex gap-x-8'>
            <li>
              <Link to='home' smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li>
              <Link to='about' smooth={true} duration={500}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link to='skills' smooth={true} duration={500}>
                SKILLS
              </Link>
            </li>
            <li>
              <Link to='work' smooth={true} duration={500}>
                WORK
              </Link>
            </li>
            <li>
              <Link to='contact' smooth={true} duration={500}>
                CONTACT
              </Link>
            </li>
        </ul>
      </nav>
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            HOME
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            WORK
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
