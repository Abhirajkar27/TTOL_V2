import React from 'react';

const Cards = ({ color = 'var(--Accent-Accent--04-Accent-04, #36FFA1)', sign = '?', className }) => {
  return (
    <div className={`Landing_card ${className}`} style={{ background: color }}>
        <p className='Landing_card_sign'>{sign}</p>
    </div>
  );
}

export default Cards;
