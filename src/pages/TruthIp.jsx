import React from 'react';
import './TruthIp.css';
import TruthCards from '../components/TruthCards';

const TruthIp = () => {
    return (
        <div className='truthIPPage'>
            <div className='topsmallcards'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 47" fill="none">
                    <rect y="11.9526" width="23" height="36" rx="3" transform="rotate(-15 0 11.9526)" fill="#526175" />
                    <rect width="23" height="36" rx="3" transform="matrix(-0.965926 -0.258819 -0.258819 0.965926 74.5337 11.9526)" fill="#526175" />
                    <rect x="26" width="23" height="36" rx="3" fill="#79889D" />
                </svg>
            </div>
            <TruthCards/>
            <button className='nxtbtntp'><span className='nxtbtntp-txt'>Next</span></button>
        </div>
    )
}

export default TruthIp
