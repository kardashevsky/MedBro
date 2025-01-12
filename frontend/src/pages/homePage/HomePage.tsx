import styles from './HomePage.module.css';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate('/chat');
  };

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.projectInfo}>
        <h1 className={styles.projectTitle}>MedBro</h1>
        <p className={styles.projectDescription}>
          Добро пожаловать в MedBro — ваш личный помощник в вопросах здоровья!
          Это не просто приложение, а ваш надёжный спутник, словно заботливый брат, который всегда рядом.
          MedBro выслушает, поддержит и предложит точные советы, чтобы вы чувствовали уверенность и спокойствие.
        </p>
        <p className={styles.actionCall}>
          Нажмите на кнопку ниже, чтобы познакомиться с вашим новым заботливым помощником и надёжным союзником в вопросах здоровья!
        </p>
      </div>
      <Button
        size="lg"
        color="secondary"
        variant="shadow"
        onPress={goToChat}
        className={styles.startButton}
      >
        Начать чат
      </Button>
      <div className={styles.developersContainer}>
        <div className={styles.developer}>
          <img
            src="/dimaAvatar.jpg"
            alt="Developer 1"
            className={styles.developerPhoto}
          />
          <p className={styles.developerName}>Дмитрий Кардашевский</p>
          <p className={styles.developerInfo}>
            Дмитрий — Fullstack-разработчик и DevOps-инженер.  
            Он создал удобный и интуитивно понятный интерфейс, разрабатывал Backend, занимался интеграцией RAG системы и обеспечил деплой проекта.  
            Его вклад делает MedBro быстрым, надёжным и комфортным для каждого пользователя.
          </p>
        </div>
        <div className={styles.developer}>
          <img
            src="/grishaAvatar.jpg"
            alt="Developer 2"
            className={styles.developerPhoto}
          />
          <p className={styles.developerName}>Григорий Геращенко</p>
          <p className={styles.developerInfo}>
            Григорий — ведущий архитектор проекта.  
            Он отвечает за разработку RAG системы, создаёт сложные алгоритмы и управляет интеграцией всех компонентов MedBro.  
            Благодаря его знаниям и усилиям проект работает безупречно и стабильно.
          </p>
        </div>
      </div>
    </div>
  );
}
