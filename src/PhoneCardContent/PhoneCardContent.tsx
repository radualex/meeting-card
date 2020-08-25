import React from "react";
import "./PhoneCardContent.css";

interface PhoneCardContentProps {
  title: String;
  content: String;
}

export default class PhoneCardContent extends React.Component<
  PhoneCardContentProps
> {
  render() {
    return (
      <div className="phoneCardContent-wrapper">
        <span className="title">{this.props.title}</span>
        <span className="content">{this.props.content}</span>
      </div>
    );
  }
}
