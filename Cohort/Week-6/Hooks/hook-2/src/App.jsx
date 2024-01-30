import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <button onClick={function(){
        setCount(1);
      }}>1</button>
      <button onClick={function(){
        setCount(2);
      }}>2</button>
      <button onClick={function(){
        setCount(3);
      }}>3</button>
      <button onClick={function(){
        setCount(4);
      }}>4</button>
     <Todo id={count}></Todo>
    </>
  )
}
function Todo({id}){
  const [todo , setTodo] = useState({});
  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
    .then(async (response)=>{
      const json = await response.json();
      setTodo(json.todo);
    })
  },[id])
  return (
    <div>
      <h1>{id}</h1>
      <h1>{todo.title}</h1><br />
      <h4>{todo.description}</h4>
    </div>
  )
}

export default App
