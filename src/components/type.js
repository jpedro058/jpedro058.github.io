import React, { Component } from "react";
import "../styles/home.css";

class TypewritingAnimation extends Component {
  state = {
    text: "",
  };

  componentDidMount() {
    const { message, typingInterval } = this.props;
    let index = 0;

    const type = () => {
      this.setState({ text: message.slice(0, index) });
      if (index < message.length) {
        index++;
        setTimeout(type, typingInterval);
      } else {
        setTimeout(() => {
          index = 0;
          type();
        }, 2000);
      }
    };

    type();
  }

  render() {
    return (
      <div>
        <p className="typewriter">{this.state.text}</p>
      </div>
    );
  }
}

export default TypewritingAnimation;
