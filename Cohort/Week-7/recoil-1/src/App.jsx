import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'
function App() {
  return (
    <>
    <RecoilRoot>

      <Count ></Count>
    </RecoilRoot>
    </>
  )
}
function Count(){
  return(
    <div>
      <CountRender ></CountRender>
      <Button></Button>
      <RenderEven></RenderEven>
    </div>
  )
}
function CountRender(){
  const count = useRecoilValue(countAtom)
  return(
    <div>
      {count}
    </div>
  )
}
function Button(){
  // const [count,setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return(
  <div>
  <button onClick={()=>{
    setCount(c=>(c+1))
  }}>Increase</button>
  <button onClick={()=>{
    setCount(c=>(c-1))
  }}>Decrease</button>
  </div>
  )
}

function RenderEven(){
  const isEven = useRecoilValue(evenSelector);
  return(
    <div>
      {isEven ? "Number is even" : null}
    </div>
  )
}

export default App
