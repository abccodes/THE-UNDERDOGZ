import React, { useState, useEffect } from 'react'
import Dao from './components/sections/Dao/Dao'
import Contact from './components/sections/Contact/Contact'
import Home from './components/sections/Home/Home'
import Navbar from './components/sections/Navbar/Navbar'
import Help from './components/sections/Help/Help'
import { Routes, Route } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
import styled from 'styled-components'
import Minter from './components/sections/Mint/Minter'

const Loading = styled.section`
  text-align: center;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

function App() {
  const [playAnimation, setPlayAnimation] = useState(true)

  useEffect(() => {
    // setPlayAnimation(true)

    const onPageLoad = () => {
      setPlayAnimation(false)
    }

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad()
    } else {
      window.addEventListener('load', onPageLoad)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])

  const [accounts, setAccounts] = useState([])

  return playAnimation ? (
    <Loading>
      <HashLoader size={75} color="#e14cdb" />
    </Loading>
  ) : (
    <>
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dao" element={<Dao />} />
          <Route path="/mint" element={<Minter />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </>
  )
}

export default App
