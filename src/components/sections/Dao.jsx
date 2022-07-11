import React, { useState } from 'react';
import styled from 'styled-components'

import NftCard from '../nftcard';
import {fetchNFTs} from '../../utils/fetchNFTs.js';
//---------------------------------------------------











const Dao = () => {

  //---------------------------------------------------------------
  const owner = "0xC2144a4e236dDd95224aCD16f7d73128c9d3F8b8"
  const [contractAddress, setContractAddress] = useState("")
  const [NFTs, setNFTs] = useState("")
  //---------------------------------------------------------------



  return (

    <div> className = "DAO"

      <div name='contact' className='w-full h-screen css-selector'>

        <div class='daoHeader' className='daoHeader'> 
          <p>THE UNDERDOGZ DAO</p>
        </div>

      </div> 

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