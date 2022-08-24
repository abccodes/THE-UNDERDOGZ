import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import { Provider } from 'react-redux'
import img1 from "../../assets/1.png"
import store from './redux/store'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import img from '../../assets/giphy (3).gif'
import Count from './CountdownTimer/CountdownTimer'
import lightning1 from "../../assets/Lightning_Bursts_1_2286_2K.gif"


const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;



export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: white;
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: white;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: #efe6fc;
  text-decoration: none;
  justify-content: center;
  align-items: center;

`;

const Section = styled.a`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  // background-color: #161717;
`

const Container = styled.div`
width: 80%;
margin: 1rem auto;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
  justify-content: center;
}
justify-content: center;
align-items: center;
`


const ContainerCenter = styled.div`
  width: 80%;
  margin: 2rem auto;

  display: flex;
  // justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  width: 50%;
  max-height: 600px;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 40em) {
    min-height: 50vh;
  }
  border: .5px solid black;
  margin-top: 3%;
  background-color: #171717;
  box-shadow: 0px 0px 40px 20px #4e32a8;
  border-radius: 45px;
`

const Title = styled.h2`
  text-align: center;
  font-size: 4em;
  text-transform: capitalize;
  color: white;
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
  font-weight: bold;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: 3em;
  }
  @media (max-width: 30em) {
    font-size: 1.25em};
  }

`

const MidText = styled.h2`
  text-align: center;
  font-size: 3em;
  text-transform: capitalize;
  color: white;
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
  font-weight: bold;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: 1.5em;
  }
  @media (max-width: 30em) {
    font-size: 1em};
  }

`

const SubText = styled.p`
  display: flex; 
  justify-content: space-evenly;
  font-size: 1.5em;
  color: white;
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: bold;
`

const NumberText = styled.p`
  display: flex; 

  font-size: 2em;
  color: white;
  align-self: center;
  justify-content: center;
  font-weight: 600;
  // font-weight: bold;

  margin-top: 5px;
`

const SmallText = styled.p`
  display: flex; 

  font-size: .75em;
  color: white;
  align-self: center;
  justify-content: center;
  font-weight: bold;

  margin-top: 5px;
`


const Button = styled.button`
  background: #fff5f6;
  // background: -webkit-linear-gradient(top, #9c3e5e, #d665ab);
  // background: -moz-linear-gradient(top, #9c3e5e, #d665ab);
  // background: -ms-linear-gradient(top, #9c3e5e, #d665ab);
  // background: -o-linear-gradient(top, #9c3e5e, #d665ab);
  padding: 0px 6px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
  -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
  -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
  box-shadow: rgba(0,0,0,1) 0 1px 0;
  text-shadow: rgba(0,0,0,.4) 0 px 0;
  color: #000000;
  font-size: 30px;
  font-weight: 500;
`

const ImgContainer = styled.div`
margin-top: 10%;
margin:auto;

cursor: pointer;

@media (max-width: 48em) {
  width: 12rem;
}
@media (max-width: 30em) {
  width: 10rem;
}

