import React, { useState } from 'react';
import '../../fonts.css'

import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaDiscord,
  FaInstagram,
} from 'react-icons/fa';

import { GiSailboat } from "react-icons/gi";
import Logo from '../../assets/Screenshot__214_-removebg-preview.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import etherscan from "../../assets/etherscan-removebg-preview.png";


const HamburgerIcons = styled.div`

  display: flex;
  flex-direction: row; 

  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: auto; 
  
`

const Hamburgerline = styled.div`

  display: flex;

  width: 100%;
  height: 5px;
  border-radius: 2rem;

  background-color: black;
  opacity: .5;

`

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  
  return (

    <div className='fixed w-full h-[50px] flex justify-between items-center px-4 bg-[#121113] disOver'>
      <div>
      <Link to="/">
        <img src={Logo} alt='Logo' style={{ width: '50px' }} />
        </Link>
      </div>

      {/* menu */}
      <ul className='hidden md:flex '>

        <li className = "rounded-xl hover:bg-zinc-800">
          <Link to="/">
          <p className = 'mont'>Home</p>
          </Link>
        </li>

        <li className = "rounded-xl hover:bg-zinc-800">
          <Link to="/dao">
          <p 
          className='mont'>Dao</p>
          </Link>
        </li>

        <li className = "rounded-xl hover:bg-zinc-800">
        <Link to="/mint">
          <p className='mont'>Mint</p>  
          </Link>
        </li>

        <li className = "rounded-xl hover:bg-zinc-800">
        <Link to="/help">
          <p className='mont'>Help</p>  
          </Link>
        </li>

        <li className = "rounded-xl hover:bg-zinc-800">
        <Link to="/contact">
          <p className='mont'>Contact</p>
        </Link>
        </li>
      
      </ul>
      

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars color="white"/> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className = { !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-zinc-800 font-bold flex flex-col place-content-evenly items-center col Baloo2'}>

        <li className='py-6 text-4xl '>
          <a href="/" className = 'text-white'>Home</a>
        </li>

        <li className='py-6 text-4xl'>
        <a href="/dao" className = 'text-white'>Dao</a>
        </li>

        <li className='py-6 text-4xl'>
        <a href="/mint" className = 'text-white'>Mint</a>
        </li>

        <li className='py-6 text-4xl'>
          <a href="/help" className = 'text-white'>Help</a>
        </li>

        <li className='py-6 text-4xl'>
        <a href="/contact" className = 'text-white'>Contact</a>
        </li>

        <Hamburgerline></Hamburgerline>

        <HamburgerIcons>

        <li className='py-6 text-4xl'>
          <a href= "https://twitter.com/UnderdogZ_CAP">
            <FaTwitter size = {40} color = "#6a93cb"></FaTwitter>
          </a>
        </li>
        
        <li className='py-6 text-4xl'>
          <a href= "https://discord.com/invite/RsYQDcHRSN">
            <FaDiscord size = {40} color = "#7f5a83"></FaDiscord>
          </a>
        </li>

        <li className='py-6 text-4xl'>
          <a href= "https://www.instagram.com/underdogz_capital/">
            <FaInstagram size = {40} color = "#cc2366"></FaInstagram>
          </a>
        </li>

        <li className='py-6 text-4xl'>
          <a href= "https://discord.com/invite/RsYQDcHRSN">
            <GiSailboat size = {40} color = "#045de9"></GiSailboat>
          </a>
        </li>

        <li className='py-6 text-4xl'>
          <a href = 'https://etherscan.io/address/0xc05b8a99b89d419393d08d284babd2d06780bfd1'>
          <img src = {etherscan} alt = "Eth" width = "40px" height = "40px"/>
          </a>
        </li>

        </HamburgerIcons>

      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 roboto'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 twitter'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://twitter.com/UnderdogZ_CAP'
            >
              <b className='fontColorWhite'>Twitter</b> <FaTwitter size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 discord'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://t.co/RLYuBDfb5i'
            >
              <b className='fontColorWhite'>Discord</b> <FaDiscord size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 insta'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <b className='fontColorWhite'>Instagram</b> <FaInstagram size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 opensea'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              <b className='fontColorWhite'>Opensea</b> <GiSailboat size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 etherscan'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://etherscan.io/address/0xc05b8a99b89d419393d08d284babd2d06780bfd1'
            >
              <b className='fontColorWhite'>Etherscan</b> <img src = {etherscan} alt = "Eth" width = "35px" height = "35px"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;