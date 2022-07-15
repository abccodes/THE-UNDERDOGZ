import React, { useState } from 'react';
import styled from 'styled-components'

import NftCard from '../nftcard';
import {fetchNFTs} from '../../utils/fetchNFTs.js';
//---------------------------------------------------

const Container = styled.div`
  width: 80%;
  height: 150vh;
  // background-color: #1c1c1c;
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

const Header = styled.p`
  font-size: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  width: fit-content;
  border: 5px solid white; 
  padding: 10px; 
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 40em) {
    font-size: 2em;
  }
  letter-spacing: 15px;
  color: white;
`

const Column1 = styled.h1`
  font-size: 2.25em;
  text-align: left;
  display: flex; 
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






const Dao = () => {

  //---------------------------------------------------------------
  const owner = "0xC2144a4e236dDd95224aCD16f7d73128c9d3F8b8"
  const [contractAddress, setContractAddress] = useState("")
  const [NFTs, setNFTs] = useState("")
  //---------------------------------------------------------------



  return (
    
    <div className = 'disUnder'>

      <Section>

        <Header>THE UNDERDOGZ DAO</Header>

        <Column1>Vote: 1 UDZ NFT equals VOTING POWER. Have your say in what The Underdogz DAO invest in.</Column1>
        <Column2>Purpose: 5 UDZ NFTs equals PROPOSAL POWER. Bring your ideas into the Underdogz DAO.</Column2>
        <Column3>Earn: Lets get rich together. Participate in the DAO and watch our earnings grow. </Column3>

        <Snapshot>Snapshot - Participate Here </Snapshot>
        <Dividens>Claim Dividens </Dividens>

        <Assets>Load UDZ DAO Assets</Assets>
        <Balance>Treasury Balance: 250.45 ETH</Balance>

        
        


        <section className='Assets'>
            {
              NFTs ? NFTs.map((NFT, index) => { 
                return (
                  <NftCard key={index} {...NFT} />
                ) 
              }       
            ) : <div></div> }
            
        </section>




        <Container>
        </Container>
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