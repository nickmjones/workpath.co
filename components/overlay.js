import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const times = <FontAwesomeIcon icon={faTimes} size="xs" />;
const ellipsis = <FontAwesomeIcon icon={faEllipsisV} size="lg" />;
const linkedin = <FontAwesomeIcon icon={faLinkedin} size="xs" />;
const twitter = <FontAwesomeIcon icon={faTwitter} size="xs" />;

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayVisible: false,
    };
  }

  setOverlayVisibility = () => {
    this.setState({
      overlayVisible: !this.state.overlayVisible,
    });
  };

  render() {
    return (
      <>
        <div className="menutrigger" onClick={this.setOverlayVisibility}>
          {ellipsis}
        </div>
        <div
          className={
            this.state.overlayVisible
              ? "overlay overlay--visible"
              : "overlay"
          }
        >
          <ul className="overlay__links">
            <li onClick={this.setOverlayVisibility}>
              <Link href="/platform">
                <a>Platform</a>
              </Link>
            </li>
            <li onClick={this.setOverlayVisibility}>
              <Link href="/casestudies">
                <a>Case Studies</a>
              </Link>
            </li>
            <li onClick={this.setOverlayVisibility}>
              <Link href="/company">
                <a>Company</a>
              </Link>
            </li>
            <li onClick={this.setOverlayVisibility}>Blog</li>
            <li onClick={this.setOverlayVisibility}>Log In</li>
            <li onClick={this.setOverlayVisibility}>
              <Link href="/demo">
                <a>Get a demo</a>
              </Link>
            </li>
          </ul>

          <ul className="overlay__actions">
            <li className="spaced" onClick={this.setOverlayVisibility}>
              {times}
            </li>
            <li>{linkedin}</li>
            <li>{twitter}</li>
          </ul>

          <div className="overlay__legal">Copyright &copy; 2020 Workpath</div>
        </div>
      </>
    );
  }
}

export default Hamburger;
