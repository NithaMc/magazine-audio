import React from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from './AudioPlayer.jsx';


const audioFiles = {
  1: '/audios/1_lv_0_20240904060756_320kbps (1).mp3',
  2: '/audios/STREEKAL.mp3',
  3: '/audios/AUD-20240923-WA0014.mp3',
  4: '/audios/AUD-20240923-WA0013.mp3',
  5: '/audios/AUD-20240923-WA0010.mp3',
  6: '/audios/AUD-20240923-WA0007.mp3',
  7: '/audios/AUD-20240923-WA0006.mp3',
  8: '/audios/AUD-20240923-WA0005.mp3',
  9: '/audios/AUD-20240923-WA0004.mp3',
  10: '/audios/AUD-20240923-WA0003.mp3'
  
 
};
const imageFiles = {
  1:'/images/mgzn indira 1.jpg',
  9:'/images/mgzn 5.jpg'
}

const ScannedAudioPage = () => {
  const { id } = useParams();
  const audioSrc = audioFiles[id]; 
  const imageSrc = imageFiles[id];

  if (!audioSrc) {
    return <div className='bg-black'>Open the link again</div>; 
  }

  return (
    <div>
      {/* <h1>Playing Audio {id}</h1> */}
    
      <AudioPlayer audioSrc={audioSrc} imageSrc={imageSrc}/>
    </div>
  );
};

export default ScannedAudioPage;