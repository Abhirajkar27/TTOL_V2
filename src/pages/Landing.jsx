import React from 'react'
import Cards from '../components/Cards'
const Landing = () => {
  return (
    <div>
        <div className="Landing_Upperdiv">
        <p className='Landing_YB'>You Both will Love</p>
        <p className='Landing_TL'> 2 Truths and a Lie</p>
        </div>
    
      <Cards  sign='?' className={'card1'}/>
      <Cards sign='?'  className={'card2'}/>
      <Cards sign='!' className={'card3'} color='var(--Accent-Accent--02-Accent-02-neon, #FF5AF9)'/>
    </div>
  )
}

export default Landing
