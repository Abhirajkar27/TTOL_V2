import React from 'react'
import Cards from '../components/Cards'
const Landing = () => {
  return (
    <div>
      <div className="Landing_Upperdiv">
        <p className='Landing_YB'>You both will love</p>
        <p className='Landing_TL'> 2 Truths and a lie</p>
      </div>
      <div className='landing_cards'>
        <Cards sign='?' className={'card1'} />
        <Cards sign='?' className={'card2'} />
        <Cards sign='!' className={'card3'} color='var(--Accent-Accent--02-Accent-02-neon, #FF5AF9)' />
      </div>
      <div className="activity_info">
        <p className='Landing_activity_info'>Activity info</p>
      </div>
      <div className="Landing_buttons">
        <button className='Landing_start'>Start</button>
        <button className='Landing_activity'>choose another activity</button>
      </div>
    </div>
  )
}

export default Landing
