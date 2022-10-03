import React from 'react'
import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <div className="w-full h-screen titlePage css-selector  ">
      <div className="max-w-[1000px] mx-auto px-9 flex flex-col justify-center h-full Baloo">
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl sm:text-8xl font-bold text-[#f5ffff] Baloo2">
            THE UNDERDOGZ
          </h1>
          <h2 className="text-4xl sm:text-8xl font-bold text-[#000000] Baloo2">
            An Investment DAO.
          </h2>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingPage
