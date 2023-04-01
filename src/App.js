import './App.css';
import { useEffect, useState } from 'react';


const drumPads = [


  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];
function App() {

  const [activeKey, setActiveKey] = useState('');

  useEffect(()=>{
    document.addEventListener('keydown', (event)=>{
      console.log(event.key);
      for (let i = 0; i < drumPads.length; i++){
        if(drumPads[i].keyTrigger === event.key.toUpperCase()){
          playSound(event.key.toUpperCase())
        }
      }
      
    });
  }, []);

  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    for (let i = 0; i < drumPads.length; i++){
      if(drumPads[i].keyTrigger === selector){
        setActiveKey(drumPads[i].id)
      }
    }
    // setActiveKey(selector)
  }

  return (
    <div className="App">
      <div id="drum-machine">  
        <div id='display'> {activeKey} </div>
        <div className='drum-pads'>
          {drumPads.map((drumpad)=>(
          <div onClick={()=> playSound(drumpad.keyTrigger)} className='drum-pad' id={drumpad.url} key={drumpad.url}  >
            {drumpad.keyTrigger}
            <audio id={drumpad.keyTrigger} className='clip' src={drumpad.url} ></audio>
          </div>
          ))}
          
        </div>
      </div>     
    </div>
  );
}

export default App;
