import { memo, useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  var a  =useCallback(()=>{
    console.log('hi there')
  },[]);
  return (
    <div>
      <button onClick={()=> setCount(count+1)}> Counter {count}</button>
      <Demo a = {a}></Demo>
    </div>
  )
}

const Demo = memo(function({a}){
    return(
      <div>
        {console.log(a)}
        hi there
      </div>
    )
})
export default App
