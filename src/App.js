import React from 'react';
import Frame1 from './components/Frame1';
import getContentFrame1 from './assets/getContentFrame1';
import Frame2 from './components/Frame2';
import getContentFrame2 from './assets/getContentFrame2'
import Frame3 from './components/Frame3';
import './global.css';

export default function App(){

  const data = getContentFrame1();
  const data2 = getContentFrame2();

  return(
    <div className='contenedor_frames'>
      {
        data.map((frame)=>{
          return <Frame1 data={frame}/>
        })
      }
      {
        data2.map((frame)=>{
          return <Frame2 data2={frame}/>
        })
      }
      {
        <Frame3 />
      }
    </div>
  )
}
