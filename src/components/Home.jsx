import React, {useState} from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Faq from 'react-faq-component';


import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Header from './Header.js'
import FAQ from './FAQ'

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
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-[#f5ffff] '>
          UnderDogZ
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#1a1616'>
          An investment DAO.
        </h2>
      </div>
      <div name='about' className='w-full h-screen text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Roadmap
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat assumenda beatae fuga exercitationem, nesciunt ex facere accusantium quis, corporis quisquam, quam sequi laborum sed? Rem dolorum optio ea culpa explicabo.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Quas quam architecto dicta eligendi
                 animi eius saepe quaerat et corrupti 
                 incidunt quisquam fugit blanditiis iusto 
                 ipsum at culpa debitis, eum consectetur.</p>  
            </div>
          </div>
      </div>
    </div>
      <div name='skills' className='w-full h-screen  text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Art</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </div>
          </div>
      </div>
    </div>
    <Header />
      <div className="faq">
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

