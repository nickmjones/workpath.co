import Link from "next/link";
import styles from './navigation.module.scss';

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__logo}>
        <img src="/images/wp_logo.svg" alt="Workpath Logo" />
      </div>
      <ul className={styles.navigation__links}>
        <li>About Us</li>
        <li>How It Works</li>
        <li>Case Studies</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}
