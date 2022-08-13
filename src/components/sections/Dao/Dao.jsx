import React, { useState } from 'react';
import styled from 'styled-components';

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../sections/Dao/styled.css';


import eth from '../../assets/ethereum-eth.webp';


import NftCard from './nftcard';
import {fetchNFTs} from '../../../utils/fetchNFTs.js';

import FlipCard from '../../sections/Dao/FlipCard.js'; 




//---------------------------------------------------

const Container = styled.div`
  width: 80%;
  height: 150vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`

const Section = styled.section`
  min-height: 212vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background-color: #161717;
`

const cards = [
  {
    id: "1",
    variant: "click",
    front: "Vote",
    back: "Each NFT equals VOTING POWER. Have a say on where capital is allocated."
  },
  {
    id: "2",
    variant: "click",
    front: "Purpose",
    back: "5 NFT's equals PROPOSAL POWER. Share your ideas with the Underdogz DAO."
  },
  {
    id: "3",
    variant: "click",
    front: "Earn",
    back: "Let the passive income begin. Participate in the DAO and watch your earnings grow."
  }
];


const Dao = () => {

  //---------------------------------------------------------------
  const owner = "0x9486B1110b2D88130054985E877bC98fED97f0C0";
  const [contractAddress, setContractAddress] = useState("");
  const [NFTs, setNFTs] = useState("");
  //---------------------------------------------------------------


  return(

    <div className = "body">

      
      <Section>

        

        <div className="container">

          <div className = "header">
            <img src = {eth} width = "200" height = "100"></img>
            <p>THE UNDERDOGZ DAO</p>
            <img src = {eth} width = "200" height = "100"></img>
          </div>


          <div className="row h-100">
            <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
              {cards.map((card) => (
                <FlipCard key={card.id} card={card} />
              ))}
            </div>


          </div>

          <div className = "btnContainer">

            <button className = 'daoBtn' onClick = "window.location.hred = 'https://snapshot.org/#/';">Snapshot - Participate Here</button>

            <button className = 'daoBtn' onClick = "location.href = 'https://snapshot.org/#/'">Claim Dividens</button>

            <button className = 'daoBtn' onClick={() => {fetchNFTs(owner, contractAddress, setNFTs)}} >Load DAO Assets</button>
          </div>
        </div> 

        

        <div className = 'nftContainer'>

        {
            NFTs ? NFTs.map((NFT, index) => { 
              return (
                <NftCard key={index} {...NFT} />
              ) 
            }       
          ) : <div></div> 
        }

        </div>

        

        
      </Section> 

    </div>

  
  )



  
}

export default Dao


/*
<div className='flex flex-col items-center justify-center mb-4 w-2/6 gap-y-2 '>
  <input className="border rounded-sm focus:outline-none py-2 px-3 w-full" value={owner} onChange={(e) => setOwner(e.target.value)} placeholder='Insert your wallet address'></input>
  <input className="focus:outline-none rounded-sm py-2 px-3 w-full" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} placeholder='Insert NFT Contract address (optional)'></input>
</div>
*/

//Button:
//<button className='py-3 bg-white rounded-sm w-full hover:bg-slate-100' onClick={() => {fetchNFTs(owner, contractAddress, setNFTs)}}>Load DAO Assets</button>

/*
<section className='flex flex-wrap justify-center'>
{
  NFTs ? NFTs.map((NFT, index) => { 
    return (
      <NftCard key={index} {...NFT} />
    ) 
  }       
) : <div></div> }
            
</section>

*/




/* 

const Column1 = styled.h1`
  font-size: 2.25em;
  text-align: left;
  display: flex;
  flex: 1 
  justify-content: center;
  align-items: top;
  margin: 5rem auto;
  width: 25%;
  border: 2.5px solid white; 
  padding: 10px; 

  top: 200px;
  bottom: 1000px;  
  position: absolute;
  left: 140px;
  


  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 40em) {
    font-size: 1em;
  }
  letter-spacing: 5px;
  color: white;
`

const Column2 = styled.h1`
  font-size: 2.25em;
  text-align: left; 
  display: flex; 
  flex: 1
  justify-content: center;
  align-items: top;
  margin: 5rem auto;
  width: 25%;
  border: 2.5px solid white; 
  padding: 10px; 

  position: absolute;
  top: 200px; 
  bottom: 1000px; 
  left: 570px;


  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 40em) {
    font-size: 1em;
  }
  letter-spacing: 5px;
  color: white;
`

const Column3 = styled.h1`
  font-size: 2.25em;
  text-align: left;
  display: flex; 
  flex: 1
  justify-content: center;
  align-items: top;
  margin: 5rem auto;
  width: 25%;
  border: 2.5px solid white; 
  padding: 10px; 

  top: 200px; 
  bottom: 1000px; 
  position: absolute;
  left: 1000px;


  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 40em) {
    font-size: 1em;
  }
  letter-spacing: 5px;
  color: white;
`

const Snapshot = styled.button`
  font-size: 2.25em;
  text-align: left;
  display: flex; 
  justify-content: center;
  align-items: top;
  margin: 5rem auto;
  width: 40%;
  border: 2.5px solid white; 
  padding: 10px; 

  top: 775px; 
  position: absolute;
  left: 135px;



  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 40em) {
    font-size: 1em;
  }
  letter-spacing: 5px;
  color: white;
`
const Dividens = styled.button`
  font-size: 2.25em;
  text-align: left;
  display: flex; 
  justify-content: center;
  align-items: top;
  margin: 5rem auto;
  width: 40%;
  border: 2.5px solid white; 
  padding: 10px; 

  top: 775px; 
  position: absolute;
  left: 780px;



  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 40em) {
    font-size: 1em;
  }
  letter-spacing: 5px;
  color: white;
`

const Assets = styled.button`
  font-size: 2.25em;
  text-align: left;
  display: flex; 
  justify-content: center;
  align-items: top;
  margin: 5rem auto;
  width: 40%;
  border: 2.5px solid white; 
  padding: 10px; 

  top: 1000px; 
  position: absolute;
  left: 135px;



  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 40em) {
    font-size: 1em;
  }
  letter-spacing: 5px;
  color: white;
`

const Balance = styled.h1`
  font-size: 2.25em;
  text-align: left; 
  justify-content: center;
  align-items: top;
  margin: 5rem auto;
  width: 41%;
  border: 2.5px solid white; 
  padding: 10px; 

  position: absolute;
  top: 1000px; 
  left: 780px;



  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 40em) {
    font-size: 1em;
  }
  letter-spacing: 5px;
  color: white;
`
<ImgContainer1><img width={250} height={250} src={img1}></img></ImgContainer1>
<ImgContainer2><img width={250} height={250} src={img1}></img></ImgContainer2> 
*/