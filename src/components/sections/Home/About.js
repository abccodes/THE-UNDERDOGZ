import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
// import Carousel from '../Carousel'
// import Loading from '../Loading'
import Card from './Card.tsx'
import { motion } from 'framer-motion'
// import fire from '../../assets/Looping_Fire_2_4001_HD_AdobeExpress (1).gif'
import lightning from '../../assets/Lightning_Bursts_1_2286_2K.gif'
// import cloud from '../../assets/Cartoon-Smoke-2-4003-HD.gif'

// const Carousel = lazy(() => import('./Carousel'))

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #161717;
`
const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  width: 50%;
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

const Title = styled.h2`
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
  font-family: 'Baloo 2', cursive;
`

const SubText = styled.p`
  font-size: 1.25em;
  color: white;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: 1em;
  }
  @media (max-width: 40em) {
    font-size: 1em;
  }
  @media (max-width: 30em) {
    font-size: 1em;
  }
  font-family: 'Baloo 2', cursive;
  font-weight: bold;
`

const SubTextLight = styled.p`
  font-size: 1em;
  color: #c2c2c2;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  font-weight: bold;

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
  font-family: 'Baloo 2', cursive;
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
    <Section style={{ backgroundImage: `url(${lightning})` }}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        // animate={{
        //   opacity: 1,
        // }}
        transition={{
          duration: 1.5,
        }}
      >
        <Container>
          <Box>
            <Title>About us</Title>
            <SubText>The UnderDogZ are a group of 8000 randoml</SubText>
            <SubTextLight>
              We have created the opportunity for everyone to get involved in
              the top 1% of NFTs and digital assets. With this project everyone
            </SubTextLight>
            <ButtonContainer></ButtonContainer>
          </Box>
          <Box>
            <Card />
            {/* fallback={<Loading />} */}
            <Suspense>{/* <Carousel />{' '} */}</Suspense>{' '}
          </Box>
        </Container>
      </motion.div>
    </Section>
  )
}

export default About
