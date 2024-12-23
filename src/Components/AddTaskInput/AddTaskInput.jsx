import React from 'react'
import "./style.css"
import { useState } from 'react';

function AddTaskInput({ HandleAdd = (text) => {} }) {
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      HandleAdd(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    //   e.target.blur();
    }
  };

  const handleButtonClick = () => {
    addTask();
    document.getElementById('task-input').blur();
  };

  return (
    <div className='AddTaskInput'>
      <input
        id="task-input"
        className='poppins poppins-medium'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyPress}
      />
      <button
        className='poppins poppins-medium'
        onClick={handleButtonClick}
      >
        Add
      </button>
    </div>
  );
}

export default AddTaskInput