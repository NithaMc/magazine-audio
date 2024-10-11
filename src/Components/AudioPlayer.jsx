import React, { useEffect, useRef, useState } from "react";
import "./Audiplayer.css";
import { audioFiles } from "./ScannedAudioPage";
import "bootstrap-icons/font/bootstrap-icons.css";

const AudioPlayer = ({ initialAudioId, imageSrc }) => {

    const audioSrc = audioFiles[initialAudioId];

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    const handleSeek = (e) => {
      audioRef.current.currentTime = e.target.value;
      setCurrentTime(e.target.value);
    };
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };
    const handlePlay = () => {
      audioRef.current.play();
      setIsPlaying(true);
    };
    const handlePause = () => {
      audioRef.current.pause();
      setIsPlaying(false);
    };

    const handlePlayPause = () => {
      if (isPlaying) {
        handlePause();
      } else {
        handlePlay();
      }
    };

    const handlePrev = () => {
      const newAudioId = initialAudioId - 1;
      if (newAudioId <= 0) {
        return;
      }
      window.location.href = `/audio/${newAudioId}`
    };

    const handleNext = () => {
      const newAudioId = initialAudioId + 1;
      if (newAudioId >= audioFiles.length) {
        return;
      }
      window.location.href = `/audio/${newAudioId}`
    };

    function formatDuration(durationSeconds) {
      const minutes = Math.floor(durationSeconds / 60);
      const seconds = Math.floor(durationSeconds % 60);
      const formattedSeconds = seconds.toString().padStart(2, "0");
      return `${minutes}:${formattedSeconds}`;
    }

    useEffect(() => {
      const audioElement = audioRef.current;
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="audio-player">
          {imageSrc && <img src={imageSrc} alt="Audio cover" className="audio-image" />}

          <input type="range" min="0" max={duration} value={currentTime} onChange={handleSeek} />

          <audio ref={audioRef} src={audioSrc} />

          <div className="track-duration">
            <p>{formatDuration(currentTime)}</p>
            <p>{formatDuration(duration)}</p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className="nav-button prev-button" onClick={handlePrev} disabled={initialAudioId <= 1}>
              <i className="bi bi-skip-backward-fill"></i>
            </button>
            <button className="nav-button play-pause-button" onClick={handlePlayPause}>
              <i className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`}></i>
            </button>
            <button className="nav-button next-button" onClick={handleNext} disabled={initialAudioId >= 21}>
              <i className="bi bi-skip-forward-fill"></i>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default AudioPlayer;
