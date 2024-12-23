import React from 'react'
import "./style.css"

function TaskContainer({children}) {
  return (
    <div className="TaskContainer">
        {children}
    </div>
  )
}

export default TaskContainer