import React, { useState, useEffect } from 'react'
import Dao from './components/sections/Dao'
import Contact from './components/sections/Contact'
import Home from './components/sections/Home'
import Navbar from './components/sections/Navbar'
import Mint from './components/sections/Mint'
import Help from './components/sections/Help'
import { Routes, Route } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
import styled from 'styled-components'

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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const [accounts, setAccounts] = useState([])

  return (
    // <>
    //   <Mint accounts={accounts} seetAccounts={setAccounts} />
    loading ? (
      <Loading>
        <HashLoader size={75} color="#e14cdb" loading={loading} />
      </Loading>
    ) : (
      <>
        <Navbar accounts={accounts} setAccounts={setAccounts} />
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dao" element={<Dao />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Home />
      <About />
      <Skills />
      <Work />
      <Contact /> */}
        </>
      </>
    )
  )
}

export default App
