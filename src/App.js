import React, { useState } from 'react'
import Dao from './components/Dao'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Mint from './components/Mint'
import Help from './components/Help'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [accounts, setAccounts] = useState([])
  return (
    // <>
    //   <Mint accounts={accounts} seetAccounts={setAccounts} />
    <>
      <Navbar accounts={accounts} setAccounts={setAccounts} />
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
  )
}

export default App
