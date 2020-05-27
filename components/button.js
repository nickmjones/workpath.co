import React from "react";
import styles from "../styles/modules/button.module.scss";

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
        <div onClick={this.handleButtonClick} className={styles.loading}>
          Loading...
        </div>
      );
    } else {
      return (
        <div onClick={this.handleButtonClick} className={`${styles[this.props.type]}`}>
          {this.props.text}
        </div>
      );
    }
  }

}

export default Button;
