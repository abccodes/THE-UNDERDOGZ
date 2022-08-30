import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
// import Carousel from '../Carousel'
// import Loading from '../Loading'
import Card from './Card.tsx'
import { motion } from 'framer-motion'
import '../../fonts.css'

// import fire from '../../assets/Looping_Fire_2_4001_HD_AdobeExpress (1).gif'
// import cloud from '../../assets/Cartoon-Smoke-2-4003-HD.gif'
// const Carousel = lazy(() => import('./Carousel'))

const Section = styled.section`
  min-height: 110vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #121113;
`
const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #221a26;
  border-radius: 25px;
  @media (max-width: 64em) {
    margin-bottom: 20px;
  }
  @media (max-width: 45em) {
    margin-top: 20px;
  }
  @media (max-width: 30em) {
  }
`

const Box = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`
const BoxCard = styled.div``

const Title = styled.h2`
  width: 80%;
  // background-color: white;
  font-size: 4.2em;
  text-transform: capitalize;
  color: white;
  text-align: left;
  margin: 1 auto;
  font-weight: 800;
  color: #fafaff;
  @media (max-width: 64em) {
    font-size: 4em;
    width: 100%;
  }
  @media (max-width: 45em) {
    font-size: 3em;
  }
  @media (max-width: 30em) {
    font-size: 2.5em};
  }
`

const SubText = styled.p`
  font-size: 1.1em;
  color: #fafaff;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 500;
  @media (max-width: 64em) {
    font-size: 1.6em;
    width: 100%;
  }
  @media (max-width: 40em) {
    font-size: 1.3em;
    width: 100%;
  }
  @media (max-width: 30em) {
    font-size: 1em;
    width: 100%;
  }
`

const SubTextLight = styled.p`
  font-size: 1em;
  color: #fafaff;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  // font-weight: bold;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: 0.875em;
  }
  @media (max-width: 40em) {
    font-size: 0.875em;
  }
  @media (max-width: 30em) {
    font-size: 0.75em;
  }
  color: #fafaff;
`

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;

    button {
      margin: 0 auto;
    }
  }
`
const styles = {
  root: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    height: '100%',
    background: '#222',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const About = () => {
  return (
    <Section>
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
        <Container>
          <Box>
            <Title className="Baloo2">About us</Title>
            <SubText className="mont">
              As the NFT space grows, we aim to serve this community and apply
              our knowledge to this NFT-focused DAO. We are creating a community
              DAO Treasury, in which we will allocate 50% of total sales to the
              DAO treasury wallet.
            </SubText>
            <SubText className="mont">
              The purpose of the DAO is to buy blue chip NFT’s and other digital
              assets in order to generate profits for our holders. Anyone who
              holds our NFT’s will have access to vote on future investments
              using the capital from the treasury. Each Underdog you own
              represents a percentage of ownership of the DAO Treasury.
            </SubText>
            <SubText className="mont">
              This is an opportunity for everyone in the NFT space to be
              alongside the biggest holders in the NFT space and own bluechip
              NFT’s, as well as the profit that comes with it!
            </SubText>
          </Box>
          <BoxCard>
            <Card />
            <Suspense>{/* <Carousel />{' '} */}</Suspense>{' '}
          </BoxCard>
        </Container>
      </motion.div>
    </Section>
  )
}

export default About
