import styled from "@emotion/styled";

export const PlayerStyles = styled.div(() => ({
  "& .Player-button": {
    display: "none",
  },
  "& .Button-size": {
    cursor: "pointer",
    fontSize: "2rem",
    "@media screen and (min-width: 500px)": {
      fontSize: "5rem",
    },
  },
}));
