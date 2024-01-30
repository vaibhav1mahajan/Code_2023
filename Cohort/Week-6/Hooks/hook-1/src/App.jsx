import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then((response)=>{
      setTodos(response.data.todos);
    })
  },[]);

  return (
    <>
     {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}
function Todo({title, description}){
  return(
    <div>
      <h1>{title}</h1><br />
      <h4>{description}</h4><br />
    </div>
  )
}
export default App
