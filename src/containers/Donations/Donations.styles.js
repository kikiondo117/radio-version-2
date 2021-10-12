import styled from "@emotion/styled";
import { space } from "styled-system";

export const DonationsStyles = styled.div(
  ({ theme }) => ({
    background: "rgba(0,0,0, .5)",
    color: theme.colors.white,
    paddingTop: 100,
    height: "100%",

    display: "flex",
    flexDirection: "column",

    "& .Title": {
      padding: ".5em",
      fontWeight: 800,
      width: "fit-content",
      display: "inline-block",
      background: theme.colors.yellow,
      color: theme.colors.black,
    },

    "& .Text": {
      paddingLeft: "1em",
      fontWeight: 600,
    },

    "& .Brands": {},
  }),
  space
);
