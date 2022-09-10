

const endpoint = "https://eth-mainnet.g.alchemy.com/v2/F_-5b4B4mSACqm4gvqoAGvEREVrmAr8L";


const getAddressNFTs = async (owner, contractAddress, retryAttempt) => { //Owner Addr, Contract Addr
    if (retryAttempt === 5) {
        return;
    }
    if (owner) {
        let data; 
        try {
            if (contractAddress) {
                data = await fetch*(`${endpoint}/getNFTs?owner=${owner}&contractAddress%5B%5D=${contractAddress}`).then(data => data.json())

            }   else {
                data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then(data => data.json())
            }   
        } catch (e) {
            getAddressNFTs(endpoint, owner, contractAddress, retryAttempt+1)
        } 

        //NFT Token IDs
        return data
    }
}

const getNFTsMetadata = async (NFTS) => {

    const NFTsMetadata = await Promise.allSettled(NFTS.map(async (NFT) => {

        const metadata = await fetch(`${endpoint}/getNFTMetadata?contractAddress=${NFT.contract.address}&tokenId=${NFT.id.tokenId}`,).then(data => data.json())

        let imageUrl; 
        console.log("metadata", metadata)

        
        if (metadata.media[0].gateway) {
            imageUrl = metadata.media[0].gateway
        }   else {
            imageUrl = "https://via.placeholder.com/500/000000/FFFFFF/?text=THE-UNDERDOGZ!"

        }

        //Return Metadata:
        return {
            id: NFT.id.tokenId,
            contractAddress: NFT.contract.address,
            image: imageUrl,
            title: metadata.metadata.name,
            description: metadata.metadata.description,
            attributes: metadata.metadata.attributes
        }

    }))

    return NFTsMetadata
}

const fetchNFTs = async (owner, contractAddress, setNFTs) => {
    
    const data = await getAddressNFTs(owner, contractAddress)

    if (data.ownedNfts.length) {

        const NFTs = await getNFTsMetadata(data.ownedNfts)
        console.log(NFTs)
        let fullfilledNFTs = NFTs.filter(NFT => NFT.status === "fulfilled")
        setNFTs(fullfilledNFTs)

    } else {
        setNFTs(null)
    }
}

export {fetchNFTs}; 

