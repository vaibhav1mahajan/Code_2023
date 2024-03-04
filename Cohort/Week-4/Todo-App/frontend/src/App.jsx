import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  // Function to fetch todos
  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:3000/todos");
      const json = await res.json();
      setTodos(json.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // useEffect to fetch todos on initial render
  useEffect(() => {
    fetchTodos();
  }, []);

  // Function to update todos state
  function setTodo(todo) {
    setTodos(todo);
  }

  return (
    <div>
      <CreateTodo fetchTodos={fetchTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
