// pages/index.js (or Home.js)
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  const router = useRouter();

  // Routers
  const goToAboutPage = () => {
    router.push('/about');
  };

  const goToMyCounter = () => {
    router.push('/counter');
  };

  const goToJokes = () => {
    router.push('/jokes');
  };

  const goToQuoteGenerator = () => {
    router.push('/quotegenerator');
  };

  const goToMyPomodoroTimer = () => {
    router.push('/pomodorotimer')
  }

  const goToSongPlayer = () => {
    router.push('/songplayer');
  };

  const goToMyStore = () => {
    router.push('/mystore');
  };


  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
          <code className={styles.code}><strong>Welcome to My Portfolio Website!</strong></code>
        </div>
        <button className={styles.button} onClick={goToAboutPage}>
          About Me
        </button>
        <button className={styles.button} onClick={goToMyCounter}>
          Counter
        </button>
        <button className={styles.button} onClick={goToJokes}>
          Joke of the Day
        </button>
        <button className={styles.button} onClick={goToQuoteGenerator}>
          Quote of the Day
        </button>
        <button className={styles.button} onClick={goToMyPomodoroTimer}>
          My Pomodoro Timer
        </button>

        <button className={styles.button} onClick={goToSongPlayer}>
          Song Player
        </button>

        <button className={styles.button} onClick={goToMyStore}>
          My Store
        </button>
      </div>
    </div>
  );
};


export default Home;