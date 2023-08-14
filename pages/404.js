import React from 'react';
import styles from '../styles/CustomErrorPage.module.css';

const CustomErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <div className={styles.imageContainer}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/970/338/original/building-under-construction-site-free-vector.jpg"
            alt="underconstruction-image"
            className={styles.cuteImage}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomErrorPage;
