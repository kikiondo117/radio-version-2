import styled from "@emotion/styled";
import { space } from "styled-system";
import { motion } from "framer-motion";

export const Title = styled(motion.div)(
  ({ theme }) => ({
    padding: ".5em",
    fontSize: "1.3em",
    fontWeight: 800,
    width: "fit-content",
    display: "inline-block",
    background: theme.colors.yellow,
    color: theme.colors.black,
    fontStyle: "italic",
  }),
  space
);
