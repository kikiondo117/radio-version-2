import styled from "@emotion/styled/macro";

export const MainStyles = styled.div(({ theme }) => ({
  display: "grid",
  height: "100%",

  "@media screen and (min-width: 800px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "& .Player-container": {
    color: "white",
    display: "flex",
    justifyContent: "space-around",

    height: "10vh",
    width: "100%",

    background: "rgba(0,0,0,0.7)",

    position: "fixed",
    bottom: 0,

    "@media screen and (min-width: 800px)": {
      position: "initial",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      background: "none",
    },
  },

  "& .Schedule-container": {
    background: "rgba(0,0,0,.8)",
    paddingTop: "150px",
    order: 1,
    "@media screen and (min-width: 800px)": {
      paddingTop: "0",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  "& .Mobile-box": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  "& .Contact-number": {
    fontWeight: 800,
    color: theme.colors.main,
  },
}));
