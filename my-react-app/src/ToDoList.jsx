import React, {useState} from 'react';

function TDL () {
    const [tasks, setTasks] = useState([]);

    function handleAddTask (event) {
        const newTask = document.getElementById("taskInput").value;
        if(newTask.trim !== "") {
            document.getElementById("taskInput").value = "";
            setTasks(t => [...t, newTask]);
        }
    }

    function handleRemoveTask (index) {
        setTasks(t => (t.filter((_, i) => i!==index)));
    }

    function moveTaskUp (index) {
        if(index>=1) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
            setTasks(newTasks);
        }
    }

    function moveTaskDown (index) {
        if(index<tasks.length -1 ) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
            setTasks(newTasks);
        }
    }

    return(
        <>
        <h1>To Do List</h1>
        <input id="taskInput" placeholder="New task..."></input>
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
            {tasks.map((task, index) =>
            <li key={index}>
                <span>{task}</span>
                <button onClick={() => handleRemoveTask(index)}>Delete</button>
                <button onClick={() => moveTaskUp(index)}>👆🏻</button>
                <button onClick={() => moveTaskDown(index)}>👇🏻</button>
            </li>
            )}
        </ul>
        </>
    );
}

export default TDL