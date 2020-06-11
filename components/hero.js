import React, { Component } from "react";
import Link from "next/link";
import Button from "./button";

class Hero extends Component {

  render() {
    return (
      <header className="hero">
        <div className="caption">
          <p className="large color-quartz">{this.props.section}</p>
          <h3>{this.props.headline}</h3>
          <h5>{this.props.subhed}</h5>
        </div>
        <div className="image">
          <img src={"/" + this.props.image} />
        </div>
      </header>
    );
  }
}

export default Hero;
