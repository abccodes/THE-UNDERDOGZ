import React, { useState } from 'react';
import styled from 'styled-components'

import NftCard from '../nftcard';
import {fetchNFTs} from '../../utils/fetchNFTs.js';
//---------------------------------------------------


const Body = styled.div`
  
  background-color = #111;
  margin: 0
  height: 100vh;
  display: flex;
  justify-content: center;
  alighn-items: center; 
  

  container {
    width: 90%
    display: grid;
    grid-template-columns: repeat(auto-, minmax(250px, 1fr));
    grid-gap: 20px;
  }

  box {
    height: 200px;
    color: white; 
    border: 2px; 
    position: relative;
  }

  h2 {
    text-transform: uppercase;
    font-family: verdana, Geneva, Tahoma, sans-serif;
    margin: 0;
    position: aboslute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 

  }
`







const Dao = () => {

  //---------------------------------------------------------------
  const owner = "0xC2144a4e236dDd95224aCD16f7d73128c9d3F8b8"
  const [contractAddress, setContractAddress] = useState("")
  const [NFTs, setNFTs] = useState("")
  //---------------------------------------------------------------



  return (
    <div className= "DAO">

      <head>
        <meta charset = "UTF-8"></meta>
        <meta name = "viewport" content = "width=device-width, initial-scal = 1.0" ></meta>
        <title>THE UNDERDOGZ DAO</title>
      </head>

      
        <Body>
          <div class = "container">
            <div class = "box">
              <h2>Box 1</h2>
            </div>

            <div class = "box">
              <h2>Box 2</h2>
            </div>

            <div class = "box">
              <h2>Box 3</h2>
            </div>
          </div>
        </Body>

        

      


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