import React, { useState } from "react";
import './assets/fonts/styles/fonts.css';
import "./App.css";
import Eclipse from "./components/Eclipse";
import Landing from "./pages/Landing";
import TruthIp from "./pages/TruthIp";
import SendPage from "./pages/SendPage";
import Disclosure from './pages/Disclosure';


const App = () => {

  const [gameIndex, setIndex] = useState(null);
  const [truthOrLie, setTruthOrLie] = useState({ truth1: '', truth2: '', lie: '' });
  const [activityId, setActivityId] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');

  let content;
  switch (gameIndex) {
    case 0:
      content = <TruthIp selectedOption={selectedOption} setSelectedOption={setSelectedOption}  selectedOption2={selectedOption2} setSelectedOption2={setSelectedOption2} selectedOption3={selectedOption3} setSelectedOption3={setSelectedOption3}  truthOrLie={truthOrLie} setTruthOrLie={setTruthOrLie}  onClose={()=>{setIndex(null);}} onforw={()=>{setIndex(1);}}/>;
      break;
    case 1:
      content = <SendPage truthOrLie={truthOrLie} setActivityId={setActivityId}  onBack={()=>{setIndex(0);}} onforw={()=>{setIndex(2);}}/>;
      break;
    case 2:
      content = <Disclosure activityId={activityId}/>;
      break;
    default:
      content = <Landing onNext={()=>{setIndex(0);}}/>;
  }

  return (
    <div className="pgcont">
      <div className="bgpg1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 218 230"
          fill="none"
        >
          <path
            d="M85.8991 4.7693C90.118 1.4649 95.7794 0.662301 100.751 2.66383L193.073 39.8354C198.044 41.8369 201.57 46.3385 202.322 51.6444L216.292 150.184C217.044 155.49 214.909 160.794 210.69 164.098L132.337 225.466C128.118 228.771 122.457 229.573 117.485 227.572L25.1629 190.4C20.1917 188.399 16.6659 183.897 15.9137 178.591L1.94391 80.0518C1.1917 74.7458 3.32731 69.4417 7.54627 66.1372L85.8991 4.7693Z"
            stroke="white"
            stroke-opacity="0.1"
            stroke-width="2"
          />
        </svg>
      </div>
      <div className="bgpg2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 218 230"
          fill="none"
        >
          <path
            d="M85.8991 4.7693C90.118 1.4649 95.7794 0.662301 100.751 2.66383L193.073 39.8354C198.044 41.8369 201.57 46.3385 202.322 51.6444L216.292 150.184C217.044 155.49 214.909 160.794 210.69 164.098L132.337 225.466C128.118 228.771 122.457 229.573 117.485 227.572L25.1629 190.4C20.1917 188.399 16.6659 183.897 15.9137 178.591L1.94391 80.0518C1.1917 74.7458 3.32731 69.4417 7.54627 66.1372L85.8991 4.7693Z"
            stroke="white"
            stroke-opacity="0.1"
            stroke-width="1.5"
          />
        </svg>
      </div>
      <div className="bgpg3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 218 230"
          fill="none"
        >
          <path
            d="M85.8991 4.7693C90.118 1.4649 95.7794 0.662301 100.751 2.66383L193.073 39.8354C198.044 41.8369 201.57 46.3385 202.322 51.6444L216.292 150.184C217.044 155.49 214.909 160.794 210.69 164.098L132.337 225.466C128.118 228.771 122.457 229.573 117.485 227.572L25.1629 190.4C20.1917 188.399 16.6659 183.897 15.9137 178.591L1.94391 80.0518C1.1917 74.7458 3.32731 69.4417 7.54627 66.1372L85.8991 4.7693Z"
            stroke="white"
            stroke-opacity="0.1"
            stroke-width="1.2"
          />
        </svg>
      </div>
      <div className="bgpg4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 218 230"
          fill="none"
        >
          <path
            d="M85.8991 4.7693C90.118 1.4649 95.7794 0.662301 100.751 2.66383L193.073 39.8354C198.044 41.8369 201.57 46.3385 202.322 51.6444L216.292 150.184C217.044 155.49 214.909 160.794 210.69 164.098L132.337 225.466C128.118 228.771 122.457 229.573 117.485 227.572L25.1629 190.4C20.1917 188.399 16.6659 183.897 15.9137 178.591L1.94391 80.0518C1.1917 74.7458 3.32731 69.4417 7.54627 66.1372L85.8991 4.7693Z"
            stroke="white"
            stroke-opacity="0.1"
            stroke-width="1"
          />
        </svg>
      </div>
      <div className="bgpg5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 218 230"
          fill="none"
        >
          <path
            d="M85.8991 4.7693C90.118 1.4649 95.7794 0.662301 100.751 2.66383L193.073 39.8354C198.044 41.8369 201.57 46.3385 202.322 51.6444L216.292 150.184C217.044 155.49 214.909 160.794 210.69 164.098L132.337 225.466C128.118 228.771 122.457 229.573 117.485 227.572L25.1629 190.4C20.1917 188.399 16.6659 183.897 15.9137 178.591L1.94391 80.0518C1.1917 74.7458 3.32731 69.4417 7.54627 66.1372L85.8991 4.7693Z"
            stroke="white"
            stroke-opacity="0.1"
            stroke-width=".8"
          />
        </svg>
      </div>
      <div className="bgpg6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 218 230"
          fill="none"
        >
          <path
            d="M85.8991 4.7693C90.118 1.4649 95.7794 0.662301 100.751 2.66383L193.073 39.8354C198.044 41.8369 201.57 46.3385 202.322 51.6444L216.292 150.184C217.044 155.49 214.909 160.794 210.69 164.098L132.337 225.466C128.118 228.771 122.457 229.573 117.485 227.572L25.1629 190.4C20.1917 188.399 16.6659 183.897 15.9137 178.591L1.94391 80.0518C1.1917 74.7458 3.32731 69.4417 7.54627 66.1372L85.8991 4.7693Z"
            stroke="white"
            stroke-opacity="0.1"
            stroke-width=".6"
          />
        </svg>
      </div>
      <div className="bgpg7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 218 230"
          fill="none"
        >
          <path
            d="M85.8991 4.7693C90.118 1.4649 95.7794 0.662301 100.751 2.66383L193.073 39.8354C198.044 41.8369 201.57 46.3385 202.322 51.6444L216.292 150.184C217.044 155.49 214.909 160.794 210.69 164.098L132.337 225.466C128.118 228.771 122.457 229.573 117.485 227.572L25.1629 190.4C20.1917 188.399 16.6659 183.897 15.9137 178.591L1.94391 80.0518C1.1917 74.7458 3.32731 69.4417 7.54627 66.1372L85.8991 4.7693Z"
            stroke="white"
            stroke-opacity="0.1"
            stroke-width="2"
          />
        </svg>
      </div>
      <Eclipse class="Eclp1"/>
      <Eclipse class="Eclp2"/>
      <Eclipse class="Eclp3"/>
      <Eclipse class="Eclp4"/>
      <Eclipse class="Eclp5"/>
      <Eclipse class="Eclp6"/>
      <Eclipse class="Eclp7"/>
      <Eclipse class="Eclp8"/>
      <Eclipse class="Eclp9"/>
      <Eclipse class="Eclp10"/>
      <Eclipse class="Eclp11"/>
      <Eclipse class="Eclp12"/>
      {content}
    </div>
  );
};

export default App;
