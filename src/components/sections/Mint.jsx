import React from 'react'
import styled from 'styled-components'
import Showcase from '../Showcase.js'
import {ethers, BigNumber} from "ethers";
import { useEffect, useState } from "react";
// import mintContract from "";

const Section = styled.section`
  height: 50vh;
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
  background-color: white;
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
  font-size: 1.25em;
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
  font-size: 1em;
  color: #c2c2c2;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
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

const Row = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
height:15%;
margin: auto;
background: rgba(0, 0, 0, 0.5);
color: white;
position:fixed;
@viewport {
  width: device-width ;
  zoom: 1.0 ;
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
    <div className='disUnder'>

    <Showcase>
    <Section>
    <p className="fontColorBlack">iugdiuasgduiagsiduga</p>
      {accounts.length && (
        <div>
          <button onClick={() => setMintAmount(mintAmount -1)}>-</button>
          {mintAmount}
          <button onClick={() => setMintAmount(mintAmount + 1)}>+</button>
          <button onClick={handleMint}>Mint</button>
        </div>
      )}
      </Section> */
    </Showcase>
    
    </div>
  )
}

export default Mint
