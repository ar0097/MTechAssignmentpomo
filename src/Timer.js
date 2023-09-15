import React, { useState, useEffect } from "react";
import "./Timer.css";
import { auth } from './firebase';
import { signOut } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom';
function Timer() {
  const [timer, setTimer] = useState(1500); 
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Successfully logged out.');
        navigate('/')
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  useEffect(() => {
    let interval;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setTimer(300); 
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimer(1500);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer-container">
      <button className="timer-button" onClick={handleLogout}>Logout</button>
      <div className={`timer ${isActive ? "active" : ""}`}>
        <h1>Pomodoro Timer</h1>
        <p>{formatTime(timer)}</p>
        <div className="timer-controls">
          <button onClick={handleStart} disabled={isActive}>
            Start
          </button>
          <button onClick={handlePause} disabled={!isActive}>
            Pause
          </button>
          <button onClick={handleReset} disabled={isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
