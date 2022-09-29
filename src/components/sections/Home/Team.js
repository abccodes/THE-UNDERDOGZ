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
  height: auto;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(-45deg, #37829f, #ae71ae, #2f57cf, #cf63c4);
  background-size: 400% 400%;
	animation: gradient 15s ease infinite;
  justify-content: center;
  align-items: center;
`


const Container = styled.div`
  width: 100%;
  height: auto;    

  display: flex;
  flex-wrap: wrap;
  flex-direction: row; 

  justify-content: space-evenly;
  align-items: center;
  
  gap: 25px;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center; 
    gap: 15px; 
  }

 

  @media (max-width: 48em) {
    width: 100%;
    display: flex;
    
    align-items: center;
    flex-wrap: wrap;
  }

  // background-color: white;
`

const Item = styled.div`

  width: 250px;
  height: 350px; 
  position: relative;
  margin-top: 45px;
  margin-bottom: 45px;
  padding: 1rem 0;

  color: #fff;
  background-color: #1e1e1f;
  box-shadow: 0 0 2.5px 10px #32323240;
  border-radius: 2rem;
  backdrop-filter: blur(4px);

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 1200px) {
    width: 200px;
    height: 300px;
    padding: 1rem 0;
    
    z-index: 5;
    
  }
  
  @media (max-width: 700px) {
    width: 250px;
    height: 350px;
    
    z-index: 5;
  }
  
  @media (max-width: 450px) {
    width: 200px;
    height: 300px;
    
    z-index: 5;
  }
  
`

const ItemSpace = styled.div`
  width: calc(20rem - 4vw);
  padding: 2rem 0;
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
    width: calc(13rem - 4vw);d
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
//Dog Image: 
const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: white;
  border: 10px solid #2d2d2d;
  padding: 1rem;

  border-radius: 100rem;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`

const Name = styled.h2`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;  
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fff;
  margin-top: 10px;
`

const Position = styled.h2`
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: white;
  font-weight: 400;
  margin-top: 5px; 
`

const Icon = styled.h2`
  font-size: 1em;
  display: fixed;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 10px;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  border: none; 

  background-color: #121113;
  box-shadow: 0px 0px 500px 500px #121113;

  padding-bottom: 45px;
  padding-top: 45px; 
  background: #121113; 


  color: white;
  font-size: 50px;
  font-weight: 700;
  font-family: "Baloo 2";
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center; 
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
        <img width={500} height={200} src={img} alt={name} />
      </ImageContainer>
      <Name className="Baloo2">{name}</Name>
      <Position className="mont">{position}</Position>
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

      <Header>Team</Header>
      <Section id="team">
       
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
              position="Founder"
              twitter="https://twitter.com/HunterSkellengr"
            />
            <MemberComponent
              img={img2}
              name="NIC"
              position="Founder"
              twitter="https://twitter.com/nicci_burns"
            />
            <MemberComponent
              img={img3}
              name="LEE"
              position="Founder"
              twitter="https://twitter.com/Lee_Michaelson1"
            />
            
          </Container>
          <Container>
            <MemberComponent
                img={img4}
                name="BEN"
                position="Developer"
                twitter="https://twitter.com/B3nskiii"
              />
              <MemberComponent
                img={img5}
                name="AIDAN"
                position="Developer"
                twitter="https://twitter.com/Aidan__eth"
              />
          </Container>
        </motion.div>
        
      </Section>
    </div>
  )
}

export default Team