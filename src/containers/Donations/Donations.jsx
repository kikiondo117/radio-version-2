import React from "react";
import { DonationsStyles } from "./Donations.styles";

function Donations() {
  return (
    <DonationsStyles>
      <div
        style={{
          backgroundColor: "yellow",
          color: "black",
          fontWeight: 800,
          padding: "1em",
        }}
      >
        Proximamente
      </div>
      <img
        style={{ width: 300 }}
        src="https://i.pinimg.com/originals/17/be/3b/17be3b00e9b41f69d1973ea10b3965a1.gif"
        alt="milhouse"
      />
    </DonationsStyles>
  );
}

export { Donations };
