import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count count1={count} setCount1={setCount}></Count>
    </>
  )
}
function Count({count1,setCount1}){
  return(
    <div>
      {count1}
      <Button count={count1} setCount1={setCount1}></Button>
    </div>
  )
}

function Button({count,setCount1}){
  return(
  <div>
  <button onClick={()=>{
    setCount1(count+1)
  }}>Increase</button>
  <button onClick={()=>{
    setCount1(count-1)
  }}>Decrease</button>
  </div>
  )
}

export default App
