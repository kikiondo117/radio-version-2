import styled from "@emotion/styled";

export const PlayerMobileStyles = styled.div(() => ({
  alignItems: "center",
  color: "white",
  display: "flex",
  justifyContent: "space-around",

  height: "10vh",
  width: "100%",

  background: "rgba(0,0,0,0.9)",

  position: "fixed",
  bottom: 0,

  "& .Player-button": {
    display: "none",
  },
  "& .Button-size": {
    cursor: "pointer",
    fontSize: "2.5rem",
    "@media screen and (min-width: 800px)": {
      fontSize: "5rem",
    },
  },
}));
