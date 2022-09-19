import img1 from '../../assets/giphy (2).gif'
import img2 from '../../assets/giphy (3).gif'
import img3 from '../../assets/giphy (4).gif'
import img4 from '../../assets/giphy.gif'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  
  background-color: #121113;
   
`



const ImageContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px; 
  padding: 5px;

  

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 70%;
    height: auto;
  }
  @media (max-width: 768px) {
    width: 80%;
  }

  img {
    border: 10px solid #2d2d2d;
    border-radius: 100rem;  
    width: 100%;
    height: auto;
    transition: all 0.3s ease;

    @media (max-width: 1024px) {
      border: 5px solid #2d2d2d;
    }

    @media (max-width: 768px) {
      border: 2.5px solid #2d2d2d;
    }
  }
`

const nfts = [
  {
    id: 1,
    imageSrc: img1,
    imageAlt: 'UDZ DOG',
  },
  {
    id: 2,
    imageSrc: img2,
    imageAlt: 'UDZ DOG',
  },
  {
    id: 3,
    imageSrc: img3,

    imageAlt: 'UDZ DOG',
  },

  {
    id: 3,
    imageSrc: img4,

    imageAlt: 'UDZ DOG',
  },
]

const ArtDisplay = () => {
  return (
    <div>
      <Container>
        
        {nfts.map((nft) => (
          <a key={nft.id} href={nft.href} className="group">
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{ opacity: 1 }}
              // animate={{
              //   opacity: 1,
              // }}
              transition={{
                duration: 3,
              }}
            >
              <ImageContainer>
                <img src={nft.imageSrc} alt={nft.imageAlt} />
              </ImageContainer>
              
            </motion.div>
            
          </a>
          
        ))}
        
      </Container>
      
    </div>
    
  )
}

export default ArtDisplay
