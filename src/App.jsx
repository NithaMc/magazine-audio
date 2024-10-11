import './Components/Audiplayer.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ScannedAudioPage from './Components/ScannedAudioPage.jsx';

const PlayButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/audio/1');
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      className={`play-button ${isAnimating ? 'animate' : ''}`}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '30px',
        fontSize: '24px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        outline: 'none',
        transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        boxShadow: '0 0 20px rgba(76, 175, 80, 0.5)',
      }}    >
      ▶
    </button>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/audio/:id" element={<ScannedAudioPage />} />
        <Route path="/" element={
          <div style={{ textAlign: 'center', color: 'white', height: '100vh', position: 'relative' }}>
            <PlayButton />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;