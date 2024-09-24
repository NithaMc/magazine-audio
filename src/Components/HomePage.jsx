import React from 'react';
import { Link } from 'react-router-dom';

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
const HomePage = () => {
  return (
    <div>
      <h1>Select an Audio to Play</h1>
      <ul>
        {Object.keys(audioFiles).map(id => (
          <li key={id}>
            <Link to={`/audio/${id}`}>Play Audio {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;