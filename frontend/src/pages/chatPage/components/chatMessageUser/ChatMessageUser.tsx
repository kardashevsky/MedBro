/* src/pages/chatPage/components/ChatMessageUser/ChatMessageUser.tsx */
import { Avatar, Textarea } from "@nextui-org/react";
import styles from './ChatMessageUser.module.css';
import { UserIcon } from "../../../../assets/icons/UserIcon";

interface ChatMessageUserProps {
  message: string;
}

export default function ChatMessageUser({ message }: ChatMessageUserProps) {
  return (
    <div className={styles.messageContainer}>
      <Textarea
        size="lg"
        minRows={1}
        className={styles.card}
        isReadOnly
        value={message}
        maxRows={1000}
      />
      <Avatar icon={<UserIcon />} className={styles.avatar} />
    </div>
  );
}
