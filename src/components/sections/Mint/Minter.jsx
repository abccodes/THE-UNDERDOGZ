import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import { Provider } from 'react-redux'
import store from './redux/store'
import img from '../../assets/giphy (3).gif'
import Count from './CountdownTimer/CountdownTimer'
import lightning1 from "../../assets/Lightning_Bursts_1_2286_2K.gif"
import {getRemainingTimeUntilMsTimestamp} from "./CountdownTimer/Utils/CountdownTimerUtils"

const Section = styled.a`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const ContainerCenter = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`

const Header = styled.h1`

  display: flex; 

  background: linear-gradient(-45deg, #282525, #1a191a, #2d2d2d, #2c2b2b);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  padding: 1px;
  padding-left: 10px;
  padding-right: 10px;

  // border-radius: 2rem;
  box-shadow: 0px 0px 10px 5px #2b2b2b; 
 
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  width: fit-content;
`
const Box = styled.div`
  background: linear-gradient(-45deg, #282525, #1a191a, #2d2d2d, #2c2b2b);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: .5px solid black;
  margin-top: 2.5%;
  box-shadow: 0px 0px 20px 10px #4e32a8;
  border-radius: 45px;
  margin-top 5%;
`

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px #2d2d2d;
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;


export const StyledImg = styled.img`
  border: 5px solid #2d2d2d;  
  border-radius: 100rem;  
`;

const Title = styled.h2`
  text-align: center;
  font-size: 4em;
  text-transform: capitalize;
  color: white;
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
  font-weight: bold;
`

const SubText = styled.p`
  justify-content: center;
  align-items: center;
  display: flex; 
  font-size: 2em;
  color: white;
  align-self: flex-start;
  margin: 1rem auto;
`

const NumberText = styled.p`

  display: flex; 
  font-size: 2.75em;
  color: white;
  align-self: center;
  justify-content: center;
  font-weight: 600;
  margin-top: 2.5px;

`

const SmallText = styled.p`
  display: flex; 
  font-size: .75em;
  color: white;
  align-self: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 1%;
`

const ImgContainer = styled.div`
margin:auto;
cursor: pointer;
width: 40%;
height: auto;
justify-content: center;
align-items: center;
margin-bottom: 15px;
`


function Mint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 0,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    const { ethereum } = window
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(ethereum.selectedAddress, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `Congratulations, Minting Sucessful! Visit Opensea To View`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 15) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch('/config/config.json', {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockchain.account]);

  //countdown to display time until mint
  const countdown = 1664953200000;  
  
  return (
    <Section style={{backgroundImage: `url(${lightning1})`}}>
    { 
      
      ((getRemainingTimeUntilMsTimestamp(countdown)).days) > 0 &&
      ((getRemainingTimeUntilMsTimestamp(countdown)).hours) > 0 &&
      ((getRemainingTimeUntilMsTimestamp(countdown)).minutes) > 0 &&
      ((getRemainingTimeUntilMsTimestamp(countdown)).seconds) > 0

     ? (<Count countdownTimestampMs={countdown}/>) 
    : 
     
     
     (
    <ContainerCenter>
      <Header>
      <Count countdownTimestampMs={countdown}/>
      </Header>
      
        <Box>        
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <Title style={{ textAlign: "center", color: "white" }} className="Baloo2 ">
                The sale has ended
              </Title>
              <SubText style={{ textAlign: "center", color: "white" }} className="mont">
                <a href={CONFIG.MARKETPLACE_LINK}> Opensea</a>
              </SubText >
            </>
          ) : (
            <>
                      <NumberText className="Baloo2">
            {data.totalSupply} / {CONFIG.MAX_SUPPLY}
          </NumberText>
              <SmallText
                className="about"
              >
                1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                {CONFIG.NETWORK.SYMBOL}
              </SmallText>
              <ImgContainer>
      <StyledImg src={img} alt="UnderDogZ" />
      </ImgContainer>
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <s.Container ai={"center"} jc={"center"}>

                  <button className="mintBtn Baloo2"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    CONNECT
                  </button>
                  <SmallText
                    className="mont"
                    style={{textAlign: "center", color: "white",}}>
                    Connect to the {CONFIG.NETWORK.NAME} network
                  </SmallText>
                  {blockchain.errorMsg !== "" ? (
                    <>
                      <s.SpacerSmall />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        {blockchain.errorMsg}
                      </s.TextDescription>
                    </>
                  ) : null}
                </s.Container>
              ) : (
                <>
                  <s.TextDescription
                    className="mont"
                    style={{
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    {feedback}
                  </s.TextDescription>
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledRoundButton
                      style={{ lineHeight: 0.4 }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      -
                    </StyledRoundButton>
                    <s.SpacerMedium />
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      {mintAmount}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <StyledRoundButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      +
                    </StyledRoundButton>
                  </s.Container>
                  <s.SpacerSmall />
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    
                    <button
                      className="mintBtn"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? <p className="Baloo2">MINTING</p> : <p className="Baloo2">MINT</p>}
                    </button>
                  </s.Container>
                </>
              )}
            </>
          )}

        </Box>
      
       </ContainerCenter>
       )}   
    </Section>
  );
}

function Minter() { return (
  <Provider store={store}>
    <Mint/>
  </Provider>
)};

export default Minter;