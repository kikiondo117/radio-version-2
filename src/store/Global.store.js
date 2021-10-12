import React from "react";
import { usePlayer } from "hooks/usePlayer";

const GlobalContext = React.createContext({});
GlobalContext.displayName = "GlobalContext";

const initialState = {
  play: false,
};

export function GlobalProvider({ children }) {
  const audioRef = React.useRef(null);
  const { isPlay, handlePlay, handlePause } = usePlayer(audioRef);
  const [state, dispatch] = React.useReducer(() => {}, initialState);

  const value = [{ ...state, isPlay, handlePlay, handlePause }, dispatch];

  // src="https://stream.zeno.fm/9yuvagbx4s8uv.aac"
  // src="https://radiochilanga.out.airtime.pro/radiochilanga_a"
  // src="http://192.187.112.50:8072/stream"

  return (
    <GlobalContext.Provider value={value}>
      <audio
        ref={audioRef}
        style={{ display: "none" }}
        src="https://stream5.mexiserver.com/proxy/radiochilanga/stream"
        controls
      />

      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalStore() {
  const context = React.useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("Necesitas tene rel provider");
  }

  return context;
}
