import { useState } from 'react'

import './App.css'

function useOnline(){
  const [online,setOnline] = useState(window.navigator.onLine);
  setInterval(()=>{
    setOnline(window.navigator.onLine);
  },5000)
  return online;
} 

function App() {
    const isOnline = useOnline();

  return (
    <>
     {isOnline ? <div>"You are good to go"</div> : <div>"You are offline , please connect to internet"</div>}
    </>
  )
}

export default App
