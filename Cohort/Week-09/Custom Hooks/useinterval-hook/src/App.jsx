import { useEffect, useState } from 'react';

import './App.css'

function useInterval(fn,timeout){
  useEffect(()=>{
    const value = setInterval(()=>{
      fn();
    },timeout)
    return () => clearInterval(value);
  },[timeout])
}
function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <div>
      Timer is at {count}
    </div>
  )
}

export default App