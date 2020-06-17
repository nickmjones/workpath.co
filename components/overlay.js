import React from "react";
import Link from "next/link";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayVisible: false,
      isSwitched: false,
    };
  }

  setOverlayVisibility = () => {
    this.setState({
      overlayVisible: !this.state.overlayVisible,
    });
  };

  toggleSwitchSymbol = () => {
    this.setState({
      isSwitched: !this.state.isSwitched,
    });
  };

  render() {
    return (
      <>
        <div onClick={this.setOverlayVisibility}>
          <div className={this.state.isSwitched ? "menutrigger menutrigger--close" : "menutrigger"} onClick={this.toggleSwitchSymbol}
            >
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </div>
        </div>
        <div
          className={
            this.state.overlayVisible ? "overlay overlay--visible" : "overlay"
          }
        >
          <ul className="overlay__links" onClick={this.toggleSwitchSymbol}>
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
            <li onClick={this.setOverlayVisibility}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li onClick={this.setOverlayVisibility}>
              <a href="https://app.workpath.co">Log In</a>
            </li>
            <li onClick={this.setOverlayVisibility}>
              <Link href="/demo">
                <a>Get a demo</a>
              </Link>
            </li>
          </ul>

          <ul className="overlay__actions"></ul>

          <div className="overlay__legal">Copyright &copy; 2020 Workpath</div>
        </div>
      </>
    );
  }
}

export default Hamburger;
