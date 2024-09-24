import React, { useEffect, useRef, useState } from 'react';
import './Audiplayer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import music from ".//images/images-removebg-preview.png"

const AudioPlayer = ({audioSrc,imageSrc}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime,setCurrentTime] =useState(0);
    const [duration,setDuration]=useState(0);
    
    const audioRef= useRef(null);
  
  
    const handleSeeek =(e) => {
        audioRef.current.currentTime =e.target.value;
        setCurrentTime (e.target.value)
    }
    const handleTimeUpdate = () => {
        setCurrentTime (audioRef.current.currentTime);
       };
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
       };
     const handlePlay = () =>{
        audioRef.current.play();
        setIsPlaying(true);
     };
     const handlePause = () =>{
        audioRef.current.pause();
        setIsPlaying(false);
     };
  
    const handlePlayPause = () => {
      if (isPlaying){
        handlePause()
      }else{
        handlePlay()  
        }
      }; 

    function formatDuration(durationSeconds) {
      const minutes = Math.floor(durationSeconds / 60);
      const seconds = Math.floor(durationSeconds % 60);
      const formattedSeconds = seconds.toString().padStart(2, "0");
      return `${minutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
}, []);
    return (
      <div className="App">
        <header className="App-header">
        <div className="audio-player">
        {imageSrc && <img src={imageSrc} alt="Audio cover" className="audio-image" />}      <input
      type="range"
      min="0"
      max={duration}
      value={currentTime}
      onChange={handleSeeek}
      />
  
  
      <audio ref={audioRef} src={audioSrc} />
  
      <div className="track-duration">
        <p>{formatDuration(currentTime)}</p>
        <p>{formatDuration(duration)}</p>
      </div>
  

        <button onClick={handlePlayPause}>
        <i className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`}></i>

    
        </button>
        </div>
        </header>
      </div>

    )
}

export default AudioPlayer;