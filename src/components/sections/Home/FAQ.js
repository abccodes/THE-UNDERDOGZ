import React from 'react'
import styled from 'styled-components'
import '../../fonts.css'

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={'faq ' + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      {' '}
      {/* <style> */}
      <div className="faq-question titleFont">{faq.question}</div>
      <div className="faq-answer subFont">{faq.answer}</div>
      {/* </style> */}
    </div>
  )
}

export default FAQ
