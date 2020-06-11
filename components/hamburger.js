import React from "react";
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
              : "overlay overlay--hidden"
          }
        >
          <ul className="overlay__links">
            <li>Platform</li>
            <li>Case Studies</li>
            <li>Company</li>
            <li>Blog</li>
            <li>Log In</li>
            <li>Get a demo</li>
          </ul>

          <ul className="overlay__actions">
            <li className="spaced" onClick={this.setOverlayVisibility}>{times}</li>
            <li>{linkedin}</li>
            <li>{twitter}</li>
          </ul>

          <div className="overlay__legal">
            Copyright &copy; 2020 Workpath
          </div>
        </div>
      </>
    );
  }
}

export default Hamburger;
