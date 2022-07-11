import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from './DrawSvg.js'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: inline-block;
  overflow: hidden;
  background-color: #161717;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  // border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`
const Container = styled.div`
  width: 80%;
  height: 150vh;
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
`
const SvgContainer = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
`

const Items = styled.ul`
  list-style: none;
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
        border-radius: 0 50px 0 50px;
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
`
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 2rem;
  border: 2px solid ${(props) => props.theme.text};
  color: white;
  @media (max-width: 48em) {
    width: 70%;
  }
`

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: white;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: white;

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`

const RoadMapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <SubTitle>{title} </SubTitle>
        <Text>{subtext}</Text>
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

  useLayoutEffect(() => {
    let t1 = gsap.timeline()
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0',
        },
        {
          y: '-30%',

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=200px',
            end: 'bottom center',
            scrub: true,
            // markers:true,
          },
        },
      )
    })

    return () => {
      if (t1) t1.kill()
    }
  }, [])

  return (
    // bgWhiteGradient"
    <div className="">
      <Section id="roadmap">
        <Title className="text-4xl sm:text-8xl  text-[#1a1616 fontColorWhite rdHead ">
          Roadmap
        </Title>
        <Container>
          <SvgContainer>
            <DrawSvg />
          </SvgContainer>
          <Items>
            <Item>&nbsp;</Item>
            <RoadMapItem
              addToRef={addToRefs}
              title="1. MINT"
              subtext="Mint 100% of the Underdogz which funds the DAO."
            />
            <RoadMapItem
              addToRef={addToRefs}
              title="2. REVEAL"
              subtext="Reveal the Underdogz, and start exclusive raffles to DAO members. DAO is
            funded with over 400 ETH allocated to our fund for BLUE chip NFTS."
            />
            <RoadMapItem
              addToRef={addToRefs}
              title="3. THE VOTE"
              subtext="Each Underdog NFT is 1 VOTE on which blue chip NFT projects to
            invest in. The DAO together will vote on all future decisions. Examples of NFT’s to buy:
            BAYC, MAYC, AZUKI, ABS, moon birds"
            />
            <RoadMapItem
              addToRef={addToRefs}
              title="4. PAYOUT"
              subtext="Pay out holders as investments grow"
            />
          </Items>
        </Container>
      </Section>
    </div>
  )
}

export default Roadmap
