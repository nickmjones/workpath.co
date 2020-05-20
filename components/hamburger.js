import React from 'react';
import styles from '../styles/modules/hamburger.module.scss';

class Hamburger extends React.Component {
  render(){
    return(
      <ul className={styles.hamburgerMenu}>
        <li className={styles.hamburgerBar}></li>
        <li className={styles.hamburgerBar}></li>
        <li className={styles.hamburgerBar}></li>
      </ul>
    )
  }
}

export default Hamburger