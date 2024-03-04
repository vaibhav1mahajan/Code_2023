import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RenderTodo } from './components/RenderTodo'
import { CreateTodo } from './components/CreateTodo'
import { RecoilRoot } from 'recoil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RecoilRoot>

      <CreateTodo></CreateTodo>
      <RenderTodo></RenderTodo>
     </RecoilRoot>
    </>
  )
}


export default App
