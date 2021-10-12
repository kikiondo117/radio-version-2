import styled from "@emotion/styled";
import { space } from "styled-system";
import { motion } from "framer-motion";

export const PatronStyles = styled(motion.div)(
  ({ theme }) => ({
    background: "rgba(0,0,0, .5)",
    color: theme.colors.white,
    height: "100%",

    display: "flex",
    flexDirection: "column",

    "& .Text": {
      paddingLeft: "1em",
      fontWeight: 600,
    },

    "& .Brands": {
      display: "flex",
      flexFlow: "column",
    },
  }),
  space
);
