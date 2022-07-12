import React, {useState} from 'react';
import Header from '../Header.js'
import FAQ from '../FAQ'
import Roadmap from '../Roadmap.js'
import Team from '../Team'
import Showcase from '../Showcase.js';
import LandingPage from '../LandingPage.js';
// import About from '../About.js'
import TestAbout from '../testAbout'
import ArtDisplay from '../ArtDisplay.js';

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
    <div className='disUnder'>
    <div className='w-full h-screen'>
      
      {/* Container */}
      <LandingPage/>
      <TestAbout/>
      <ArtDisplay/>
      <Roadmap></Roadmap>
      <Team></Team>
      {/* <Showcase></Showcase> */}
      <Header></Header>
        <div className="faq ">
          <div className="faqs ">
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

