import React from "react";
import { MainStyles } from "./Main.styles";

// * Components
import { Player } from "components/Player/Player";
import useWindowSize from "hooks/useWindowSize";
import { Programming } from "components/Programming/Programming";

function Main() {
  const { width } = useWindowSize();

  return (
    <MainStyles>
      {width >= 800 ? (
        <div className="Player-container">
          <Player />
        </div>
      ) : null}

      <div className="Schedule-container">
        <Programming />
      </div>
    </MainStyles>
  );
}

export { Main };
