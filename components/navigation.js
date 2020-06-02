import React, { Component } from "react";
import styles from "../styles/modules/navigation.module.scss";
import Hamburger from "./hamburger";
import Link from "next/link";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isAtPageTop: true
    };
  }

  toggleMenuClick = () => {
    this.setState(({
      isMenuOpen: !this.state.isMenuOpen,
    }));
  };

  handleScroll = () => {
    if (window.pageYOffset < 64) {
      this.setState({ isAtPageTop: true });
    } else {
      this.setState({ isAtPageTop: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <>
        <div
          className={
            this.state.isMenuOpen
              ? `${styles.overlayOn}`
              : `${styles.overlayOff}`
          }
        >
          <ul>
            <li>
              <Link href="/company">
                <a>Company</a>
              </Link>
            </li>
            <li>
              <Link href="/platform">
                <a>Platform</a>
              </Link>
            </li>
            <li>
              <Link href="/casestudies">
                <a>Case Studies</a>
              </Link>
            </li>
            <li>
              <a href="https://blog.workpath.co">Blog</a>
            </li>
            <li>
              <a href="https://app.workpath.co">Log In</a>
            </li>
            <li>
              <Link href="/contact">
                <a>Get a Demo</a>
              </Link>
            </li>
          </ul>

        </div>

        <div className={styles.banner}>
          Workpath is now free for small teams &rarr;
        </div>

        <ul className={ this.state.isAtPageTop ? `${styles.navigation}` : `${styles.navigationShadow}` } role="navigation">
          <li className={styles.navigationLogo}>
            <Link href="/">
              <a><img src="./images/wp_logo.svg" alt="Workpath logo" /></a>
            </Link>
          </li>
          <li className={styles.autohide}>
            <Link href="/company">
              <a>Company</a>
            </Link>
          </li>
          <li className={styles.autohide}>
            <Link href="/platform">
              <a>Platform</a>
            </Link>
          </li>
          <li className={styles.autohide}>
            <Link href="/casestudies">
              <a>Case Studies</a>
            </Link>
          </li>
          <li className={styles.autohide}>
            <a href="https://blog.workpath.co">Blog</a>
          </li>
          <li className={`${styles.divider} ${styles.autohide}`}></li>
          <li className={styles.autohide}>
            <a href="https://app.workpath.co">Log In</a>
          </li>
          <li className={`${styles.special} ${styles.autohide}`}>
            <Link href="/contact">
              <a>Get a Demo</a>
            </Link>
          </li>
          <li onClick={this.toggleMenuClick} className={styles.hamburger}>
            <Hamburger />
          </li>
        </ul>
      </>
    );
  }
}
