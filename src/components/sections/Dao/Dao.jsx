//General Imports
import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes} from 'styled-components';
import { ethers } from "ethers"; 

//Styling Imports
import '../../sections/Dao/DaoStyle.css';
import eth from '../../assets/ethereum-eth.webp';
import logo from '../../assets/Screenshot__214_-removebg-preview.png';
import bank from '../../assets/fINAL_COIN-removebg.png';

//Blockchain Imports
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

  box-shadow: 0px 5px 50px -10px #3a0ca3; 

  margin: 1rem auto;
  margin-top: 75px;
  width: fit-content;
  border-radius: 2rem;
  padding: 15px;


  //font size media

  @media screen and (max-width: 1500px) {
    font-size: 5.5em; 
  }

  @media screen and (max-width: 1280px) {
    font-size: 5em;
  }

  @media screen and (max-width: 1150px) {
    font-size: 4.5em;
  }
  
  @media screen and (max-width: 1050px) {
    font-size: 4.25em;
  }

  
  //Ipad
  @media screen and (max-width: 950px) {
    font-size: 4.5em;
  }

  @media screen and (max-width: 865px) {
    font-size: 4.25em;
  }

  @media screen and (max-width: 815px) {
    font-size: 4.125em;
  }

  //Ipad Mini
  @media screen and (max-width: 768px) {
    font-size: 4em;
  }

  @media screen and (max-width: 750px) {
    font-size: 3.75em;
  }

  @media screen and (max-width: 710px) {
    font-size: 3.5em;
  }

  @media screen and (max-width: 675px) {
    font-size: 3.5em;

    margin-left: 25px;
    margin-right: 25px; 
  }

  @media screen and (max-width: 605px) {
    font-size: 3.25em;

    margin-left: 25px;
    margin-right: 25px; 
  }

  //Phones

  @media screen and (max-width: 540px) {
    font-size: 2.5em;

    margin-left: 25px;
    margin-right: 25px; 
  }

  @media screen and (max-width: 450px) {
    font-size: 2em;
    
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.75em;
    
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 350px) {
    font-size: 2em;

    margin-left: 15px;
    margin-right: 15px;
  }
  
  @media screen and (max-width: 320px) {
    font-size: 1.75em;

    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 290px) {
    font-size: 1.5em;

    margin-left: 15px;
    margin-right: 15px; 
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

  font-size: 4em;
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
  box-shadow: 0px 5px 45px -10px #3a0ca3;
 
  @media screen and (max-width: 1400px) {
    font-size: 3.75em; 
  }

  @media screen and (max-width: 1300px) {
    font-size: 3.5em; 
  }

  @media screen and (max-width: 1150px) {
    font-size: 2.75em; 
  }

  @media screen and (max-width: 950px) {
    font-size: 3.25em;
  }

  @media screen and (max-width: 820px) {
    font-size: 3.125em;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.75em;
  }

  @media screen and (max-width: 700px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 675px) {
    font-size: 3em;
    margin-left: 25px;
    margin-right: 25px; 
  }

  @media screen and (max-width: 565px) {
    font-size: 2.5em;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 490px) {
    font-size: 2.25em;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 460px) {
    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 460px) {
    font-size: 2em; 
    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.75em; 
    margin-left: 15px;
    margin-right: 15px;
  }
  
  @media screen and (max-width: 395px) {
    font-size: 1.5em; 
    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.5em; 
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

  @media (max-width: 675px) {
    flex-direction: column; 
    gap: 50px;
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

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 75px;
  }

`



const Dao = () => {

  

  //Connect To MetaMask ==============================

  
  
  
  // Load Dao Assets ==========================================
  
  
  const owner = "0xb3B4764FD3dB251A7bBE461C059663e32967CfD5";
  const [contractAddress, setContractAddress] = useState("");
  const [NFTs, setNFTs] = useState("");

  
  useEffect(() => {

    fetchNFTs(owner, contractAddress, setNFTs); 

  },[]) 
  

  // Get Treasury Balance =====================================

  
  const [treasuryBalance, setTreasuryBalance] = useState(null); 

  useEffect(() => {

    let address = "0xb3B4764FD3dB251A7bBE461C059663e32967CfD5";

    const getBalance = async (address) => {

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(address);
      const balanceInEth = ethers.utils.formatEther(balance);
      const treasuryBalance = (balanceInEth.slice(0,5));

      setTreasuryBalance(treasuryBalance)
    }

    getBalance(address)

  },[]) 
  
  



  return(

   
    <Section>

      <Title>
        
        <img className = "title-image" src = {eth} alt = ""></img>
          THE UNDERDOGZ DAO
        <img className = "title-image" src = {eth} alt = ""></img>

      </Title>
      

      
      <Card>

        <div className = "card-container">

          <div className = "card">

            <div className = "front">
              <h1>VOTE</h1>
              <img className = "card-image" src = {logo} alt = ""></img> 
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
              <img className = "card-image" src = {logo} alt = ""></img>
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
              <img className = "card-image" src = {logo} alt = ""></img>
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
          <img className = "treasury-image" src = {bank} alt = ""></img>
        </div>

        <p> Treasury Balance: {treasuryBalance} ETH</p>

        <div className = "treasury-image">
          <img className = "treasury-image" src = {bank} alt = ""></img>
        </div>
        
      </Treasury>
      
      <Buttons>

        <button className = 'daoBtn' onClick = {(e) => {e.preventDefault(); window.location.href = 'https://snapshot.org/#/';}}>Snapshot - Participate Here</button>

        <button className = 'daoBtn'> Claim Dividends </button>

        <button className = 'daoBtn'> Connect Wallet</button>

      </Buttons>

      <div className = "dao-line"></div>
      
      
     <div className = "nft-container">
        {
          NFTs ? NFTs.map((NFT, index) => { 
            return (
              <NftCard key={index} {...NFT} />
            ) 
          })       
          : <div></div> 
        }
      </div>   
      
        
        

    </Section>
    
  )
}

export default Dao