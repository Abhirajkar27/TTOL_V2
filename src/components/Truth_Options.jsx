import React from 'react';

const Truth_Options = ({ text, onClick }) => {
  return (
    <div className='Truth_Options' onClick={onClick}>
      <div className="textoption">
        {text}
      </div>
    </div>
  );
};

export default Truth_Options;
