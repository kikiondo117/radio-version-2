import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";

export const ProgrammingVariants = {
  hidden: {
    y: "-150vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const ProgrammingStyles = styled(motion.div)((props) => ({
  fontWeight: 500,
  fontSize: 14,
  color: "white",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@media screen and (min-width: 500px)": {
    display: "flex",
    justifyContent: "center",
  },

  "& .Title-container": {
    display: "flex",
    alignItems: "center",
  },

  "& .Title": {
    ...props.theme.font.titleSans,
  },
  " & .Programa-horario": {
    color: "white",
    listStyle: "none",
  },
}));
