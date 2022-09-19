import gsap from 'gsap'
import Loading from '../../Loading'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef, lazy, Suspense } from 'react'
import styled from 'styled-components'
import DrawSvg from './DrawSvg.js'
import { motion } from 'framer-motion'
import '../../fonts.css'
const ConfettiComponent = lazy(() => import('./Confetti.js'))

const Section = styled.section`
  height: auto;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background-color: #121113;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center; 
  margin-top: 75px;

  padding: 5px;
  background: #121113; 
  

  color: #fff; 
  font-size: 67.2px;
  font-weight: 700;
  font-family: "Baloo 2";
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  
  @media (max-width: 770px) {
    font-size: 64px; 
  }

  @media (max-width: 480px) {
    font-size: 50px; 
  }

`
const Line = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;

  width: 100%;
  height: 5px;
  border-radius: 2rem;

  background-color: #2d2d2d;
  opacity: .5;
`

const Container = styled.div`
  margin-top: 10%;
  width: 80%;
  height: auto;
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
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Items = styled.ul`
  margin-top: 5%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;

  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      text-align: right;

      @media (max-width: 48em) {
        // border-radius: 0 50px 0 50px;
        text-align: left;
        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      text-align: left;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
  // border: 2px solid white;
`

const Item = styled.li`
  width: 110%;
  height: 100%;
  display: flex;
  margin: 5rem;
`
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 2rem;
  border: 3px solid #32323240;
  color: white;
  @media (max-width: 48em) {
    width: 80%;
    
  }
  background-color: white;
  border-radius: 2rem; 
  background-color: #1e1e1f;
  box-shadow: 0px 5px 30px -10px #3a0ca3;
`

const SubTitle = styled.span`
  display: block;

  color: white;
  font-size: 25px;
  font-weight: bold; 
  text-transform: capitalize;
  text-decoration: underline; 
  letter-spacing: 1.5px; 

  @media (max-width: 48em) {
    font-size: 30px;
    font-weight: 600;
    text-align: center; 
  }
  font-family: 'Baloo 2', cursive;
`
const Text = styled.span`
  display: block;
  font-size: 20px;
  text-transform: capitalize;
  color: white;

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 48em) {
    font-size: 20px;
    text-align: center;  
  }
`

const RoadMapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef} className="disMiddle">
      <ItemContainer>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          // animate={{
          //   opacity: 1,
          // }}
          transition={{
            duration: 3,
          }}
        >
          <SubTitle className="Baloo2">{title} </SubTitle>
          <Text className="">{subtext}</Text>
        </motion.div>
      </ItemContainer>
    </Item>
  )
}

const Roadmap = () => {
  const revealRefs = useRef([])
  revealRefs.current = []
  gsap.registerPlugin(ScrollTrigger)

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <Section>
      <Line></Line>
      <Header>Roadmap</Header>
      <Suspense fallback={<Loading />}>
        <ConfettiComponent />{' '}
      </Suspense>

      <Container>

        
          <DrawSvg className = "self-center"></DrawSvg>
        
      
        <Items>
          <RoadMapItem
            addToRef={addToRefs}
            title="Website Release"
            subtext="Website and roadmap release."
          />

          <RoadMapItem
            addToRef={addToRefs}
            title="Mint"
            subtext="MINT 100% of the Underdogz which funds the DAO"
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Reveal"
            subtext="The Underdogz, and start exclusive raffles to DAO members. DAO is
            funded with over 400 ETH allocated to our fund for BLUE chip NFTS."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="The Vote"
            subtext="Each Underdog NFT is 1 VOTE on which blue chip NFT projects to
            invest in. The DAO together will vote on all future decisions. Examples of NFT’s to buy:
            BAYC, MAYC, AZUKI, ABS, moon birds"
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Payout"
            subtext="Pay out holders as investments grow"
          />
        </Items>
      </Container>
      
    </Section>
    
  )
}

export default Roadmap