import styled from "@emotion/styled";
import { space } from "styled-system";

export const HeaderStyles = styled.div(
  ({ theme }) => ({
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
      borderRadius: 100,
      padding: ".5em",
      color: theme.colors.black,
      fontWeight: 800,
      textDecoration: "none",
      cursor: "pointer",
      background: theme.colors.yellow,
      "&:hover": {
        background: theme.colors.main,
      },
    },
  }),
  space
);
