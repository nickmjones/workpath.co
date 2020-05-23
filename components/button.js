import React from "react";
import button from "../styles/modules/button.module.scss";

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleButtonClick = () => {
    this.setState((state) => ({
      loading: true,
    }));
  };

  render() {
    if(this.state.loading === true) {
      return (
        <div onClick={this.handleButtonClick} className={button.loading}>
          Loading...
        </div>
      );
    } else {
      return (
        <div onClick={this.handleButtonClick} className={`${button[this.props.type]}`}>
          {this.props.text}
        </div>
      );
    }
  }

}

export default Button;
