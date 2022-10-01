import React, { useState, useEffect, useRef } from 'react'

import etherscan from "../../assets/etherscan-removebg-preview.png";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
}

const NftCard = ( props ) => {

  var nftWidth = "w-1/4 mr-1 mb-10 bg-slate-100 rounded-md"

  const { height, width } = useWindowDimensions();

  

  if (width <= 675) {
    nftWidth = "w-1/2 mr-1 mb-10 bg-zinc-800 rounded-md";
  }
  else if (width <= 1300) {
    nftWidth = "w-1/3 mr-1 mb-10 bg-zinc-800 rounded-md";
  }
  else {
    nftWidth = "w-1/4 mr-1 mb-10 bg-zinc-800 rounded-md"
  }

  
  

  return (
      <div className= {nftWidth}>

        <img className='w-full rounded-t-md shadow-lg shadow-purple-700/50' key={props.value.id} src={props.value.image}></img>

          <div className="p-3">

              <div className="flex mb-3">

                <div className="flex-grow">
                  <h3 className="text-lg text-white font-Baloo2 font-bold">{props.value.title}</h3>
                  <p className="text-md text-white font-Baloo2 font-semibold">{`${props.value.id.slice(0, 2)}..${props.value.id.slice(props.value.id.length - 3)}`}</p>
                </div>

                <div className="flex mr-1">
                  <a target="_blank"  href={`https://etherscan.io/token/${props.value.contractAddress}`}> <img className = "h-10 w-10" src = {etherscan} alt = "etherscan" ></img> </a>
                </div>

              </div>

          </div>
      </div>
    )
}
    
export default NftCard;