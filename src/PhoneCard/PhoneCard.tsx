import React from "react";
import "./PhoneCard.css";

import PhoneCardContent from "../PhoneCardContent/PhoneCardContent";

export default class PhoneCard extends React.Component {
  render() {
    return (
      <div className="phoneCard-wrapper">
        <PhoneCardContent
          title={"Dialing number"}
          content={"+47 22 56 44 74"}
        />
        <hr className="separator" />
        <PhoneCardContent title={"PIN code"} content={"447 586 ++"} />
      </div>
    );
  }
}
