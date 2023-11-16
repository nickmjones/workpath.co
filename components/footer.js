import Link from "next/link";

export default function Footer() {
  return (
    <footer className="breakout bgcolor-belaire padding-y-xxlarge">
      <div className="columns">

        <div className="column">
          <ul>
            <li>
              <img src="/wp_logo.svg" width="240px" alt="Workpath logo" />
            </li>
            <li>Copyright &copy; 2020 Workpath</li>
            <li>All rights reserved</li>
          </ul>
        </div>

        <div className="column column--is-flex">

          <div className="column">
            <p className="large">Company</p>
            <ul className="margin-top-small">
              <li><Link legacyBehavior href="/company"><a>Company</a></Link></li>
              <li><Link legacyBehavior href="/platform"><a>Platform</a></Link></li>
              <li><Link legacyBehavior href="/casestudies"><a>Case Studies</a></Link></li>
              <li><a href="https://blog.workpath.co">Blog</a></li>
            </ul>
          </div>

          <div className="column">
            <p className="large">Resources</p>
            <ul className="margin-top-small">
              <li><Link legacyBehavior href="/careers"><a>Careers</a></Link></li>
              <li><a href="help.wrokpath.co">Help Center</a></li>
              <li><Link legacyBehavior href="/privacy"><a>Privacy</a></Link></li>
              <li><Link legacyBehavior href="/tos"><a>Terms of Service</a></Link></li>
            </ul>
          </div>

          <div className="column">
            <p className="large">Follow Us</p>
            <ul className="margin-top-small">
              <li>
                <a href="https://www.linkedin.com/company/workpathco/">
                  LinkedIn
                </a>
              </li>
              <li>Join the mailing list</li>
              <li>For media inquiries: press@workpath.co</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
