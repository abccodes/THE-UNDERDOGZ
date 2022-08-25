import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'

import img1 from '../../assets/hunter-removebg-preview.png'
import img2 from '../../assets/nic-removebg-preview.png'
import img3 from '../../assets/lee-removebg-preview.png'
import img4 from '../../assets/1-removebg-preview.png'
import img5 from '../../assets/3500-removebg-preview.png'
import Twitter from '../../Icons/Twitter'
import { motion } from 'framer-motion'
import '../../fonts.css'

const Section = styled.section`
  height: 150vh;
  width: 100vw;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  background-color: #3a0ca3;
`
const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid #fff;
  width: fit-content;

  @media (max-width: 40em) {
    font-size: 2em;
  }
`

const Container = styled.div`
  height: 5%;
  width: 80%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  @media (max-width: 48em) {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem auto;
  }
  // background-color: white;
`
const ContainerCenter = styled.div`
  width: 80%;
  margin: 2rem auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  @media (max-width: 48em) {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem auto;
  }
`

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: #fff;
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  border: 2px solid #fff;
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 75em) {
    width: calc(17rem - 4vw);
    padding: 1rem 0;
    color: #fff;
    margin: 2rem 1rem;
    position: relative;
    z-index: 5;
    backdrop-filter: blur(4px);
    border: 2px solid #fff;
    border-radius: 20px;
  }
  @media (max-width: 65em) {
    width: calc(15rem - 4vw);
    padding: 1rem 0;
    color: #fff;
    margin: 2rem 1rem;
    position: relative;
    z-index: 5;
    backdrop-filter: blur(4px);
    border: 2px solid #fff;
    border-radius: 20px;
  }
  @media (max-width: 57em) {
    width: calc(13rem - 4vw);
    padding: 1rem 0;
    color: #fff;
    margin: 2rem 1rem;
    position: relative;
    z-index: 5;
    backdrop-filter: blur(4px);
    border: 2px solid #fff;
    border-radius: 20px;
  }
}
  @media (max-width: 50em) {
    width: calc(12rem - 4vw);
    padding: 1rem 0;
    color: #fff;
    margin: 2rem 1rem;
    position: relative;
    z-index: 5;

    backdrop-filter: blur(4px);

    border: 2px solid #fff;
    border-radius: 20px;
  }
  background-color: #1e1e1f;
  box-shadow: 0px 0px 40px 20px #4e32a8;
`

const ItemSpace = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: #fff;
margin: 2rem 1rem;
position: relative;
z-index: 5;
margin: 0px 75px 0px;

backdrop-filter: blur(4px);

border: 2px solid #fff;
border-radius: 20px;

&:hover {
  img {
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 75em) {
  width: calc(17rem - 4vw);
  padding: 1rem 0;
  color: #fff;
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;
  backdrop-filter: blur(4px);
  border: 2px solid #fff;
  border-radius: 20px;
  margin: 0px 75px 0px;
}
@media (max-width: 65em) {
  width: calc(15rem - 4vw);
  padding: 1rem 0;
  color: #fff;
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;
  backdrop-filter: blur(4px);
  border: 2px solid #fff;
  border-radius: 20px;
  margin: 0px 50px 0px;
}
@media (max-width: 57em) {
  width: calc(13rem - 4vw);
  padding: 1rem 0;
  color: #fff;
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;
  backdrop-filter: blur(4px);
  border: 2px solid #fff;
  border-radius: 20px;
  margin: 0px 25px 0px;
}
}
@media (max-width: 50em) {
  width: calc(12rem - 4vw);
  padding: 1rem 0;
  color: #fff;
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  border: 2px solid #fff;
  border-radius: 20px;
  margin: 0px 25px 0px;
}
background-color: #1e1e1f;
box-shadow: 0px 0px 40px 20px #4e32a8;
`

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: white;
  border: 1px solid #fff;
  padding: 1rem;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`

const Name = styled.h2`
  font-size: 1.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fff;
  margin-top: 1rem;
`

const Position = styled.h2`
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: white;
  font-weight: 400;
`

const Icon = styled.h2`
  font-size: 1em;
  display: fixed;
  align-items: center;
  justify-content: center;
  color: white;
`

const MemberComponent = ({
  img,
  name = ' ',
  position = ' ',
  twitter = ' ',
}) => {
  return (
    <Item>
      <ImageContainer>
        <img width={500} height={400} src={img} alt={name} />
      </ImageContainer>
      <Name className="titleFont">{name}</Name>
      <Position className="subFont">{position}</Position>
      <Icon>
        <a href={twitter}>
          <Twitter></Twitter>
        </a>
      </Icon>
    </Item>
  )
}

const MemberComponentSpace = ({
  img,
  name = ' ',
  position = ' ',
  twitter = ' ',
}) => {
  return (
    <ItemSpace>
      <ImageContainer>
        <img width={500} height={400} src={img} alt={name} />
      </ImageContainer>
      <Name className="titleFont">{name}</Name>
      <Position className="subFont">{position}</Position>
      <Icon>
        <a href={twitter}>
          <Twitter></Twitter>
        </a>
      </Icon>
    </ItemSpace>
  )
}

const Team = () => {
  return (
    <div name="team" className=" text-gray-300 ">
      <Section id="team">
        <Title></Title>
        <Container></Container>
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
            <MemberComponent
              img={img1}
              name="HUNTER"
              position="Co-Founder"
              twitter="https://twitter.com/HunterSkellengr"
            />
            <MemberComponent
              img={img2}
              name="NIC"
              position="Co-Founder"
              twitter="https://twitter.com/nicci_burns"
            />
            <MemberComponent
              img={img3}
              name="LEE"
              position="Co-Founder"
              twitter="https://twitter.com/Lee_Michaelson1"
            />
          </Container>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.5,
          }}
        >
          <ContainerCenter>
            <MemberComponentSpace
              img={img4}
              name="BEN"
              position="Developer"
              twitter="https://twitter.com/B3nskiii"
            />
            <MemberComponentSpace
              img={img5}
              name="AIDAN"
              position="Developer"
              twitter="https://twitter.com/Aidan__eth"
            />
          </ContainerCenter>
        </motion.div>
      </Section>
    </div>
  )
}

export default Team
