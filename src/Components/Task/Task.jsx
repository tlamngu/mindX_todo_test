import React from 'react'
import { useState } from 'react'
import "./style.css"

function Task({ id, taskText = "Error no content provided.", TaskCompleted = false, canDelete = false, handleComplete = (id, complete) => { }, handleDelete = (id) => { } }) {
    const [isCompleted, setCompleted] = useState(TaskCompleted);
    const handleCompleteChange = (e) => {
        if (!isCompleted) {
            e.target.parentNode.classList.add("completed");
        } else {
            if (e.target.parentNode.classList.contains("completed")) {
                e.target.parentNode.classList.remove("completed");
            }
        }
        handleComplete(id, !isCompleted);
        setCompleted(!isCompleted);
    }
    const handleDeleteTask = (e) => {
        handleDelete(e.target.parentNode.getAttribute("task_id"))
        // e.target.parentNode.remove()
    }
    if (TaskCompleted) {
        return (<div className='Task completed' completed={TaskCompleted} task_id={id}>
            <input type="checkbox" checked={TaskCompleted} onChange={handleCompleteChange} />
            <p className='poppins poppins-medium'>{taskText}</p>
            {
                canDelete && <button onClick={handleDeleteTask}>🗑️</button>
            }
        </div>)
    }else{
        return(<div className='Task' completed={TaskCompleted} task_id={id}>
            <input type="checkbox" checked={TaskCompleted} onChange={handleCompleteChange} />
            <p className='poppins poppins-medium'>{taskText}</p>
            {
                canDelete && <button onClick={handleDeleteTask}>🗑️</button>
            }
        </div>)
    }
    // return (<>
    //     {
    //         TaskCompleted ?
                
    //             :
                
    //     }
    // </>
    // )
}

export default Task