// border-radius: 50px;
width: 50%;
height: auto;
border: 4px solid white;
justify-content: center;
align-items: center;
margin-bottom: 6px;
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
      NAME: "Ethereum",
      SYMBOL: "ETH",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
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
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
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
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
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
  }, [blockchain.account]);

  return (
    <Section style={{backgroundImage: `url(${lightning1})`}}>
    <ContainerCenter>
      <Count countdownTimestampMs={1659983662000}/>
        <Box>
          <MidText className="funkFont" >
            {data.totalSupply} / {CONFIG.MAX_SUPPLY}
          </MidText>

          <s.TextDescription
            style={{textAlign: "center"}}>
            <StyledLink className="text" target={"_blank"} href={CONFIG.SCAN_LINK}>
              {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
            </StyledLink>
          </s.TextDescription>

          
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <Title style={{ textAlign: "center", color: "white" }} className="titleFont ">
                The sale has ended
              </Title>
              <MidText style={{ textAlign: "center", color: "white" }} className="">
                You can still find {CONFIG.NFT_NAME} on
              </MidText >
              <SubText 

                target={"_blank"} 
                href={CONFIG.MARKETPLACE_LINK}>
                {CONFIG.MARKETPLACE}
              </SubText >
            </>
          ) : (
            <>
              <SmallText
                style={{ textAlign: "center", color: "white" }}
                className="subFont"
              >
                1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                {CONFIG.NETWORK.SYMBOL}
              </SmallText>
              <ImgContainer>
      <img width={500} height={400} src={img} alt="UnderDogZ" />
      </ImgContainer>
              {blockchain.account === "" ||
              blockchain.smartContract === null ? (
                <s.Container ai={"center"} jc={"center"}>

                  <button className="button-85 titleFont"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    CONNECT
                  </button>
                  <SmallText
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
                    style={{
                      textAlign: "center",
                      color: "white",
                    }}
                    className="text"
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
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? "BUSY" : "BUY"}
                    </StyledButton>
                  </s.Container>
                </>
              )}
            </>
          )}
          <s.SpacerMedium />
        {/* </s.Container> */}
        </Box>
      {/* <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
        <s.TextDescription
          style={{
            textAlign: "center",
            color: "var(--primary-text)",
          }}
        >
          Please make sure you are connected to the right network (
          {CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note:
          Once you make the purchase, you cannot undo this action.
        </s.TextDescription>
        <s.SpacerSmall />
        <s.TextDescription
          style={{
            textAlign: "center",
            color: "var(--primary-text)",
          }}
        >
          We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
          successfully mint your NFT. We recommend that you don't lower the
          gas limit.
        </s.TextDescription>
      </s.Container> */}
       </ContainerCenter>
    </Section>
  //   <Section style={{backgroundImage: `url(${lightning1})`}}>
  //   <ContainerCenter>
    
  //     <Count countdownTimestampMs={1659983662000}/>
  //     <Box > 
  //     <SubText className='titleNumbers'> {data.totalSupply} / {CONFIG.MAX_SUPPLY}</SubText>
  //     <SubText style={{ textAlign: "center"}}>
  //   {CONFIG.DISPLAY_COST}{" "}
  //    {CONFIG.NETWORK.SYMBOL}
  //   </SubText>
  //     <ImgContainer>
  //     <img width={500} height={400} src={img} alt="UnderDogZ" />
  //     </ImgContainer>
  //     <Container>     
         
  //     {/* <AiFillMinusCircle color='white' className="MintIcons"/>
  //     <button className="button-85 titleFont" role="button">MINT</button>      
  //     <AiFillPlusCircle color='white' className='MintIcons'/> */}
  //     </Container>
  //     <SubText className='boxText subFont' color='white'>1</SubText>
  //     {/* <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
  //     {CONFIG.MARKETPLACE}
  //     </StyledLink> */}
  //     {/* <Showcase/> */}
  //     {/* <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
  //     {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
  //     </StyledLink> */}
  //     </Box>
  //   </ContainerCenter>
  // </Section>

  // <s.Screen>
  //     <s.Container
  //       flex={1}
  //       ai={"center"}
  //       style={{ padding: 24, backgroundColor: "var(--primary)" }}
  //       image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
  //     >
  //       <StyledLogo alt={"logo"} src={"/config/images/logo.png"} />
  //       <s.SpacerSmall />
  //       <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
  //         <s.Container flex={1} jc={"center"} ai={"center"}>
  //           <StyledImg alt={"example"} src={"../../assets/1.png"} />
  //         </s.Container>
  //         <s.SpacerLarge />
  //         <s.Container
  //           flex={2}
  //           jc={"center"}
  //           ai={"center"}
  //           style={{
  //             backgroundColor: "var(--accent)",
  //             padding: 24,
  //             borderRadius: 24,
  //             border: "4px dashed var(--secondary)",
  //             boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
  //           }}
  //         >
  //           <s.TextTitle
  //             style={{
  //               textAlign: "center",
  //               fontSize: 50,
  //               fontWeight: "bold",
  //               color: "var(--accent-text)",
  //             }}
  //           >
  //             {data.totalSupply} / {CONFIG.MAX_SUPPLY}
  //           </s.TextTitle>
  //           <s.TextDescription
  //             style={{
  //               textAlign: "center",
  //               color: "var(--primary-text)",
  //             }}
  //           >
  //             <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
  //               {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
  //             </StyledLink>
  //           </s.TextDescription>
  //           <s.SpacerSmall />
  //           {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
  //             <>
  //               <s.TextTitle
  //                 style={{ textAlign: "center", color: "var(--accent-text)" }}
  //               >
  //                 The sale has ended.
  //               </s.TextTitle>
  //               <s.TextDescription
  //                 style={{ textAlign: "center", color: "var(--accent-text)" }}
  //               >
  //                 You can still find {CONFIG.NFT_NAME} on
  //               </s.TextDescription>
  //               <s.SpacerSmall />
  //               <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
  //                 {CONFIG.MARKETPLACE}
  //               </StyledLink>
  //             </>
  //           ) : (
  //             <>
  //               <s.TextTitle
  //                 style={{ textAlign: "center", color: "var(--accent-text)" }}
  //               >
  //                 1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
  //                 {CONFIG.NETWORK.SYMBOL}.
  //               </s.TextTitle>
  //               <s.SpacerXSmall />
  //               <s.TextDescription
  //                 style={{ textAlign: "center", color: "var(--accent-text)" }}
  //               >
  //                 Excluding gas fees.
  //               </s.TextDescription>
  //               <s.SpacerSmall />
  //               {blockchain.account === "" ||
  //               blockchain.smartContract === null ? (
  //                 <s.Container ai={"center"} jc={"center"}>
  //                   <s.TextDescription
  //                     style={{
  //                       textAlign: "center",
  //                       color: "var(--accent-text)",
  //                     }}
  //                   >
  //                     Connect to the {CONFIG.NETWORK.NAME} network
  //                   </s.TextDescription>
  //                   <s.SpacerSmall />
  //                   <StyledButton
  //                     onClick={(e) => {
  //                       e.preventDefault();
  //                       dispatch(connect());
  //                       getData();
  //                     }}
  //                   >
  //                     CONNECT
  //                   </StyledButton>
  //                   {blockchain.errorMsg !== "" ? (
  //                     <>
  //                       <s.SpacerSmall />
  //                       <s.TextDescription
  //                         style={{
  //                           textAlign: "center",
  //                           color: "var(--accent-text)",
  //                         }}
  //                       >
  //                         {blockchain.errorMsg}
  //                       </s.TextDescription>
  //                     </>
  //                   ) : null}
  //                 </s.Container>
  //               ) : (
  //                 <>
  //                   <s.TextDescription
  //                     style={{
  //                       textAlign: "center",
  //                       color: "var(--accent-text)",
  //                     }}
  //                   >
  //                     {feedback}
  //                   </s.TextDescription>
  //                   <s.SpacerMedium />
  //                   <s.Container ai={"center"} jc={"center"} fd={"row"}>
  //                     <StyledRoundButton
  //                       style={{ lineHeight: 0.4 }}
  //                       disabled={claimingNft ? 1 : 0}
  //                       onClick={(e) => {
  //                         e.preventDefault();
  //                         decrementMintAmount();
  //                       }}
  //                     >
  //                       -
  //                     </StyledRoundButton>
  //                     <s.SpacerMedium />
  //                     <s.TextDescription
  //                       style={{
  //                         textAlign: "center",
  //                         color: "var(--accent-text)",
  //                       }}
  //                     >
  //                       {mintAmount}
  //                     </s.TextDescription>
  //                     <s.SpacerMedium />
  //                     <StyledRoundButton
  //                       disabled={claimingNft ? 1 : 0}
  //                       onClick={(e) => {
  //                         e.preventDefault();
  //                         incrementMintAmount();
  //                       }}
  //                     >
  //                       +
  //                     </StyledRoundButton>
  //                   </s.Container>
  //                   <s.SpacerSmall />
  //                   <s.Container ai={"center"} jc={"center"} fd={"row"}>
  //                     <StyledButton
  //                       disabled={claimingNft ? 1 : 0}
  //                       onClick={(e) => {
  //                         e.preventDefault();
  //                         claimNFTs();
  //                         getData();
  //                       }}
  //                     >
  //                       {claimingNft ? "BUSY" : "BUY"}
  //                     </StyledButton>
  //                   </s.Container>
  //                 </>
  //               )}
  //             </>
  //           )}
  //           <s.SpacerMedium />
  //         </s.Container>
  //         <s.SpacerLarge />
  //         <s.Container flex={1} jc={"center"} ai={"center"}>
  //           <StyledImg
  //             alt={"example"}
  //             src={"/config/images/example.gif"}
  //             style={{ transform: "scaleX(-1)" }}
  //           />
  //         </s.Container>
  //       </ResponsiveWrapper>
  //       <s.SpacerMedium />
  //       <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
  //         <s.TextDescription
  //           style={{
  //             textAlign: "center",
  //             color: "var(--primary-text)",
  //           }}
  //         >
  //           Please make sure you are connected to the right network (
  //           {CONFIG.NETWORK.NAME} Mainnet) and the correct address. Please note:
  //           Once you make the purchase, you cannot undo this action.
  //         </s.TextDescription>
  //         <s.SpacerSmall />
  //         <s.TextDescription
  //           style={{
  //             textAlign: "center",
  //             color: "var(--primary-text)",
  //           }}
  //         >
  //           We have set the gas limit to {CONFIG.GAS_LIMIT} for the contract to
  //           successfully mint your NFT. We recommend that you don't lower the
  //           gas limit.
  //         </s.TextDescription>
  //       </s.Container>
  //     </s.Container>
  //   </s.Screen>
  );
}

function Minter() { return (
  <Provider store={store}>
    <Mint/>
  </Provider>
)};

export default Minter;