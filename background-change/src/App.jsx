import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor]=useState("olive");

  function handleClick(newColor) {
    setColor(newColor);
  }
  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}} 
            onClick={()=>(setting("red"))}>
            Click Me
          </button>
           <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"green"}} 
            onClick={() => (setting("green"))}>
            Click Me
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "violet" }} 
            onClick={() => (setting("violet"))}>
            Click Me
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "black" }} 
            onClick={() => (setting("black"))}>
            Click Me
          </button>
           <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"pink"}} 
            onClick={() => (setting("pink"))}>
            Click Me
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "gray" }} 
            onClick={() => (setting("gray"))}>
            Click Me
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-sm' style={{ backgroundColor: "yellow" }} 
            onClick={() => (setting("yellow"))}>
            Click Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
