//General Imports
import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import styled, { keyframes} from 'styled-components';
import { ethers } from "ethers"; 

//Styling Imports
import '../../sections/Dao/DaoStyle.css';
import Loading from '../../sections/Home/Loading.js';
import eth from '../../assets/ethereum-eth.webp';
import logo from '../../assets/Screenshot__214_-removebg-preview.png';
import bank from '../../assets/fINAL_COIN-removebg.png';

//Blockchain Imports
import underdogzABI from '../../sections/Dao/abi.json';
import {fetchNFTs} from '../../../utils/fetchNFTs.js';
import NftCard from './nftcard';



//---------------------------------------------------

const SnowfallComponent = lazy(() => import('../../sections/Contact/Snowfall.js'));

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

  const [userAddress, setUserAddress] = useState(""); //stores the users connected address
  
  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []); 


  //Accounts Changed 
  window.ethereum.on('accountsChanged', function (accounts) {
   checkIfWalletIsConnected(setUserAddress);
  })


  //Mobile:
  function isMobileDevice () {
    return 'ontouchstart' in window || 'onmsgetsturechange' in window; 
  }

  async function connect(onConnected) {  

    // Check if MetaMask is installed
    // MetaMask injects the global API into window.ethereum

    if (window.ethereum) {
      try {
        // check if the chain to connect to is installed
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1' }], // chainId must be in hexadecimal numbers
        });

      } catch (error) {

        // This error code indicates that the chain has not been added to MetaMask
        // if it is not, then install it into the user MetaMask

        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x1',
                  rpcUrl: 'https://eth-mainnet.alchemyapi.io/v2/',
                },
              ],
            });
          } catch (addError) {
            console.error(addError);
          }
        }
        console.error(error);
      }
    } else {
      // if no window.ethereum then MetaMask is not installed
      alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
    } 

    const accounts = await window.ethereum.request ({
      method: "eth_requestAccounts",
    });

    onConnected(accounts[0]);
  }


  async function checkIfWalletIsConnected (onConnected) { //Checks if the user has already connected their wallet

    if (window.ethereum) {

      //metamask request to user wallet
      const accounts = await window.ethereum.request ({
        method: "eth_accounts",
      });

      
      
      //if user has metamask installed - if() sets up their logged in account to be initialized 
      if ( accounts && accounts.length > 0) {
        const account = accounts[0];
        onConnected(account);
        return; 
      } 

      onConnected(""); 

      //User only clicks once - triggers page load upon entry
      if(isMobileDevice()) {
        await connect(onConnected);
      }
        
    } 
    
  }

  //Change button to wallet icon | Top - Mobile Return | Bottom - Desktop Return
  function Connect() {

    if (isMobileDevice()) {

      const dappUrl = "metamask.app.link/dapp/opensea.io/"    //deep link for mobile users - will be set to opensea until TriLinked is hosted
      const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl; 

      return (
        <a href = {metamaskAppDeepLink}> 
          <button>Connect</button> 
        </a>    
      ); 
    }



    //Displays sliced wallet address upon connect 
    if (userAddress !== "") {
        return (
          <p>Connected: {userAddress.substring(0, 2)}...{userAddress.substring(userAddress.length - 3)}</p>
        )
    }

    return (<button onClick = {() => { connect(setUserAddress) }}> Connect Wallet </button>); 
  }

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
  

  //Claim Dividends 

  const underdogzAddress = "0x5e23A18ab660fBCc93308a6e1B568Ed83297Ad13";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const underdogzContract = new ethers.Contract(underdogzAddress, underdogzABI, provider.getSigner())

  async function claimDividends() {

    const claim = underdogzContract.claimDividends(userAddress);
    console.log(userAddress + " is claiming...");

    if (!userAddress) {
      alert("Please connect to Metamask"); 
    } 
  }
  

  return(

   
    <Section>

      <Suspense fallback={<Loading />}>
        <SnowfallComponent />{' '}
      </Suspense>

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

        <button className = 'daoBtn' onClick = {claimDividends}> Claim Dividends </button>

        <button className = 'daoBtn'><Connect/></button>

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