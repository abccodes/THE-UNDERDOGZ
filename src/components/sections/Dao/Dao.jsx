import React, { useState } from 'react';
import styled from 'styled-components';

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

  height: 1000vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #121113;
`

const Title = styled.h1`

  display: flex;
  overflow: hidden;

  font-size: 5em;
  font-weight: bold;
  text-align: center; 
  letter-spacing: 5px;
  text-transform: capitalize;
  color: #fff;
  background-color: #2d2d2d; 
  padding: 25px;

  border-radius: 2rem;
  box-shadow: 0px 0px 20px 5px white;
 
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  margin-top: 100px;
  width: fit-content;

  @media (max-width: 40em) {
    font-size: 2em;
    
  }
`

const Treasury = styled.h1`

  display: flex;
  overflow: hidden;

  font-size: 3em;
  font-weight: bold;
  text-align: center; 
  letter-spacing: 5px;
  text-transform: capitalize;
  color: #fff;
  background-color: #2d2d2d; 
  padding: 25px;

  border-radius: 2rem;
  box-shadow: 0 0 5px 10px rgba(50, 50, 50, 0.25);
 
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  margin-top: 75px;
  width: fit-content;

  @media (max-width: 40em) {
    font-size: 2em;
    
  }
`

const Card = styled.section`
  display: flex;
  flex-wrap: wrap; 
  flex-direction: row;

  justify-content: space-evenly;


  max-width: 1500px;
  margin: 1rem auto;
  margin-top: 75px;
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

`








const Dao = () => {

  //---------------------------------------------------------------
  const owner = "0x9486B1110b2D88130054985E877bC98fED97f0C0";
  const [contractAddress, setContractAddress] = useState("");
  const [NFTs, setNFTs] = useState("");
  //---------------------------------------------------------------


  return(

   
    <Section>

      <Title>
        <img src = {eth} width = "150" height = "100"></img>
        THE UNDERDOGZ DAO
        <img src = {eth} width = "150" height = "100"></img>
      </Title>

      

      
      <Card>

        <div className = "card-container">

          <div className = "card">

            <div className = "front">
              <h1>VOTE</h1>
              <img src = {logo} width = "200" height = "100"></img>
            </div>

            <div className = "back">
              <h1>UDZ Voting</h1>
              <p>Each NFT equals VOTING POWER. Have a say on where capital is allocated.</p>
            </div>
          </div>

        </div>


        <div className = "card-container">

          <div className = "card">

            <div className = "front">
              <h1>PROPOSE</h1>
              <img src = {logo} width = "200" height = "100"></img>
            </div>

            <div className = "back">
              <h1>UDZ Proposals</h1>
              <p>5 NFT's equals PROPOSAL POWER. Share your ideas with the Underdogz DAO.</p>
            </div>
          </div>

        </div>

        <div className = "card-container">

          <div className = "card">

            <div className = "front">
              <h1>EARN</h1>
              <img src = {logo} width = "200" height = "100"></img>
            </div>

            <div className = "back">
              <h1>UDZ Earnings</h1>
              <p>Let the passive income begin. Participate in the DAO and watch your earnings grow.</p>
            </div>
          </div>

        </div>

        

        <div className = "dao-line"></div>


      </Card>

      
      <Treasury>

        <div className = "treasury-image">
          <img src = {bank} width = "125" height = "100"></img>
        </div>

        <p>Treasury Balance: 10.2 ETH</p>

        <div className = "treasury-image">
          <img src = {bank} width = "125" height = "100"></img>
        </div>
      </Treasury>
      
      <Buttons>

        <button className = 'daoBtn' onClick = "window.location.hred = 'https://snapshot.org/#/';">Snapshot - Participate Here</button>

        <button className = 'daoBtn' onClick = "location.href = 'https://snapshot.org/#/'"> Claim Dividens </button>

        <button className = 'daoBtn' onClick={() => {fetchNFTs(owner, contractAddress, setNFTs)}} >Load DAO Assets</button>


      </Buttons>

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