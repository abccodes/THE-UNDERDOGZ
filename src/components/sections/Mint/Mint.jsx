import React, { Suspense } from 'react'
import styled from 'styled-components'
import Showcase from './Showcase.js'
import {ethers, BigNumber} from "ethers";
import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { motion } from 'framer-motion';


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
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
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

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;

    button {
      margin: 0 auto;
    }
  }
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
     <Container>

      <Box>
      <Title>Mint</Title> 
        <SubText>
          <p>-</p>
          <button>Mint</button>
          <p>+</p>
        </SubText>
        <SubTextLight>
          8000/8000
        </SubTextLight>
        <ButtonContainer></ButtonContainer>
       
      </Box>
    </Container>
    <Showcase/>
  </Section>
  
)
}

export default Mint
