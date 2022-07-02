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

const About = () => {
  return (
    <div name="about" className="w-full h-screen aboutClass text-gray-300">
      <div class="bg-black">
        <div class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-9 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 class="text-3xl font-extrabold tracking-tight text-white-1000 sm:text-4xl headerFont">
              About
            </h2>
            <p class="mt-8 text-white-500 bodyFont">
              Our team has been involved with the crypto/web 3 space since 2016.
              We’ve seen booms and busts in the market but never lost faith. In
              the last 2 years we’ve seen the rise of the NFT space. We
              absolutely fell in love with the idea and community behind NFT’s.
              We have created thex opportunity for everyone to get involved in
              the top 1% of NFTs and digital assets. With this project everyone
              will get value from what NFTs have to offer. The sky's the limit
              with this treasury. The Underdogz team has been trading and
              participating in projects for 2 years now. We’ve been through alot
              of rug pulls and had our dreams crushed by the greed and
              corruption behind certain projects. We are fed up with this
              happening and decided to create a project ourselves to fulfill the
              promises made to us by other projects. That is how the UNDERDOGZ
              project was born. By the people, for the people #dogz .
            </p>
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://gateway.pinata.cloud/ipfs/QmYTi6qC4m5WBfh68WEYfcDaQSC6j7s7ZYYn4Zhgw4ejMU/4.png"
              alt=""
              class="bg-gray-100 rounded-lg"
            />
            <img
              src="https://gateway.pinata.cloud/ipfs/QmYTi6qC4m5WBfh68WEYfcDaQSC6j7s7ZYYn4Zhgw4ejMU/3.png"
              alt=""
              class="bg-gray-100 rounded-lg"
            />
            <img
              src="https://gateway.pinata.cloud/ipfs/QmYTi6qC4m5WBfh68WEYfcDaQSC6j7s7ZYYn4Zhgw4ejMU/2.png"
              alt=""
              class="bg-gray-100 rounded-lg"
            />
            <img
              src="https://gateway.pinata.cloud/ipfs/QmYTi6qC4m5WBfh68WEYfcDaQSC6j7s7ZYYn4Zhgw4ejMU/1.png"
              alt=""
              class="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
