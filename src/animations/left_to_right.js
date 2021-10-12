export const left_to_right = {
  start: {
    x: -100,
    // scale: 0.5,
    // rotate: 180,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
    },
    // scale: 1,
    // rotate: 0,
    // transition: {
    //   type: "spring",
    //   stiffness: 300,
    // },
  },
  hover: {
    scale: 1.2,
  },
  exit: {
    opacity: 0,
  },
};

export const left_to_right2 = {
  start: {
    scale: 0.5,
    rotate: 180,
  },
  animate: {
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
