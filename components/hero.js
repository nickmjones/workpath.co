import React from "react";
import styles from "../styles/modules/hero.module.scss";
import Link from "next/link";
import Button from "./button";

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.hero}>
        <div className={styles.heroHeadline}>
          <h1 className="display">The only dispatch platform for mobile healthcare services.</h1>
          <div className={styles.actions}>
            <Link href="/contact">
              <a>
                <Button type="ghost" text="Get Started Free" />
              </a>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Hero;
