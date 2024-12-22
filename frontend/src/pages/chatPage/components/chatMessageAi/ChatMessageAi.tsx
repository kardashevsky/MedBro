/* src/pages/chatPage/components/ChatMessageAi/ChatMessageAi.tsx */
import { Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import styles from './ChatMessageAi.module.css';
import animationData from "../../../../assets/animtaions/ai.json";

interface ChatMessageAiProps {
  message: string;
}

export default function ChatMessageAi({ message }: ChatMessageAiProps) {
  return (
    <div className={styles.messageContainer}>
      <div className={styles.animationContainer}>
        <Lottie animationData={animationData} loop={false} autoplay />
      </div>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, scale: 0, x: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0, x: "-50%" }}
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
    </div>
  );
}
