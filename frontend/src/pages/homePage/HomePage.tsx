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
          MedBro — это инновационный проект, который становится вашим надёжным помощником в вопросах здоровья. Это как заботливый брат, который всегда на связи, готов выслушать и подсказать, что делать, если что-то беспокоит. 
          Нажми на кнопку ниже, чтобы познакомиться со своим новым заботливым братом!
        </p>
      </div>
      <Button
        size="lg"
        color="secondary"
        variant="shadow"
        onPress={goToChat}
        className={styles.startButton}
      >
        Start Chat
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
            Дмитрий — эксперт в UX/UI-дизайне и фронтенд-разработке. Он делает интерфейс MedBro понятным и привлекательным для каждого пользователя.
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
            Григорий — ведущий разработчик RAG системы проекта. Он отвечает за архитектуру и интеграцию MedBro, обеспечивая стабильную работу и удобство для пользователей.
          </p>
        </div>
      </div>
    </div>
  );
}
