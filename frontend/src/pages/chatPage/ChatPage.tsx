import { Button, ScrollShadow, Textarea } from "@nextui-org/react";
import styles from './ChatPage.module.css';
import ChatMessageAi from "./components/chatMessageAi/ChatMessageAi";
import ChatMessageUser from "./components/chatMessageUser/ChatMessageUser";
import TypingIndicator from "./components/chatMessageAi/TypingIndicator";

export default function ChatPage() {

  return (
    <div className={styles.pageContainer}>
      <div className={styles.chatContainer}>
        <div className={styles.messagesContainer}>
          <ScrollShadow hideScrollBar className={`w-[1240px] h-[820px] ${styles.scrollContainer}`}>
            <ChatMessageAi message="Здравствуйте! Как я могу помочь Вам сегодня?" />
            <ChatMessageUser message="У меня температура и болит голова." />
            <TypingIndicator />
          </ScrollShadow>
        </div>
        <div className={styles.inputContainer}>
          <Textarea
            size="lg"
            minRows={1}
            placeholder="Enter your message"
            className={styles.input}
          />
          <Button 
            size="lg" 
            color="primary"
            className={styles.sendButton}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
