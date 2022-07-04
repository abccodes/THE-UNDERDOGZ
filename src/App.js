import React, { useState } from 'react'
import Dao from './components/sections/Dao'
import Contact from './components/sections/Contact'
import Home from './components/sections/Home'
import Navbar from './components/sections/Navbar'
import Mint from './components/sections/Mint'
import Help from './components/sections/Help'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [accounts, setAccounts] = useState([])
  return (
    // <>
    //   <Mint accounts={accounts} seetAccounts={setAccounts} />
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
}

export default App
