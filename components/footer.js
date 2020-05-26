import styles from '../styles/modules/footer.module.scss'

export default function Footer () {
  return(
    <div className={styles.wrapper}>
      <div className={styles.columns}>

        <div className={styles.column}>
          <ul>
            <li><img src="./images/wp_logo.svg"/></li>
            <li>Copyright &copy; 2020 Workpath</li>
            <li>All rights reserved</li>
          </ul>
        </div>

        <div className={styles.column}>
          <div className={styles.subColumn}>
            <h5>Company</h5>
            <ul>
              <li>Company</li>
              <li>Platform</li>
              <li>Case Studies</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className={styles.subColumn}>
            <h5>Resources</h5>
            <ul>
              <li>Help</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className={styles.subColumn}>
            <h5>Follow Us</h5>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}