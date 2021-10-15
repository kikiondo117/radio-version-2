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
        <span style={{ marginTop: 30 }}>Numero para mandar saludos:</span>
        <span className="Contact-number">+52 55 8795 2622</span>
      </div>
    </MainStyles>
  );
}

export { Main };
