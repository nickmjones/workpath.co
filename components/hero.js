import React from 'react';
import styles from "../styles/modules/hero.module.scss";

class Hero extends React.Component {
  render(){
    return (
      <header className={styles.hero}>
        <div className={styles.heroHeadline}>
          <h1>The only dispatch platform for mobile healthcare services.</h1>
        </div>
      </header>
    );
  }
}

export default Hero