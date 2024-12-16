import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import styles from "./HeaderNavBar.module.css";

export default function HeaderNavBar() {
  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarBrand>
        <Link to="/" className={styles.logo}>
          MedBro
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/chat" className={styles.navLink}>
            Chat
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} to="/login" color="primary" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
