import styled from "@emotion/styled";
import { space } from "styled-system";

export const HeaderStyles = styled.div(
  () => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    top: 10,
    width: "100%",

    "@media screen and (min-width: 500px)": {
      top: 0,
      padding: ".5em",
    },

    "& .Menu-item": {
      color: "white",
      fontWeight: 800,
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        background: "red",
      },
    },
  }),
  space
);
