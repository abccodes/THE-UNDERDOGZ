import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes} from 'styled-components';
import { ethers } from "ethers"; 


import '../../sections/Dao/DaoStyle.css';



import eth from '../../assets/ethereum-eth.webp';
import logo from '../../assets/Screenshot__214_-removebg-preview.png';
import bank from '../../assets/fINAL_COIN-removebg.png';


import NftCard from './nftcard';
import {fetchNFTs} from '../../../utils/fetchNFTs.js';










//---------------------------------------------------

const Section = styled.section`
  justify-content: center; 
  align-items: center; 

  height: auto;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #121113;
`
const Title = styled.h1`

  display: flex;
  overflow: hidden;

  justify-content: center;
  align-items: center;

  font-size: 6.5em;
  font-weight: bold;
  font-family: 'Baloo 2';
  text-align: center; 
  letter-spacing: 5px;
  text-transform: capitalize;

  color: #fff;

  background: linear-gradient(-45deg, #282525, #1a191a, #2d2d2d, #2c2b2b);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  box-shadow: 0px 0px 20px 5px white;

  margin: 1rem auto;
  margin-top: 100px;
  width: fit-content;
  border-radius: 2rem;
  padding: 15px;


  //font size media
  @media screen and (max-width: 1280px) {
    font-size: 5.75em;
  }
  

  
  //Ipad
  @media screen and (max-width: 950px) {
    font-size: 4em;

  }

  //Ipad Mini
  @media screen and (max-width: 770px) {
    font-size: 3.5em;
    
  }

  //Phones

  @media screen and (max-width: 540px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 450px) {
    font-size: 2em;
    
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 280px) {
    font-size: 1.5em;
  }
  
`



const Treasury = styled.h1`

  display: flex; 
  overflow: hidden;

  justify-content: center;
  align-items: center;

  margin: 1rem auto;
  margin-top: 75px;
  width: fit-content;
  padding: 25px;

  font-size: 4.15em;
  font-weight: bold;
  font-family: 'Baloo 2';
  text-align: center; 
  letter-spacing: 5px;
  text-transform: capitalize;
  color: #fff;

  background: linear-gradient(-45deg, #282525, #1a191a, #2d2d2d, #2c2b2b);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  
  border-radius: 2rem;
  box-shadow: 0 0 5px 10px rgba(50, 50, 50, 0.25);
 
  @media screen and (max-width: 1280px) {
    font-size: 3.75em; 
  }

  @media screen and (max-width: 950px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 540px) {
    font-size: 2em;

    margin-left: 20px;
    margin-right: 20px;
    
  }

  @media screen and (max-width: 450px) {
    font-size: 2em;

    padding: 15px;
    margin-left: 20px;
    margin-right: 20px;
  }
`

const Card = styled.section`
  display: flex;
  flex-wrap: wrap; 
  flex-direction: row;

  justify-content: space-evenly;
  align-items: center;


  max-width: 1500px;
  margin: 1rem auto;
  margin-top: 75px;

  @media (max-width: 1280px) {
    flex-direction: column; 
    gap: 4.688em;
    align-items: center; 
  }
`

const Buttons = styled.section`
  display: flex;
  flex-wrap: wrap; 
  flex-direction: row;

  justify-content: space-evenly;
  align-self: center;
  align-items: center;
  text-align: center;



  max-width: 1500px;
  margin: 1rem auto;
  margin-top: 75px;

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 4.688em;
  }

`



