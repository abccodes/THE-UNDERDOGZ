import React, { Suspense } from 'react'
import styled from 'styled-components'
import Card from './Card.tsx'
import { motion } from 'framer-motion'
import '../../fonts.css'

const Section = styled.section`
  height: auto;
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
  margin: 75px auto;
  margin-bottom: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 25px;
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
  font-size: 67.2px;
  text-transform: capitalize;
  color: white;
  text-align: left;
  margin: 1 auto;
  font-weight: 800;
  color: #fafaff;
  @media (max-width: 64em) {
    font-size: 64px;
    width: 100%;
  }
  @media (max-width: 45em) {
    font-size: 48px;
  }
  @media (max-width: 30em) {
    font-size: 40px};
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
