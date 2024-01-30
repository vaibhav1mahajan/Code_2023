import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
     <CardWrapper children={<TextComponent />}></CardWrapper>
     <CardWrapper>
      <div>
        hi there
      </div>
     </CardWrapper>
     <CardWrapper>
      <TextComponent></TextComponent>
     </CardWrapper>
     <TextComponent></TextComponent>
    </>
  )
}

function TextComponent(){
  return(
    <div>
      Hi there
    </div>
  )
}

function CardWrapper({children}){
  return(
    <div style={{
      border: "10px solid red"
    }}>{children}</div>
  )
}

export default App
