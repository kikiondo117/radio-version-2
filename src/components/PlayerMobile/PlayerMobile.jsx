import React from "react";
import { PlayerMobileStyles } from "./PlayerMobile.styles";
// * Hooks
import { useGlobalStore } from "store/Global.store";
// * Components
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";

function PlayerMobile() {
  const [state, dispatch] = useGlobalStore();

  return (
    <PlayerMobileStyles>
      {state.isPlay ? (
        <BsPauseCircle onClick={state.handlePause} className="Button-size" />
      ) : (
        <BsPlayCircle onClick={state.handlePlay} className="Button-size" />
      )}
    </PlayerMobileStyles>
  );
}

export { PlayerMobile };
