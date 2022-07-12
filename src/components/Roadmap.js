import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from './DrawSvg.js'

const Section = styled.section`
  min-height: 212vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background-color: #161717;
`
const Title = styled.h1`
  font-size: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  // border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: 2em;
  }
  letter-spacing: 15px;
  color: white;
`
const Container = styled.div`
  width: 80%;
  height: 150vh;
  // background-color: #1c1c1c;
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
  // border: 2px solid white;
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
  border: 2px solid #fff;
  color: white;
  @media (max-width: 48em) {
    width: 70%;
  }
  // background-color: white;
  // opacity: 0.3;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #1e1e1f;
`
const Box = styled.p`
  height: fit-content;
  // background-color: black;
  color: #202020;
  padding: 1rem;
  position: relative;
  // border: 1px solid white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const SubTitle = styled.span`
  display: block;
  font-size: 1.25em;
  text-transform: capitalize;
  color: white;

  @media (max-width: 40em) {
    font-size: 2em;
    font-weight: 600;
  }
  font-family: 'Baloo 2', cursive;
`
const Text = styled.span`
  display: block;
  font-size: 1em;
  text-transform: capitalize;
  color: white;

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: 0.75em;
  }
`

const RoadMapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title} </SubTitle>
          <Text>{subtext}</Text>
        </Box>
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
    <Section>
      <Title></Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRef={addToRefs}
            title="Website Release"
            subtext="Website and roadmap release."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Mint"
            subtext="MINT 100% of the Underdogz which funds the DAO"
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Reveal"
            subtext="The Underdogz, and start exclusive raffles to DAO members. DAO is
            funded with over 400 ETH allocated to our fund for BLUE chip NFTS."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="The Vote"
            subtext="Each Underdog NFT is 1 VOTE on which blue chip NFT projects to
            invest in. The DAO together will vote on all future decisions. Examples of NFT’s to buy:
            BAYC, MAYC, AZUKI, ABS, moon birds"
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Payout"
            subtext="Pay out holders as investments grow"
          />
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap
