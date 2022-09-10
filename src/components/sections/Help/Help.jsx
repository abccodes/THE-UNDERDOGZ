import React, { useState } from 'react';
import styled from 'styled-components';

import '../../sections/Help/HelpStyle.css';

import logo from '../../assets/Screenshot__214_-removebg-preview.png';
import metamask from '../../assets/download_prev_ui.png';
import dog from '../../assets/1-removebg-preview.png';
import snapshotIcon from '../../assets/Tvz6UU5R_400x400_prev_ui.png'; 
import profitIcon from '../../assets/166817_prev_ui.png';




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
  flex-direction: row; 
  flex-wrap: wrap; 

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

  padding: 15px;

  border-radius: 2rem;
  box-shadow: 0px 0px 20px 5px white;
 
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 1rem auto;
  margin-top: 100px;
  width: fit-content;

  @media screen and (max-width: 950px) {
    font-size: 5em;
  }

  @media screen and (max-width: 770px) {
    font-size: 4.5em; 
  }

  @media screen and (max-width: 540px) {
    font-size: 3em;
  }

  @media screen and (max-width: 450px) {
    font-size: 2.5em;
    
    margin-left: 20px;
    margin-right: 20px;
    
  }

  @media screen and (max-width: 280px) {
    font-size: 2em;

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

  gap: 5em;
  max-width: 1500px;
  margin: 1rem auto;
  margin-top: 75px;

`





const Help = () => {
  return (
    
    <Section>

      
      
      
     
        
      <Title>
        
      <img className = "help-title-image" src = {logo}></img>
        UNDERDOGZ HELP
      <img className = "help-title-image" src = {logo}></img>
      
      </Title>

      <div className = "subheaderFlex">

        <div className = "left-subheader">
          <p>The NFT space is fast paced and constantly changing. Want to take the first step in your journey to profits in the NFT space, but not sure where to start? </p>
        </div>

        
        <div className = "right-subheader">
          <p>Don’t sweat it. This page outlines the four steps on how to obtain an Underdogz NFT, along with learning about the amazing utility that comes with it. Here are the main points we cover:</p>
        </div>

      </div>
      
      <div className = "help-line"></div>

      
      

      <Card>

        <div className = "help-card-container">

          <div className = "help-card">

            <div className = "help-front">
              <h1>How To Get Started</h1>
              <img className = "help-card-image" src = {metamask} alt = "UDZ!"></img>
            </div>

            <div className = "help-back">
              <p>There are many secure crypto wallets to choose from. If you do not already have one, we recommend Metamask due to its ease of use and functionalities. You’ll need to download the MetaMask wallet software onto your chosen device by visiting the official website here. Complete all the steps as shown to successfully create your wallet.</p>
            </div>
          </div>

        </div>


        <div className = "help-card-container">

          <div className = "help-card">

            <div className = "help-front">
              <h1>Buying An Underdogz NFT</h1>
              <img className = "help-card-image" src = {logo} alt = "UDZ!"></img>
            </div>

            <div className = "help-back">
              <p>Navigate to the MINT page of our website. Interact with the “+” or “-” to select the desired amount of NFT’s to mint. Each user can mint a maximum of 5 Underdogz. Please allow enough ETH balance in your wallet to cover the mint cost as well as gas fees. Gas fees fluctuate depending on the time of day and the traffic on the ETH network.  Our project is a 24 hour delayed reveal from the beginning of mint, After the 24 hours is up your NFT(s) will reveal.</p>
            </div>
          </div>

        </div>

        <div className = "help-card-container">

          <div className = "help-card">

            <div className = "help-front">
              <h1>Snapshot Voting System</h1>
              <img className = "help-card-image" src = {snapshotIcon} alt = "UDZ!"></img>
            </div>

            <div className = "help-back">
              <p>The Underdogz DAO uses Snapshot for a decentralized voting system. Simply connect your wallet to Snapshot's website through the button on the DAO page or via this link and it will allow you to cast a vote on any open proposals on the site.</p>
            </div>
          </div>

        </div>

        <div className = "help-card-container">

          <div className = "help-card">

            <div className = "help-front">
              <h1>How To Collect Profits</h1>
              <img className = "help-card-image" src = {profitIcon} alt = "UDZ!"></img>
            </div>

            <div className = "help-back">
              <p>Once the UNDERDOGZ DAO has voted for a dividen release, head over to the DAO page, connect your wallet and click on the "Claim Dividends" button.</p>
            </div>
          </div>

        </div>

      
      </Card>

      <div className = "help-line"></div>



    </Section>

  );
};

export default Help;


/* <div className = "helpHeader">
      <img src = {img1} width = "200" height = "100"></img>
        <p>Underdogz Help</p>
      <img src = {img1} width = "200" height = "100"></img>
      </div>



      <div className="row h-100">
      <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
        {card1.map((card) => (
          <HelpFlip key={card.id} card={card} />
        ))}
      </div>
      </div>

*/
