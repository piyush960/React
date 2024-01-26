// TO-DO-LIST

import React, {useState} from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState(['wash hands', 'eat food', 'go to sleep'])
    const [newTask, setNewTask] = useState("");

    function handleInput(e){
        setNewTask(e.target.value)
    }

    function addNewTask(){
        if(newTask.trim()){
            setTasks(t => [...t, newTask])
        }
        setNewTask("")

    }

    function removeTask(index){
        const updatedTasks = tasks.filter((_, i) => index !== i)
        setTasks(t => updatedTasks)
    }

    function moveUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }

    return(<div>
        <h1>To-Do-List</h1>
        <input type="text" value={newTask} placeholder='enter a task...' onChange={handleInput}/>
        <button onClick={addNewTask}>Add Task</button>

        <ul>
            {tasks.map((task, index) => <li key={index}><span>{task}</span> <button onClick={() => removeTask(index)}>Remove</button> <button onClick={() => moveUp(index)}>Move Up</button> <button onClick={() => moveDown(index)}>Move Down</button></li>)}
        </ul>
    </div>)

}

export default ToDoList