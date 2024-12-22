/* src/pages/chatPage/components/ChatMessageUser/ChatMessageUser.tsx */
import { Avatar, Textarea } from "@nextui-org/react";
import styles from './ChatMessageUser.module.css';
import { UserIcon } from "../../../../assets/icons/UserIcon";
import { motion } from "framer-motion";

interface ChatMessageUserProps {
  message: string;
}

export default function ChatMessageUser({ message }: ChatMessageUserProps) {
  return (
    <div className={styles.messageContainer}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, scale: 0, x: "50%" }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0, x: "50%" }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >        
        <Textarea
          size="lg"
          minRows={1}
          isReadOnly
          value={message}
          maxRows={1000}
        />
      </motion.div>
      <Avatar icon={<UserIcon />} className={styles.avatar} />
    </div>
  );
}
