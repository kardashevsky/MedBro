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
      <Button size="lg" onPress={goToChat}>
        Start Chat
      </Button>
    </div>
  );
}
