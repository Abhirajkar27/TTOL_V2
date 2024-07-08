import React, { useState } from 'react'
import Cards from '../components/Cards'
import ActivityInfo from "../components/ActivityInfo";
import imge from"../assets/img/3cards.png";
const Landing = (props) => {
  const [isShowActivityInfo, setISShowActivityInfo] = useState(false);

  return (
    <div className='TTOL-landing'>
      <div className={`Landing_Upperdiv ${isShowActivityInfo?'updmargintop':''}`}>
        <p className='Landing_YB'>You both will love</p>
        <p className='Landing_TL'> 2 Truths and a lie</p>
      </div>
      <div className={`landing_cards ${isShowActivityInfo?'lanmargintop':''}`}>
        {/* <Cards sign='?' className={'card1'} />
        <Cards sign='?' className={'card2'} />
        <Cards sign='!' className={'card3'} color='var(--Accent-Accent--02-Accent-02-neon, #FF5AF9)' /> */}
        <img src={imge} className="resizable-image"  />
      </div>
      {isShowActivityInfo && <ActivityInfo onClose={() => { setISShowActivityInfo(false);}}/>}
      {!isShowActivityInfo && <div className="activity_info">
        <p className='Landing_activity_info' onClick={() => { setISShowActivityInfo(true); }}>Activity info</p>
      </div>}
      <div className={`Landing_buttons ${isShowActivityInfo?'lbmargintop':''}`}>
        <button className='Landing_start' onClick={props.onNext}>Start</button>
        <button className='Landing_activity'>choose another activity</button>
      </div>
    </div>
  )
}

export default Landing
