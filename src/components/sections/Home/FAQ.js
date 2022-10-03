import React from 'react'
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
      <div className="faq-question Baloo2">{faq.question}</div>
      <div className="faq-answer subFont">{faq.answer}</div>
      {/* </style> */}
    </div>
  )
}

export default FAQ
