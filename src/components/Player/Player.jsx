import React from "react";
import { PlayerStyles } from "./Player.styles";
// * Components
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { usePlayer } from "hooks/usePlayer";
// src="https://stream.zeno.fm/9yuvagbx4s8uv.aac"
// src="https://radiochilanga.out.airtime.pro/radiochilanga_a"
// src="http://192.187.112.50:8072/stream"

function Player() {
  const audioRef = React.useRef(null);
  const { isPlay, handlePlay, handlePause } = usePlayer(audioRef);

  return (
    <PlayerStyles>
      <audio
        ref={audioRef}
        className="Player-button"
        src="https://stream5.mexiserver.com/proxy/radiochilanga/stream"
        autoPlay
        controls
      />

      {isPlay ? (
        <BsPauseCircle onClick={handlePause} className="Button-size" />
      ) : (
        <BsPlayCircle onClick={handlePlay} className="Button-size" />
      )}
    </PlayerStyles>
  );
}

export { Player };
