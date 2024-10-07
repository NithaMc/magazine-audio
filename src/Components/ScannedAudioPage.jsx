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
  10: '/audios/AUD-20240923-WA0003.mp3',
  11: '/audios/AUD-20240923-WA0008.mp3.mp3',
  12: '/audios/AUD-20240923WA.mp3.mp3', 
  13: '/audios/AUD-20240924-WA0038.mp3',
  14: '/audios/AUD-20240924-WA0037.mp3',
  15: '/audios/AUD-20240922-WA0094.mp3',
  16: '/audios/AUD-20240923-WA0001.mp3',
  17: '/audios/AUD-20240923-WA0002.mp3',
  18: '/audios/AUD-20240923-WA0011.mp3',
  19: '/audios/AUD-20240923-WA0012.mp3',
  20:'/audios/AUD-20241006-WA0012.mp3',
  21:'/audios/WhatsApp Audio 2024-10-05 at 7.29.29 PM - Copy.mp3'
  
 
};
const imageFiles = {
  1:'/images/mgzn indira 1.jpg',
  2:'/images/dalith 2.jpg',
  3:'/images/Unaggatha niyal 1.jpg',
  4:'/images/kathapathra nirupanam4.jpg',
  5:'/images/warden.jpg',
  6:'/images/adhyapakanano1.jpg',
  7:'/images/അംഗന യാനം.jpg',
  8:'/images/സ്തുതി പാടകർ.jpg',
  9:'/images/mgzn 5.jpg',
  10:'/images/ഉടൽ2.jpg',
  11:'/images/Gender roles.jpg',
  12:'/images/Eka 3.jpg',
  13:'/images/ഒരു സ്ത്രീ.jpg',
  14:'/images/WOMEN ARE FLOWERS_-1.jpg',
  15:'/images/വിരലടയാളത്തിന്റെ നാലു നിലവിളികൾ.jpg',
  16:'/images/mayalokam 2.jpg',
  17:'/images/HOME SWEET HOME.jpg',
  18:'/images/white feminism 4.jpg',
  19:'/images/women in conflict 1.jpg',
  20:'/images/hadiya interview.jpg',
  21:'/images/പെണ്ണ്.jpg'


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