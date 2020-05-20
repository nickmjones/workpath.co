import React, { Component } from "react"
import styles from '../styles/modules/navigation.module.scss'
import Hamburger from '../components/hamburger'
import Link from 'next/link'

export default class Navigation extends Component {
  render() {
    return (
      <ul className={styles.navigation} role="navigation">
        <li className={styles.navigationLogo}><img src="./images/wp_logo.svg" alt="Workpath logo" /></li>
        <li className={styles.autohide}>Company</li>
        <li className={styles.autohide}>Platform</li>
        <li className={styles.autohide}>Case Studies</li>
        <li className={styles.autohide}>Blog</li>
        <li className={styles.divider}></li>
        <li>Log In</li>
        <li className={styles.special}><a href="#">Get a Demo</a></li>
        <li className={styles.hamburger}>
          <Hamburger />
        </li>
      </ul>
    );
  }
}