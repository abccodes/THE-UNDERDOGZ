import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import img1 from '../../assets/nic.png'
import img2 from '../../assets/nic.png'
import img3 from '../../assets/nic.png'
import img4 from '../../assets/nic.png'
import img5 from '../../assets/nic.png'
import img6 from '../../assets/nic.png'
import img7 from '../../assets/nic.png'
import img8 from '../../assets/nic.png'
import img9 from '../../assets/nic.png'
import img10 from '../../assets/nic.png'
// import ETH from './assets/ethereum-eth.webp'

const Section = styled.section`
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  // overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 20s;
    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  z-index: -5;
`

const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`

const Row = styled.div`
  /* background-color: lightblue; */
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} linear infinite ${(props) => props.direction};
`
const ImgContainer = styled.div`
  width: 15rem;
  // margin: 0 1rem;
  // background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 50%;
    height: auto;
    border: 6px solid white;
  }
`

const NftItem = ({ img, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running'
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused'
  }

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img width={500} height={400} src={img} alt="UnderDogZ" />
    </ImgContainer>
  )
}

const Showcase = () => {
  const Row1Ref = useRef(null)
  const Row2Ref = useRef(null)

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={852} price={1} passRef={Row1Ref} />
        <NftItem img={img2} number={123} price={1.2} passRef={Row1Ref} />
        <NftItem img={img3} number={456} price={2.5} passRef={Row1Ref} />
        <NftItem img={img4} number={666} price={3.5} passRef={Row1Ref} />
        <NftItem img={img5} number={452} price={4.7} passRef={Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img6} number={888} price={1.2} passRef={Row2Ref} />
        <NftItem img={img7} number={211} price={3.2} passRef={Row2Ref} />
        <NftItem img={img8} number={455} price={1.8} passRef={Row2Ref} />
        <NftItem img={img9} number={456} price={5.1} passRef={Row2Ref} />
        <NftItem img={img10} number={865} price={3.7} passRef={Row2Ref} />
      </Row>
    </Section>
  )
}

export default Showcase
