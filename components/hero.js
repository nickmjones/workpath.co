import React from 'react';
import styles from "../styles/modules/hero.module.scss";
import Button from '../components/button';

class Hero extends React.Component {
  render(){
    return (
      <header className={styles.hero}>
        <div className={styles.heroHeadline}>
          <h1>The only dispatch platform for mobile healthcare services.</h1>
          <div className={styles.actions}>
            <Button type="default" text="Get a Demo" />
            <Button type="ghost" text="Get Started Free" />
          </div>
        </div>
      </header>
    );
  }
}

export default Hero