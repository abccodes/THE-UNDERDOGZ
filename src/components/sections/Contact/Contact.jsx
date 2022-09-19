import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
  height: 115%;
  width: 100%;
  // background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;

  background: linear-gradient(-45deg, #37829f, #ae71ae, #2f57cf, #cf63c4);
  background-size: 400% 400%;
	animation: gradient 15s ease infinite;
`


const Contact = () => {
  return (
    <Section className='css-selector disUnder'>

        <form method='POST' action="https://getform.io/f/616176e7-53e0-4b01-b50d-0ec04bdd82fb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className=' text-5xl font-bold inline border-b-4 border-white-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>**Submit the form below to get in contact**</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </Section>
  )
}

export default Contact