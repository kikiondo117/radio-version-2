import styled from "@emotion/styled";

export const PlayerStyles = styled.div(() => ({
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
