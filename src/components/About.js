import React, { Component } from 'react'
import Card from './Card.tsx'
import styled from 'styled-components'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-bottom: 10px solid rgb(2/55, 255, 255);
  background-color: #141414;
  color: white;
`

const Container = styled.div`
  width: 90%;
  height: 60vh;
  background-color: ${(props) => props.theme.body};
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
  border: 2px solid white;
`

const TextContainer = styled.div`
  font-size: 125%;
  width: 60%;
  margin: 0 2.5rem;
  // background-color: #262626;

  justify-content: center;
  align-items: center;

  border-radius: 20px;
  cursor: pointer;

  // @media (max-width: 50em) {
  //   width: 13rem;
  // }
  // @media (max-width: 50em) {
  //   width: 11rem;
  // }

  // margin: img {
  //   width: 100%;
  //   height: auto;
  // }
  border: 2px solid white;
`

const About = () => {
  return (
    <Section>
      <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">About</h2>
      <Container>
        <TextContainer>
          <div>
            <p class="mt-8">
              Our team has been involved with the crypto/web 3 space since 2016.
              We’ve seen booms and busts in the market but never lost faith. In
              the last 2 years we’ve seen the rise of the NFT space. We
              absolutely fell in love with the idea and community behind NFT’s.
            </p>
          </div>
        </TextContainer>
        <TextContainer>
          <div></div>
        </TextContainer>
      </Container>

      <Container>
        <TextContainer>
          <div></div>
        </TextContainer>
        <TextContainer>
          <div>
            <p class="mt-8">
              We absolutely fell in love with the idea and community behind
              NFT’s. We have created the opportunity for everyone to get
              involved in the top 1% of NFTs and digital assets. With this
              project everyone will get value from what NFTs have to offer. The
              sky's the limit with this treasury. The Underdogz team has been
              trading and participating in projects for 2 years now.
            </p>
          </div>
        </TextContainer>
      </Container>
      <Container>
        <TextContainer>
          <div>
            <p class="mt-8">
              We’ve been through alot of rug pulls and had our dreams crushed by
              the greed and corruption behind certain projects. We are fed up
              with this happening and decided to create a project ourselves to
              fulfill the promises made to us by other projects. That is how the
              UNDERDOGZ project was born. By the people, for the people #dogz .
            </p>
          </div>
        </TextContainer>
        <TextContainer>
          <div></div>
        </TextContainer>
      </Container>
    </Section>
  )
}

export default About
