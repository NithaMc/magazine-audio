import React from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from './AudioPlayer.jsx';


export const audioFiles = {
  1: "/audios/1_lv_0_20240904060756_320kbps (1).mp3", // Previously 1
  8: "/audios/AUD-20240923-WA0005.mp3", // Previously 8
  3: "/audios/AUD-20240923-WA0014.mp3", // Previously 3
  9: "/audios/AUD-20240923-WA0004.mp3", // Previously 9
  6: "/audios/AUD-20240923-WA0007.mp3", // Previously 6
  14: "/audios/AUD-20240924-WA0037.mp3", // Previously 14
  15: "/audios/AUD-20240922-WA0094.mp3", // Previously 15
  13: "/audios/AUD-20240923-WA0010.mp3", // Previously 5
  19: "/audios/AUD-20240923-WA0012.mp3", // Previously 19
  7: "/audios/AUD-20240923-WA0006.mp3", // Previously 7
  10: "/audios/AUD-20240923-WA0003.mp3", // Previously 10
  18: "/audios/AUD-20240923-WA0011.mp3", // Previously 18
  11: "/audios/AUD-20240923-WA0008.mp3.mp3", // Previously 11
  5: "/audios/AUD-20240924-WA0038.mp3", // Previously 13
  2: "/audios/STREEKAL.mp3", // Previously 2
  12: "/audios/AUD-20240923WA.mp3.mp3", // Previously 12
  21: "/audios/WhatsApp Audio 2024-10-05 at 7.29.29 PM - Copy.mp3", // Previously 21
  4: "/audios/AUD-20240923-WA0013.mp3", // Previously 4
  16: "/audios/AUD-20240923-WA0001.mp3", // Previously 16
  17: "/audios/AUD-20240923-WA0002.mp3", // Previously 17
  20: "/audios/AUD-20241006-WA0012.mp3", // Previously 20
};

const imageFiles = {
  1: "/images/mgzn indira 1.jpg", // Corresponds to audio 1
  8: "/images/സ്തുതി പാടകർ.jpg", // Corresponds to audio 8
  3: "/images/Unaggatha niyal 1.jpg", // Corresponds to audio 3
  9: "/images/mgzn 5.jpg", // Corresponds to audio 9
  6: "/images/adhyapakanano1.jpg", // Corresponds to audio 6
  14: "/images/WOMEN ARE FLOWERS_-1.jpg", // Corresponds to audio 14
  15: "/images/വിരലടയാളത്തിന്റെ നാലു നിലവിളികൾ.jpg", // Corresponds to audio 15
  5: "/images/warden.jpg", // Corresponds to audio 5
  19: "/images/women in conflict 1.jpg", // Corresponds to audio 19
  7: "/images/അംഗന യാനം.jpg", // Corresponds to audio 7
  10: "/images/ഉടൽ2.jpg", // Corresponds to audio 10
  18: "/images/white feminism 4.jpg", // Corresponds to audio 18
  11: "/images/Gender roles.jpg", // Corresponds to audio 11
  13: "/images/ഒരു സ്ത്രീ.jpg", // Corresponds to audio 13
  2: "/images/dalith 2.jpg", // Corresponds to audio 2
  12: "/images/Eka 3.jpg", // Corresponds to audio 12
  21: "/images/പെണ്ണ്.jpg", // Corresponds to audio 21
  4: "/images/kathapathra nirupanam4.jpg", // Corresponds to audio 4
  16: "/images/mayalokam 2.jpg", // Corresponds to audio 16
  17: "/images/HOME SWEET HOME.jpg", // Corresponds to audio 17
  20: "/images/hadiya interview.jpg", // Corresponds to audio 20
};
  const ScannedAudioPage = () => {
    const { id } = useParams();
    const audioSrc = audioFiles[id]; 
    const imageSrc = imageFiles[id];

    if (!audioSrc) {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}>
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
          }}>
            <h2 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>Oops! Invalid Link</h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#4b5563',
              marginBottom: '1.5rem'
            }}>The audio you're looking for doesn't seem to exist.</p>
            <a href="/" style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'background-color 0.3s'
            }} onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'} onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}>
              Go Back Home
            </a>
          </div>
        </div>
      );
    }

    return (
      <div>    
        <AudioPlayer initialAudioId={parseInt(id)} imageSrc={imageSrc}/>
      </div>
    );
  };

  export default ScannedAudioPage;