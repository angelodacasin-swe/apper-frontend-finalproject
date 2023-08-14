import React from 'react';
import useCounter from '../hooks/useCounter';
import styles from '../styles/Counter.module.css';
import Link from 'next/link';

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className={styles.container}>
      <Link href="/">
        <button className={styles.homeButton}>Return to Homepage</button>
      </Link>
      <div className={styles.codeContainer}>
        <code className={styles.code}><strong>Welcome to Counter!</strong></code>
      </div>

      <div className={styles.counterContainer}>
        <h2 className={styles.counterText}>Count {count}</h2>
        <button className={styles.button} onClick={increment}>Increment</button>
        <button className={styles.button} onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
