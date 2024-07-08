import React from 'react';
import './AddNote.css';

const AddNote = () => {
  const handleTextareaChange = (e) => {
    // e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
    console.log(e.target.scrollHeight);
  };

  return (
    <div>
      <textarea
        className='Lie_AddNote'
        placeholder='Add Note'
        onChange={handleTextareaChange}
      ></textarea>
    </div>
  );
};

export default AddNote;
