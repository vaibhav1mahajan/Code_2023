import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react"

function App() {

  const [title, setTitle] = useState("Vaibhav")
  function changeTitle(){
     setTitle(" My name is " + Math.random());
  }
 
  return (
    <React.Fragment>
       {/* <Button changeTitle = {changeTitle}></Button> */}
      <HeaderWithButton> </HeaderWithButton>
     <Header title={title}></Header>
     <Header title="Hello my name is "></Header>
     <Header title="Hello my name is "></Header>
     <Header title="Hello my name is "></Header>
     <Header title="Hello my name is "></Header>
     <Header title="Hello my name is "></Header>
    </React.Fragment>
  )
}
function Header({title}){
  return <div>
    {title}
  </div>
}
function Button({changeTitle}){
  return <>
    <button onClick={changeTitle}>Click me to change the title</button>
  </>
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is Vaibhav");
  function updateTitle(){
    setTitle("My name is " + Math.random());
  }
  return <>
    <button onClick={updateTitle}>Click me to change title</button>
    <Header title={title}></Header>
  </>
}

const HeaderWithMemo = React.memo(function({title}){
  return <div>
    {title}
  </div>
})
export default App
