import React from "react";
import "./Card.css";

import PhoneCard from "../PhoneCard/PhoneCard";
import Button from "../Button/Button";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card-wrapper">
        <h1 className="title">The meeting is ready</h1>
        <PhoneCard />
        <span className="more">More phone numbers</span>
        <div className="buttons-wrapper">
          <Button
            content={"Join now"}
            color={"#FFFFFF"}
            contentColor={"#394158"}
          />
          <Button
            content={"Cancel"}
            color={"#2F59DC"}
            contentColor={"#FFFFFF"}
            border={"1px solid #4D74EE"}
          />
        </div>
      </div>
    );
  }
}
