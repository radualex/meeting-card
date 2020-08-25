import React from "react";
import "./Card.css";

import PhoneCard from "../PhoneCard/PhoneCard";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card-wrapper">
        <h1 className="title">The meeting is ready</h1>
        <PhoneCard />
      </div>
    );
  }
}
