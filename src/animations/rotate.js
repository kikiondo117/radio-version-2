export const rotate = {
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
