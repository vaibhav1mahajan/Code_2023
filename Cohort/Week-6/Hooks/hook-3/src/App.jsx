import { useState ,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [sum, setSum] = useState(0);
  let count = useMemo(()=>{
    let a = 0;
  for(let i =1;i<=sum;i++){
    a+=i;
  }
  return a;
  },[sum])
  return (
    <>
    {/* <input type="text" placeholder='number' onChange={function(e){
            const value = parseInt(e.target.value);
            setSum(value*(value+1)/2);
        }}/><br /> */}
      <input type="text" placeholder='find sum from 1 to 100' onChange={(e)=>{
        setSum(e.target.value);
      }}/>
    <h1>Sum is {count}</h1>
     <button onClick={() => setCounter(counter +1)}>Counter ({counter})</button>
    </>
  )
}

export default App
