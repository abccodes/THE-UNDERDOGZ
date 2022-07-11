import React, { useRef } from 'react'



const NftCard = ( props ) => {

    return (
        <div className="w-1/4 mr-3 mb-4 bg-slate-100 rounded-md" >
            <img className='w-full rounded-t-md' key={props.value.id} src={props.value.image}></img>
            <div className="p-3">
                <div className="flex mb-3">
                    <div className="flex-grow">
                        <h3 className="text-xl">{props.value.title}</h3>
                        <p>{`${props.value.id.slice(0, 4)}...${props.value.id.slice(props.value.id.length - 4)}`}</p>
                    </div>
                    <div className="flex mr-3">
                    <a target="_blank" className="text-blue-700" href={`https://etherscan.io/token/${props.value.contractAddress}`}>{`${props.value.contractAddress.slice(0, 4)}...${props.value.contractAddress.slice(props.value.contractAddress.length - 4)}`}</a>
                    </div>
                </div>
                
            </div>
        </div>
    )    
}
    
        

export default NftCard

