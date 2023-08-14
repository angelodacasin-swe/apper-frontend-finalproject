import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styles from '../styles/SongPlayer.module.css';
import Link from 'next/link';

const SongPlayer = () => {
  const [currentVideoId, setCurrentVideoId] = useState(null);

  const videos = [
    {
      title: 'Top 1: Lola Amour - Raining in Manila (Official Lyric Video)',
      videoId: 'dglBgJSMr-E', 
    },

    {
      title: "Top 2: Ako'Ng Bahala Sa'Yo (feat. Raf Bernardino)",
      videoId: '8_3kWEzXc3A',
    },

    {
      title: "Top 3: Oasis - Champagne Supernova (Official Video)",
      videoId: 'tI-5uv4wryI',
    },

  ];

  const playVideo = (videoId) => {
    setCurrentVideoId(videoId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <button className={styles.homeButton}>Return to Homepage</button>
        </Link>
      </div>
      <h1>Favorite Songs</h1>
      <p className={styles.paragraph}>Here are the top 3 songs that I have been listening to lately.</p>
      <p className={styles.paragraph}>I hope you can find time to listen to them and enjoy them as much as I do!</p>
      <hr className={styles.thickerHr}></hr>
      <div className={styles.videoList}>
        {videos.map((video, index) => (
          <div key={index} className={styles.video}>
            <h2>{video.title}</h2>
            <button
              className={styles.playButton}
              onClick={() => playVideo(video.videoId)}
            >
              Play
            </button>
            {currentVideoId === video.videoId && (
              <YouTube videoId={video.videoId} opts={{ width: '640', height: '360' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongPlayer;
