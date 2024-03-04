import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [render, setRender] = useState(true);
    useEffect(()=>{
      setTimeout(() => {
        setRender(false);
      }, 5000);
    },[])
  return (
    <>
      { render ? <MyComponent></MyComponent> : <div></div>}
    </>
  )
}

function MyComponent(){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("Hello");
    return ()=>{
      console.log("Bye");
    }
  },[])
  return (
    <div>
    <p>{count}</p>
    <button onClick={()=>{
      setCount(count+1);
    }}>Increase</button>
  </div>
    )
}

export default App
