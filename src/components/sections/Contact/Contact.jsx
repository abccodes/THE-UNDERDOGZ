import React from 'react'
import styled, { keyframes} from 'styled-components';

import leftLetter from "../../assets/contactLetter2.png"; 
import rightLetter from "../../assets/contactLetter1.png"; 

const Section = styled.section`
  justify-content: center; 
  align-items: center; 

  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #121113;
`

const Title = styled.h1`

  display: flex;
  overflow: hidden;

  justify-content: center;
  align-items: center;

  font-size: 6em;
  font-weight: bold;
  font-family: 'Baloo 2';
  text-align: center; 
  letter-spacing: 5px;
  text-transform: capitalize;

  color: #fff;

  background: linear-gradient(-45deg, #282525, #1a191a, #2d2d2d, #2c2b2b);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  box-shadow: 0px 5px 50px -10px #3a0ca3; 

  margin: 1rem auto;
  margin-top: 75px;
  width: fit-content;
  border-radius: 2rem;
  padding: 15px;


  //font size media

  @media screen and (max-width: 1500px) {
    font-size: 5.5em; 
  }

  @media screen and (max-width: 1280px) {
    font-size: 5em;
  }

  @media screen and (max-width: 1150px) {
    font-size: 4.5em;
  }
  
  @media screen and (max-width: 1050px) {
    font-size: 4.25em;
  }

  
  //Ipad
  @media screen and (max-width: 950px) {
    font-size: 4.5em;
  }

  @media screen and (max-width: 865px) {
    font-size: 4.25em;
  }

  @media screen and (max-width: 815px) {
    font-size: 4.125em;
  }

  //Ipad Mini
  @media screen and (max-width: 768px) {
    font-size: 4em;
  }

  @media screen and (max-width: 750px) {
    font-size: 3.75em;
  }

  @media screen and (max-width: 710px) {
    font-size: 3.5em;
  }

  @media screen and (max-width: 675px) {
    font-size: 3.5em;

    margin-left: 25px;
    margin-right: 25px; 
  }

  @media screen and (max-width: 605px) {
    font-size: 3.25em;

    margin-left: 25px;
    margin-right: 25px; 
  }

  //Phones

  @media screen and (max-width: 540px) {
    font-size: 2.5em;

    margin-left: 25px;
    margin-right: 25px; 
  }

  @media screen and (max-width: 450px) {
    font-size: 2em;
    
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.75em;
    
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 350px) {
    font-size: 2em;

    margin-left: 15px;
    margin-right: 15px;
  }
  
  @media screen and (max-width: 320px) {
    font-size: 1.75em;

    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 290px) {
    font-size: 1.5em;

    margin-left: 15px;
    margin-right: 15px; 
  }
`
const SubTitle = styled.h1`

  display: flex; 
  overflow: hidden;

  justify-content: center;
  align-items: center;

  margin: 1rem auto;
  margin-top: 75px;
  width: fit-content;
  padding: 25px;

  font-size: 2em;
  font-weight: bold;
  font-family: 'Baloo 2';
  text-align: center; 
  letter-spacing: 5px;
  text-transform: capitalize;
  color: #fff;

  background: linear-gradient(-45deg, #282525, #1a191a, #2d2d2d, #2c2b2b);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  border-radius: 2rem;
  box-shadow: 0 0 5px 10px #32323240;
 
  @media screen and (max-width: 1400px) {
    font-size: 3.75em; 
  }

  @media screen and (max-width: 1300px) {
    font-size: 3.5em; 
  }

  @media screen and (max-width: 1150px) {
    font-size: 2.75em; 
  }

  @media screen and (max-width: 950px) {
    font-size: 3.25em;
  }

  @media screen and (max-width: 820px) {
    font-size: 3.125em;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.75em;
  }

  @media screen and (max-width: 700px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 675px) {
    font-size: 3em;
    margin-left: 25px;
    margin-right: 25px; 
  }

  @media screen and (max-width: 565px) {
    font-size: 2.5em;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 490px) {
    font-size: 2.25em;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 460px) {
    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 460px) {
    font-size: 2em; 
    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.75em; 
    margin-left: 15px;
    margin-right: 15px;
  }
  
  @media screen and (max-width: 395px) {
    font-size: 1.5em; 
    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.5em; 
    margin-left: 20px;
    margin-right: 20px;
  }

`

const Form = styled.div`

  justify-content: center; 
  align-items: center; 
  display: flex; 
  flex-direction: column; 

  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #121113;

  background: linear-gradient(-45deg, #37829f, #ae71ae, #2f57cf, #cf63c4);
  background-size: 400% 400%;
	animation: gradient 15s ease infinite;
`

const Contact = () => {
  return (
    <Section>
      
      <Title> CONTACT THE UNDERDOGZ</Title>

      <SubTitle>Request? Reccomendations? Feedback? - Let Us Know!</SubTitle>
      
      <Form>hghghghh</Form>
    </Section>
  )
}

export default Contact


/*
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
*/