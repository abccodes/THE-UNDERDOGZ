import React, { lazy, Suspense} from 'react'
import styled, { keyframes} from 'styled-components';
import Loading from '../../sections/Home/Loading.js';
import '../../sections/Contact/Contact.css';


import logo from '../../assets/Screenshot__214_-removebg-preview.png';

const SnowfallComponent = lazy(() => import('./Snowfall.js'));

const Section = styled.div`
  justify-content: center; 
  align-items: center; 

  height: auto;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #121113;
`

const Title = styled.h1`

  display: flex;
  overflow: hidden;
  flex-direction: row; 
  flex-wrap: wrap; 

  font-size: 5em;
  font-weight: bold;
  font-family: 'Baloo 2';
  text-align: center; 
  letter-spacing: 5px;
  text-transform: capitalize;
 
  color: #fff;

  background: linear-gradient(-45deg, #282525, #1a191a, #2d2d2d, #2c2b2b);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  padding: 15px;

  border-radius: 2rem;
  box-shadow: 0px 5px 50px -10px #3a0ca3; 
 
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 1rem auto;
  margin-top: 75px;
  width: fit-content;

  //font size media

  @media screen and (max-width: 1300px) {
    font-size: 4.5em;
  }

  @media screen and (max-width: 1200px) {
    font-size: 4.25em;
  }
  
  @media screen and (max-width: 1100px) {
    font-size: 4em;
  }

  @media screen and (max-width: 1000px) {
    font-size: 3.75em;
  }

  //Ipad
  @media screen and (max-width: 950px) {
    font-size: 3.25em;
  }

  @media screen and (max-width: 850px) {
    font-size: 4em;
  }

  @media screen and (max-width: 820px) {
    font-size: 3.75em;
  }

  @media screen and (max-width: 750px) {
    font-size: 3.5em;
  }

  //Ipad Mini
  @media screen and (max-width: 725px) {
    font-size: 3.25em;
  }

  @media screen and (max-width: 660px) {
    font-size: 3em;
  }

  //Phones

  @media screen and (max-width: 600px) {
    font-size: 3.5em;

    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 575px) {
    font-size: 3.5em;

    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 450px) {
    font-size: 3em;

    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 375px) {
    font-size: 2.25em;

    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 325px) {
    font-size: 2em;

    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (max-width: 280px) {
    font-size: 1.75em;

    margin-left: 15px;
    margin-right: 15px;
  }
`


const FormSection = styled.div`
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap; 
  justify-content: center;

  align-items: center; 
  
  overflow: hidden; 
  
  margin: 1rem auto; 
  margin-top: 75px;
  margin-bottom: 75px; 
  

  width: fit-content; 
  

  color: #fff; 

  background: linear-gradient(-45deg, #37829f, #ae71ae, #2f57cf, #cf63c4);
  background-size: 400% 400%;
	animation: gradient 15s ease infinite;

  padding: 35px; 

  border: 2px solid #2d2d2d; 
  border-radius: 2rem; 
  box-shadow: 0 0 5px 10px #32323240;

  @media screen and (max-width: 600px) {
    padding: 15px;
  }
`

const Contact = () => {
  return (
    <Section>

      <Suspense fallback={<Loading />}>
        <SnowfallComponent />{' '}
      </Suspense>

      <Title>
        <img className = "contact-title-image" src = {logo} alt = ""></img>
        UNDERDOGZ CONTACT
        <img className = "contact-title-image" src = {logo} alt = ""></img>
      </Title>

      

     <FormSection>

      <form method='POST' action="https://getform.io/f/616176e7-53e0-4b01-b50d-0ec04bdd82fb">

        <p className = "form-header">Request & Reccomendations? <br/> Let us know!</p>

        <input className= 'form-input h-10' type = "text" placeholder= ' Name' name='name' />
        <input className= 'form-input h-10' type = "email" placeholder= ' Email' name='email' />

        <textarea className= 'form-input h-50' name="message" rows="10" placeholder=' Message'></textarea>

        <button className = 'form-submit'>Submit</button>

      </form>

     </FormSection>

    </Section>
  )
}

export default Contact


/*
<form method='POST' action="https://getform.io/f/616176e7-53e0-4b01-b50d-0ec04bdd82fb" className='flex flex-col max-w-[750px] w-full'>

  <input className='bg-zinc-800 p-2 rounded-lg' type="text" placeholder='Name' name='name' />
  <input className='my-4 p-2 bg-zinc-800 rounded-lg' type="email" placeholder='Email' name='email' />

  <textarea className='bg-zinc-800 p-2 rounded-lg' name="message" rows="10" placeholder='Message'></textarea>

</form>
*/