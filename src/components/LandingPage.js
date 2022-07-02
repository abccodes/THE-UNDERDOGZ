import React, { Component } from 'react'

// import HTML from '../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
// import AWS from '../assets/aws.png';
// import GitHub from '../assets/github.png';
// import Tailwind from '../assets/tailwind.png';
// import Mongo from '../assets/mongo.png';

const LandingPage = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full titlePage">
      <h1 className="text-4xl sm:text-7xl font-bold text-[#f5ffff] ">
        UnderDogZ
      </h1>
      <h2 className="text-4xl sm:text-7xl font-bold text-[#1a1616">
        An investment DAO.
      </h2>
    </div>
  )
}

export default LandingPage
