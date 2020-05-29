import React from "react";
import styles from "../styles/modules/hamburger.module.scss";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCloseButton: false,
    };
  }

  handleButtonClick = () => {
    this.setState((state) => ({
      isCloseButton: !this.state.isCloseButton,
    }));
  };

  render() {
    if (this.state.isCloseButton === true) {
      return (
        <span className="symbol" onClick={this.handleButtonClick}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.9706 19.799L6.40503e-05 2.82843L2.82849 0L19.7991 16.9706L16.9706 19.799Z"
              fill="#495057"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.04197e-05 16.9705L16.9706 -5.82584e-05L19.799 2.82837L2.82845 19.7989L2.04197e-05 16.9705Z"
              fill="#495057"
            />
          </svg>
        </span>
      );
    } else {
      return (
        <span className="symbol" onClick={this.handleButtonClick}>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.8 4H0V0H19.8V4Z"
              fill="#495057"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.8 11H0V7H19.8V11Z"
              fill="#495057"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.8 18H0V14H19.8V18Z"
              fill="#495057"
            />
          </svg>
        </span>
      );
    }
  }
}

export default Hamburger;
