import React from "react";
import styles from "../styles/modules/hero.module.scss";
import Link from "next/link";
import Button from "./button";
import Fade from "react-reveal/Fade";

class Hero extends React.Component {
  render() {
    return (
      <Fade duration={4000}>
        <header className={styles.hero}>
          <div className={styles.heroHeadline}>
            <h1>The only dispatch platform for mobile healthcare services.</h1>
            <div className={styles.actions}>
              <Link href="/contact">
                <a>
                  <Button type="ghost" text="Get Started Free" />
                </a>
              </Link>
            </div>
          </div>
        </header>
      </Fade>
    );
  }
}

export default Hero;
