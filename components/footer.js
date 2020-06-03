import styles from "../styles/modules/footer.module.scss";

export default function Footer () {
  return(
    <section class="breakout bgcolor-belaire padding-y-xlarge">
      <div className="columns">
        <div className="column">
          <ul>
            <li><img src="./images/wp_logo.svg"/></li>
            <li>Copyright &copy; 2020 Workpath</li>
            <li>All rights reserved</li>
          </ul>
        </div>

        <div className="column column--is-flex">
          <div className="column">
            <p className="large">Company</p>
            <ul>
              <li>Company</li>
              <li>Platform</li>
              <li>Case Studies</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="column">
            <p className="large">Resources</p>
            <ul>
              <li>Help</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="column">
            <p className="large">Follow Us</p>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}