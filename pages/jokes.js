import React, { useState, useEffect } from 'react';
import styles from '../styles/Jokes.module.css';
import Link from 'next/link';

const Joke = () => {
  const [joke, setJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getJoke = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      });
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      setJoke("Failed to fetch joke. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className={styles.container}>
      <Link href="/">
        <button className={styles.homeButton}>Return to Homepage</button>
      </Link>
      <div className={styles.codeContainer}>
        <code className={styles.code}><strong>Joke of the Day</strong></code>
      </div>

      <div className={styles.jokeContainer}>
        <p className={styles.jokeText}>{isLoading ? "Loading..." : joke}</p>
        <button
          className={styles.jokeButton}
          onClick={getJoke}
        >
          Get another joke
        </button>
      </div>
    </div>
  );
};

export default Joke;
