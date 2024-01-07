import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BackgroundImage from './assets/bg-img.png'
import Navbar from './components/Navbar'
import './App.css'

function App() {
 
  return (
    <>
  <Navbar></Navbar>
  
  <div>
    <form className='text-center'>
      <input  type="text" className='bg-blue-400 w-[35%] rounded-xl mr-2 h-7 text-white font-poppins' placeholder='ENTER YOUR CITY' />
      <button className='px-4 mt-1 py-1 bg-blue-400 rounded-[20px] text-white font-poppins '>FIND</button>
    </form>
  </div>
  <img src={BackgroundImage} className='w-[100%]' alt="" />
  
    
    </>
  )
}

export default App
