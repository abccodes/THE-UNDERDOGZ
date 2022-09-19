import React from 'react'
import styled from 'styled-components'


const Section = styled.section`
  height: 100%;
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;

  background: linear-gradient(-45deg, #37829f, #ae71ae, #2f57cf, #cf63c4);
  background-size: 400% 400%;
	animation: gradient 15s ease infinite;
`

const Header = styled.div`
  
  display: flex;
  overflow: hidden;
  flex-direction: row; 
  flex-wrap: wrap; 
  font-weight: bold;
  font-family: 'Baloo 2';
  font-size: 75px; 
  text-align: center; 
  letter-spacing: 5px;
  text-transform: capitalize;
 
  color: #fff;

  
 
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 1rem auto;
  margin-top: 75px;
  width: fit-content;

`

const SubHeader = styled.div`
  
  display: flex;
  overflow: hidden;
  flex-direction: row; 
  flex-wrap: wrap; 
  font-weight: bold;
  font-family: 'Baloo 2';
  font-size: 25px; 
  text-align: center; 
  letter-spacing: 5px;
  text-transform: capitalize;
 
  color: #fff;
  
  
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 1rem auto;
  margin-top: 25px;
  width: fit-content;

`

const Contact = () => {
  return (
    <Section>

        <form method='POST' action="https://getform.io/f/616176e7-53e0-4b01-b50d-0ec04bdd82fb" className='flex flex-col max-w-[750px] w-full'>

          <div>
            <Header>Contact UDZ</Header>
            <SubHeader>Request? Reccomendations? Feedback? - Get In Contact!</SubHeader>
          </div>

          <input className='bg-zinc-800 p-2 rounded-lg' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-zinc-800 rounded-lg' type="email" placeholder='Email' name='email' />

          <textarea className='bg-zinc-800 p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>

          <button className='text-white border-2 hover:bg-zinc-800 hover: px-4 py-3 my-8 mx-auto flex items-center rounded-lg'>Submit</button>

        </form>
    </Section>
  )
}

export default Contact