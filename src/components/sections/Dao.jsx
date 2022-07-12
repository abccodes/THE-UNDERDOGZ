import React, { useState } from 'react';
import styled from 'styled-components'

import NftCard from '../nftcard';
import {fetchNFTs} from '../../utils/fetchNFTs.js';
//---------------------------------------------------


const Section = styled.section`
  min-height: 150vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #161717;
`

const Title = styled.h1`
  font-size: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  // border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: 2em;
  }
  letter-spacing: 15px;
  color: white;
`


const Container = styled.div`
  width: 80%;
  height: 150vh;
  background-color: #1c1c1c;
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

const box = styled.p`
  height: 200px;
  color: white; 
  border: 2px; 
  position: relative;
`
    
  

const h2 = styled.h2 `
  text-transform: uppercase;
  font-family: verdana, Geneva, Tahoma, sans-serif;
  margin: 0;
  position: aboslute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  
`
    

  








const Dao = () => {

  //---------------------------------------------------------------
  const owner = "0xC2144a4e236dDd95224aCD16f7d73128c9d3F8b8"
  const [contractAddress, setContractAddress] = useState("")
  const [NFTs, setNFTs] = useState("")
  //---------------------------------------------------------------



  return (
    <div className= "DAO">
      <Section className = "disUnder">
        
      <Title>
        The UNDERDOGZ DAO
      </Title>
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