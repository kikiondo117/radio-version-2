import styled from "@emotion/styled";
import { motion } from "framer-motion";
export const ButtonVariant = {
  hidden: {
    scale: 0.5,
    rotate: 180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  hover: {
    scale: 1.2,
  },
  exit: {
    opacity: 0,
  },
};

export const PlayerStyles = styled(motion.div)(() => ({
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
