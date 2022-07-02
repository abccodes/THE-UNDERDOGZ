import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaDiscord,
  FaInstagram,
} from 'react-icons/fa';
import { GiSailboat } from "react-icons/gi";
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import Logo from '../assets/logo.png';
import Logo from '../assets/UDZ_Logo.png'


// import { Link } from 'react-scroll';


const Navbar = ({accounts, setAccounts}) => {
  
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
      if(window.ethereum) {
        const accounts = await window.ethereum.request({method:"eth_requestAccounts",
      });
      setAccounts(accounts);
      }
    }
  
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[50px] flex justify-between items-center px-4 bg-[#050505] text-gray-300'>
      <div>

        <img href="/" src={Logo} alt='Logo' style={{ width: '50px' }} />

      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <a href="/" className='navText'>Home</a>
        </li>
        <li>
          <a href="/dao" className='navText'>Dao</a>
        </li>
        <li>
          <a href="/mint" className='navText'>Mint</a>  
        </li>
        <li>
          <a href="/help" className='navText'>Help</a>  
        </li>
        <li>
          <a href="/contact" className='navText'>Contact</a>
        </li>
        <li>
          {isConnected ? (
            <p className='connectedText'>Connected</p>
          ) : (<button onClick={connectAccount} className="button navText">Connect</button>)}
        </li>
      </ul>

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
          <a href="/">Home</a>
        </li>
        <li className='py-6 text-4xl'>
        <a href="/dao">Dao</a>
        </li>
        <li className='py-6 text-4xl'>
        <a href="/mint">Mint</a>
          
        </li>
        <li className='py-6 text-4xl'>
          <a href="/help">Help</a>
        </li>
        <li className='py-6 text-4xl'>
        <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 roboto'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://twitter.com/UnderdogZ_CAP'
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://t.co/RLYuBDfb5i'
            >
              Discord <FaDiscord size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Opensea <GiSailboat size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;