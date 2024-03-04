import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CountContext} from './context'
import { useContext } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext.Provider value={{count,setCount}}>
      <Count ></Count>
    </CountContext.Provider>
    </>
  )
}
function Count(){
  return(
    <div>
      <CountRender ></CountRender>
      <Button></Button>
    </div>
  )
}
function CountRender(){
  const {count} = useContext(CountContext);
  return(
    <div>
      {count}
    </div>
  )
}
function Button(){
  const {count,setCount} = useContext(CountContext);

  return(
  <div>
  <button onClick={()=>{
    setCount(count+1)
  }}>Increase</button>
  <button onClick={()=>{
    setCount(count-1)
  }}>Decrease</button>
  </div>
  )
}

export default App
