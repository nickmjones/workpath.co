import React, { Component } from "react"
import styles from '../styles/modules/navigation.module.scss'
import Hamburger from '../components/hamburger'
import Link from 'next/link'

export default class Navigation extends Component {

  constructor(props){
    super(props);
    this.state = {
      isMenuOpen: false,
      isScrolled: false
    }
  }

  toggleMenuClick = () => {
    this.setState(state => ({
      isMenuOpen: !this.state.isMenuOpen
    }))
  }

  handleScroll = () => {
    if (window.pageYOffset > 64) {
      this.setState({ menuAtTop: false });
    } else {
      this.setState({ menuAtTop: true });
    }
  }
  

  render() {
    return (
      <>
      
        <div className={this.state.isMenuOpen ? `${styles.overlayOn}` : `${styles.overlayOff}`}>
            <span className={styles.close} onClick={this.toggleMenuClick}>Close &times;</span>
            <ul>
              <li>Company</li>
              <li>Platform</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <hr className="rule rule__simple" />
              <li>Log In</li>
              <li>Get a Demo</li>
            </ul>
        </div>

        <div className={styles.banner}>
          Workpath is now free for small teams &rarr;
        </div>

        <div className={styles.navigationWrapper}>
          <ul className={styles.navigation} role="navigation">
            <li className={styles.navigationLogo}><img src="./images/wp_logo.svg" alt="Workpath logo" /></li>
            <li className={styles.autohide}>Company</li>
            <li className={styles.autohide}>Platform</li>
            <li className={styles.autohide}>Case Studies</li>
            <li className={styles.autohide}>Blog</li>
            <li className={styles.divider}></li>
            <li className={styles.autohide}>Log In</li>
            <li className={`${styles.special} ${styles.autohide}`}><Link href="#"><a>Get a Demo</a></Link></li>
            <li onClick={this.toggleMenuClick} className={styles.hamburger}>
              <Hamburger />
            </li>
          </ul>
        </div>
        
      </>
    );
  }
}