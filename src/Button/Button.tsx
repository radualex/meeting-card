import React from "react";
import "./Button.css";

interface ButtonProps {
  color: string;
  contentColor: string;
  content: string;
  border?: string;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <div
        className="button-wrapper"
        style={{ background: this.props.color, border: this.props.border }}
      >
        <span className="content" style={{ color: this.props.contentColor }}>
          {this.props.content}
        </span>
      </div>
    );
  }
}
