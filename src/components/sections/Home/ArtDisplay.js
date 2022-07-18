import img1 from '../../assets/100.png'
import img2 from '../../assets/1500.png'
import img3 from '../../assets/8237.png'
import img4 from '../../assets/3500.png'
import { motion } from 'framer-motion'

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
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
                  duration: 1,
                }}
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={nft.imageSrc}
                    alt={nft.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </motion.div>
              <h3 className="mt-4 text-sm text-gray-700">{nft.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {nft.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArtDisplay
