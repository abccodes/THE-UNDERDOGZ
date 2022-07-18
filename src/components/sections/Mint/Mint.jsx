import React, { Suspense } from 'react'
import styled from 'styled-components'
import Showcase from './Showcase.js'
import {ethers, BigNumber} from "ethers";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { motion } from 'framer-motion';
import Count from './CountdownTimer/CountdownTimer'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import img from '../../assets/nic.png'


const Number = () => {
	const [isHigh, setHigh] = useState(false);
	const { number } = useSpring({
		number: isHigh ? 100 : 0
	});

	const toggle = () => setHigh(state => !state);

	return (
		<>
			<animated.span>
				{number.interpolate(x => x.toFixed(0))}
			</animated.span>
			<button onClick={toggle}>TOGGLE</button>
		</>
	);
};

const ContainerCenter = styled.div`
  width: 80%;
  margin: 2rem auto;

  display: flex;
  // justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #161717;
`
const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`

const Box = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
  // border: 2px solid white;
  margin-top: 2%;
  // box-shadow: 10px 10px 10px black;
  background-color: #171717;
  box-shadow: 0px 0px 40px 20px #4e32a8;
  border-radius: 40px;
`

const Title = styled.h2`
  text-align: center;
  font-size: 4em;
  text-transform: capitalize;
  color: white;
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
  font-weight: bold;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: 3em;
  }
  @media (max-width: 30em) {
    font-size: 1.25em};
  }
  font-family: 'Baloo 2', cursive;
`

const SubText = styled.p`
  display: flex; 
  justify-content: space-evenly;
  font-size: 2.5em;
  color: white;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: 1em;
  }
  @media (max-width: 40em) {
    font-size: 1em;
  }
  @media (max-width: 30em) {
    font-size: 1em;
  }
  font-family: 'Baloo 2', cursive;
  font-weight: bold;
`

const SubTextLight = styled.p`
text-align: center;
  font-size: 1.5em;
  color: #c2c2c2;
  align-self: flex-start;
  width: 80%;
  margin: -1rem auto;
  font-weight: 400;
  font-weight: bold;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: 0.875em;
  }
  @media (max-width: 40em) {
    font-size: 0.875em;
  }
  @media (max-width: 30em) {
    font-size: 0.75em;
  }
  font-family: 'Baloo 2', cursive;
`


const Button = styled.button`
  background: #fff5f6;
  // background: -webkit-linear-gradient(top, #9c3e5e, #d665ab);
  // background: -moz-linear-gradient(top, #9c3e5e, #d665ab);
  // background: -ms-linear-gradient(top, #9c3e5e, #d665ab);
  // background: -o-linear-gradient(top, #9c3e5e, #d665ab);
  padding: 0px 6px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
  -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
  box-shadow: rgba(0,0,0,1) 0 1px 0;
  text-shadow: rgba(0,0,0,.4) 0 px 0;
  color: #000000;
  font-size: 17px;
  font-weight: 500;
`

const ImgContainer = styled.div`
  width: 15rem;
  // margin: 0 1rem;

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 50%;
    height: auto;
    border: 6px solid white;
  }
  justify-content: center;
  align-items: center;
`

const Mint = () => {

  
const [accounts, setAccounts] = useState([]);
const [mintAmount, setMintAmount] = useState(1)
const mintContractAbi = 172378123;
const mintContractAddress = 172378123;

//CONNECT ACCOUNTS

async function connectAccounts() {
  if(window.ethereum) {
    const accounts = await window.ethereum.request({method:"eth_requestAccounts",
  });
  setAccounts(accounts);
  }
}

//MINTING

async function handleMint() {
  if(window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSinger();
    const contract = new ethers.Contract(
      mintContractAddress,
      mintContractAbi,
      signer
    );
    try {
      const response = await contract.mint(BigNumber.from(mintAmount));
      console.log("response");
    } 
    catch(err) {
      console.log(err);
    }
  }
}

return (

  <Section className='disUnder'>
    <ContainerCenter>
    
      <Count countdownTimestampMs={1659983662000}/>
      <Box>
      <BsFillArrowRightCircleFill color='white'/>
      <Button>Connect</Button>
      <BsFillArrowLeftCircleFill color='white'/>
      <p color='white'>8000/8000</p>
      <ImgContainer>
      <img width={500} height={400} src={img} alt="UnderDogZ" />
      </ImgContainer>
      <Showcase/>
      </Box>
    </ContainerCenter>
  </Section>
)}

export default Mint
