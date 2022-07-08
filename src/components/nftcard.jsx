import React, { useRef } from 'react'
import styled from 'styled-components'
import ETH from './assets/ethereum-eth.webp'

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;
    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`

const Row = styled.div`
//   background-color: black;
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
`

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  // border-radius: 20px;
  // cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 100%;
    height: auto;
  }
  
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 0.1px solid black;
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

const NftCard = ( props, price = 0, passRef ) => {
    
    return (
        <ImgContainer>
        <img src= {props.value.image}/>
        <Details>
            <div>
                <span>{props.name}</span> <br/>
                <h1>#</h1>
            </div>

            <div>
                <span>Price</span>
                <Price>
                    <img width={200} height={200} src={ETH} alt="ETH" />
                    <h1>{Number(price).toFixed(1)}</h1>
                </Price>
            </div>
        </Details>
        </ImgContainer>
    )

    /*
    return (
        <div className="w-1/4 mr-3 mb-4 bg-slate-100 rounded-md" >
            <img className='w-full rounded-t-md' key={id} src={image}></img>
            <div className="p-3">
                <div className="flex mb-3">
                    <div className="flex-grow">
                        <h3 className="text-xl">{title}</h3>
                        <p>{`${id.slice(0, 4)}...${id.slice(id.length - 4)}`}</p>
                    </div>
                    <div className="flex mr-3">
                        <a target="_blank" className="text-blue-700" href={`https://etherscan.io/token/${address}`}>{`${address.slice(0, 4)}...${address.slice(address.length - 4)}`}</a>
                    </div>
                </div>
                <p>{description ? description.slice(0, 200) : "No Description"}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center p-3 ">
                {attributes?.length > 0 && attributes.map(attribute => {
                    return (
                        <div className="w-1/2 mb-2 flex justify-start flex-col">
                            <p className="mr-2 font-bold">{attribute.trait_type}:</p>
                            <p className="text-sm">{attribute.value}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
    */
    
}

export default NftCard