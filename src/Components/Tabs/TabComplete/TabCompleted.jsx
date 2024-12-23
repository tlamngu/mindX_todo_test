import React, { useState, useEffect } from 'react';
import "./style.css";
import AddTaskInput from '../../AddTaskInput/AddTaskInput';
import Task from '../../Task/Task';
import TaskContainer from '../../TaskContainer/TaskContainer';

function TabCompleted() {
    const [TasksData, SetTaskData] = useState({});
    const [TasksLoaded, SetTaskLoaded] = useState(false);

    const loadTasks = () => {
        if (!TasksLoaded) {
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                SetTaskData(JSON.parse(savedTasks));
            } else {
                SetTaskData({});
            }
            SetTaskLoaded(true);
        }
    };

    const saveTasks = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const addTask = (description) => {
        const taskId = Object.keys(TasksData).length ? Math.max(...Object.keys(TasksData).map(Number)) + 1 : 1;
        const newTask = { id: taskId, description, completed: false };
        const updatedTasks = { ...TasksData, [taskId]: newTask };
        SetTaskData(updatedTasks);
        saveTasks(updatedTasks);
    };

    const deleteTask = (taskId) => {
        const { [taskId]: removedTask, ...remainingTasks } = TasksData;
        SetTaskData(remainingTasks);
        saveTasks(remainingTasks);
    };

    const markTaskAsCompleted = (taskId) => {
        const updatedTasks = {
            ...TasksData,
            [taskId]: { ...TasksData[taskId], completed: true }
        };
        SetTaskData(updatedTasks);
        saveTasks(updatedTasks);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const completedTasks = Object.values(TasksData).filter(task => task.completed); // Filter completed tasks

    const deleteAllCompletedTasks = () => {
        const remainingTasks = Object.values(TasksData).reduce((sac, task) => {
            if (!task.completed) {
                sac[task.id] = task;
            }
            return sac;
        }, {});
        SetTaskData(remainingTasks);
        saveTasks(remainingTasks);
    };

    return (
        <div className='TabAll'>
            {/* <AddTaskInput HandleAdd={addTask} /> */}
            <TaskContainer>
                {Object.keys(TasksData).length === 0 || completedTasks.length === 0 ? (
                    <p className='poppins poppins-medium poppins-bold'>No tasks were completed / added.</p>
                ) : (
                    completedTasks.map(task => (
                        <Task
                            key={task.id}
                            id={task.id}
                            taskText={task.description}
                            TaskCompleted={task.completed}
                            handleComplete={markTaskAsCompleted}
                            canDelete={true}
                            handleDelete={deleteTask}
                        />
                    ))
                )}
            </TaskContainer>
            {completedTasks.length > 0 && (
                <button className="deleteAllButton poppins poppins-medium" onClick={deleteAllCompletedTasks}>
                    Delete All
                </button>
            )}
        </div>
    );
}

export default TabCompleted;
