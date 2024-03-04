import { useRecoilValue } from "recoil";
import {todoState} from '../store/atoms/todo-state'
export function RenderTodo(){
    const todos = useRecoilValue(todoState);
    return(
        <div>
            {todos.map(todo =>{
                return(
                // {console.log(todo.title)}
                <div>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                </div>
                )
            })}
        </div>
    )
}