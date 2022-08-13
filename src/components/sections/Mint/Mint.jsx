import React, { Suspense } from 'react'
import styled from 'styled-components'
import Showcase from './Showcase.js'
import {ethers, BigNumber} from "ethers";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { motion } from 'framer-motion';
import Count from './CountdownTimer/CountdownTimer'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import img from '../../assets/giphy (3).gif'
import '../../../index.css'
import "./styling.css"
import lightning1 from "../../assets/Lightning_Bursts_1_2286_2K.gif"


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



const Section = styled.a`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  // background-color: #161717;
`
const Container = styled.div`
width: 80%;
margin: 1rem auto;

display: flex;
justify-content: space-around;
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

const Box = styled.div`
  width: 50%;
  max-height: 600px;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // margin
  @media (max-width: 40em) {
    min-height: 50vh;
  }
  border: .5px solid black;
  margin-top: 3%;
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

`

const SubText = styled.p`
  display: flex; 
  justify-content: space-evenly;
  font-size: 1.5em;
  color: white;
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: bold;
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
  font-size: 30px;
  font-weight: 500;
`

const ImgContainer = styled.div`
margin-top: 10%;
margin:auto;

cursor: pointer;

@media (max-width: 48em) {
  width: 12rem;
}
@media (max-width: 30em) {
  width: 10rem;
}

// border-radius: 50px;
width: 50%;
height: auto;
border: 2px solid white;
justify-content: center;
align-items: center;
`

const Mint = () => {
  const [isHigh, setHigh] = useState(false);
	const { number } = useSpring({
		number: isHigh ? 100 : 0
	});
	const toggle = () => setHigh(state => !state);


  
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
  // <div className='disUnder'>
  <Section style={{backgroundImage: `url(${lightning1})`}}>
    <ContainerCenter>
    
      <Count countdownTimestampMs={1659983662000}/>
      <Box > 
      <SubText className='titleNumbers'>8500/8500</SubText>
      <ImgContainer>
      <img width={500} height={400} src={img} alt="UnderDogZ" />
      </ImgContainer>
      <Container>      
      <AiFillMinusCircle color='white' className="MintIcons"/>
      <button class="button-85" role="button">MINT</button>      
      <AiFillPlusCircle color='white' className='MintIcons'/>
      </Container>
      <SubText className='boxText' color='white'>1</SubText>
      {/* <Showcase/> */}
      </Box>
    </ContainerCenter>
  </Section>
  // </div>
)}

export default Mint