import React, { useEffect, useState } from 'react';
import './Disclosure.css'; // Importing the CSS for styling
import imag from '../assets/img/Boxes-3.png';

const Disclosure = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 4000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="container">
      {!showMessage ? (
        <div className="oscillate">
          <img src={imag} alt="Oscillating" className="image" />
        </div>
      ) : (
        <>
        <div className="message-container">
          <div className="main-message">Nailed It!😍</div>
          <div className="sub-message">Activity sent to Rahul</div>
        </div>
        <button className={`nxtbtntp`} onClick={()=>console.log(9)} ><span className={`nxtbtntp-txt`}>Continue</span></button>
        </>
      )}
    </div>
  );
};

export default Disclosure;
