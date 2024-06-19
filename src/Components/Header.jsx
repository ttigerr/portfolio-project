import React, { useState } from 'react'; 
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {

  // function for the mobile menu
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <header className="sub-header">
      {/* <nav className='w-full fixed h-[70px] sm:h-[100px] flex justify-between px-3 sm:px-10 items-center bg-white'></nav> */}
      <nav className="m-screen flex items-center justify-between h-[6rem]">
        {/* Flex 1 */}
        <div>
          <Link to='home' smooth={true} duration={700}>
            <p className="font-semibold text-4xl text-black">TIGER.</p>
          </Link>
        </div>
        {/* Flex 2 */}
        <div>
          <ul className='hidden text-2xl md:flex gap-[4rem]'>
              <li>
                <Link to='about' smooth={true} duration={700}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to='work' smooth={true} duration={700}>
                  WORK
                </Link>
              </li>
          </ul>
        </div>
        <div>
          <ul className="hidden md:flex">
            <li className="p-3 px-7 rounded-full border-[1px] border-black">
                <Link to='contact' smooth={true} duration={700}>
                  CONTACT ME
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
