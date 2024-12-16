import React from 'react';
import styles from './TypingIndicator.module.css';
import { Avatar } from "@nextui-org/react";
import stylesChat from './ChatMessageAi.module.css';


export default function TypingIndicator() {
  const [theme] = React.useState<'light' | 'dark'>(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark' ? 'dark' : 'light';
  });

  return (
    <div className={stylesChat.messageContainer}>
      <Avatar src="/aiChatAvatar.jpg" className={stylesChat.avatar} />
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
