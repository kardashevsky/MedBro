import { useState } from "react";
import { Button, ScrollShadow, Textarea } from "@nextui-org/react";
import styles from './ChatPage.module.css';
import ChatMessageAi from "./components/chatMessageAi/ChatMessageAi";
import ChatMessageUser from "./components/chatMessageUser/ChatMessageUser";
import TypingIndicator from "./components/chatMessageAi/TypingIndicator";
import { sendMessageToServer } from "../../services/api";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { type: "ai", message: "Привет! Как я могу помочь тебе сегодня?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isSending) return;
  
    setIsSending(true);
    setMessages((prevMessages) => [...prevMessages, { type: "user", message: inputValue }]);
  
    const userMessage = inputValue.trim();
    setInputValue("");
  
    setIsTyping(true);
    
    try {
      const serverResponse = await sendMessageToServer(userMessage);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", message: serverResponse },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "ai", message: "Ошибка при отправке сообщения. Попробуйте снова." },
      ]);
    } finally {
      setIsTyping(false);
      setIsSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        return;
      }
      e.preventDefault();
      if (!isSending) {
        handleSendMessage();
      }
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
