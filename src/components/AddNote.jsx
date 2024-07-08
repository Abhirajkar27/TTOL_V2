import React, { useState } from 'react';
import './AddNote.css';

const AddNote = () => {
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (e) => {
    const value = e.target.value.replace(/\s+/g, ' ').trim();
    setTextareaValue(value);

    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  return (
    <div>
      <textarea
        className='Lie_AddNote'
        placeholder='Add Note'
        value={textareaValue}
        onChange={handleTextareaChange}
        rows={1}
        style={{ minHeight: '4.9vh' , resize:"none"}} 
      ></textarea>
    </div>
  );
};

export default AddNote;
