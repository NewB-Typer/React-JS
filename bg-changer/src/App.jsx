import { useState } from 'react'

import './App.css'

function App() {
 const[color, setColor] = useState("magenta")

  return (
<div className='w-full h-screen duration-400'
style={{backgroundColor: color}}>

  <div className='fixed flex flexwrap justify-center bottom-12 px-2 inset-x-0'>
    <div className='rounded-md fixed flex flexwrap justify-center bg-white shadow-lg px-3 py-3 gap-3'>
      <button onClick={()=>{
        setColor("red")
      }} className='py-2 px-4 rounded-full text-white shadow-lg ' style={{backgroundColor: "red"}}>Red</button>

      <button onClick={()=>{
        setColor("green")
      }} className='py-2 px-4 rounded-full text-white shadow-lg ' style={{backgroundColor: "green"}}>Green</button>

      <button onClick={()=>{
        setColor("yellow")
      }} className='py-2 px-4 rounded-full text-white shadow-lg ' style={{backgroundColor: "yellow"}}>Yellow</button>

      <button onClick={()=>{
        setColor("blue")
      }} className='py-2 px-4 rounded-full text-white shadow-lg ' style={{backgroundColor: "blue"}}>Blue</button>

      <button onClick={()=>{
        setColor("black")
      }} className='py-2 px-4 rounded-full text-white shadow-lg ' style={{backgroundColor: "black"}}>black</button>




    </div>
  </div>

</div>
  )
}

export default App
