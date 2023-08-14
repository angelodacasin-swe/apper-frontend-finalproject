// pages/about.js
import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <code className={styles.code}><strong>About Me</strong></code>
      </div>
      <div className={styles.content}>
        <p>
          Hi there! Again, welcome to my portfolio website! I'm currently employed at GCash as a Cadet Engineer under the Software Engineering Track. I focused on Mathematics and Statistics for my undergraduate and post-graduate degrees, so I'm still learning everything about Java, HTML, CSS, and JavaScript – from syntax to logic and all its intricacies. I REALLY LOVE WHAT I AM DOING, but I know I still have a long way to go in terms of growth. I know it will be challenging, but I really look forward to and hope that I will do well in this career.
        </p>
        <a href="https://www.linkedin.com/in/abdacasin/" target="_blank" rel="noopener noreferrer" className={styles.linkedinLink}>
          <FaLinkedin className={styles.linkedinIcon} /> Connect with me on LinkedIn
        </a>
      </div>
      <div className={styles.navbar}>
        <Link href="/">
          <button className={styles.homeButton}>Return to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
