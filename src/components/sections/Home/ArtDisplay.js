import img1 from '../../assets/giphy (2).gif'
import img2 from '../../assets/giphy (3).gif'
import img3 from '../../assets/giphy (4).gif'
import img4 from '../../assets/giphy.gif'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121113;
`

const ImageContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 0.5rem;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`

const nfts = [
  {
    id: 1,
    // name: 'Earthen Bottle',
    // price: '$48',
    imageSrc: img1,
    imageAlt: 'UDZ DOG',
  },
  {
    id: 2,
    // name: 'Nomad Tumbler',
    // price: '$35',
    imageSrc: img2,
    imageAlt: 'UDZ DOG',
  },
  {
    id: 3,
    // name: 'Focus Paper Refill',
    // price: '$89',
    imageSrc: img3,

    imageAlt: 'UDZ DOG',
  },
  {
    id: 4,
    // name: 'Machined Mechanical Pencil',

    // price: '$35',
    imageSrc: img4,
    imageAlt: 'UDZ DOG',
  },
  // More products...
]

const ArtDisplay = () => {
  return (
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
              <img
                src={nft.imageSrc}
                alt={nft.imageAlt}
                className="purpleEffect"
              />
            </ImageContainer>
          </motion.div>
        </a>
      ))}
    </Container>
  )
}

export default ArtDisplay
