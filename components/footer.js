export default function Footer () {
  return(
    <section className="breakout bgcolor-belaire padding-y-xxlarge">
      <div className="columns">
        <div className="column">
          <ul>
            <li><img src="/wp_logo.svg" width="240px" alt="Workpath logo" /></li>
            <li>Copyright &copy; 2020 Workpath</li>
            <li>All rights reserved</li>
          </ul>
        </div>

        <div className="column column--is-flex">
          <div className="column margin-bottom-medium">
            <p className="large">Company</p>
            <ul className="margin-top-small">
              <li>Company</li>
              <li>Platform</li>
              <li>Case Studies</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="column margin-bottom-medium">
            <p className="large">Resources</p>
            <ul className="margin-top-small">
              <li>Help</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="column margin-bottom-medium">
            <p className="large">Follow Us</p>
            <ul className="margin-top-small">
              <li>LinkedIn</li>
              <li>Join the mailing list</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}