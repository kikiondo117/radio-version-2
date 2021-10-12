import React from "react";
import { ButtonVariant, PlayerStyles } from "./Player.styles";
// * Components
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { useGlobalStore } from "store/Global.store";

function Player() {
  const [state, dispatch] = useGlobalStore();

  return (
    <PlayerStyles
      variants={ButtonVariant}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {state.isPlay ? (
        <BsPauseCircle onClick={state.handlePause} className="Button-size" />
      ) : (
        <BsPlayCircle onClick={state.handlePlay} className="Button-size" />
      )}
    </PlayerStyles>
  );
}

export { Player };
