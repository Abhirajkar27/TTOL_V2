import React, { useEffect, useState } from 'react';
import './TruthCards.css';
import Truth_Options from './Truth_Options';

const TruthCards = ({back , second = false, third = false , text , setCanMove, selectedOption, setSelectedOption, TL, setTruthOrLie,ToL}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [tarr, setTarr] = useState([
    "I can't swim",
    "I have a black belt in karate",
    "I make my own clothes",
    "I've never tasted coffee",
    "I've accidentally texted a meme to my boss",
    "I've ghosted a celebrity in DMs",
  ]);

  const handleChange = (event) => {
    let value = event.target.value;
    if (value.length > 68) {
      value = value.slice(0, 68); 
    }
    const lineCount = value.split('\n').length;
    if (lineCount <= 4) {
      const trimmedValue = value.replace(/^\s+/g, '');
      setSelectedOption(trimmedValue);
      console.log("greets", ToL, trimmedValue);
      setTruthOrLie(prevState => ({ ...prevState, [ToL]: value }));
    }
  };
 
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setTruthOrLie(prevState => ({ ...prevState, [ToL]: option }));
    setIsFocused(true);
  };

  const handleNewOptionsClick = () => {
    console.log('Fetching new options...');
  };

  useEffect(()=>{
    selectedOption ? setCanMove(true):setCanMove(false);
  },[selectedOption]);

  return (
    <>
      <div className="crd-stk">
        {/* <div className={`Back_card_two ${third ? 'pink' : 'green'}`}></div> */}
        {/* <div className={`Back_Card_one ${second ? 'pink' : 'green'}`}></div> */}
        <div className='Card_Truth_Lie' style={!back?{backgroundColor:'#FF55F8'}:{backgroundColor:'#02FF89'}}>
          <p className="Card_heading">{text}</p>
          <textarea
            type="text"
            className={`Card_Text ${isFocused ? 'input-focused' : ''}`}
            placeholder={`Enter the ${TL}`}
            value={selectedOption}
            // onChange={(e) => setSelectedOption(e.target.value)}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ textAlign: 'center', lineHeight: 'normal' , resize:"none"}}
          />
          <div className='Card_options'>
            {tarr.map((element, index) => (
              <Truth_Options key={index} text={element} onClick={() => handleOptionClick(element)} />
            ))}
          </div>
          <button className='Card_next_button' onClick={handleNewOptionsClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path d="M14.7926 10.943C14.6684 10.879 14.5256 10.861 14.3893 10.8919C14.2531 10.9229 14.1321 11.0009 14.0477 11.1123C13.9633 11.2236 13.9209 11.3611 13.9279 11.5007C13.9349 11.6402 13.9909 11.7728 14.086 11.8751L14.9529 12.5223H12.7798C12.1799 12.5165 11.5889 12.377 11.0497 12.1141C10.5105 11.8511 10.0366 11.4714 9.66259 11.0023C9.60918 10.945 9.54501 10.8988 9.47373 10.8663C9.40245 10.8338 9.32547 10.8156 9.24718 10.8129C9.08906 10.8073 8.93521 10.8648 8.81947 10.9726C8.70373 11.0805 8.63558 11.2299 8.63001 11.3881C8.62444 11.5462 8.68191 11.7 8.78978 11.8158C9.27447 12.4189 9.88961 12.9043 10.5889 13.2355C11.2883 13.5666 12.0536 13.7349 12.8273 13.7276H14.9529L14.086 14.3748C13.9733 14.4731 13.9018 14.6102 13.8858 14.7589C13.8698 14.9076 13.9105 15.0568 13.9997 15.1768C14.089 15.2968 14.2202 15.3787 14.3672 15.4061C14.5141 15.4335 14.6661 15.4045 14.7926 15.3248L17.1023 13.6089C17.176 13.5536 17.2359 13.4819 17.2771 13.3994C17.3183 13.317 17.3398 13.2261 17.3398 13.1339C17.3398 13.0417 17.3183 12.9508 17.2771 12.8684C17.2359 12.7859 17.176 12.7142 17.1023 12.6589L14.7926 10.943Z" fill="white" />
              <path d="M12.7306 6.57361C12.7616 6.5647 12.7945 6.5647 12.8256 6.57361H15.0403L14.0665 7.34548C13.9429 7.44311 13.8631 7.58585 13.8448 7.7423C13.8264 7.89875 13.8709 8.05608 13.9686 8.1797C14.0662 8.30332 14.2089 8.38308 14.3654 8.40146C14.5218 8.41983 14.6792 8.3753 14.8028 8.27767L17.1125 6.44298C17.1818 6.38735 17.2378 6.31685 17.2762 6.23669C17.3147 6.15653 17.3347 6.06876 17.3347 5.97986C17.3347 5.89095 17.3147 5.80318 17.2762 5.72302C17.2378 5.64286 17.1818 5.57237 17.1125 5.51673L14.8028 3.68204C14.6792 3.58441 14.5218 3.53988 14.3654 3.55826C14.2089 3.57663 14.0662 3.6564 13.9686 3.78001C13.8709 3.90363 13.8264 4.06096 13.8448 4.21741C13.8631 4.37386 13.9429 4.5166 14.0665 4.61423L15.0403 5.38611H12.8256C10.5278 5.33861 9.06121 6.84079 7.93309 8.56267C6.63871 6.53204 5.15434 4.22829 2.25684 4.22829C2.09936 4.22829 1.94834 4.29085 1.83699 4.4022C1.72564 4.51355 1.66309 4.66457 1.66309 4.82204C1.66309 4.97952 1.72564 5.13054 1.83699 5.24189C1.94834 5.35324 2.09936 5.41579 2.25684 5.41579C4.69121 5.41579 5.93809 7.63642 7.2384 9.68486C5.93809 11.8758 4.68527 14.2864 2.25684 14.2508C2.09936 14.2508 1.94834 14.3133 1.83699 14.4247C1.72564 14.536 1.66309 14.6871 1.66309 14.8445C1.66309 15.002 1.72564 15.153 1.83699 15.2644C1.94834 15.3757 2.09936 15.4383 2.25684 15.4383C7.87371 15.4917 7.79059 6.77548 12.7306 6.57361Z" fill="white" />
            </svg> New options
          </button>
        </div>
      </div>
    </>
  );
};

export default TruthCards;
