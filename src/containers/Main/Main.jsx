import React from "react";
import { MainStyles } from "./Main.styles";
// * Components
import { Player } from "components/Player/Player";
import useWindowSize from "hooks/useWindowSize";
import { Programming } from "components/Programming/Programming";

function Main() {
  const { width } = useWindowSize();

  const playerDesktop = () => {
    return <Player />;
  };

  const playerMobile = () => {
    return (
      <React.Fragment>
        <div className="Mobile-box">
          <Player />
        </div>
      </React.Fragment>
    );
  };

  return (
    <MainStyles>
      <div className="Player-container">
        {width > 800 ? playerDesktop() : playerMobile()}
      </div>

      <div className="Schedule-container">
        <Programming />
      </div>
    </MainStyles>
  );
}

export { Main };
