import './App.css';
import React,{useState} from 'react';
// import './templates/ResumeTemplate2.css'
// import ResumeTemplate from './templates/ResumeTemplate'
// import ResumeTemplate2 from './templates/ResumeTemplate2'
// import ArtTrackIcon from '@material-ui/icons/ArtTrack';
// import { Card } from '@material-ui/core';
import img from './assets/Group 3304.png';
// import { LinearScale } from '@material-ui/icons';
import img1 from './assets/kashware kard.png';
import img2 from './assets/Kard Fan.png';

const App=()=>{
  const [zoom, setZoom]=useState('1');
  const [image, setImg]=useState('./assets/Group 3304.png');

  function handleZoom(){
    setZoom('0.8')
    setTimeout(()=>{setZoom('0.6')},2000)
    setTimeout(()=>{setZoom('0.4')},2000)
    setTimeout(()=>{setImg('bh')},4000)
    setTimeout(()=>{setImg('bh2')},6000)

    //setTimeout(()=>{setImg('bhiya yaha img ka path dalna 2')},2000)
  }
  return (
    <div className='app'>
      <div className='app_header'>
        <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="70.578" height="77.502" viewBox="0 0 70.578 77.502"><defs></defs><g transform="translate(-1101.231 -800.811)"><path class="a" d="M1157.415,861.292a3.854,3.854,0,0,0,2.268-2.262,3.647,3.647,0,0,0,0-2.264q-13-14.487-26-28.974-6.805,8.148-13.61,16.3l16.938,17.2Z" transform="translate(11.887 17.022)"/><path class="a" d="M1106.5,838.6a2.893,2.893,0,0,1-2.968.739l-.029-.01a3.285,3.285,0,0,1-1.551-1.192,3.966,3.966,0,0,1-.718-2.335v-34.93h20.406V822.24a3.01,3.01,0,0,1-.886,2.133Z" transform="translate(0 0.035)"/><path class="a" d="M1159.365,800.845l-58.1,62.683v-9.507a2.945,2.945,0,0,1,.773-1.988l46.62-50.944a.743.743,0,0,1,.549-.245Z" transform="translate(0.02 0.021)"/><path class="a" d="M1171.586,805.335q-32.529,35.8-65.044,71.608a2.825,2.825,0,0,1-2.086.929,2.766,2.766,0,0,1-.887-.147,3.583,3.583,0,0,1-1.721-1.272,2.872,2.872,0,0,1-.55-1.711v-6q31.54-33.962,63.063-67.929h4.953a3.876,3.876,0,0,1,2.272,2.265A3.668,3.668,0,0,1,1171.586,805.335Z" transform="translate(0.043 0)"/></g></svg>
        <div className='menu'>
          <span>Kard</span>
          <span>Kardless</span>
          <span>security</span>
          <span>rewards</span>
          <span className='getApp'>get the app</span>          
        </div>
      </div>
      {
        image=='./assets/Group 3304.png'?
      <div className='app_section' style={{transform:`scale(${zoom})`}}>
        <p>Kashware is an exclusive <br/>ecosystem unites your money.</p><br/>
        <h2>#Spend #Save #StaySecured #EarnRewards #JoinTheKlub</h2>
          <img src={img} onClick={()=>handleZoom()}/>
      </div>: image=='bh'?<img src={img1}/>:<img src={img2} />


      }
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <div className='app_header'>
//           <h2><ArtTrackIcon fontSize='large' color='primary'/>&nbsp;ResumeBuilder</h2>
//       </div>
//       <div className='app_content'>
//           <Card className='app_content_text'>
//               <h1>HIGHLY DESCRIPTIVE TECHNICAL RESUME TEMPLATES</h1>
//               <p>Each template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p>
//           </Card>
//       </div>
//       <div className='app_templates'>
//           <ResumeTemplate/>
//           <ResumeTemplate2/>
//       </div>
//     </div>

//   );
// }

export default App;
