import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <motion.h1
        className={styles.title}
        onClick={handleLogoClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
      >
        MedBro
      </motion.h1>
    </header>
  );
}
