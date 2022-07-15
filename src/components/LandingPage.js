import React, { Component } from 'react'

const LandingPage = () => {
  return (
    <div
      name="landingpage"
      className="w-full h-screen titlePage css-selector  "
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#f5ffff] ">
          UnderDogZ
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#1a1616">
          An Investment DAO.
        </h2>
      </div>
    </div>
  )
}

export default LandingPage
