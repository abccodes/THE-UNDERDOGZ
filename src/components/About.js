import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
// import Carousel from '../Carousel'
// import Loading from '../Loading'
import Card from './Card.tsx'

// const Carousel = lazy(() => import('./Carousel'))

const Section = styled.section`
  min-height: 125vh;
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
  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
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
{
  /* <p>
  Our team has been involved with the crypto/web 3 space since 2016. We’ve seen
  booms and busts in the market but never lost faith. In the last 2 years we’ve
  seen the rise of the NFT space. We absolutely fell in love with the idea and
  community behind NFT’s. We absolutely fell in love with the idea and community
  behind NFT’s. We have created the opportunity for everyone to get involved in
  the top 1% of NFTs and digital assets. With this project everyone will get
  value from what NFTs have to offer. The sky's the limit with this treasury.
  The Underdogz team has been trading and participating in projects for 2 years
  now. We’ve been through alot of rug pulls and had our dreams crushed by the
  greed and corruption behind certain projects. We are fed up with this
  happening and decided to create a project ourselves to fulfill the promises
  made to us by other projects. That is how the UNDERDOGZ project was born. By
  the people, for the people #dogz .
</p> */
}

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Title>About us</Title>
          <SubText>
            The UnderDogZ are a group of 8000 randomly generated ERC-721
            collectable which grants access to one of cryptos first investment
            DAOs. By the people, for the people #dogz.
          </SubText>
          <SubTextLight>
            We have created the opportunity for everyone to get involved in the
            top 1% of NFTs and digital assets. With this project everyone will
            get value from what NFTs have to offer. The Underdogz team has been
            trading and participating in projects for 2 years now.The Underdogz
            team has been trading and participating in projects for 2 years now.
          </SubTextLight>
          <ButtonContainer></ButtonContainer>
        </Box>
        <Box>
          <Card />
          {/* fallback={<Loading />} */}
          <Suspense>{/* <Carousel />{' '} */}</Suspense>{' '}
        </Box>
      </Container>
    </Section>
  )
}

export default About
