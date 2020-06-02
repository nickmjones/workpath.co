import React from 'react';

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
          <img src="./images/close.svg" />
        </span>
      );
    } else {
      return (
        <span className="symbol" onClick={this.handleButtonClick}>
          <img src="./images/hamburger.svg" />
        </span>
      );
    }
  }
}

export default Hamburger;
