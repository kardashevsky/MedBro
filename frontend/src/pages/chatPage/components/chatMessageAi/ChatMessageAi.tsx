/* src/pages/chatPage/components/ChatMessageAi/ChatMessageAi.tsx */
import { Avatar, Textarea } from "@nextui-org/react";
import styles from './ChatMessageAi.module.css';

interface ChatMessageAiProps {
  message: string;
}

export default function ChatMessageAi({ message }: ChatMessageAiProps) {

  return (
    <div className={styles.messageContainer}>
      <Avatar src="/aiChatAvatar.jpg" className={styles.avatar} />
        <Textarea
          size="lg"
          minRows={1}
          className={styles.card}
          isReadOnly
          value={message}
          maxRows={1000}
        />
    </div>
  );
}
