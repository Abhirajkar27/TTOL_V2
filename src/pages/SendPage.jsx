import React, { useState } from 'react'
import './SendPage.css'
import Cards from '../components/Cards'
import AddNote from '../components/AddNote';
const SendPage = (props) => {

  return (
    <div className='TTOL-landing'>
      <div className={`Landing_Upperdiv updmargintop`}>
        <p className='Landing_YB'>You both will love</p>
        <p className='Landing_TL'> 2 Truths and a lie</p>
      </div>
      <div className={`landing_cards lanmargintop`}>
        <Cards sign='?' className={'card1'} />
        <Cards sign='?' className={'card2'} />
        <Cards sign='!' className={'card3'} color='var(--Accent-Accent--02-Accent-02-neon, #FF5AF9)' />
      </div>
<AddNote />
<button className={`nxtbtntp`} onClick={()=>console.log(9)} ><span className={`nxtbtntp-txt`}>Next</span></button>
    </div>
  )
}

export default SendPage;
