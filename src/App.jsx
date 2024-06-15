import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slidebar from "./components/Slidebar"
import Card from './components/Card'
import Contact from './components/Contact'
import Assign from './components/Assign'

function App() {

  return (
    <>
     {/* <Navbar/>
      <Slidebar/>
      <Card/> */}
      {/* <Contact/> */}
      <Assign/>
    </>
  )
}

export default App
