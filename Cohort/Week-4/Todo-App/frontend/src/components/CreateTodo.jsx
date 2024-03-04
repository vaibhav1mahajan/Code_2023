import { useState } from "react";

export function CreateTodo({ fetchTodos }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleAddTodo = async() => {
        try {
            const response = await fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            });
    
            if (!response.ok) {
                throw new Error('Failed to add todo');
            }
    
            // Fetch updated todos
            fetchTodos();
    
            // Clear input fields after adding todo
            setTitle("");
            setDescription("");
            
            alert("Todo added");
        } catch (error) {
            console.error("Error adding todo:", error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div>
            <input
                style={{
                    padding: 10,
                    margin: 10,
                    fontSize: 25
                }}
                type="text"
                placeholder="title"
                value={title}
                onChange={handleTitleChange}
            /><br />
            <input
                style={{
                    padding: 10,
                    margin: 10,
                    fontSize: 25
                }}
                type="text"
                placeholder="description"
                value={description}
                onChange={handleDescriptionChange}
            /><br />
            <button
                style={{
                    padding: 8,
                    margin: 10,
                    fontSize: 20
                }}
                onClick={handleAddTodo}
            >
                Add a Todo
            </button>
        </div>
    );
}
