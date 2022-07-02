import React, {useState} from 'react';
// import HTML from '.../assets/html.png';
// import CSS from '../assets/css.png';
// import JavaScript from '../assets/javascript.png';
// import ReactImg from '../assets/react.png';
// import Node from '../assets/node.png';
// import AWS from '../assets/aws.png';
// import GitHub from '../assets/github.png';
// import Mongo from '../assets/mongo.png';
import Header from '../Header.js'
import FAQ from '../FAQ'
import Roadmap from '../Roadmap.js'

const Home = () => {
  const [faqs, setfaqs] = useState([
    {
      question: 'When is mint?',
      answer: 'Second-Third quarter',
      open: false,
    },
    {
      question: "What's the mint price?",
      answer: '.1 ETH',
      open: false,
    },
    {
      question: 'How many per wallet on mint?',
      answer: '5 Total',
      open: false,
    },
    {
      question: 'How many Whitelist/AllowList spots?',
      answer: '1000',
      open: false,
    },
    {
      question: 'What is the goal of the project?',
      answer:
        'To help introduce the community to nft’s and give them a high value utility that can make them passive income',
      open: false,
    },
    {
      question: 'Why is this project different from others?',
      answer:
        'The Underdogz strive to innovate the NFT space by offering exclusive investment opportunities to its holders. The Underdogz goes much deeper than your standard NFT project. We allocate 50% of the mint sale proceeds to the DAO. As a holder of the Underdogz you get an equal percentage of the DAO fund. You, the holder, gets to decide which blue chip NFT’s/digital assets/currencies the fund invests into. When the community feels it is time, you also vote on when and which investments are liquidated, which are then either reinvested or paid out to the holders. The holders are in control.',
      open: false,
    },
    {
      question: 'Why is the project named underdogz?',
      answer:
        'Underdog is a symbol we can all relate to. We all started from the bottom.',
      open: false,
    },
    {
      question: 'How big could the DAO get?',
      answer:
        'The DAO has unlimited potential. As the NFT space grows the opportunities grow with it.',
      open: false,
    },
    {
      question: 'How much money will initially be allocated to the DAO?',
      answer:
        'Half of all mint sales. Over 400 ETH if the project fully mints out.',
      open: false,
    },
    {
      question: 'Does buying more get you a larger stake in the DAO?',
      answer:
        'Yes as every nft purchased contributes to the fund. The more nfts you buy the moremoney contributed to the fund, the more money redistributed back to you.',
      open: false,
    },
  ])

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false
        }

        return faq
      }),
    )
  }

  return (
    <div className = 'css-selector'>
    <div name='home' className='w-full h-screen '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full titlePage'>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-[#f5ffff] '>
          UnderDogZ
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#1a1616'>
          An investment DAO.
        </h2>
      </div>
      <div name='about' className='w-full h-screen aboutClass text-gray-300'>
      <div class="bg-black">
  <div class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-9 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
    <div>
      <h2 class="text-3xl font-extrabold tracking-tight text-white-1000 sm:text-4xl headerFont">About</h2>
      <p class="mt-8 text-white-500 bodyFont">Our team has been involved with the crypto/web 3 space since 2016. We’ve seen booms and
busts in the market but never lost faith. In the last 2 years we’ve seen the rise of the NFT space.
We absolutely fell in love with the idea and community behind NFT’s. We have created thex
opportunity for everyone to get involved in the top 1% of NFTs and digital assets. With this
project everyone will get value from what NFTs have to offer. The sky's the limit with this
treasury. The Underdogz team has been trading and participating in projects for 2 years now.
We’ve been through alot of rug pulls and had our dreams crushed by the greed and corruption
behind certain projects. We are fed up with this happening and decided to create a project
ourselves to fulfill the promises made to us by other projects. That is how the UNDERDOGZ
project was born. By the people, for the people #dogz .</p>
    </div>
    <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <img src="https://gateway.pinata.cloud/ipfs/QmYTi6qC4m5WBfh68WEYfcDaQSC6j7s7ZYYn4Zhgw4ejMU/4.png" alt="" class="bg-gray-100 rounded-lg"/>
      <img src="https://gateway.pinata.cloud/ipfs/QmYTi6qC4m5WBfh68WEYfcDaQSC6j7s7ZYYn4Zhgw4ejMU/3.png" alt="" class="bg-gray-100 rounded-lg"/>
      <img src="https://gateway.pinata.cloud/ipfs/QmYTi6qC4m5WBfh68WEYfcDaQSC6j7s7ZYYn4Zhgw4ejMU/2.png" alt="" class="bg-gray-100 rounded-lg"/>
      <img src="https://gateway.pinata.cloud/ipfs/QmYTi6qC4m5WBfh68WEYfcDaQSC6j7s7ZYYn4Zhgw4ejMU/1.png" alt="" class="bg-gray-100 rounded-lg"/>
    </div>
  </div>c
</div>
    </div>
    <div className="banner">
    <div class="bg-black">
  <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">

        <p class="ml-3 font-medium text-white truncate">
  
          <span class="hidden md:inline"> .</span>
        </p>
      </div>
      </div>
    </div>
  </div>
</div>
      <div className='roadmapClass bgWhiteGradient'>
      <Roadmap/>
      </div>
      <div name='skills' className='w-full h-screen  text-gray-300 backgroundBlack'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Art</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={HTML} alt="HTML icon" /> */}
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={CSS} alt="HTML icon" /> */}
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" /> */}
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" /> */}
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" /> */}
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={Node} alt="HTML icon" /> */}
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" /> */}
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  {/* <img className='w-20 mx-auto' src={AWS} alt="HTML icon" /> */}
                  <p className='my-4'>AWS</p>
              </div>
          </div>
      </div>
    </div>
    <Header />
      <div className="faq ">
        <div className="faqs">
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ = {toggleFAQ} />
          ))}
        </div>
      </div>
    </div>
    </div>

    

    
  );
};

export default Home;

