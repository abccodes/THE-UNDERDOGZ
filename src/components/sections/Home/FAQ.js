import React from 'react'
import styled from 'styled-components'
import '../../fonts.css'

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #121113;

  //margin-top: 75px;

  padding: 5px;
  background: #121113; 
 

  color: white;
  font-size: 50px;
  font-weight: 700;
  font-family: "Baloo 2";
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
`

function FAQ({ faq, index, toggleFAQ }) {
  return (
    
    <div
      
      className= {'faq ' + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      {' '}
      {/* <style> */}
      <div className="faq-question Baloo2">{faq.question}</div>
      <div className="faq-answer subFont">{faq.answer}</div>
      {/* </style> */}
    </div>
  )
}

export default FAQ
