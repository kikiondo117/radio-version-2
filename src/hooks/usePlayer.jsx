import React from "react";

function usePlayer(audioRef) {
  const [isPlay, setIsPlay] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(false);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlay(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlay(false);
  };

  const handleMute = () => {
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return { isPlay, isMuted, handlePlay, handlePause, handleMute };
}

export { usePlayer };
