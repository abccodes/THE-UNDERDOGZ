import React, { useState } from 'react';
import styled from 'styled-components';

import '../../sections/Help/HelpStyle.css';

import logo from '../../assets/Screenshot__214_-removebg-preview.png';




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
  max-width: 1500px;
  

  @media (max-width: 40em) {
    font-size: 2em;
    
  }
`

const Card = styled.section`
  display: flex;
  flex-wrap: wrap; 
  flex-direction: row;

  justify-content: space-evenly;

  gap: 5em;
  max-width: 1500px;
  margin: 1rem auto;
  margin-top: 75px;
`





const Help = () => {
  return (
    
    <Section>

      <Title>
        
        <img src = {logo} width = "125" height = "100"></img>
        <p className='Baloo2'>UNDERDOGZ HELP</p>
        <img src = {logo} width = "125" height = "100"></img>
      
      </Title>

      <div className = "subheaderFlex">

        <div className = "left-subheader mont">
          <p>The NFT space is fast paced and constantly changing. Want to take the first step in your journey to profits in the NFT space, but not sure where to start? </p>
        </div>

        
        <div className = "right-subheader mont">
          <p>Don’t sweat it. This page outlines the four steps on how to obtain an Underdogz NFT, along with learning about the amazing utility that comes with it. Here are the main points we cover:</p>
        </div>

      </div>
      

      <div className = "help-line"></div>
      

      <Card>

        <div className = "help-card-container">

          <div className = "help-card">

            <div className = "help-front Baloo2">
              <h1>How to Get Started</h1>
            </div>

            <div className = "help-back mont">
              <p>There are many secure crypto wallets to choose from. If you do not already have one, we recommend Metamask due to its ease of use and functionalities. You’ll need to download the MetaMask wallet software onto your chosen device by visiting the official website here. Complete all the steps as shown to successfully create your wallet.</p>
            </div>
          </div>

        </div>


        <div className = "help-card-container">

          <div className = "help-card">

            <div className = "help-front Baloo2">
              <h1>Buying An Underdogz NFT</h1>
            </div>

            <div className = "help-back mont">
              <p>Navigate to the MINT page of our website. Interact with the “+” or “-” to select the desired amount of NFT’s to mint. Each user can mint a maximum of 5 Underdogz. Please allow enough ETH balance in your wallet to cover the mint cost as well as gas fees. Gas fees fluctuate depending on the time of day and the traffic on the ETH network.  Our project is a 24 hour delayed reveal from the beginning of mint, After the 24 hours is up your NFT(s) will reveal.</p>
            </div>
          </div>

        </div>

        <div className = "help-card-container">

          <div className = "help-card">

            <div className = "help-front Baloo2">
              <h1>Snapshot Voting System</h1>
              
            </div>

            <div className = "help-back mont">
              <p>The Underdogz DAO uses Snapshot for a decentralized voting system. Simply connect your wallet to Snapshot's website through the button on the DAO page or via this link and it will allow you to cast a vote on any open proposals on the site.</p>
            </div>
          </div>

        </div>

        <div className = "help-card-container">

          <div className = "help-card">

            <div className = "help-front Baloo2">
              <h1>How To Collect Profits</h1>
            </div>

            <div className = "help-back mont">
              <p>Let the passive income begin. Participate in the DAO and watch your earnings grow.</p>
            </div>
          </div>

        </div>

      </Card>





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