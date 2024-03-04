import { useSetRecoilState } from 'recoil'
import {todoState} from '../store/atoms/todo-state'
import { useState } from 'react';

export function CreateTodo(){
    const setTodo = useSetRecoilState(todoState);
    const [title, setTitle] = useState("");
    const [description,setDescription] = useState("");
    function addTodo(){
        setTodo(todo =>{
            return [...todo,{
                title:title,
                description:description
            }]
        })
        setDescription("");
        setTitle("");
    }
    return(
        <div>
            <input value={title} type='text' placeholder="Title" onChange={(e)=>{
                setTitle(e.target.value);
            }} /> <br /><br />
            <input type="text" value={description} placeholder="Description" onChange={(e)=>{
                setDescription(e.target.value)
            }} /> <br /><br />
            <button onClick={addTodo}>Add todo</button>
        </div>
    )
}