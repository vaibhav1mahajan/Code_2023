import { useEffect, useState } from 'react';
import './App.css';

function useTodo(n) {
  const [todos, setTodo] = useState([]);
  const[loading,setLoading] = useState(true);
  useEffect(() => {
    async function dataFetching() {
      setLoading(true);
      const data = await fetch('https://sum-server.100xdevs.com/todos');
      const res = await data.json();
      setTodo(res.todos);
      setLoading(false);
    }

    dataFetching();

    const intervalId = setInterval(async () => {
      dataFetching();
    }, n * 1000);

    return () => clearInterval(intervalId);
  }, [n]);

  return { todos,loading };
}

function App() {
  const { todos ,loading} = useTodo(2);

  return (
    <>
      {!loading ? todos && todos.map((todo) => <Todo todo={todo} key={todo.id} />) : <div>Hello</div>}
    </>
  );
}

function Todo({ todo }) {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
    </div>
  );
}

export default App;