const Dao = ({ accounts, setAccounts}) => {

  

  //Dividens Connect To MetaMask ==============================

  <Dao accounts={accounts} setAccounts={setAccounts} />

  async function connectAccount() {
      if (window.ethereum) {
          const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
          });
          setAccounts(accounts);
      }

  }

  // Load Dao Assets ==========================================

  const owner = "0x596736970d727752AbC35e43FAf1b60E4e8562da";

  const [contractAddress, setContractAddress] = useState("");

  const [NFTs, setNFTs] = useState("");

  // ==========================================================

  // Get Treasury Balance =====================================

  let address = "0xB651ffe21526F6Cb2510589E0D2fC065037b6c88"; 


  
  const getBalance = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    const bal = balanceInEth.slice(0,5)
    return(bal)
  }
  
  getBalance().then(function(response){
      console.log(response)
  })

    

  

  return(

    <Section>

      <Title>
        <img className = "title-image" src = {eth}></img>

        THE UNDERDOGZ DAO

        <img className = "title-image" src = {eth}></img>

      </Title>
      <Card>

        <div className = "card-container">
          <div className = "card">

            <div className = "front">
              <h1>VOTE</h1>
              <img className = "card-image" src = {logo} alt = "UDZ!"></img> 
            </div>

            <div className = "back">
              <h1 className = "text-4xl underline">UDZ Voting</h1>
              <p>Each NFT equals VOTING POWER. Have a say on where capital is allocated.</p>
            </div>
          </div>

        </div>

        <div className = "card-container">
          <div className = "card">

            <div className = "front">
              <h1>PROPOSE</h1>
              <img className = "card-image" src = {logo}></img>
            </div>

            <div className = "back">
              <h1 className = "text-4xl underline">UDZ Proposals</h1>
              <p>5 NFT's equals PROPOSAL POWER. Share your ideas with the Underdogz DAO.</p>
            </div>
          </div>

        </div>

        <div className = "card-container">

          <div className = "card">

            <div className = "front">
              <h1>EARN</h1>
              <img className = "card-image" src = {logo}></img>
            </div>

            <div className = "back">
              <h1 className = "text-4xl underline">UDZ Earnings</h1>
              <p>Let the passive income begin. Participate in the DAO and watch your earnings grow.</p>
            </div>
          </div>

        </div>

      </Card>

      <div className = "dao-line"></div>
      
      <Treasury>

        <div className = "treasury-image">
          <img className = "treasury-image" src = {bank}></img>
        </div>

        <p>Treasury Balance: ETH </p> 

        <div className = "treasury-image">
          <img className = "treasury-image" src = {bank}></img>
        </div>
        
      </Treasury>
      
      <Buttons>

        <button className = 'daoBtn' onClick = "window.location.href = 'https://snapshot.org/#/';">Snapshot - Participate Here</button>

        <button className = 'daoBtn' onClick = {connectAccount}>Connect Wallet - Dividends</button>
        
        <button className = 'daoBtn' onClick = {() => {fetchNFTs(owner, contractAddress, setNFTs)}} >Load DAO Assets</button>


      </Buttons>

      <div className = "dao-line"></div>
      
      
      <div className = "nft-container">
        {
          NFTs ? NFTs.map((NFT, index) => { 
            return (
              <NftCard key={index} {...NFT} />
            ) 
          }       
        ) : <div></div> }


      </div>  
      
    </Section>

  )  
}

export default Dao







/*

Text Linear Gradient:

background: -webkit-linear-gradient(-45deg, #fff, #d6aed6, #fff, #8a9cd0);
background-size: 400% 400%;
animation: gradient 60s ease infinite;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;



0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D


<Title>
  <img className = "title-image" src = {eth}></img>
    THE UNDERDOGZ DAO
  <img className = "title-image" src = {eth}></img>
</Title>

const Title = styled.h1`

  display: flex;
  overflow: hidden;

  justify-content: center;
  align-items: center;

  font-size: 6em;
  font-weight: bold;
  font-family: 'Baloo 2';
  text-align: center; 
  letter-spacing: 5px;
  text-transform: capitalize;

  

  color: #fff;

  background: linear-gradient(-45deg, #282525, #1a191a, #2d2d2d, #2c2b2b);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  padding: 25px;

  border-radius: 2rem;
  box-shadow: 0px 0px 20px 5px white;

  margin: 1rem auto;
  margin-top: 100px;
  width: fit-content;


  @media screen and (max-width: 40em) {
    font-size: 2em;
    margin-left: 20px;
    margin-right: 20px;
    padding: 15px;

    box-shadow: 0px 0px 10px 5px white;
  }
`

0x9486B1110b2D88130054985E877bC98fED97f0C0





const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    
    //checks if metamask exist
    if(window.ethereum) {
      console.log('Requesting account...');

      try {
        const accounts = await window.ethereum.request ({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);

      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Metamask is not installed')
    }
  }

  async function connectWallet() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }
*/

