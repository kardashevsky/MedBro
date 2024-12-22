import { useState } from "react";
import { Button, ScrollShadow, Textarea } from "@nextui-org/react";
import styles from './ChatPage.module.css';
import ChatMessageAi from "./components/chatMessageAi/ChatMessageAi";
import ChatMessageUser from "./components/chatMessageUser/ChatMessageUser";
import TypingIndicator from "./components/chatMessageAi/TypingIndicator";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { type: "ai", message: "Привет! Как я могу помочь тебе сегодня?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    setIsSending(true);

    setMessages([...messages, { type: "user", message: inputValue }]);
    setInputValue("");

    setIsTyping(true);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", message: "Дай-ка я проверю, как тебе помочь." },
      ]);
      setIsTyping(false);
      setIsSending(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.chatContainer}>
        <div className={styles.messagesContainer}>
          <ScrollShadow hideScrollBar className={`w-[1240px] h-[820px] ${styles.scrollContainer}`}>
            {messages.map((msg, index) =>
              msg.type === "ai" ? (
                <ChatMessageAi key={index} message={msg.message} />
              ) : (
                <ChatMessageUser key={index} message={msg.message} />
              )
            )}
            {isTyping && <TypingIndicator />}
          </ScrollShadow>
        </div>
        <div className={styles.inputContainer}>
          <Textarea
            size="lg"
            minRows={1}
            placeholder="Enter your message"
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button 
            size="lg" 
            color="primary"
            className={styles.sendButton}
            onPress={handleSendMessage}
            isDisabled={isSending}
            isLoading={isSending}
          >
            {isSending ? "" : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
}
