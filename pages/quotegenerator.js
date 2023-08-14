import React, { useState, useEffect } from 'react';
import styles from '../styles/QuoteGenerator.module.css';
import Link from 'next/link';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');

  // Function to fetch a random quote from an API
  const fetchQuote = async () => {
    try {
      const timestamp = Date.now(); // Add a timestamp as a query parameter
      const response = await fetch(`https://type.fit/api/quotes?timestamp=${timestamp}`);
      const data = await response.json();
      console.log('API Response:', data);
      if (data && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex].text);
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  // Fetch a random quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  const generateNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className={styles.container}>
      <Link href="/">
        <button className={styles.homeButton}>Return to Homepage</button>
      </Link>
      <h1 className={styles.title}>Welcome to Quote Generator!</h1>

      <div className={styles.quoteContainer}>
        <h2 className={styles.quoteHeading}>Random Quote:</h2>
        <blockquote className={styles.quoteText}>
          {quote}
        </blockquote>
        <button className={styles.generateButton} onClick={generateNewQuote}>Generate New Quote</button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
