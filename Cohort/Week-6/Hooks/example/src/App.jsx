import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <button onClick={()=>{
      setCount((count)=>{
        return count+1
      });
      setCount((count)=>{
        return count+1
      });
     }}> count {count}</button>
    </>
  )
}

export default App
