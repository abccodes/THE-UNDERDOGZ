import React from 'react'
import styled from 'styled-components'
;<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Exo:wght@100&display=swap');
</style>

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={'faq ' + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      {' '}
      {/* <style> */}
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
      {/* </style> */}
    </div>
  )
}

export default FAQ
