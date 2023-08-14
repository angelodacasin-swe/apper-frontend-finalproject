import React, { useState, useEffect } from 'react';
import styles from '../styles/PomodoroTimer.module.css';
import Link from 'next/link';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25); // Set to 25 minutes
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [shakeTimer, setShakeTimer] = useState(false);
  let beepAudio; // Reference to the audio element

  useEffect(() => {
    fetchBackgroundImage();

    let interval = null;

    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            beepAudio.play(); // Play sound when timer reaches 00:00
            setIsActive(false); // Pause the timer
            setShakeTimer(true); // Shake effect
          } else {
            setMinutes(prevMinutes => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(prevSeconds => prevSeconds - 1);
        }
      }, 1000);
    } else if (isActive && minutes === 0 && seconds === 0) {
      setIsActive(false);
      setMinutes(25); // Reset to 25 minutes
      setSeconds(0);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
      setShakeTimer(false); // Reset shake effect when interval is cleared
    };
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25); // Reset to 25 minutes
    setSeconds(0);
  };

  const fetchBackgroundImage = () => {
    let today = new Date();
    let hour = today.getHours();
    let bgImage = '';

    if (hour < 12) {
      bgImage = 'https://wallpaperaccess.com/full/378016.jpg';
    } else if (hour < 18) {
      bgImage = 'https://wallpaperose.com/wp-content/uploads/2013/04/Sunrise-In-The-Park.jpg';
    } else {
      bgImage = 'https://wallpaperaccess.com/full/682419.jpg';
    }

    setBackgroundImage(bgImage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <button className={styles.homeButton}>Return to Homepage</button>
        </Link>
      </div>
      <div className={styles.timer}>
        <h1 id="time" className={`${styles.time} ${shakeTimer ? styles.shake : ''}`}>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </h1>
        <div className={styles.title}>
          <p><strong>Hey there, I hope you are having a good day!</strong></p>
          <p>Starting things is always the hardest part, make sure to commit your full focus for 25 minutes once you click start!</p>
        </div>
        <div className={styles.controls}>
          <button className={styles.startButton} onClick={toggleTimer}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button className={styles.resetButton} onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
      <div className={styles.backgroundImage} style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className={styles.quoteContainer}>
        <p className={styles.dailyQuote}>"<strong>Action is the foundational key to all success."</strong> <i> -- Picasso</i></p>
      </div>
      <audio ref={audio => (beepAudio = audio)} src="/beepsoundeffect.mp3" />
    </div>
  );
};

export default PomodoroTimer;
