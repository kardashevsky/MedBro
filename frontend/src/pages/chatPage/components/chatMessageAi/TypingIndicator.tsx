import React from 'react';
import styles from './TypingIndicator.module.css';
import stylesChat from './ChatMessageAi.module.css';
import Lottie from 'lottie-react';
import animationData from "../../../../assets/animtaions/ai.json";


export default function TypingIndicator() {
  const [theme] = React.useState<'light' | 'dark'>(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark' ? 'dark' : 'light';
  });

  return (
    <div className={stylesChat.messageContainer}>
      <div className={styles.animationContainer}>
        <Lottie animationData={animationData} loop autoplay />
      </div>
      <div className={stylesChat.card}>
        <div className={`${styles.typingIndicator} ${theme === 'dark' ? styles.dark : styles.light}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
