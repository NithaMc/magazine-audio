import './Components/Audiplayer.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScannedAudioPage from './Components/ScannedAudioPage.jsx';
import HomePage from './Components/HomePage.jsx';


const  App =()=> {
return(
    <Router>
      <Routes>
        <Route path="/audio/:id" element={<ScannedAudioPage />} />
        <Route path="/" element={
          <div style={{ textAlign:'center', color: 'white', height: '100vh' }}>
            <h1 className='text'>No Audio Selected</h1>
          </div>
        } />
        <Route path="/home" element={<HomePage />} />
    </Routes>
  </Router>
)
}

export default App;