import { useState } from "react"

export function Todos({todos}){
    
    return <div>
        {todos.map((todo)=>{
            const [complete, setCompleted] = useState(todo.completed);
            async function completed(){
                setCompleted(true);
                console.log(todo._id);
                const response = await fetch("http://localhost:3000/completed",{
                    method:"PUT",
                    body:JSON.stringify({
                        id:todo._id
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                });
                const json = await response.json();
                alert("Mark as completed");

            }
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={completed} >{complete == true ? "Completed" : "Mark as complete"}</button>
            </div>
        })}
    </div>
}