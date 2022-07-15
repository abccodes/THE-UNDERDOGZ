import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import img1 from './assets/nic.png'
import img2 from './assets/nic.png'
import img3 from './assets/nic.png'
import img4 from './assets/nic.png'
import img5 from './assets/nic.png'
import img6 from './assets/nic.png'
import img7 from './assets/nic.png'
import img8 from './assets/nic.png'
import img9 from './assets/nic.png'
import img10 from './assets/nic.png'
import ETH from './assets/ethereum-eth.webp'

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  // background-color: white;
  background-color: #161717;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 30s;
    @media (max-width: 30em) {
      animation-duration: 20s;
    }
  }
`
const move = keyframes`
0%{ transform: translateX(100%)   };
100%{ transform: translateX(-100%)   }

`

const Row = styled.div`
  // background-color: lightblue;
  white-space: nowrap;
  box-sizing: content-box;
  margin: 1rem 0;
  display: flex;
  animation: ${move} linear infinite ${(props) => props.direction};
  position: absolute;
  bottom: 0;
`
const ImgContainer = styled.div`
  width: 10rem;
  height: 10rem;

  margin: 0 2rem;
  background-color: white;

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 100%;
    height: 100%;
  }
`

const Details = styled.div`
  width: 75%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`

const NftItem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running'
  }
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused'
  }

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img width={500} height={400} src={img} alt="The Weirdos" />
      {/* <Details>
        <div>
          <span>UDZ</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
            <img width={200} height={200} src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details> */}
    </ImgContainer>
  )
}

const Showcase = () => {
  const Row1Ref = useRef(null)
  const Row2Ref = useRef(null)

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} />
        <NftItem img={img2} />
        <NftItem img={img3} />
        <NftItem img={img4} />
        <NftItem img={img5} />
        <NftItem img={img6} />
        <NftItem img={img7} />
        <NftItem img={img8} />
        <NftItem img={img9} />
        <NftItem img={img10} />
      </Row>
    </Section>
  )
}

export default Showcase
