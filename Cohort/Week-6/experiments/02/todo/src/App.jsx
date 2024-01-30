import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodo] = useState([
    {
      id:1,
      title:"Go to gym",
      description:"From 8 to 9"
    },
    {
      id:3,
      title:"Go to gym",
      description:"From 8 to 9"
    },
    {
      id:2,
      title:"Go to gym",
      description:"From 8 to 9"
    }
  ])
  function addTodo(){
    setTodo([...todos,{
      id:4,
      title:" " + Math.random(),
      description:"description" + Math.random()
    }]);
  }
  return (
    <>
    <button onClick={addTodo}></button>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}

function Todo({title, description}){
  return(
  <div>
    <h1>{title}</h1><br />
    <h5>{description}</h5><br />
  </div>)
}

export default App
